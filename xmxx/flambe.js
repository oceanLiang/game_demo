var flambe = {
	FLASH_VERSION: "11"
};
flambe.embed = function(e, t) {
	"string" == typeof e && (e = [e + "-flash.swf", e + "-html.js"]);
	var n = document.getElementById(t);
	
	
	
	if (null == n) throw Error("Could not find element [id=" + t + "]");
	
	
	
	for (var r = {}, i = window.location.search.substr(1).split("&"), s = 0; s < i.length; ++s) {
		var o = i[s].split("=");
		r[unescape(o[0])] = 1 < o.length ? unescape(o[1]) : null
	}
	i = r.flambe;
	for (s = 0; s < e.length; ++s) switch (r = e[s], (o = r.match(/\.(\w+)(\?|$)/)) && (o = o[1].toLowerCase()), o) {
	case "swf":
		if ((null == i || "flash" == i) && swfobject.hasFlashPlayerVersion(flambe.FLASH_VERSION)) return s = document.createElement("div"), s.id = t + "-swf", n.appendChild(s), "undefined" == typeof $flambe_expose && (window.$flambe_expose = function(e, t) {
			window[e] = null != t ?
			function() {
				var n = document.getElementById(t);
				n[e].apply(n, arguments)
			} : null
		}), swfobject.embedSWF(r, s.id, "100%", "100%", flambe.FLASH_VERSION, null, {}, {
			allowScriptAccess: "always",
			allowFullScreen: "true",
			fullscreenOnSelection: "true",
			wmode: "direct"
		}, {
			id: s.id,
			name: s.id
		}), !0;
		break;
	case "js":
		 
		if (null == i || "html" == i) if (o = document.createElement("canvas"), "getContext" in o) return o.id = t + "-canvas", n.appendChild(o), flambe.canvas = o, s = document.createElement("script"), s.onload = function() {
			flambe.canvas = null;
			
		},s.src = r, n.appendChild(s), !0;
		
		
		break;
	default:
		throw Error("Don't know how to embed [url=" + r + "]")
	}
	return !1
};
var swfobject = function() {
		function e() {
			if (!P) {
				try {
					var e = x.getElementsByTagName("body")[0].appendChild(x.createElement("span"));
					e.parentNode.removeChild(e)
				} catch (t) {
					return
				}
				P = !0;
				for (var e = C.length, n = 0; n < e; n++) C[n]()
			}
		}
		function t(e) {
			P ? e() : C[C.length] = e
		}
		function n(e) {
			if (typeof S.addEventListener != y) S.addEventListener("load", e, !1);
			else if (typeof x.addEventListener != y) x.addEventListener("load", e, !1);
			else if (typeof S.attachEvent != y) p(S, "onload", e);
			else if ("function" == typeof S.onload) {
				var t = S.onload;
				S.onload = function() {
					t();
					e()
				}
			} else S.onload = e
		}
		function r() {
			var e = x.getElementsByTagName("body")[0],
				t = x.createElement(b);
			t.setAttribute("type", w);
			var n = e.appendChild(t);
			if (n) {
				var r = 0;
				(function() {
					if (typeof n.GetVariable != y) {
						var s = n.GetVariable("$version");
						s && (s = s.split(" ")[1].split(","), I.pv = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)])
					} else if (10 > r) {
						r++;
						setTimeout(arguments.callee, 10);
						return
					}
					e.removeChild(t);
					n = null;
					i()
				})()
			} else i()
		}
		function i() {
			var e = k.length;
			if (0 < e) for (var t = 0; t < e; t++) {
				var n = k[t].id,
					r = k[t].callbackFn,
					i = {
						success: !1,
						id: n
					};
				if (0 < I.pv[0]) {
					var f = h(n);
					if (f) if (d(k[t].swfVersion) && !(I.wk && 312 > I.wk)) m(n, !0), r && (i.success = !0, i.ref = s(n), r(i));
					else if (k[t].expressInstall && o()) {
						i = {};
						i.data = k[t].expressInstall;
						i.width = f.getAttribute("width") || "0";
						i.height = f.getAttribute("height") || "0";
						f.getAttribute("class") && (i.styleclass = f.getAttribute("class"));
						f.getAttribute("align") && (i.align = f.getAttribute("align"));
						for (var l = {}, f = f.getElementsByTagName("param"), c = f.length, p = 0; p < c; p++)"movie" != f[p].getAttribute("name").toLowerCase() && (l[f[p].getAttribute("name")] = f[p].getAttribute("value"));
						u(i, l, n, r)
					} else a(f), r && r(i)
				} else if (m(n, !0), r) {
					if ((n = s(n)) && typeof n.SetVariable != y) i.success = !0, i.ref = n;
					r(i)
				}
			}
		}
		function s(e) {
			var t = null;
			if ((e = h(e)) && "OBJECT" == e.nodeName) typeof e.SetVariable != y ? t = e : (e = e.getElementsByTagName(b)[0]) && (t = e);
			return t
		}
		function o() {
			return !H && d("6.0.65") && (I.win || I.mac) && !(I.wk && 312 > I.wk)
		}
		function u(e, t, n, r) {
			H = !0;
			_ = r || null;
			D = {
				success: !1,
				id: n
			};
			var i = h(n);
			if (i) {
				"OBJECT" == i.nodeName ? (O = f(i), M = null) : (O = i, M = n);
				e.id = E;
				if (typeof e.width == y || !/%$/.test(e.width) && 310 > parseInt(e.width, 10)) e.width = "310";
				if (typeof e.height == y || !/%$/.test(e.height) && 137 > parseInt(e.height, 10)) e.height = "137";
				x.title = x.title.slice(0, 47) + " - Flash Player Installation";
				r = I.ie && I.win ? "ActiveX" : "PlugIn";
				r = "MMredirectURL=" + S.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + r + "&MMdoctitle=" + x.title;
				t.flashvars = typeof t.flashvars != y ? t.flashvars + ("&" + r) : r;
				I.ie && I.win && 4 != i.readyState && (r = x.createElement("div"), n += "SWFObjectNew", r.setAttribute("id", n), i.parentNode.insertBefore(r, i), i.style.display = "none", function() {
					4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
				}());
				l(e, t, n)
			}
		}
		function a(e) {
			if (I.ie && I.win && 4 != e.readyState) {
				var t = x.createElement("div");
				e.parentNode.insertBefore(t, e);
				t.parentNode.replaceChild(f(e), t);
				e.style.display = "none";
				(function() {
					4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
				})()
			} else e.parentNode.replaceChild(f(e), e)
		}
		function f(e) {
			var t = x.createElement("div");
			if (I.win && I.ie) t.innerHTML = e.innerHTML;
			else if (e = e.getElementsByTagName(b)[0]) if (e = e.childNodes) for (var n = e.length, r = 0; r < n; r++)!(1 == e[r].nodeType && "PARAM" == e[r].nodeName) && 8 != e[r].nodeType && t.appendChild(e[r].cloneNode(!0));
			return t
		}
		function l(e, t, n) {
			var r, i = h(n);
			if (I.wk && 312 > I.wk) return r;
			if (i) if (typeof e.id == y && (e.id = n), I.ie && I.win) {
				var s = "",
					o;
				for (o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? s += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (s += " " + o + '="' + e[o] + '"'));
				o = "";
				for (var u in t) t[u] != Object.prototype[u] && (o += '<param name="' + u + '" value="' + t[u] + '" />');
				i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + o + "</object>";
				L[L.length] = e.id;
				r = h(e.id)
			} else {
				u = x.createElement(b);
				u.setAttribute("type", w);
				for (var a in e) e[a] != Object.prototype[a] && ("styleclass" == a.toLowerCase() ? u.setAttribute("class", e[a]) : "classid" != a.toLowerCase() && u.setAttribute(a, e[a]));
				for (s in t) t[s] != Object.prototype[s] && "movie" != s.toLowerCase() && (e = u, o = s, a = t[s], n = x.createElement("param"), n.setAttribute("name", o), n.setAttribute("value", a), e.appendChild(n));
				i.parentNode.replaceChild(u, i);
				r = u
			}
			return r
		}
		function c(e) {
			var t = h(e);
			t && "OBJECT" == t.nodeName && (I.ie && I.win ? (t.style.display = "none", function() {
				if (4 == t.readyState) {
					var n = h(e);
					if (n) {
						for (var r in n)"function" == typeof n[r] && (n[r] = null);
						n.parentNode.removeChild(n)
					}
				} else setTimeout(arguments.callee, 10)
			}()) : t.parentNode.removeChild(t))
		}
		function h(e) {
			var t = null;
			try {
				t = x.getElementById(e)
			} catch (n) {}
			return t
		}
		function p(e, t, n) {
			e.attachEvent(t, n);
			A[A.length] = [e, t, n]
		}
		function d(e) {
			var t = I.pv,
				e = e.split(".");
			e[0] = parseInt(e[0], 10);
			e[1] = parseInt(e[1], 10) || 0;
			e[2] = parseInt(e[2], 10) || 0;
			return t[0] > e[0] || t[0] == e[0] && t[1] > e[1] || t[0] == e[0] && t[1] == e[1] && t[2] >= e[2] ? !0 : !1
		}
		function v(e, t, n, r) {
			if (!I.ie || !I.mac) {
				var i = x.getElementsByTagName("head")[0];
				if (i) {
					n = n && "string" == typeof n ? n : "screen";
					r && (j = B = null);
					if (!B || j != n) r = x.createElement("style"), r.setAttribute("type", "text/css"), r.setAttribute("media", n), B = i.appendChild(r), I.ie && I.win && typeof x.styleSheets != y && 0 < x.styleSheets.length && (B = x.styleSheets[x.styleSheets.length - 1]), j = n;
					I.ie && I.win ? B && typeof B.addRule == b && B.addRule(e, t) : B && typeof x.createTextNode != y && B.appendChild(x.createTextNode(e + " {" + t + "}"))
				}
			}
		}
		function m(e, t) {
			if (F) {
				var n = t ? "visible" : "hidden";
				P && h(e) ? h(e).style.visibility = n : v("#" + e, "visibility:" + n)
			}
		}
		function g(e) {
			return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != y ? encodeURIComponent(e) : e
		}
		var y = "undefined",
			b = "object",
			w = "application/x-shockwave-flash",
			E = "SWFObjectExprInst",
			S = window,
			x = document,
			T = navigator,
			N = !1,
			C = [function() {
				N ? r() : i()
			}],
			k = [],
			L = [],
			A = [],
			O, M, _, D, P = !1,
			H = !1,
			B, j, F = !0,
			I = function() {
				var e = typeof x.getElementById != y && typeof x.getElementsByTagName != y && typeof x.createElement != y,
					t = T.userAgent.toLowerCase(),
					n = T.platform.toLowerCase(),
					r = n ? /win/.test(n) : /win/.test(t),
					n = n ? /mac/.test(n) : /mac/.test(t),
					t = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
					i = !+"1",
					s = [0, 0, 0],
					o = null;
				if (typeof T.plugins != y && typeof T.plugins["Shockwave Flash"] == b) {
					if ((o = T.plugins["Shockwave Flash"].description) && !(typeof T.mimeTypes != y && T.mimeTypes[w] && !T.mimeTypes[w].enabledPlugin)) N = !0, i = !1, o = o.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = parseInt(o.replace(/^(.*)\..*$/, "$1"), 10), s[1] = parseInt(o.replace(/^.*\.(.*)\s.*$/, "$1"), 10), s[2] = /[a-zA-Z]/.test(o) ? parseInt(o.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
				} else if (typeof S.ActiveXObject != y) try {
					var u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					if (u && (o = u.GetVariable("$version"))) i = !0, o = o.split(" ")[1].split(","), s = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)]
				} catch (a) {}
				return {
					w3: e,
					pv: s,
					wk: t,
					ie: i,
					win: r,
					mac: n
				}
			}();
		(function() {
			I.w3 && ((typeof x.readyState != y && "complete" == x.readyState || typeof x.readyState == y && (x.getElementsByTagName("body")[0] || x.body)) && e(), P || (typeof x.addEventListener != y && x.addEventListener("DOMContentLoaded", e, !1), I.ie && I.win && (x.attachEvent("onreadystatechange", function() {
				"complete" == x.readyState && (x.detachEvent("onreadystatechange", arguments.callee), e())
			}), S == top &&
			function() {
				if (!P) {
					try {
						x.documentElement.doScroll("left")
					} catch (t) {
						setTimeout(arguments.callee, 0);
						return
					}
					e()
				}
			}()), I.wk &&
			function() {
				P || (/loaded|complete/.test(x.readyState) ? e() : setTimeout(arguments.callee, 0))
			}(), n(e)))
		})();
		(function() {
			I.ie && I.win && window.attachEvent("onunload", function() {
				for (var e = A.length, t = 0; t < e; t++) A[t][0].detachEvent(A[t][1], A[t][2]);
				e = L.length;
				for (t = 0; t < e; t++) c(L[t]);
				for (var n in I) I[n] = null;
				I = null;
				for (var r in swfobject) swfobject[r] = null;
				swfobject = null
			})
		})();
		return {
			registerObject: function(e, t, n, r) {
				if (I.w3 && e && t) {
					var i = {};
					i.id = e;
					i.swfVersion = t;
					i.expressInstall = n;
					i.callbackFn = r;
					k[k.length] = i;
					m(e, !1)
				} else r && r({
					success: !1,
					id: e
				})
			},
			getObjectById: function(e) {
				if (I.w3) return s(e)
			},
			embedSWF: function(e, n, r, i, s, a, f, c, h, p) {
				var v = {
					success: !1,
					id: n
				};
				I.w3 && !(I.wk && 312 > I.wk) && e && n && r && i && s ? (m(n, !1), t(function() {
					r += "";
					i += "";
					var t = {};
					if (h && typeof h === b) for (var g in h) t[g] = h[g];
					t.data = e;
					t.width = r;
					t.height = i;
					g = {};
					if (c && typeof c === b) for (var w in c) g[w] = c[w];
					if (f && typeof f === b) for (var E in f) g.flashvars = typeof g.flashvars != y ? g.flashvars + ("&" + E + "=" + f[E]) : E + "=" + f[E];
					if (d(s)) w = l(t, g, n), t.id == n && m(n, !0), v.success = !0, v.ref = w;
					else {
						if (a && o()) {
							t.data = a;
							u(t, g, n, p);
							return
						}
						m(n, !0)
					}
					p && p(v)
				})) : p && p(v)
			},
			switchOffAutoHideShow: function() {
				F = !1
			},
			ua: I,
			getFlashPlayerVersion: function() {
				return {
					major: I.pv[0],
					minor: I.pv[1],
					release: I.pv[2]
				}
			},
			hasFlashPlayerVersion: d,
			createSWF: function(e, t, n) {
				if (I.w3) return l(e, t, n)
			},
			showExpressInstall: function(e, t, n, r) {
				I.w3 && o() && u(e, t, n, r)
			},
			removeSWF: function(e) {
				I.w3 && c(e)
			},
			createCSS: function(e, t, n, r) {
				I.w3 && v(e, t, n, r)
			},
			addDomLoadEvent: t,
			addLoadEvent: n,
			getQueryParamValue: function(e) {
				var t = x.location.search || x.location.hash;
				if (t) {
					/ \ ? /.test(t) && (t = t.split("?")[1]);
					if (null == e) return g(t);
					for (var t = t.split("&"), n = 0; n < t.length; n++) if (t[n].substring(0, t[n].indexOf("=")) == e) return g(t[n].substring(t[n].indexOf("=") + 1))
				}
				return ""
			},
			expressInstallCallback: function() {
				if (H) {
					var e = h(E);
					e && O && (e.parentNode.replaceChild(O, e), M && (m(M, !0), I.ie && I.win && (O.style.display = "block")), _ && _(D));
					H = !1
				}
			}
		}
	}()