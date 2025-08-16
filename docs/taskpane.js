/*! For license information please see taskpane.js.LICENSE.txt */
(self.webpackChunkoffice_addin_taskpane_react_js =
  self.webpackChunkoffice_addin_taskpane_react_js || []).push([
  [926],
  {
    2694: function (e, r, o) {
      "use strict";
      var t = o(6925);
      function n() {}
      function a() {}
      ((a.resetWarningCache = n),
        (e.exports = function () {
          function e(e, r, o, n, a, i) {
            if (i !== t) {
              var c = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((c.name = "Invariant Violation"), c);
            }
          }
          function r() {
            return e;
          }
          e.isRequired = e;
          var o = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: r,
            element: e,
            elementType: e,
            instanceOf: r,
            node: e,
            objectOf: r,
            oneOf: r,
            oneOfType: r,
            shape: r,
            exact: r,
            checkPropTypes: a,
            resetWarningCache: n,
          };
          return ((o.PropTypes = o), o);
        }));
    },
    5338: function (e, r, o) {
      "use strict";
      var t = o(40961);
      ((r.H = t.createRoot), t.hydrateRoot);
    },
    5556: function (e, r, o) {
      e.exports = o(2694)();
    },
    6925: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    14593: function (e, r, o) {
      "use strict";
      var t = o(96540),
        n = o.t(t, 2),
        a = o(5338),
        i = o(5556),
        c = o.n(i);
      const s = () => {
        const e = {};
        return function (r, o) {
          void 0 === e[r.id] && (r.insertCSSRules(o), (e[r.id] = !0));
        };
      };
      function l(e) {
        for (var r, o = 0, t = 0, n = e.length; n >= 4; ++t, n -= 4)
          ((r =
            1540483477 *
              (65535 &
                (r =
                  (255 & e.charCodeAt(t)) |
                  ((255 & e.charCodeAt(++t)) << 8) |
                  ((255 & e.charCodeAt(++t)) << 16) |
                  ((255 & e.charCodeAt(++t)) << 24))) +
            ((59797 * (r >>> 16)) << 16)),
            (o =
              (1540483477 * (65535 & (r ^= r >>> 24)) + ((59797 * (r >>> 16)) << 16)) ^
              (1540483477 * (65535 & o) + ((59797 * (o >>> 16)) << 16))));
        switch (n) {
          case 3:
            o ^= (255 & e.charCodeAt(t + 2)) << 16;
          case 2:
            o ^= (255 & e.charCodeAt(t + 1)) << 8;
          case 1:
            o = 1540483477 * (65535 & (o ^= 255 & e.charCodeAt(t))) + ((59797 * (o >>> 16)) << 16);
        }
        return (
          ((o = 1540483477 * (65535 & (o ^= o >>> 13)) + ((59797 * (o >>> 16)) << 16)) ^
            (o >>> 15)) >>>
          0
        ).toString(36);
      }
      function d(e) {
        return e.reduce(function (e, r) {
          var o = r[0],
            t = r[1];
          return ((e[o] = t), (e[t] = o), e);
        }, {});
      }
      function f(e) {
        return "number" == typeof e;
      }
      function u(e, r) {
        return -1 !== e.indexOf(r);
      }
      function h(e, r, o, t) {
        return r + ((n = o), 0 === parseFloat(n) ? n : "-" === n[0] ? n.slice(1) : "-" + n) + t;
        var n;
      }
      function g(e) {
        return e
          .replace(/ +/g, " ")
          .split(" ")
          .map(function (e) {
            return e.trim();
          })
          .filter(Boolean)
          .reduce(
            function (e, r) {
              var o = e.list,
                t = e.state,
                n = (r.match(/\(/g) || []).length,
                a = (r.match(/\)/g) || []).length;
              return (
                t.parensDepth > 0 ? (o[o.length - 1] = o[o.length - 1] + " " + r) : o.push(r),
                (t.parensDepth += n - a),
                { list: o, state: t }
              );
            },
            { list: [], state: { parensDepth: 0 } }
          ).list;
      }
      function p(e) {
        var r = g(e);
        if (r.length <= 3 || r.length > 4) return e;
        var o = r[0],
          t = r[1],
          n = r[2];
        return [o, r[3], n, t].join(" ");
      }
      var v = {
        padding: function (e) {
          var r = e.value;
          return f(r) ? r : p(r);
        },
        textShadow: function (e) {
          return (function (e) {
            for (var r = [], o = 0, t = 0, n = !1; t < e.length; )
              n || "," !== e[t]
                ? "(" === e[t]
                  ? ((n = !0), t++)
                  : ")" === e[t]
                    ? ((n = !1), t++)
                    : t++
                : (r.push(e.substring(o, t).trim()), (o = ++t));
            return (o != t && r.push(e.substring(o, t + 1)), r);
          })(e.value)
            .map(function (e) {
              return e.replace(/(^|\s)(-*)([.|\d]+)/, function (e, r, o, t) {
                return "0" === t ? e : r + ("" === o ? "-" : "") + t;
              });
            })
            .join(",");
        },
        borderColor: function (e) {
          return p(e.value);
        },
        borderRadius: function (e) {
          var r = e.value;
          if (f(r)) return r;
          if (u(r, "/")) {
            var o = r.split("/"),
              t = o[0],
              n = o[1];
            return (
              v.borderRadius({ value: t.trim() }) + " / " + v.borderRadius({ value: n.trim() })
            );
          }
          var a = g(r);
          switch (a.length) {
            case 2:
              return a.reverse().join(" ");
            case 4:
              var i = a[0],
                c = a[1],
                s = a[2];
              return [c, i, a[3], s].join(" ");
            default:
              return r;
          }
        },
        background: function (e) {
          var r = e.value,
            o = e.valuesToConvert,
            t = e.isRtl,
            n = e.bgImgDirectionRegex,
            a = e.bgPosDirectionRegex;
          if (f(r)) return r;
          var i = r
            .replace(
              /(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g,
              ""
            )
            .trim();
          return (
            (r = r.replace(
              i,
              v.backgroundPosition({
                value: i,
                valuesToConvert: o,
                isRtl: t,
                bgPosDirectionRegex: a,
              })
            )),
            v.backgroundImage({ value: r, valuesToConvert: o, bgImgDirectionRegex: n })
          );
        },
        backgroundImage: function (e) {
          var r = e.value,
            o = e.valuesToConvert,
            t = e.bgImgDirectionRegex;
          return u(r, "url(") || u(r, "linear-gradient(")
            ? r.replace(t, function (e, r, t) {
                return e.replace(t, o[t]);
              })
            : r;
        },
        backgroundPosition: function (e) {
          var r = e.value,
            o = e.valuesToConvert,
            t = e.isRtl,
            n = e.bgPosDirectionRegex;
          return r
            .replace(t ? /^((-|\d|\.)+%)/ : null, function (e, r) {
              return (function (e) {
                var r = e.indexOf(".");
                if (-1 === r) e = 100 - parseFloat(e) + "%";
                else {
                  var o = e.length - r - 2;
                  e = (e = 100 - parseFloat(e)).toFixed(o) + "%";
                }
                return e;
              })(r);
            })
            .replace(n, function (e) {
              return o[e];
            });
        },
        backgroundPositionX: function (e) {
          var r = e.value,
            o = e.valuesToConvert,
            t = e.isRtl,
            n = e.bgPosDirectionRegex;
          return f(r)
            ? r
            : v.backgroundPosition({
                value: r,
                valuesToConvert: o,
                isRtl: t,
                bgPosDirectionRegex: n,
              });
        },
        transition: function (e) {
          var r = e.value,
            o = e.propertiesToConvert;
          return r
            .split(/,\s*/g)
            .map(function (e) {
              var r = e.split(" ");
              return ((r[0] = o[r[0]] || r[0]), r.join(" "));
            })
            .join(", ");
        },
        transitionProperty: function (e) {
          var r = e.value,
            o = e.propertiesToConvert;
          return r
            .split(/,\s*/g)
            .map(function (e) {
              return o[e] || e;
            })
            .join(", ");
        },
        transform: function (e) {
          var r = e.value,
            o = "[^\\u0020-\\u007e]",
            t = "(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
            n =
              "((?:-?(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|" +
              o +
              "|" +
              t +
              ")(?:[_a-z0-9-]|" +
              o +
              "|" +
              t +
              ")*)?)|(?:inherit|auto))",
            a = new RegExp("(translateX\\s*\\(\\s*)" + n + "(\\s*\\))", "gi"),
            i = new RegExp(
              "(translate\\s*\\(\\s*)" + n + "((?:\\s*,\\s*" + n + "){0,1}\\s*\\))",
              "gi"
            ),
            c = new RegExp(
              "(translate3d\\s*\\(\\s*)" + n + "((?:\\s*,\\s*" + n + "){0,2}\\s*\\))",
              "gi"
            ),
            s = new RegExp("(rotate[ZY]?\\s*\\(\\s*)" + n + "(\\s*\\))", "gi");
          return r.replace(a, h).replace(i, h).replace(c, h).replace(s, h);
        },
      };
      ((v.objectPosition = v.backgroundPosition),
        (v.margin = v.padding),
        (v.borderWidth = v.padding),
        (v.boxShadow = v.textShadow),
        (v.webkitBoxShadow = v.boxShadow),
        (v.mozBoxShadow = v.boxShadow),
        (v.WebkitBoxShadow = v.boxShadow),
        (v.MozBoxShadow = v.boxShadow),
        (v.borderStyle = v.borderColor),
        (v.webkitTransform = v.transform),
        (v.mozTransform = v.transform),
        (v.WebkitTransform = v.transform),
        (v.MozTransform = v.transform),
        (v.transformOrigin = v.backgroundPosition),
        (v.webkitTransformOrigin = v.transformOrigin),
        (v.mozTransformOrigin = v.transformOrigin),
        (v.WebkitTransformOrigin = v.transformOrigin),
        (v.MozTransformOrigin = v.transformOrigin),
        (v.webkitTransition = v.transition),
        (v.mozTransition = v.transition),
        (v.WebkitTransition = v.transition),
        (v.MozTransition = v.transition),
        (v.webkitTransitionProperty = v.transitionProperty),
        (v.mozTransitionProperty = v.transitionProperty),
        (v.WebkitTransitionProperty = v.transitionProperty),
        (v.MozTransitionProperty = v.transitionProperty),
        (v["text-shadow"] = v.textShadow),
        (v["border-color"] = v.borderColor),
        (v["border-radius"] = v.borderRadius),
        (v["background-image"] = v.backgroundImage),
        (v["background-position"] = v.backgroundPosition),
        (v["background-position-x"] = v.backgroundPositionX),
        (v["object-position"] = v.objectPosition),
        (v["border-width"] = v.padding),
        (v["box-shadow"] = v.textShadow),
        (v["-webkit-box-shadow"] = v.textShadow),
        (v["-moz-box-shadow"] = v.textShadow),
        (v["border-style"] = v.borderColor),
        (v["-webkit-transform"] = v.transform),
        (v["-moz-transform"] = v.transform),
        (v["transform-origin"] = v.transformOrigin),
        (v["-webkit-transform-origin"] = v.transformOrigin),
        (v["-moz-transform-origin"] = v.transformOrigin),
        (v["-webkit-transition"] = v.transition),
        (v["-moz-transition"] = v.transition),
        (v["transition-property"] = v.transitionProperty),
        (v["-webkit-transition-property"] = v.transitionProperty),
        (v["-moz-transition-property"] = v.transitionProperty));
      var m = d([
          ["paddingLeft", "paddingRight"],
          ["marginLeft", "marginRight"],
          ["left", "right"],
          ["borderLeft", "borderRight"],
          ["borderLeftColor", "borderRightColor"],
          ["borderLeftStyle", "borderRightStyle"],
          ["borderLeftWidth", "borderRightWidth"],
          ["borderTopLeftRadius", "borderTopRightRadius"],
          ["borderBottomLeftRadius", "borderBottomRightRadius"],
          ["padding-left", "padding-right"],
          ["margin-left", "margin-right"],
          ["border-left", "border-right"],
          ["border-left-color", "border-right-color"],
          ["border-left-style", "border-right-style"],
          ["border-left-width", "border-right-width"],
          ["border-top-left-radius", "border-top-right-radius"],
          ["border-bottom-left-radius", "border-bottom-right-radius"],
        ]),
        b = ["content"],
        y = d([
          ["ltr", "rtl"],
          ["left", "right"],
          ["w-resize", "e-resize"],
          ["sw-resize", "se-resize"],
          ["nw-resize", "ne-resize"],
        ]),
        k = new RegExp("(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)", "g"),
        w = new RegExp("(left)|(right)");
      function B(e) {
        return Object.keys(e).reduce(
          function (r, o) {
            var t = e[o];
            if (("string" == typeof t && (t = t.trim()), u(b, o))) return ((r[o] = t), r);
            var n = x(o, t),
              a = n.key,
              i = n.value;
            return ((r[a] = i), r);
          },
          Array.isArray(e) ? [] : {}
        );
      }
      function x(e, r) {
        var o,
          t = /\/\*\s?@noflip\s?\*\//.test(r),
          n = t ? e : m[(o = e)] || o,
          a = t
            ? r
            : (function (e, r) {
                if (
                  !(function (e) {
                    return !(
                      "boolean" == typeof e ||
                      (function (e) {
                        return null == e;
                      })(e)
                    );
                  })(r)
                )
                  return r;
                if ((o = r) && "object" == typeof o) return B(r);
                var o,
                  t,
                  n = f(r),
                  a = (function (e) {
                    return "function" == typeof e;
                  })(r),
                  i = n || a ? r : r.replace(/ !important.*?$/, ""),
                  c = !n && i.length !== r.length,
                  s = v[e];
                return (
                  (t = s
                    ? s({
                        value: i,
                        valuesToConvert: y,
                        propertiesToConvert: m,
                        isRtl: !0,
                        bgImgDirectionRegex: k,
                        bgPosDirectionRegex: w,
                      })
                    : y[i] || i),
                  c ? t + " !important" : t
                );
              })(n, r);
        return { key: n, value: a };
      }
      const S = "undefined" == typeof window ? o.g : window,
        z = "@griffel/";
      function j(e, r) {
        return (S[Symbol.for(z + e)] || (S[Symbol.for(z + e)] = r), S[Symbol.for(z + e)]);
      }
      const N = j("DEFINITION_LOOKUP_TABLE", {}),
        T = "data-make-styles-bucket",
        q = {
          all: 1,
          borderColor: 1,
          borderStyle: 1,
          borderWidth: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockStart: 1,
          borderInline: 1,
          borderInlineEnd: 1,
          borderInlineStart: 1,
        },
        _ = "DO_NOT_USE_DIRECTLY: @griffel/reset-value",
        P = /[A-Z]/g,
        C = /^ms-/,
        F = {};
      function E(e) {
        return "-" + e.toLowerCase();
      }
      function R(e) {
        if (Object.prototype.hasOwnProperty.call(F, e)) return F[e];
        if ("--" === e.substr(0, 2)) return e;
        const r = e.replace(P, E);
        return (F[e] = C.test(r) ? "-" + r : r);
      }
      function D(e) {
        return "&" === e.charAt(0) ? e.slice(1) : e;
      }
      var I = "-moz-",
        H = "-webkit-",
        O = "comm",
        M = "rule",
        A = "decl",
        L = "@layer",
        W = Math.abs,
        $ = String.fromCharCode,
        X = Object.assign;
      function G(e) {
        return e.trim();
      }
      function K(e, r) {
        return (e = r.exec(e)) ? e[0] : e;
      }
      function V(e, r, o) {
        return e.replace(r, o);
      }
      function U(e, r, o) {
        return e.indexOf(r, o);
      }
      function Z(e, r) {
        return 0 | e.charCodeAt(r);
      }
      function Y(e, r, o) {
        return e.slice(r, o);
      }
      function J(e) {
        return e.length;
      }
      function Q(e) {
        return e.length;
      }
      function ee(e, r) {
        return (r.push(e), e);
      }
      function re(e, r) {
        for (var o = "", t = 0; t < e.length; t++) o += r(e[t], t, e, r) || "";
        return o;
      }
      function oe(e, r, o, t) {
        switch (e.type) {
          case L:
            if (e.children.length) break;
          case "@import":
          case "@namespace":
          case A:
            return (e.return = e.return || e.value);
          case O:
            return "";
          case "@keyframes":
            return (e.return = e.value + "{" + re(e.children, t) + "}");
          case M:
            if (!J((e.value = e.props.join(",")))) return "";
        }
        return J((o = re(e.children, t))) ? (e.return = e.value + "{" + o + "}") : "";
      }
      var te = 1,
        ne = 1,
        ae = 0,
        ie = 0,
        ce = 0,
        se = "";
      function le(e, r, o, t, n, a, i, c) {
        return {
          value: e,
          root: r,
          parent: o,
          type: t,
          props: n,
          children: a,
          line: te,
          column: ne,
          length: i,
          return: "",
          siblings: c,
        };
      }
      function de(e, r) {
        return X(le("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
      }
      function fe() {
        return ((ce = ie > 0 ? Z(se, --ie) : 0), ne--, 10 === ce && ((ne = 1), te--), ce);
      }
      function ue() {
        return ((ce = ie < ae ? Z(se, ie++) : 0), ne++, 10 === ce && ((ne = 1), te++), ce);
      }
      function he() {
        return Z(se, ie);
      }
      function ge() {
        return ie;
      }
      function pe(e, r) {
        return Y(se, e, r);
      }
      function ve(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function me(e) {
        return ((te = ne = 1), (ae = J((se = e))), (ie = 0), []);
      }
      function be(e) {
        return ((se = ""), e);
      }
      function ye(e) {
        return G(pe(ie - 1, Be(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function ke(e) {
        for (; (ce = he()) && ce < 33; ) ue();
        return ve(e) > 2 || ve(ce) > 3 ? "" : " ";
      }
      function we(e, r) {
        for (
          ;
          --r && ue() && !(ce < 48 || ce > 102 || (ce > 57 && ce < 65) || (ce > 70 && ce < 97));

        );
        return pe(e, ge() + (r < 6 && 32 == he() && 32 == ue()));
      }
      function Be(e) {
        for (; ue(); )
          switch (ce) {
            case e:
              return ie;
            case 34:
            case 39:
              34 !== e && 39 !== e && Be(ce);
              break;
            case 40:
              41 === e && Be(e);
              break;
            case 92:
              ue();
          }
        return ie;
      }
      function xe(e, r) {
        for (; ue() && e + ce !== 57 && (e + ce !== 84 || 47 !== he()); );
        return "/*" + pe(r, ie - 1) + "*" + $(47 === e ? e : ue());
      }
      function Se(e) {
        for (; !ve(he()); ) ue();
        return pe(e, ie);
      }
      function ze(e) {
        return be(je("", null, null, null, [""], (e = me(e)), 0, [0], e));
      }
      function je(e, r, o, t, n, a, i, c, s) {
        for (
          var l = 0,
            d = 0,
            f = i,
            u = 0,
            h = 0,
            g = 0,
            p = 1,
            v = 1,
            m = 1,
            b = 0,
            y = "",
            k = n,
            w = a,
            B = t,
            x = y;
          v;

        )
          switch (((g = b), (b = ue()))) {
            case 40:
              if (108 != g && 58 == Z(x, f - 1)) {
                -1 != U((x += V(ye(b), "&", "&\f")), "&\f", W(l ? c[l - 1] : 0)) && (m = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              x += ye(b);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              x += ke(g);
              break;
            case 92:
              x += we(ge() - 1, 7);
              continue;
            case 47:
              switch (he()) {
                case 42:
                case 47:
                  (ee(Te(xe(ue(), ge()), r, o, s), s),
                    (5 != ve(g || 1) && 5 != ve(he() || 1)) ||
                      !J(x) ||
                      " " === Y(x, -1, void 0) ||
                      (x += " "));
                  break;
                default:
                  x += "/";
              }
              break;
            case 123 * p:
              c[l++] = J(x) * m;
            case 125 * p:
            case 59:
            case 0:
              switch (b) {
                case 0:
                case 125:
                  v = 0;
                case 59 + d:
                  (-1 == m && (x = V(x, /\f/g, "")),
                    h > 0 &&
                      (J(x) - f || (0 === p && 47 === g)) &&
                      ee(
                        h > 32
                          ? qe(x + ";", t, o, f - 1, s)
                          : qe(V(x, " ", "") + ";", t, o, f - 2, s),
                        s
                      ));
                  break;
                case 59:
                  x += ";";
                default:
                  if (
                    (ee((B = Ne(x, r, o, l, d, n, c, y, (k = []), (w = []), f, a)), a), 123 === b)
                  )
                    if (0 === d) je(x, r, B, B, k, a, f, c, w);
                    else {
                      switch (u) {
                        case 99:
                          if (110 === Z(x, 3)) break;
                        case 108:
                          if (97 === Z(x, 2)) break;
                        default:
                          d = 0;
                        case 100:
                        case 109:
                        case 115:
                      }
                      d
                        ? je(
                            e,
                            B,
                            B,
                            t && ee(Ne(e, B, B, 0, 0, n, c, y, n, (k = []), f, w), w),
                            n,
                            w,
                            f,
                            c,
                            t ? k : w
                          )
                        : je(x, B, B, B, [""], w, 0, c, w);
                    }
              }
              ((l = d = h = 0), (p = m = 1), (y = x = ""), (f = i));
              break;
            case 58:
              ((f = 1 + J(x)), (h = g));
            default:
              if (p < 1)
                if (123 == b) --p;
                else if (125 == b && 0 == p++ && 125 == fe()) continue;
              switch (((x += $(b)), b * p)) {
                case 38:
                  m = d > 0 ? 1 : ((x += "\f"), -1);
                  break;
                case 44:
                  ((c[l++] = (J(x) - 1) * m), (m = 1));
                  break;
                case 64:
                  (45 === he() && (x += ye(ue())),
                    (u = he()),
                    (d = f = J((y = x += Se(ge())))),
                    b++);
                  break;
                case 45:
                  45 === g && 2 == J(x) && (p = 0);
              }
          }
        return a;
      }
      function Ne(e, r, o, t, n, a, i, c, s, l, d, f) {
        for (var u = n - 1, h = 0 === n ? a : [""], g = Q(h), p = 0, v = 0, m = 0; p < t; ++p)
          for (var b = 0, y = Y(e, u + 1, (u = W((v = i[p])))), k = e; b < g; ++b)
            (k = G(v > 0 ? h[b] + " " + y : V(y, /&\f/g, h[b]))) && (s[m++] = k);
        return le(e, r, o, 0 === n ? M : c, s, l, d, f);
      }
      function Te(e, r, o, t) {
        return le(e, r, o, O, $(ce), Y(e, 2, -2), 0, t);
      }
      function qe(e, r, o, t, n) {
        return le(e, r, o, A, Y(e, 0, t), Y(e, t + 1, -1), t, n);
      }
      function _e(e) {
        var r = Q(e);
        return function (o, t, n, a) {
          for (var i = "", c = 0; c < r; c++) i += e[c](o, t, n, a) || "";
          return i;
        };
      }
      function Pe(e) {
        return function (r) {
          r.root || ((r = r.return) && e(r));
        };
      }
      const Ce = (e) => {
        if (e.type === M) {
          if ("string" == typeof e.props) return;
          e.props = e.props.map((e) =>
            -1 === e.indexOf(":global(")
              ? e
              : (function (e) {
                  return be(
                    (function (e) {
                      for (; ue(); )
                        switch (ve(ce)) {
                          case 0:
                            ee(Se(ie - 1), e);
                            break;
                          case 2:
                            ee(ye(ce), e);
                            break;
                          default:
                            ee($(ce), e);
                        }
                      return e;
                    })(me(e))
                  );
                })(e)
                  .reduce((e, r, o, t) => {
                    if ("" === r) return e;
                    if (":" === r && "global" === t[o + 1]) {
                      const r = t[o + 2].slice(1, -1) + " ";
                      return (e.unshift(r), (t[o + 1] = ""), (t[o + 2] = ""), e);
                    }
                    return (e.push(r), e);
                  }, [])
                  .join("")
          );
        }
      };
      function Fe(e, r, o) {
        switch (
          (function (e, r) {
            return 45 ^ Z(e, 0)
              ? (((((((r << 2) ^ Z(e, 0)) << 2) ^ Z(e, 1)) << 2) ^ Z(e, 2)) << 2) ^ Z(e, 3)
              : 0;
          })(e, r)
        ) {
          case 5103:
            return H + "print-" + e + e;
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
            return H + e + e;
          case 4215:
            if (102 === Z(e, 9)) return H + e + e;
            if (116 === Z(e, r + 1)) return H + e + e;
            break;
          case 4789:
            return I + e + e;
          case 5349:
          case 4246:
          case 6968:
            return H + e + I + e + e;
          case 6187:
            if (!K(e, /grab/))
              return V(V(V(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e;
          case 5495:
          case 3959:
            return V(e, /(image-set\([^]*)/, H + "$1$`$1");
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return V(e, /(.+)-inline(.+)/, H + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (J(e) - 1 - r > 6)
              switch (Z(e, r + 1)) {
                case 102:
                  if (108 === Z(e, r + 3))
                    return (
                      V(
                        e,
                        /(.+:)(.+)-([^]+)/,
                        "$1" + H + "$2-$3$1" + I + (108 == Z(e, r + 3) ? "$3" : "$2-$3")
                      ) + e
                    );
                case 115:
                  return ~U(e, "stretch") ? Fe(V(e, "stretch", "fill-available"), r) + e : e;
              }
        }
        return e;
      }
      function Ee(e, r, o, t) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case A:
              return void (e.return = Fe(e.value, e.length));
            case M:
              if (e.length)
                return (function (e, r) {
                  return e.map(r).join("");
                })(e.props, function (r) {
                  switch (K(r, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      return re([de(e, { props: [V(r, /:(read-\w+)/, ":-moz-$1")] })], t);
                    case "::placeholder":
                      return re(
                        [
                          de(e, { props: [V(r, /:(plac\w+)/, ":" + H + "input-$1")] }),
                          de(e, { props: [V(r, /:(plac\w+)/, ":-moz-$1")] }),
                        ],
                        t
                      );
                  }
                  return "";
                });
          }
      }
      const Re = (e) => {
        (function (e) {
          switch (e.type) {
            case "@container":
            case "@media":
            case "@supports":
            case L:
              return !0;
          }
          return !1;
        })(e) &&
          Array.isArray(e.children) &&
          e.children.sort((e, r) => (e.props[0] > r.props[0] ? 1 : -1));
      };
      const De = /,( *[^ &])/g;
      function Ie(e, r, o) {
        let t = r;
        return (
          o.length > 0 &&
            (t = o.reduceRight((e, r) => {
              return `${((o = r), "&" + D(o.replace(De, ",&$1")))} { ${e} }`;
              var o;
            }, r)),
          `${e}{${t}}`
        );
      }
      function He(e, r) {
        const {
            className: o,
            selectors: t,
            property: n,
            rtlClassName: a,
            rtlProperty: i,
            rtlValue: c,
            value: s,
          } = e,
          { container: l, layer: d, media: f, supports: u } = r;
        let h = Ie(
          `.${o}`,
          Array.isArray(s) ? `${s.map((e) => `${R(n)}: ${e}`).join(";")};` : `${R(n)}: ${s};`,
          t
        );
        return (
          i &&
            a &&
            (h += Ie(
              `.${a}`,
              Array.isArray(c) ? `${c.map((e) => `${R(i)}: ${e}`).join(";")};` : `${R(i)}: ${c};`,
              t
            )),
          f && (h = `@media ${f} { ${h} }`),
          d && (h = `@layer ${d} { ${h} }`),
          u && (h = `@supports ${u} { ${h} }`),
          l && (h = `@container ${l} { ${h} }`),
          (function (e) {
            const r = [];
            return (re(ze(e), _e([Ce, Re, Ee, oe, Pe((e) => r.push(e))])), r);
          })(h)
        );
      }
      function Oe(e) {
        let r = "";
        for (const o in e) {
          const t = e[o];
          if ("string" != typeof t && "number" != typeof t) {
            if (Array.isArray(t)) for (const e of t) r += R(o) + ":" + e + ";";
          } else r += R(o) + ":" + t + ";";
        }
        return r;
      }
      function Me(e) {
        let r = "";
        for (const o in e) r += `${o}{${Oe(e[o])}}`;
        return r;
      }
      function Ae(e, r) {
        const o = [];
        return (re(ze(`@keyframes ${e} {${r}}`), _e([oe, Ee, Pe((e) => o.push(e))])), o);
      }
      const Le = {
        animation: [
          -1,
          [
            "animationDelay",
            "animationDirection",
            "animationDuration",
            "animationFillMode",
            "animationIterationCount",
            "animationName",
            "animationPlayState",
            "animationTimeline",
            "animationTimingFunction",
          ],
        ],
        animationRange: [-1, ["animationRangeEnd", "animationRangeStart"]],
        background: [
          -2,
          [
            "backgroundAttachment",
            "backgroundClip",
            "backgroundColor",
            "backgroundImage",
            "backgroundOrigin",
            "backgroundPosition",
            "backgroundPositionX",
            "backgroundPositionY",
            "backgroundRepeat",
            "backgroundSize",
          ],
        ],
        backgroundPosition: [-1, ["backgroundPositionX", "backgroundPositionY"]],
        border: [
          -2,
          [
            "borderBottom",
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth",
            "borderLeft",
            "borderLeftColor",
            "borderLeftStyle",
            "borderLeftWidth",
            "borderRight",
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth",
            "borderTop",
            "borderTopColor",
            "borderTopStyle",
            "borderTopWidth",
          ],
        ],
        borderBottom: [-1, ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"]],
        borderImage: [
          -1,
          [
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth",
          ],
        ],
        borderLeft: [-1, ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"]],
        borderRadius: [
          -1,
          [
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
            "borderTopLeftRadius",
            "borderTopRightRadius",
          ],
        ],
        borderRight: [-1, ["borderRightColor", "borderRightStyle", "borderRightWidth"]],
        borderTop: [-1, ["borderTopColor", "borderTopStyle", "borderTopWidth"]],
        caret: [-1, ["caretColor", "caretShape"]],
        columnRule: [-1, ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"]],
        columns: [-1, ["columnCount", "columnWidth"]],
        containIntrinsicSize: [-1, ["containIntrinsicHeight", "containIntrinsicWidth"]],
        container: [-1, ["containerName", "containerType"]],
        flex: [-1, ["flexBasis", "flexGrow", "flexShrink"]],
        flexFlow: [-1, ["flexDirection", "flexWrap"]],
        font: [
          -1,
          [
            "fontFamily",
            "fontSize",
            "fontStretch",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "lineHeight",
          ],
        ],
        gap: [-1, ["columnGap", "rowGap"]],
        grid: [
          -1,
          [
            "columnGap",
            "gridAutoColumns",
            "gridAutoFlow",
            "gridAutoRows",
            "gridColumnGap",
            "gridRowGap",
            "gridTemplateAreas",
            "gridTemplateColumns",
            "gridTemplateRows",
            "rowGap",
          ],
        ],
        gridArea: [-1, ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"]],
        gridColumn: [-1, ["gridColumnEnd", "gridColumnStart"]],
        gridRow: [-1, ["gridRowEnd", "gridRowStart"]],
        gridTemplate: [-1, ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"]],
        inset: [-1, ["bottom", "left", "right", "top"]],
        insetBlock: [-1, ["insetBlockEnd", "insetBlockStart"]],
        insetInline: [-1, ["insetInlineEnd", "insetInlineStart"]],
        listStyle: [-1, ["listStyleImage", "listStylePosition", "listStyleType"]],
        margin: [-1, ["marginBottom", "marginLeft", "marginRight", "marginTop"]],
        marginBlock: [-1, ["marginBlockEnd", "marginBlockStart"]],
        marginInline: [-1, ["marginInlineEnd", "marginInlineStart"]],
        mask: [
          -1,
          [
            "maskClip",
            "maskComposite",
            "maskImage",
            "maskMode",
            "maskOrigin",
            "maskPosition",
            "maskRepeat",
            "maskSize",
          ],
        ],
        maskBorder: [
          -1,
          [
            "maskBorderMode",
            "maskBorderOutset",
            "maskBorderRepeat",
            "maskBorderSlice",
            "maskBorderSource",
            "maskBorderWidth",
          ],
        ],
        offset: [
          -1,
          ["offsetAnchor", "offsetDistance", "offsetPath", "offsetPosition", "offsetRotate"],
        ],
        outline: [-1, ["outlineColor", "outlineStyle", "outlineWidth"]],
        overflow: [-1, ["overflowX", "overflowY"]],
        overscrollBehavior: [-1, ["overscrollBehaviorX", "overscrollBehaviorY"]],
        padding: [-1, ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"]],
        paddingBlock: [-1, ["paddingBlockEnd", "paddingBlockStart"]],
        paddingInline: [-1, ["paddingInlineEnd", "paddingInlineStart"]],
        placeContent: [-1, ["alignContent", "justifyContent"]],
        placeItems: [-1, ["alignItems", "justifyItems"]],
        placeSelf: [-1, ["alignSelf", "justifySelf"]],
        scrollMargin: [
          -1,
          ["scrollMarginBottom", "scrollMarginLeft", "scrollMarginRight", "scrollMarginTop"],
        ],
        scrollMarginBlock: [-1, ["scrollMarginBlockEnd", "scrollMarginBlockStart"]],
        scrollMarginInline: [-1, ["scrollMarginInlineEnd", "scrollMarginInlineStart"]],
        scrollPadding: [
          -1,
          ["scrollPaddingBottom", "scrollPaddingLeft", "scrollPaddingRight", "scrollPaddingTop"],
        ],
        scrollPaddingBlock: [-1, ["scrollPaddingBlockEnd", "scrollPaddingBlockStart"]],
        scrollPaddingInline: [-1, ["scrollPaddingInlineEnd", "scrollPaddingInlineStart"]],
        scrollTimeline: [-1, ["scrollTimelineAxis", "scrollTimelineName"]],
        textDecoration: [
          -1,
          [
            "textDecorationColor",
            "textDecorationLine",
            "textDecorationStyle",
            "textDecorationThickness",
          ],
        ],
        textEmphasis: [-1, ["textEmphasisColor", "textEmphasisStyle"]],
        transition: [
          -1,
          [
            "transitionBehavior",
            "transitionDelay",
            "transitionDuration",
            "transitionProperty",
            "transitionTimingFunction",
          ],
        ],
        viewTimeline: [-1, ["viewTimelineAxis", "viewTimelineName"]],
      };
      function We(e, r) {
        return 0 === e.length ? r : `${e} and ${r}`;
      }
      function $e(e) {
        return "@media" === e.substr(0, 6);
      }
      function Xe(e) {
        return "@layer" === e.substr(0, 6);
      }
      const Ge = /^(:|\[|>|&)/;
      function Ke(e) {
        return Ge.test(e);
      }
      function Ve(e) {
        return "@supports" === e.substr(0, 9);
      }
      function Ue(e) {
        return "@container" === e.substring(0, 10);
      }
      function Ze(e) {
        return null != e && "object" == typeof e && !1 === Array.isArray(e);
      }
      const Ye = { "us-w": "w", "us-v": "i", nk: "l", si: "v", cu: "f", ve: "h", ti: "a" };
      function Je(e, r) {
        if (r.media) return "m";
        if (r.layer || r.supports) return "t";
        if (r.container) return "c";
        if (e.length > 0) {
          const r = e[0].trim();
          if (58 === r.charCodeAt(0)) return Ye[r.slice(4, 8)] || Ye[r.slice(3, 5)] || "d";
        }
        return "d";
      }
      function Qe(e, r) {
        return e ? r + e : e;
      }
      function er(e) {
        return Qe(e.container, "c") + Qe(e.media, "m") + Qe(e.layer, "l") + Qe(e.supports, "s");
      }
      function rr(e, r, o) {
        const t = l(e + er(o) + r),
          n = t.charCodeAt(0);
        return n >= 48 && n <= 57 ? String.fromCharCode(n + 17) + t.slice(1) : t;
      }
      function or({ property: e, selector: r, salt: o, value: t }, n) {
        return "f" + l(o + r + er(n) + e + t.trim());
      }
      function tr(e) {
        return e === _;
      }
      function nr(e) {
        return e.replace(/>\s+/g, ">");
      }
      function ar(e, r) {}
      function ir(e, r) {}
      function cr(e) {
        return Le[e];
      }
      function sr(e) {
        var r;
        return null !== (r = null == e ? void 0 : e[0]) && void 0 !== r ? r : 0;
      }
      function lr(e, r, o, t) {
        e[r] = t ? [o, t] : o;
      }
      function dr(e, r) {
        return r.length > 0 ? [e, Object.fromEntries(r)] : e;
      }
      function fr(e, r, o, t, n, a) {
        var i;
        const c = [];
        (0 !== a && c.push(["p", a]),
          "m" === r && n && c.push(["m", n]),
          (null !== (i = e[r]) && void 0 !== i) || (e[r] = []),
          o && e[r].push(dr(o, c)),
          t && e[r].push(dr(t, c)));
      }
      function ur(
        e,
        r = "",
        o = [],
        t = { container: "", layer: "", media: "", supports: "" },
        n = {},
        a = {},
        i
      ) {
        for (const c in e) {
          if (q.hasOwnProperty(c)) {
            ir(0, e[c]);
            continue;
          }
          const s = e[c];
          if (null != s) {
            if (tr(s)) {
              lr(n, rr(nr(o.join("")), c, t), 0, void 0);
              continue;
            }
            if ("string" == typeof s || "number" == typeof s) {
              const e = nr(o.join("")),
                l = cr(c);
              if (l) {
                const e = l[1],
                  i = Object.fromEntries(e.map((e) => [e, _]));
                ur(i, r, o, t, n, a);
              }
              const d = rr(e, c, t),
                f = or({ value: s.toString(), salt: r, selector: e, property: c }, t),
                u = (i && { key: c, value: i }) || x(c, s),
                h = u.key !== c || u.value !== s,
                g = h
                  ? or({ value: u.value.toString(), property: u.key, salt: r, selector: e }, t)
                  : void 0,
                p = h ? { rtlClassName: g, rtlProperty: u.key, rtlValue: u.value } : void 0,
                v = Je(o, t),
                [m, b] = He(
                  Object.assign({ className: f, selectors: o, property: c, value: s }, p),
                  t
                );
              (lr(n, d, f, g), fr(a, v, m, b, t.media, sr(l)));
            } else if ("animationName" === c) {
              const e = Array.isArray(s) ? s : [s],
                i = [],
                c = [];
              for (const r of e) {
                const e = Me(r),
                  o = Me(B(r)),
                  n = "f" + l(e);
                let s;
                const d = Ae(n, e);
                let f = [];
                e === o ? (s = n) : ((s = "f" + l(o)), (f = Ae(s, o)));
                for (let e = 0; e < d.length; e++) fr(a, "k", d[e], f[e], t.media, 0);
                (i.push(n), c.push(s));
              }
              ur({ animationName: i.join(", ") }, r, o, t, n, a, c.join(", "));
            } else if (Array.isArray(s)) {
              if (0 === s.length) continue;
              const e = nr(o.join("")),
                i = cr(c);
              if (i) {
                const e = i[1],
                  c = Object.fromEntries(e.map((e) => [e, _]));
                ur(c, r, o, t, n, a);
              }
              const l = rr(e, c, t),
                d = or(
                  {
                    value: s.map((e) => (null != e ? e : "").toString()).join(";"),
                    salt: r,
                    selector: e,
                    property: c,
                  },
                  t
                ),
                f = s.map((e) => x(c, e));
              if (f.some((e) => e.key !== f[0].key)) continue;
              const u = f[0].key !== c || f.some((e, r) => e.value !== s[r]),
                h = u
                  ? or(
                      {
                        value: f
                          .map((e) => {
                            var r;
                            return (
                              null !== (r = null == e ? void 0 : e.value) && void 0 !== r ? r : ""
                            ).toString();
                          })
                          .join(";"),
                        salt: r,
                        property: f[0].key,
                        selector: e,
                      },
                      t
                    )
                  : void 0,
                g = u
                  ? { rtlClassName: h, rtlProperty: f[0].key, rtlValue: f.map((e) => e.value) }
                  : void 0,
                p = Je(o, t),
                [v, m] = He(
                  Object.assign({ className: d, selectors: o, property: c, value: s }, g),
                  t
                );
              (lr(n, l, d, h), fr(a, p, v, m, t.media, sr(i)));
            } else if (Ze(s))
              if (Ke(c)) ur(s, r, o.concat(D(c)), t, n, a);
              else if ($e(c)) {
                const e = We(t.media, c.slice(6).trim());
                ur(s, r, o, Object.assign({}, t, { media: e }), n, a);
              } else if (Xe(c)) {
                const e = (t.layer ? `${t.layer}.` : "") + c.slice(6).trim();
                ur(s, r, o, Object.assign({}, t, { layer: e }), n, a);
              } else if (Ve(c)) {
                const e = We(t.supports, c.slice(9).trim());
                ur(s, r, o, Object.assign({}, t, { supports: e }), n, a);
              } else if (Ue(c)) {
                const e = c.slice(10).trim();
                ur(s, r, o, Object.assign({}, t, { container: e }), n, a);
              } else ar();
          }
        }
        return [n, a];
      }
      function hr(e, r, o = []) {
        return (
          "___" +
          (function (e) {
            const r = e.length;
            if (7 === r) return e;
            for (let o = r; o < 7; o++) e += "0";
            return e;
          })(l(e + r))
        );
      }
      function gr(e, r) {
        let o = "",
          t = "";
        for (const n in e) {
          const a = e[n];
          if (0 === a) {
            t += n + " ";
            continue;
          }
          const i = Array.isArray(a),
            c = "rtl" === r ? (i ? a[1] : a) + " " : (i ? a[0] : a) + " ";
          ((o += c), (t += c));
        }
        return [o.slice(0, -1), t.slice(0, -1)];
      }
      function pr(e, r) {
        const o = {};
        for (const t in e) {
          const [n, a] = gr(e[t], r);
          if ("" === a) {
            o[t] = "";
            continue;
          }
          const i = hr(a, r),
            c = i + ("" === n ? "" : " " + n);
          ((N[i] = [e[t], r]), (o[t] = c));
        }
        return o;
      }
      const vr = n.useInsertionEffect ? n.useInsertionEffect : void 0,
        mr = () => {
          const e = {};
          return function (r, o) {
            vr && "undefined" != typeof window && window.document && window.document.createElement
              ? vr(() => {
                  r.insertCSSRules(o);
                }, [r, o])
              : void 0 === e[r.id] && (r.insertCSSRules(o), (e[r.id] = !0));
          };
        };
      function br(e) {
        return Array.isArray(e) ? e : [e];
      }
      const yr = ["r", "d", "l", "v", "w", "f", "i", "h", "a", "s", "k", "t", "m", "c"].reduce(
        (e, r, o) => ((e[r] = o), e),
        {}
      );
      function kr(e, r, o, t, n = {}) {
        var a, i;
        const c = "m" === e,
          s = null !== (a = n.m) && void 0 !== a ? a : "0",
          l = null !== (i = n.p) && void 0 !== i ? i : 0,
          d = (function (e, r, o) {
            return ("m" === e ? e + r : e) + o;
          })(e, s, l);
        if (!t.stylesheets[d]) {
          const a = r && r.createElement("style"),
            i = (function (e, r, o, t) {
              const n = [];
              if (((t[T] = r), (t["data-priority"] = String(o)), e))
                for (const r in t) e.setAttribute(r, t[r]);
              return {
                elementAttributes: t,
                insertRule: function (r) {
                  return (null == e ? void 0 : e.sheet)
                    ? e.sheet.insertRule(r, e.sheet.cssRules.length)
                    : n.push(r);
                },
                element: e,
                bucketName: r,
                cssRules() {
                  return (null == e ? void 0 : e.sheet)
                    ? Array.from(e.sheet.cssRules).map((e) => e.cssText)
                    : n;
                },
              };
            })(a, e, l, Object.assign({}, t.styleElementAttributes, c && { media: s }));
          ((t.stylesheets[d] = i),
            (null == r ? void 0 : r.head) &&
              a &&
              r.head.insertBefore(
                a,
                (function (e, r, o, t, n = {}) {
                  var a, i;
                  const c = yr[o],
                    s = null !== (a = n.m) && void 0 !== a ? a : "",
                    l = null !== (i = n.p) && void 0 !== i ? i : 0;
                  let d = (e) => c - yr[e.getAttribute(T)],
                    f = e.head.querySelectorAll(`[${T}]`);
                  if ("m" === o) {
                    const r = e.head.querySelectorAll(`[${T}="${o}"]`);
                    r.length && ((f = r), (d = (e) => t.compareMediaQueries(s, e.media)));
                  }
                  const u = (e) =>
                      (function (e, r, o) {
                        var t, n;
                        return (
                          r + (null !== (t = o.m) && void 0 !== t ? t : "") ===
                          e.getAttribute(T) + (null !== (n = e.media) && void 0 !== n ? n : "")
                        );
                      })(e, o, n)
                        ? l - Number(e.getAttribute("data-priority"))
                        : d(e),
                    h = f.length;
                  let g = h - 1;
                  for (; g >= 0; ) {
                    const e = f.item(g);
                    if (u(e) > 0) return e.nextSibling;
                    g--;
                  }
                  return h > 0 ? f.item(0) : r ? r.nextSibling : null;
                })(r, o, e, t, n)
              ));
        }
        return t.stylesheets[d];
      }
      function wr(e, r) {
        try {
          e.insertRule(r);
        } catch (e) {}
      }
      let Br = 0;
      const xr = (e, r) => (e < r ? -1 : e > r ? 1 : 0);
      function Sr(e = "undefined" == typeof document ? void 0 : document, r = {}) {
        const {
            classNameHashSalt: o,
            unstable_filterCSSRule: t,
            insertionPoint: n,
            styleElementAttributes: a,
            compareMediaQueries: i = xr,
          } = r,
          c = {
            classNameHashSalt: o,
            insertionCache: {},
            stylesheets: {},
            styleElementAttributes: Object.freeze(a),
            compareMediaQueries: i,
            id: "d" + Br++,
            insertCSSRules(r) {
              for (const o in r) {
                const a = r[o];
                for (let r = 0, i = a.length; r < i; r++) {
                  const [i, s] = br(a[r]),
                    l = kr(o, e, n || null, c, s);
                  c.insertionCache[i] ||
                    ((c.insertionCache[i] = o), t ? t(i) && wr(l, i) : wr(l, i));
                }
              }
            },
          };
        return c;
      }
      const zr = t.createContext(Sr());
      function jr() {
        return t.useContext(zr);
      }
      const Nr = t.createContext("ltr"),
        Tr = ({ children: e, dir: r }) => t.createElement(Nr.Provider, { value: r }, e);
      function qr() {
        return t.useContext(Nr);
      }
      function _r(e) {
        const r = (function (e, r = s) {
          const o = r();
          let t = null,
            n = null,
            a = null,
            i = null;
          return function (r) {
            const { dir: c, renderer: s } = r;
            null === t &&
              ([t, n] = (function (e, r = "") {
                const o = {},
                  t = {};
                for (const n in e) {
                  const a = e[n],
                    [i, c] = ur(a, r);
                  ((o[n] = i),
                    Object.keys(c).forEach((e) => {
                      t[e] = (t[e] || []).concat(c[e]);
                    }));
                }
                return [o, t];
              })(e, s.classNameHashSalt));
            const l = "ltr" === c;
            return (
              l ? null === a && (a = pr(t, c)) : null === i && (i = pr(t, c)),
              o(s, n),
              l ? a : i
            );
          };
        })(e, mr);
        return function () {
          const e = qr(),
            o = jr();
          return r({ dir: e, renderer: o });
        };
      }
      const Pr = "var(--colorNeutralBackgroundStatic)",
        Cr = "var(--fontWeightRegular)",
        Fr = Symbol.for("fui.slotRenderFunction"),
        Er = Symbol.for("fui.slotElementType"),
        Rr = Symbol.for("fui.slotClassNameProp");
      function Dr(e) {
        return Boolean(null == e ? void 0 : e.hasOwnProperty(Er));
      }
      function Ir(e, r) {
        return function (o, t, n, a, i) {
          return Dr(t)
            ? r(
                (function (e, r) {
                  return { ...r, [Er]: e };
                })(o, t),
                null,
                n,
                a,
                i
              )
            : Dr(o)
              ? r(o, t, n, a, i)
              : e(o, t, n, a, i);
        };
      }
      function Hr(e) {
        const { as: r, [Rr]: o, [Er]: t, [Fr]: n, ...a } = e,
          i = a,
          c = "string" == typeof t && null != r ? r : t;
        return (
          "string" != typeof c && r && (i.as = r),
          { elementType: c, props: i, renderFunction: n }
        );
      }
      o(44363);
      var Or = o(74848);
      const Mr = o.t(Or, 2),
        Ar = Ir(Mr.jsx, (e, r, o) => {
          const { elementType: n, renderFunction: a, props: i } = Hr(e),
            c = { ...i, ...r };
          return a ? Mr.jsx(t.Fragment, { children: a(n, c) }, o) : Mr.jsx(n, c, o);
        }),
        Lr = Ir(Mr.jsxs, (e, r, o) => {
          const { elementType: n, renderFunction: a, props: i } = Hr(e),
            c = { ...i, ...r };
          return a
            ? Mr.jsx(
                t.Fragment,
                {
                  children: a(n, {
                    ...c,
                    children: Mr.jsxs(t.Fragment, { children: c.children }, void 0),
                  }),
                },
                o
              )
            : Mr.jsxs(n, c, o);
        });
      function Wr(e, r) {
        const { defaultProps: o, elementType: n } = r,
          a = (function (e) {
            return "string" == typeof e || "number" == typeof e || Xr(e) || t.isValidElement(e)
              ? { children: e }
              : e;
          })(e),
          i = { ...o, ...a, [Er]: n, [Rr]: null == a ? void 0 : a.className };
        return (
          a &&
            "function" == typeof a.children &&
            ((i[Fr] = a.children), (i.children = null == o ? void 0 : o.children)),
          i
        );
      }
      function $r(e, r) {
        if (null !== e && (void 0 !== e || r.renderByDefault)) return Wr(e, r);
      }
      const Xr = (e) => "object" == typeof e && null !== e && Symbol.iterator in e,
        Gr = (...e) => {
          const r = {};
          for (const o of e) {
            const e = Array.isArray(o) ? o : Object.keys(o);
            for (const o of e) r[o] = 1;
          }
          return r;
        },
        Kr = Gr([
          "onAuxClick",
          "onAnimationEnd",
          "onAnimationStart",
          "onCopy",
          "onCut",
          "onPaste",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onInput",
          "onSubmit",
          "onLoad",
          "onError",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyUp",
          "onAbort",
          "onCanPlay",
          "onCanPlayThrough",
          "onDurationChange",
          "onEmptied",
          "onEncrypted",
          "onEnded",
          "onLoadedData",
          "onLoadedMetadata",
          "onLoadStart",
          "onPause",
          "onPlay",
          "onPlaying",
          "onProgress",
          "onRateChange",
          "onSeeked",
          "onSeeking",
          "onStalled",
          "onSuspend",
          "onTimeUpdate",
          "onVolumeChange",
          "onWaiting",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onScroll",
          "onWheel",
          "onPointerCancel",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerMove",
          "onPointerOut",
          "onPointerOver",
          "onPointerUp",
          "onGotPointerCapture",
          "onLostPointerCapture",
        ]),
        Vr = Gr([
          "accessKey",
          "children",
          "className",
          "contentEditable",
          "dir",
          "draggable",
          "hidden",
          "htmlFor",
          "id",
          "lang",
          "ref",
          "role",
          "style",
          "tabIndex",
          "title",
          "translate",
          "spellCheck",
          "name",
        ]),
        Ur = Gr(["itemID", "itemProp", "itemRef", "itemScope", "itemType"]),
        Zr = Gr(Vr, Kr, Ur),
        Yr = Gr(Zr, ["form"]),
        Jr = Gr(Zr, ["height", "loop", "muted", "preload", "src", "width"]),
        Qr = Gr(Jr, ["poster"]),
        eo = Gr(Zr, ["start"]),
        ro = Gr(Zr, ["value"]),
        oo = Gr(Zr, ["download", "href", "hrefLang", "media", "rel", "target", "type"]),
        to = Gr(Zr, ["dateTime"]),
        no = Gr(Zr, [
          "autoFocus",
          "disabled",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "type",
          "value",
        ]),
        ao = {
          label: Yr,
          audio: Jr,
          video: Qr,
          ol: eo,
          li: ro,
          a: oo,
          button: no,
          input: Gr(no, [
            "accept",
            "alt",
            "autoCorrect",
            "autoCapitalize",
            "autoComplete",
            "checked",
            "dirname",
            "form",
            "height",
            "inputMode",
            "list",
            "max",
            "maxLength",
            "min",
            "minLength",
            "multiple",
            "pattern",
            "placeholder",
            "readOnly",
            "required",
            "src",
            "step",
            "size",
            "type",
            "value",
            "width",
          ]),
          textarea: Gr(no, [
            "autoCapitalize",
            "cols",
            "dirname",
            "form",
            "maxLength",
            "placeholder",
            "readOnly",
            "required",
            "rows",
            "wrap",
          ]),
          select: Gr(no, ["form", "multiple", "required"]),
          option: Gr(Zr, ["selected", "value"]),
          table: Gr(Zr, ["cellPadding", "cellSpacing"]),
          tr: Zr,
          th: Gr(Zr, ["colSpan", "rowSpan", "scope"]),
          td: Gr(Zr, ["colSpan", "headers", "rowSpan", "scope"]),
          colGroup: Gr(Zr, ["span"]),
          col: Gr(Zr, ["span"]),
          fieldset: Gr(Zr, ["disabled", "form"]),
          form: Gr(Zr, [
            "acceptCharset",
            "action",
            "encType",
            "encType",
            "method",
            "noValidate",
            "target",
          ]),
          iframe: Gr(Zr, [
            "allow",
            "allowFullScreen",
            "allowPaymentRequest",
            "allowTransparency",
            "csp",
            "height",
            "importance",
            "referrerPolicy",
            "sandbox",
            "src",
            "srcDoc",
            "width",
          ]),
          img: Gr(Zr, ["alt", "crossOrigin", "height", "src", "srcSet", "useMap", "width"]),
          time: to,
          dialog: Gr(Zr, ["open", "onCancel", "onClose"]),
        };
      function io(e, r, o) {
        const t = (e && ao[e]) || Zr;
        return (
          (t.as = 1),
          (function (e, r, o) {
            const t = Array.isArray(r),
              n = {},
              a = Object.keys(e);
            for (const i of a)
              !(
                (!t && r[i]) ||
                (t && r.indexOf(i) >= 0) ||
                0 === i.indexOf("data-") ||
                0 === i.indexOf("aria-")
              ) ||
                (o && -1 !== (null == o ? void 0 : o.indexOf(i))) ||
                (n[i] = e[i]);
            return n;
          })(r, t, o)
        );
      }
      const co = (e, r, o) => {
        var t;
        return io(null !== (t = r.as) && void 0 !== t ? t : e, r, o);
      };
      function so(e, r, o = s) {
        const t = o();
        let n = null,
          a = null;
        return function (o) {
          const { dir: i, renderer: c } = o,
            s = "ltr" === i;
          return (
            s ? null === n && (n = pr(e, i)) : null === a && (a = pr(e, i)),
            t(c, r),
            s ? n : a
          );
        };
      }
      function lo(e, r) {
        const o = so(e, r, mr);
        return function () {
          const e = qr(),
            r = jr();
          return o({ dir: e, renderer: r });
        };
      }
      const fo = {};
      function uo() {
        let e = null,
          r = "",
          o = "";
        const t = new Array(arguments.length);
        for (let e = 0; e < arguments.length; e++) {
          const n = arguments[e];
          if ("string" == typeof n && "" !== n) {
            const a = n.indexOf("___");
            if (-1 === a) r += n + " ";
            else {
              const i = n.substr(a, 10);
              (a > 0 && (r += n.slice(0, a)), (o += i), (t[e] = i));
            }
          }
        }
        if ("" === o) return r.slice(0, -1);
        const n = fo[o];
        if (void 0 !== n) return r + n;
        const a = [];
        for (let r = 0; r < arguments.length; r++) {
          const o = t[r];
          if (o) {
            const r = N[o];
            r && (a.push(r[0]), (e = r[1]));
          }
        }
        const i = Object.assign.apply(Object, [{}].concat(a)),
          [c, s] = gr(i, e),
          l = hr(s, e, t),
          d = l + " " + c;
        return ((fo[o] = d), (N[l] = [i, e]), r + d);
      }
      const ho = lo(
          {
            base: {
              g2u3we: "fj3muxo",
              h3c5rm: ["f1akhkt", "f1lxtadh"],
              B9xav0g: "f1aperda",
              zhjwy3: ["f1lxtadh", "f1akhkt"],
              Beyfa6y: 0,
              Bbmb7ep: 0,
              Btl43ni: 0,
              B7oj6ja: 0,
              Dimara: "f1fabniw",
              B7ck84d: "f1ewtqcl",
              mc9l5x: "f14t3ns0",
            },
            bordered: {
              icvyot: "fzkkow9",
              vrafjx: ["fcdblym", "fjik90z"],
              oivjwe: "fg706s2",
              wvpqe5: ["fjik90z", "fcdblym"],
              B4j52fo: "f192inf7",
              Bekrc4i: ["f5tn483", "f1ojsxk5"],
              Bn0qgzm: "f1vxd6vx",
              ibv6hh: ["f1ojsxk5", "f5tn483"],
            },
            circular: { Beyfa6y: 0, Bbmb7ep: 0, Btl43ni: 0, B7oj6ja: 0, Dimara: "f44lkw9" },
            rounded: { Beyfa6y: 0, Bbmb7ep: 0, Btl43ni: 0, B7oj6ja: 0, Dimara: "ft85np5" },
            square: {},
            shadow: { E5pizo: "f1whvlc6" },
            center: {
              st4lth: "f1plgu50",
              Ermj5k: "f14xojzb",
              Bqenvij: "f1l02sjl",
              a9b677: "fly5x3f",
            },
            contain: {
              st4lth: "f1kle4es",
              Ermj5k: "f14xojzb",
              Bqenvij: "f1l02sjl",
              a9b677: "fly5x3f",
            },
            default: {},
            cover: {
              st4lth: "f1ps3kmd",
              Ermj5k: "f14xojzb",
              Bqenvij: "f1l02sjl",
              a9b677: "fly5x3f",
            },
            none: {
              st4lth: "f1plgu50",
              Ermj5k: ["f13uwng7", "fjmyj0p"],
              Bqenvij: "f1l02sjl",
              a9b677: "fly5x3f",
            },
            block: { a9b677: "fly5x3f" },
          },
          {
            d: [
              ".fj3muxo{border-top-color:var(--colorNeutralStroke1);}",
              ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}",
              ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}",
              ".f1aperda{border-bottom-color:var(--colorNeutralStroke1);}",
              [".f1fabniw{border-radius:var(--borderRadiusNone);}", { p: -1 }],
              ".f1ewtqcl{box-sizing:border-box;}",
              ".f14t3ns0{display:inline-block;}",
              ".fzkkow9{border-top-style:solid;}",
              ".fcdblym{border-right-style:solid;}",
              ".fjik90z{border-left-style:solid;}",
              ".fg706s2{border-bottom-style:solid;}",
              ".f192inf7{border-top-width:var(--strokeWidthThin);}",
              ".f5tn483{border-right-width:var(--strokeWidthThin);}",
              ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}",
              ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}",
              [".f44lkw9{border-radius:var(--borderRadiusCircular);}", { p: -1 }],
              [".ft85np5{border-radius:var(--borderRadiusMedium);}", { p: -1 }],
              ".f1whvlc6{box-shadow:var(--shadow4);}",
              ".f1plgu50{object-fit:none;}",
              ".f14xojzb{object-position:center;}",
              ".f1l02sjl{height:100%;}",
              ".fly5x3f{width:100%;}",
              ".f1kle4es{object-fit:contain;}",
              ".f1ps3kmd{object-fit:cover;}",
              ".f13uwng7{object-position:left top;}",
              ".fjmyj0p{object-position:right top;}",
            ],
          }
        ),
        go = t.createContext(void 0),
        po = () => {},
        vo = go.Provider,
        mo = (e) => {
          var r, o;
          return null !== (o = null === (r = t.useContext(go)) || void 0 === r ? void 0 : r[e]) &&
            void 0 !== o
            ? o
            : po;
        },
        bo = t.forwardRef((e, r) => {
          const o = ((e, r) => {
            const {
              bordered: o = !1,
              fit: t = "default",
              block: n = !1,
              shape: a = "square",
              shadow: i = !1,
            } = e;
            return {
              bordered: o,
              fit: t,
              block: n,
              shape: a,
              shadow: i,
              components: { root: "img" },
              root: Wr(co("img", { ref: r, ...e }), { elementType: "img" }),
            };
          })(e, r);
          return (
            ((e) => {
              const r = ho();
              e.root.className = uo(
                "fui-Image",
                r.base,
                e.block && r.block,
                e.bordered && r.bordered,
                e.shadow && r.shadow,
                r[e.fit],
                r[e.shape],
                e.root.className
              );
            })(o),
            mo("useImageStyles_unstable")(o),
            ((e) => Ar(e.root, {}))(o)
          );
        });
      bo.displayName = "Image";
      var yo = _r({
          welcome__header: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "30px",
            paddingTop: "100px",
            backgroundColor: "var(--colorNeutralBackground3)",
          },
          message: { fontSize: "var(--fontSizeHero900)", fontWeight: Cr, fontColor: Pr },
        }),
        ko = function (e) {
          var r = e.title,
            o = e.logo,
            n = e.message,
            a = yo();
          return t.createElement(
            "section",
            { className: a.welcome__header },
            t.createElement(bo, { width: "90", height: "90", src: o, alt: r }),
            t.createElement("h1", { className: a.message }, n)
          );
        };
      ko.propTypes = { title: c().string, logo: c().string, message: c().string };
      var wo = ko,
        Bo = _r({
          list: { marginTop: "20px" },
          listItem: { paddingBottom: "20px", display: "flex" },
          icon: { marginRight: "10px" },
          itemText: { fontSize: "var(--fontSizeBase300)", fontColor: Pr },
          welcome__main: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          message: {
            fontSize: "var(--fontSizeBase500)",
            fontColor: Pr,
            fontWeight: Cr,
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }),
        xo = function (e) {
          var r = e.items,
            o = e.message,
            n = Bo(),
            a = r.map(function (e, r) {
              return t.createElement(
                "li",
                { className: n.listItem, key: r },
                t.createElement("i", { className: n.icon }, e.icon),
                t.createElement("span", { className: n.itemText }, e.primaryText)
              );
            });
          return t.createElement(
            "div",
            { className: n.welcome__main },
            t.createElement("h2", { className: n.message }, o),
            t.createElement("ul", { className: n.list }, a)
          );
        };
      xo.propTypes = {
        items: c().arrayOf(
          c().shape({ icon: c().element.isRequired, primaryText: c().string.isRequired })
        ).isRequired,
        message: c().string.isRequired,
      };
      var So = xo;
      const zo = t.createContext(void 0),
        jo = zo.Provider;
      function No(e, r, o) {
        if (!e) return r;
        r = { ...r };
        const {
          generatedControlId: t,
          hintId: n,
          labelFor: a,
          labelId: i,
          required: c,
          validationMessageId: s,
          validationState: l,
        } = e;
        var d, f, u, h, g, p, v, m, b, y, k, w;
        return (
          t && ((null !== (f = (d = r).id) && void 0 !== f) || (d.id = t)),
          !i ||
            ((null == o ? void 0 : o.supportsLabelFor) && a === r.id) ||
            (null !== (h = (u = r)["aria-labelledby"]) && void 0 !== h) ||
            (u["aria-labelledby"] = i),
          (s || n) &&
            (r["aria-describedby"] = [s, n, null == r ? void 0 : r["aria-describedby"]]
              .filter(Boolean)
              .join(" ")),
          "error" === l &&
            ((null !== (p = (g = r)["aria-invalid"]) && void 0 !== p) || (g["aria-invalid"] = !0)),
          c &&
            ((null == o ? void 0 : o.supportsRequired)
              ? (null !== (m = (v = r).required) && void 0 !== m) || (v.required = !0)
              : (null !== (y = (b = r)["aria-required"]) && void 0 !== y) ||
                (b["aria-required"] = !0)),
          (null == o ? void 0 : o.supportsSize) &&
            ((null !== (w = (k = r).size) && void 0 !== w) || (k.size = e.size)),
          r
        );
      }
      const To = t.createContext(void 0),
        qo = {},
        _o = To.Provider,
        Po = lo(
          { root: { mc9l5x: "f1w7gpdv", Bg96gwp: "fez10in" }, rtl: { Bz10aip: "f13rod7r" } },
          {
            d: [
              ".f1w7gpdv{display:inline;}",
              ".fez10in{line-height:0;}",
              ".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}",
            ],
          }
        ),
        Co = lo(
          { root: { ycbfsm: "fg4l7m0" } },
          { t: ["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"] }
        ),
        Fo = (e, r, o, n) => {
          const a = "1em" === r ? "20" : r,
            i = t.forwardRef((e, i) => {
              const c = Co(),
                s = ((e, r) => {
                  const { title: o, primaryFill: n = "currentColor", ...a } = e,
                    i = { ...a, title: void 0, fill: n },
                    c = Po(),
                    s = (() => {
                      const e = t.useContext(To);
                      return null != e ? e : qo;
                    })();
                  return (
                    (i.className = uo(
                      c.root,
                      (null == r ? void 0 : r.flipInRtl) &&
                        "rtl" === (null == s ? void 0 : s.textDirection) &&
                        c.rtl,
                      i.className
                    )),
                    o && (i["aria-label"] = o),
                    i["aria-label"] || i["aria-labelledby"]
                      ? (i.role = "img")
                      : (i["aria-hidden"] = !0),
                    i
                  );
                })(e, { flipInRtl: null == n ? void 0 : n.flipInRtl }),
                l = {
                  ...s,
                  className: uo(s.className, c.root),
                  ref: i,
                  width: r,
                  height: r,
                  viewBox: `0 0 ${a} ${a}`,
                  xmlns: "http://www.w3.org/2000/svg",
                };
              return "string" == typeof o
                ? t.createElement("svg", { ...l, dangerouslySetInnerHTML: { __html: o } })
                : t.createElement(
                    "svg",
                    l,
                    ...o.map((e) => t.createElement("path", { d: e, fill: l.fill }))
                  );
            });
          return ((i.displayName = e), i);
        },
        Eo = Fo("ErrorCircle12Filled", "12", [
          "M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Zm-.75-2.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm.26-4.84a.5.5 0 0 1 .98 0l.01.09v2.59a.5.5 0 0 1-1 0V3.41Z",
        ]),
        Ro = Fo("Warning12Filled", "12", [
          "M5.21 1.46a.9.9 0 0 1 1.58 0l4.09 7.17a.92.92 0 0 1-.79 1.37H1.91a.92.92 0 0 1-.79-1.37l4.1-7.17ZM5.5 4.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0ZM6 6.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z",
        ]),
        Do = Fo("CheckmarkCircle12Filled", "12", [
          "M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm7.35-.9a.5.5 0 1 0-.7-.7L5.5 6.54 4.35 5.4a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l2.5-2.5Z",
        ]),
        Io = lo(
          {
            root: { Bahqtrf: "fk6fouc", sj55zd: "f19n0e5" },
            disabled: { sj55zd: "f1s2aq7o", Bbusuzp: "f1dcs8yz" },
            required: { sj55zd: "f1whyuy6", uwmqm3: ["fruq291", "f7x41pl"] },
            small: { Be2twd7: "fy9rknc", Bg96gwp: "fwrc4pm" },
            medium: { Be2twd7: "fkhj508", Bg96gwp: "f1i3iumi" },
            large: { Be2twd7: "fod5ikn", Bg96gwp: "faaz57k", Bhrd7zp: "fl43uef" },
            semibold: { Bhrd7zp: "fl43uef" },
          },
          {
            d: [
              ".fk6fouc{font-family:var(--fontFamilyBase);}",
              ".f19n0e5{color:var(--colorNeutralForeground1);}",
              ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",
              ".f1whyuy6{color:var(--colorPaletteRedForeground3);}",
              ".fruq291{padding-left:var(--spacingHorizontalXS);}",
              ".f7x41pl{padding-right:var(--spacingHorizontalXS);}",
              ".fy9rknc{font-size:var(--fontSizeBase200);}",
              ".fwrc4pm{line-height:var(--lineHeightBase200);}",
              ".fkhj508{font-size:var(--fontSizeBase300);}",
              ".f1i3iumi{line-height:var(--lineHeightBase300);}",
              ".fod5ikn{font-size:var(--fontSizeBase400);}",
              ".faaz57k{line-height:var(--lineHeightBase400);}",
              ".fl43uef{font-weight:var(--fontWeightSemibold);}",
            ],
            m: [
              [
                "@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
            ],
          }
        ),
        Ho = t.forwardRef((e, r) => {
          const o = ((e, r) => {
            const {
              disabled: o = !1,
              required: t = !1,
              weight: n = "regular",
              size: a = "medium",
            } = e;
            return {
              disabled: o,
              required: $r(!0 === t ? "*" : t || void 0, {
                defaultProps: { "aria-hidden": "true" },
                elementType: "span",
              }),
              weight: n,
              size: a,
              components: { root: "label", required: "span" },
              root: Wr(co("label", { ref: r, ...e }), { elementType: "label" }),
            };
          })(e, r);
          return (
            ((e) => {
              const r = Io();
              ((e.root.className = uo(
                "fui-Label",
                r.root,
                e.disabled && r.disabled,
                r[e.size],
                "semibold" === e.weight && r.semibold,
                e.root.className
              )),
                e.required &&
                  (e.required.className = uo(
                    "fui-Label__required",
                    r.required,
                    e.disabled && r.disabled,
                    e.required.className
                  )));
            })(o),
            mo("useLabelStyles_unstable")(o),
            ((e) => Lr(e.root, { children: [e.root.children, e.required && Ar(e.required, {})] }))(
              o
            )
          );
        });
      Ho.displayName = "Label";
      const Oo = { current: 0 },
        Mo = t.createContext(void 0);
      const Ao = t.createContext(void 0);
      function Lo(e = "fui-", r) {
        const o = null !== (c = t.useContext(Mo)) && void 0 !== c ? c : Oo,
          a = t.useContext(Ao) || "",
          i = n.useId;
        var c;
        if (i) {
          const o = i(),
            n = t.useMemo(() => o.replace(/:/g, ""), [o]);
          return r || `${a}${e}${n}`;
        }
        return t.useMemo(() => r || `${a}${e}${++o.current}`, [a, e, r, o]);
      }
      Ao.Provider;
      const Wo = {
        error: t.createElement(Eo, null),
        warning: t.createElement(Ro, null),
        success: t.createElement(Do, null),
        none: void 0,
      };
      function $o(e, r, o) {
        const t = (function (e, r, o, t = s) {
          const n = t();
          return function (t) {
            const { dir: a, renderer: i } = t,
              c = "ltr" === a ? e : r || e;
            return (n(i, Array.isArray(o) ? { r: o } : o), c);
          };
        })(e, r, o, mr);
        return function () {
          const e = qr(),
            r = jr();
          return t({ dir: e, renderer: r });
        };
      }
      const Xo = "fui-Field",
        Go = "fui-Field__label",
        Ko = "fui-Field__validationMessage",
        Vo = "fui-Field__validationMessageIcon",
        Uo = "fui-Field__hint",
        Zo = lo(
          {
            base: { mc9l5x: "f13qh94s" },
            horizontal: { Budl1dq: "f2wwaib", wkccdc: "f1645dqt" },
            horizontalNoLabel: { uwmqm3: ["f15jqgz8", "fggqkej"], Budl1dq: "f1c2z91y" },
          },
          {
            d: [
              ".f13qh94s{display:grid;}",
              ".f2wwaib{grid-template-columns:33% 1fr;}",
              ".f1645dqt{grid-template-rows:auto auto auto 1fr;}",
              ".f15jqgz8{padding-left:33%;}",
              ".fggqkej{padding-right:33%;}",
              ".f1c2z91y{grid-template-columns:1fr;}",
            ],
          }
        ),
        Yo = lo(
          {
            vertical: { z8tnut: "fclwglc", Byoj8tv: "fywfov9", jrapky: "fyacil5" },
            verticalLarge: { z8tnut: "f1sl3k7w", Byoj8tv: "f1brlhvm", jrapky: "f8l5zjj" },
            horizontal: {
              z8tnut: "fp2oml8",
              Byoj8tv: "f1tdddsa",
              t21cq0: ["fkujibs", "f199hnxi"],
              Ijaq50: "f16hsg94",
              nk6f5a: "f1nzqi2z",
            },
            horizontalSmall: { z8tnut: "f1ywm7hm", Byoj8tv: "f14wxoun" },
            horizontalLarge: { z8tnut: "f1hqyr95", Byoj8tv: "fm4hlj0" },
          },
          {
            d: [
              ".fclwglc{padding-top:var(--spacingVerticalXXS);}",
              ".fywfov9{padding-bottom:var(--spacingVerticalXXS);}",
              ".fyacil5{margin-bottom:var(--spacingVerticalXXS);}",
              ".f1sl3k7w{padding-top:1px;}",
              ".f1brlhvm{padding-bottom:1px;}",
              ".f8l5zjj{margin-bottom:var(--spacingVerticalXS);}",
              ".fp2oml8{padding-top:var(--spacingVerticalSNudge);}",
              ".f1tdddsa{padding-bottom:var(--spacingVerticalSNudge);}",
              ".fkujibs{margin-right:var(--spacingHorizontalM);}",
              ".f199hnxi{margin-left:var(--spacingHorizontalM);}",
              ".f16hsg94{grid-row-start:1;}",
              ".f1nzqi2z{grid-row-end:-1;}",
              ".f1ywm7hm{padding-top:var(--spacingVerticalXS);}",
              ".f14wxoun{padding-bottom:var(--spacingVerticalXS);}",
              ".f1hqyr95{padding-top:9px;}",
              ".fm4hlj0{padding-bottom:9px;}",
            ],
          }
        ),
        Jo = $o("r5c4z9l", null, [
          ".r5c4z9l{margin-top:var(--spacingVerticalXXS);color:var(--colorNeutralForeground3);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase200);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase200);}",
        ]),
        Qo = lo(
          { error: { sj55zd: "f1hcrxcs" }, withIcon: { uwmqm3: ["frawy03", "fg4c52"] } },
          {
            d: [
              ".f1hcrxcs{color:var(--colorPaletteRedForeground1);}",
              ".frawy03{padding-left:calc(12px + var(--spacingHorizontalXS));}",
              ".fg4c52{padding-right:calc(12px + var(--spacingHorizontalXS));}",
            ],
          }
        ),
        et = $o("ra7h1uk", "r1rh6bd7", [
          ".ra7h1uk{display:inline-block;font-size:12px;margin-left:calc(-12px - var(--spacingHorizontalXS));margin-right:var(--spacingHorizontalXS);line-height:0;vertical-align:-1px;}",
          ".r1rh6bd7{display:inline-block;font-size:12px;margin-right:calc(-12px - var(--spacingHorizontalXS));margin-left:var(--spacingHorizontalXS);line-height:0;vertical-align:-1px;}",
        ]),
        rt = lo(
          {
            error: { sj55zd: "f1hcrxcs" },
            warning: { sj55zd: "f1k5f75o" },
            success: { sj55zd: "ffmvakt" },
          },
          {
            d: [
              ".f1hcrxcs{color:var(--colorPaletteRedForeground1);}",
              ".f1k5f75o{color:var(--colorPaletteDarkOrangeForeground1);}",
              ".ffmvakt{color:var(--colorPaletteGreenForeground1);}",
            ],
          }
        ),
        ot = t.forwardRef((e, r) => {
          const o = ((e, r) => {
            const {
                children: o,
                orientation: t = "vertical",
                required: n = !1,
                validationState: a = e.validationMessage ? "error" : "none",
                size: i = "medium",
              } = e,
              c = Lo("field-"),
              s = c + "__control",
              l = Wr(co("div", { ...e, ref: r }, ["children"]), { elementType: "div" }),
              d = $r(e.label, {
                defaultProps: { htmlFor: s, id: c + "__label", required: n, size: i },
                elementType: Ho,
              }),
              f = $r(e.validationMessage, {
                defaultProps: {
                  id: c + "__validationMessage",
                  role: "error" === a || "warning" === a ? "alert" : void 0,
                },
                elementType: "div",
              }),
              u = $r(e.hint, { defaultProps: { id: c + "__hint" }, elementType: "div" }),
              h = Wo[a],
              g = $r(e.validationMessageIcon, {
                renderByDefault: !!h,
                defaultProps: { children: h },
                elementType: "span",
              });
            return {
              children: o,
              generatedControlId: s,
              orientation: t,
              required: n,
              size: i,
              validationState: a,
              components: {
                root: "div",
                label: Ho,
                validationMessage: "div",
                validationMessageIcon: "span",
                hint: "div",
              },
              root: l,
              label: d,
              validationMessageIcon: g,
              validationMessage: f,
              hint: u,
            };
          })(e, r);
          (((e) => {
            const { validationState: r, size: o } = e,
              t = "horizontal" === e.orientation,
              n = Zo();
            e.root.className = uo(
              Xo,
              n.base,
              t && n.horizontal,
              t && !e.label && n.horizontalNoLabel,
              e.root.className
            );
            const a = Yo();
            e.label &&
              (e.label.className = uo(
                Go,
                t && a.horizontal,
                t && "small" === o && a.horizontalSmall,
                t && "large" === o && a.horizontalLarge,
                !t && a.vertical,
                !t && "large" === o && a.verticalLarge,
                e.label.className
              ));
            const i = et(),
              c = rt();
            e.validationMessageIcon &&
              (e.validationMessageIcon.className = uo(
                Vo,
                i,
                "none" !== r && c[r],
                e.validationMessageIcon.className
              ));
            const s = Jo(),
              l = Qo();
            (e.validationMessage &&
              (e.validationMessage.className = uo(
                Ko,
                s,
                "error" === r && l.error,
                !!e.validationMessageIcon && l.withIcon,
                e.validationMessage.className
              )),
              e.hint && (e.hint.className = uo(Uo, s, e.hint.className)));
          })(o),
            mo("useFieldStyles_unstable")(o));
          const n = ((e) => {
            var r, o, n, a;
            const {
                generatedControlId: i,
                orientation: c,
                required: s,
                size: l,
                validationState: d,
              } = e,
              f = null === (r = e.label) || void 0 === r ? void 0 : r.htmlFor,
              u = null === (o = e.label) || void 0 === o ? void 0 : o.id,
              h = null === (n = e.validationMessage) || void 0 === n ? void 0 : n.id,
              g = null === (a = e.hint) || void 0 === a ? void 0 : a.id;
            return {
              field: t.useMemo(
                () => ({
                  generatedControlId: i,
                  hintId: g,
                  labelFor: f,
                  labelId: u,
                  orientation: c,
                  required: s,
                  size: l,
                  validationMessageId: h,
                  validationState: d,
                }),
                [i, g, f, u, c, s, l, h, d]
              ),
            };
          })(o);
          return ((e, r) => {
            let { children: o } = e;
            return (
              "function" == typeof o && (o = o(No(r.field) || {})),
              Ar(jo, {
                value: null == r ? void 0 : r.field,
                children: Lr(e.root, {
                  children: [
                    e.label && Ar(e.label, {}),
                    o,
                    e.validationMessage &&
                      Lr(e.validationMessage, {
                        children: [
                          e.validationMessageIcon && Ar(e.validationMessageIcon, {}),
                          e.validationMessage.children,
                        ],
                      }),
                    e.hint && Ar(e.hint, {}),
                  ],
                }),
              })
            );
          })(o, n);
        });
      ot.displayName = "Field";
      function tt() {
        return (
          "undefined" != typeof window && !(!window.document || !window.document.createElement)
        );
      }
      const nt = tt() ? t.useLayoutEffect : t.useEffect,
        at = (e) => {
          const r = t.useRef(() => {
            throw new Error("Cannot call an event handler while rendering");
          });
          return (
            nt(() => {
              r.current = e;
            }, [e]),
            t.useCallback((...e) => (0, r.current)(...e), [r])
          );
        },
        it = t.createContext(void 0),
        ct = it.Provider;
      function st() {
        var e;
        return null !== (e = t.useContext(it)) && void 0 !== e ? e : {};
      }
      const lt = (e, r) => {
          e = (function (e, r) {
            return No(t.useContext(zo), e, r);
          })(e, { supportsLabelFor: !0, supportsRequired: !0, supportsSize: !0 });
          const o = st();
          var n;
          const {
              size: a = "medium",
              appearance: i = null !== (n = o.inputDefaultAppearance) && void 0 !== n
                ? n
                : "outline",
              resize: c = "none",
              onChange: s,
            } = e,
            [l, d] = ((e) => {
              const [r, o] = t.useState(() =>
                  void 0 === e.defaultState
                    ? e.initialState
                    : "function" == typeof e.defaultState
                      ? e.defaultState()
                      : e.defaultState
                ),
                n = t.useRef(e.state);
              t.useEffect(() => {
                n.current = e.state;
              }, [e.state]);
              const a = t.useCallback((e) => {
                (function (e) {
                  return "function" == typeof e;
                })(e) && e(n.current);
              }, []);
              return ((e) => {
                const [r] = t.useState(() => void 0 !== e);
                return r;
              })(e.state)
                ? [e.state, a]
                : [r, o];
            })({ state: e.value, defaultState: e.defaultValue, initialState: void 0 }),
            f = (({ primarySlotTagName: e, props: r, excludedPropNames: o }) => ({
              root: { style: r.style, className: r.className },
              primary: io(e, r, [...(o || []), "style", "className"]),
            }))({
              props: e,
              primarySlotTagName: "textarea",
              excludedPropNames: ["onChange", "value", "defaultValue"],
            }),
            u = {
              size: a,
              appearance: i,
              resize: c,
              components: { root: "span", textarea: "textarea" },
              textarea: Wr(e.textarea, {
                defaultProps: { ref: r, ...f.primary },
                elementType: "textarea",
              }),
              root: Wr(e.root, { defaultProps: f.root, elementType: "span" }),
            };
          return (
            (u.textarea.value = l),
            (u.textarea.onChange = at((e) => {
              const r = e.target.value;
              (null == s || s(e, { value: r }), d(r));
            })),
            u
          );
        },
        dt = lo(
          {
            base: {
              mc9l5x: "ftuwxu6",
              B7ck84d: "f1ewtqcl",
              qhf8xq: "f10pi13n",
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "f1yiegib",
              jrapky: 0,
              Frg6f3: 0,
              t21cq0: 0,
              B6of3ja: 0,
              B74szlk: "f1s184ao",
              Beyfa6y: 0,
              Bbmb7ep: 0,
              Btl43ni: 0,
              B7oj6ja: 0,
              Dimara: "ft85np5",
              ha4doy: "f12kltsn",
            },
            disabled: {
              De3pzq: "f1c21dwh",
              Bgfg5da: 0,
              B9xav0g: 0,
              oivjwe: 0,
              Bn0qgzm: 0,
              B4g9neb: 0,
              zhjwy3: 0,
              wvpqe5: 0,
              ibv6hh: 0,
              u1mtju: 0,
              h3c5rm: 0,
              vrafjx: 0,
              Bekrc4i: 0,
              i8vvqc: 0,
              g2u3we: 0,
              icvyot: 0,
              B4j52fo: 0,
              irswps: "ff3nzm7",
              Bjwas2f: "fg455y9",
              Bn1d65q: ["f1rvyvqg", "f14g86mu"],
              Bxeuatn: "f1cwzwz",
              n51gp8: ["f14g86mu", "f1rvyvqg"],
            },
            interactive: {
              li1rpt: "f1gw3sf2",
              Bsft5z2: "f13zj6fq",
              E3zdtr: "f1mdlcz9",
              Eqx8gd: ["f1a7op3", "f1cjjd47"],
              By385i5: "f1gboi2j",
              B1piin3: ["f1cjjd47", "f1a7op3"],
              Dlnsje: "ffyw7fx",
              d9w3h3: ["f1kp91vd", "f1ibwz09"],
              B3778ie: ["f1ibwz09", "f1kp91vd"],
              B1q35kw: 0,
              Bw17bha: 0,
              Bcgy8vk: 0,
              Bjuhk93: "f1mnjydx",
              Gjdm7m: "fj2g8qd",
              b1kco5: "f1yk9hq",
              Ba2ppi3: "fhwpy7i",
              F2fol1: "f14ee0xe",
              lck23g: "f1xhbsuh",
              df92cz: "fv8e3ye",
              I188md: "ftb5wc6",
              umuwi5: "fjw5xc1",
              Blcqepd: "f1xdyd5c",
              nplu4u: "fatpbeo",
              Bioka5o: "fb7uyps",
              H713fs: "f1cmft4k",
              B9ooomg: "f1x58t8o",
              Bercvud: "f1ibeo51",
              Bbr2w1p: "f1vnc8sk",
              Bduesf4: "f3e99gv",
              Bpq79vn: "fhljsf7",
            },
            filled: {
              Bgfg5da: 0,
              B9xav0g: 0,
              oivjwe: 0,
              Bn0qgzm: 0,
              B4g9neb: 0,
              zhjwy3: 0,
              wvpqe5: 0,
              ibv6hh: 0,
              u1mtju: 0,
              h3c5rm: 0,
              vrafjx: 0,
              Bekrc4i: 0,
              i8vvqc: 0,
              g2u3we: 0,
              icvyot: 0,
              B4j52fo: 0,
              irswps: "f88035w",
              q7v0qe: "ftmjh5b",
              kmh5ft: ["f17blpuu", "fsrcdbj"],
              nagaa4: "f1tpwn32",
              B1yhkcb: ["fsrcdbj", "f17blpuu"],
            },
            "filled-darker": { De3pzq: "f16xq7d1" },
            "filled-lighter": { De3pzq: "fxugw4r" },
            "filled-darker-shadow": {
              De3pzq: "f16xq7d1",
              Bgfg5da: 0,
              B9xav0g: 0,
              oivjwe: 0,
              Bn0qgzm: 0,
              B4g9neb: 0,
              zhjwy3: 0,
              wvpqe5: 0,
              ibv6hh: 0,
              u1mtju: 0,
              h3c5rm: 0,
              vrafjx: 0,
              Bekrc4i: 0,
              i8vvqc: 0,
              g2u3we: 0,
              icvyot: 0,
              B4j52fo: 0,
              irswps: "f1gmd7mu",
              E5pizo: "fyed02w",
            },
            "filled-lighter-shadow": {
              De3pzq: "fxugw4r",
              Bgfg5da: 0,
              B9xav0g: 0,
              oivjwe: 0,
              Bn0qgzm: 0,
              B4g9neb: 0,
              zhjwy3: 0,
              wvpqe5: 0,
              ibv6hh: 0,
              u1mtju: 0,
              h3c5rm: 0,
              vrafjx: 0,
              Bekrc4i: 0,
              i8vvqc: 0,
              g2u3we: 0,
              icvyot: 0,
              B4j52fo: 0,
              irswps: "f1gmd7mu",
              E5pizo: "fyed02w",
            },
            outline: {
              De3pzq: "fxugw4r",
              Bgfg5da: 0,
              B9xav0g: "f1c1zstj",
              oivjwe: 0,
              Bn0qgzm: 0,
              B4g9neb: 0,
              zhjwy3: 0,
              wvpqe5: 0,
              ibv6hh: 0,
              u1mtju: 0,
              h3c5rm: 0,
              vrafjx: 0,
              Bekrc4i: 0,
              i8vvqc: 0,
              g2u3we: 0,
              icvyot: 0,
              B4j52fo: 0,
              irswps: "fhz96rm",
            },
            outlineInteractive: {
              kzujx5: 0,
              oetu4i: "f1l4zc64",
              gvrnp0: 0,
              xv9156: 0,
              jek2p4: 0,
              gg5e9n: 0,
              Beu9t3s: 0,
              dt87k2: 0,
              Bt1vbvt: 0,
              Bwzppfd: 0,
              Bop6t4b: 0,
              B2zwrfe: 0,
              Bwp2tzp: 0,
              Bgoe8wy: 0,
              Bf40cpq: 0,
              ckks6v: 0,
              Baalond: "f9mts5e",
              v2iqwr: 0,
              wmxk5l: "f1z0osm6",
              Bj33j0h: 0,
              Bs0cc2w: 0,
              qwjtx1: 0,
              B50zh58: 0,
              f7epvg: 0,
              e1hlit: 0,
              B7mkhst: 0,
              ak43y8: 0,
              Bbcopvn: 0,
              Bvecx4l: 0,
              lwioe0: 0,
              B6oc9vd: 0,
              e2sjt0: 0,
              uqwnxt: 0,
              asj8p9: "f1acnei2",
              Br8fjdy: 0,
              zoxjo1: "f1so894s",
              Bt3ojkv: 0,
              B7pmvfx: 0,
              Bfht2n1: 0,
              an54nd: 0,
              t1ykpo: 0,
              Belqbek: 0,
              bbt1vd: 0,
              Brahy3i: 0,
              r7b1zc: 0,
              rexu52: 0,
              ovtnii: 0,
              Bvq3b66: 0,
              Bawrxx6: 0,
              Bbs6y8j: 0,
              B2qpgjt: "f19ezbcq",
            },
            invalid: {
              tvckwq: "fs4k3qj",
              gk2u95: ["fcee079", "fmyw78r"],
              hhx65j: "f1fgmyf4",
              Bxowmz0: ["fmyw78r", "fcee079"],
            },
          },
          {
            d: [
              ".ftuwxu6{display:inline-flex;}",
              ".f1ewtqcl{box-sizing:border-box;}",
              ".f10pi13n{position:relative;}",
              [".f1yiegib{padding:0 0 var(--strokeWidthThick) 0;}", { p: -1 }],
              [".f1s184ao{margin:0;}", { p: -1 }],
              [".ft85np5{border-radius:var(--borderRadiusMedium);}", { p: -1 }],
              ".f12kltsn{vertical-align:top;}",
              ".f1c21dwh{background-color:var(--colorTransparentBackground);}",
              [
                ".ff3nzm7{border:var(--strokeWidthThin) solid var(--colorNeutralStrokeDisabled);}",
                { p: -2 },
              ],
              ".f1gw3sf2::after{box-sizing:border-box;}",
              '.f13zj6fq::after{content:"";}',
              ".f1mdlcz9::after{position:absolute;}",
              ".f1a7op3::after{left:-1px;}",
              ".f1cjjd47::after{right:-1px;}",
              ".f1gboi2j::after{bottom:-1px;}",
              ".ffyw7fx::after{height:max(var(--strokeWidthThick), var(--borderRadiusMedium));}",
              ".f1kp91vd::after{border-bottom-left-radius:var(--borderRadiusMedium);}",
              ".f1ibwz09::after{border-bottom-right-radius:var(--borderRadiusMedium);}",
              [
                ".f1mnjydx::after{border-bottom:var(--strokeWidthThick) solid var(--colorCompoundBrandStroke);}",
                { p: -1 },
              ],
              ".fj2g8qd::after{clip-path:inset(calc(100% - var(--strokeWidthThick)) 0 0 0);}",
              ".f1yk9hq::after{transform:scaleX(0);}",
              ".fhwpy7i::after{transition-property:transform;}",
              ".f14ee0xe::after{transition-duration:var(--durationUltraFast);}",
              ".f1xhbsuh::after{transition-delay:var(--curveAccelerateMid);}",
              [
                ".f88035w{border:var(--strokeWidthThin) solid var(--colorTransparentStroke);}",
                { p: -2 },
              ],
              ".f16xq7d1{background-color:var(--colorNeutralBackground3);}",
              ".fxugw4r{background-color:var(--colorNeutralBackground1);}",
              [
                ".f1gmd7mu{border:var(--strokeWidthThin) solid var(--colorTransparentStrokeInteractive);}",
                { p: -2 },
              ],
              ".fyed02w{box-shadow:var(--shadow2);}",
              [
                ".f1gmd7mu{border:var(--strokeWidthThin) solid var(--colorTransparentStrokeInteractive);}",
                { p: -2 },
              ],
              [
                ".fhz96rm{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);}",
                { p: -2 },
              ],
              ".f1c1zstj{border-bottom-color:var(--colorNeutralStrokeAccessible);}",
              ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}",
              ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}",
              ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}",
              ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}",
            ],
            m: [
              [
                "@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media screen and (prefers-reduced-motion: reduce){.fv8e3ye::after{transition-duration:0.01ms;}}",
                { m: "screen and (prefers-reduced-motion: reduce)" },
              ],
              [
                "@media screen and (prefers-reduced-motion: reduce){.ftb5wc6::after{transition-delay:0.01ms;}}",
                { m: "screen and (prefers-reduced-motion: reduce)" },
              ],
              [
                "@media screen and (prefers-reduced-motion: reduce){.f1cmft4k:focus-within::after{transition-duration:0.01ms;}}",
                { m: "screen and (prefers-reduced-motion: reduce)" },
              ],
              [
                "@media screen and (prefers-reduced-motion: reduce){.f1x58t8o:focus-within::after{transition-delay:0.01ms;}}",
                { m: "screen and (prefers-reduced-motion: reduce)" },
              ],
            ],
            w: [
              ".fjw5xc1:focus-within::after{transform:scaleX(1);}",
              ".f1xdyd5c:focus-within::after{transition-property:transform;}",
              ".fatpbeo:focus-within::after{transition-duration:var(--durationNormal);}",
              ".fb7uyps:focus-within::after{transition-delay:var(--curveDecelerateMid);}",
              ".f1ibeo51:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}",
              ".f1vnc8sk:focus-within{outline-width:var(--strokeWidthThick);}",
              ".f3e99gv:focus-within{outline-style:solid;}",
              ".fhljsf7:focus-within{outline-color:transparent;}",
              [
                ".f19ezbcq:focus-within{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1Pressed);}",
                { p: -2 },
              ],
              ".f1so894s:focus-within{border-bottom-color:var(--colorCompoundBrandStroke);}",
            ],
            h: [
              ".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}",
              ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}",
              ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}",
              ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}",
              [
                ".f9mts5e:hover{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1Hover);}",
                { p: -2 },
              ],
              ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}",
            ],
            a: [
              [
                ".f1acnei2:active{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1Pressed);}",
                { p: -2 },
              ],
              ".f1z0osm6:active{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}",
            ],
          }
        ),
        ft = lo(
          {
            base: {
              icvyot: "f1ern45e",
              vrafjx: ["f1n71otn", "f1deefiw"],
              oivjwe: "f1h8hb77",
              wvpqe5: ["f1deefiw", "f1n71otn"],
              jrapky: 0,
              Frg6f3: 0,
              t21cq0: 0,
              B6of3ja: 0,
              B74szlk: "f1s184ao",
              De3pzq: "f3rmtva",
              B7ck84d: "f1ewtqcl",
              sj55zd: "f19n0e5",
              Bh6795r: "fqerorx",
              Bahqtrf: "fk6fouc",
              Bqenvij: "f1l02sjl",
              yvdlaj: "fwyc1cq",
              B3o7kgh: "f13ta7ih",
              oeaueh: "f1s6fcnf",
            },
            disabled: { sj55zd: "f1s2aq7o", Bceei9c: "fdrzuqr", yvdlaj: "fahhnxm" },
            small: {
              sshi5w: "f1w5jphr",
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "f1pnffij",
              Bxyxcbc: "f192z54u",
              Bahqtrf: "fk6fouc",
              Be2twd7: "fy9rknc",
              Bhrd7zp: "figsok6",
              Bg96gwp: "fwrc4pm",
            },
            medium: {
              sshi5w: "fvmd9f",
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "f1ww82xo",
              Bxyxcbc: "f1if7ixc",
              Bahqtrf: "fk6fouc",
              Be2twd7: "fkhj508",
              Bhrd7zp: "figsok6",
              Bg96gwp: "f1i3iumi",
            },
            large: {
              sshi5w: "f1kfson",
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "f15hvtkj",
              Bxyxcbc: "f3kip1f",
              Bahqtrf: "fk6fouc",
              Be2twd7: "fod5ikn",
              Bhrd7zp: "figsok6",
              Bg96gwp: "faaz57k",
            },
          },
          {
            d: [
              ".f1ern45e{border-top-style:none;}",
              ".f1n71otn{border-right-style:none;}",
              ".f1deefiw{border-left-style:none;}",
              ".f1h8hb77{border-bottom-style:none;}",
              [".f1s184ao{margin:0;}", { p: -1 }],
              ".f3rmtva{background-color:transparent;}",
              ".f1ewtqcl{box-sizing:border-box;}",
              ".f19n0e5{color:var(--colorNeutralForeground1);}",
              ".fqerorx{flex-grow:1;}",
              ".fk6fouc{font-family:var(--fontFamilyBase);}",
              ".f1l02sjl{height:100%;}",
              ".fwyc1cq::-webkit-input-placeholder{color:var(--colorNeutralForeground4);}",
              ".fwyc1cq::-moz-placeholder{color:var(--colorNeutralForeground4);}",
              ".f13ta7ih::-webkit-input-placeholder{opacity:1;}",
              ".f13ta7ih::-moz-placeholder{opacity:1;}",
              ".f1s6fcnf{outline-style:none;}",
              ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",
              ".fdrzuqr{cursor:not-allowed;}",
              ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}",
              ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}",
              ".f1w5jphr{min-height:40px;}",
              [
                ".f1pnffij{padding:var(--spacingVerticalXS) calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}",
                { p: -1 },
              ],
              ".f192z54u{max-height:200px;}",
              ".fy9rknc{font-size:var(--fontSizeBase200);}",
              ".figsok6{font-weight:var(--fontWeightRegular);}",
              ".fwrc4pm{line-height:var(--lineHeightBase200);}",
              ".fvmd9f{min-height:52px;}",
              [
                ".f1ww82xo{padding:var(--spacingVerticalSNudge) calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}",
                { p: -1 },
              ],
              ".f1if7ixc{max-height:260px;}",
              ".fkhj508{font-size:var(--fontSizeBase300);}",
              ".f1i3iumi{line-height:var(--lineHeightBase300);}",
              ".f1kfson{min-height:64px;}",
              [
                ".f15hvtkj{padding:var(--spacingVerticalS) calc(var(--spacingHorizontalM) + var(--spacingHorizontalXXS));}",
                { p: -1 },
              ],
              ".f3kip1f{max-height:320px;}",
              ".fod5ikn{font-size:var(--fontSizeBase400);}",
              ".faaz57k{line-height:var(--lineHeightBase400);}",
            ],
          }
        ),
        ut = lo(
          {
            none: { B3rzk8w: "f1o1s39h" },
            both: { B3rzk8w: "f1pxm0xe" },
            horizontal: { B3rzk8w: "fq6nmtn" },
            vertical: { B3rzk8w: "f1f5ktr4" },
          },
          {
            d: [
              ".f1o1s39h{resize:none;}",
              ".f1pxm0xe{resize:both;}",
              ".fq6nmtn{resize:horizontal;}",
              ".f1f5ktr4{resize:vertical;}",
            ],
          }
        ),
        ht = t.forwardRef((e, r) => {
          const o = lt(e, r);
          return (
            ((e) => {
              const { size: r, appearance: o, resize: t } = e,
                n = e.textarea.disabled,
                a = "true" == `${e.textarea["aria-invalid"]}`,
                i = o.startsWith("filled"),
                c = dt();
              e.root.className = uo(
                "fui-Textarea",
                c.base,
                n && c.disabled,
                !n && i && c.filled,
                !n && c[o],
                !n && c.interactive,
                !n && "outline" === o && c.outlineInteractive,
                !n && a && c.invalid,
                e.root.className
              );
              const s = ft(),
                l = ut();
              e.textarea.className = uo(
                "fui-Textarea__textarea",
                s.base,
                s[r],
                l[t],
                n && s.disabled,
                e.textarea.className
              );
            })(o),
            mo("useTextareaStyles_unstable")(o),
            ((e) => Ar(e.root, { children: Ar(e.textarea, {}) }))(o)
          );
        });
      ht.displayName = "Textarea";
      const gt = "Enter",
        pt = " ";
      function vt(e, r) {
        const {
            disabled: o,
            disabledFocusable: t = !1,
            "aria-disabled": n,
            onClick: a,
            onKeyDown: i,
            onKeyUp: c,
            ...s
          } = null != r ? r : {},
          l = "string" == typeof n ? "true" === n : n,
          d = o || t || l,
          f = at((e) => {
            d ? (e.preventDefault(), e.stopPropagation()) : null == a || a(e);
          }),
          u = at((e) => {
            if ((null == i || i(e), e.isDefaultPrevented())) return;
            const r = e.key;
            if (d && (r === gt || r === pt)) return (e.preventDefault(), void e.stopPropagation());
            r !== pt
              ? r === gt && (e.preventDefault(), e.currentTarget.click())
              : e.preventDefault();
          }),
          h = at((e) => {
            if ((null == c || c(e), e.isDefaultPrevented())) return;
            const r = e.key;
            if (d && (r === gt || r === pt)) return (e.preventDefault(), void e.stopPropagation());
            r === pt && (e.preventDefault(), e.currentTarget.click());
          });
        if ("button" === e || void 0 === e)
          return {
            ...s,
            disabled: o && !t,
            "aria-disabled": !!t || l,
            onClick: t ? void 0 : f,
            onKeyUp: t ? void 0 : c,
            onKeyDown: t ? void 0 : i,
          };
        {
          const r = !!s.href;
          let n = r ? void 0 : "button";
          !n && d && (n = "link");
          const a = {
            role: n,
            tabIndex: t || (!r && !o) ? 0 : void 0,
            ...s,
            onClick: f,
            onKeyUp: h,
            onKeyDown: u,
            "aria-disabled": d,
          };
          return ("a" === e && d && (a.href = void 0), a);
        }
      }
      const mt = t.createContext(void 0),
        bt = {},
        yt =
          (mt.Provider,
          (e, r) => {
            const { size: o } = null !== (n = t.useContext(mt)) && void 0 !== n ? n : bt;
            var n;
            const {
                appearance: a = "secondary",
                as: i = "button",
                disabled: c = !1,
                disabledFocusable: s = !1,
                icon: l,
                iconPosition: d = "before",
                shape: f = "rounded",
                size: u = null != o ? o : "medium",
              } = e,
              h = $r(l, { elementType: "span" });
            return {
              appearance: a,
              disabled: c,
              disabledFocusable: s,
              iconPosition: d,
              shape: f,
              size: u,
              iconOnly: Boolean((null == h ? void 0 : h.children) && !e.children),
              components: { root: "button", icon: "span" },
              root: Wr(co(i, vt(e.as, e)), {
                elementType: "button",
                defaultProps: { ref: r, type: "button" === i ? "button" : void 0 },
              }),
              icon: h,
            };
          }),
        kt = $o("r1alrhcs", null, {
          r: [
            ".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}",
            ".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}",
            ".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}",
            ".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}",
          ],
          s: [
            "@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}",
            "@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}",
            "@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}",
          ],
        }),
        wt = $o("rywnvv2", null, [
          ".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}",
        ]),
        Bt = lo(
          {
            outline: { De3pzq: "f1c21dwh", Jwef8y: "fjxutwb", iro3zm: "fwiml72" },
            primary: {
              De3pzq: "ffp7eso",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              sj55zd: "f1phragk",
              Jwef8y: "f15wkkf3",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              Bi91k9c: "f1rq72xc",
              iro3zm: "fnp9lpt",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
              B2d53fq: "f1d6v5y2",
              Bsw6fvg: "f1rirnrt",
              Bjwas2f: "f1uu00uk",
              Bn1d65q: ["fkvaka8", "f9a0qzu"],
              Bxeuatn: "f1ux7til",
              n51gp8: ["f9a0qzu", "fkvaka8"],
              Bbusuzp: "f1lkg8j3",
              ycbfsm: "fkc42ay",
              Bqrx1nm: "fq7113v",
              pgvf35: "ff1wgvm",
              Bh7lczh: ["fiob0tu", "f1x4h75k"],
              dpv3f4: "f1j6scgf",
              Bpnjhaq: ["f1x4h75k", "fiob0tu"],
              ze5xyy: "f4xjyn1",
              g2kj27: "fbgcvur",
              Bf756sw: "f1ks1yx8",
              Bow2dr7: ["f1o6qegi", "fmxjhhp"],
              Bvhedfk: "fcnxywj",
              Gye4lf: ["fmxjhhp", "f1o6qegi"],
              pc6evw: "f9ddjv3",
            },
            secondary: {},
            subtle: {
              De3pzq: "fhovq9v",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              sj55zd: "fkfq4zb",
              Jwef8y: "f1t94bn6",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              Bi91k9c: "fnwyq0v",
              Bk3fhr4: "ft1hn21",
              Bmfj8id: "fuxngvv",
              Bbdnnc7: "fy5bs14",
              iro3zm: "fsv2rcd",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
              B2d53fq: "f1omzyqd",
              em6i61: "f1dfjoow",
              vm6p8p: "f1j98vj9",
              x3br3k: "fj8yq94",
              ze5xyy: "f4xjyn1",
              Bx3q9su: "f1et0tmh",
              pc6evw: "f9ddjv3",
              xd2cci: "f1wi8ngl",
            },
            transparent: {
              De3pzq: "f1c21dwh",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              sj55zd: "fkfq4zb",
              Jwef8y: "fjxutwb",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              Bi91k9c: "f139oj5f",
              Bk3fhr4: "ft1hn21",
              Bmfj8id: "fuxngvv",
              iro3zm: "fwiml72",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
              B2d53fq: "f1fg1p5m",
              em6i61: "f1dfjoow",
              vm6p8p: "f1j98vj9",
              Bqrx1nm: "f1tme0vf",
              ze5xyy: "f4xjyn1",
              g2kj27: "f18onu3q",
              pc6evw: "f9ddjv3",
            },
            circular: { Beyfa6y: 0, Bbmb7ep: 0, Btl43ni: 0, B7oj6ja: 0, Dimara: "f44lkw9" },
            rounded: {},
            square: { Beyfa6y: 0, Bbmb7ep: 0, Btl43ni: 0, B7oj6ja: 0, Dimara: "f1fabniw" },
            small: {
              Bf4jedk: "fh7ncta",
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "fneth5b",
              Beyfa6y: 0,
              Bbmb7ep: 0,
              Btl43ni: 0,
              B7oj6ja: 0,
              Dimara: "ft85np5",
              Be2twd7: "fy9rknc",
              Bhrd7zp: "figsok6",
              Bg96gwp: "fwrc4pm",
            },
            smallWithIcon: { Byoj8tv: "f1brlhvm", z8tnut: "f1sl3k7w" },
            medium: {},
            large: {
              Bf4jedk: "f14es27b",
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "f4db1ww",
              Beyfa6y: 0,
              Bbmb7ep: 0,
              Btl43ni: 0,
              B7oj6ja: 0,
              Dimara: "ft85np5",
              Be2twd7: "fod5ikn",
              Bhrd7zp: "fl43uef",
              Bg96gwp: "faaz57k",
            },
            largeWithIcon: { Byoj8tv: "fy7v416", z8tnut: "f1a1bwwz" },
          },
          {
            d: [
              ".f1c21dwh{background-color:var(--colorTransparentBackground);}",
              ".ffp7eso{background-color:var(--colorBrandBackground);}",
              ".f1p3nwhy{border-top-color:transparent;}",
              ".f11589ue{border-right-color:transparent;}",
              ".f1pdflbu{border-left-color:transparent;}",
              ".f1q5o8ev{border-bottom-color:transparent;}",
              ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}",
              ".fhovq9v{background-color:var(--colorSubtleBackground);}",
              ".fkfq4zb{color:var(--colorNeutralForeground2);}",
              [".f44lkw9{border-radius:var(--borderRadiusCircular);}", { p: -1 }],
              [".f1fabniw{border-radius:var(--borderRadiusNone);}", { p: -1 }],
              ".fh7ncta{min-width:64px;}",
              [".fneth5b{padding:3px var(--spacingHorizontalS);}", { p: -1 }],
              [".ft85np5{border-radius:var(--borderRadiusMedium);}", { p: -1 }],
              ".fy9rknc{font-size:var(--fontSizeBase200);}",
              ".figsok6{font-weight:var(--fontWeightRegular);}",
              ".fwrc4pm{line-height:var(--lineHeightBase200);}",
              ".f1brlhvm{padding-bottom:1px;}",
              ".f1sl3k7w{padding-top:1px;}",
              ".f14es27b{min-width:96px;}",
              [".f4db1ww{padding:8px var(--spacingHorizontalL);}", { p: -1 }],
              [".ft85np5{border-radius:var(--borderRadiusMedium);}", { p: -1 }],
              ".fod5ikn{font-size:var(--fontSizeBase400);}",
              ".fl43uef{font-weight:var(--fontWeightSemibold);}",
              ".faaz57k{line-height:var(--lineHeightBase400);}",
              ".fy7v416{padding-bottom:7px;}",
              ".f1a1bwwz{padding-top:7px;}",
            ],
            h: [
              ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}",
              ".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}",
              ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}",
              ".f1s2uweq:hover{border-top-color:transparent;}",
              ".fr80ssc:hover{border-right-color:transparent;}",
              ".fecsdlb:hover{border-left-color:transparent;}",
              ".f1ukrpxl:hover{border-bottom-color:transparent;}",
              ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}",
              ".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}",
              ".f1h0usnq:hover:active{border-top-color:transparent;}",
              ".fs4ktlq:hover:active{border-right-color:transparent;}",
              ".fx2bmrt:hover:active{border-left-color:transparent;}",
              ".f16h9ulv:hover:active{border-bottom-color:transparent;}",
              ".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}",
              ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}",
              ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}",
              ".ft1hn21:hover .fui-Icon-filled{display:inline;}",
              ".fuxngvv:hover .fui-Icon-regular{display:none;}",
              ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}",
              ".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}",
              ".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}",
              ".f1dfjoow:hover:active .fui-Icon-filled{display:inline;}",
              ".f1j98vj9:hover:active .fui-Icon-regular{display:none;}",
              ".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}",
              ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}",
              ".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}",
            ],
            m: [
              [
                "@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1uu00uk{border-top-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f9a0qzu{border-left-color:HighlightText;}.fkvaka8{border-right-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1ux7til{border-bottom-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fq7113v:hover{background-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fbgcvur:hover:active{background-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1ks1yx8:hover:active{border-top-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1o6qegi:hover:active{border-right-color:Highlight;}.fmxjhhp:hover:active{border-left-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fcnxywj:hover:active{border-bottom-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f9ddjv3:hover:active{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1et0tmh:hover .fui-Button__icon{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1wi8ngl:hover:active .fui-Button__icon{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1tme0vf:hover{background-color:var(--colorTransparentBackground);}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f18onu3q:hover:active{background-color:var(--colorTransparentBackground);}}",
                { m: "(forced-colors: active)" },
              ],
            ],
          }
        ),
        xt = lo(
          {
            base: {
              De3pzq: "f1bg9a2p",
              g2u3we: "f1jj8ep1",
              h3c5rm: ["f15xbau", "fy0fskl"],
              B9xav0g: "f4ikngz",
              zhjwy3: ["fy0fskl", "f15xbau"],
              sj55zd: "f1s2aq7o",
              Bceei9c: "fdrzuqr",
              Bfinmwp: "f15x8b5r",
              Jwef8y: "f1falr9n",
              Bgoe8wy: "f12mpcsy",
              Bwzppfd: ["f1gwvigk", "f18rmfxp"],
              oetu4i: "f1jnshp0",
              gg5e9n: ["f18rmfxp", "f1gwvigk"],
              Bi91k9c: "fvgxktp",
              eoavqd: "fphbwmw",
              Bk3fhr4: "f19vpps7",
              Bmfj8id: "fv5swzo",
              Bbdnnc7: "f1al02dq",
              iro3zm: "f1t6o4dc",
              b661bw: "f10ztigi",
              Bk6r4ia: ["f1ft5sdu", "f1gzf82w"],
              B9zn80p: "f12zbtn2",
              Bpld233: ["f1gzf82w", "f1ft5sdu"],
              B2d53fq: "fcvwxyo",
              c3iz72: "f8w4c43",
              em6i61: "f1ol4fw6",
              vm6p8p: "f1q1lw4e",
              x3br3k: "f1dwjv2g",
            },
            highContrast: {
              Bsw6fvg: "f4lkoma",
              Bjwas2f: "fg455y9",
              Bn1d65q: ["f1rvyvqg", "f14g86mu"],
              Bxeuatn: "f1cwzwz",
              n51gp8: ["f14g86mu", "f1rvyvqg"],
              Bbusuzp: "f1dcs8yz",
              Bm2fdqk: "fuigjrg",
              G867l3: "fjwq6ea",
              gdbnj: ["f1lr3nhc", "f1mbxvi6"],
              mxns5l: "fn5gmvv",
              o3nasb: ["f1mbxvi6", "f1lr3nhc"],
              Bqrx1nm: "f1vmkb5g",
              pgvf35: "f53ppgq",
              Bh7lczh: ["f1663y11", "f80fkiy"],
              dpv3f4: "f18v5270",
              Bpnjhaq: ["f80fkiy", "f1663y11"],
              ze5xyy: "f1kc2mi9",
              Bx3q9su: "f4dhi0o",
              g2kj27: "f1y0svfh",
              Bf756sw: "fihuait",
              Bow2dr7: ["fnxhupq", "fyd6l6x"],
              Bvhedfk: "fx507ft",
              Gye4lf: ["fyd6l6x", "fnxhupq"],
              pc6evw: "fb3rf2x",
              xd2cci: "fequ9m0",
            },
            outline: { De3pzq: "f1c21dwh", Jwef8y: "f9ql6rf", iro3zm: "f3h1zc4" },
            primary: {
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
            },
            secondary: {},
            subtle: {
              De3pzq: "f1c21dwh",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              Jwef8y: "f9ql6rf",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              iro3zm: "f3h1zc4",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
            },
            transparent: {
              De3pzq: "f1c21dwh",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              Jwef8y: "f9ql6rf",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              iro3zm: "f3h1zc4",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
            },
          },
          {
            d: [
              ".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}",
              ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}",
              ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}",
              ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}",
              ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}",
              ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",
              ".fdrzuqr{cursor:not-allowed;}",
              ".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",
              ".f1c21dwh{background-color:var(--colorTransparentBackground);}",
              ".f1p3nwhy{border-top-color:transparent;}",
              ".f11589ue{border-right-color:transparent;}",
              ".f1pdflbu{border-left-color:transparent;}",
              ".f1q5o8ev{border-bottom-color:transparent;}",
            ],
            h: [
              ".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}",
              ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}",
              ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}",
              ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}",
              ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}",
              ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}",
              ".fphbwmw:hover{cursor:not-allowed;}",
              ".f19vpps7:hover .fui-Icon-filled{display:none;}",
              ".fv5swzo:hover .fui-Icon-regular{display:inline;}",
              ".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",
              ".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}",
              ".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}",
              ".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}",
              ".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}",
              ".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}",
              ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}",
              ".f8w4c43:hover:active{cursor:not-allowed;}",
              ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}",
              ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}",
              ".f1dwjv2g:hover:active .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",
              ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}",
              ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}",
              ".f1s2uweq:hover{border-top-color:transparent;}",
              ".fr80ssc:hover{border-right-color:transparent;}",
              ".fecsdlb:hover{border-left-color:transparent;}",
              ".f1ukrpxl:hover{border-bottom-color:transparent;}",
              ".f1h0usnq:hover:active{border-top-color:transparent;}",
              ".fs4ktlq:hover:active{border-right-color:transparent;}",
              ".fx2bmrt:hover:active{border-left-color:transparent;}",
              ".f16h9ulv:hover:active{border-bottom-color:transparent;}",
            ],
            m: [
              [
                "@media (forced-colors: active){.f4lkoma{background-color:ButtonFace;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fuigjrg .fui-Button__icon{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fjwq6ea:focus{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1lr3nhc:focus{border-right-color:GrayText;}.f1mbxvi6:focus{border-left-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fn5gmvv:focus{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1vmkb5g:hover{background-color:ButtonFace;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f53ppgq:hover{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1663y11:hover{border-right-color:GrayText;}.f80fkiy:hover{border-left-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f18v5270:hover{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1kc2mi9:hover{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f4dhi0o:hover .fui-Button__icon{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1y0svfh:hover:active{background-color:ButtonFace;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fihuait:hover:active{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fnxhupq:hover:active{border-right-color:GrayText;}.fyd6l6x:hover:active{border-left-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fx507ft:hover:active{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fb3rf2x:hover:active{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fequ9m0:hover:active .fui-Button__icon{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
            ],
          }
        ),
        St = lo(
          {
            circular: { Bw81rd7: 0, kdpuga: 0, dm238s: 0, B6xbmo0: 0, B3whbx2: "f1062rbf" },
            rounded: {},
            square: { Bw81rd7: 0, kdpuga: 0, dm238s: 0, B6xbmo0: 0, B3whbx2: "fj0ryk1" },
            primary: {
              B8q5s1w: "f17t0x8g",
              Bci5o5g: ["f194v5ow", "fk7jm04"],
              n8qw10: "f1qgg65p",
              Bdrgwmp: ["fk7jm04", "f194v5ow"],
              j6ew2k: ["fhgccpy", "fjo7pq6"],
              he4mth: "f32wu9k",
              Byr4aka: "fu5nqqq",
              lks7q5: ["f13prjl2", "f1nl83rv"],
              Bnan3qt: "f1czftr5",
              k1dn9: ["f1nl83rv", "f13prjl2"],
              Boium3a: ["f12k37oa", "fdnykm2"],
              tm8e47: "fr96u23",
            },
            small: { Bw81rd7: 0, kdpuga: 0, dm238s: 0, B6xbmo0: 0, B3whbx2: "fazmxh" },
            medium: {},
            large: { Bw81rd7: 0, kdpuga: 0, dm238s: 0, B6xbmo0: 0, B3whbx2: "f1b6alqh" },
          },
          {
            d: [
              [
                ".f1062rbf[data-fui-focus-visible]{border-radius:var(--borderRadiusCircular);}",
                { p: -1 },
              ],
              [
                ".fj0ryk1[data-fui-focus-visible]{border-radius:var(--borderRadiusNone);}",
                { p: -1 },
              ],
              ".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}",
              ".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}",
              ".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}",
              ".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}",
              ".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}",
              ".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}",
              ".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}",
              ".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}",
              ".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}",
              ".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}",
              ".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}",
              [
                ".fazmxh[data-fui-focus-visible]{border-radius:var(--borderRadiusSmall);}",
                { p: -1 },
              ],
              [
                ".f1b6alqh[data-fui-focus-visible]{border-radius:var(--borderRadiusLarge);}",
                { p: -1 },
              ],
            ],
            t: [
              "@supports (-moz-appearance:button){.f12k37oa[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fdnykm2[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}",
              "@supports (-moz-appearance:button){.fr96u23[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}",
            ],
          }
        ),
        zt = lo(
          {
            small: {
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "fu97m5z",
              Bf4jedk: "f17fgpbq",
              B2u0y6b: "f1jt17bm",
            },
            medium: {
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "f18ktai2",
              Bf4jedk: "fwbmr0d",
              B2u0y6b: "f44c6la",
            },
            large: {
              Byoj8tv: 0,
              uwmqm3: 0,
              z189sj: 0,
              z8tnut: 0,
              B0ocmuz: "f1hbd1aw",
              Bf4jedk: "f12clzc2",
              B2u0y6b: "fjy1crr",
            },
          },
          {
            d: [
              [".fu97m5z{padding:1px;}", { p: -1 }],
              ".f17fgpbq{min-width:24px;}",
              ".f1jt17bm{max-width:24px;}",
              [".f18ktai2{padding:5px;}", { p: -1 }],
              ".fwbmr0d{min-width:32px;}",
              ".f44c6la{max-width:32px;}",
              [".f1hbd1aw{padding:7px;}", { p: -1 }],
              ".f12clzc2{min-width:40px;}",
              ".fjy1crr{max-width:40px;}",
            ],
          }
        ),
        jt = lo(
          {
            small: {
              Be2twd7: "fe5j1ua",
              Bqenvij: "fjamq6b",
              a9b677: "f64fuq3",
              Bqrlyyl: "fbaiahx",
            },
            medium: {},
            large: {
              Be2twd7: "f1rt2boy",
              Bqenvij: "frvgh55",
              a9b677: "fq4mcun",
              Bqrlyyl: "f1exjqw5",
            },
            before: { t21cq0: ["f1nizpg2", "f1a695kz"] },
            after: { Frg6f3: ["f1a695kz", "f1nizpg2"] },
          },
          {
            d: [
              ".fe5j1ua{font-size:20px;}",
              ".fjamq6b{height:20px;}",
              ".f64fuq3{width:20px;}",
              ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}",
              ".f1rt2boy{font-size:24px;}",
              ".frvgh55{height:24px;}",
              ".fq4mcun{width:24px;}",
              ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}",
              ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}",
              ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}",
            ],
          }
        ),
        Nt = t.forwardRef((e, r) => {
          const o = yt(e, r);
          return (
            ((e) => {
              const r = kt(),
                o = wt(),
                t = Bt(),
                n = xt(),
                a = St(),
                i = zt(),
                c = jt(),
                {
                  appearance: s,
                  disabled: l,
                  disabledFocusable: d,
                  icon: f,
                  iconOnly: u,
                  iconPosition: h,
                  shape: g,
                  size: p,
                } = e;
              ((e.root.className = uo(
                "fui-Button",
                r,
                s && t[s],
                t[p],
                f && "small" === p && t.smallWithIcon,
                f && "large" === p && t.largeWithIcon,
                t[g],
                (l || d) && n.base,
                (l || d) && n.highContrast,
                s && (l || d) && n[s],
                "primary" === s && a.primary,
                a[p],
                a[g],
                u && i[p],
                e.root.className
              )),
                e.icon &&
                  (e.icon.className = uo(
                    "fui-Button__icon",
                    o,
                    !!e.root.children && c[h],
                    c[p],
                    e.icon.className
                  )));
            })(o),
            mo("useButtonStyles_unstable")(o),
            ((e) => {
              const { iconOnly: r, iconPosition: o } = e;
              return Lr(e.root, {
                children: [
                  "after" !== o && e.icon && Ar(e.icon, {}),
                  !r && e.root.children,
                  "after" === o && e.icon && Ar(e.icon, {}),
                ],
              });
            })(o)
          );
        });
      Nt.displayName = "Button";
      var Tt = o(64583).Promise;
      function qt() {
        var e,
          r,
          o = "function" == typeof Symbol ? Symbol : {},
          t = o.iterator || "@@iterator",
          n = o.toStringTag || "@@toStringTag";
        function a(o, t, n, a) {
          var s = t && t.prototype instanceof c ? t : c,
            l = Object.create(s.prototype);
          return (
            _t(
              l,
              "_invoke",
              (function (o, t, n) {
                var a,
                  c,
                  s,
                  l = 0,
                  d = n || [],
                  f = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: h,
                    f: h.bind(e, 4),
                    d: function (r, o) {
                      return ((a = r), (c = 0), (s = e), (u.n = o), i);
                    },
                  };
                function h(o, t) {
                  for (c = o, s = t, r = 0; !f && l && !n && r < d.length; r++) {
                    var n,
                      a = d[r],
                      h = u.p,
                      g = a[2];
                    o > 3
                      ? (n = g === t) && ((s = a[(c = a[4]) ? 5 : ((c = 3), 3)]), (a[4] = a[5] = e))
                      : a[0] <= h &&
                        ((n = o < 2 && h < a[1])
                          ? ((c = 0), (u.v = t), (u.n = a[1]))
                          : h < g &&
                            (n = o < 3 || a[0] > t || t > g) &&
                            ((a[4] = o), (a[5] = t), (u.n = g), (c = 0)));
                  }
                  if (n || o > 1) return i;
                  throw ((f = !0), t);
                }
                return function (n, d, g) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (f && 1 === d && h(d, g), c = d, s = g; (r = c < 2 ? e : s) || !f; ) {
                    a || (c ? (c < 3 ? (c > 1 && (u.n = -1), h(c, s)) : (u.n = s)) : (u.v = s));
                    try {
                      if (((l = 2), a)) {
                        if ((c || (n = "next"), (r = a[n]))) {
                          if (!(r = r.call(a, s)))
                            throw TypeError("iterator result is not an object");
                          if (!r.done) return r;
                          ((s = r.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (r = a.return) && r.call(a),
                            c < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" + n + "' method"
                              )),
                              (c = 1)));
                        a = e;
                      } else if ((r = (f = u.n < 0) ? s : o.call(t, u)) !== i) break;
                    } catch (r) {
                      ((a = e), (c = 1), (s = r));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: r, done: f };
                };
              })(o, n, a),
              !0
            ),
            l
          );
        }
        var i = {};
        function c() {}
        function s() {}
        function l() {}
        r = Object.getPrototypeOf;
        var d = [][t]
            ? r(r([][t]()))
            : (_t((r = {}), t, function () {
                return this;
              }),
              r),
          f = (l.prototype = c.prototype = Object.create(d));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), _t(e, n, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (s.prototype = l),
          _t(f, "constructor", l),
          _t(l, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          _t(l, n, "GeneratorFunction"),
          _t(f),
          _t(f, n, "Generator"),
          _t(f, t, function () {
            return this;
          }),
          _t(f, "toString", function () {
            return "[object Generator]";
          }),
          (qt = function () {
            return { w: a, m: u };
          })()
        );
      }
      function _t(e, r, o, t) {
        var n = Object.defineProperty;
        try {
          n({}, "", {});
        } catch (e) {
          n = 0;
        }
        ((_t = function (e, r, o, t) {
          function a(r, o) {
            _t(e, r, function (e) {
              return this._invoke(r, o, e);
            });
          }
          r
            ? n
              ? n(e, r, { value: o, enumerable: !t, configurable: !t, writable: !t })
              : (e[r] = o)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          _t(e, r, o, t));
      }
      function Pt(e, r, o, t, n, a, i) {
        try {
          var c = e[a](i),
            s = c.value;
        } catch (e) {
          return void o(e);
        }
        c.done ? r(s) : Tt.resolve(s).then(t, n);
      }
      function Ct(e) {
        return function () {
          var r = this,
            o = arguments;
          return new Tt(function (t, n) {
            var a = e.apply(r, o);
            function i(e) {
              Pt(a, t, n, i, c, "next", e);
            }
            function c(e) {
              Pt(a, t, n, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function Ft(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var o = 0, t = Array(r); o < r; o++) t[o] = e[o];
        return t;
      }
      var Et = _r({
          instructions: {
            fontWeight: "var(--fontWeightSemibold)",
            marginTop: "20px",
            marginBottom: "10px",
          },
          textPromptAndInsertion: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          textAreaField: {
            marginLeft: "20px",
            marginTop: "30px",
            marginBottom: "20px",
            marginRight: "20px",
            maxWidth: "50%",
          },
        }),
        Rt = function (e) {
          var r,
            o,
            n =
              ((r = (0, t.useState)("Some text.")),
              (o = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(r) ||
                (function (e, r) {
                  var o =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != o) {
                    var t,
                      n,
                      a,
                      i,
                      c = [],
                      s = !0,
                      l = !1;
                    try {
                      if (((a = (o = o.call(e)).next), 0 === r)) {
                        if (Object(o) !== o) return;
                        s = !1;
                      } else
                        for (
                          ;
                          !(s = (t = a.call(o)).done) && (c.push(t.value), c.length !== r);
                          s = !0
                        );
                    } catch (e) {
                      ((l = !0), (n = e));
                    } finally {
                      try {
                        if (!s && null != o.return && ((i = o.return()), Object(i) !== i)) return;
                      } finally {
                        if (l) throw n;
                      }
                    }
                    return c;
                  }
                })(r, o) ||
                (function (e, r) {
                  if (e) {
                    if ("string" == typeof e) return Ft(e, r);
                    var o = {}.toString.call(e).slice(8, -1);
                    return (
                      "Object" === o && e.constructor && (o = e.constructor.name),
                      "Map" === o || "Set" === o
                        ? Array.from(e)
                        : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                          ? Ft(e, r)
                          : void 0
                    );
                  }
                })(r, o) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            a = n[0],
            i = n[1],
            c = (function () {
              var r = Ct(
                qt().m(function r() {
                  return qt().w(function (r) {
                    for (;;)
                      switch (r.n) {
                        case 0:
                          return ((r.n = 1), e.insertText(a));
                        case 1:
                          return r.a(2);
                      }
                  }, r);
                })
              );
              return function () {
                return r.apply(this, arguments);
              };
            })(),
            s = (function () {
              var e = Ct(
                qt().m(function e(r) {
                  return qt().w(function (e) {
                    for (;;)
                      switch (e.n) {
                        case 0:
                          i(r.target.value);
                        case 1:
                          return e.a(2);
                      }
                  }, e);
                })
              );
              return function (r) {
                return e.apply(this, arguments);
              };
            })(),
            l = Et();
          return t.createElement(
            "div",
            { className: l.textPromptAndInsertion },
            t.createElement(
              ot,
              {
                className: l.textAreaField,
                size: "large",
                label: "Enter text to be inserted into the document.",
              },
              t.createElement(ht, { size: "large", value: a, onChange: s })
            ),
            t.createElement(ot, { className: l.instructions }, "Click the button to insert text."),
            t.createElement(
              Nt,
              { appearance: "primary", disabled: !1, size: "large", onClick: c },
              "Insert text"
            )
          );
        };
      Rt.propTypes = { insertText: c().func.isRequired };
      var Dt = Rt;
      const It = Fo("Ribbon24Regular", "24", [
          "M12 2a7 7 0 0 1 5 11.9v7.35c0 .57-.6.92-1.1.67l-.08-.06L12 19.18l-3.82 2.68a.75.75 0 0 1-1.17-.5v-.11L7 13.9A7 7 0 0 1 12 2Zm3.5 17.8v-4.74a6.97 6.97 0 0 1-7 0v4.74l3.07-2.15a.75.75 0 0 1 .76-.06l.1.06 3.07 2.16v-4.75 4.75ZM12 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z",
        ]),
        Ht = Fo("LockOpen24Regular", "24", [
          "M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5C4 19.55 5.46 21 7.25 21h9.5c1.8 0 3.25-1.46 3.25-3.25v-7.5C20 8.45 18.54 7 16.75 7H16V5ZM7.25 8.5h9.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75v-7.5c0-.97.78-1.75 1.75-1.75Zm4.75 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
        ]),
        Ot = Fo("DesignIdeas24Regular", "24", [
          "M6 2.75a.75.75 0 0 0-1.22-.59 8.1 8.1 0 0 0-2.4 2.77A3.96 3.96 0 0 0 2 6.75c0 .95.48 1.78 1.2 2.27-.19.16-.36.36-.5.6-.48.77-.7 1.94-.7 3.63 0 1.72.23 3.77.6 5.41.2.82.42 1.57.7 2.14a3 3 0 0 0 .5.77c.21.21.53.43.95.43.42 0 .74-.22.94-.43a3 3 0 0 0 .51-.77c.28-.57.5-1.32.7-2.14.37-1.64.6-3.7.6-5.4 0-1.7-.22-2.87-.7-3.64a2.44 2.44 0 0 0-.5-.6c.72-.49 1.2-1.32 1.2-2.27 0-.93-.44-1.57-.77-2.07l-.03-.04C6.31 4.06 6 3.58 6 2.75Zm-2.5 4c0-.3 0-.67.24-1.18.17-.36.47-.82 1.01-1.37.2.52.47.92.7 1.26v.02C5.83 6 6 6.3 6 6.75a1.25 1.25 0 0 1-2.5 0Zm0 6.5c0-1.62.23-2.44.47-2.84a.79.79 0 0 1 .33-.32c.1-.05.25-.09.45-.09s.34.04.45.09c.1.05.21.13.33.32.24.4.47 1.22.47 2.84 0 1.6-.22 3.55-.57 5.08a8.91 8.91 0 0 1-.68 2 8.91 8.91 0 0 1-.68-2 24.56 24.56 0 0 1-.57-5.08Zm4.98.83c.48.2.99.34 1.52.4v-2.23C10 10.45 11.46 9 13.25 9h2.23a5 5 0 0 0-7.35-3.9c-.18-.4-.39-.71-.55-.94l-.05-.08-.18-.27A6.5 6.5 0 0 1 16.98 9h1.77c1.8 0 3.25 1.46 3.25 3.25v5.5c0 1.8-1.46 3.25-3.25 3.25h-5.5A3.25 3.25 0 0 1 10 17.75v-1.77a6.47 6.47 0 0 1-1.62-.33c.05-.53.09-1.06.1-1.57Zm10.27-3.58h-1.83a6.5 6.5 0 0 1-5.42 5.42v1.83c0 .97.78 1.75 1.75 1.75h5.5c.97 0 1.75-.78 1.75-1.75v-5.5c0-.97-.78-1.75-1.75-1.75Zm-7.25 3.9a5 5 0 0 0 3.9-3.9h-2.15c-.97 0-1.75.78-1.75 1.75v2.15Z",
        ]);
      var Mt = o(64583).Promise;
      function At() {
        var e,
          r,
          o = "function" == typeof Symbol ? Symbol : {},
          t = o.iterator || "@@iterator",
          n = o.toStringTag || "@@toStringTag";
        function a(o, t, n, a) {
          var s = t && t.prototype instanceof c ? t : c,
            l = Object.create(s.prototype);
          return (
            Lt(
              l,
              "_invoke",
              (function (o, t, n) {
                var a,
                  c,
                  s,
                  l = 0,
                  d = n || [],
                  f = !1,
                  u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: h,
                    f: h.bind(e, 4),
                    d: function (r, o) {
                      return ((a = r), (c = 0), (s = e), (u.n = o), i);
                    },
                  };
                function h(o, t) {
                  for (c = o, s = t, r = 0; !f && l && !n && r < d.length; r++) {
                    var n,
                      a = d[r],
                      h = u.p,
                      g = a[2];
                    o > 3
                      ? (n = g === t) && ((s = a[(c = a[4]) ? 5 : ((c = 3), 3)]), (a[4] = a[5] = e))
                      : a[0] <= h &&
                        ((n = o < 2 && h < a[1])
                          ? ((c = 0), (u.v = t), (u.n = a[1]))
                          : h < g &&
                            (n = o < 3 || a[0] > t || t > g) &&
                            ((a[4] = o), (a[5] = t), (u.n = g), (c = 0)));
                  }
                  if (n || o > 1) return i;
                  throw ((f = !0), t);
                }
                return function (n, d, g) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (f && 1 === d && h(d, g), c = d, s = g; (r = c < 2 ? e : s) || !f; ) {
                    a || (c ? (c < 3 ? (c > 1 && (u.n = -1), h(c, s)) : (u.n = s)) : (u.v = s));
                    try {
                      if (((l = 2), a)) {
                        if ((c || (n = "next"), (r = a[n]))) {
                          if (!(r = r.call(a, s)))
                            throw TypeError("iterator result is not an object");
                          if (!r.done) return r;
                          ((s = r.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (r = a.return) && r.call(a),
                            c < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" + n + "' method"
                              )),
                              (c = 1)));
                        a = e;
                      } else if ((r = (f = u.n < 0) ? s : o.call(t, u)) !== i) break;
                    } catch (r) {
                      ((a = e), (c = 1), (s = r));
                    } finally {
                      l = 1;
                    }
                  }
                  return { value: r, done: f };
                };
              })(o, n, a),
              !0
            ),
            l
          );
        }
        var i = {};
        function c() {}
        function s() {}
        function l() {}
        r = Object.getPrototypeOf;
        var d = [][t]
            ? r(r([][t]()))
            : (Lt((r = {}), t, function () {
                return this;
              }),
              r),
          f = (l.prototype = c.prototype = Object.create(d));
        function u(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, l)
              : ((e.__proto__ = l), Lt(e, n, "GeneratorFunction")),
            (e.prototype = Object.create(f)),
            e
          );
        }
        return (
          (s.prototype = l),
          Lt(f, "constructor", l),
          Lt(l, "constructor", s),
          (s.displayName = "GeneratorFunction"),
          Lt(l, n, "GeneratorFunction"),
          Lt(f),
          Lt(f, n, "Generator"),
          Lt(f, t, function () {
            return this;
          }),
          Lt(f, "toString", function () {
            return "[object Generator]";
          }),
          (At = function () {
            return { w: a, m: u };
          })()
        );
      }
      function Lt(e, r, o, t) {
        var n = Object.defineProperty;
        try {
          n({}, "", {});
        } catch (e) {
          n = 0;
        }
        ((Lt = function (e, r, o, t) {
          function a(r, o) {
            Lt(e, r, function (e) {
              return this._invoke(r, o, e);
            });
          }
          r
            ? n
              ? n(e, r, { value: o, enumerable: !t, configurable: !t, writable: !t })
              : (e[r] = o)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          Lt(e, r, o, t));
      }
      function Wt(e, r, o, t, n, a, i) {
        try {
          var c = e[a](i),
            s = c.value;
        } catch (e) {
          return void o(e);
        }
        c.done ? r(s) : Mt.resolve(s).then(t, n);
      }
      function $t(e) {
        return function () {
          var r = this,
            o = arguments;
          return new Mt(function (t, n) {
            var a = e.apply(r, o);
            function i(e) {
              Wt(a, t, n, i, c, "next", e);
            }
            function c(e) {
              Wt(a, t, n, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function Xt(e) {
        return Gt.apply(this, arguments);
      }
      function Gt() {
        return (
          (Gt = $t(
            At().m(function e(r) {
              var o;
              return At().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          (e.n = 1),
                          Excel.run(
                            (function () {
                              var e = $t(
                                At().m(function e(o) {
                                  var t, n;
                                  return At().w(function (e) {
                                    for (;;)
                                      switch (e.n) {
                                        case 0:
                                          return (
                                            (t = o.workbook.worksheets.getActiveWorksheet()),
                                            ((n = t.getRange("A1")).values = [[r]]),
                                            n.format.autofitColumns(),
                                            (e.n = 1),
                                            o.sync()
                                          );
                                        case 1:
                                          return e.a(2);
                                      }
                                  }, e);
                                })
                              );
                              return function (r) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        );
                      case 1:
                        e.n = 3;
                        break;
                      case 2:
                        ((e.p = 2), (o = e.v), console.log("Error: " + o));
                      case 3:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[0, 2]]
              );
            })
          )),
          Gt.apply(this, arguments)
        );
      }
      var Kt = _r({ root: { minHeight: "100vh" } }),
        Vt = function (e) {
          var r = e.title,
            o = Kt(),
            n = [
              {
                icon: t.createElement(It, null),
                primaryText: "Achieve more with Office integration",
              },
              { icon: t.createElement(Ht, null), primaryText: "Unlock features and functionality" },
              { icon: t.createElement(Ot, null), primaryText: "Create and visualize like a pro" },
            ];
          return t.createElement(
            "div",
            { className: o.root },
            t.createElement(wo, { logo: "assets/logo-filled.png", title: r, message: "Welcome" }),
            t.createElement(So, {
              message: "Discover what this add-in can do for you today!",
              items: n,
            }),
            t.createElement(Dt, { insertText: Xt })
          );
        };
      Vt.propTypes = { title: c().string };
      var Ut = Vt;
      const Zt = t.createContext(void 0),
        Yt = { targetDocument: "object" == typeof document ? document : void 0, dir: "ltr" },
        Jt = Zt.Provider;
      function Qt() {
        var e;
        return null !== (e = t.useContext(Zt)) && void 0 !== e ? e : Yt;
      }
      const en = t.createContext(void 0),
        rn = en.Provider,
        on = t.createContext(void 0).Provider,
        tn = t.createContext(void 0).Provider;
      function nn(e, r) {
        var o;
        const t = e;
        var n;
        return Boolean(
          (null == t || null === (o = t.ownerDocument) || void 0 === o ? void 0 : o.defaultView) &&
            t instanceof
              t.ownerDocument.defaultView[
                null !== (n = null == r ? void 0 : r.constructorName) && void 0 !== n
                  ? n
                  : "HTMLElement"
              ]
        );
      }
      var an = "undefined" != typeof WeakRef,
        cn = class {
          constructor(e) {
            an && "object" == typeof e ? (this._weakRef = new WeakRef(e)) : (this._instance = e);
          }
          deref() {
            var e, r;
            let o;
            return (
              this._weakRef
                ? ((o = null == (e = this._weakRef) ? void 0 : e.deref()),
                  o || delete this._weakRef)
                : ((o = this._instance),
                  (null == (r = null == o ? void 0 : o.isDisposed) ? void 0 : r.call(o)) &&
                    delete this._instance),
              o
            );
          }
        },
        sn = "keyborg:focusin",
        ln = !1,
        dn = 0,
        fn = class {
          constructor(e, r) {
            ((this._isNavigatingWithKeyboard_DO_NOT_USE = !1),
              (this._onFocusIn = (e) => {
                if (this._isMouseOrTouchUsedTimer) return;
                if (this.isNavigatingWithKeyboard) return;
                const r = e.detail;
                r.relatedTarget &&
                  (r.isFocusedProgrammatically ||
                    void 0 === r.isFocusedProgrammatically ||
                    (this.isNavigatingWithKeyboard = !0));
              }),
              (this._onMouseDown = (e) => {
                0 === e.buttons ||
                  (0 === e.clientX && 0 === e.clientY && 0 === e.screenX && 0 === e.screenY) ||
                  this._onMouseOrTouch();
              }),
              (this._onMouseOrTouch = () => {
                const e = this._win;
                (e &&
                  (this._isMouseOrTouchUsedTimer && e.clearTimeout(this._isMouseOrTouchUsedTimer),
                  (this._isMouseOrTouchUsedTimer = e.setTimeout(() => {
                    delete this._isMouseOrTouchUsedTimer;
                  }, 1e3))),
                  (this.isNavigatingWithKeyboard = !1));
              }),
              (this._onKeyDown = (e) => {
                this.isNavigatingWithKeyboard
                  ? this._shouldDismissKeyboardNavigation(e) && this._scheduleDismiss()
                  : this._shouldTriggerKeyboardNavigation(e) &&
                    (this.isNavigatingWithKeyboard = !0);
              }),
              (this.id = "c" + ++dn),
              (this._win = e));
            const o = e.document;
            if (r) {
              const e = r.triggerKeys,
                o = r.dismissKeys;
              ((null == e ? void 0 : e.length) && (this._triggerKeys = new Set(e)),
                (null == o ? void 0 : o.length) && (this._dismissKeys = new Set(o)));
            }
            (o.addEventListener(sn, this._onFocusIn, !0),
              o.addEventListener("mousedown", this._onMouseDown, !0),
              e.addEventListener("keydown", this._onKeyDown, !0),
              o.addEventListener("touchstart", this._onMouseOrTouch, !0),
              o.addEventListener("touchend", this._onMouseOrTouch, !0),
              o.addEventListener("touchcancel", this._onMouseOrTouch, !0),
              (function (e) {
                const r = e;
                ln ||
                  (ln = (function (e) {
                    const r = e.HTMLElement,
                      o = r.prototype.focus;
                    let t = !1;
                    return (
                      (r.prototype.focus = function () {
                        t = !0;
                      }),
                      e.document.createElement("button").focus(),
                      (r.prototype.focus = o),
                      t
                    );
                  })(r));
                const o = r.HTMLElement.prototype.focus;
                if (o.__keyborgNativeFocus) return;
                r.HTMLElement.prototype.focus = s;
                const t = new Set(),
                  n = (e) => {
                    const r = e.target;
                    if (!r) return;
                    const o = new CustomEvent("keyborg:focusout", {
                      cancelable: !0,
                      bubbles: !0,
                      composed: !0,
                      detail: { originalEvent: e },
                    });
                    r.dispatchEvent(o);
                  },
                  a = (e) => {
                    const r = e.target;
                    if (!r) return;
                    let o = e.composedPath()[0];
                    const c = new Set();
                    for (; o; )
                      o.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                        ? (c.add(o), (o = o.host))
                        : (o = o.parentNode);
                    for (const e of t) {
                      const r = e.deref();
                      (r && c.has(r)) ||
                        (t.delete(e),
                        r &&
                          (r.removeEventListener("focusin", a, !0),
                          r.removeEventListener("focusout", n, !0)));
                    }
                    i(r, e.relatedTarget || void 0);
                  },
                  i = (e, r, o) => {
                    var i;
                    const s = e.shadowRoot;
                    if (s) {
                      for (const e of t) if (e.deref() === s) return;
                      return (
                        s.addEventListener("focusin", a, !0),
                        s.addEventListener("focusout", n, !0),
                        void t.add(new cn(s))
                      );
                    }
                    const l = { relatedTarget: r, originalEvent: o },
                      d = new CustomEvent(sn, {
                        cancelable: !0,
                        bubbles: !0,
                        composed: !0,
                        detail: l,
                      });
                    ((d.details = l),
                      (ln || c.lastFocusedProgrammatically) &&
                        ((l.isFocusedProgrammatically =
                          e === (null == (i = c.lastFocusedProgrammatically) ? void 0 : i.deref())),
                        (c.lastFocusedProgrammatically = void 0)),
                      e.dispatchEvent(d));
                  },
                  c = (r.__keyborgData = {
                    focusInHandler: a,
                    focusOutHandler: n,
                    shadowTargets: t,
                  });
                function s() {
                  const e = r.__keyborgData;
                  return (
                    e && (e.lastFocusedProgrammatically = new cn(this)),
                    o.apply(this, arguments)
                  );
                }
                (r.document.addEventListener("focusin", r.__keyborgData.focusInHandler, !0),
                  r.document.addEventListener("focusout", r.__keyborgData.focusOutHandler, !0));
                let l = r.document.activeElement;
                for (; l && l.shadowRoot; ) (i(l), (l = l.shadowRoot.activeElement));
                s.__keyborgNativeFocus = o;
              })(e));
          }
          get isNavigatingWithKeyboard() {
            return this._isNavigatingWithKeyboard_DO_NOT_USE;
          }
          set isNavigatingWithKeyboard(e) {
            this._isNavigatingWithKeyboard_DO_NOT_USE !== e &&
              ((this._isNavigatingWithKeyboard_DO_NOT_USE = e), this.update());
          }
          dispose() {
            const e = this._win;
            if (e) {
              (this._isMouseOrTouchUsedTimer &&
                (e.clearTimeout(this._isMouseOrTouchUsedTimer),
                (this._isMouseOrTouchUsedTimer = void 0)),
                this._dismissTimer &&
                  (e.clearTimeout(this._dismissTimer), (this._dismissTimer = void 0)),
                (function (e) {
                  const r = e,
                    o = r.HTMLElement.prototype,
                    t = o.focus.__keyborgNativeFocus,
                    n = r.__keyborgData;
                  if (n) {
                    (r.document.removeEventListener("focusin", n.focusInHandler, !0),
                      r.document.removeEventListener("focusout", n.focusOutHandler, !0));
                    for (const e of n.shadowTargets) {
                      const r = e.deref();
                      r &&
                        (r.removeEventListener("focusin", n.focusInHandler, !0),
                        r.removeEventListener("focusout", n.focusOutHandler, !0));
                    }
                    (n.shadowTargets.clear(), delete r.__keyborgData);
                  }
                  t && (o.focus = t);
                })(e));
              const r = e.document;
              (r.removeEventListener(sn, this._onFocusIn, !0),
                r.removeEventListener("mousedown", this._onMouseDown, !0),
                e.removeEventListener("keydown", this._onKeyDown, !0),
                r.removeEventListener("touchstart", this._onMouseOrTouch, !0),
                r.removeEventListener("touchend", this._onMouseOrTouch, !0),
                r.removeEventListener("touchcancel", this._onMouseOrTouch, !0),
                delete this._win);
            }
          }
          isDisposed() {
            return !!this._win;
          }
          update() {
            var e, r;
            const o =
              null == (r = null == (e = this._win) ? void 0 : e.__keyborg) ? void 0 : r.refs;
            if (o) for (const e of Object.keys(o)) un.update(o[e], this.isNavigatingWithKeyboard);
          }
          _shouldTriggerKeyboardNavigation(e) {
            var r;
            if ("Tab" === e.key) return !0;
            const o = null == (r = this._win) ? void 0 : r.document.activeElement,
              t = !this._triggerKeys || this._triggerKeys.has(e.keyCode),
              n = o && ("INPUT" === o.tagName || "TEXTAREA" === o.tagName || o.isContentEditable);
            return t && !n;
          }
          _shouldDismissKeyboardNavigation(e) {
            var r;
            return null == (r = this._dismissKeys) ? void 0 : r.has(e.keyCode);
          }
          _scheduleDismiss() {
            const e = this._win;
            if (e) {
              this._dismissTimer &&
                (e.clearTimeout(this._dismissTimer), (this._dismissTimer = void 0));
              const r = e.document.activeElement;
              this._dismissTimer = e.setTimeout(() => {
                this._dismissTimer = void 0;
                const o = e.document.activeElement;
                r && o && r === o && (this.isNavigatingWithKeyboard = !1);
              }, 500);
            }
          }
        },
        un = class e {
          constructor(e, r) {
            ((this._cb = []), (this._id = "k" + ++dn), (this._win = e));
            const o = e.__keyborg;
            o
              ? ((this._core = o.core), (o.refs[this._id] = this))
              : ((this._core = new fn(e, r)),
                (e.__keyborg = { core: this._core, refs: { [this._id]: this } }));
          }
          static create(r, o) {
            return new e(r, o);
          }
          static dispose(e) {
            e.dispose();
          }
          static update(e, r) {
            e._cb.forEach((e) => e(r));
          }
          dispose() {
            var e;
            const r = null == (e = this._win) ? void 0 : e.__keyborg;
            ((null == r ? void 0 : r.refs[this._id]) &&
              (delete r.refs[this._id],
              0 === Object.keys(r.refs).length && (r.core.dispose(), delete this._win.__keyborg)),
              (this._cb = []),
              delete this._core,
              delete this._win);
          }
          isNavigatingWithKeyboard() {
            var e;
            return !!(null == (e = this._core) ? void 0 : e.isNavigatingWithKeyboard);
          }
          subscribe(e) {
            this._cb.push(e);
          }
          unsubscribe(e) {
            const r = this._cb.indexOf(e);
            r >= 0 && this._cb.splice(r, 1);
          }
          setVal(e) {
            this._core && (this._core.isNavigatingWithKeyboard = e);
          }
        };
      const hn = "data-fui-focus-visible";
      function gn(e, r) {
        if (pn(e)) return () => {};
        const o = { current: void 0 },
          t = ((n = r), un.create(n, undefined));
        var n;
        function a(e) {
          t.isNavigatingWithKeyboard() && nn(e) && ((o.current = e), e.setAttribute(hn, ""));
        }
        function i() {
          o.current && (o.current.removeAttribute(hn), (o.current = void 0));
        }
        t.subscribe((e) => {
          e ? a(r.document.activeElement) : i();
        });
        const c = (e) => {
            (i(), a(e.composedPath()[0]));
          },
          s = (r) => {
            (!r.relatedTarget || (nn(r.relatedTarget) && !e.contains(r.relatedTarget))) && i();
          };
        return (
          e.addEventListener(sn, c),
          e.addEventListener("focusout", s),
          (e.focusVisible = !0),
          e.contains(r.document.activeElement) && a(r.document.activeElement),
          () => {
            var r;
            (i(),
              e.removeEventListener(sn, c),
              e.removeEventListener("focusout", s),
              (e.focusVisible = void 0),
              (r = t),
              un.dispose(r));
          }
        );
      }
      function pn(e) {
        return !!e && (!!e.focusVisible || pn(null == e ? void 0 : e.parentElement));
      }
      function vn(e = {}) {
        const r = Qt(),
          o = t.useRef(null);
        var n;
        const a = null !== (n = e.targetDocument) && void 0 !== n ? n : r.targetDocument;
        return (
          t.useEffect(() => {
            if ((null == a ? void 0 : a.defaultView) && o.current)
              return gn(o.current, a.defaultView);
          }, [o, a]),
          o
        );
      }
      function mn(...e) {
        const r = t.useCallback(
          (o) => {
            r.current = o;
            for (const r of e) "function" == typeof r ? r(o) : r && (r.current = o);
          },
          [...e]
        );
        return r;
      }
      const bn = "fui-FluentProvider",
        yn = so(
          {
            root: {
              sj55zd: "f19n0e5",
              De3pzq: "fxugw4r",
              fsow6f: ["f1o700av", "fes3tcz"],
              Bahqtrf: "fk6fouc",
              Be2twd7: "fkhj508",
              Bhrd7zp: "figsok6",
              Bg96gwp: "f1i3iumi",
            },
          },
          {
            d: [
              ".f19n0e5{color:var(--colorNeutralForeground1);}",
              ".fxugw4r{background-color:var(--colorNeutralBackground1);}",
              ".f1o700av{text-align:left;}",
              ".fes3tcz{text-align:right;}",
              ".fk6fouc{font-family:var(--fontFamilyBase);}",
              ".fkhj508{font-size:var(--fontSizeBase300);}",
              ".figsok6{font-weight:var(--fontWeightRegular);}",
              ".f1i3iumi{line-height:var(--lineHeightBase300);}",
            ],
          }
        ),
        kn = n.useInsertionEffect ? n.useInsertionEffect : nt,
        wn = {},
        Bn = {},
        xn = (e, r) => {
          const o = Qt(),
            n = t.useContext(en),
            a = st(),
            i = t.useContext(go) || wn,
            {
              applyStylesToPortals: c = !0,
              customStyleHooks_unstable: s,
              dir: l = o.dir,
              targetDocument: d = o.targetDocument,
              theme: f,
              overrides_unstable: u = {},
            } = e,
            h = Sn(n, f),
            g = Sn(a, u),
            p = Sn(i, s),
            v = jr();
          var m;
          const { styleTagId: b, rule: y } = ((e) => {
            const { targetDocument: r, theme: o, rendererAttributes: n } = e,
              a = t.useRef(),
              i = Lo(bn),
              c = n,
              s = t.useMemo(
                () =>
                  (function (e, r) {
                    return r
                      ? `${e} { ${Object.keys(r).reduce((e, o) => `${e}--${o}: ${r[o]}; `, "")} }`
                      : `${e} {}`;
                  })(`.${i}`, o),
                [o, i]
              );
            return (
              (function (e, r) {
                t.useState(() => {
                  if (!e) return;
                  const o = e.getElementById(r);
                  o && e.head.append(o);
                });
              })(r, i),
              kn(() => {
                const e = null == r ? void 0 : r.getElementById(i);
                return (
                  e
                    ? (a.current = e)
                    : ((a.current = ((e, r) => {
                        if (!(null == e ? void 0 : e.head)) return;
                        const o = e.createElement("style");
                        return (
                          Object.keys(r).forEach((e) => {
                            o.setAttribute(e, r[e]);
                          }),
                          e.head.appendChild(o),
                          o
                        );
                      })(r, { ...c, id: i })),
                      a.current &&
                        ((e, r) => {
                          const o = e.sheet;
                          o && (o.cssRules.length > 0 && o.deleteRule(0), o.insertRule(r, 0));
                        })(a.current, s)),
                  () => {
                    var e;
                    null === (e = a.current) || void 0 === e || e.remove();
                  }
                );
              }, [i, r, s, c]),
              { styleTagId: i, rule: s }
            );
          })({
            theme: h,
            targetDocument: d,
            rendererAttributes: null !== (m = v.styleElementAttributes) && void 0 !== m ? m : Bn,
          });
          return {
            applyStylesToPortals: c,
            customStyleHooks_unstable: p,
            dir: l,
            targetDocument: d,
            theme: h,
            overrides_unstable: g,
            themeClassName: b,
            components: { root: "div" },
            root: Wr(co("div", { ...e, dir: l, ref: mn(r, vn({ targetDocument: d })) }), {
              elementType: "div",
            }),
            serverStyleProps: { cssRule: y, attributes: { ...v.styleElementAttributes, id: b } },
          };
        };
      function Sn(e, r) {
        return e && r ? { ...e, ...r } : e || r;
      }
      const zn = t.forwardRef((e, r) => {
        const o = xn(e, r);
        ((e) => {
          const r = jr(),
            o = yn({ dir: e.dir, renderer: r });
          e.root.className = uo(bn, e.themeClassName, o.root, e.root.className);
        })(o);
        const n = (function (e) {
          const {
              applyStylesToPortals: r,
              customStyleHooks_unstable: o,
              dir: n,
              root: a,
              targetDocument: i,
              theme: c,
              themeClassName: s,
              overrides_unstable: l,
            } = e,
            d = t.useMemo(() => ({ dir: n, targetDocument: i }), [n, i]),
            [f] = t.useState(() => ({})),
            u = t.useMemo(() => ({ textDirection: n }), [n]);
          return {
            customStyleHooks_unstable: o,
            overrides_unstable: l,
            provider: d,
            textDirection: n,
            iconDirection: u,
            tooltip: f,
            theme: c,
            themeClassName: r ? a.className : s,
          };
        })(o);
        return ((e, r) =>
          Ar(Jt, {
            value: r.provider,
            children: Ar(rn, {
              value: r.theme,
              children: Ar(on, {
                value: r.themeClassName,
                children: Ar(vo, {
                  value: r.customStyleHooks_unstable,
                  children: Ar(tn, {
                    value: r.tooltip,
                    children: Ar(Tr, {
                      dir: r.textDirection,
                      children: Ar(_o, {
                        value: r.iconDirection,
                        children: Ar(ct, {
                          value: r.overrides_unstable,
                          children: Lr(e.root, {
                            children: [
                              tt()
                                ? null
                                : Ar("style", {
                                    dangerouslySetInnerHTML: { __html: e.serverStyleProps.cssRule },
                                    ...e.serverStyleProps.attributes,
                                  }),
                              e.root.children,
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }))(o, n);
      });
      zn.displayName = "FluentProvider";
      const jn = "#242424",
        Nn = "#424242",
        Tn = "#616161",
        qn = "#bdbdbd",
        _n = "#e0e0e0",
        Pn = "#e6e6e6",
        Cn = "#ebebeb",
        Fn = "#f0f0f0",
        En = "#f5f5f5",
        Rn = "#fafafa",
        Dn = "rgba(255, 255, 255, 0.4)",
        In = "rgba(255, 255, 255, 0.5)",
        Hn = "rgba(0, 0, 0, 0.05)",
        On = "rgba(0, 0, 0, 0.1)",
        Mn = "#ffffff",
        An = {
          shade50: "#200205",
          shade40: "#3b0509",
          shade30: "#6e0811",
          shade20: "#960b18",
          shade10: "#b10e1c",
          primary: "#c50f1f",
          tint10: "#cc2635",
          tint20: "#d33f4c",
          tint30: "#dc626d",
          tint40: "#eeacb2",
          tint50: "#f6d1d5",
          tint60: "#fdf3f4",
        },
        Ln = {
          shade50: "#031403",
          shade40: "#052505",
          shade30: "#094509",
          shade20: "#0c5e0c",
          shade10: "#0e700e",
          primary: "#107c10",
          tint10: "#218c21",
          tint20: "#359b35",
          tint30: "#54b054",
          tint40: "#9fd89f",
          tint50: "#c9eac9",
          tint60: "#f1faf1",
        },
        Wn = {
          red: {
            shade50: "#210809",
            shade40: "#3f1011",
            shade30: "#751d1f",
            shade20: "#9f282b",
            shade10: "#bc2f32",
            primary: "#d13438",
            tint10: "#d7494c",
            tint20: "#dc5e62",
            tint30: "#e37d80",
            tint40: "#f1bbbc",
            tint50: "#f8dadb",
            tint60: "#fdf6f6",
          },
          green: Ln,
          darkOrange: {
            shade50: "#230900",
            shade40: "#411200",
            shade30: "#7a2101",
            shade20: "#a62d01",
            shade10: "#c43501",
            primary: "#da3b01",
            tint10: "#de501c",
            tint20: "#e36537",
            tint30: "#e9835e",
            tint40: "#f4bfab",
            tint50: "#f9dcd1",
            tint60: "#fdf6f3",
          },
          yellow: {
            shade50: "#282400",
            shade40: "#4c4400",
            shade30: "#817400",
            shade20: "#c0ad00",
            shade10: "#e4cc00",
            primary: "#fde300",
            tint10: "#fde61e",
            tint20: "#fdea3d",
            tint30: "#feee66",
            tint40: "#fef7b2",
            tint50: "#fffad6",
            tint60: "#fffef5",
          },
          berry: {
            shade50: "#1f091d",
            shade40: "#3a1136",
            shade30: "#6d2064",
            shade20: "#932b88",
            shade10: "#af33a1",
            primary: "#c239b3",
            tint10: "#c94cbc",
            tint20: "#d161c4",
            tint30: "#da7ed0",
            tint40: "#edbbe7",
            tint50: "#f5daf2",
            tint60: "#fdf5fc",
          },
          lightGreen: {
            shade50: "#031a02",
            shade40: "#063004",
            shade30: "#0b5a08",
            shade20: "#0e7a0b",
            shade10: "#11910d",
            primary: "#13a10e",
            tint10: "#27ac22",
            tint20: "#3db838",
            tint30: "#5ec75a",
            tint40: "#a7e3a5",
            tint50: "#cef0cd",
            tint60: "#f2fbf2",
          },
          marigold: {
            shade50: "#251a00",
            shade40: "#463100",
            shade30: "#835b00",
            shade20: "#b27c00",
            shade10: "#d39300",
            primary: "#eaa300",
            tint10: "#edad1c",
            tint20: "#efb839",
            tint30: "#f2c661",
            tint40: "#f9e2ae",
            tint50: "#fcefd3",
            tint60: "#fefbf4",
          },
        },
        $n = {
          darkRed: {
            shade50: "#130204",
            shade40: "#230308",
            shade30: "#420610",
            shade20: "#590815",
            shade10: "#690a19",
            primary: "#750b1c",
            tint10: "#861b2c",
            tint20: "#962f3f",
            tint30: "#ac4f5e",
            tint40: "#d69ca5",
            tint50: "#e9c7cd",
            tint60: "#f9f0f2",
          },
          cranberry: An,
          pumpkin: {
            shade50: "#200d03",
            shade40: "#3d1805",
            shade30: "#712d09",
            shade20: "#9a3d0c",
            shade10: "#b6480e",
            primary: "#ca5010",
            tint10: "#d06228",
            tint20: "#d77440",
            tint30: "#df8e64",
            tint40: "#efc4ad",
            tint50: "#f7dfd2",
            tint60: "#fdf7f4",
          },
          peach: {
            shade50: "#291600",
            shade40: "#4d2a00",
            shade30: "#8f4e00",
            shade20: "#c26a00",
            shade10: "#e67e00",
            primary: "#ff8c00",
            tint10: "#ff9a1f",
            tint20: "#ffa83d",
            tint30: "#ffba66",
            tint40: "#ffddb3",
            tint50: "#ffedd6",
            tint60: "#fffaf5",
          },
          gold: {
            shade50: "#1f1900",
            shade40: "#3a2f00",
            shade30: "#6c5700",
            shade20: "#937700",
            shade10: "#ae8c00",
            primary: "#c19c00",
            tint10: "#c8a718",
            tint20: "#d0b232",
            tint30: "#dac157",
            tint40: "#ecdfa5",
            tint50: "#f5eece",
            tint60: "#fdfbf2",
          },
          brass: {
            shade50: "#181202",
            shade40: "#2e2103",
            shade30: "#553e06",
            shade20: "#745408",
            shade10: "#89640a",
            primary: "#986f0b",
            tint10: "#a47d1e",
            tint20: "#b18c34",
            tint30: "#c1a256",
            tint40: "#e0cea2",
            tint50: "#efe4cb",
            tint60: "#fbf8f2",
          },
          brown: {
            shade50: "#170e07",
            shade40: "#2b1a0e",
            shade30: "#50301a",
            shade20: "#6c4123",
            shade10: "#804d29",
            primary: "#8e562e",
            tint10: "#9c663f",
            tint20: "#a97652",
            tint30: "#bb8f6f",
            tint40: "#ddc3b0",
            tint50: "#edded3",
            tint60: "#faf7f4",
          },
          forest: {
            shade50: "#0c1501",
            shade40: "#162702",
            shade30: "#294903",
            shade20: "#376304",
            shade10: "#427505",
            primary: "#498205",
            tint10: "#599116",
            tint20: "#6ba02b",
            tint30: "#85b44c",
            tint40: "#bdd99b",
            tint50: "#dbebc7",
            tint60: "#f6faf0",
          },
          seafoam: {
            shade50: "#002111",
            shade40: "#003d20",
            shade30: "#00723b",
            shade20: "#009b51",
            shade10: "#00b85f",
            primary: "#00cc6a",
            tint10: "#19d279",
            tint20: "#34d889",
            tint30: "#5ae0a0",
            tint40: "#a8f0cd",
            tint50: "#cff7e4",
            tint60: "#f3fdf8",
          },
          darkGreen: {
            shade50: "#021102",
            shade40: "#032003",
            shade30: "#063b06",
            shade20: "#085108",
            shade10: "#0a5f0a",
            primary: "#0b6a0b",
            tint10: "#1a7c1a",
            tint20: "#2d8e2d",
            tint30: "#4da64d",
            tint40: "#9ad29a",
            tint50: "#c6e7c6",
            tint60: "#f0f9f0",
          },
          lightTeal: {
            shade50: "#001d1f",
            shade40: "#00373a",
            shade30: "#00666d",
            shade20: "#008b94",
            shade10: "#00a5af",
            primary: "#00b7c3",
            tint10: "#18bfca",
            tint20: "#32c8d1",
            tint30: "#58d3db",
            tint40: "#a6e9ed",
            tint50: "#cef3f5",
            tint60: "#f2fcfd",
          },
          teal: {
            shade50: "#001516",
            shade40: "#012728",
            shade30: "#02494c",
            shade20: "#026467",
            shade10: "#037679",
            primary: "#038387",
            tint10: "#159195",
            tint20: "#2aa0a4",
            tint30: "#4cb4b7",
            tint40: "#9bd9db",
            tint50: "#c7ebec",
            tint60: "#f0fafa",
          },
          steel: {
            shade50: "#000f12",
            shade40: "#001b22",
            shade30: "#00333f",
            shade20: "#004555",
            shade10: "#005265",
            primary: "#005b70",
            tint10: "#0f6c81",
            tint20: "#237d92",
            tint30: "#4496a9",
            tint40: "#94c8d4",
            tint50: "#c3e1e8",
            tint60: "#eff7f9",
          },
          blue: {
            shade50: "#001322",
            shade40: "#002440",
            shade30: "#004377",
            shade20: "#005ba1",
            shade10: "#006cbf",
            primary: "#0078d4",
            tint10: "#1a86d9",
            tint20: "#3595de",
            tint30: "#5caae5",
            tint40: "#a9d3f2",
            tint50: "#d0e7f8",
            tint60: "#f3f9fd",
          },
          royalBlue: {
            shade50: "#000c16",
            shade40: "#00172a",
            shade30: "#002c4e",
            shade20: "#003b6a",
            shade10: "#00467e",
            primary: "#004e8c",
            tint10: "#125e9a",
            tint20: "#286fa8",
            tint30: "#4a89ba",
            tint40: "#9abfdc",
            tint50: "#c7dced",
            tint60: "#f0f6fa",
          },
          cornflower: {
            shade50: "#0d1126",
            shade40: "#182047",
            shade30: "#2c3c85",
            shade20: "#3c51b4",
            shade10: "#4760d5",
            primary: "#4f6bed",
            tint10: "#637cef",
            tint20: "#778df1",
            tint30: "#93a4f4",
            tint40: "#c8d1fa",
            tint50: "#e1e6fc",
            tint60: "#f7f9fe",
          },
          navy: {
            shade50: "#00061d",
            shade40: "#000c36",
            shade30: "#001665",
            shade20: "#001e89",
            shade10: "#0023a2",
            primary: "#0027b4",
            tint10: "#173bbd",
            tint20: "#3050c6",
            tint30: "#546fd2",
            tint40: "#a3b2e8",
            tint50: "#ccd5f3",
            tint60: "#f2f4fc",
          },
          lavender: {
            shade50: "#120f25",
            shade40: "#221d46",
            shade30: "#3f3682",
            shade20: "#5649b0",
            shade10: "#6656d1",
            primary: "#7160e8",
            tint10: "#8172eb",
            tint20: "#9184ee",
            tint30: "#a79cf1",
            tint40: "#d2ccf8",
            tint50: "#e7e4fb",
            tint60: "#f9f8fe",
          },
          purple: {
            shade50: "#0f0717",
            shade40: "#1c0e2b",
            shade30: "#341a51",
            shade20: "#46236e",
            shade10: "#532982",
            primary: "#5c2e91",
            tint10: "#6b3f9e",
            tint20: "#7c52ab",
            tint30: "#9470bd",
            tint40: "#c6b1de",
            tint50: "#e0d3ed",
            tint60: "#f7f4fb",
          },
          grape: {
            shade50: "#160418",
            shade40: "#29072e",
            shade30: "#4c0d55",
            shade20: "#671174",
            shade10: "#7a1589",
            primary: "#881798",
            tint10: "#952aa4",
            tint20: "#a33fb1",
            tint30: "#b55fc1",
            tint40: "#d9a7e0",
            tint50: "#eaceef",
            tint60: "#faf2fb",
          },
          lilac: {
            shade50: "#1c0b1f",
            shade40: "#35153a",
            shade30: "#63276d",
            shade20: "#863593",
            shade10: "#9f3faf",
            primary: "#b146c2",
            tint10: "#ba58c9",
            tint20: "#c36bd1",
            tint30: "#cf87da",
            tint40: "#e6bfed",
            tint50: "#f2dcf5",
            tint60: "#fcf6fd",
          },
          pink: {
            shade50: "#24091b",
            shade40: "#441232",
            shade30: "#80215d",
            shade20: "#ad2d7e",
            shade10: "#cd3595",
            primary: "#e43ba6",
            tint10: "#e750b0",
            tint20: "#ea66ba",
            tint30: "#ef85c8",
            tint40: "#f7c0e3",
            tint50: "#fbddf0",
            tint60: "#fef6fb",
          },
          magenta: {
            shade50: "#1f0013",
            shade40: "#390024",
            shade30: "#6b0043",
            shade20: "#91005a",
            shade10: "#ac006b",
            primary: "#bf0077",
            tint10: "#c71885",
            tint20: "#ce3293",
            tint30: "#d957a8",
            tint40: "#eca5d1",
            tint50: "#f5cee6",
            tint60: "#fcf2f9",
          },
          plum: {
            shade50: "#13000c",
            shade40: "#240017",
            shade30: "#43002b",
            shade20: "#5a003b",
            shade10: "#6b0045",
            primary: "#77004d",
            tint10: "#87105d",
            tint20: "#98246f",
            tint30: "#ad4589",
            tint40: "#d696c0",
            tint50: "#e9c4dc",
            tint60: "#faf0f6",
          },
          beige: {
            shade50: "#141313",
            shade40: "#252323",
            shade30: "#444241",
            shade20: "#5d5958",
            shade10: "#6e6968",
            primary: "#7a7574",
            tint10: "#8a8584",
            tint20: "#9a9594",
            tint30: "#afabaa",
            tint40: "#d7d4d4",
            tint50: "#eae8e8",
            tint60: "#faf9f9",
          },
          mink: {
            shade50: "#0f0e0e",
            shade40: "#1c1b1a",
            shade30: "#343231",
            shade20: "#474443",
            shade10: "#54514f",
            primary: "#5d5a58",
            tint10: "#706d6b",
            tint20: "#84817e",
            tint30: "#9e9b99",
            tint40: "#cecccb",
            tint50: "#e5e4e3",
            tint60: "#f8f8f8",
          },
          platinum: {
            shade50: "#111314",
            shade40: "#1f2426",
            shade30: "#3b4447",
            shade20: "#505c60",
            shade10: "#5f6d71",
            primary: "#69797e",
            tint10: "#79898d",
            tint20: "#89989d",
            tint30: "#a0adb2",
            tint40: "#cdd6d8",
            tint50: "#e4e9ea",
            tint60: "#f8f9fa",
          },
          anchor: {
            shade50: "#090a0b",
            shade40: "#111315",
            shade30: "#202427",
            shade20: "#2b3135",
            shade10: "#333a3f",
            primary: "#394146",
            tint10: "#4d565c",
            tint20: "#626c72",
            tint30: "#808a90",
            tint40: "#bcc3c7",
            tint50: "#dbdfe1",
            tint60: "#f6f7f8",
          },
        },
        Xn = {
          cranberry: An,
          green: Ln,
          orange: {
            shade50: "#271002",
            shade40: "#4a1e04",
            shade30: "#8a3707",
            shade20: "#bc4b09",
            shade10: "#de590b",
            primary: "#f7630c",
            tint10: "#f87528",
            tint20: "#f98845",
            tint30: "#faa06b",
            tint40: "#fdcfb4",
            tint50: "#fee5d7",
            tint60: "#fff9f5",
          },
        },
        Gn = { success: "green", warning: "orange", danger: "cranberry" },
        Kn = ["red", "green", "darkOrange", "yellow", "berry", "lightGreen", "marigold"].reduce(
          (e, r) => {
            const o = r.slice(0, 1).toUpperCase() + r.slice(1),
              t = {
                [`colorPalette${o}Background1`]: Wn[r].tint60,
                [`colorPalette${o}Background2`]: Wn[r].tint40,
                [`colorPalette${o}Background3`]: Wn[r].primary,
                [`colorPalette${o}Foreground1`]: Wn[r].shade10,
                [`colorPalette${o}Foreground2`]: Wn[r].shade30,
                [`colorPalette${o}Foreground3`]: Wn[r].primary,
                [`colorPalette${o}BorderActive`]: Wn[r].primary,
                [`colorPalette${o}Border1`]: Wn[r].tint40,
                [`colorPalette${o}Border2`]: Wn[r].primary,
              };
            return Object.assign(e, t);
          },
          {}
        );
      ((Kn.colorPaletteYellowForeground1 = Wn.yellow.shade30),
        (Kn.colorPaletteRedForegroundInverted = Wn.red.tint20),
        (Kn.colorPaletteGreenForegroundInverted = Wn.green.tint20),
        (Kn.colorPaletteYellowForegroundInverted = Wn.yellow.tint40));
      const Vn = [
          "darkRed",
          "cranberry",
          "pumpkin",
          "peach",
          "gold",
          "brass",
          "brown",
          "forest",
          "seafoam",
          "darkGreen",
          "lightTeal",
          "teal",
          "steel",
          "blue",
          "royalBlue",
          "cornflower",
          "navy",
          "lavender",
          "purple",
          "grape",
          "lilac",
          "pink",
          "magenta",
          "plum",
          "beige",
          "mink",
          "platinum",
          "anchor",
        ].reduce((e, r) => {
          const o = r.slice(0, 1).toUpperCase() + r.slice(1),
            t = {
              [`colorPalette${o}Background2`]: $n[r].tint40,
              [`colorPalette${o}Foreground2`]: $n[r].shade30,
              [`colorPalette${o}BorderActive`]: $n[r].primary,
            };
          return Object.assign(e, t);
        }, {}),
        Un = { ...Kn, ...Vn },
        Zn = Object.entries(Gn).reduce((e, [r, o]) => {
          const t = r.slice(0, 1).toUpperCase() + r.slice(1),
            n = {
              [`colorStatus${t}Background1`]: Xn[o].tint60,
              [`colorStatus${t}Background2`]: Xn[o].tint40,
              [`colorStatus${t}Background3`]: Xn[o].primary,
              [`colorStatus${t}Foreground1`]: Xn[o].shade10,
              [`colorStatus${t}Foreground2`]: Xn[o].shade30,
              [`colorStatus${t}Foreground3`]: Xn[o].primary,
              [`colorStatus${t}ForegroundInverted`]: Xn[o].tint30,
              [`colorStatus${t}BorderActive`]: Xn[o].primary,
              [`colorStatus${t}Border1`]: Xn[o].tint40,
              [`colorStatus${t}Border2`]: Xn[o].primary,
            };
          return Object.assign(e, n);
        }, {});
      ((Zn.colorStatusDangerBackground3Hover = Xn[Gn.danger].shade10),
        (Zn.colorStatusDangerBackground3Pressed = Xn[Gn.danger].shade20),
        (Zn.colorStatusWarningForeground1 = Xn[Gn.warning].shade20),
        (Zn.colorStatusWarningForeground3 = Xn[Gn.warning].shade20),
        (Zn.colorStatusWarningBorder2 = Xn[Gn.warning].shade20));
      const Yn = {
          borderRadiusNone: "0",
          borderRadiusSmall: "2px",
          borderRadiusMedium: "4px",
          borderRadiusLarge: "6px",
          borderRadiusXLarge: "8px",
          borderRadiusCircular: "10000px",
        },
        Jn = {
          fontSizeBase100: "10px",
          fontSizeBase200: "12px",
          fontSizeBase300: "14px",
          fontSizeBase400: "16px",
          fontSizeBase500: "20px",
          fontSizeBase600: "24px",
          fontSizeHero700: "28px",
          fontSizeHero800: "32px",
          fontSizeHero900: "40px",
          fontSizeHero1000: "68px",
        },
        Qn = {
          lineHeightBase100: "14px",
          lineHeightBase200: "16px",
          lineHeightBase300: "20px",
          lineHeightBase400: "22px",
          lineHeightBase500: "28px",
          lineHeightBase600: "32px",
          lineHeightHero700: "36px",
          lineHeightHero800: "40px",
          lineHeightHero900: "52px",
          lineHeightHero1000: "92px",
        },
        ea = {
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightSemibold: 600,
          fontWeightBold: 700,
        },
        ra = {
          fontFamilyBase:
            "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
          fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
          fontFamilyNumeric:
            "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
        },
        oa = {
          strokeWidthThin: "1px",
          strokeWidthThick: "2px",
          strokeWidthThicker: "3px",
          strokeWidthThickest: "4px",
        };
      function ta(e, r, o = "") {
        return {
          [`shadow2${o}`]: `0 0 2px ${e}, 0 1px 2px ${r}`,
          [`shadow4${o}`]: `0 0 2px ${e}, 0 2px 4px ${r}`,
          [`shadow8${o}`]: `0 0 2px ${e}, 0 4px 8px ${r}`,
          [`shadow16${o}`]: `0 0 2px ${e}, 0 8px 16px ${r}`,
          [`shadow28${o}`]: `0 0 8px ${e}, 0 14px 28px ${r}`,
          [`shadow64${o}`]: `0 0 8px ${e}, 0 32px 64px ${r}`,
        };
      }
      const na = {
          durationUltraFast: "50ms",
          durationFaster: "100ms",
          durationFast: "150ms",
          durationNormal: "200ms",
          durationGentle: "250ms",
          durationSlow: "300ms",
          durationSlower: "400ms",
          durationUltraSlow: "500ms",
        },
        aa = {
          curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
          curveAccelerateMid: "cubic-bezier(1,0,1,1)",
          curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
          curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
          curveDecelerateMid: "cubic-bezier(0,0,0,1)",
          curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
          curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
          curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
          curveLinear: "cubic-bezier(0,0,1,1)",
        },
        ia = "10px",
        ca = "12px",
        sa = "16px",
        la = "20px",
        da = "24px",
        fa = "32px",
        ua = {
          spacingHorizontalNone: "0",
          spacingHorizontalXXS: "2px",
          spacingHorizontalXS: "4px",
          spacingHorizontalSNudge: "6px",
          spacingHorizontalS: "8px",
          spacingHorizontalMNudge: ia,
          spacingHorizontalM: ca,
          spacingHorizontalL: sa,
          spacingHorizontalXL: la,
          spacingHorizontalXXL: da,
          spacingHorizontalXXXL: fa,
        },
        ha = {
          spacingVerticalNone: "0",
          spacingVerticalXXS: "2px",
          spacingVerticalXS: "4px",
          spacingVerticalSNudge: "6px",
          spacingVerticalS: "8px",
          spacingVerticalMNudge: ia,
          spacingVerticalM: ca,
          spacingVerticalL: sa,
          spacingVerticalXL: la,
          spacingVerticalXXL: da,
          spacingVerticalXXXL: fa,
        },
        ga = (() => {
          const e = ((e) => ({
            colorNeutralForeground1: jn,
            colorNeutralForeground1Hover: jn,
            colorNeutralForeground1Pressed: jn,
            colorNeutralForeground1Selected: jn,
            colorNeutralForeground2: Nn,
            colorNeutralForeground2Hover: jn,
            colorNeutralForeground2Pressed: jn,
            colorNeutralForeground2Selected: jn,
            colorNeutralForeground2BrandHover: e[80],
            colorNeutralForeground2BrandPressed: e[70],
            colorNeutralForeground2BrandSelected: e[80],
            colorNeutralForeground3: Tn,
            colorNeutralForeground3Hover: Nn,
            colorNeutralForeground3Pressed: Nn,
            colorNeutralForeground3Selected: Nn,
            colorNeutralForeground3BrandHover: e[80],
            colorNeutralForeground3BrandPressed: e[70],
            colorNeutralForeground3BrandSelected: e[80],
            colorNeutralForeground4: "#707070",
            colorNeutralForegroundDisabled: qn,
            colorNeutralForegroundInvertedDisabled: Dn,
            colorBrandForegroundLink: e[70],
            colorBrandForegroundLinkHover: e[60],
            colorBrandForegroundLinkPressed: e[40],
            colorBrandForegroundLinkSelected: e[70],
            colorNeutralForeground2Link: Nn,
            colorNeutralForeground2LinkHover: jn,
            colorNeutralForeground2LinkPressed: jn,
            colorNeutralForeground2LinkSelected: jn,
            colorCompoundBrandForeground1: e[80],
            colorCompoundBrandForeground1Hover: e[70],
            colorCompoundBrandForeground1Pressed: e[60],
            colorBrandForeground1: e[80],
            colorBrandForeground2: e[70],
            colorBrandForeground2Hover: e[60],
            colorBrandForeground2Pressed: e[30],
            colorNeutralForeground1Static: jn,
            colorNeutralForegroundStaticInverted: Mn,
            colorNeutralForegroundInverted: Mn,
            colorNeutralForegroundInvertedHover: Mn,
            colorNeutralForegroundInvertedPressed: Mn,
            colorNeutralForegroundInvertedSelected: Mn,
            colorNeutralForegroundInverted2: Mn,
            colorNeutralForegroundOnBrand: Mn,
            colorNeutralForegroundInvertedLink: Mn,
            colorNeutralForegroundInvertedLinkHover: Mn,
            colorNeutralForegroundInvertedLinkPressed: Mn,
            colorNeutralForegroundInvertedLinkSelected: Mn,
            colorBrandForegroundInverted: e[100],
            colorBrandForegroundInvertedHover: e[110],
            colorBrandForegroundInvertedPressed: e[100],
            colorBrandForegroundOnLight: e[80],
            colorBrandForegroundOnLightHover: e[70],
            colorBrandForegroundOnLightPressed: e[50],
            colorBrandForegroundOnLightSelected: e[60],
            colorNeutralBackground1: Mn,
            colorNeutralBackground1Hover: En,
            colorNeutralBackground1Pressed: _n,
            colorNeutralBackground1Selected: Cn,
            colorNeutralBackground2: Rn,
            colorNeutralBackground2Hover: Fn,
            colorNeutralBackground2Pressed: "#dbdbdb",
            colorNeutralBackground2Selected: Pn,
            colorNeutralBackground3: En,
            colorNeutralBackground3Hover: Cn,
            colorNeutralBackground3Pressed: "#d6d6d6",
            colorNeutralBackground3Selected: _n,
            colorNeutralBackground4: Fn,
            colorNeutralBackground4Hover: Rn,
            colorNeutralBackground4Pressed: En,
            colorNeutralBackground4Selected: Mn,
            colorNeutralBackground5: Cn,
            colorNeutralBackground5Hover: En,
            colorNeutralBackground5Pressed: Fn,
            colorNeutralBackground5Selected: Rn,
            colorNeutralBackground6: Pn,
            colorNeutralBackgroundInverted: "#292929",
            colorNeutralBackgroundStatic: "#333333",
            colorNeutralBackgroundAlpha: In,
            colorNeutralBackgroundAlpha2: "rgba(255, 255, 255, 0.8)",
            colorSubtleBackground: "transparent",
            colorSubtleBackgroundHover: En,
            colorSubtleBackgroundPressed: _n,
            colorSubtleBackgroundSelected: Cn,
            colorSubtleBackgroundLightAlphaHover: "rgba(255, 255, 255, 0.7)",
            colorSubtleBackgroundLightAlphaPressed: In,
            colorSubtleBackgroundLightAlphaSelected: "transparent",
            colorSubtleBackgroundInverted: "transparent",
            colorSubtleBackgroundInvertedHover: On,
            colorSubtleBackgroundInvertedPressed: "rgba(0, 0, 0, 0.3)",
            colorSubtleBackgroundInvertedSelected: "rgba(0, 0, 0, 0.2)",
            colorTransparentBackground: "transparent",
            colorTransparentBackgroundHover: "transparent",
            colorTransparentBackgroundPressed: "transparent",
            colorTransparentBackgroundSelected: "transparent",
            colorNeutralBackgroundDisabled: Fn,
            colorNeutralBackgroundInvertedDisabled: "rgba(255, 255, 255, 0.1)",
            colorNeutralStencil1: Pn,
            colorNeutralStencil2: Rn,
            colorNeutralStencil1Alpha: On,
            colorNeutralStencil2Alpha: Hn,
            colorBackgroundOverlay: "rgba(0, 0, 0, 0.4)",
            colorScrollbarOverlay: "rgba(0, 0, 0, 0.5)",
            colorBrandBackground: e[80],
            colorBrandBackgroundHover: e[70],
            colorBrandBackgroundPressed: e[40],
            colorBrandBackgroundSelected: e[60],
            colorCompoundBrandBackground: e[80],
            colorCompoundBrandBackgroundHover: e[70],
            colorCompoundBrandBackgroundPressed: e[60],
            colorBrandBackgroundStatic: e[80],
            colorBrandBackground2: e[160],
            colorBrandBackground2Hover: e[150],
            colorBrandBackground2Pressed: e[130],
            colorBrandBackground3Static: e[60],
            colorBrandBackground4Static: e[40],
            colorBrandBackgroundInverted: Mn,
            colorBrandBackgroundInvertedHover: e[160],
            colorBrandBackgroundInvertedPressed: e[140],
            colorBrandBackgroundInvertedSelected: e[150],
            colorNeutralCardBackground: Rn,
            colorNeutralCardBackgroundHover: Mn,
            colorNeutralCardBackgroundPressed: En,
            colorNeutralCardBackgroundSelected: Cn,
            colorNeutralCardBackgroundDisabled: Fn,
            colorNeutralStrokeAccessible: Tn,
            colorNeutralStrokeAccessibleHover: "#575757",
            colorNeutralStrokeAccessiblePressed: "#4d4d4d",
            colorNeutralStrokeAccessibleSelected: e[80],
            colorNeutralStroke1: "#d1d1d1",
            colorNeutralStroke1Hover: "#c7c7c7",
            colorNeutralStroke1Pressed: "#b3b3b3",
            colorNeutralStroke1Selected: qn,
            colorNeutralStroke2: _n,
            colorNeutralStroke3: Fn,
            colorNeutralStrokeSubtle: _n,
            colorNeutralStrokeOnBrand: Mn,
            colorNeutralStrokeOnBrand2: Mn,
            colorNeutralStrokeOnBrand2Hover: Mn,
            colorNeutralStrokeOnBrand2Pressed: Mn,
            colorNeutralStrokeOnBrand2Selected: Mn,
            colorBrandStroke1: e[80],
            colorBrandStroke2: e[140],
            colorBrandStroke2Hover: e[120],
            colorBrandStroke2Pressed: e[80],
            colorBrandStroke2Contrast: e[140],
            colorCompoundBrandStroke: e[80],
            colorCompoundBrandStrokeHover: e[70],
            colorCompoundBrandStrokePressed: e[60],
            colorNeutralStrokeDisabled: _n,
            colorNeutralStrokeInvertedDisabled: Dn,
            colorTransparentStroke: "transparent",
            colorTransparentStrokeInteractive: "transparent",
            colorTransparentStrokeDisabled: "transparent",
            colorNeutralStrokeAlpha: Hn,
            colorNeutralStrokeAlpha2: "rgba(255, 255, 255, 0.2)",
            colorStrokeFocus1: Mn,
            colorStrokeFocus2: "#000000",
            colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
            colorNeutralShadowKey: "rgba(0,0,0,0.14)",
            colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
            colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
            colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
            colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
            colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
            colorBrandShadowKey: "rgba(0,0,0,0.25)",
          }))({
            10: "#061724",
            20: "#082338",
            30: "#0a2e4a",
            40: "#0c3b5e",
            50: "#0e4775",
            60: "#0f548c",
            70: "#115ea3",
            80: "#0f6cbd",
            90: "#2886de",
            100: "#479ef5",
            110: "#62abf5",
            120: "#77b7f7",
            130: "#96c6fa",
            140: "#b4d6fa",
            150: "#cfe4fa",
            160: "#ebf3fc",
          });
          return {
            ...Yn,
            ...Jn,
            ...Qn,
            ...ra,
            ...ea,
            ...oa,
            ...ua,
            ...ha,
            ...na,
            ...aa,
            ...e,
            ...Un,
            ...Zn,
            ...ta(e.colorNeutralShadowAmbient, e.colorNeutralShadowKey),
            ...ta(e.colorBrandShadowAmbient, e.colorBrandShadowKey, "Brand"),
          };
        })();
      var pa = document.getElementById("container"),
        va = pa ? (0, a.H)(pa) : void 0;
      Office.onReady(function () {
        null == va ||
          va.render(
            t.createElement(
              zn,
              { theme: ga },
              t.createElement(Ut, { title: "Contoso Task Pane Add-in" })
            )
          );
      });
    },
    21020: function (e, r, o) {
      "use strict";
      var t = o(96540),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, r, o) {
        var t,
          a = {},
          l = null,
          d = null;
        for (t in (void 0 !== o && (l = "" + o),
        void 0 !== r.key && (l = "" + r.key),
        void 0 !== r.ref && (d = r.ref),
        r))
          i.call(r, t) && !s.hasOwnProperty(t) && (a[t] = r[t]);
        if (e && e.defaultProps) for (t in (r = e.defaultProps)) void 0 === a[t] && (a[t] = r[t]);
        return { $$typeof: n, type: e, key: l, ref: d, props: a, _owner: c.current };
      }
      ((r.Fragment = a), (r.jsx = l), (r.jsxs = l));
    },
    22799: function (e, r) {
      "use strict";
      if ("function" == typeof Symbol && Symbol.for) {
        var o = Symbol.for;
        (o("react.element"),
          o("react.portal"),
          o("react.fragment"),
          o("react.strict_mode"),
          o("react.profiler"),
          o("react.provider"),
          o("react.context"),
          o("react.forward_ref"),
          o("react.suspense"),
          o("react.suspense_list"),
          o("react.memo"),
          o("react.lazy"),
          o("react.block"),
          o("react.server.block"),
          o("react.fundamental"),
          o("react.debug_trace_mode"),
          o("react.legacy_hidden"));
      }
    },
    39046: function () {},
    44363: function (e, r, o) {
      "use strict";
      o(22799);
    },
    74848: function (e, r, o) {
      "use strict";
      e.exports = o(21020);
    },
  },
  function (e) {
    var r = function (r) {
      return e((e.s = r));
    };
    (r(14593), r(39046));
  },
]);
//# sourceMappingURL=taskpane.js.map
