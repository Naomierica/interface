// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "9",

      macros: [
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_eventName: "Click_CTA",
          vtp_measurementId: "none",
          vtp_measurementIdOverride: "G-VPVS1YPDR4",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: false,
          vtp_enableEuid: false,
          tag_id: 3,
        },
        {
          function: "__gaawc",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendPageView: true,
          vtp_measurementId: "G-VPVS1YPDR4",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettings: false,
          vtp_enableEuid: false,
          tag_id: 6,
        },
        { function: "__cl", tag_id: 7 },
      ],
      predicates: [
        { function: "_cn", arg0: ["macro", 0], arg1: "cta" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.click" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.js" },
      ],
      rules: [
        [
          ["if", 0, 1],
          ["add", 0],
        ],
        [
          ["if", 2],
          ["add", 1, 2],
        ],
      ],
    },
    runtime: [],
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: da(a) };
    },
    fa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ha;
  if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
  else {
    var ia;
    a: {
      var ja = { a: !0 },
        ka = {};
      try {
        ka.__proto__ = ja;
        ia = ka.a;
        break a;
      } catch (a) {}
      ia = !1;
    }
    ha = ia
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var la = ha,
    ma = function (a, b) {
      a.prototype = fa(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.oj = b.prototype;
    },
    oa = this || self,
    qa = function (a) {
      return a;
    };
  var ra = {},
    sa = function (a, b) {
      ra[a] = ra[a] || [];
      ra[a][b] = !0;
    },
    ta = function (a) {
      for (var b = [], c = ra[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    };
  var ua = function () {},
    va = function (a) {
      return "function" == typeof a;
    },
    g = function (a) {
      return "string" == typeof a;
    },
    wa = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    xa = function (a) {
      var b = "[object Array]" == Object.prototype.toString.call(Object(a));
      Array.isArray
        ? Array.isArray(a) !== b && sa("TAGGING", 4)
        : sa("TAGGING", 5);
      return b;
    },
    ya = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    Ba = function (a, b) {
      if (a && xa(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ca = function (a, b) {
      if (!wa(a) || !wa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ha = function (a, b) {
      for (var c = new Fa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ja = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ("[object Arguments]" == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (xa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Qa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ra = function () {
      return new Date(Date.now());
    },
    Sa = function () {
      return Ra().getTime();
    },
    Fa = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Fa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Fa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ta = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ua = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Va = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Za = /^\w{1,9}$/,
    $a = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ja(a, function (d, e) {
        Za.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var ab,
    bb = function () {
      if (void 0 === ab) {
        var a = null,
          b = oa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: qa,
              createScript: qa,
              createScriptURL: qa,
            });
          } catch (c) {
            oa.console && oa.console.error(c.message);
          }
          ab = a;
        } else ab = a;
      }
      return ab;
    };
  var db = function (a, b) {
    this.o = b === cb ? a : "";
  };
  db.prototype.toString = function () {
    return this.o + "";
  };
  var cb = {};
  var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var jb;
  a: {
    var kb = oa.navigator;
    if (kb) {
      var lb = kb.userAgent;
      if (lb) {
        jb = lb;
        break a;
      }
    }
    jb = "";
  }
  var mb = function (a) {
    return -1 != jb.indexOf(a);
  };
  var nb = {},
    rb = function (a, b, c) {
      this.o = c === nb ? a : "";
    };
  rb.prototype.toString = function () {
    return this.o.toString();
  };
  var sb = function (a) {
      return a instanceof rb && a.constructor === rb
        ? a.o
        : "type_error:SafeHtml";
    },
    tb = function (a) {
      var b = bb(),
        c = b ? b.createHTML(a) : a;
      return new rb(c, null, nb);
    },
    ub = new rb((oa.trustedTypes && oa.trustedTypes.emptyHTML) || "", 0, nb);
  var vb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    wb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var xb = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      var c = a.firstChild.firstChild;
      a.innerHTML = sb(ub);
      return !c.parentElement;
    }),
    yb = function (a, b) {
      if (xb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = sb(b);
    };
  var m = window,
    A = document,
    zb = navigator,
    Ab = A.currentScript && A.currentScript.src,
    Bb = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Cb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Db = function (a, b, c) {
      var d = A.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      var e,
        f = bb(),
        h = f ? f.createScriptURL(a) : a;
      e = new db(h, cb);
      d.src =
        e instanceof db && e.constructor === db
          ? e.o
          : "type_error:TrustedResourceUrl";
      var k,
        l,
        n = ((d.ownerDocument && d.ownerDocument.defaultView) || window)
          .document,
        p =
          null === (l = n.querySelector) || void 0 === l
            ? void 0
            : l.call(n, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        d.setAttribute("nonce", k);
      Cb(d, b);
      c && (d.onerror = c);
      var q = A.getElementsByTagName("script")[0] || A.body || A.head;
      q.parentNode.insertBefore(d, q);
      return d;
    },
    Eb = function () {
      if (Ab) {
        var a = Ab.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Fb = function (a, b) {
      var c = A.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (A.body && A.body.lastChild) || A.body || A.head;
      d.parentNode.insertBefore(c, d);
      Cb(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    Gb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Kb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Lb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    F = function (a) {
      m.setTimeout(a, 0);
    },
    Mb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Nb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Ob = function (a) {
      var b = A.createElement("div"),
        c = tb("A<div>" + a + "</div>");
      yb(b, c);
      b = b.lastChild;
      for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
      return d;
    },
    Pb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Qb = function (a) {
      (zb.sendBeacon && zb.sendBeacon(a)) || Gb(a);
    },
    Rb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Sb = function (a) {
      var b = A.featurePolicy;
      return b && va(b.features) ? -1 !== b.features().indexOf(a) : !1;
    }; /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Wb = function (a) {
      if (null == a) return String(a);
      var b = Vb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Xb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Yb = function (a) {
      if (!a || "object" != Wb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Xb(a, "constructor") &&
          !Xb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Xb(a, b);
    },
    H = function (a, b) {
      var c = b || ("array" == Wb(a) ? [] : {}),
        d;
      for (d in a)
        if (Xb(a, d)) {
          var e = a[d];
          "array" == Wb(e)
            ? ("array" != Wb(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
            : Yb(e)
            ? (Yb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Zb = function (a) {
    if (void 0 === a || xa(a) || Yb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var $b = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Og: a("consent"),
      Pg: a("consent_always_fire"),
      We: a("convert_case_to"),
      Xe: a("convert_false_to"),
      Ye: a("convert_null_to"),
      Ze: a("convert_true_to"),
      $e: a("convert_undefined_to"),
      Yi: a("debug_mode_metadata"),
      lb: a("function"),
      Ch: a("instance_name"),
      Eh: a("live_only"),
      Fh: a("malware_disabled"),
      Gh: a("metadata"),
      aj: a("original_activity_id"),
      bj: a("original_vendor_template_id"),
      Ih: a("once_per_event"),
      Cf: a("once_per_load"),
      dj: a("priority_override"),
      ej: a("respected_consent_types"),
      Gf: a("setup_tags"),
      Hf: a("tag_id"),
      If: a("teardown_tags"),
    };
  })();
  var xc;
  var yc = [],
    zc = [],
    Hc = [],
    Ic = [],
    Jc = [],
    Kc = {},
    Lc,
    Mc,
    Nc,
    Oc = function (a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = Kc[c],
        e = {},
        f;
      for (f in a)
        if (a.hasOwnProperty(f))
          if (0 === f.indexOf("vtp_"))
            d && b && b.Tf && b.Tf(a[f]),
              (e[void 0 !== d ? f : f.substr(4)] = a[f]);
          else if (f === $b.Pg.toString() && a[f]) {
          }
      d && b && b.Sf && (e.vtp_gtmCachedValues = b.Sf);
      return void 0 !== d ? d(e) : xc(c, e, b);
    },
    Qc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Pc(a[e], b, c));
      return d;
    },
    Pc = function (a, b, c) {
      if (xa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Pc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = yc[f];
            if (!h || b.Be(h)) return;
            c[f] = !0;
            try {
              var k = Qc(h, b, c);
              k.vtp_gtmEventId = b.id;
              d = Oc(k, b);
              Nc && (d = Nc.Xh(d, k));
            } catch (y) {
              b.lg && b.lg(y, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[Pc(a[l], b, c)] = Pc(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = Pc(a[p], b, c);
              Mc && (n = n || q === Mc.Vc);
              d.push(q);
            }
            return Mc && n ? Mc.$h(d) : d.join("");
          case "escape":
            d = Pc(a[1], b, c);
            if (Mc && xa(a[1]) && "macro" === a[1][0] && Mc.si(a))
              return Mc.Hi(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) ac[a[r]] && (d = ac[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Ic[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { bg: a[2], index: u });
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t["function"] = a[1];
            var v = Rc(t, b, c),
              x = !!a[4];
            return x || 2 !== v ? x !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Rc = function (a, b, c) {
      try {
        return Lc(Qc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Uc = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Sc(a), f = 0; f < zc.length; f++) {
        var h = zc[f],
          k = Tc(h, e);
        if (k) {
          for (var l = h.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(h.block || []);
        } else null === k && b(h.block || []);
      }
      for (var p = [], q = 0; q < Ic.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Tc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var k = b(f[h]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    Sc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Rc(Hc[c], a));
        return b[c];
      };
    };
  var Vc = {
    Xh: function (a, b) {
      b[$b.We] &&
        "string" === typeof a &&
        (a = 1 == b[$b.We] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty($b.Ye) && null === a && (a = b[$b.Ye]);
      b.hasOwnProperty($b.$e) && void 0 === a && (a = b[$b.$e]);
      b.hasOwnProperty($b.Ze) && !0 === a && (a = b[$b.Ze]);
      b.hasOwnProperty($b.Xe) && !1 === a && (a = b[$b.Xe]);
      return a;
    },
  };
  var K = {
    ac: "_ee",
    ad: "_syn_or_mod",
    fj: "_uei",
    Vd: "_eu",
    cj: "_pci",
    zb: "event_callback",
    Kc: "event_timeout",
    Da: "gtag.config",
    La: "gtag.get",
    xa: "purchase",
    xb: "refund",
    cb: "begin_checkout",
    ub: "add_to_cart",
    vb: "remove_from_cart",
    Yg: "view_cart",
    bf: "add_to_wishlist",
    Ka: "view_item",
    Rb: "view_promotion",
    Gc: "select_promotion",
    zd: "select_item",
    wb: "view_item_list",
    af: "add_payment_info",
    Xg: "add_shipping_info",
    Na: "value_key",
    Va: "value_callback",
    Ea: "allow_ad_personalization_signals",
    Xb: "restricted_data_processing",
    Sb: "allow_google_signals",
    Ha: "cookie_expires",
    Tb: "cookie_update",
    Zb: "session_duration",
    Pc: "session_engaged_time",
    Pa: "user_properties",
    oa: "transport_url",
    R: "ads_data_redaction",
    ya: "user_data",
    Ub: "first_party_collection",
    D: "ad_storage",
    H: "analytics_storage",
    Ue: "region",
    Ve: "wait_for_update",
    Ga: "conversion_linker",
    Fa: "conversion_cookie_prefix",
    fa: "value",
    da: "currency",
    wf: "trip_type",
    X: "items",
    pf: "passengers",
    Bd: "allow_custom_scripts",
    Db: "session_id",
    uf: "quantity",
    kb: "transaction_id",
    ib: "language",
    Jc: "country",
    Hc: "allow_enhanced_conversions",
    Gd: "aw_merchant_id",
    Ed: "aw_feed_country",
    Fd: "aw_feed_language",
    Dd: "discount",
    ma: "developer_id",
    Rc: "delivery_postal_code",
    Md: "estimated_delivery_date",
    Kd: "shipping",
    Td: "new_customer",
    Hd: "customer_lifetime_value",
    Ld: "enhanced_conversions",
    yb: "page_view",
    na: "linker",
    P: "domains",
    Bb: "decorate_forms",
    lf: "enhanced_conversions_automatic_settings",
    hh: "auto_detection_enabled",
  };
  K.zf = [
    K.xa,
    K.xb,
    K.cb,
    K.ub,
    K.vb,
    K.Yg,
    K.bf,
    K.Ka,
    K.Rb,
    K.Gc,
    K.wb,
    K.zd,
    K.af,
    K.Xg,
  ];
  K.yf = [K.Ea, K.Sb, K.Tb];
  K.Af = [K.Ha, K.Kc, K.Zb, K.Pc];
  var ud = function (a) {
    sa("GTM", a);
  };
  var vd = function (a, b) {
    this.o = a;
    this.defaultValue = void 0 === b ? !1 : b;
  };
  var wd = new vd(1936, !0),
    xd = new vd(1933);
  var zd = function () {
    var a = yd;
    if (a.ze && a.hasOwnProperty("ze")) return a.ze;
    var b = new a();
    return (a.ze = b);
  };
  var yd = function () {
      var a = {};
      this.o = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.s = function () {
        a[xd.o] = !0;
      };
    },
    Ad = function (a) {
      return zd().o(a.o, a.defaultValue);
    };
  var Hd = [];
  function Id() {
    var a = Bb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Jd,
        update: Kd,
        addListener: Ld,
        notifyListeners: Md,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }
  function Jd(a, b, c, d, e, f) {
    var h = Id();
    h.active = !0;
    h.usedDefault = !0;
    if (void 0 != b) {
      var k = h.entries,
        l = k[a] || {},
        n = l.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) k[a] = r;
        q &&
          m.setTimeout(function () {
            k[a] === r &&
              r.quiet &&
              ((r.quiet = !1), Nd(a), Md(), sa("TAGGING", 2));
          }, f);
      }
    }
  }
  function Kd(a, b) {
    var c = Id();
    c.active = !0;
    if (void 0 != b) {
      var d = Od(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var h = Od(a);
      f.quiet ? ((f.quiet = !1), Nd(a)) : h !== d && Nd(a);
    }
  }
  function Ld(a, b) {
    Hd.push({ ne: a, hi: b });
  }
  function Nd(a) {
    for (var b = 0; b < Hd.length; ++b) {
      var c = Hd[b];
      xa(c.ne) && -1 !== c.ne.indexOf(a) && (c.pg = !0);
    }
  }
  function Md(a) {
    for (var b = 0; b < Hd.length; ++b) {
      var c = Hd[b];
      if (c.pg) {
        c.pg = !1;
        try {
          c.hi({ Wh: a });
        } catch (d) {}
      }
    }
  }
  var Od = function (a) {
      var b = Id().entries[a] || {};
      return void 0 !== b.update ? b.update : b.initial;
    },
    Pd = function (a) {
      return (Id().entries[a] || {}).initial;
    },
    Qd = function (a) {
      return !(Id().entries[a] || {}).quiet;
    },
    Rd = function () {
      return Ad(xd) ? Id().active : !1;
    },
    Sd = function () {
      return Id().usedDefault;
    },
    Td = function (a, b) {
      Id().addListener(a, b);
    },
    Ud = function (a) {
      Id().notifyListeners(a);
    },
    Vd = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Qd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Td(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Wd = function (a, b) {
      function c() {
        for (var f = [], h = 0; h < d.length; h++) {
          var k = d[h];
          !1 === Od(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = g(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Td(d, function (f) {
          var h = c();
          0 < h.length && ((f.ne = h), a(f));
        });
    };
  function Xd(a) {
    for (var b = [], c = 0; c < Yd.length; c++) {
      var d = a(Yd[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Yd = [K.D, K.H],
    Zd = function (a) {
      var b = a[K.Ue];
      b && ud(40);
      var c = a[K.Ve];
      c && ud(41);
      for (
        var d = xa(b) ? b : [b], e = { Nb: 0 };
        e.Nb < d.length;
        e = { Nb: e.Nb }, ++e.Nb
      )
        Ja(
          a,
          (function (f) {
            return function (h, k) {
              if (h !== K.Ue && h !== K.Ve) {
                var l = d[f.Nb];
                Id().set(h, k, l, "VN", "VN-HN", c);
              }
            };
          })(e)
        );
    },
    $d = function (a, b) {
      Ja(a, function (c, d) {
        Id().update(c, d);
      });
      Ud(b);
    },
    L = function (a) {
      var b = Od(a);
      return void 0 != b ? b : !0;
    },
    ae = function () {
      return "G1" + Xd(Od);
    },
    be = function (a, b) {
      Wd(a, b);
    },
    ce = function (a, b) {
      Vd(a, b);
    };
  var ee = function (a) {
      return de ? A.querySelectorAll(a) : null;
    },
    fe = function (a, b) {
      if (!de) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!A.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    ge = !1;
  if (A.querySelectorAll)
    try {
      var he = A.querySelectorAll(":root");
      he && 1 == he.length && he[0] == A.documentElement && (ge = !0);
    } catch (a) {}
  var de = ge;
  var ie,
    je = !1;
  var ke = function (a) {
    if (A.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
      return !0;
    var c = m.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        h = e.filter;
      if (h) {
        var k = h.indexOf("opacity(");
        0 <= k &&
          ((h = h.substring(k + 8, h.indexOf(")", k))),
          "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
          (f = Math.min(h, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = m.getComputedStyle(d, null));
    }
    return !1;
  };
  var te = /:[0-9]+$/,
    ue = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    xe = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = ve(a.protocol) || ve(m.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || m.location.hostname)
            .replace(te, "")
            .toLowerCase());
      return we(a, b, c, d, e);
    },
    we = function (a, b, c, d, e) {
      var f,
        h = ve(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = ye(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(te, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || sa("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= ya(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = ue(f, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    ve = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    ye = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    ze = function (a) {
      var b = A.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || sa("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(te, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Ge = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 != p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = ze(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        k = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === k[0] && (k = k.substring(1));
      h = c(h);
      k = c(k);
      "" !== h && (h = "?" + h);
      "" !== k && (k = "#" + k);
      var l = "" + f + h + k;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var He = {},
    Ie = !0,
    Je = !1;
  He.Mg = "true";
  var Ke = function (a) {
    if ("false" === He.Mg || !Ie) return !1;
    if (Je) return !0;
    var b,
      c = "AW-" + a;
    if (!je) {
      je = !0;
      ie = ie || {};
    }
    b = ie[c];
    return !!b && !!b.preAutoPii;
  };
  var Le = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    Me = new RegExp(/@(gmail|googlemail)\./i),
    Ne = new RegExp(/support|noreply/i),
    Oe = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
    Pe = ["BR"],
    Qe = {};
  function Re(a) {
    var b;
    if (a === A.body) b = "body";
    else {
      var c;
      if (a.id) c = "#" + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a: {
            var f = a.parentElement;
            if (f) {
              for (var h = 0; h < f.childElementCount; h++)
                if (f.children[h] === a) {
                  e = h + 1;
                  break a;
                }
              e = -1;
            } else e = 1;
          }
          d = Re(a.parentElement) + ">:nth-child(" + e + ")";
        } else d = "";
        c = d;
      }
      b = c;
    }
    return b;
  }
  function Se(a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
  }
  function Te(a) {
    if (0 == a.length) return null;
    var b;
    b = Se(a, function (c) {
      return !Ne.test(c.wa);
    });
    b = Se(b, function (c) {
      return "INPUT" === c.element.tagName.toUpperCase();
    });
    b = Se(b, function (c) {
      return !ke(c.element);
    });
    return b[0];
  }
  var Ue = function (a) {
      a = a || { xe: !0, ye: !0 };
      a.Za = a.Za || { email: !0, phone: !0, Qf: !0 };
      var b,
        c = a,
        d = !!c.xe + "." + !!c.ye;
      c && c.jd && c.jd.length && (d += "." + c.jd.join("."));
      c && c.Za && (d += "." + c.Za.email + "." + c.Za.phone + "." + c.Za.Qf);
      b = d;
      var e = Qe[b];
      if (e && 200 > Sa() - e.timestamp) return e.result;
      var f;
      var h = [],
        k = A.body;
      if (k) {
        for (
          var l = k.querySelectorAll("*"), n = 0;
          n < l.length && 1e4 > n;
          n++
        ) {
          var p = l[n];
          if (!(0 <= Oe.indexOf(p.tagName.toUpperCase()))) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= Pe.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || h.push(p);
          }
        }
        f = { elements: h, status: 1e4 < l.length ? "2" : "1" };
      } else f = { elements: h, status: "4" };
      var u = f,
        t = u.status,
        v;
      if (a.Za && a.Za.email) {
        for (var x = u.elements, y = [], w = 0; w < x.length; w++) {
          var z = x[w],
            B = z.textContent;
          z.value && (B = z.value);
          if (B) {
            var C = B.match(Le);
            if (C) {
              var E = C[0],
                G;
              if (m.location) {
                var D = we(m.location, "host", !0);
                G = 0 <= E.toLowerCase().indexOf(D);
              } else G = !1;
              G || y.push({ element: z, wa: E });
            }
          }
        }
        var M;
        var I = a && a.jd;
        if (I && 0 !== I.length) {
          for (var N = [], S = 0; S < y.length; S++) {
            for (var R = !0, J = 0; J < I.length; J++) {
              var P = I[J];
              if (P && fe(y[S].element, P)) {
                R = !1;
                break;
              }
            }
            R && N.push(y[S]);
          }
          M = N;
        } else M = y;
        v = Te(M);
        10 < y.length && (t = "3");
      }
      var Y = [];
      if (v) {
        var O = v.element,
          W = { wa: v.wa, tagName: O.tagName, type: 1 };
        a.xe && (W.querySelector = Re(O));
        a.ye && (W.isVisible = !ke(O));
        Y.push(W);
      }
      var V = { elements: Y, status: t };
      Qe[b] = { timestamp: Sa(), result: V };
      return V;
    },
    Ve = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.wa.length + ":" + Me.test(a.wa)
      );
    };
  var We = function (a) {
      return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
    },
    Xe = function (a) {
      return void 0 === a || null === a ? "" : g(a) ? Qa(String(a)) : "e0";
    },
    Ze = function (a) {
      return a.replace(Ye, "");
    },
    af = function (a) {
      return $e(a.replace(/\s/g, ""));
    },
    $e = function (a) {
      return Qa(a.replace(bf, "").toLowerCase());
    },
    df = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return cf.test(a) ? a : "e0";
    },
    ff = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (ef.test(c)) return c;
      }
      return "e0";
    },
    jf = function (a, b, c) {
      window.Promise || c([], []);
      Promise.all(
        a.map(function (d) {
          return d.value && gf(d.name)
            ? hf(d.value).then(function (e) {
                d.value = e;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          c(a, b);
        })
        .catch(function () {
          c([], []);
        });
    },
    hf = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle)
        try {
          var b = kf(a);
          return m.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return m
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    kf = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    bf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    ef = /^\S+@\S+\.\S+$/,
    cf = /^\+\d{11,15}$/,
    Ye = /[.~]/g,
    lf = {},
    mf =
      ((lf.email = "em"),
      (lf.phone_number = "pn"),
      (lf.first_name = "fn"),
      (lf.last_name = "ln"),
      (lf.street = "sa"),
      (lf.city = "ct"),
      (lf.region = "rg"),
      (lf.country = "co"),
      (lf.postal_code = "pc"),
      (lf.error_code = "ec"),
      lf),
    nf = function (a, b, c) {
      function d(t, v, x) {
        var y = t[v];
        xa(y) || (y = [y]);
        for (var w = 0; w < y.length; ++w) {
          var z = Xe(y[w]);
          "" !== z && h.push({ name: v, value: x(z), index: void 0 });
        }
      }
      function e(t, v, x, y) {
        var w = Xe(t[v]);
        "" !== w && h.push({ name: v, value: x(w), index: y });
      }
      function f(t) {
        return function (v) {
          ud(64);
          return t(v);
        };
      }
      var h = [],
        k = [];
      if ("https:" === m.location.protocol) {
        var l = function (t, v) {
          var x = t[v];
          xa(x) || (x = [x]);
          for (var y = 0; y < x.length; ++y) {
            var w = Xe(x[y]);
            if ("" !== w) return w;
          }
          return null;
        };
        d(a, "email", ff);
        var n = l(a, "email");
        if (n)
          for (var p = 0; p < b.length; p++)
            k.push(b[p].wa.toLowerCase() === n.toLowerCase());
        d(a, "phone_number", df);
        d(a, "first_name", f(af));
        d(a, "last_name", f(af));
        var q = a.home_address || {};
        d(q, "street", f($e));
        d(q, "city", f($e));
        d(q, "postal_code", f(Ze));
        d(q, "region", f($e));
        d(q, "country", f(Ze));
        var r = a.address || {};
        xa(r) || (r = [r]);
        for (var u = 0; u < r.length; u++)
          e(r[u], "first_name", af, u),
            e(r[u], "last_name", af, u),
            e(r[u], "street", $e, u),
            e(r[u], "city", $e, u),
            e(r[u], "postal_code", Ze, u),
            e(r[u], "region", $e, u),
            e(r[u], "country", Ze, u);
        jf(h, k, c);
      } else
        h.push({ name: "error_code", value: "e3", index: void 0 }), c(h, k);
    },
    of = function (a, b) {
      nf(a, [], function (c, d) {
        for (var e = ["tv.1"], f = 0; f < c.length; ++f) {
          var h = c[f].name,
            k = c[f].value,
            l = c[f].index,
            n = mf[h];
          n &&
            k &&
            (!gf(h) || We(k)) &&
            (void 0 !== l && (n += l), e.push(n + "." + k));
        }
        b(encodeURIComponent(e.join("~")), d);
      });
    },
    pf = function (a, b) {
      if (m.Promise)
        try {
          return new Promise(function (c) {
            nf(a, b, function (d, e) {
              for (var f = ["tv.1"], h = 0; h < d.length; ++h) {
                var k = d[h].name,
                  l = d[h].value,
                  n = d[h].index,
                  p = mf[k];
                p &&
                  l &&
                  (!gf(k) || We(l)) &&
                  (void 0 !== n && (p += n), f.push(p + "." + l));
              }
              c({ vc: encodeURIComponent(f.join("~")), ic: e });
            });
          });
        } catch (c) {}
    },
    gf = function (a) {
      return (
        -1 !==
        ["email", "phone_number", "first_name", "last_name", "street"].indexOf(
          a
        )
      );
    };
  var qf = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.remoteConfig = {};
      this.globalConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    rf = function (a) {
      var b = new qf();
      b.eventModel = a;
      return b;
    },
    sf = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    tf = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    uf = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    vf = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    wf = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    xf = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    yf = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    zf = function (a, b) {
      a.onFailure = b;
      return a;
    };
  qf.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var Af = function (a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c);
    },
    Bf = function (a, b, c) {
      function d(h) {
        Yb(h) &&
          Ja(h, function (k, l) {
            f = !0;
            e[k] = l;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) ||
        (d(a.globalConfig[b]),
        d(a.remoteConfig[b]),
        d(a.containerConfig[b]),
        d(a.targetConfig[b]));
      (c && 2 !== c) || d(a.eventModel[b]);
      return f ? e : void 0;
    };
  var Cf = {},
    Df = null,
    Ef = Math.random();
  Cf.M = "GTM-5X96PM9";
  Cf.$c = "8b0";
  Cf.$i = "";
  Cf.Rg =
    "ChAI8I3TiAYQ4fG/iL2568YsEiQAVJKx68bKiVzKEKCyK1DRmpMGsh74+K31uLqJvpXX+CyynM4aAleh";
  var Ff = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Gf = { __paused: !0, __tg: !0 },
    Hf;
  for (Hf in Ff) Ff.hasOwnProperty(Hf) && (Gf[Hf] = !0);
  var If = "www.googletagmanager.com/gtm.js";
  var Jf = If,
    Kf = Na(""),
    Lf = null,
    Mf = null,
    Nf = "https://www.googletagmanager.com/a?id=" + Cf.M + "&cv=9",
    Of = {},
    Pf = {},
    Qf = function () {
      var a = Df.sequence || 1;
      Df.sequence = a + 1;
      return a;
    };
  Cf.Qg = "";
  var Rf = new Fa(),
    Sf = {},
    Tf = {},
    Wf = {
      name: "dataLayer",
      set: function (a, b) {
        H(Ya(a, b), Sf);
        Uf();
      },
      get: function (a) {
        return Vf(a, 2);
      },
      reset: function () {
        Rf = new Fa();
        Sf = {};
        Uf();
      },
    },
    Vf = function (a, b) {
      return 2 != b ? Rf.get(a) : Xf(a);
    },
    Xf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Sf, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== ya(b, d)) return;
      }
      return d;
    },
    Yf = function (a, b) {
      Tf.hasOwnProperty(a) || (Rf.set(a, b), H(Ya(a, b), Sf), Uf());
    },
    Uf = function (a) {
      Ja(Tf, function (b, c) {
        Rf.set(b, c);
        H(Ya(b, void 0), Sf);
        H(Ya(b, c), Sf);
        a && delete Tf[b];
      });
    },
    Zf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Xf(a) : Rf.get(a);
      "array" === Wb(d) || "object" === Wb(d) ? (c = H(d)) : (c = d);
      return c;
    };
  var $f = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var h = e.split(","), k = 0; k < h.length; k++) {
            var l = h[k].trim();
            if (l) {
              if (0 === l.indexOf("dataLayer.")) f = Vf(l.substring(10));
              else {
                var n = l.split(".");
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && de) {
          var q = ee(e);
          q && 0 < q.length && (f = Nb(q[0]) || Qa(q[0].value));
        }
        f && (a[b] = f);
      }
    },
    ag = function (a) {
      if (a) {
        var b = {};
        $f(b, "email", a.email);
        $f(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          $f(e, "first_name", c[d].first_name);
          $f(e, "last_name", c[d].last_name);
          $f(e, "street", c[d].street);
          $f(e, "city", c[d].city);
          $f(e, "region", c[d].region);
          $f(e, "country", c[d].country);
          $f(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    bg = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return ag(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = Ue({
                  xe: !1,
                  ye: !1,
                  jd: c.exclude_element_selectors,
                  Za: { email: !!c.email, phone: !!c.phone, Qf: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var h = d[f];
                  if (1 === h.type) {
                    e.email = h.wa;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    cg = function (a) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : m.enhanced_conversion_data;
        case "automatic":
          return ag(a[K.lf]);
      }
    };
  var dg = {},
    eg = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a];
      void 0 === dg[a] && (dg[a] = Math.floor(Math.random() * b));
      return dg[a];
    };
  function fg(a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        k = h[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var l = h
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  }
  function gg(a) {
    return "null" !== a.origin;
  }
  var jg = function (a, b, c, d) {
      return hg(d) ? fg(a, String(b || ig()), c) : [];
    },
    qg = function (a, b, c, d, e) {
      if (hg(e)) {
        var f = kg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = lg(
            f,
            function (h) {
              return h.hd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = lg(
            f,
            function (h) {
              return h.wc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function rg(a, b, c, d) {
    var e = ig(),
      f = window;
    gg(f) && (f.document.cookie = a);
    var h = ig();
    return e != h || (void 0 != c && 0 <= jg(b, h, !1, d).indexOf(c));
  }
  var vg = function (a, b, c) {
      function d(u, t, v) {
        if (null == v) return delete h[t], u;
        h[t] = v;
        return u + "; " + t + "=" + v;
      }
      function e(u, t) {
        if (null == t) return delete h[t], u;
        h[t] = !0;
        return u + "; " + t;
      }
      if (!hg(c.Sa)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = sg(b)),
          (f = a + "=" + b));
      var h = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.lj);
      f = d(f, "samesite", c.mj);
      c.nj && (f = e(f, "secure"));
      var l = c.domain;
      if ("auto" === l) {
        for (var n = tg(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!ug(q, c.path) && rg(r, a, b, c.Sa)) return 0;
        }
        return 1;
      }
      l && "none" !== l && (f = d(f, "domain", l));
      f = e(f, c.flags);
      return ug(l, c.path) ? 1 : rg(f, a, b, c.Sa) ? 0 : 1;
    },
    wg = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return vg(a, b, c);
    };
  function lg(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function kg(a, b, c) {
    for (var d = [], e = jg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        k = h.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = h.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: h.join("."), hd: 1 * l[0] || 1, wc: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var sg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    xg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    yg = /(^|\.)doubleclick\.net$/i,
    ug = function (a, b) {
      return (
        yg.test(window.document.location.hostname) || ("/" === b && xg.test(a))
      );
    },
    ig = function () {
      return gg(window) ? window.document.cookie : "";
    },
    tg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      yg.test(e) || xg.test(e) || a.push("none");
      return a;
    },
    hg = function (a) {
      if (!Ad(xd) || !a || !Rd()) return !0;
      if (!Qd(a)) return !1;
      var b = Od(a);
      return null == b ? !0 : !!b;
    };
  var zg = function () {
      return [
        Math.round(2147483647 * Math.random()),
        Math.round(Sa() / 1e3),
      ].join(".");
    },
    Cg = function (a, b, c, d, e) {
      var f = Ag(b);
      return qg(a, f, Bg(c), d, e);
    },
    Dg = function (a, b, c, d) {
      var e = "" + Ag(c),
        f = Bg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Ag = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Bg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function Eg(a, b, c) {
    var d,
      e = Number(null != a.nb ? a.nb : void 0);
    0 !== e && (d = new Date((b || Sa()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var Fg = ["1"],
    Gg = {},
    Kg = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Hg(a.prefix);
      if (!Gg[c] && !Ig(c, a.path, a.domain) && b) {
        var d = Hg(a.prefix),
          e = zg();
        if (0 === Jg(d, e, a)) {
          var f = Bb("google_tag_data", {});
          f._gcl_au ? sa("GTM", 57) : (f._gcl_au = e);
        }
        Ig(c, a.path, a.domain);
      }
    };
  function Jg(a, b, c) {
    var d = Dg(b, "1", c.domain, c.path),
      e = Eg(c);
    e.Sa = "ad_storage";
    return wg(a, d, e);
  }
  function Ig(a, b, c) {
    var d = Cg(a, b, c, Fg, "ad_storage");
    d && (Gg[a] = d);
    return d;
  }
  function Hg(a) {
    return (a || "_gcl") + "_au";
  }
  var Lg = function (a) {
    for (
      var b = [],
        c = A.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Pe: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (h, k) {
      return k.timestamp - h.timestamp;
    });
    return b;
  };
  function Mg(a, b) {
    var c = Lg(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Pe] || (d[c[e].Pe] = []);
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), ra: f[2] };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].Pe].push(h);
      }
    }
    return d;
  }
  function Ng() {
    for (var a = Og, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Pg() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Og, Qg;
  function Rg(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Qg[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    Og = Og || Pg();
    Qg = Qg || Ng();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)));
    }
  }
  var Sg;
  var Wg = function () {
      var a = Tg,
        b = Ug,
        c = Vg(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        Kb(A, "mousedown", d);
        Kb(A, "keyup", d);
        Kb(A, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Xg = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Vg().decorators.push(f);
    },
    Yg = function (a, b, c) {
      for (var d = Vg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          k;
        if ((k = !c || h.forms))
          a: {
            var l = h.domains,
              n = a,
              p = !!h.sameHost;
            if (l && (p || n !== A.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Va(e, h.callback());
        }
      }
      return e;
    },
    Vg = function () {
      var a = Bb("google_tag_data", {}),
        b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
    };
  var Zg = /(.*?)\*(.*?)\*(.*)/,
    $g = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    ah = /^(?:www\.|m\.|amp\.)+/,
    bh = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function ch(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var eh = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          if (
            void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString()
          ) {
            b.push(c);
            var e = b,
              f = e.push,
              h,
              k = String(d);
            Og = Og || Pg();
            Qg = Qg || Ng();
            for (var l = [], n = 0; n < k.length; n += 3) {
              var p = n + 1 < k.length,
                q = n + 2 < k.length,
                r = k.charCodeAt(n),
                u = p ? k.charCodeAt(n + 1) : 0,
                t = q ? k.charCodeAt(n + 2) : 0,
                v = r >> 2,
                x = ((r & 3) << 4) | (u >> 4),
                y = ((u & 15) << 2) | (t >> 6),
                w = t & 63;
              q || ((w = 64), p || (y = 64));
              l.push(Og[v], Og[x], Og[y], Og[w]);
            }
            h = l.join("");
            f.call(e, h);
          }
        }
      var z = b.join("*");
      return ["1", dh(z), z].join("*");
    },
    dh = function (a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join("*"),
        d;
      if (!(d = Sg)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var h = f, k = 0; 8 > k; k++)
            h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
          e[f] = h;
        }
        d = e;
      }
      Sg = d;
      for (var l = 4294967295, n = 0; n < c.length; n++)
        l = (l >>> 8) ^ Sg[(l ^ c.charCodeAt(n)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    gh = function () {
      return function (a) {
        var b = ze(m.location.href),
          c = b.search.replace("?", ""),
          d = ue(c, "_gl", !0) || "";
        a.query = fh(d) || {};
        var e = xe(b, "fragment").match(ch("_gl"));
        a.fragment = fh((e && e[3]) || "") || {};
      };
    },
    hh = function (a) {
      var b = gh(),
        c = Vg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Va(d, e.query), a && Va(d, e.fragment));
      return d;
    },
    fh = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = Zg.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var h = c;
          if (h && "1" === h[1]) {
            var k = h[3],
              l;
            a: {
              for (var n = h[2], p = 0; p < b; ++p)
                if (n === dh(k, p)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (
                var q = {}, r = k ? k.split("*") : [], u = 0;
                u < r.length;
                u += 2
              )
                q[r[u]] = Rg(r[u + 1]);
              return q;
            }
          }
        }
      } catch (t) {}
    };
  function ih(a, b, c, d) {
    function e(p) {
      var q = p,
        r = ch(a).exec(q),
        u = q;
      if (r) {
        var t = r[2],
          v = r[4];
        u = r[1];
        v && (u = u + t + v);
      }
      p = u;
      var x = p.charAt(p.length - 1);
      p && "&" !== x && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = bh.exec(c);
    if (!f) return "";
    var h = f[1],
      k = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + h + k + l;
  }
  function jh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Yg(b, 1, c),
      e = Yg(b, 2, c),
      f = Yg(b, 3, c);
    if (Wa(d)) {
      var h = eh(d);
      c ? kh("_gl", h, a) : lh("_gl", h, a, !1);
    }
    if (!c && Wa(e)) {
      var k = eh(e);
      lh("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              lh(n, p, q, void 0);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              kh(n, p, q);
              break a;
            }
          }
          "string" == typeof q && ih(n, p, q, void 0);
        }
  }
  function lh(a, b, c, d) {
    if (c.href) {
      var e = ih(a, b, c.href, void 0 === d ? !1 : d);
      eb.test(e) && (c.href = e);
    }
  }
  function kh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var k = e[h];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = A.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = ih(a, b, c.action);
        eb.test(n) && (c.action = n);
      }
    }
  }
  var Tg = function (a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ("http:" !== f && "https:" !== f) || jh(e, e.hostname);
        }
      } catch (h) {}
    },
    Ug = function (a) {
      try {
        if (a.action) {
          var b = xe(ze(a.action), "host");
          jh(a, b);
        }
      } catch (c) {}
    },
    mh = function (a, b, c, d) {
      Wg();
      Xg(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    nh = function (a, b) {
      Wg();
      Xg(a, [we(m.location, "host", !0)], b, !0, !0);
    },
    oh = function () {
      var a = A.location.hostname,
        b = $g.exec(A.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(ah, ""),
        l = e.replace(ah, ""),
        n;
      if (!(n = k === l)) {
        var p = "." + l;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    ph = function (a, b) {
      return !1 === a ? !1 : a || b || oh();
    };
  var qh = {};
  var rh = /^\w+$/,
    sh = /^[\w-]+$/,
    th = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    uh = function () {
      if (!Ad(xd) || !Rd()) return !0;
      var a = Od("ad_storage");
      return null == a ? !0 : !!a;
    },
    vh = function (a, b) {
      Qd("ad_storage")
        ? uh()
          ? a()
          : Wd(a, "ad_storage")
        : b
        ? sa("TAGGING", 3)
        : Vd(
            function () {
              vh(a, !0);
            },
            ["ad_storage"]
          );
    },
    xh = function (a) {
      return wh(a).map(function (b) {
        return b.ra;
      });
    },
    wh = function (a) {
      var b = [];
      if (!gg(m) || !A.cookie) return b;
      var c = jg(a, A.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Dc: d.Dc }, e++) {
        var f = yh(c[e]);
        if (null != f) {
          var h = f,
            k = h.version;
          d.Dc = h.ra;
          var l = h.timestamp,
            n = h.labels,
            p = Ba(
              b,
              (function (q) {
                return function (r) {
                  return r.ra === q.Dc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = zh(p.labels, n || [])))
            : b.push({ version: k, ra: d.Dc, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Ah(b);
    };
  function zh(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Bh(a) {
    return a && "string" == typeof a && a.match(rh) ? a : "_gcl";
  }
  var Dh = function () {
      var a = ze(m.location.href),
        b = xe(a, "query", !1, void 0, "gclid"),
        c = xe(a, "query", !1, void 0, "gclsrc"),
        d = xe(a, "query", !1, void 0, "wbraid"),
        e = xe(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || ue(f, "gclid", void 0);
        c = c || ue(f, "gclsrc", void 0);
        d = d || ue(f, "wbraid", void 0);
      }
      return Ch(b, c, e, d);
    },
    Ch = function (a, b, c, d) {
      var e = {},
        f = function (h, k) {
          e[k] || (e[k] = []);
          e[k].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && sh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(sh))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Fh = function (a) {
      var b = Dh();
      vh(function () {
        Eh(b, !1, a);
      });
    };
  function Eh(a, b, c, d, e) {
    function f(x, y) {
      var w = Gh(x, h);
      w && (wg(w, y, k), (l = !0));
    }
    c = c || {};
    e = e || [];
    var h = Bh(c.prefix);
    d = d || Sa();
    var k = Eg(c, d, !0);
    k.Sa = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ["GCL", n, x];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == qh.enable_gbraid_cookie_write
        ? 0
        : qh.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        r = Gh("gb", h),
        u = !1;
      if (!b)
        for (var t = wh(r), v = 0; v < t.length; v++)
          t[v].ra === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var Ih = function (a, b) {
      var c = hh(!0);
      vh(function () {
        for (var d = Bh(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== th[f]) {
            var h = Gh(f, d),
              k = c[h];
            if (k) {
              var l = Math.min(Hh(k), Sa()),
                n;
              b: {
                var p = l;
                if (gg(m))
                  for (
                    var q = jg(h, A.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Hh(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Eg(b, l, !0);
                u.Sa = "ad_storage";
                wg(h, k, u);
              }
            }
          }
        }
        Eh(Ch(c.gclid, c.gclsrc), !1, b);
      });
    },
    Gh = function (a, b) {
      var c = th[a];
      if (void 0 !== c) return b + c;
    },
    Hh = function (a) {
      return 0 !== Jh(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function yh(a) {
    var b = Jh(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ra: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Jh(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !sh.test(a[2])
      ? []
      : a;
  }
  var Kh = function (a, b, c, d, e) {
      if (xa(b) && gg(m)) {
        var f = Bh(e),
          h = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = Gh(a[l], f);
              if (n) {
                var p = jg(n, A.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        vh(function () {
          mh(h, b, c, d);
        });
      }
    },
    Ah = function (a) {
      return a.filter(function (b) {
        return sh.test(b.ra);
      });
    },
    Lh = function (a, b) {
      if (gg(m)) {
        for (var c = Bh(b.prefix), d = {}, e = 0; e < a.length; e++)
          th[a[e]] && (d[a[e]] = th[a[e]]);
        vh(function () {
          Ja(d, function (f, h) {
            var k = jg(c + h, A.cookie, void 0, "ad_storage");
            k.sort(function (u, t) {
              return Hh(t) - Hh(u);
            });
            if (k.length) {
              var l = k[0],
                n = Hh(l),
                p = 0 !== Jh(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Jh(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [r];
              Eh(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Mh(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Nh = function (a) {
    function b(e, f, h) {
      h && (e[f] = h);
    }
    if (Rd()) {
      var c = Dh();
      if (Mh(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        nh(function () {
          return d;
        }, 3);
        nh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function Oh(a, b) {
    var c = Bh(b),
      d = Gh(a, c);
    if (!d) return 0;
    for (var e = wh(d), f = 0, h = 0; h < e.length; h++)
      f = Math.max(f, e[h].timestamp);
    return f;
  }
  function Ph(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Qh = /^\d+\.fls\.doubleclick\.net$/;
  function Rh(a, b) {
    Qd(K.D)
      ? L(K.D)
        ? a()
        : Wd(a, K.D)
      : b
      ? ud(42)
      : ce(
          function () {
            Rh(a, !0);
          },
          [K.D]
        );
  }
  function Sh(a) {
    var b = ze(m.location.href),
      c = xe(b, "host", !1);
    if (c && c.match(Qh)) {
      var d = xe(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }
  function Th(a, b, c) {
    if ("aw" === a || "dc" === a || "gb" === a) {
      var d = Sh("gcl" + a);
      if (d) return d.split(".");
    }
    var e = Bh(b);
    if ("_gcl" == e) {
      c = void 0 === c ? !0 : c;
      var f = !L(K.D) && c,
        h;
      h = Dh()[a] || [];
      if (0 < h.length) return f ? ["0"] : h;
    }
    var k = Gh(a, e);
    return k ? xh(k) : [];
  }
  var Uh = function (a, b) {
      return Th("aw", a, b);
    },
    Vh = function (a, b) {
      return Th("dc", a, b);
    };
  function Wh(a) {
    var b = [];
    Ja(a, function (c, d) {
      d = Ah(d);
      for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
      e.length && b.push(c + ":" + e.join(","));
    });
    return b.join(";");
  }
  var Xh = function (a) {
      var b = Sh("gac");
      return b
        ? !L(K.D) && a
          ? "0"
          : decodeURIComponent(b)
        : Wh(uh() ? Mg() : {});
    },
    Yh = function (a) {
      var b = Sh("gacgb");
      return b
        ? !L(K.D) && a
          ? "0"
          : decodeURIComponent(b)
        : Wh(uh() ? Mg("_gac_gb", !0) : {});
    },
    Zh = function (a, b) {
      var c = Dh(),
        d = [],
        e = c.gclid,
        f = c.dclid,
        h = c.gclsrc || "aw";
      !e ||
        ("aw.ds" !== h && "aw" !== h && "ds" !== h) ||
        d.push({ ra: e, se: h });
      f && d.push({ ra: f, se: "ds" });
      Rh(function () {
        Kg(b);
        var k = Gg[Hg(b.prefix)],
          l = !1;
        if (k && 0 < d.length)
          for (
            var n = (Df.joined_auid = Df.joined_auid || {}), p = 0;
            p < d.length;
            p++
          ) {
            var q = d[p],
              r = q.ra,
              u = q.se,
              t = (b.prefix || "_gcl") + "." + u + "." + r;
            if (!n[t]) {
              var v = "https://adservice.google.com/pagead/regclk";
              v =
                "gb" === u
                  ? v + "?gbraid=" + r + "&auid=" + k
                  : v + "?gclid=" + r + "&auid=" + k + "&gclsrc=" + u;
              Qb(v);
              l = n[t] = !0;
            }
          }
        null == a && (a = l);
        var x = !0;
        x = !1;
        if (x && a && k) {
          var y = Hg(b.prefix),
            w = Gg[y];
          w && Jg(y, w, b);
        }
      });
    },
    $h = function (a) {
      var b;
      if (Sh("gclaw") || Sh("gac") || 0 < (Dh().aw || []).length) b = !1;
      else {
        var c;
        if (0 < (Dh().gb || []).length) c = !0;
        else {
          var d = Math.max(Oh("aw", a), Ph(uh() ? Mg() : {}));
          c = Math.max(Oh("gb", a), Ph(uh() ? Mg("_gac_gb", !0) : {})) > d;
        }
        b = c;
      }
      return b;
    };
  var ai = /[A-Z]+/,
    bi = /\s/,
    ci = function (a) {
      if (g(a) && ((a = Qa(a)), !bi.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (ai.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], N: d };
          }
        }
      }
    },
    ei = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = ci(a[c]);
        d && (b[d.id] = d);
      }
      di(b);
      var e = [];
      Ja(b, function (f, h) {
        e.push(h);
      });
      return e;
    };
  function di(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var fi = function () {
    var a = !1;
    return a;
  };
  var hi = function (a, b, c, d) {
      return (2 === gi() || d || "http:" != m.location.protocol ? a : b) + c;
    },
    gi = function () {
      var a = Eb(),
        b;
      if (1 === a)
        a: {
          var c = Jf;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              h = A.getElementsByTagName("script"),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var ti = function (a, b) {
    var c = a ? cg(a) : m.enhanced_conversion_data,
      d = (a || {}).enhanced_conversions_mode;
    if (m.Promise)
      try {
        return c
          ? pf(c, b).then(function (e) {
              e.ke = d;
              return e;
            })
          : Promise.resolve({ vc: "", ic: [], ke: d });
      } catch (e) {}
  };
  var ui = function (a) {
      if (L(K.D)) return a;
      a = a.replace(/&url=([^&#]+)/, function (b, c) {
        var d = Ge(decodeURIComponent(c));
        return "&url=" + encodeURIComponent(d);
      });
      a = a.replace(/&ref=([^&#]+)/, function (b, c) {
        var d = Ge(decodeURIComponent(c));
        return "&ref=" + encodeURIComponent(d);
      });
      return a;
    },
    vi = function () {
      var a;
      if (!(a = Kf)) {
        var b;
        if (!0 === m._gtmdgs) b = !0;
        else {
          var c = (zb && zb.userAgent) || "";
          b =
            0 > c.indexOf("Safari") ||
            /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
            11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "")
              ? !1
              : !0;
        }
        a = !b;
      }
      if (a) return -1;
      var d = Ma("1");
      return eg(1, 100) < d ? eg(2, 2) : -1;
    },
    wi = function (a) {
      var b;
      if (!a || !a.length) return;
      for (var c = [], d = 0; d < a.length; ++d) {
        var e = a[d];
        e && e.estimated_delivery_date
          ? c.push("" + e.estimated_delivery_date)
          : c.push("");
      }
      b = c.join(",");
      return b;
    };
  var xi = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    yi = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    zi = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Ai =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Bi = function () {
      var a = !1;
      return a;
    },
    Di = function (a) {
      var b = Vf("gtm.allowlist") || Vf("gtm.whitelist");
      b && ud(9);
      Bi() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Xa(Oa(b), yi),
        d = Vf("gtm.blocklist") || Vf("gtm.blacklist");
      d || ((d = Vf("tagTypeBlacklist")) && ud(3));
      d ? ud(8) : (d = []);
      Ci() &&
        ((d = Oa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= ya(Oa(d), "google") && ud(2);
      var e = d && Xa(Oa(d), zi),
        f = {};
      return function (h) {
        var k = h && h[$b.lb];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = Pf[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > ya(c, k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > ya(c, l[q])) {
                      ud(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= ya(e, k);
          if (u) r = u;
          else {
            var t = Ha(e, l || []);
            t && ud(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= ya(l, "sandboxedScripts")) ||
          (c && -1 !== ya(c, "sandboxedScripts")) ||
          (v = Ha(e, Ai));
        return (f[k] = v);
      };
    },
    Ci = function () {
      return xi.test(m.location && m.location.hostname);
    };
  var Ei = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    Fi = function (a) {
      var b = Df.zones;
      return b ? b.checkState(Cf.M, a) : Ei;
    },
    Gi = function (a) {
      var b = Df.zones;
      !b && a && (b = Df.zones = a());
      return b;
    };
  var Hi = function () {},
    Ii = function () {};
  var Ji = !1,
    Ki = 0,
    Li = [];
  function Mi(a) {
    if (!Ji) {
      var b = A.createEventObject,
        c = "complete" == A.readyState,
        d = "interactive" == A.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Ji = !0;
        for (var e = 0; e < Li.length; e++) F(Li[e]);
      }
      Li.push = function () {
        for (var f = 0; f < arguments.length; f++) F(arguments[f]);
        return 0;
      };
    }
  }
  function Ni() {
    if (!Ji && 140 > Ki) {
      Ki++;
      try {
        A.documentElement.doScroll("left"), Mi();
      } catch (a) {
        m.setTimeout(Ni, 50);
      }
    }
  }
  var Oi = function (a) {
    Ji ? a() : Li.push(a);
  };
  var Qi = function (a, b) {
      this.o = !1;
      this.F = [];
      this.O = { tags: [] };
      this.aa = !1;
      this.s = this.C = 0;
      Pi(this, a, b);
    },
    Ri = function (a, b, c, d) {
      if (Gf.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Yb(d) && (e = H(d, e));
      e.id = c;
      e.status = "timeout";
      return a.O.tags.push(e) - 1;
    },
    Si = function (a, b, c, d) {
      var e = a.O.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Ti = function (a) {
      if (!a.o) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.o = !0;
        a.F.length = 0;
      }
    },
    Pi = function (a, b, c) {
      va(b) && Ui(a, b);
      c &&
        m.setTimeout(function () {
          return Ti(a);
        }, Number(c));
    },
    Ui = function (a, b) {
      var c = Ua(function () {
        return F(function () {
          b(Cf.M, a.O);
        });
      });
      a.o ? c() : a.F.push(c);
    },
    Vi = function (a) {
      a.C++;
      return Ua(function () {
        a.s++;
        a.aa && a.s >= a.C && Ti(a);
      });
    };
  var Wi = function () {
      function a(d) {
        return !wa(d) || 0 > d ? 0 : d;
      }
      if (!Df._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = wa(Wf.get("gtm.start")) ? Wf.get("gtm.start") : 0;
        Df._li = { cst: a(c - b), cbt: a(Mf - b) };
      }
    },
    Xi = function (a) {
      m.performance && m.performance.mark(Cf.M + "_" + a + "_start");
    },
    bj = function (a) {
      if (m.performance) {
        var b = Cf.M + "_" + a + "_start",
          c = Cf.M + "_" + a + "_duration";
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = Df._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Df._p = e));
        return d.duration;
      }
    },
    cj = function () {
      if (m.performance && m.performance.now) {
        var a = Df._p || {};
        a.PAGEVIEW = m.performance.now();
        Df._p = a;
      }
    };
  var dj = {},
    ej = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    fj = !1;
  var kj = function (a) {},
    jj = function () {
      return m.GoogleAnalyticsObject || "ga";
    },
    lj = function (a, b) {
      return function () {
        var c = ej(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              k = f.get("hitCallback"),
              l = 0 > h.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", h, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var sj = function (a) {},
    wj = function (a) {},
    xj = function () {
      return (
        "&tc=" +
        Ic.filter(function (a) {
          return a;
        }).length
      );
    },
    Aj = function () {
      2022 <= yj().length && zj();
    },
    Bj = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    Dj = function () {
      Cj || (Cj = m.setTimeout(zj, 500));
    },
    zj = function () {
      Cj && (m.clearTimeout(Cj), (Cj = void 0));
      void 0 === Ej ||
        (Fj[Ej] && !Gj && !Hj) ||
        (Ij[Ej] || Jj.ui() || 0 >= Kj--
          ? (ud(1), (Ij[Ej] = !0))
          : (Jj.Mi(),
            Gb(yj(!0)),
            (Fj[Ej] = !0),
            (Lj = Mj = Nj = Hj = Gj = "")));
    },
    yj = function (a) {
      var b = Ej;
      if (void 0 === b) return "";
      var c = ta("GTM"),
        d = ta("TAGGING");
      return [
        Oj,
        Fj[b] ? "" : "&es=1",
        Pj[b],
        sj(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        xj(),
        Gj,
        Hj,
        Nj,
        Mj,
        wj(a),
        Lj,
        "&z=0",
      ].join("");
    },
    Rj = function () {
      Oj = Qj();
    },
    Qj = function () {
      return [Nf, "&v=3&t=t", "&pid=" + Ca(), "&rv=" + Cf.$c].join("");
    },
    vj = ["L", "S", "Y"],
    rj = ["S", "E"],
    Sj = { sampleRate: "0.005000", Jg: "", Ig: Number("5") },
    Tj =
      0 <= A.location.search.indexOf("?gtm_latency=") ||
      0 <= A.location.search.indexOf("&gtm_latency="),
    Uj;
  if (!(Uj = Tj)) {
    var Vj = Math.random(),
      Wj = Sj.sampleRate;
    Uj = Vj < Wj;
  }
  var Xj = Uj,
    Yj = {
      label: Cf.M + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Oj = Qj(),
    Fj = {},
    Gj = "",
    Hj = "",
    Lj = "",
    Mj = "",
    uj = {},
    tj = !1,
    qj = {},
    Zj = {},
    Nj = "",
    Ej = void 0,
    Pj = {},
    Ij = {},
    Cj = void 0,
    ak = 5;
  0 < Sj.Ig && (ak = Sj.Ig);
  var Jj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        ui: function () {
          return c < a ? !1 : Sa() - d[c % a] < b;
        },
        Mi: function () {
          var f = c++ % a;
          d[f] = Sa();
        },
      };
    })(ak, 1e3),
    Kj = 1e3,
    ck = function (a, b) {
      if (Xj && !Ij[a] && Ej !== a) {
        zj();
        Ej = a;
        Lj = Gj = "";
        Pj[a] = "&e=" + Bj(b) + "&eid=" + a;
        Dj();
      }
    },
    dk = function (a, b, c, d) {
      if (Xj && b) {
        var e,
          f = String(b[$b.lb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var h = c + e;
        if (!Ij[a]) {
          a !== Ej && (zj(), (Ej = a));
          Gj = Gj ? Gj + "." + h : "&tr=" + h;
          var k = b["function"];
          if (!k)
            throw Error("Error: No function name given for function call.");
          var l = (Kc[k] ? "1" : "2") + e;
          Lj = Lj ? Lj + "." + l : "&ti=" + l;
          Dj();
          Aj();
        }
      }
    };
  var kk = function (a, b, c) {
      if (Xj && !Ij[a]) {
        a !== Ej && (zj(), (Ej = a));
        var d = c + b;
        Hj = Hj ? Hj + "." + d : "&epr=" + d;
        Dj();
        Aj();
      }
    },
    lk = function (a, b, c) {};
  function mk(a, b, c, d) {
    var e = Ic[a],
      f = nk(a, b, c, d);
    if (!f) return null;
    var h = Pc(e[$b.Gf], c, []);
    if (h && h.length) {
      var k = h[0];
      f = mk(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.bg ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function nk(a, b, c, d) {
    function e() {
      if (f[$b.Fh]) k();
      else {
        var x = Qc(f, c, []);
        var y = x[$b.Og];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!L(y[w])) {
              k();
              return;
            }
        var z = Ri(c.Hb, String(f[$b.lb]), Number(f[$b.Hf]), x[$b.Gh]),
          B = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var G = Sa() - E;
            dk(c.id, Ic[a], "5", G);
            Si(c.Hb, z, "success", G);
            h();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var G = Sa() - E;
            dk(c.id, Ic[a], "6", G);
            Si(c.Hb, z, "failure", G);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        dk(c.id, f, "1");
        var C = function () {
          var G = Sa() - E;
          dk(c.id, f, "7", G);
          Si(c.Hb, z, "exception", G);
          B || ((B = !0), k());
        };
        var E = Sa();
        try {
          Oc(x, c);
        } catch (G) {
          C(G);
        }
      }
    }
    var f = Ic[a],
      h = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Be(f)) return null;
    var n = Pc(f[$b.If], c, []);
    if (n && n.length) {
      var p = n[0],
        q = mk(p.index, { onSuccess: h, onFailure: k, terminate: l }, c, d);
      if (!q) return null;
      h = q;
      k = 2 === p.bg ? l : q;
    }
    if (f[$b.Cf] || f[$b.Ih]) {
      var r = f[$b.Cf] ? Jc : c.Ti,
        u = h,
        t = k;
      if (!r[a]) {
        e = Ua(e);
        var v = ok(a, r, e);
        h = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function ok(a, b, c) {
    var d = [],
      e = [];
    b[a] = pk(d, e, c);
    return {
      onSuccess: function () {
        b[a] = qk;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = rk;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function pk(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function qk(a) {
    a();
  }
  function rk(a, b) {
    b();
  }
  var uk = function (a, b) {
    for (var c = [], d = 0; d < Ic.length; d++)
      if (a[d]) {
        var e = Ic[d];
        var f = Vi(b.Hb);
        try {
          var h = mk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (h) {
            var k = c,
              l = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = Kc[p];
            l.call(k, { Cg: n, qg: q ? q.priorityOverride || 0 : 0, gi: h });
          } else sk(d, b), f();
        } catch (t) {
          f();
        }
      }
    var r = b.Hb;
    r.aa = !0;
    r.s >= r.C && Ti(r);
    c.sort(tk);
    for (var u = 0; u < c.length; u++) c[u].gi();
    return 0 < c.length;
  };
  function tk(a, b) {
    var c,
      d = b.qg,
      e = a.qg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Cg,
        k = b.Cg;
      f = h > k ? 1 : h < k ? -1 : 0;
    }
    return f;
  }
  function sk(a, b) {
    if (!Xj) return;
    var c = function (d) {
      var e = b.Be(Ic[d]) ? "3" : "4",
        f = Pc(Ic[d][$b.Gf], b, []);
      f && f.length && c(f[0].index);
      dk(b.id, Ic[d], e);
      var h = Pc(Ic[d][$b.If], b, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var vk = !1,
    Ak = function (a) {
      var b = Sa(),
        c = a["gtm.uniqueEventId"],
        d = a.event;
      if ("gtm.js" === d) {
        if (vk) return !1;
        vk = !0;
      }
      var h = Fi(c),
        k = !1;
      if (!h.active) {
        if ("gtm.js" !== d) return !1;
        k = !0;
        h = Fi(Number.MAX_SAFE_INTEGER);
      }
      ck(c, d);
      var l = a.eventCallback,
        n = a.eventTimeout,
        p = l;
      var q = {
          id: c,
          name: d,
          Be: Di(h.isAllowed),
          Ti: [],
          lg: function () {
            ud(6);
          },
          Tf: wk(c),
          Hb: new Qi(p, n),
          Sf: xk(),
        },
        r = Uc(q);
      k && (r = yk(r));
      var u = uk(r, q);
      ("gtm.js" !== d && "gtm.sync" !== d) || kj(Cf.M);
      switch (d) {
        case "gtm.init":
          u && ud(20);
      }
      return zk(r, u);
    };
  function wk(a) {
    return function (b) {
      Xj && (Zb(b) || lk(a, "input", b));
    };
  }
  function xk() {
    var a = {};
    a.event = Zf("event", 1);
    a.ecommerce = Zf("ecommerce", 1);
    a.gtm = Zf("gtm");
    a.eventModel = Zf("eventModel");
    return a;
  }
  function yk(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] && Ff[String(Ic[c][$b.lb])] && (b[c] = !0);
    return b;
  }
  function zk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Ic[c] && !Gf[String(Ic[c][$b.lb])]) return !0;
    return !1;
  }
  function Bk(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return ze("" + c + b).href;
    }
  }
  function Ck(a, b) {
    return Dk() ? Bk(a, b) : void 0;
  }
  function Dk() {
    var a = !1;
    return a;
  }
  var Ek;
  if (3 === Cf.$c.length) Ek = "g";
  else {
    var Fk = "G";
    Ek = Fk;
  }
  var Gk = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Ek,
      OPT: "o",
    },
    Hk = function (a) {
      var b = Cf.M.split("-"),
        c = b[0].toUpperCase(),
        d = Gk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Cf.$c.length) {
        var h = "w";
        f = "2" + h;
      } else f = "";
      return f + d + Cf.$c + e;
    };
  function Ik(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Jk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  var Kk = function () {
    return mb("iPhone") && !mb("iPod") && !mb("iPad");
  };
  mb("Opera");
  mb("Trident") || mb("MSIE");
  mb("Edge");
  !mb("Gecko") ||
    (-1 != jb.toLowerCase().indexOf("webkit") && !mb("Edge")) ||
    mb("Trident") ||
    mb("MSIE") ||
    mb("Edge");
  -1 != jb.toLowerCase().indexOf("webkit") && !mb("Edge") && mb("Mobile");
  mb("Macintosh");
  mb("Windows");
  mb("Linux") || mb("CrOS");
  var Lk = oa.navigator || null;
  Lk && (Lk.appVersion || "").indexOf("X11");
  mb("Android");
  Kk();
  mb("iPad");
  mb("iPod");
  Kk() || mb("iPad") || mb("iPod");
  jb.toLowerCase().indexOf("kaios");
  var Mk = function (a, b) {
      for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames[b]);
        } catch (k) {
          e = !1;
        }
        if (e) return c;
        var f;
        a: {
          try {
            var h = c.parent;
            if (h && h != c) {
              f = h;
              break a;
            }
          } catch (k) {}
          f = null;
        }
        if (!(c = f)) break;
      }
      return null;
    },
    Nk = function (a) {
      var b = A;
      b = void 0 === b ? window.document : b;
      if (!a || !b.head) return null;
      var c = document.createElement("meta");
      b.head.appendChild(c);
      c.httpEquiv = "origin-trial";
      c.content = a;
      return c;
    };
  var Ok = function () {};
  var Pk = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Qk = function (a, b) {
      this.s = a;
      this.o = null;
      this.F = {};
      this.aa = 0;
      this.O = void 0 === b ? 500 : b;
      this.C = null;
    };
  ma(Qk, Ok);
  var Sk = function (a) {
    return "function" === typeof a.s.__tcfapi || null != Rk(a);
  };
  Qk.prototype.addEventListener = function (a) {
    var b = {},
      c = wb(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.O &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.O));
    var e = function (f, h) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Pk(b)),
          (h && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), h || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Tk(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Qk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Tk(this, "removeEventListener", null, a.listenerId);
  };
  var Vk = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === h && (k = 1))
        : 3 === c && ((k = 1), 1 === h && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Uk(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n &&
            "1" === b &&
            a.purposeOneTreatment &&
            ("DE" === a.publisherCC || (Ad(wd) && "CH" === a.publisherCC))
              ? !0
              : n && Uk(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Uk(a.purpose.legitimateInterests, b) &&
                Uk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Uk = function (a, b) {
      return !(!a || !a[b]);
    },
    Tk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Rk(a)) {
        Wk(a);
        var f = ++a.aa;
        a.F[f] = c;
        if (a.o) {
          var h = {};
          a.o.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            "*"
          );
        }
      } else c({}, !1);
    },
    Rk = function (a) {
      if (a.o) return a.o;
      a.o = Mk(a.s, "__tcfapiLocator");
      return a.o;
    },
    Wk = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.F[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Jk(a.s, a.C));
    };
  var Xk = !0;
  Xk = !1;
  var Yk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Zk = Ik("", 550),
    $k = Ik("", 500);
  function al() {
    var a = Df.tcf || {};
    return (Df.tcf = a);
  }
  var bl = function (a, b) {
      this.C = a;
      this.o = b;
      this.s = Sa();
    },
    cl = function (a) {},
    dl = function (a) {},
    jl = function () {
      var a = al(),
        b = new Qk(m, Xk ? 3e3 : -1),
        c = new bl(b, a);
      if (
        (el()
          ? !0 === m.gtag_enable_tcf_support
          : !1 !== m.gtag_enable_tcf_support) &&
        !a.active &&
        ("function" === typeof m.__tcfapi || Sk(b))
      ) {
        a.active = !0;
        a.yc = {};
        fl();
        var d = null;
        Xk
          ? (d = m.setTimeout(function () {
              gl(a);
              hl(a);
              d = null;
            }, $k))
          : (a.tcString = "tcunavailable");
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null));
            if (0 !== e.internalErrorState) gl(a), hl(a), cl(c);
            else {
              var f;
              a.gdprApplies = e.gdprApplies;
              if (!1 === e.gdprApplies) (f = il()), b.removeEventListener(e);
              else if (
                "tcloaded" === e.eventStatus ||
                "useractioncomplete" === e.eventStatus ||
                "cmpuishown" === e.eventStatus
              ) {
                var h = {},
                  k;
                for (k in Yk)
                  if (Yk.hasOwnProperty(k))
                    if ("1" === k) {
                      var l,
                        n = e,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      var q;
                      var r = n;
                      !1 === r.gdprApplies
                        ? (q = !0)
                        : (void 0 === r.internalErrorState &&
                            (r.internalErrorState = Pk(r)),
                          (q =
                            "error" === r.cmpStatus ||
                            0 !== r.internalErrorState ||
                            ("loaded" === r.cmpStatus &&
                              ("tcloaded" === r.eventStatus ||
                                "useractioncomplete" === r.eventStatus))
                              ? !0
                              : !1));
                      l = q
                        ? !1 === n.gdprApplies ||
                          "tcunavailable" === n.tcString ||
                          (void 0 === n.gdprApplies && !p) ||
                          "string" !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : Vk(n, "1", 0)
                        : !1;
                      h["1"] = l;
                    } else h[k] = Vk(e, k, Yk[k]);
                f = h;
              }
              f &&
                ((a.tcString = e.tcString || "tcempty"),
                (a.yc = f),
                hl(a),
                cl(c));
            }
          }),
            dl(c);
        } catch (e) {
          d && (clearTimeout(d), (d = null)), gl(a), hl(a);
        }
      }
    };
  function gl(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Xk && (a.yc = il());
  }
  function fl() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Zk), a);
    Zd(b);
  }
  var el = function () {
    var a = !1;
    a = !0;
    return a;
  };
  function il() {
    var a = {},
      b;
    for (b in Yk) Yk.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function hl(a) {
    var b = {},
      c = ((b.ad_storage = a.yc["1"] ? "granted" : "denied"), b);
    kl();
    $d(c, 0);
  }
  var ll = function () {
      var a = al();
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    },
    kl = function () {
      var a = al();
      return a.active ? a.tcString || "" : "";
    },
    ml = function () {
      var a = al();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    nl = function (a) {
      if (!Yk.hasOwnProperty(String(a))) return !0;
      var b = al();
      return b.active && b.yc ? !!b.yc[String(a)] : !0;
    };
  var ol = !1;
  var pl = !1;
  function ql(a) {
    var b = String(m.location).split(/[?#]/)[0],
      c = Cf.Rg || m._CONSENT_MODE_SALT,
      d;
    if (a) {
      var e;
      if (c) {
        var f = b + a + c,
          h = 1,
          k,
          l,
          n;
        if (f)
          for (h = 0, l = f.length - 1; 0 <= l; l--)
            (n = f.charCodeAt(l)),
              (h = ((h << 6) & 268435455) + n + (n << 14)),
              (k = h & 266338304),
              (h = 0 != k ? h ^ (k >> 21) : h);
        e = String(h);
      } else e = "0";
      d = e;
    } else d = "";
    return d;
  }
  function rl(a) {
    function b(t) {
      var v;
      Df.reported_gclid || (Df.reported_gclid = {});
      v = Df.reported_gclid;
      var x;
      x =
        !h || (Rd() && !L(K.D))
          ? l + (t ? "gcu" : "gcs")
          : l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
      if (!v[x]) {
        v[x] = !0;
        var y = [],
          w = {},
          z = function (I, N) {
            N && (y.push(I + "=" + encodeURIComponent(N)), (w[I] = !0));
          },
          B = "https://www.google.com";
        if (Rd()) {
          var C = L(K.D);
          z("gcs", ae());
          t && z("gcu", "1");
          Sd() && z("gcd", "G1" + Xd(Pd));
          Df.dedupe_gclid || (Df.dedupe_gclid = "" + zg());
          z("rnd", Df.dedupe_gclid);
          if ((!l || (n && "aw.ds" !== n)) && L(K.D)) {
            var E = xh("_gcl_aw");
            z("gclaw", E.join("."));
          }
          z("url", String(m.location).split(/[?#]/)[0]);
          z("dclid", sl(d, p));
          var G = !1;
          G = !0;
          C || (!d && !G) || (B = "https://pagead2.googlesyndication.com");
        }
        z("gdpr_consent", kl()), z("gdpr", ml());
        "1" === hh(!1)._up && z("gtm_up", "1");
        z("gclid", sl(d, l));
        z("gclsrc", n);
        if (
          !(w.gclid || w.dclid || w.gclaw) &&
          (z("gbraid", sl(d, q)), !w.gbraid && Rd() && L(K.D))
        ) {
          var D = xh("_gcl_gb");
          z("gclgb", D.join("."));
        }
        z("gtm", Hk(!e));
        h && L(K.D) && (Kg(f || {}), z("auid", Gg[Hg(f.prefix)] || ""));
        ol || (a.gd && z("did", a.gd)),
          pl && (a.Kb && z("gdid", a.Kb), a.Jb && z("edid", a.Jb));
        var M = B + "/pagead/landing?" + y.join("&");
        Qb(M);
      }
    }
    var c = !!a.me,
      d = !!a.sa,
      e = a.U,
      f = void 0 === a.ed ? {} : a.ed,
      h = void 0 === a.nd ? !0 : a.nd,
      k = Dh(),
      l = k.gclid || "",
      n = k.gclsrc,
      p = k.dclid || "",
      q = k.gbraid || "",
      r = !c && ((!l || (n && "aw.ds" !== n) ? !1 : !0) || q),
      u = Rd();
    if (r || u)
      u
        ? ce(
            function () {
              b();
              L(K.D) ||
                be(function (t) {
                  return b(!0, t.Wh);
                }, K.D);
            },
            [K.D]
          )
        : b();
  }
  function sl(a, b) {
    var c = a && !L(K.D);
    return b && c ? "0" : b;
  }
  var tl = function () {
      this.o = {};
    },
    ul = function (a, b, c) {
      null != c && (a.o[b] = c);
    },
    vl = function (a) {
      return Object.keys(a.o)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.o[b]);
        })
        .join("&");
    },
    xl = function (a, b, c, d) {};
  var zl = !1,
    Al = Number("200");
  function Bl() {
    if (!m.Promise) return !1;
    va(A.interestCohort) ||
      zl ||
      ((zl = !0),
      Nk(
        "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
      ));
    return va(A.interestCohort);
  }
  function Cl() {
    var a = Df.floc;
    if (a) {
      var b = a.ts,
        c = a.floc;
      if (b && c && 1e3 > Sa() - b) return Promise.resolve(c);
    }
    var d = void 0;
    try {
      d = Promise.race([
        A.interestCohort().then(function (e) {
          Df.floc = { ts: Sa(), floc: e };
          return e;
        }),
        new Promise(function (e) {
          m.setTimeout(function () {
            return e();
          }, Al);
        }),
      ]).catch(function () {});
    } catch (e) {
      return;
    }
    return d;
  }
  var Dl = ["aw", "dc", "gb"];
  function El(a, b, c, d) {
    var e = a.Hg,
      f = a.callback,
      h = a.mg;
    if ("function" === typeof f)
      if (e === K.Ad && void 0 === h) {
        var k = d(b.prefix, c);
        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
      } else e === K.gh ? (Kg(b, !1), f(Gg[Hg(b.prefix)])) : f(h);
  }
  function Fl(a, b) {
    var c = a.Vf,
      d = a.kg,
      e = a.Eg;
    if (a.Ib) {
      var f = void 0 === c ? !0 : !!c;
      ph(d[K.Ab], !!d[K.P]) && Ih(Dl, b);
      Fh(b);
      Lh(Dl, b);
      Zh(f, b);
    }
    d[K.P] && Kh(Dl, d[K.P], d[K.Wb], !!d[K.Bb], b.prefix);
    e && Nh(["aw", "dc", "gb"]);
  }
  var Dm = function () {
      var a = !0;
      (nl(7) && nl(9) && nl(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Cm() && (a = !1);
      return a;
    },
    Cm = function () {
      var a = !0;
      (nl(3) && nl(4)) || (a = !1);
      return a;
    };
  var jn = !1;
  var kn = !1;
  kn = !0;
  function ln() {
    var a = Df;
    return (a.gcq = a.gcq || new mn());
  }
  var nn = function (a, b, c) {
      ln().register(a, b, c);
    },
    on = function (a, b, c, d) {
      ln().push("event", [b, a], c, d);
    },
    pn = function (a, b) {
      ln().push("config", [a], b);
    },
    qn = function (a, b, c, d) {
      ln().push("get", [a, b], c, d);
    },
    rn = {},
    sn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.C = null;
      this.o = !1;
    },
    tn = function (a, b, c, d, e) {
      this.type = a;
      this.C = b;
      this.U = c || "";
      this.o = d;
      this.s = e;
    },
    mn = function () {
      this.s = {};
      this.C = {};
      this.o = [];
      this.F = { AW: !1, UA: !1 };
      this.enableDeferrableCommandAfterConfig = jn;
    },
    un = function (a, b) {
      var c = ci(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new sn());
    },
    vn = function (a, b, c) {
      if (b) {
        var d = ci(b);
        if (d && 1 === un(a, b).status) {
          un(a, b).status = 2;
          var e = {};
          Xj &&
            (e.timeoutId = m.setTimeout(function () {
              ud(38);
              Dj();
            }, 3e3));
          a.push("require", [e], d.containerId);
          rn[d.containerId] = Sa();
          if (fi()) {
          } else {
            var h =
                "/gtag/js?id=" +
                encodeURIComponent(d.containerId) +
                "&l=dataLayer&cx=c",
              k =
                ("http:" != m.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + h),
              l = Ck(c, h) || k;
            Db(l);
          }
        }
      }
    },
    wn = function (a, b, c, d) {
      if (d.U) {
        var e = un(a, d.U),
          f = e.C;
        if (f) {
          var h = H(c),
            k = H(e.targetConfig[d.U]),
            l = H(e.containerConfig),
            n = H(e.remoteConfig),
            p = H(a.C),
            q = Vf("gtm.uniqueEventId"),
            r = ci(d.U).prefix,
            u = Ua(function () {
              var v = h[K.zb];
              v && F(v);
            }),
            t = yf(
              xf(
                zf(
                  wf(vf(uf(tf(sf(rf(h), k), l), n), p), function () {
                    kk(q, r, "2");
                    kn && u();
                  }),
                  function () {
                    kk(q, r, "3");
                    kn && u();
                  }
                ),
                function (v, x) {
                  a.F[v] = x;
                }
              ),
              function (v) {
                return a.F[v];
              }
            );
          try {
            kk(q, r, "1");
            f(d.U, b, d.C, t);
          } catch (v) {
            kk(q, r, "4");
          }
        }
      }
    };
  mn.prototype.register = function (a, b, c) {
    var d = un(this, a);
    if (3 !== d.status) {
      d.C = b;
      d.status = 3;
      if (c) {
        H(d.remoteConfig, c);
        d.remoteConfig = c;
      }
      var e = ci(a),
        f = rn[e.containerId];
      if (void 0 !== f) {
        var h = Df[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        Df[e.containerId]._spx && (k = k.toLowerCase());
        var l = Vf("gtm.uniqueEventId"),
          n = k,
          p = Sa() - h;
        if (Xj && !Ij[l]) {
          l !== Ej && (zj(), (Ej = l));
          var q = n + "." + Math.floor(h - f) + "." + Math.floor(p);
          Mj = Mj ? Mj + "," + q : "&cl=" + q;
        }
        delete rn[e.containerId];
      }
      this.flush();
    }
  };
  mn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Sa() / 1e3);
    vn(this, c, b[0][K.oa] || this.C[K.oa]);
    jn && c && un(this, c).o && (d = !1);
    this.o.push(new tn(a, e, c, b, d));
    d || this.flush();
  };
  mn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Sa() / 1e3);
    0 < this.o.length
      ? this.o.splice(1, 0, new tn(a, d, c, b, !1))
      : this.o.push(new tn(a, d, c, b, !1));
  };
  mn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.o.length; ) {
      var f = this.o[0];
      if (f.s)
        jn
          ? !f.U || un(this, f.U).o
            ? ((f.s = !1), this.o.push(f))
            : c.push(f)
          : ((f.s = !1), this.o.push(f)),
          this.o.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== un(this, f.U).status && !a) {
              jn && this.o.push.apply(this.o, c);
              return;
            }
            Xj && m.clearTimeout(f.o[0].timeoutId);
            break;
          case "set":
            Ja(f.o[0], function (r, u) {
              H(Ya(r, u), b.C);
            });
            break;
          case "config":
            e.Ja = {};
            Ja(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  H(Ya(u, t), r.Ja);
                };
              })(e)
            );
            var h = !!e.Ja[K.Sc];
            delete e.Ja[K.Sc];
            var k = un(this, f.U),
              l = ci(f.U),
              n = l.containerId === l.id;
            h || (n ? (k.containerConfig = {}) : (k.targetConfig[f.U] = {}));
            (k.o && h) || wn(this, K.Da, e.Ja, f);
            k.o = !0;
            delete e.Ja[K.ac];
            n ? H(e.Ja, k.containerConfig) : H(e.Ja, k.targetConfig[f.U]);
            jn && (d = !0);
            break;
          case "event":
            e.Cc = {};
            Ja(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  H(Ya(u, t), r.Cc);
                };
              })(e)
            );
            wn(this, f.o[1], e.Cc, f);
            break;
          case "get":
            var p = {},
              q = ((p[K.Na] = f.o[0]), (p[K.Va] = f.o[1]), p);
            wn(this, K.La, q, f);
        }
        this.o.shift();
        xn(this, f);
      }
      e = { Ja: e.Ja, Cc: e.Cc };
    }
    jn && (this.o.push.apply(this.o, c), d && this.flush());
  };
  var xn = function (a, b) {
    if ("require" !== b.type)
      if (b.U)
        for (
          var c = a.getCommandListeners(b.U)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var h = f.s[b.type] || [], k = 0; k < h.length; k++) h[k]();
          }
  };
  mn.prototype.getRemoteConfig = function (a) {
    return un(this, a).remoteConfig;
  };
  mn.prototype.getCommandListeners = function (a) {
    return un(this, a).s;
  };
  var yn = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Rb(a, "className"),
        "gtm.elementId": a["for"] || Mb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Rb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Rb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    zn = function (a) {
      Df.hasOwnProperty("autoEventsSettings") || (Df.autoEventsSettings = {});
      var b = Df.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    An = function (a, b, c) {
      zn(a)[b] = c;
    },
    Bn = function (a, b, c, d) {
      var e = zn(a),
        f = Ta(e, b, d);
      e[b] = c(f);
    },
    Cn = function (a, b, c) {
      var d = zn(a);
      return Ta(d, b, c);
    };
  var Dn = ["input", "select", "textarea"],
    En = ["button", "hidden", "image", "reset", "submit"],
    Fn = function (a) {
      var b = a.tagName.toLowerCase();
      return !Ba(Dn, function (c) {
        return c === b;
      }) ||
        ("input" === b &&
          Ba(En, function (c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Gn = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : A.getElementById(a.form)
        : Pb(a, ["form"], 100);
    },
    Hn = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var h = a.elements[e];
        if (Fn(h)) {
          if (h.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var In = !!m.MutationObserver,
    Jn = void 0,
    Kn = function (a) {
      if (!Jn) {
        var b = function () {
          var c = A.body;
          if (c)
            if (In)
              new MutationObserver(function () {
                for (var e = 0; e < Jn.length; e++) F(Jn[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Kb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  F(function () {
                    d = !1;
                    for (var e = 0; e < Jn.length; e++) F(Jn[e]);
                  }));
              });
            }
        };
        Jn = [];
        A.body ? b() : F(b);
      }
      Jn.push(a);
    };
  var Mn = !1,
    Nn = [];
  function On() {
    if (!Mn) {
      Mn = !0;
      for (var a = 0; a < Nn.length; a++) F(Nn[a]);
    }
  }
  var Pn = function (a) {
    Mn ? F(a) : Nn.push(a);
  };
  function Qn(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var Rn = new Fa();
  function Sn(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Rn.get(e);
      f || ((f = new RegExp(b, d)), Rn.set(e, f));
      return f.test(a);
    } catch (h) {
      return !1;
    }
  }
  function Tn(a, b) {
    function c(h) {
      var k = ze(h),
        l = xe(k, "protocol"),
        n = xe(k, "host", !0),
        p = xe(k, "port"),
        q = xe(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" == l && "80" == p) ||
        ("https" == l && "443" == p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Un(a) {
    return Vn(a) ? 1 : 0;
  }
  function Vn(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && xa(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H({ arg1: c[d], any_of: void 0 }, e);
        if (Un(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) {
            var h = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
            ];
            try {
              for (var k = 0; k < h.length; k++)
                if (b[h[k]]) {
                  f = b[h[k]](c);
                  break a;
                }
            } catch (n) {}
          }
          f = !1;
        }
        return f;
      case "_ew":
        return Qn(b, c);
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var l;
        l = String(b).split(",");
        return 0 <= ya(l, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Sn(b, c, a.ignore_case);
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return Tn(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  var Wn = {},
    Xn = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++)
        (Wn[b[c]] = Wn[b[c]] || []), Wn[b[c]].push(a);
    },
    Yn = function (a) {
      Ja(Wn, function (b, c) {
        var d = ya(c, a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zn = "HA GF G UA AW DC".split(" "),
    $n = !1;
  $n = !0;
  var ao = !1,
    bo = !1;
  function co(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = H(b)),
      b[K.zb] && (c.eventCallback = b[K.zb]),
      b[K.Kc] && (c.eventTimeout = b[K.Kc]));
    return c;
  }
  function eo(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Qf() });
    return a["gtm.uniqueEventId"];
  }
  function fo() {
    return ao;
  }
  var go = {
      config: function (a) {
        var b,
          c = eo(a);
        return b;
      },
      consent: function (a) {
        function b() {
          fo() && H(a[2], { subcommand: a[1] });
        }
        if (3 === a.length) {
          ud(39);
          var c = Qf(),
            d = a[1];
          "default" === d
            ? (b(), Zd(a[2]))
            : "update" === d && (b(), $d(a[2], c));
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && g(b)) {
          var c;
          if (2 < a.length) {
            if ((!Yb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = co(b, c),
            e = eo(a);
          d["gtm.uniqueEventId"] = e;
          return d;
        }
      },
      get: function (a) {},
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          bo = !0;
          fo();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = eo(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Yb(a[1])
          ? (b = H(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((b = {}),
            Yb(a[2]) || xa(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          b._clear = !0;
          return b;
        }
      },
    },
    ho = { policy: !0 };
  var io = function (a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    ko = function (a) {
      var b = jo(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Bo = function (a) {
    if (Ao(a)) return a;
    this.o = a;
  };
  Bo.prototype.mi = function () {
    return this.o;
  };
  var Ao = function (a) {
    return !a || "object" !== Wb(a) || Yb(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  Bo.prototype.getUntrustedUpdateValue = Bo.prototype.mi;
  var Co = [],
    Do = !1,
    Eo = !1,
    Fo = !1,
    Go = function (a) {
      return m["dataLayer"].push(a);
    },
    Ho = function (a) {
      var b = Df["dataLayer"],
        c = b ? b.subscribers : 1,
        d = 0,
        e = a;
      return function () {
        ++d === c && (e(), (e = null));
      };
    };
  function Io(a) {
    var b = a._clear;
    Ja(a, function (d, e) {
      "_clear" !== d && (b && Yf(d, void 0), Yf(d, e));
    });
    Lf || (Lf = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Qf()), (a["gtm.uniqueEventId"] = c), Yf("gtm.uniqueEventId", c));
    return Ak(a);
  }
  function Jo() {
    var a = Co[0];
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function Ko() {
    for (var a = !1; !Fo && 0 < Co.length; ) {
      if (!Eo && Jo()) {
        var b = {};
        Co.unshift(((b.event = "gtm.init"), b));
        Eo = !0;
      }
      if (!Do && Jo()) {
        var c = {};
        Co.unshift(((c.event = "gtm.init_consent"), c));
        Do = !0;
      }
      Fo = !0;
      delete Sf.eventModel;
      Uf();
      var d = Co.shift();
      if (null != d) {
        var e = Ao(d);
        if (e) {
          var f = d;
          d = Ao(f) ? f.getUntrustedUpdateValue() : void 0;
          for (
            var h = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              k = 0;
            k < h.length;
            k++
          ) {
            var l = h[k],
              n = Vf(l, 1);
            if (xa(n) || Yb(n)) n = H(n);
            Tf[l] = n;
          }
        }
        try {
          if (va(d))
            try {
              d.call(Wf);
            } catch (y) {}
          else if (xa(d)) {
            var p = d;
            if (g(p[0])) {
              var q = p[0].split("."),
                r = q.pop(),
                u = p.slice(1),
                t = Vf(q.join("."), 2);
              if (void 0 !== t && null !== t)
                try {
                  t[r].apply(t, u);
                } catch (y) {}
            }
          } else {
            if (La(d)) {
              a: {
                var v = d;
                if (v.length && g(v[0])) {
                  var x = go[v[0]];
                  if (x && (!e || !ho[v[0]])) {
                    d = x(v);
                    break a;
                  }
                }
                d = void 0;
              }
              if (!d) {
                Fo = !1;
                continue;
              }
            }
            a = Io(d) || a;
          }
        } finally {
          e && Uf(!0);
        }
      }
      Fo = !1;
    }
    return !a;
  }
  function Lo() {
    var b = Ko();
    try {
      io(m["dataLayer"], Cf.M);
    } catch (c) {}
    return b;
  }
  var No = function () {
      var a = Bb("dataLayer", []),
        b = Bb("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      Oi(function () {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
      });
      Pn(function () {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < Df.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++)
            e[f] = new Bo(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        var h = c.apply(a, e);
        Co.push.apply(Co, e);
        if (300 < this.length) for (ud(4); 300 < this.length; ) this.shift();
        var k = "boolean" !== typeof h || h;
        return Ko() && k;
      };
      var d = a.slice(0);
      Co.push.apply(Co, d);
      if (Mo()) {
        F(Lo);
      }
    },
    Mo = function () {
      var a = !0;
      return a;
    };
  var Oo = {};
  Oo.Vc = new String("undefined");
  var Po = function (a) {
    this.o = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Oo.Vc ? b : a[d]);
      return c.join("");
    };
  };
  Po.prototype.toString = function () {
    return this.o("undefined");
  };
  Po.prototype.valueOf = Po.prototype.toString;
  Oo.Kh = Po;
  Oo.de = {};
  Oo.$h = function (a) {
    return new Po(a);
  };
  var Qo = {};
  Oo.Ni = function (a, b) {
    var c = Qf();
    Qo[c] = [a, b];
    return c;
  };
  Oo.Wf = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Qo[c];
      if (d && "function" === typeof d[b]) d[b]();
      Qo[c] = void 0;
    };
  };
  Oo.si = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Oo.Hi = function (a) {
    if (a === Oo.Vc) return a;
    var b = Qf();
    Oo.de[b] = a;
    return 'google_tag_manager["' + Cf.M + '"].macro(' + b + ")";
  };
  Oo.Di = function (a, b, c) {
    a instanceof Oo.Kh && ((a = a.o(Oo.Ni(b, c))), (b = ua));
    return { ni: a, onSuccess: b };
  };
  var ap = m.clearTimeout,
    bp = m.setTimeout,
    Q = function (a, b, c) {
      if (fi()) {
        b && F(b);
      } else return Db(a, b, c);
    },
    cp = function () {
      return new Date();
    },
    dp = function () {
      return m.location.href;
    },
    ep = function (a) {
      return xe(ze(a), "fragment");
    },
    fp = function (a) {
      return ye(ze(a));
    },
    gp = function (a, b) {
      return Vf(a, b || 2);
    },
    hp = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Go(a)))
        : (d = Go(a));
      return d;
    },
    ip = function (a, b) {
      m[a] = b;
    },
    U = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    jp = function (a, b, c) {
      return jg(a, b, void 0 === c ? !0 : !!c);
    },
    kp = function (a, b, c) {
      return 0 === wg(a, b, c);
    },
    lp = function (a, b) {
      if (fi()) {
        b && F(b);
      } else Fb(a, b);
    },
    mp = function (a) {
      return !!Cn(a, "init", !1);
    },
    np = function (a) {
      An(a, "init", !0);
    },
    op = function (a) {
      var b = Jf + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      Q(hi("https://", "http://", b));
    },
    pp = function (a, b, c) {
      Xj && (Zb(a) || lk(c, b, a));
    };
  var qp = Oo.Di;
  var Np = encodeURI,
    X = encodeURIComponent,
    Op = Gb;
  var Pp = function (a, b) {
    if (!a) return !1;
    var c = xe(ze(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Qp = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  function wr() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var xr = function () {
      var a = wr();
      a.hid = a.hid || Ca();
      return a.hid;
    },
    yr = function (a, b) {
      var c = wr();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Zr = function () {
    if (va(m.__uspapi)) {
      var a = "";
      try {
        m.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && /^[\da-zA-Z-]{1,20}$/.test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var us = window,
    vs = document,
    ws = function (a) {
      var b = us._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === us["ga-disable-" + a]))
        return !0;
      try {
        var c = us.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = fg("AMP_TOKEN", String(vs.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return vs.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var xs = {};
  function As(a) {
    delete a.eventModel[K.ac];
    Cs(a.eventModel);
  }
  var Cs = function (a) {
    Ja(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.Pa] || {};
    Ja(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var Fs = function (a, b, c) {
      on(b, c, a);
    },
    Gs = function (a, b, c) {
      on(b, c, a, !0);
    },
    Ks = function (a, b) {};
  function Hs(a, b) {}
  var Z = { g: {} };
  (Z.g.gaawc = ["google"]),
    (function () {
      function a(b, c, d) {
        for (var e = 0; e < c.length; e++)
          b.hasOwnProperty(c[e]) && (b[c[e]] = d(b[c[e]]));
      }
      (function (b) {
        Z.__gaawc = b;
        Z.__gaawc.h = "gaawc";
        Z.__gaawc.m = !0;
        Z.__gaawc.priorityOverride = 10;
      })(function (b) {
        var c = String(b.vtp_measurementId),
          d = Qp(b.vtp_fieldsToSet, "name", "value") || {};
        if (d.hasOwnProperty(K.Pa) || b.vtp_userProperties) {
          var e = d[K.Pa] || {};
          H(Qp(b.vtp_userProperties, "name", "value"), e);
          d[K.Pa] = e;
        }
        b.vtp_enableSendToServerContainer &&
          b.vtp_serverContainerUrl &&
          ((d[K.oa] = b.vtp_serverContainerUrl), (d[K.Ub] = !0));
        var f = b.vtp_userDataVariable;
        f && (d[K.ya] = f);
        a(d, K.yf, function (h) {
          return Na(h);
        });
        a(d, K.Af, function (h) {
          return Number(h);
        });
        d.send_page_view = b.vtp_sendPageView;
        pn(d, c);
        F(b.vtp_gtmOnSuccess);
      });
    })();
  (Z.g.gaawe = ["google"]),
    (function () {
      function a(d, e, f) {
        for (var h = 0; h < e.length; h++)
          d.hasOwnProperty(e[h]) && (d[e[h]] = f(d[e[h]]));
      }
      function b(d, e, f) {
        var h = {
            id: "transaction_id",
            revenue: "value",
            list: "item_list_name",
          },
          k = {
            click: K.zd,
            detail: K.Ka,
            add: K.ub,
            remove: K.vb,
            checkout: K.cb,
            checkout_option: "checkout_option",
            purchase: K.xa,
            refund: K.xb,
          },
          l = {},
          n = function (u, t) {
            l[u] = l[u] || t;
          },
          p = function (u, t, v) {
            v = void 0 === v ? !1 : v;
            c.push(6);
            if (u) {
              l.items = l.items || [];
              for (var x = {}, y = 0; y < u.length; x = { rb: x.rb }, y++)
                (x.rb = {}),
                  Ja(
                    u[y],
                    (function (z) {
                      return function (B, C) {
                        v && "id" === B
                          ? (z.rb.promotion_id = C)
                          : v && "name" === B
                          ? (z.rb.promotion_name = C)
                          : (z.rb[B] = C);
                      };
                    })(x)
                  ),
                  l.items.push(x.rb);
            }
            if (t)
              for (var w in t) h.hasOwnProperty(w) ? n(h[w], t[w]) : n(w, t[w]);
          },
          q;
        "dataLayer" === d.vtp_getEcommerceDataFrom
          ? (q = d.vtp_gtmCachedValues.eventModel) ||
            (q = d.vtp_gtmCachedValues.ecommerce)
          : (q = d.vtp_ecommerceMacroData);
        if (Yb(q)) {
          c.push(5);
          for (var r in q)
            q.hasOwnProperty(r) &&
              ("currencyCode" === r
                ? n("currency", q.currencyCode)
                : "impressions" === r && e === K.wb
                ? p(q.impressions, null)
                : "promoClick" === r && e === K.Gc
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : "promoView" === r && e === K.Rb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : k.hasOwnProperty(r)
                ? e === k[r] && p(q[r].products, q[r].actionField)
                : (l[r] = q[r]));
          H(l, f);
        }
      }
      var c = [];
      (function (d) {
        Z.__gaawe = d;
        Z.__gaawe.h = "gaawe";
        Z.__gaawe.m = !0;
        Z.__gaawe.priorityOverride = 0;
      })(function (d) {
        var e = String(d.vtp_measurementIdOverride || d.vtp_measurementId),
          f = String(d.vtp_eventName);
        if ("_" === f.charAt(0)) F(d.vtp_gtmOnFailure);
        else {
          var h = {};
          c = [];
          d.vtp_sendEcommerceData &&
            (0 <= K.zf.indexOf(f) || "checkout_option" === f) &&
            b(d, f, h);
          var k = Qp(d.vtp_eventParameters, "name", "value"),
            l;
          for (l in k) k.hasOwnProperty(l) && (h[l] = k[l]);
          var n = d.vtp_userDataVariable;
          n && (h[K.ya] = n);
          if (h.hasOwnProperty(K.Pa) || d.vtp_userProperties) {
            var p = h[K.Pa] || {};
            H(Qp(d.vtp_userProperties, "name", "value"), p);
            h[K.Pa] = p;
          }
          Cs(h);
          0 < c.length && (h[K.Vd] = c);
          a(h, K.yf, function (q) {
            return Na(q);
          });
          a(h, K.Af, function (q) {
            return Number(q);
          });
          on(f, h, e);
          F(d.vtp_gtmOnSuccess);
        }
      });
    })();

  (Z.g.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.h = "e";
        Z.__e.m = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.g.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.h = "f";
        Z.__f.m = !0;
        Z.__f.priorityOverride = 0;
      })(function (a) {
        var b = gp("gtm.referrer", 1) || A.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? xe(
                ze(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : fp(String(b))
          : String(b);
      });
    })();
  (Z.g.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = yn(c, "gtm.click");
          hp(d);
        }
      }
      (function (b) {
        Z.__cl = b;
        Z.__cl.h = "cl";
        Z.__cl.m = !0;
        Z.__cl.priorityOverride = 0;
      })(function (b) {
        if (!mp("cl")) {
          var c = U("document");
          Kb(c, "click", a, !0);
          np("cl");
        }
        F(b.vtp_gtmOnSuccess);
      });
    })();

  (Z.g.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.h = "u";
        Z.__u.m = !0;
        Z.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : gp("gtm.url", 1)) || dp();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return fp(String(c));
        var e = ze(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var h = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              l = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            h
              ? xa(k)
                ? (n = k)
                : (n = String(k).replace(/\s+/g, "").split(","))
              : (n = [String(k)]);
            for (var p = 0; p < n.length; p++) {
              var q = xe(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!l || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = xe(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0,
            void 0
          );
        return f;
      });
    })();
  (Z.g.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.h = "v";
        Z.__v.m = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = gp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        pp(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  var Ls = {};
  (Ls.macro = function (a) {
    if (Oo.de.hasOwnProperty(a)) return Oo.de[a];
  }),
    (Ls.onHtmlSuccess = Oo.Wf(!0)),
    (Ls.onHtmlFailure = Oo.Wf(!1));
  Ls.dataLayer = Wf;
  Ls.callback = function (a) {
    Of.hasOwnProperty(a) && va(Of[a]) && Of[a]();
    delete Of[a];
  };
  Ls.bootstrap = 0;
  Ls._spx = !1;
  function Ms() {
    Df[Cf.M] = Ls;
    Va(Pf, Z.g);
    Mc = Mc || Oo;
    Nc = Vc;
  }
  function Ns() {
    var a = !1;
    a && Xi("INIT");
    zd().s();
    Df = m.google_tag_manager = m.google_tag_manager || {};
    jl();
    qh.enable_gbraid_cookie_write = !0;
    if (Df[Cf.M]) {
      var b = Df.zones;
      b && b.unregisterChild(Cf.M);
    } else {
      for (
        var c = data.resource || {}, d = c.macros || [], e = 0;
        e < d.length;
        e++
      )
        yc.push(d[e]);
      for (var f = c.tags || [], h = 0; h < f.length; h++) Ic.push(f[h]);
      for (var k = c.predicates || [], l = 0; l < k.length; l++) Hc.push(k[l]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], r = {}, u = 0; u < q.length; u++)
          r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        zc.push(r);
      }
      Kc = Z;
      Lc = Un;
      Ms();
      No();
      Ji = !1;
      Ki = 0;
      if (
        ("interactive" == A.readyState && !A.createEventObject) ||
        "complete" == A.readyState
      )
        Mi();
      else {
        Kb(A, "DOMContentLoaded", Mi);
        Kb(A, "readystatechange", Mi);
        if (A.createEventObject && A.documentElement.doScroll) {
          var t = !0;
          try {
            t = !m.frameElement;
          } catch (z) {}
          t && Ni();
        }
        Kb(m, "load", Mi);
      }
      Mn = !1;
      "complete" === A.readyState ? On() : Kb(m, "load", On);
      Xj && m.setInterval(Rj, 864e5);
      Mf = new Date().getTime();
      if (a) {
        var w = bj("INIT");
      }
    }
  }
  (function (a) {
    if (!m["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (A.referrer) {
        var c = ze(A.referrer);
        b = "cct.google" === we(c, "host");
      }
      if (!b) {
        var d = jg("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((m["__TAGGY_INSTALLED"] = !0),
        Db("https://cct.google/taggy/agent.js"));
    }
    var f = function () {
        var n = m["google.tagmanager.debugui2.queue"];
        n ||
          ((n = []),
          (m["google.tagmanager.debugui2.queue"] = n),
          Db("https://www.googletagmanager.com/debug/bootstrap"));
        var p = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: Ab, containerProduct: "GTM", debug: !1 },
        };
        p.data.resume = function () {
          a();
        };
        Cf.Qg && (p.data.initialPublish = !0);
        n.push(p);
      },
      h = "x" === xe(m.location, "query", !1, void 0, "gtm_debug");
    if (!h && A.referrer) {
      var k = ze(A.referrer);
      h = "tagassistant.google.com" === we(k, "host");
    }
    if (!h) {
      var l = jg("__TAG_ASSISTANT");
      h = l.length && l[0].length;
    }
    m.__TAG_ASSISTANT_API && (h = !0);
    h && Ab ? f() : a();
  })(Ns);
})();
