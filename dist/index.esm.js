import Xe, { createContext as gt, useEffect as Te, useMemo as Ne, useRef as Ae, useState as C } from "react";
import { Home as ht, Compass as mt, Library as bt, MessageSquare as yt, Search as jt, SkipBack as wt, Pause as Pt, Play as Et, SkipForward as kt, X as Ot, Volume2 as Ct, Sparkles as De, Cpu as Nt, Shield as Rt, Sun as St, Moon as Xt } from "lucide-react";
var re = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Tt() {
  if (Re) return W;
  Re = 1;
  var c = Xe, j = Symbol.for("react.element"), x = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, y = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(v, i, l) {
    var d, b = {}, f = null, P = null;
    l !== void 0 && (f = "" + l), i.key !== void 0 && (f = "" + i.key), i.ref !== void 0 && (P = i.ref);
    for (d in i) g.call(i, d) && !h.hasOwnProperty(d) && (b[d] = i[d]);
    if (v && v.defaultProps) for (d in i = v.defaultProps, i) b[d] === void 0 && (b[d] = i[d]);
    return { $$typeof: j, type: v, key: f, ref: P, props: b, _owner: y.current };
  }
  return W.Fragment = x, W.jsx = m, W.jsxs = m, W;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function At() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Xe, j = Symbol.for("react.element"), x = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), v = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), N = Symbol.iterator, D = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[D];
      return typeof r == "function" ? r : null;
    }
    var T = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        He("error", e, n);
      }
    }
    function He(e, r, n) {
      {
        var a = T.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", n = n.concat([u]));
        var p = n.map(function(o) {
          return String(o);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Fe = !1, Ye = !1, Me = !1, Ie = !1, ze = !1, ne;
    ne = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === h || ze || e === y || e === l || e === d || Ie || e === P || Fe || Ye || Me || typeof e == "object" && e !== null && (e.$$typeof === f || e.$$typeof === b || e.$$typeof === m || e.$$typeof === v || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ge(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? n + "(" + u + ")" : n;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case x:
          return "Portal";
        case h:
          return "Profiler";
        case y:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ae(r) + ".Consumer";
          case m:
            var n = e;
            return ae(n._context) + ".Provider";
          case i:
            return Ge(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : A(e.type) || "Memo";
          case f: {
            var u = e, p = u._payload, o = u._init;
            try {
              return A(o(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, I = 0, se, ie, oe, le, ce, ue, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function _e() {
      {
        if (I === 0) {
          se = console.log, ie = console.info, oe = console.warn, le = console.error, ce = console.group, ue = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ue() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: se
            }),
            info: H({}, e, {
              value: ie
            }),
            warn: H({}, e, {
              value: oe
            }),
            error: H({}, e, {
              value: le
            }),
            group: H({}, e, {
              value: ce
            }),
            groupCollapsed: H({}, e, {
              value: ue
            }),
            groupEnd: H({}, e, {
              value: fe
            })
          });
        }
        I < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = T.ReactCurrentDispatcher, K;
    function _(e, r, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            K = a && a[1] || "";
          }
        return `
` + K + e;
      }
    }
    var V = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function pe(e, r) {
      if (!e || V)
        return "";
      {
        var n = U.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      V = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = q.current, q.current = null, _e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (R) {
              a = R;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (R) {
              a = R;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            a = R;
          }
          e();
        }
      } catch (R) {
        if (R && a && typeof R.stack == "string") {
          for (var s = R.stack.split(`
`), O = a.stack.split(`
`), w = s.length - 1, E = O.length - 1; w >= 1 && E >= 0 && s[w] !== O[E]; )
            E--;
          for (; w >= 1 && E >= 0; w--, E--)
            if (s[w] !== O[E]) {
              if (w !== 1 || E !== 1)
                do
                  if (w--, E--, E < 0 || s[w] !== O[E]) {
                    var S = `
` + s[w].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, S), S;
                  }
                while (w >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        V = !1, q.current = p, Ue(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", F = M ? _(M) : "";
      return typeof e == "function" && U.set(e, F), F;
    }
    function Be(e, r, n) {
      return pe(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ze(e));
      if (typeof e == "string")
        return _(e);
      switch (e) {
        case l:
          return _("Suspense");
        case d:
          return _("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Be(e.render);
          case b:
            return L(e.type, r, n);
          case f: {
            var a = e, u = a._payload, p = a._init;
            try {
              return L(p(u), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, xe = {}, ve = T.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, n = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(n);
      } else
        ve.setExtraStackFrame(null);
    }
    function qe(e, r, n, a, u) {
      {
        var p = Function.call.bind(z);
        for (var o in e)
          if (p(e, o)) {
            var s = void 0;
            try {
              if (typeof e[o] != "function") {
                var O = Error((a || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              s = e[o](r, o, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              s = w;
            }
            s && !(s instanceof Error) && (B(u), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, o, typeof s), B(null)), s instanceof Error && !(s.message in xe) && (xe[s.message] = !0, B(u), k("Failed %s type: %s", n, s.message), B(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Q(e) {
      return Ke(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Qe(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function he(e) {
      if (Qe(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), ge(e);
    }
    var me = T.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ye;
    function $e(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function rt(e, r) {
      {
        var n = function() {
          be || (be = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function nt(e, r) {
      {
        var n = function() {
          ye || (ye = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var at = function(e, r, n, a, u, p, o) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: o,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function st(e, r, n, a, u) {
      {
        var p, o = {}, s = null, O = null;
        n !== void 0 && (he(n), s = "" + n), et(r) && (he(r.key), s = "" + r.key), $e(r) && (O = r.ref, tt(r, u));
        for (p in r)
          z.call(r, p) && !Je.hasOwnProperty(p) && (o[p] = r[p]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (p in w)
            o[p] === void 0 && (o[p] = w[p]);
        }
        if (s || O) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && rt(o, E), O && nt(o, E);
        }
        return at(e, s, O, u, a, me.current, o);
      }
    }
    var J = T.ReactCurrentOwner, je = T.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, n = L(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var $;
    $ = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function we() {
      {
        if (J.current) {
          var e = A(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function it(e) {
      return "";
    }
    var Pe = {};
    function ot(e) {
      {
        var r = we();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ot(r);
        if (Pe[n])
          return;
        Pe[n] = !0;
        var a = "";
        e && e._owner && e._owner !== J.current && (a = " It was passed a child from " + A(e._owner.type) + "."), Y(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), Y(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ee(a) && Ee(a, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Z(e);
          if (typeof u == "function" && u !== e.entries)
            for (var p = u.call(e), o; !(o = p.next()).done; )
              ee(o.value) && Ee(o.value, r);
        }
      }
    }
    function lt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = A(r);
          qe(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !$) {
          $ = !0;
          var u = A(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            Y(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Oe = {};
    function Ce(e, r, n, a, u, p) {
      {
        var o = We(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = it();
          O ? s += O : s += we();
          var w;
          e === null ? w = "null" : Q(e) ? w = "array" : e !== void 0 && e.$$typeof === j ? (w = "<" + (A(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, s);
        }
        var E = st(e, r, n, u, p);
        if (E == null)
          return E;
        if (o) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (Q(S)) {
                for (var M = 0; M < S.length; M++)
                  ke(S[M], e);
                Object.freeze && Object.freeze(S);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        if (z.call(r, "key")) {
          var F = A(e), R = Object.keys(r).filter(function(vt) {
            return vt !== "key";
          }), te = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[F + te]) {
            var xt = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, F, xt, F), Oe[F + te] = !0;
          }
        }
        return e === g ? ct(E) : lt(E), E;
      }
    }
    function ut(e, r, n) {
      return Ce(e, r, n, !0);
    }
    function ft(e, r, n) {
      return Ce(e, r, n, !1);
    }
    var dt = ft, pt = ut;
    G.Fragment = g, G.jsx = dt, G.jsxs = pt;
  }()), G;
}
process.env.NODE_ENV === "production" ? re.exports = Tt() : re.exports = At();
var t = re.exports;
const Dt = gt(null), Ht = "data:image/webp;base64,UklGRq4vAABXRUJQVlA4WAoAAAAQAAAA5wEAhwAAQUxQSOYWAAABHAVpGzCrf9t7EiJCYdIGTDpvURGm9n7K+YS32rZ1W8q0LSSEBCQgAQlIwEGGA3CQOAAHSEDCJSEk4KDvUmL31vrYkSX3ufgXEb4gSbKt2LatxlqIgNBBzbM3ikHVkvUvq7btKpaOBCQgIRIiAQeNg46DwgE4oB1QDuKgS0IcXBykXieHkwdjX/4iAhZtK3ErSBYGEelp+4aM/5/+z14+//jLlz/++s/Xr4//kl9C8Ns8DaajU+lPX/74+viv/eWxOXsO+eHL3/88/ut/2b0zref99evjX8NLmNt1fP7178e/jJcw9k3G//XP49/Iy2qaa7328Xkk9ZnWx0VUj3bcyCY4Pi7C6reeEagEohnRCbQQwFmUp9ggYQj8MChjTSI0Ck7G/bh6P5ykNU9yP+10G8I2UAwXeQ96DQwNjqyPu/c4tK+5CtGOK0oM7AH5f767lHpotXVYYI66B+HjMhHj43C5wok3YDH4/vZFZRkB7rNnEfC39WS2Q3K78y525wFNTPf5f+/fN9YI1YyDvjuzV5rQtsfn1Ez1ka3PkeGxOZ6IODxDJqCLpF7vdb9Z3s/ufLr6jf/55zbW3LodwwVVg7Lmao+p3eGcqDFDGuuKnlBZAPSbnkYtTX+mZl2y57Gq85F3tDv7m7/yzpjXHoVA3YUObsHz80W3IUK1E8yRqggxTMzD4If2230ys7RDxWrLu9o9GdSWNwNRC2yMIg+HkTVT3BOZER49XLBMdljemLFMjw8VwZ8OdBti4lWdt7c7dzaSc5yILtztsTMT1GFGn/tysM23nF3xbOsnh/eQGKkxhWGEalljCvWZ+LDE+9t97uqEfb08rdYwZGhheLzG2SJzKS77OIAVgPDjf9jHt6c+0mjinS/v13iz9RV3vsPdmbNG1E+nD6s83jBrBEnlBiTojuJogGJNtzxtsIoD2CFuXYipzhGWHhWqCBSqd7l7GMrnuHzH6910FO+XYwgcDxoFRJNk2GUcpQ6I/GhLmqisuBS6uSFpfAz3Yb9Yatyed7r781ZYfr3+3FfXs1MykSbVcg4GiOKX19SZ9xFRwhG+UZGiROjsXhePVu12fCZTJ3CJ4Z3uXnyxz28RutHa5yCKG6jgfTBPuA9jHL7YdlAa2trNEr7BLANd3qNYcWZqnkvlDe8+F5Q/9k8jCFk17ObrIf0O/5U/iDnqcqA70mURr8FUN5pmQEzDcxuWvOPd1+KrbO4fd0vXK5OTtYEy5C2TA5L4ok6Y31WHR9ZR9lQr6IjwruSd775W6NVa2zz1fir2k1GWnT573Eu3mfMjIikYZkM4MDCnTWbmLrpK/Hs0KD5C8rZ3n0tnw0j76WuU8P1YBIjsvcESbnOQMY+gGC/sd/gG+hKKtDijJHhrcSj/GHa/FZ8oGLXeLx1IW+cgU8pqD0PzMzU3oG5lQ/ZaDPDMYq+aAPSEmHN+JiVI0p0haHTvPt77732z5ed2K7NHs9FtCIk4BdNkKLRLvOKlFcw+UiovM4OB5sGgepyML+a4TEu/I29/dFtjJulojJR4Tg71ybApEdca0TSnaumNJyCWH2pjENASlQS/NIXMWtiPV9CHsvuftev08/lemYIcUnHSu6XEMvaBq41tqf/m0siLj7xeXsnBmhxY5z+nCwX4Iu4euTPaE4EQorgogisHrBtsAMdX+Huje7nlx3hMpKovdf+YftDQqytChXfEh7D5nyC8rzNTICINmpK5Ni0ngcAMzpmiYDwOMtmUTiCjvx2S2dIeSguP/QHZ3xYIeGhTt1CsCOIiEuVw8pGjVznDJppuojl30i9RvXccXzmXGj2b3H3XM38c/PZseyeOdplXhFekzZMZ2fUGuIBsKCcgQg4Ikqt4PDTkQiWQtMUBFAEhUH8vuvoAvnvGMCEP4/vMmZA2PnkmAJsQsHeFAIk43F00OS3sa/1TDJTPss2698T+i3V22L3PsIeFAHmWWi1FUh29TqpniVOt5hGA/q40Yubt4yXDEQomvldUNhfuuSvjHzPBysYhBMSmRrpuIUHJhQk5uw5V4EwpMp1NvklGkc03WYeC0KETcZ409HkEcwnEaE3EdNnIcfCb1jjWNfZyhhGH48AvsJ4WL+mYTM5i+yFNyM6PhbkuMGYREv48VihVyHXb9RjoE0HvoOuaO7fxxUYnQj1wB0DOZUagcEXfVkJ/nBgV+vl5yMfFaJs0myb9BjyNSsY9FbwZNq21wEFOEJ8Pk/vO1fSa6bOPZFCMc7grz9YXf8rBBPaK3qUJEfJG1A8nuytO1jg8CvWGEY1Z4o1gb3uEjILmNm5YfMXH3GtvyETX+j4jAXkkaA7FDQIdPzLZOcUJsqLQFxboX/MZ95f7MqPku/6IAGXer6xchZyiqcG2Tw4oSVcO0Q0vqOlmEcpsyBw2pwzcifb6t2th64vASkXGXzY9U7aFvkqJEOWSkEU0oL0FrnOfr432tJ5OtPUG1T0cg5yqNTNFAqKFxl80fxGGPFzIiASv+sEPaGMmewBjUEZNFtVCwzaG3PVSe5l+AIRNeFCzu2+H/7Cp2pbOjRUjNFFMX8ZEGl0D4uNWi4ykocIgBkGF+HAIHRNjAqioi4y7vjPtlTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTpXlKyTCKKHsWssGuM4dhzIaZqIjXvg2w1xqK8sqkQKhJUqWoGxcXTK4gi12ecTaa8+jmMYItoS41KhA4pbAWS2MyLk3n/lS0c4Cq4KcdLYTv4c3OPQZWJx+B9dSytYPUmGUKbKpg+Oy/g0iGuMDw+WRMjdCftaM30PxVSEW8Y6IeUpcGDoTFyDExFIC0coBCNDjx8XXBMWW53qAz2LgJA7G/zPcBcq5mjyfMo/dYTJMBQ3mkxItV2HHpsltIs49LLZK4w6TscoK/1x8FCEkPvP90Y3XVDu468z/HBkAdUMZLNwt3AqNiHOLQM/EYqMbxAWcgW1Rd5PFOnuX08+iNwt7wFWBWYdpDb3F5inFIe4vlXFLkUO3zVjzvJJWXGJOhyBSxV4O8z1FPBmVgZA7p+Ov5oh0XYD5DazDBODdJHHK3O3U5k2REDOWh7ZQSw6fDLBl4P4hixhuzJpGLmv9Ok/12dnFEMDomZm9pikmMevpvEAvZSq1rPziRSaXHMokc0TwRInpAVh5B7os8LBX4+z8rYaZxxQViQ7bndIOnucpgFahg7nBRTv9mUP1epZ+zzFYkXJvfvxUmkdewGhR3FtEE5gGUdAz8DbBFDQypm3jgUlFMru4RG5VIXGaThK7uZnNNDVq3igkGgQVnnSqodKgLGNEPnkAH3YgM0ABowQ5RsDpa4C8wuMrXP8JeioiBC5//ltLZOuePmXgZauU9FcpsvPvYH5yWt8P65HuRjLI62+zmNH28fZZ4odgbjp6AswlNzd74PbIkojkpXSKKF8h79BOJxhZFhDeSWAvb3D5jw2NtUDppI4eRSg5L7+5bTUdm0e7FZh2BgmZdVY/+WE7DLuqWZm3YvOEoQ0WcIIlI8bckcO2SkgZcHI/f63KJb0uWUR6gtorxgCE5ytH3wRr3kiWHlcdGk/SZO0UU+RYuFrCTjCdUAwGdEouf//Si1AhNmg7ZFRuMR+5qeQAaAdwKrG5O5pUnNAa8Ecb9Y2b6B8Rejwcffv5ii5h69Dhm55nhpJ3o/FYpTL1AWgmLIAG4t3qK8ocYnXxF06Fe0Dtv9kvv/LJZTcg/D4OB1FEtaC+mvh3RNhPLlOg3QniC0jov2Qjw3adeA/2GAIohAxCwSGlTsJ+pkOHU6K0EyY5osnN6tVyv56/OJNAOP9Kvi1wZx55EIcz0F2IYWAkvvDRypWSXUuGExX4QjQt4o5ptXHEaXK4z5RYV1C7cs6aLTigJYW8Lwcrv/R9cHuLsl1cfKzRlB5hgWzp/tpPDUF2sWA4tApdUKqSRX+TTogKnATAH44OLk7d36DCknABBAqTWQQz1QgQeq3EImJiwWdYSahYYXVOJmPCa6LqAvdEojcVT+xjjtNZoCcsYRHnvdK7bf2GreoKKsKDtgn5emh3lGmCdDzkDJPGid3PFAb/Bbwj1MCf2pdZqkSUBwWXgGpLWaUEjFG+0PmcDzclQBH2FDsA+UcILmHrzrHY6DKev0bBOYPD6lGy0Nw60gIAeP8HXWq0vZo5rbFGsYXSDtNb+QnSu7hPyLzvfMcaBTM2oF6rLx2CQaaYSljdEeodTvY2uqwUYvPtFlqNo0wxoWSu/8rQgNHO9WjggPFdxIG3socz0BCkQY1umhJ1oHI/lta72+zuU9tESX3+5++GF3dZeON4RZCnaoHjExonNAkjSXSyOtbbjmATzeZJBoWDR202FweApL78uWYAitcpVDELbG9a7R9zukHUYYLTBBrysZM7cj0rgs1lgo1EXNwwmS+3S0WBe2v+PscXUfX6f9jH2veD875UvP8e1f0T7p0D+Pve8vLve97X5X8v8p+r9986A6Xn2G+eCg6V299v9E+6eXvow6v870OfYlXzQW0/U++X65Z6A5XvX/bT/D3369r56jY9X56/uP7T8rU70DqA17yPe6fGPtfMrePz+aHe7YdE89vXy3Mv7C9X/+Xv7+f79e988DufvQO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173zwO6eU7754KCpXP7+fW6Xl+v485H6eXo6OnY7t9fDud+hXyDOf7yZ73p7Xf3/+v69X/6/v173f++fH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx+PH48fjx=", Mt = ({
  children: c,
  blur: j = 12,
  scale: x = 0.5,
  saturation: g = 150,
  opacity: y = 0.12,
  tint: h = "#bbbbbc",
  accent: m = "#fc3c44",
  accentGlow: v = "rgba(252, 60, 68, 0.4)",
  reflexLight: i = 0.3,
  reflexDark: l = 2
}) => {
  Te(() => {
    const f = document.documentElement;
    f.style.setProperty("--lg-blur", `${j}px`), f.style.setProperty("--lg-scale", `${x}`), f.style.setProperty("--lg-saturation", `${g}%`), f.style.setProperty("--lg-opacity", `${y}`), f.style.setProperty("--lg-glass-tint", h), f.style.setProperty("--lg-accent", m), f.style.setProperty("--lg-accent-glow", v), f.style.setProperty("--lg-reflex-light", `${i}`), f.style.setProperty("--lg-reflex-dark", `${l}`);
  }, [j, x, g, y, h, m, v, i, l]);
  const d = Ne(() => Math.max(5e-3, x * 0.04).toFixed(3), [x]), b = Ne(() => ({
    blur: j,
    scale: x,
    saturation: g,
    opacity: y,
    tint: h,
    accent: m,
    reflexLight: i,
    reflexDark: l
  }), [j, x, g, y, h, m, i, l]);
  return /* @__PURE__ */ t.jsxs(Dt.Provider, { value: b, children: [
    c,
    /* @__PURE__ */ t.jsx(
      "svg",
      {
        className: "lg-svg-filter",
        "aria-hidden": "true",
        style: {
          position: "absolute",
          width: 0,
          height: 0,
          pointerEvents: "none",
          visibility: "hidden"
        },
        children: /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsxs("filter", { id: "liquid-glass-filter", primitiveUnits: "objectBoundingBox", children: [
          /* @__PURE__ */ t.jsx(
            "feImage",
            {
              result: "map",
              width: "100%",
              height: "100%",
              x: "0",
              y: "0",
              href: Ht
            }
          ),
          /* @__PURE__ */ t.jsx(
            "feGaussianBlur",
            {
              in: "SourceGraphic",
              stdDeviation: d,
              result: "blur"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "feDisplacementMap",
            {
              id: "disp",
              in: "blur",
              in2: "map",
              scale: x,
              xChannelSelector: "R",
              yChannelSelector: "G"
            }
          )
        ] }) })
      }
    )
  ] });
}, X = ({
  children: c,
  className: j = "",
  style: x = {},
  as: g = "div",
  showHighlight: y = !0,
  enableSpecularHover: h = !1,
  ...m
}) => {
  const v = Ae(null), [i, l] = C({ x: 0, y: 0 }), [d, b] = C(!1), f = (N) => {
    if (!h || !v.current) return;
    const D = v.current.getBoundingClientRect(), Z = N.clientX - D.left, T = N.clientY - D.top;
    l({ x: Z, y: T });
  }, P = {
    ...x,
    ...h ? {
      "--mouse-x": `${i.x}px`,
      "--mouse-y": `${i.y}px`,
      "--mouse-opacity": d ? 1 : 0
    } : {}
  };
  return /* @__PURE__ */ t.jsxs(
    g,
    {
      ref: v,
      className: `lg-container ${h ? "lg-specular-card" : ""} ${j}`,
      style: P,
      onMouseMove: f,
      onMouseEnter: () => b(!0),
      onMouseLeave: () => b(!1),
      ...m,
      children: [
        y && /* @__PURE__ */ t.jsx("div", { className: "lg-top-highlight" }),
        c
      ]
    }
  );
}, It = () => {
  const [c, j] = C(0), [x, g] = C(0), [y, h] = C(!1), m = [
    { label: "Home", icon: ht },
    { label: "Explore", icon: mt },
    { label: "Library", icon: bt },
    { label: "Chat", icon: yt }
  ], v = (l) => {
    l !== c && (g(c), j(l), h(!0), setTimeout(() => {
      h(!1);
    }, 400));
  }, i = () => y ? c > x ? "lg-morph-right" : "lg-morph-left" : "";
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center gap-6 w-full max-w-[500px]", style: { margin: "0 auto" }, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3 w-full", children: [
      /* @__PURE__ */ t.jsx(
        X,
        {
          className: "flex-1 h-16 rounded-[32px] flex items-center justify-around px-2 overflow-hidden",
          showHighlight: !0,
          children: /* @__PURE__ */ t.jsx("div", { className: "flex w-full justify-around relative", children: m.map((l, d) => {
            const b = l.icon, f = d === c;
            return /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: () => v(d),
                className: "relative flex flex-col items-center justify-center p-2 min-w-[64px] border-none bg-transparent cursor-pointer group lg-active-scale",
                style: {
                  color: f ? "var(--lg-accent)" : "rgba(255, 255, 255, 0.4)",
                  outline: "none",
                  transition: "color 0.3s ease"
                },
                children: [
                  f && /* @__PURE__ */ t.jsx(
                    "div",
                    {
                      className: `absolute inset-0 rounded-[14px] lg-pill z-[-1] ${i()}`,
                      style: {
                        backgroundColor: "color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 150%), transparent)"
                      }
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    b,
                    {
                      size: 20,
                      className: "transition-transform duration-300 group-hover:scale-110",
                      strokeWidth: 2.2
                    }
                  ),
                  /* @__PURE__ */ t.jsx("span", { className: "text-[10px] font-semibold mt-1 tracking-wide uppercase opacity-80", children: l.label })
                ]
              },
              l.label
            );
          }) })
        }
      ),
      /* @__PURE__ */ t.jsx(
        X,
        {
          className: "w-16 h-16 rounded-full flex items-center justify-center cursor-pointer lg-active-scale",
          showHighlight: !0,
          style: { flexShrink: 0 },
          children: /* @__PURE__ */ t.jsx(jt, { size: 22, className: "text-white opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300", strokeWidth: 2.2 })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("style", { children: `
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-1 { flex: 1; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-around { justify-content: space-around; }
        .gap-3 { gap: 12px; }
        .gap-6 { gap: 24px; }
        .w-full { width: 100%; }
        .max-w-\\[500px\\] { max-width: 500px; }
        .h-16 { height: 64px; }
        .rounded-\\[32px\\] { border-radius: 32px; }
        .rounded-full { border-radius: 50%; }
        .px-2 { padding-left: 8px; padding-right: 8px; }
        .overflow-hidden { overflow: hidden; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .rounded-\\[14px\\] { border-radius: 14px; }
        .z-\\[-1\\] { z-index: -1; }
        .min-w-\\[64px\\] { min-width: 64px; }
        .p-2 { padding: 8px; }
        .bg-transparent { background-color: transparent; }
        .cursor-pointer { cursor: pointer; }
        .text-\\[10px\\] { font-size: 10px; }
        .font-semibold { font-weight: 600; }
        .mt-1 { margin-top: 4px; }
        .tracking-wide { letter-spacing: 0.025em; }
        .uppercase { text-transform: uppercase; }
        .opacity-80 { opacity: 0.8; }
        .opacity-60 { opacity: 0.6; }
        .hover\\:opacity-100:hover { opacity: 1; }
        .hover\\:scale-110:hover { transform: scale(1.1); }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-300 { transition-duration: 300ms; }
      ` })
  ] });
}, zt = () => {
  const [c, j] = C(!0), [x, g] = C(45), [y, h] = C(80), [m, v] = C(!0), [i, l] = C(72);
  Te(() => {
    let P = null;
    return c ? P = setInterval(() => {
      g((N) => N >= 100 ? 0 : N + 0.5), l((N) => N + 1);
    }, 1e3) : clearInterval(P), () => clearInterval(P);
  }, [c]);
  const d = (P) => {
    const N = Math.floor(P / 60), D = P % 60;
    return `${N}:${D < 10 ? "0" : ""}${D}`;
  }, b = () => {
    v(!1);
  }, f = () => {
    v(!0);
  };
  return m ? /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-4 w-full max-w-[500px] select-none", style: { margin: "0 auto" }, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3 w-full", children: [
      /* @__PURE__ */ t.jsxs(
        X,
        {
          className: "flex-1 h-[76px] rounded-[22px] flex flex-col justify-between overflow-hidden p-3",
          showHighlight: !0,
          children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "w-11 h-11 rounded-[10px] flex-shrink-0 flex items-center justify-center relative overflow-hidden",
                    style: {
                      background: "linear-gradient(135deg, #8a2387, #e94057, #f27121)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)"
                    },
                    children: /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: `w-6 h-6 rounded-full border border-white/20 flex items-center justify-center ${c ? "animate-spin" : ""}`,
                        style: { animationDuration: "4s" },
                        children: /* @__PURE__ */ t.jsx("div", { className: "w-2 h-2 rounded-full bg-black/60" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col min-w-0", children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm font-semibold text-white truncate tracking-wide", children: "Synthetic Waves" }),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                    /* @__PURE__ */ t.jsxs("div", { className: `lg-eq-container ${c ? "playing" : ""}`, children: [
                      /* @__PURE__ */ t.jsx("div", { className: "lg-eq-bar lg-eq-bar-1" }),
                      /* @__PURE__ */ t.jsx("div", { className: "lg-eq-bar lg-eq-bar-2" }),
                      /* @__PURE__ */ t.jsx("div", { className: "lg-eq-bar lg-eq-bar-3" })
                    ] }),
                    /* @__PURE__ */ t.jsx("span", { className: "text-[11px] text-white/50 truncate", children: "Neon Rhythm" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ t.jsx("button", { className: "p-2 bg-transparent border-none text-white/40 hover:text-white/90 cursor-pointer lg-active-scale", children: /* @__PURE__ */ t.jsx(wt, { size: 16, fill: "currentColor" }) }),
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => j(!c),
                    className: "w-10 h-10 rounded-full flex items-center justify-center lg-pill text-white cursor-pointer lg-active-scale",
                    style: {
                      backgroundColor: "color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 150%), transparent)"
                    },
                    children: c ? /* @__PURE__ */ t.jsx(Pt, { size: 16, fill: "currentColor" }) : /* @__PURE__ */ t.jsx(Et, { size: 16, fill: "currentColor", className: "ml-0.5" })
                  }
                ),
                /* @__PURE__ */ t.jsx("button", { className: "p-2 bg-transparent border-none text-white/40 hover:text-white/90 cursor-pointer lg-active-scale", children: /* @__PURE__ */ t.jsx(kt, { size: 16, fill: "currentColor" }) })
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "w-full flex items-center justify-between gap-3 px-1", children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-[9px] font-mono text-white/40", children: d(i) }),
              /* @__PURE__ */ t.jsxs("div", { className: "flex-1 relative h-6 flex items-center group", children: [
                /* @__PURE__ */ t.jsx(
                  "input",
                  {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "0.1",
                    value: x,
                    onChange: (P) => {
                      g(parseFloat(P.target.value)), l(Math.round(parseFloat(P.target.value) / 100 * 160));
                    },
                    className: "w-full absolute inset-0 cursor-pointer h-full z-10 opacity-0"
                  }
                ),
                /* @__PURE__ */ t.jsx("div", { className: "w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative", children: /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "h-full rounded-full transition-all duration-100 relative",
                    style: {
                      width: `${x}%`,
                      background: "linear-gradient(90deg, color-mix(in srgb, var(--lg-accent) 50%, transparent), var(--lg-accent))",
                      boxShadow: "0 0 8px var(--lg-accent-glow)"
                    }
                  }
                ) }),
                /* @__PURE__ */ t.jsxs(
                  "div",
                  {
                    className: "absolute top-1/2 w-3 h-3 rounded-full bg-white z-20 pointer-events-none lg-active-scale group-hover:scale-125",
                    style: {
                      left: `calc(${x}% - 6px)`,
                      transform: "translateY(-50%)",
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.4)"
                    },
                    children: [
                      /* @__PURE__ */ t.jsx("div", { className: "lg-slider-thumb-filter" }),
                      /* @__PURE__ */ t.jsx("div", { className: "lg-slider-thumb-specular" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ t.jsx("span", { className: "text-[9px] font-mono text-white/40", children: "2:40" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: b,
          className: "w-14 h-[76px] rounded-[22px] flex items-center justify-center cursor-pointer border-none bg-transparent lg-active-scale p-0",
          children: /* @__PURE__ */ t.jsx(X, { className: "w-full h-full rounded-[22px] flex items-center justify-center", children: /* @__PURE__ */ t.jsx(Ot, { size: 20, className: "text-white/30 hover:text-white/80 transition-colors", strokeWidth: 2.2 }) })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs(
      X,
      {
        className: "w-full h-11 rounded-[16px] flex items-center justify-between px-4 py-2",
        showHighlight: !0,
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "flex items-center gap-2 text-white/50", children: /* @__PURE__ */ t.jsx(Ct, { size: 15 }) }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex-1 max-w-[280px] relative h-6 flex items-center group ml-3", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "100",
                value: y,
                onChange: (P) => h(parseInt(P.target.value)),
                className: "w-full absolute inset-0 cursor-pointer h-full z-10 opacity-0"
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "w-full h-[3px] bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "h-full rounded-full transition-all duration-100",
                style: {
                  width: `${y}%`,
                  background: "rgba(255, 255, 255, 0.3)"
                }
              }
            ) }),
            /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "absolute top-1/2 w-2.5 h-2.5 rounded-full bg-white/85 z-20 pointer-events-none group-hover:scale-125",
                style: {
                  left: `calc(${y}% - 5px)`,
                  transform: "translateY(-50%)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("span", { className: "text-[10px] font-semibold text-white/40 tracking-wider w-8 text-right font-mono", children: [
            y,
            "%"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx("style", { children: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 3s linear infinite;
        }
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .text-sm { font-size: 14px; }
        .text-xs { font-size: 12px; }
        .text-right { text-align: right; }
        .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        .mt-0\\.5 { margin-top: 2px; }
        .ml-3 { margin-left: 12px; }
        .w-8 { width: 32px; }
      ` })
  ] }) : /* @__PURE__ */ t.jsx("div", { className: "w-full max-w-[500px] h-[136px] flex items-center justify-center select-none", style: { margin: "0 auto" }, children: /* @__PURE__ */ t.jsx(
    X,
    {
      className: "w-full h-full rounded-[22px] flex items-center justify-center p-6",
      showHighlight: !0,
      children: /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: f,
          className: "px-6 py-3 rounded-2xl lg-pill text-xs font-bold text-white cursor-pointer lg-active-scale uppercase tracking-wider border-none bg-transparent outline-none",
          style: {
            backgroundColor: "color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 150%), transparent)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.25)"
          },
          children: "Restore Music Player"
        }
      )
    }
  ) });
}, Wt = () => {
  const c = Ae(null), [j, x] = C({ x: 0, y: 0 }), [g, y] = C({ x: 0, y: 0 }), h = (v) => {
    if (!c.current) return;
    const i = c.current.getBoundingClientRect(), l = Math.round(v.clientX - i.left), d = Math.round(v.clientY - i.top);
    y({ x: l, y: d });
    const b = i.width / 2, f = i.height / 2, P = (f - d) / f * 10, N = (l - b) / b * 10;
    x({ x: P, y: N });
  }, m = () => {
    x({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "w-full max-w-[380px] perspective-container select-none",
      style: { margin: "0 auto", perspective: "1000px" },
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            ref: c,
            onMouseMove: h,
            onMouseLeave: m,
            style: {
              transform: `rotateX(${j.x}deg) rotateY(${j.y}deg)`,
              transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
              transformStyle: "preserve-3d"
            },
            children: /* @__PURE__ */ t.jsxs(
              X,
              {
                className: "w-full h-[260px] rounded-[28px] p-6 flex flex-col justify-between",
                showHighlight: !0,
                enableSpecularHover: !0,
                children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-start justify-between w-full", style: { transform: "translateZ(20px)" }, children: [
                    /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ t.jsx("span", { className: "text-[10px] font-bold tracking-widest text-white/40 uppercase", children: "Interactive Specular" }),
                      /* @__PURE__ */ t.jsx("h3", { className: "text-xl font-bold text-white tracking-tight mt-0.5", children: "3D Aero Shine" })
                    ] }),
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-xl flex items-center justify-center",
                        style: {
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.08)"
                        },
                        children: /* @__PURE__ */ t.jsx(De, { size: 18, className: "text-white/60 animate-pulse" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3 w-full", style: { transform: "translateZ(10px)" }, children: [
                    /* @__PURE__ */ t.jsx(Nt, { size: 24, className: "text-white/30" }),
                    /* @__PURE__ */ t.jsx("div", { className: "flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" })
                  ] }),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-3 w-full", style: { transform: "translateZ(15px)" }, children: [
                    /* @__PURE__ */ t.jsx("p", { className: "text-xs text-white/50 leading-relaxed font-normal", children: "Move your mouse across this card. A high-fidelity specular light flare tracks your cursor while the card tilts in 3D space." }),
                    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between w-full pt-1", children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] font-semibold text-white/60", children: [
                        /* @__PURE__ */ t.jsx(Rt, { size: 13, className: "text-white/55" }),
                        /* @__PURE__ */ t.jsx("span", { children: "Aero Glass Enabled" })
                      ] }),
                      /* @__PURE__ */ t.jsxs("div", { className: "px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-[9px] font-mono text-white/40 tracking-wider", children: [
                        "X: ",
                        g.x,
                        "px | Y: ",
                        g.y,
                        "px"
                      ] })
                    ] })
                  ] })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx("style", { children: `
        .text-xl { font-size: 20px; }
        .tracking-tight { letter-spacing: -0.025em; }
        .leading-relaxed { line-height: 1.625; }
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-white\\/10 { --tw-gradient-from: rgba(255, 255, 255, 0.1) var(--tw-gradient-from-position); --tw-gradient-to: rgba(255, 255, 255, 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-transparent { --tw-gradient-to: transparent var(--tw-gradient-to-position); }
      ` })
      ]
    }
  );
}, Gt = () => {
  const [c, j] = C(0), [x, g] = C(0), [y, h] = C(!1), m = [
    { label: "Light", icon: St, color: "#f3f4f6", tint: "rgba(255, 255, 255, 0.45)", text: "#111827" },
    { label: "Dark", icon: Xt, color: "#111827", tint: "rgba(0, 0, 0, 0.35)", text: "#f9fafb" },
    { label: "Indigo", icon: De, color: "#1e1b4b", tint: "rgba(99, 102, 241, 0.25)", text: "#e0e7ff" }
  ], v = (l) => {
    l !== c && (g(c), j(l), h(!0), setTimeout(() => {
      h(!1);
    }, 400));
  }, i = () => y ? c > x ? "lg-morph-right" : "lg-morph-left" : "";
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center gap-6 w-full max-w-[380px]", style: { margin: "0 auto" }, children: [
    /* @__PURE__ */ t.jsx(
      X,
      {
        className: "w-full h-16 rounded-[20px] flex items-center p-1.5 relative overflow-hidden",
        showHighlight: !0,
        children: /* @__PURE__ */ t.jsxs("div", { className: "flex w-full h-full justify-between items-center relative", children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute h-full rounded-[14px] lg-pill z-[1] ${i()}`,
              style: {
                width: "calc(33.333% - 4px)",
                left: `calc(${c * 33.333}% + 2px)`,
                backgroundColor: "color-mix(in srgb, var(--lg-glass-tint) calc(var(--lg-opacity) * 160%), transparent)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.25)",
                transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s, box-shadow 0.4s"
              }
            }
          ),
          m.map((l, d) => {
            const b = l.icon, f = d === c;
            return /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: () => v(d),
                className: "w-[33.333%] h-full relative z-10 flex items-center justify-center gap-2 border-none bg-transparent cursor-pointer text-sm font-semibold lg-active-scale",
                style: {
                  color: f ? "var(--lg-accent)" : "rgba(255, 255, 255, 0.5)",
                  transition: "color 0.3s ease",
                  outline: "none"
                },
                children: [
                  /* @__PURE__ */ t.jsx(b, { size: 15, strokeWidth: 2.2 }),
                  /* @__PURE__ */ t.jsx("span", { children: l.label })
                ]
              },
              l.label
            );
          })
        ] })
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "w-full h-24 rounded-2xl flex items-center justify-center p-4 border border-white/5 relative overflow-hidden transition-all duration-500",
        style: {
          backgroundColor: m[c].color,
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
        },
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute inset-0 bg-grid opacity-15" }),
          /* @__PURE__ */ t.jsx(
            X,
            {
              className: "px-5 py-2.5 rounded-xl text-center",
              showHighlight: !0,
              children: /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "text-xs font-semibold tracking-wide",
                  style: { color: m[c].text },
                  children: [
                    m[c].label,
                    " Theme Active"
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t.jsx("style", { children: `
        .bg-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 15px 15px;
          background-position: center;
        }
      ` })
  ] });
};
export {
  It as BottomDock,
  X as LiquidGlassContainer,
  Mt as LiquidGlassProvider,
  Gt as LiquidSlider,
  zt as MiniPlayer,
  Wt as SpecularCard
};
