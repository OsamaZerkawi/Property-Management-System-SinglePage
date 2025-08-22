function qT(n, i) {
  for (var s = 0; s < i.length; s++) {
    const r = i[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in n)) {
          const d = Object.getOwnPropertyDescriptor(r, o);
          d &&
            Object.defineProperty(
              n,
              o,
              d.get ? d : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const d of o)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const d = {};
    return (
      o.integrity && (d.integrity = o.integrity),
      o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const d = s(o);
    fetch(o.href, d);
  }
})();
function p0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var af = { exports: {} },
  cl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ly;
function GT() {
  if (ly) return cl;
  ly = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(r, o, d) {
    var f = null;
    if (
      (d !== void 0 && (f = "" + d),
      o.key !== void 0 && (f = "" + o.key),
      "key" in o)
    ) {
      d = {};
      for (var h in o) h !== "key" && (d[h] = o[h]);
    } else d = o;
    return (
      (o = d.ref),
      { $$typeof: n, type: r, key: f, ref: o !== void 0 ? o : null, props: d }
    );
  }
  return (cl.Fragment = i), (cl.jsx = s), (cl.jsxs = s), cl;
}
var ry;
function XT() {
  return ry || ((ry = 1), (af.exports = GT())), af.exports;
}
var A = XT(),
  sf = { exports: {} },
  bt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oy;
function KT() {
  if (oy) return bt;
  oy = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function x(R) {
    return R === null || typeof R != "object"
      ? null
      : ((R = (v && R[v]) || R["@@iterator"]),
        typeof R == "function" ? R : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    w = {};
  function E(R, X, $) {
    (this.props = R),
      (this.context = X),
      (this.refs = w),
      (this.updater = $ || T);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (R, X) {
      if (typeof R != "object" && typeof R != "function" && R != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, R, X, "setState");
    }),
    (E.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, "forceUpdate");
    });
  function M() {}
  M.prototype = E.prototype;
  function _(R, X, $) {
    (this.props = R),
      (this.context = X),
      (this.refs = w),
      (this.updater = $ || T);
  }
  var N = (_.prototype = new M());
  (N.constructor = _), D(N, E.prototype), (N.isPureReactComponent = !0);
  var Y = Array.isArray,
    z = { H: null, A: null, T: null, S: null, V: null },
    Q = Object.prototype.hasOwnProperty;
  function Z(R, X, $, W, I, gt) {
    return (
      ($ = gt.ref),
      { $$typeof: n, type: R, key: X, ref: $ !== void 0 ? $ : null, props: gt }
    );
  }
  function P(R, X) {
    return Z(R.type, X, void 0, void 0, void 0, R.props);
  }
  function tt(R) {
    return typeof R == "object" && R !== null && R.$$typeof === n;
  }
  function lt(R) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      R.replace(/[=:]/g, function ($) {
        return X[$];
      })
    );
  }
  var pt = /\/+/g;
  function ft(R, X) {
    return typeof R == "object" && R !== null && R.key != null
      ? lt("" + R.key)
      : X.toString(36);
  }
  function yt() {}
  function vt(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (
          (typeof R.status == "string"
            ? R.then(yt, yt)
            : ((R.status = "pending"),
              R.then(
                function (X) {
                  R.status === "pending" &&
                    ((R.status = "fulfilled"), (R.value = X));
                },
                function (X) {
                  R.status === "pending" &&
                    ((R.status = "rejected"), (R.reason = X));
                }
              )),
          R.status)
        ) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function ct(R, X, $, W, I) {
    var gt = typeof R;
    (gt === "undefined" || gt === "boolean") && (R = null);
    var rt = !1;
    if (R === null) rt = !0;
    else
      switch (gt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case n:
            case i:
              rt = !0;
              break;
            case g:
              return (rt = R._init), ct(rt(R._payload), X, $, W, I);
          }
      }
    if (rt)
      return (
        (I = I(R)),
        (rt = W === "" ? "." + ft(R, 0) : W),
        Y(I)
          ? (($ = ""),
            rt != null && ($ = rt.replace(pt, "$&/") + "/"),
            ct(I, X, $, "", function (Nt) {
              return Nt;
            }))
          : I != null &&
            (tt(I) &&
              (I = P(
                I,
                $ +
                  (I.key == null || (R && R.key === I.key)
                    ? ""
                    : ("" + I.key).replace(pt, "$&/") + "/") +
                  rt
              )),
            X.push(I)),
        1
      );
    rt = 0;
    var J = W === "" ? "." : W + ":";
    if (Y(R))
      for (var ot = 0; ot < R.length; ot++)
        (W = R[ot]), (gt = J + ft(W, ot)), (rt += ct(W, X, $, gt, I));
    else if (((ot = x(R)), typeof ot == "function"))
      for (R = ot.call(R), ot = 0; !(W = R.next()).done; )
        (W = W.value), (gt = J + ft(W, ot++)), (rt += ct(W, X, $, gt, I));
    else if (gt === "object") {
      if (typeof R.then == "function") return ct(vt(R), X, $, W, I);
      throw (
        ((X = String(R)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(R).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return rt;
  }
  function V(R, X, $) {
    if (R == null) return R;
    var W = [],
      I = 0;
    return (
      ct(R, W, "", "", function (gt) {
        return X.call($, gt, I++);
      }),
      W
    );
  }
  function q(R) {
    if (R._status === -1) {
      var X = R._result;
      (X = X()),
        X.then(
          function ($) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 1), (R._result = $));
          },
          function ($) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 2), (R._result = $));
          }
        ),
        R._status === -1 && ((R._status = 0), (R._result = X));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var U =
    typeof reportError == "function"
      ? reportError
      : function (R) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var X = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof R == "object" &&
                R !== null &&
                typeof R.message == "string"
                  ? String(R.message)
                  : String(R),
              error: R,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", R);
            return;
          }
          console.error(R);
        };
  function at() {}
  return (
    (bt.Children = {
      map: V,
      forEach: function (R, X, $) {
        V(
          R,
          function () {
            X.apply(this, arguments);
          },
          $
        );
      },
      count: function (R) {
        var X = 0;
        return (
          V(R, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (R) {
        return (
          V(R, function (X) {
            return X;
          }) || []
        );
      },
      only: function (R) {
        if (!tt(R))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return R;
      },
    }),
    (bt.Component = E),
    (bt.Fragment = s),
    (bt.Profiler = o),
    (bt.PureComponent = _),
    (bt.StrictMode = r),
    (bt.Suspense = p),
    (bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
    (bt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (R) {
        return z.H.useMemoCache(R);
      },
    }),
    (bt.cache = function (R) {
      return function () {
        return R.apply(null, arguments);
      };
    }),
    (bt.cloneElement = function (R, X, $) {
      if (R == null)
        throw Error(
          "The argument must be a React element, but you passed " + R + "."
        );
      var W = D({}, R.props),
        I = R.key,
        gt = void 0;
      if (X != null)
        for (rt in (X.ref !== void 0 && (gt = void 0),
        X.key !== void 0 && (I = "" + X.key),
        X))
          !Q.call(X, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && X.ref === void 0) ||
            (W[rt] = X[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) W.children = $;
      else if (1 < rt) {
        for (var J = Array(rt), ot = 0; ot < rt; ot++)
          J[ot] = arguments[ot + 2];
        W.children = J;
      }
      return Z(R.type, I, void 0, void 0, gt, W);
    }),
    (bt.createContext = function (R) {
      return (
        (R = {
          $$typeof: f,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (R.Provider = R),
        (R.Consumer = { $$typeof: d, _context: R }),
        R
      );
    }),
    (bt.createElement = function (R, X, $) {
      var W,
        I = {},
        gt = null;
      if (X != null)
        for (W in (X.key !== void 0 && (gt = "" + X.key), X))
          Q.call(X, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (I[W] = X[W]);
      var rt = arguments.length - 2;
      if (rt === 1) I.children = $;
      else if (1 < rt) {
        for (var J = Array(rt), ot = 0; ot < rt; ot++)
          J[ot] = arguments[ot + 2];
        I.children = J;
      }
      if (R && R.defaultProps)
        for (W in ((rt = R.defaultProps), rt))
          I[W] === void 0 && (I[W] = rt[W]);
      return Z(R, gt, void 0, void 0, null, I);
    }),
    (bt.createRef = function () {
      return { current: null };
    }),
    (bt.forwardRef = function (R) {
      return { $$typeof: h, render: R };
    }),
    (bt.isValidElement = tt),
    (bt.lazy = function (R) {
      return { $$typeof: g, _payload: { _status: -1, _result: R }, _init: q };
    }),
    (bt.memo = function (R, X) {
      return { $$typeof: m, type: R, compare: X === void 0 ? null : X };
    }),
    (bt.startTransition = function (R) {
      var X = z.T,
        $ = {};
      z.T = $;
      try {
        var W = R(),
          I = z.S;
        I !== null && I($, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(at, U);
      } catch (gt) {
        U(gt);
      } finally {
        z.T = X;
      }
    }),
    (bt.unstable_useCacheRefresh = function () {
      return z.H.useCacheRefresh();
    }),
    (bt.use = function (R) {
      return z.H.use(R);
    }),
    (bt.useActionState = function (R, X, $) {
      return z.H.useActionState(R, X, $);
    }),
    (bt.useCallback = function (R, X) {
      return z.H.useCallback(R, X);
    }),
    (bt.useContext = function (R) {
      return z.H.useContext(R);
    }),
    (bt.useDebugValue = function () {}),
    (bt.useDeferredValue = function (R, X) {
      return z.H.useDeferredValue(R, X);
    }),
    (bt.useEffect = function (R, X, $) {
      var W = z.H;
      if (typeof $ == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return W.useEffect(R, X);
    }),
    (bt.useId = function () {
      return z.H.useId();
    }),
    (bt.useImperativeHandle = function (R, X, $) {
      return z.H.useImperativeHandle(R, X, $);
    }),
    (bt.useInsertionEffect = function (R, X) {
      return z.H.useInsertionEffect(R, X);
    }),
    (bt.useLayoutEffect = function (R, X) {
      return z.H.useLayoutEffect(R, X);
    }),
    (bt.useMemo = function (R, X) {
      return z.H.useMemo(R, X);
    }),
    (bt.useOptimistic = function (R, X) {
      return z.H.useOptimistic(R, X);
    }),
    (bt.useReducer = function (R, X, $) {
      return z.H.useReducer(R, X, $);
    }),
    (bt.useRef = function (R) {
      return z.H.useRef(R);
    }),
    (bt.useState = function (R) {
      return z.H.useState(R);
    }),
    (bt.useSyncExternalStore = function (R, X, $) {
      return z.H.useSyncExternalStore(R, X, $);
    }),
    (bt.useTransition = function () {
      return z.H.useTransition();
    }),
    (bt.version = "19.1.0"),
    bt
  );
}
var cy;
function xd() {
  return cy || ((cy = 1), (sf.exports = KT())), sf.exports;
}
var S = xd();
const pi = p0(S),
  g0 = qT({ __proto__: null, default: pi }, [S]);
var lf = { exports: {} },
  ul = {},
  rf = { exports: {} },
  of = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uy;
function ZT() {
  return (
    uy ||
      ((uy = 1),
      (function (n) {
        function i(V, q) {
          var U = V.length;
          V.push(q);
          t: for (; 0 < U; ) {
            var at = (U - 1) >>> 1,
              R = V[at];
            if (0 < o(R, q)) (V[at] = q), (V[U] = R), (U = at);
            else break t;
          }
        }
        function s(V) {
          return V.length === 0 ? null : V[0];
        }
        function r(V) {
          if (V.length === 0) return null;
          var q = V[0],
            U = V.pop();
          if (U !== q) {
            V[0] = U;
            t: for (var at = 0, R = V.length, X = R >>> 1; at < X; ) {
              var $ = 2 * (at + 1) - 1,
                W = V[$],
                I = $ + 1,
                gt = V[I];
              if (0 > o(W, U))
                I < R && 0 > o(gt, W)
                  ? ((V[at] = gt), (V[I] = U), (at = I))
                  : ((V[at] = W), (V[$] = U), (at = $));
              else if (I < R && 0 > o(gt, U))
                (V[at] = gt), (V[I] = U), (at = I);
              else break t;
            }
          }
          return q;
        }
        function o(V, q) {
          var U = V.sortIndex - q.sortIndex;
          return U !== 0 ? U : V.id - q.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            h = f.now();
          n.unstable_now = function () {
            return f.now() - h;
          };
        }
        var p = [],
          m = [],
          g = 1,
          v = null,
          x = 3,
          T = !1,
          D = !1,
          w = !1,
          E = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          _ = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        function Y(V) {
          for (var q = s(m); q !== null; ) {
            if (q.callback === null) r(m);
            else if (q.startTime <= V)
              r(m), (q.sortIndex = q.expirationTime), i(p, q);
            else break;
            q = s(m);
          }
        }
        function z(V) {
          if (((w = !1), Y(V), !D))
            if (s(p) !== null) (D = !0), Q || ((Q = !0), ft());
            else {
              var q = s(m);
              q !== null && ct(z, q.startTime - V);
            }
        }
        var Q = !1,
          Z = -1,
          P = 5,
          tt = -1;
        function lt() {
          return E ? !0 : !(n.unstable_now() - tt < P);
        }
        function pt() {
          if (((E = !1), Q)) {
            var V = n.unstable_now();
            tt = V;
            var q = !0;
            try {
              t: {
                (D = !1), w && ((w = !1), _(Z), (Z = -1)), (T = !0);
                var U = x;
                try {
                  e: {
                    for (
                      Y(V), v = s(p);
                      v !== null && !(v.expirationTime > V && lt());

                    ) {
                      var at = v.callback;
                      if (typeof at == "function") {
                        (v.callback = null), (x = v.priorityLevel);
                        var R = at(v.expirationTime <= V);
                        if (((V = n.unstable_now()), typeof R == "function")) {
                          (v.callback = R), Y(V), (q = !0);
                          break e;
                        }
                        v === s(p) && r(p), Y(V);
                      } else r(p);
                      v = s(p);
                    }
                    if (v !== null) q = !0;
                    else {
                      var X = s(m);
                      X !== null && ct(z, X.startTime - V), (q = !1);
                    }
                  }
                  break t;
                } finally {
                  (v = null), (x = U), (T = !1);
                }
                q = void 0;
              }
            } finally {
              q ? ft() : (Q = !1);
            }
          }
        }
        var ft;
        if (typeof N == "function")
          ft = function () {
            N(pt);
          };
        else if (typeof MessageChannel < "u") {
          var yt = new MessageChannel(),
            vt = yt.port2;
          (yt.port1.onmessage = pt),
            (ft = function () {
              vt.postMessage(null);
            });
        } else
          ft = function () {
            M(pt, 0);
          };
        function ct(V, q) {
          Z = M(function () {
            V(n.unstable_now());
          }, q);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (n.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_next = function (V) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = x;
            }
            var U = x;
            x = q;
            try {
              return V();
            } finally {
              x = U;
            }
          }),
          (n.unstable_requestPaint = function () {
            E = !0;
          }),
          (n.unstable_runWithPriority = function (V, q) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var U = x;
            x = V;
            try {
              return q();
            } finally {
              x = U;
            }
          }),
          (n.unstable_scheduleCallback = function (V, q, U) {
            var at = n.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay),
                  (U = typeof U == "number" && 0 < U ? at + U : at))
                : (U = at),
              V)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = U + R),
              (V = {
                id: g++,
                callback: q,
                priorityLevel: V,
                startTime: U,
                expirationTime: R,
                sortIndex: -1,
              }),
              U > at
                ? ((V.sortIndex = U),
                  i(m, V),
                  s(p) === null &&
                    V === s(m) &&
                    (w ? (_(Z), (Z = -1)) : (w = !0), ct(z, U - at)))
                : ((V.sortIndex = R),
                  i(p, V),
                  D || T || ((D = !0), Q || ((Q = !0), ft()))),
              V
            );
          }),
          (n.unstable_shouldYield = lt),
          (n.unstable_wrapCallback = function (V) {
            var q = x;
            return function () {
              var U = x;
              x = q;
              try {
                return V.apply(this, arguments);
              } finally {
                x = U;
              }
            };
          });
      })(of)),
    of
  );
}
var fy;
function QT() {
  return fy || ((fy = 1), (rf.exports = ZT())), rf.exports;
}
var cf = { exports: {} },
  ge = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dy;
function FT() {
  if (dy) return ge;
  dy = 1;
  var n = xd();
  function i(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function d(p, m, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: m,
      implementation: g,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ge.createPortal = function (p, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return d(p, m, null, g);
    }),
    (ge.flushSync = function (p) {
      var m = f.T,
        g = r.p;
      try {
        if (((f.T = null), (r.p = 2), p)) return p();
      } finally {
        (f.T = m), (r.p = g), r.d.f();
      }
    }),
    (ge.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        r.d.C(p, m));
    }),
    (ge.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (ge.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var g = m.as,
          v = h(g, m.crossOrigin),
          x = typeof m.integrity == "string" ? m.integrity : void 0,
          T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: T,
            })
          : g === "script" &&
            r.d.X(p, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: T,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (ge.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = h(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(p);
    }),
    (ge.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          v = h(g, m.crossOrigin);
        r.d.L(p, g, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (ge.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var g = h(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (ge.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (ge.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (ge.useFormState = function (p, m, g) {
      return f.H.useFormState(p, m, g);
    }),
    (ge.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (ge.version = "19.1.0"),
    ge
  );
}
var hy;
function y0() {
  if (hy) return cf.exports;
  hy = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (cf.exports = FT()), cf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var my;
function WT() {
  if (my) return ul;
  my = 1;
  var n = QT(),
    i = xd(),
    s = y0();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var c = a.return;
      if (c === null) break;
      var u = c.alternate;
      if (u === null) {
        if (((l = c.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (c.child === u.child) {
        for (u = c.child; u; ) {
          if (u === a) return h(c), t;
          if (u === l) return h(c), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) (a = c), (l = u);
      else {
        for (var y = !1, b = c.child; b; ) {
          if (b === a) {
            (y = !0), (a = c), (l = u);
            break;
          }
          if (b === l) {
            (y = !0), (l = c), (a = u);
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = u.child; b; ) {
            if (b === a) {
              (y = !0), (a = u), (l = c);
              break;
            }
            if (b === l) {
              (y = !0), (l = u), (a = c);
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    v = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    M = Symbol.for("react.provider"),
    _ = Symbol.for("react.consumer"),
    N = Symbol.for("react.context"),
    Y = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    Q = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    tt = Symbol.for("react.activity"),
    lt = Symbol.for("react.memo_cache_sentinel"),
    pt = Symbol.iterator;
  function ft(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (pt && t[pt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var yt = Symbol.for("react.client.reference");
  function vt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === yt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case D:
        return "Fragment";
      case E:
        return "Profiler";
      case w:
        return "StrictMode";
      case z:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case tt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case T:
          return "Portal";
        case N:
          return (t.displayName || "Context") + ".Provider";
        case _:
          return (t._context.displayName || "Context") + ".Consumer";
        case Y:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Z:
          return (
            (e = t.displayName || null), e !== null ? e : vt(t.type) || "Memo"
          );
        case P:
          (e = t._payload), (t = t._init);
          try {
            return vt(t(e));
          } catch {}
      }
    return null;
  }
  var ct = Array.isArray,
    V = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = { pending: !1, data: null, method: null, action: null },
    at = [],
    R = -1;
  function X(t) {
    return { current: t };
  }
  function $(t) {
    0 > R || ((t.current = at[R]), (at[R] = null), R--);
  }
  function W(t, e) {
    R++, (at[R] = t.current), (t.current = e);
  }
  var I = X(null),
    gt = X(null),
    rt = X(null),
    J = X(null);
  function ot(t, e) {
    switch ((W(rt, e), W(gt, t), W(I, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? zg(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = zg(e)), (t = Vg(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    $(I), W(I, t);
  }
  function Nt() {
    $(I), $(gt), $(rt);
  }
  function Ct(t) {
    t.memoizedState !== null && W(J, t);
    var e = I.current,
      a = Vg(e, t.type);
    e !== a && (W(gt, t), W(I, a));
  }
  function wt(t) {
    gt.current === t && ($(I), $(gt)),
      J.current === t && ($(J), (al._currentValue = U));
  }
  var At = Object.prototype.hasOwnProperty,
    ce = n.unstable_scheduleCallback,
    Te = n.unstable_cancelCallback,
    Ei = n.unstable_shouldYield,
    Mi = n.unstable_requestPaint,
    he = n.unstable_now,
    Xo = n.unstable_getCurrentPriorityLevel,
    Ci = n.unstable_ImmediatePriority,
    ph = n.unstable_UserBlockingPriority,
    Ul = n.unstable_NormalPriority,
    A1 = n.unstable_LowPriority,
    gh = n.unstable_IdlePriority,
    E1 = n.log,
    M1 = n.unstable_setDisableYieldValue,
    ds = null,
    Ne = null;
  function Gn(t) {
    if (
      (typeof E1 == "function" && M1(t),
      Ne && typeof Ne.setStrictMode == "function")
    )
      try {
        Ne.setStrictMode(ds, t);
      } catch {}
  }
  var _e = Math.clz32 ? Math.clz32 : D1,
    C1 = Math.log,
    R1 = Math.LN2;
  function D1(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((C1(t) / R1) | 0)) | 0;
  }
  var Hl = 256,
    Pl = 4194304;
  function Ri(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yl(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var c = 0,
      u = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var b = l & 134217727;
    return (
      b !== 0
        ? ((l = b & ~u),
          l !== 0
            ? (c = Ri(l))
            : ((y &= b),
              y !== 0
                ? (c = Ri(y))
                : a || ((a = b & ~t), a !== 0 && (c = Ri(a)))))
        : ((b = l & ~u),
          b !== 0
            ? (c = Ri(b))
            : y !== 0
            ? (c = Ri(y))
            : a || ((a = l & ~t), a !== 0 && (c = Ri(a)))),
      c === 0
        ? 0
        : e !== 0 &&
          e !== c &&
          (e & u) === 0 &&
          ((u = c & -c),
          (a = e & -e),
          u >= a || (u === 32 && (a & 4194048) !== 0))
        ? e
        : c
    );
  }
  function hs(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function O1(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yh() {
    var t = Hl;
    return (Hl <<= 1), (Hl & 4194048) === 0 && (Hl = 256), t;
  }
  function vh() {
    var t = Pl;
    return (Pl <<= 1), (Pl & 62914560) === 0 && (Pl = 4194304), t;
  }
  function Ko(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function ms(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function N1(t, e, a, l, c, u) {
    var y = t.pendingLanes;
    (t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0);
    var b = t.entanglements,
      C = t.expirationTimes,
      B = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var G = 31 - _e(a),
        F = 1 << G;
      (b[G] = 0), (C[G] = -1);
      var k = B[G];
      if (k !== null)
        for (B[G] = null, G = 0; G < k.length; G++) {
          var H = k[G];
          H !== null && (H.lane &= -536870913);
        }
      a &= ~F;
    }
    l !== 0 && bh(t, l, 0),
      u !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(y & ~e));
  }
  function bh(t, e, a) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - _e(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (a & 4194090));
  }
  function xh(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var l = 31 - _e(a),
        c = 1 << l;
      (c & e) | (t[l] & e) && (t[l] |= e), (a &= ~c);
    }
  }
  function Zo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Qo(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Sh() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ty(t.type));
  }
  function _1(t, e) {
    var a = q.p;
    try {
      return (q.p = t), e();
    } finally {
      q.p = a;
    }
  }
  var Xn = Math.random().toString(36).slice(2),
    me = "__reactFiber$" + Xn,
    we = "__reactProps$" + Xn,
    ia = "__reactContainer$" + Xn,
    Fo = "__reactEvents$" + Xn,
    j1 = "__reactListeners$" + Xn,
    z1 = "__reactHandles$" + Xn,
    Th = "__reactResources$" + Xn,
    ps = "__reactMarker$" + Xn;
  function Wo(t) {
    delete t[me], delete t[we], delete t[Fo], delete t[j1], delete t[z1];
  }
  function aa(t) {
    var e = t[me];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[ia] || a[me])) {
        if (
          ((a = e.alternate),
          e.child !== null || (a !== null && a.child !== null))
        )
          for (t = Ug(t); t !== null; ) {
            if ((a = t[me])) return a;
            t = Ug(t);
          }
        return e;
      }
      (t = a), (a = t.parentNode);
    }
    return null;
  }
  function sa(t) {
    if ((t = t[me] || t[ia])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function gs(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function la(t) {
    var e = t[Th];
    return (
      e ||
        (e = t[Th] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ie(t) {
    t[ps] = !0;
  }
  var wh = new Set(),
    Ah = {};
  function Di(t, e) {
    ra(t, e), ra(t + "Capture", e);
  }
  function ra(t, e) {
    for (Ah[t] = e, t = 0; t < e.length; t++) wh.add(e[t]);
  }
  var V1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Eh = {},
    Mh = {};
  function L1(t) {
    return At.call(Mh, t)
      ? !0
      : At.call(Eh, t)
      ? !1
      : V1.test(t)
      ? (Mh[t] = !0)
      : ((Eh[t] = !0), !1);
  }
  function ql(t, e, a) {
    if (L1(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function Gl(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function An(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  var $o, Ch;
  function oa(t) {
    if ($o === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ($o = (e && e[1]) || ""),
          (Ch =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      $o +
      t +
      Ch
    );
  }
  var Jo = !1;
  function Io(t, e) {
    if (!t || Jo) return "";
    Jo = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var F = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(F.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(F, []);
                } catch (H) {
                  var k = H;
                }
                Reflect.construct(t, [], F);
              } else {
                try {
                  F.call();
                } catch (H) {
                  k = H;
                }
                t.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                k = H;
              }
              (F = t()) &&
                typeof F.catch == "function" &&
                F.catch(function () {});
            }
          } catch (H) {
            if (H && k && typeof H.stack == "string") return [H.stack, k.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = l.DetermineComponentFrameRoot(),
        y = u[0],
        b = u[1];
      if (y && b) {
        var C = y.split(`
`),
          B = b.split(`
`);
        for (
          c = l = 0;
          l < C.length && !C[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; c < B.length && !B[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (l === C.length || c === B.length)
          for (
            l = C.length - 1, c = B.length - 1;
            1 <= l && 0 <= c && C[l] !== B[c];

          )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (C[l] !== B[c]) {
            if (l !== 1 || c !== 1)
              do
                if ((l--, c--, 0 > c || C[l] !== B[c])) {
                  var G =
                    `
` + C[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      G.includes("<anonymous>") &&
                      (G = G.replace("<anonymous>", t.displayName)),
                    G
                  );
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      (Jo = !1), (Error.prepareStackTrace = a);
    }
    return (a = t ? t.displayName || t.name : "") ? oa(a) : "";
  }
  function B1(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return oa(t.type);
      case 16:
        return oa("Lazy");
      case 13:
        return oa("Suspense");
      case 19:
        return oa("SuspenseList");
      case 0:
      case 15:
        return Io(t.type, !1);
      case 11:
        return Io(t.type.render, !1);
      case 1:
        return Io(t.type, !0);
      case 31:
        return oa("Activity");
      default:
        return "";
    }
  }
  function Rh(t) {
    try {
      var e = "";
      do (e += B1(t)), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function qe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Dh(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function k1(t) {
    var e = Dh(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var c = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            (l = "" + y), u.call(this, y);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Xl(t) {
    t._valueTracker || (t._valueTracker = k1(t));
  }
  function Oh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      l = "";
    return (
      t && (l = Dh(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function Kl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var U1 = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(U1, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function tc(t, e, a, l, c, u, y, b) {
    (t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      e != null
        ? y === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + qe(e))
          : t.value !== "" + qe(e) && (t.value = "" + qe(e))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      e != null
        ? ec(t, y, qe(e))
        : a != null
        ? ec(t, y, qe(a))
        : l != null && t.removeAttribute("value"),
      c == null && u != null && (t.defaultChecked = !!u),
      c != null &&
        (t.checked = c && typeof c != "function" && typeof c != "symbol"),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (t.name = "" + qe(b))
        : t.removeAttribute("name");
  }
  function Nh(t, e, a, l, c, u, y, b) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (a = a != null ? "" + qe(a) : ""),
        (e = e != null ? "" + qe(e) : a),
        b || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? c),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = b ? t.checked : !!l),
      (t.defaultChecked = !!l),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y);
  }
  function ec(t, e, a) {
    (e === "number" && Kl(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function ca(t, e, a, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var c = 0; c < a.length; c++) e["$" + a[c]] = !0;
      for (a = 0; a < t.length; a++)
        (c = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== c && (t[a].selected = c),
          c && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + qe(a), e = null, c = 0; c < t.length; c++) {
        if (t[c].value === a) {
          (t[c].selected = !0), l && (t[c].defaultSelected = !0);
          return;
        }
        e !== null || t[c].disabled || (e = t[c]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function _h(t, e, a) {
    if (
      e != null &&
      ((e = "" + qe(e)), e !== t.value && (t.value = e), a == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + qe(a) : "";
  }
  function jh(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (ct(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), (e = a);
    }
    (a = qe(e)),
      (t.defaultValue = a),
      (l = t.textContent),
      l === a && l !== "" && l !== null && (t.value = l);
  }
  function ua(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var H1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zh(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : l
      ? t.setProperty(e, a)
      : typeof a != "number" || a === 0 || H1.has(e)
      ? e === "float"
        ? (t.cssFloat = a)
        : (t[e] = ("" + a).trim())
      : (t[e] = a + "px");
  }
  function Vh(t, e, a) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var c in e)
        (l = e[c]), e.hasOwnProperty(c) && a[c] !== l && zh(t, c, l);
    } else for (var u in e) e.hasOwnProperty(u) && zh(t, u, e[u]);
  }
  function nc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var P1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Y1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zl(t) {
    return Y1.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var ic = null;
  function ac(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var fa = null,
    da = null;
  function Lh(t) {
    var e = sa(t);
    if (e && (t = e.stateNode)) {
      var a = t[we] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (tc(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ge("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < a.length;
              e++
            ) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var c = l[we] || null;
                if (!c) throw Error(r(90));
                tc(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              (l = a[e]), l.form === t.form && Oh(l);
          }
          break t;
        case "textarea":
          _h(t, a.value, a.defaultValue);
          break t;
        case "select":
          (e = a.value), e != null && ca(t, !!a.multiple, e, !1);
      }
    }
  }
  var sc = !1;
  function Bh(t, e, a) {
    if (sc) return t(e, a);
    sc = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((sc = !1),
        (fa !== null || da !== null) &&
          (_r(), fa && ((e = fa), (t = da), (da = fa = null), Lh(e), t)))
      )
        for (e = 0; e < t.length; e++) Lh(t[e]);
    }
  }
  function ys(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[we] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, e, typeof a));
    return a;
  }
  var En = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    lc = !1;
  if (En)
    try {
      var vs = {};
      Object.defineProperty(vs, "passive", {
        get: function () {
          lc = !0;
        },
      }),
        window.addEventListener("test", vs, vs),
        window.removeEventListener("test", vs, vs);
    } catch {
      lc = !1;
    }
  var Kn = null,
    rc = null,
    Ql = null;
  function kh() {
    if (Ql) return Ql;
    var t,
      e = rc,
      a = e.length,
      l,
      c = "value" in Kn ? Kn.value : Kn.textContent,
      u = c.length;
    for (t = 0; t < a && e[t] === c[t]; t++);
    var y = a - t;
    for (l = 1; l <= y && e[a - l] === c[u - l]; l++);
    return (Ql = c.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Fl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wl() {
    return !0;
  }
  function Uh() {
    return !1;
  }
  function Ae(t) {
    function e(a, l, c, u, y) {
      (this._reactName = a),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = y),
        (this.currentTarget = null);
      for (var b in t)
        t.hasOwnProperty(b) && ((a = t[b]), (this[b] = a ? a(u) : u[b]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Wl
          : Uh),
        (this.isPropagationStopped = Uh),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Wl));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Wl));
        },
        persist: function () {},
        isPersistent: Wl,
      }),
      e
    );
  }
  var Oi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $l = Ae(Oi),
    bs = g({}, Oi, { view: 0, detail: 0 }),
    q1 = Ae(bs),
    oc,
    cc,
    xs,
    Jl = g({}, bs, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== xs &&
              (xs && t.type === "mousemove"
                ? ((oc = t.screenX - xs.screenX), (cc = t.screenY - xs.screenY))
                : (cc = oc = 0),
              (xs = t)),
            oc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : cc;
      },
    }),
    Hh = Ae(Jl),
    G1 = g({}, Jl, { dataTransfer: 0 }),
    X1 = Ae(G1),
    K1 = g({}, bs, { relatedTarget: 0 }),
    uc = Ae(K1),
    Z1 = g({}, Oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Q1 = Ae(Z1),
    F1 = g({}, Oi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    W1 = Ae(F1),
    $1 = g({}, Oi, { data: 0 }),
    Ph = Ae($1),
    J1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    I1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    tS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function eS(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = tS[t])
      ? !!e[t]
      : !1;
  }
  function fc() {
    return eS;
  }
  var nS = g({}, bs, {
      key: function (t) {
        if (t.key) {
          var e = J1[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Fl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? I1[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fc,
      charCode: function (t) {
        return t.type === "keypress" ? Fl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Fl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    iS = Ae(nS),
    aS = g({}, Jl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Yh = Ae(aS),
    sS = g({}, bs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fc,
    }),
    lS = Ae(sS),
    rS = g({}, Oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oS = Ae(rS),
    cS = g({}, Jl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    uS = Ae(cS),
    fS = g({}, Oi, { newState: 0, oldState: 0 }),
    dS = Ae(fS),
    hS = [9, 13, 27, 32],
    dc = En && "CompositionEvent" in window,
    Ss = null;
  En && "documentMode" in document && (Ss = document.documentMode);
  var mS = En && "TextEvent" in window && !Ss,
    qh = En && (!dc || (Ss && 8 < Ss && 11 >= Ss)),
    Gh = " ",
    Xh = !1;
  function Kh(t, e) {
    switch (t) {
      case "keyup":
        return hS.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zh(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ha = !1;
  function pS(t, e) {
    switch (t) {
      case "compositionend":
        return Zh(e);
      case "keypress":
        return e.which !== 32 ? null : ((Xh = !0), Gh);
      case "textInput":
        return (t = e.data), t === Gh && Xh ? null : t;
      default:
        return null;
    }
  }
  function gS(t, e) {
    if (ha)
      return t === "compositionend" || (!dc && Kh(t, e))
        ? ((t = kh()), (Ql = rc = Kn = null), (ha = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return qh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var yS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!yS[t.type] : e === "textarea";
  }
  function Fh(t, e, a, l) {
    fa ? (da ? da.push(l) : (da = [l])) : (fa = l),
      (e = kr(e, "onChange")),
      0 < e.length &&
        ((a = new $l("onChange", "change", null, a, l)),
        t.push({ event: a, listeners: e }));
  }
  var Ts = null,
    ws = null;
  function vS(t) {
    Dg(t, 0);
  }
  function Il(t) {
    var e = gs(t);
    if (Oh(e)) return t;
  }
  function Wh(t, e) {
    if (t === "change") return e;
  }
  var $h = !1;
  if (En) {
    var hc;
    if (En) {
      var mc = "oninput" in document;
      if (!mc) {
        var Jh = document.createElement("div");
        Jh.setAttribute("oninput", "return;"),
          (mc = typeof Jh.oninput == "function");
      }
      hc = mc;
    } else hc = !1;
    $h = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ih() {
    Ts && (Ts.detachEvent("onpropertychange", tm), (ws = Ts = null));
  }
  function tm(t) {
    if (t.propertyName === "value" && Il(ws)) {
      var e = [];
      Fh(e, ws, t, ac(t)), Bh(vS, e);
    }
  }
  function bS(t, e, a) {
    t === "focusin"
      ? (Ih(), (Ts = e), (ws = a), Ts.attachEvent("onpropertychange", tm))
      : t === "focusout" && Ih();
  }
  function xS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Il(ws);
  }
  function SS(t, e) {
    if (t === "click") return Il(e);
  }
  function TS(t, e) {
    if (t === "input" || t === "change") return Il(e);
  }
  function wS(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var je = typeof Object.is == "function" ? Object.is : wS;
  function As(t, e) {
    if (je(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var a = Object.keys(t),
      l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!At.call(e, c) || !je(t[c], e[c])) return !1;
    }
    return !0;
  }
  function em(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function nm(t, e) {
    var a = em(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = t + a.textContent.length), t <= e && l >= e))
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = em(a);
    }
  }
  function im(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? im(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function am(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Kl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Kl(t.document);
    }
    return e;
  }
  function pc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var AS = En && "documentMode" in document && 11 >= document.documentMode,
    ma = null,
    gc = null,
    Es = null,
    yc = !1;
  function sm(t, e, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yc ||
      ma == null ||
      ma !== Kl(l) ||
      ((l = ma),
      "selectionStart" in l && pc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Es && As(Es, l)) ||
        ((Es = l),
        (l = kr(gc, "onSelect")),
        0 < l.length &&
          ((e = new $l("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: l }),
          (e.target = ma))));
  }
  function Ni(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var pa = {
      animationend: Ni("Animation", "AnimationEnd"),
      animationiteration: Ni("Animation", "AnimationIteration"),
      animationstart: Ni("Animation", "AnimationStart"),
      transitionrun: Ni("Transition", "TransitionRun"),
      transitionstart: Ni("Transition", "TransitionStart"),
      transitioncancel: Ni("Transition", "TransitionCancel"),
      transitionend: Ni("Transition", "TransitionEnd"),
    },
    vc = {},
    lm = {};
  En &&
    ((lm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete pa.animationend.animation,
      delete pa.animationiteration.animation,
      delete pa.animationstart.animation),
    "TransitionEvent" in window || delete pa.transitionend.transition);
  function _i(t) {
    if (vc[t]) return vc[t];
    if (!pa[t]) return t;
    var e = pa[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in lm) return (vc[t] = e[a]);
    return t;
  }
  var rm = _i("animationend"),
    om = _i("animationiteration"),
    cm = _i("animationstart"),
    ES = _i("transitionrun"),
    MS = _i("transitionstart"),
    CS = _i("transitioncancel"),
    um = _i("transitionend"),
    fm = new Map(),
    bc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  bc.push("scrollEnd");
  function en(t, e) {
    fm.set(t, e), Di(e, [t]);
  }
  var dm = new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = dm.get(t);
      return a !== void 0
        ? a
        : ((e = { value: t, source: e, stack: Rh(e) }), dm.set(t, e), e);
    }
    return { value: t, source: e, stack: Rh(e) };
  }
  var Ke = [],
    ga = 0,
    xc = 0;
  function tr() {
    for (var t = ga, e = (xc = ga = 0); e < t; ) {
      var a = Ke[e];
      Ke[e++] = null;
      var l = Ke[e];
      Ke[e++] = null;
      var c = Ke[e];
      Ke[e++] = null;
      var u = Ke[e];
      if (((Ke[e++] = null), l !== null && c !== null)) {
        var y = l.pending;
        y === null ? (c.next = c) : ((c.next = y.next), (y.next = c)),
          (l.pending = c);
      }
      u !== 0 && hm(a, c, u);
    }
  }
  function er(t, e, a, l) {
    (Ke[ga++] = t),
      (Ke[ga++] = e),
      (Ke[ga++] = a),
      (Ke[ga++] = l),
      (xc |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function Sc(t, e, a, l) {
    return er(t, e, a, l), nr(t);
  }
  function ya(t, e) {
    return er(t, null, null, e), nr(t);
  }
  function hm(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, u = t.return; u !== null; )
      (u.childLanes |= a),
        (l = u.alternate),
        l !== null && (l.childLanes |= a),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (c = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        c &&
          e !== null &&
          ((c = 31 - _e(a)),
          (t = u.hiddenUpdates),
          (l = t[c]),
          l === null ? (t[c] = [e]) : l.push(e),
          (e.lane = a | 536870912)),
        u)
      : null;
  }
  function nr(t) {
    if (50 < Ws) throw ((Ws = 0), (Cu = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var va = {};
  function RS(t, e, a, l) {
    (this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ze(t, e, a, l) {
    return new RS(t, e, a, l);
  }
  function Tc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Mn(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = ze(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function mm(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ir(t, e, a, l, c, u) {
    var y = 0;
    if (((l = t), typeof t == "function")) Tc(t) && (y = 1);
    else if (typeof t == "string")
      y = OT(t, a, I.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case tt:
          return (t = ze(31, a, e, c)), (t.elementType = tt), (t.lanes = u), t;
        case D:
          return ji(a.children, c, u, e);
        case w:
          (y = 8), (c |= 24);
          break;
        case E:
          return (
            (t = ze(12, a, e, c | 2)), (t.elementType = E), (t.lanes = u), t
          );
        case z:
          return (t = ze(13, a, e, c)), (t.elementType = z), (t.lanes = u), t;
        case Q:
          return (t = ze(19, a, e, c)), (t.elementType = Q), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case M:
              case N:
                y = 10;
                break t;
              case _:
                y = 9;
                break t;
              case Y:
                y = 11;
                break t;
              case Z:
                y = 14;
                break t;
              case P:
                (y = 16), (l = null);
                break t;
            }
          (y = 29),
            (a = Error(r(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = ze(y, a, e, c)), (e.elementType = t), (e.type = l), (e.lanes = u), e
    );
  }
  function ji(t, e, a, l) {
    return (t = ze(7, t, l, e)), (t.lanes = a), t;
  }
  function wc(t, e, a) {
    return (t = ze(6, t, null, e)), (t.lanes = a), t;
  }
  function Ac(t, e, a) {
    return (
      (e = ze(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ba = [],
    xa = 0,
    ar = null,
    sr = 0,
    Ze = [],
    Qe = 0,
    zi = null,
    Cn = 1,
    Rn = "";
  function Vi(t, e) {
    (ba[xa++] = sr), (ba[xa++] = ar), (ar = t), (sr = e);
  }
  function pm(t, e, a) {
    (Ze[Qe++] = Cn), (Ze[Qe++] = Rn), (Ze[Qe++] = zi), (zi = t);
    var l = Cn;
    t = Rn;
    var c = 32 - _e(l) - 1;
    (l &= ~(1 << c)), (a += 1);
    var u = 32 - _e(e) + c;
    if (30 < u) {
      var y = c - (c % 5);
      (u = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (c -= y),
        (Cn = (1 << (32 - _e(e) + c)) | (a << c) | l),
        (Rn = u + t);
    } else (Cn = (1 << u) | (a << c) | l), (Rn = t);
  }
  function Ec(t) {
    t.return !== null && (Vi(t, 1), pm(t, 1, 0));
  }
  function Mc(t) {
    for (; t === ar; )
      (ar = ba[--xa]), (ba[xa] = null), (sr = ba[--xa]), (ba[xa] = null);
    for (; t === zi; )
      (zi = Ze[--Qe]),
        (Ze[Qe] = null),
        (Rn = Ze[--Qe]),
        (Ze[Qe] = null),
        (Cn = Ze[--Qe]),
        (Ze[Qe] = null);
  }
  var be = null,
    qt = null,
    Ot = !1,
    Li = null,
    fn = !1,
    Cc = Error(r(519));
  function Bi(t) {
    var e = Error(r(418, ""));
    throw (Rs(Xe(e, t)), Cc);
  }
  function gm(t) {
    var e = t.stateNode,
      a = t.type,
      l = t.memoizedProps;
    switch (((e[me] = t), (e[we] = l), a)) {
      case "dialog":
        Mt("cancel", e), Mt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Mt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Js.length; a++) Mt(Js[a], e);
        break;
      case "source":
        Mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Mt("error", e), Mt("load", e);
        break;
      case "details":
        Mt("toggle", e);
        break;
      case "input":
        Mt("invalid", e),
          Nh(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Xl(e);
        break;
      case "select":
        Mt("invalid", e);
        break;
      case "textarea":
        Mt("invalid", e), jh(e, l.value, l.defaultValue, l.children), Xl(e);
    }
    (a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      jg(e.textContent, a)
        ? (l.popover != null && (Mt("beforetoggle", e), Mt("toggle", e)),
          l.onScroll != null && Mt("scroll", e),
          l.onScrollEnd != null && Mt("scrollend", e),
          l.onClick != null && (e.onclick = Ur),
          (e = !0))
        : (e = !1),
      e || Bi(t);
  }
  function ym(t) {
    for (be = t.return; be; )
      switch (be.tag) {
        case 5:
        case 13:
          fn = !1;
          return;
        case 27:
        case 3:
          fn = !0;
          return;
        default:
          be = be.return;
      }
  }
  function Ms(t) {
    if (t !== be) return !1;
    if (!Ot) return ym(t), (Ot = !0), !1;
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || qu(t.type, t.memoizedProps))),
        (a = !a)),
      a && qt && Bi(t),
      ym(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (e === 0) {
                qt = an(t.nextSibling);
                break t;
              }
              e--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || e++;
          t = t.nextSibling;
        }
        qt = null;
      }
    } else
      e === 27
        ? ((e = qt), oi(t.type) ? ((t = Zu), (Zu = null), (qt = t)) : (qt = e))
        : (qt = be ? an(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Cs() {
    (qt = be = null), (Ot = !1);
  }
  function vm() {
    var t = Li;
    return (
      t !== null &&
        (Ce === null ? (Ce = t) : Ce.push.apply(Ce, t), (Li = null)),
      t
    );
  }
  function Rs(t) {
    Li === null ? (Li = [t]) : Li.push(t);
  }
  var Rc = X(null),
    ki = null,
    Dn = null;
  function Zn(t, e, a) {
    W(Rc, e._currentValue), (e._currentValue = a);
  }
  function On(t) {
    (t._currentValue = Rc.current), $(Rc);
  }
  function Dc(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Oc(t, e, a, l) {
    var c = t.child;
    for (c !== null && (c.return = t); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var y = c.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var b = u;
          u = c;
          for (var C = 0; C < e.length; C++)
            if (b.context === e[C]) {
              (u.lanes |= a),
                (b = u.alternate),
                b !== null && (b.lanes |= a),
                Dc(u.return, a, t),
                l || (y = null);
              break t;
            }
          u = b.next;
        }
      } else if (c.tag === 18) {
        if (((y = c.return), y === null)) throw Error(r(341));
        (y.lanes |= a),
          (u = y.alternate),
          u !== null && (u.lanes |= a),
          Dc(y, a, t),
          (y = null);
      } else y = c.child;
      if (y !== null) y.return = c;
      else
        for (y = c; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((c = y.sibling), c !== null)) {
            (c.return = y.return), (y = c);
            break;
          }
          y = y.return;
        }
      c = y;
    }
  }
  function Ds(t, e, a, l) {
    t = null;
    for (var c = e, u = !1; c !== null; ) {
      if (!u) {
        if ((c.flags & 524288) !== 0) u = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var y = c.alternate;
        if (y === null) throw Error(r(387));
        if (((y = y.memoizedProps), y !== null)) {
          var b = c.type;
          je(c.pendingProps.value, y.value) ||
            (t !== null ? t.push(b) : (t = [b]));
        }
      } else if (c === J.current) {
        if (((y = c.alternate), y === null)) throw Error(r(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (t !== null ? t.push(al) : (t = [al]));
      }
      c = c.return;
    }
    t !== null && Oc(e, t, a, l), (e.flags |= 262144);
  }
  function lr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!je(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ui(t) {
    (ki = t),
      (Dn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function pe(t) {
    return bm(ki, t);
  }
  function rr(t, e) {
    return ki === null && Ui(t), bm(t, e);
  }
  function bm(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), Dn === null)) {
      if (t === null) throw Error(r(308));
      (Dn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Dn = Dn.next = e;
    return a;
  }
  var DS =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                });
            };
          },
    OS = n.unstable_scheduleCallback,
    NS = n.unstable_NormalPriority,
    te = {
      $$typeof: N,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Nc() {
    return { controller: new DS(), data: new Map(), refCount: 0 };
  }
  function Os(t) {
    t.refCount--,
      t.refCount === 0 &&
        OS(NS, function () {
          t.controller.abort();
        });
  }
  var Ns = null,
    _c = 0,
    Sa = 0,
    Ta = null;
  function _S(t, e) {
    if (Ns === null) {
      var a = (Ns = []);
      (_c = 0),
        (Sa = zu()),
        (Ta = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        });
    }
    return _c++, e.then(xm, xm), e;
  }
  function xm() {
    if (--_c === 0 && Ns !== null) {
      Ta !== null && (Ta.status = "fulfilled");
      var t = Ns;
      (Ns = null), (Sa = 0), (Ta = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function jS(t, e) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          a.push(c);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var c = 0; c < a.length; c++) (0, a[c])(e);
        },
        function (c) {
          for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++)
            (0, a[c])(void 0);
        }
      ),
      l
    );
  }
  var Sm = V.S;
  V.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      _S(t, e),
      Sm !== null && Sm(t, e);
  };
  var Hi = X(null);
  function jc() {
    var t = Hi.current;
    return t !== null ? t : Ut.pooledCache;
  }
  function or(t, e) {
    e === null ? W(Hi, Hi.current) : W(Hi, e.pool);
  }
  function Tm() {
    var t = jc();
    return t === null ? null : { parent: te._currentValue, pool: t };
  }
  var _s = Error(r(460)),
    wm = Error(r(474)),
    cr = Error(r(542)),
    zc = { then: function () {} };
  function Am(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function ur() {}
  function Em(t, e, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(e) : a !== e && (e.then(ur, ur), (e = a)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Cm(t), t);
      default:
        if (typeof e.status == "string") e.then(ur, ur);
        else {
          if (((t = Ut), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var c = e;
                  (c.status = "fulfilled"), (c.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var c = e;
                  (c.status = "rejected"), (c.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Cm(t), t);
        }
        throw ((js = e), _s);
    }
  }
  var js = null;
  function Mm() {
    if (js === null) throw Error(r(459));
    var t = js;
    return (js = null), t;
  }
  function Cm(t) {
    if (t === _s || t === cr) throw Error(r(483));
  }
  var Qn = !1;
  function Vc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Lc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Fn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Wn(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (_t & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
        (l.pending = e),
        (e = nr(t)),
        hm(t, null, a),
        e
      );
    }
    return er(t, l, e, a), nr(t);
  }
  function zs(t, e, a) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (a |= l), (e.lanes = a), xh(t, a);
    }
  }
  function Bc(t, e) {
    var a = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var c = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          u === null ? (c = u = y) : (u = u.next = y), (a = a.next);
        } while (a !== null);
        u === null ? (c = u = e) : (u = u.next = e);
      } else c = u = e;
      (a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = a);
      return;
    }
    (t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e);
  }
  var kc = !1;
  function Vs() {
    if (kc) {
      var t = Ta;
      if (t !== null) throw t;
    }
  }
  function Ls(t, e, a, l) {
    kc = !1;
    var c = t.updateQueue;
    Qn = !1;
    var u = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var C = b,
        B = C.next;
      (C.next = null), y === null ? (u = B) : (y.next = B), (y = C);
      var G = t.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (b = G.lastBaseUpdate),
        b !== y &&
          (b === null ? (G.firstBaseUpdate = B) : (b.next = B),
          (G.lastBaseUpdate = C)));
    }
    if (u !== null) {
      var F = c.baseState;
      (y = 0), (G = B = C = null), (b = u);
      do {
        var k = b.lane & -536870913,
          H = k !== b.lane;
        if (H ? (Rt & k) === k : (l & k) === k) {
          k !== 0 && k === Sa && (kc = !0),
            G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var ht = t,
              ut = b;
            k = e;
            var Lt = a;
            switch (ut.tag) {
              case 1:
                if (((ht = ut.payload), typeof ht == "function")) {
                  F = ht.call(Lt, F, k);
                  break t;
                }
                F = ht;
                break t;
              case 3:
                ht.flags = (ht.flags & -65537) | 128;
              case 0:
                if (
                  ((ht = ut.payload),
                  (k = typeof ht == "function" ? ht.call(Lt, F, k) : ht),
                  k == null)
                )
                  break t;
                F = g({}, F, k);
                break t;
              case 2:
                Qn = !0;
            }
          }
          (k = b.callback),
            k !== null &&
              ((t.flags |= 64),
              H && (t.flags |= 8192),
              (H = c.callbacks),
              H === null ? (c.callbacks = [k]) : H.push(k));
        } else
          (H = {
            lane: k,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            G === null ? ((B = G = H), (C = F)) : (G = G.next = H),
            (y |= k);
        if (((b = b.next), b === null)) {
          if (((b = c.shared.pending), b === null)) break;
          (H = b),
            (b = H.next),
            (H.next = null),
            (c.lastBaseUpdate = H),
            (c.shared.pending = null);
        }
      } while (!0);
      G === null && (C = F),
        (c.baseState = C),
        (c.firstBaseUpdate = B),
        (c.lastBaseUpdate = G),
        u === null && (c.shared.lanes = 0),
        (ai |= y),
        (t.lanes = y),
        (t.memoizedState = F);
    }
  }
  function Rm(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Dm(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) Rm(a[t], e);
  }
  var wa = X(null),
    fr = X(0);
  function Om(t, e) {
    (t = Bn), W(fr, t), W(wa, e), (Bn = t | e.baseLanes);
  }
  function Uc() {
    W(fr, Bn), W(wa, wa.current);
  }
  function Hc() {
    (Bn = fr.current), $(wa), $(fr);
  }
  var $n = 0,
    xt = null,
    zt = null,
    $t = null,
    dr = !1,
    Aa = !1,
    Pi = !1,
    hr = 0,
    Bs = 0,
    Ea = null,
    zS = 0;
  function Qt() {
    throw Error(r(321));
  }
  function Pc(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!je(t[a], e[a])) return !1;
    return !0;
  }
  function Yc(t, e, a, l, c, u) {
    return (
      ($n = u),
      (xt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (V.H = t === null || t.memoizedState === null ? hp : mp),
      (Pi = !1),
      (u = a(l, c)),
      (Pi = !1),
      Aa && (u = _m(e, a, l, c)),
      Nm(t),
      u
    );
  }
  function Nm(t) {
    V.H = br;
    var e = zt !== null && zt.next !== null;
    if ((($n = 0), ($t = zt = xt = null), (dr = !1), (Bs = 0), (Ea = null), e))
      throw Error(r(300));
    t === null ||
      ae ||
      ((t = t.dependencies), t !== null && lr(t) && (ae = !0));
  }
  function _m(t, e, a, l) {
    xt = t;
    var c = 0;
    do {
      if ((Aa && (Ea = null), (Bs = 0), (Aa = !1), 25 <= c))
        throw Error(r(301));
      if (((c += 1), ($t = zt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (V.H = PS), (u = e(a, l));
    } while (Aa);
    return u;
  }
  function VS() {
    var t = V.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ks(e) : e),
      (t = t.useState()[0]),
      (zt !== null ? zt.memoizedState : null) !== t && (xt.flags |= 1024),
      e
    );
  }
  function qc() {
    var t = hr !== 0;
    return (hr = 0), t;
  }
  function Gc(t, e, a) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a);
  }
  function Xc(t) {
    if (dr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      dr = !1;
    }
    ($n = 0), ($t = zt = xt = null), (Aa = !1), (Bs = hr = 0), (Ea = null);
  }
  function Ee() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return $t === null ? (xt.memoizedState = $t = t) : ($t = $t.next = t), $t;
  }
  function Jt() {
    if (zt === null) {
      var t = xt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = zt.next;
    var e = $t === null ? xt.memoizedState : $t.next;
    if (e !== null) ($t = e), (zt = t);
    else {
      if (t === null)
        throw xt.alternate === null ? Error(r(467)) : Error(r(310));
      (zt = t),
        (t = {
          memoizedState: zt.memoizedState,
          baseState: zt.baseState,
          baseQueue: zt.baseQueue,
          queue: zt.queue,
          next: null,
        }),
        $t === null ? (xt.memoizedState = $t = t) : ($t = $t.next = t);
    }
    return $t;
  }
  function Kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ks(t) {
    var e = Bs;
    return (
      (Bs += 1),
      Ea === null && (Ea = []),
      (t = Em(Ea, t, e)),
      (e = xt),
      ($t === null ? e.memoizedState : $t.next) === null &&
        ((e = e.alternate),
        (V.H = e === null || e.memoizedState === null ? hp : mp)),
      t
    );
  }
  function mr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ks(t);
      if (t.$$typeof === N) return pe(t);
    }
    throw Error(r(438, String(t)));
  }
  function Zc(t) {
    var e = null,
      a = xt.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var l = xt.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = Kc()), (xt.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = lt;
    return e.index++, a;
  }
  function Nn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function pr(t) {
    var e = Jt();
    return Qc(e, zt, t);
  }
  function Qc(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var c = t.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (c !== null) {
        var y = c.next;
        (c.next = u.next), (u.next = y);
      }
      (e.baseQueue = c = u), (l.pending = null);
    }
    if (((u = t.baseState), c === null)) t.memoizedState = u;
    else {
      e = c.next;
      var b = (y = null),
        C = null,
        B = e,
        G = !1;
      do {
        var F = B.lane & -536870913;
        if (F !== B.lane ? (Rt & F) === F : ($n & F) === F) {
          var k = B.revertLane;
          if (k === 0)
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              F === Sa && (G = !0);
          else if (($n & k) === k) {
            (B = B.next), k === Sa && (G = !0);
            continue;
          } else
            (F = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              C === null ? ((b = C = F), (y = u)) : (C = C.next = F),
              (xt.lanes |= k),
              (ai |= k);
          (F = B.action),
            Pi && a(u, F),
            (u = B.hasEagerState ? B.eagerState : a(u, F));
        } else
          (k = {
            lane: F,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            C === null ? ((b = C = k), (y = u)) : (C = C.next = k),
            (xt.lanes |= F),
            (ai |= F);
        B = B.next;
      } while (B !== null && B !== e);
      if (
        (C === null ? (y = u) : (C.next = b),
        !je(u, t.memoizedState) && ((ae = !0), G && ((a = Ta), a !== null)))
      )
        throw a;
      (t.memoizedState = u),
        (t.baseState = y),
        (t.baseQueue = C),
        (l.lastRenderedState = u);
    }
    return c === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Fc(t) {
    var e = Jt(),
      a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch,
      c = a.pending,
      u = e.memoizedState;
    if (c !== null) {
      a.pending = null;
      var y = (c = c.next);
      do (u = t(u, y.action)), (y = y.next);
      while (y !== c);
      je(u, e.memoizedState) || (ae = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (a.lastRenderedState = u);
    }
    return [u, l];
  }
  function jm(t, e, a) {
    var l = xt,
      c = Jt(),
      u = Ot;
    if (u) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var y = !je((zt || c).memoizedState, a);
    y && ((c.memoizedState = a), (ae = !0)), (c = c.queue);
    var b = Lm.bind(null, l, c, t);
    if (
      (Us(2048, 8, b, [t]),
      c.getSnapshot !== e || y || ($t !== null && $t.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Ma(9, gr(), Vm.bind(null, l, c, a, e), null),
        Ut === null)
      )
        throw Error(r(349));
      u || ($n & 124) !== 0 || zm(l, e, a);
    }
    return a;
  }
  function zm(t, e, a) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = xt.updateQueue),
      e === null
        ? ((e = Kc()), (xt.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t));
  }
  function Vm(t, e, a, l) {
    (e.value = a), (e.getSnapshot = l), Bm(e) && km(t);
  }
  function Lm(t, e, a) {
    return a(function () {
      Bm(e) && km(t);
    });
  }
  function Bm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !je(t, a);
    } catch {
      return !0;
    }
  }
  function km(t) {
    var e = ya(t, 2);
    e !== null && Ue(e, t, 2);
  }
  function Wc(t) {
    var e = Ee();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), Pi)) {
        Gn(!0);
        try {
          a();
        } finally {
          Gn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Um(t, e, a, l) {
    return (t.baseState = a), Qc(t, zt, typeof l == "function" ? l : Nn);
  }
  function LS(t, e, a, l, c) {
    if (vr(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: c,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          u.listeners.push(y);
        },
      };
      V.T !== null ? a(!0) : (u.isTransition = !1),
        l(u),
        (a = e.pending),
        a === null
          ? ((u.next = e.pending = u), Hm(e, u))
          : ((u.next = a.next), (e.pending = a.next = u));
    }
  }
  function Hm(t, e) {
    var a = e.action,
      l = e.payload,
      c = t.state;
    if (e.isTransition) {
      var u = V.T,
        y = {};
      V.T = y;
      try {
        var b = a(c, l),
          C = V.S;
        C !== null && C(y, b), Pm(t, e, b);
      } catch (B) {
        $c(t, e, B);
      } finally {
        V.T = u;
      }
    } else
      try {
        (u = a(c, l)), Pm(t, e, u);
      } catch (B) {
        $c(t, e, B);
      }
  }
  function Pm(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Ym(t, e, l);
          },
          function (l) {
            return $c(t, e, l);
          }
        )
      : Ym(t, e, a);
  }
  function Ym(t, e, a) {
    (e.status = "fulfilled"),
      (e.value = a),
      qm(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next),
        a === e ? (t.pending = null) : ((a = a.next), (e.next = a), Hm(t, a)));
  }
  function $c(t, e, a) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = a), qm(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function qm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gm(t, e) {
    return e;
  }
  function Xm(t, e) {
    if (Ot) {
      var a = Ut.formState;
      if (a !== null) {
        t: {
          var l = xt;
          if (Ot) {
            if (qt) {
              e: {
                for (var c = qt, u = fn; c.nodeType !== 8; ) {
                  if (!u) {
                    c = null;
                    break e;
                  }
                  if (((c = an(c.nextSibling)), c === null)) {
                    c = null;
                    break e;
                  }
                }
                (u = c.data), (c = u === "F!" || u === "F" ? c : null);
              }
              if (c) {
                (qt = an(c.nextSibling)), (l = c.data === "F!");
                break t;
              }
            }
            Bi(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return (
      (a = Ee()),
      (a.memoizedState = a.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gm,
        lastRenderedState: e,
      }),
      (a.queue = l),
      (a = up.bind(null, xt, l)),
      (l.dispatch = a),
      (l = Wc(!1)),
      (u = nu.bind(null, xt, !1, l.queue)),
      (l = Ee()),
      (c = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = c),
      (a = LS.bind(null, xt, c, u, a)),
      (c.dispatch = a),
      (l.memoizedState = t),
      [e, a, !1]
    );
  }
  function Km(t) {
    var e = Jt();
    return Zm(e, zt, t);
  }
  function Zm(t, e, a) {
    if (
      ((e = Qc(t, e, Gm)[0]),
      (t = pr(Nn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = ks(e);
      } catch (y) {
        throw y === _s ? cr : y;
      }
    else l = e;
    e = Jt();
    var c = e.queue,
      u = c.dispatch;
    return (
      a !== e.memoizedState &&
        ((xt.flags |= 2048), Ma(9, gr(), BS.bind(null, c, a), null)),
      [l, u, t]
    );
  }
  function BS(t, e) {
    t.action = e;
  }
  function Qm(t) {
    var e = Jt(),
      a = zt;
    if (a !== null) return Zm(e, a, t);
    Jt(), (e = e.memoizedState), (a = Jt());
    var l = a.queue.dispatch;
    return (a.memoizedState = t), [e, l, !1];
  }
  function Ma(t, e, a, l) {
    return (
      (t = { tag: t, create: a, deps: l, inst: e, next: null }),
      (e = xt.updateQueue),
      e === null && ((e = Kc()), (xt.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((l = a.next), (a.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function gr() {
    return { destroy: void 0, resource: void 0 };
  }
  function Fm() {
    return Jt().memoizedState;
  }
  function yr(t, e, a, l) {
    var c = Ee();
    (l = l === void 0 ? null : l),
      (xt.flags |= t),
      (c.memoizedState = Ma(1 | e, gr(), a, l));
  }
  function Us(t, e, a, l) {
    var c = Jt();
    l = l === void 0 ? null : l;
    var u = c.memoizedState.inst;
    zt !== null && l !== null && Pc(l, zt.memoizedState.deps)
      ? (c.memoizedState = Ma(e, u, a, l))
      : ((xt.flags |= t), (c.memoizedState = Ma(1 | e, u, a, l)));
  }
  function Wm(t, e) {
    yr(8390656, 8, t, e);
  }
  function $m(t, e) {
    Us(2048, 8, t, e);
  }
  function Jm(t, e) {
    return Us(4, 2, t, e);
  }
  function Im(t, e) {
    return Us(4, 4, t, e);
  }
  function tp(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function ep(t, e, a) {
    (a = a != null ? a.concat([t]) : null), Us(4, 4, tp.bind(null, e, t), a);
  }
  function Jc() {}
  function np(t, e) {
    var a = Jt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && Pc(e, l[1]) ? l[0] : ((a.memoizedState = [t, e]), t);
  }
  function ip(t, e) {
    var a = Jt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && Pc(e, l[1])) return l[0];
    if (((l = t()), Pi)) {
      Gn(!0);
      try {
        t();
      } finally {
        Gn(!1);
      }
    }
    return (a.memoizedState = [l, e]), l;
  }
  function Ic(t, e, a) {
    return a === void 0 || ($n & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = lg()), (xt.lanes |= t), (ai |= t), a);
  }
  function ap(t, e, a, l) {
    return je(a, e)
      ? a
      : wa.current !== null
      ? ((t = Ic(t, a, l)), je(t, e) || (ae = !0), t)
      : ($n & 42) === 0
      ? ((ae = !0), (t.memoizedState = a))
      : ((t = lg()), (xt.lanes |= t), (ai |= t), e);
  }
  function sp(t, e, a, l, c) {
    var u = q.p;
    q.p = u !== 0 && 8 > u ? u : 8;
    var y = V.T,
      b = {};
    (V.T = b), nu(t, !1, e, a);
    try {
      var C = c(),
        B = V.S;
      if (
        (B !== null && B(b, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var G = jS(C, l);
        Hs(t, e, G, ke(t));
      } else Hs(t, e, l, ke(t));
    } catch (F) {
      Hs(t, e, { then: function () {}, status: "rejected", reason: F }, ke());
    } finally {
      (q.p = u), (V.T = y);
    }
  }
  function kS() {}
  function tu(t, e, a, l) {
    if (t.tag !== 5) throw Error(r(476));
    var c = lp(t).queue;
    sp(
      t,
      c,
      e,
      U,
      a === null
        ? kS
        : function () {
            return rp(t), a(l);
          }
    );
  }
  function lp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: U,
      baseState: U,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nn,
        lastRenderedState: U,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Nn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function rp(t) {
    var e = lp(t).next.queue;
    Hs(t, e, {}, ke());
  }
  function eu() {
    return pe(al);
  }
  function op() {
    return Jt().memoizedState;
  }
  function cp() {
    return Jt().memoizedState;
  }
  function US(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = ke();
          t = Fn(a);
          var l = Wn(e, t, a);
          l !== null && (Ue(l, e, a), zs(l, e, a)),
            (e = { cache: Nc() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function HS(t, e, a) {
    var l = ke();
    (a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vr(t)
        ? fp(e, a)
        : ((a = Sc(t, e, a, l)), a !== null && (Ue(a, t, l), dp(a, e, l)));
  }
  function up(t, e, a) {
    var l = ke();
    Hs(t, e, a, l);
  }
  function Hs(t, e, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vr(t)) fp(e, c);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var y = e.lastRenderedState,
            b = u(y, a);
          if (((c.hasEagerState = !0), (c.eagerState = b), je(b, y)))
            return er(t, e, c, 0), Ut === null && tr(), !1;
        } catch {
        } finally {
        }
      if (((a = Sc(t, e, c, l)), a !== null))
        return Ue(a, t, l), dp(a, e, l), !0;
    }
    return !1;
  }
  function nu(t, e, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: zu(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vr(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Sc(t, a, l, 2)), e !== null && Ue(e, t, 2);
  }
  function vr(t) {
    var e = t.alternate;
    return t === xt || (e !== null && e === xt);
  }
  function fp(t, e) {
    Aa = dr = !0;
    var a = t.pending;
    a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (t.pending = e);
  }
  function dp(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (a |= l), (e.lanes = a), xh(t, a);
    }
  }
  var br = {
      readContext: pe,
      use: mr,
      useCallback: Qt,
      useContext: Qt,
      useEffect: Qt,
      useImperativeHandle: Qt,
      useLayoutEffect: Qt,
      useInsertionEffect: Qt,
      useMemo: Qt,
      useReducer: Qt,
      useRef: Qt,
      useState: Qt,
      useDebugValue: Qt,
      useDeferredValue: Qt,
      useTransition: Qt,
      useSyncExternalStore: Qt,
      useId: Qt,
      useHostTransitionStatus: Qt,
      useFormState: Qt,
      useActionState: Qt,
      useOptimistic: Qt,
      useMemoCache: Qt,
      useCacheRefresh: Qt,
    },
    hp = {
      readContext: pe,
      use: mr,
      useCallback: function (t, e) {
        return (Ee().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: pe,
      useEffect: Wm,
      useImperativeHandle: function (t, e, a) {
        (a = a != null ? a.concat([t]) : null),
          yr(4194308, 4, tp.bind(null, e, t), a);
      },
      useLayoutEffect: function (t, e) {
        return yr(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        yr(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = Ee();
        e = e === void 0 ? null : e;
        var l = t();
        if (Pi) {
          Gn(!0);
          try {
            t();
          } finally {
            Gn(!1);
          }
        }
        return (a.memoizedState = [l, e]), l;
      },
      useReducer: function (t, e, a) {
        var l = Ee();
        if (a !== void 0) {
          var c = a(e);
          if (Pi) {
            Gn(!0);
            try {
              a(e);
            } finally {
              Gn(!1);
            }
          }
        } else c = e;
        return (
          (l.memoizedState = l.baseState = c),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: c,
          }),
          (l.queue = t),
          (t = t.dispatch = HS.bind(null, xt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ee();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Wc(t);
        var e = t.queue,
          a = up.bind(null, xt, e);
        return (e.dispatch = a), [t.memoizedState, a];
      },
      useDebugValue: Jc,
      useDeferredValue: function (t, e) {
        var a = Ee();
        return Ic(a, t, e);
      },
      useTransition: function () {
        var t = Wc(!1);
        return (
          (t = sp.bind(null, xt, t.queue, !0, !1)),
          (Ee().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, a) {
        var l = xt,
          c = Ee();
        if (Ot) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = e()), Ut === null)) throw Error(r(349));
          (Rt & 124) !== 0 || zm(l, e, a);
        }
        c.memoizedState = a;
        var u = { value: a, getSnapshot: e };
        return (
          (c.queue = u),
          Wm(Lm.bind(null, l, u, t), [t]),
          (l.flags |= 2048),
          Ma(9, gr(), Vm.bind(null, l, u, a, e), null),
          a
        );
      },
      useId: function () {
        var t = Ee(),
          e = Ut.identifierPrefix;
        if (Ot) {
          var a = Rn,
            l = Cn;
          (a = (l & ~(1 << (32 - _e(l) - 1))).toString(32) + a),
            (e = "«" + e + "R" + a),
            (a = hr++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "»");
        } else (a = zS++), (e = "«" + e + "r" + a.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: eu,
      useFormState: Xm,
      useActionState: Xm,
      useOptimistic: function (t) {
        var e = Ee();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = a),
          (e = nu.bind(null, xt, !0, a)),
          (a.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Zc,
      useCacheRefresh: function () {
        return (Ee().memoizedState = US.bind(null, xt));
      },
    },
    mp = {
      readContext: pe,
      use: mr,
      useCallback: np,
      useContext: pe,
      useEffect: $m,
      useImperativeHandle: ep,
      useInsertionEffect: Jm,
      useLayoutEffect: Im,
      useMemo: ip,
      useReducer: pr,
      useRef: Fm,
      useState: function () {
        return pr(Nn);
      },
      useDebugValue: Jc,
      useDeferredValue: function (t, e) {
        var a = Jt();
        return ap(a, zt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = pr(Nn)[0],
          e = Jt().memoizedState;
        return [typeof t == "boolean" ? t : ks(t), e];
      },
      useSyncExternalStore: jm,
      useId: op,
      useHostTransitionStatus: eu,
      useFormState: Km,
      useActionState: Km,
      useOptimistic: function (t, e) {
        var a = Jt();
        return Um(a, zt, t, e);
      },
      useMemoCache: Zc,
      useCacheRefresh: cp,
    },
    PS = {
      readContext: pe,
      use: mr,
      useCallback: np,
      useContext: pe,
      useEffect: $m,
      useImperativeHandle: ep,
      useInsertionEffect: Jm,
      useLayoutEffect: Im,
      useMemo: ip,
      useReducer: Fc,
      useRef: Fm,
      useState: function () {
        return Fc(Nn);
      },
      useDebugValue: Jc,
      useDeferredValue: function (t, e) {
        var a = Jt();
        return zt === null ? Ic(a, t, e) : ap(a, zt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Fc(Nn)[0],
          e = Jt().memoizedState;
        return [typeof t == "boolean" ? t : ks(t), e];
      },
      useSyncExternalStore: jm,
      useId: op,
      useHostTransitionStatus: eu,
      useFormState: Qm,
      useActionState: Qm,
      useOptimistic: function (t, e) {
        var a = Jt();
        return zt !== null
          ? Um(a, zt, t, e)
          : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: Zc,
      useCacheRefresh: cp,
    },
    Ca = null,
    Ps = 0;
  function xr(t) {
    var e = Ps;
    return (Ps += 1), Ca === null && (Ca = []), Em(Ca, t, e);
  }
  function Ys(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Sr(t, e) {
    throw e.$$typeof === v
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function pp(t) {
    var e = t._init;
    return e(t._payload);
  }
  function gp(t) {
    function e(j, O) {
      if (t) {
        var L = j.deletions;
        L === null ? ((j.deletions = [O]), (j.flags |= 16)) : L.push(O);
      }
    }
    function a(j, O) {
      if (!t) return null;
      for (; O !== null; ) e(j, O), (O = O.sibling);
      return null;
    }
    function l(j) {
      for (var O = new Map(); j !== null; )
        j.key !== null ? O.set(j.key, j) : O.set(j.index, j), (j = j.sibling);
      return O;
    }
    function c(j, O) {
      return (j = Mn(j, O)), (j.index = 0), (j.sibling = null), j;
    }
    function u(j, O, L) {
      return (
        (j.index = L),
        t
          ? ((L = j.alternate),
            L !== null
              ? ((L = L.index), L < O ? ((j.flags |= 67108866), O) : L)
              : ((j.flags |= 67108866), O))
          : ((j.flags |= 1048576), O)
      );
    }
    function y(j) {
      return t && j.alternate === null && (j.flags |= 67108866), j;
    }
    function b(j, O, L, K) {
      return O === null || O.tag !== 6
        ? ((O = wc(L, j.mode, K)), (O.return = j), O)
        : ((O = c(O, L)), (O.return = j), O);
    }
    function C(j, O, L, K) {
      var et = L.type;
      return et === D
        ? G(j, O, L.props.children, K, L.key)
        : O !== null &&
          (O.elementType === et ||
            (typeof et == "object" &&
              et !== null &&
              et.$$typeof === P &&
              pp(et) === O.type))
        ? ((O = c(O, L.props)), Ys(O, L), (O.return = j), O)
        : ((O = ir(L.type, L.key, L.props, null, j.mode, K)),
          Ys(O, L),
          (O.return = j),
          O);
    }
    function B(j, O, L, K) {
      return O === null ||
        O.tag !== 4 ||
        O.stateNode.containerInfo !== L.containerInfo ||
        O.stateNode.implementation !== L.implementation
        ? ((O = Ac(L, j.mode, K)), (O.return = j), O)
        : ((O = c(O, L.children || [])), (O.return = j), O);
    }
    function G(j, O, L, K, et) {
      return O === null || O.tag !== 7
        ? ((O = ji(L, j.mode, K, et)), (O.return = j), O)
        : ((O = c(O, L)), (O.return = j), O);
    }
    function F(j, O, L) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return (O = wc("" + O, j.mode, L)), (O.return = j), O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return (
              (L = ir(O.type, O.key, O.props, null, j.mode, L)),
              Ys(L, O),
              (L.return = j),
              L
            );
          case T:
            return (O = Ac(O, j.mode, L)), (O.return = j), O;
          case P:
            var K = O._init;
            return (O = K(O._payload)), F(j, O, L);
        }
        if (ct(O) || ft(O))
          return (O = ji(O, j.mode, L, null)), (O.return = j), O;
        if (typeof O.then == "function") return F(j, xr(O), L);
        if (O.$$typeof === N) return F(j, rr(j, O), L);
        Sr(j, O);
      }
      return null;
    }
    function k(j, O, L, K) {
      var et = O !== null ? O.key : null;
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return et !== null ? null : b(j, O, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case x:
            return L.key === et ? C(j, O, L, K) : null;
          case T:
            return L.key === et ? B(j, O, L, K) : null;
          case P:
            return (et = L._init), (L = et(L._payload)), k(j, O, L, K);
        }
        if (ct(L) || ft(L)) return et !== null ? null : G(j, O, L, K, null);
        if (typeof L.then == "function") return k(j, O, xr(L), K);
        if (L.$$typeof === N) return k(j, O, rr(j, L), K);
        Sr(j, L);
      }
      return null;
    }
    function H(j, O, L, K, et) {
      if (
        (typeof K == "string" && K !== "") ||
        typeof K == "number" ||
        typeof K == "bigint"
      )
        return (j = j.get(L) || null), b(O, j, "" + K, et);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case x:
            return (
              (j = j.get(K.key === null ? L : K.key) || null), C(O, j, K, et)
            );
          case T:
            return (
              (j = j.get(K.key === null ? L : K.key) || null), B(O, j, K, et)
            );
          case P:
            var Tt = K._init;
            return (K = Tt(K._payload)), H(j, O, L, K, et);
        }
        if (ct(K) || ft(K)) return (j = j.get(L) || null), G(O, j, K, et, null);
        if (typeof K.then == "function") return H(j, O, L, xr(K), et);
        if (K.$$typeof === N) return H(j, O, L, rr(O, K), et);
        Sr(O, K);
      }
      return null;
    }
    function ht(j, O, L, K) {
      for (
        var et = null, Tt = null, st = O, dt = (O = 0), le = null;
        st !== null && dt < L.length;
        dt++
      ) {
        st.index > dt ? ((le = st), (st = null)) : (le = st.sibling);
        var Dt = k(j, st, L[dt], K);
        if (Dt === null) {
          st === null && (st = le);
          break;
        }
        t && st && Dt.alternate === null && e(j, st),
          (O = u(Dt, O, dt)),
          Tt === null ? (et = Dt) : (Tt.sibling = Dt),
          (Tt = Dt),
          (st = le);
      }
      if (dt === L.length) return a(j, st), Ot && Vi(j, dt), et;
      if (st === null) {
        for (; dt < L.length; dt++)
          (st = F(j, L[dt], K)),
            st !== null &&
              ((O = u(st, O, dt)),
              Tt === null ? (et = st) : (Tt.sibling = st),
              (Tt = st));
        return Ot && Vi(j, dt), et;
      }
      for (st = l(st); dt < L.length; dt++)
        (le = H(st, j, dt, L[dt], K)),
          le !== null &&
            (t &&
              le.alternate !== null &&
              st.delete(le.key === null ? dt : le.key),
            (O = u(le, O, dt)),
            Tt === null ? (et = le) : (Tt.sibling = le),
            (Tt = le));
      return (
        t &&
          st.forEach(function (hi) {
            return e(j, hi);
          }),
        Ot && Vi(j, dt),
        et
      );
    }
    function ut(j, O, L, K) {
      if (L == null) throw Error(r(151));
      for (
        var et = null,
          Tt = null,
          st = O,
          dt = (O = 0),
          le = null,
          Dt = L.next();
        st !== null && !Dt.done;
        dt++, Dt = L.next()
      ) {
        st.index > dt ? ((le = st), (st = null)) : (le = st.sibling);
        var hi = k(j, st, Dt.value, K);
        if (hi === null) {
          st === null && (st = le);
          break;
        }
        t && st && hi.alternate === null && e(j, st),
          (O = u(hi, O, dt)),
          Tt === null ? (et = hi) : (Tt.sibling = hi),
          (Tt = hi),
          (st = le);
      }
      if (Dt.done) return a(j, st), Ot && Vi(j, dt), et;
      if (st === null) {
        for (; !Dt.done; dt++, Dt = L.next())
          (Dt = F(j, Dt.value, K)),
            Dt !== null &&
              ((O = u(Dt, O, dt)),
              Tt === null ? (et = Dt) : (Tt.sibling = Dt),
              (Tt = Dt));
        return Ot && Vi(j, dt), et;
      }
      for (st = l(st); !Dt.done; dt++, Dt = L.next())
        (Dt = H(st, j, dt, Dt.value, K)),
          Dt !== null &&
            (t &&
              Dt.alternate !== null &&
              st.delete(Dt.key === null ? dt : Dt.key),
            (O = u(Dt, O, dt)),
            Tt === null ? (et = Dt) : (Tt.sibling = Dt),
            (Tt = Dt));
      return (
        t &&
          st.forEach(function (YT) {
            return e(j, YT);
          }),
        Ot && Vi(j, dt),
        et
      );
    }
    function Lt(j, O, L, K) {
      if (
        (typeof L == "object" &&
          L !== null &&
          L.type === D &&
          L.key === null &&
          (L = L.props.children),
        typeof L == "object" && L !== null)
      ) {
        switch (L.$$typeof) {
          case x:
            t: {
              for (var et = L.key; O !== null; ) {
                if (O.key === et) {
                  if (((et = L.type), et === D)) {
                    if (O.tag === 7) {
                      a(j, O.sibling),
                        (K = c(O, L.props.children)),
                        (K.return = j),
                        (j = K);
                      break t;
                    }
                  } else if (
                    O.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === P &&
                      pp(et) === O.type)
                  ) {
                    a(j, O.sibling),
                      (K = c(O, L.props)),
                      Ys(K, L),
                      (K.return = j),
                      (j = K);
                    break t;
                  }
                  a(j, O);
                  break;
                } else e(j, O);
                O = O.sibling;
              }
              L.type === D
                ? ((K = ji(L.props.children, j.mode, K, L.key)),
                  (K.return = j),
                  (j = K))
                : ((K = ir(L.type, L.key, L.props, null, j.mode, K)),
                  Ys(K, L),
                  (K.return = j),
                  (j = K));
            }
            return y(j);
          case T:
            t: {
              for (et = L.key; O !== null; ) {
                if (O.key === et)
                  if (
                    O.tag === 4 &&
                    O.stateNode.containerInfo === L.containerInfo &&
                    O.stateNode.implementation === L.implementation
                  ) {
                    a(j, O.sibling),
                      (K = c(O, L.children || [])),
                      (K.return = j),
                      (j = K);
                    break t;
                  } else {
                    a(j, O);
                    break;
                  }
                else e(j, O);
                O = O.sibling;
              }
              (K = Ac(L, j.mode, K)), (K.return = j), (j = K);
            }
            return y(j);
          case P:
            return (et = L._init), (L = et(L._payload)), Lt(j, O, L, K);
        }
        if (ct(L)) return ht(j, O, L, K);
        if (ft(L)) {
          if (((et = ft(L)), typeof et != "function")) throw Error(r(150));
          return (L = et.call(L)), ut(j, O, L, K);
        }
        if (typeof L.then == "function") return Lt(j, O, xr(L), K);
        if (L.$$typeof === N) return Lt(j, O, rr(j, L), K);
        Sr(j, L);
      }
      return (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
        ? ((L = "" + L),
          O !== null && O.tag === 6
            ? (a(j, O.sibling), (K = c(O, L)), (K.return = j), (j = K))
            : (a(j, O), (K = wc(L, j.mode, K)), (K.return = j), (j = K)),
          y(j))
        : a(j, O);
    }
    return function (j, O, L, K) {
      try {
        Ps = 0;
        var et = Lt(j, O, L, K);
        return (Ca = null), et;
      } catch (st) {
        if (st === _s || st === cr) throw st;
        var Tt = ze(29, st, null, j.mode);
        return (Tt.lanes = K), (Tt.return = j), Tt;
      } finally {
      }
    };
  }
  var Ra = gp(!0),
    yp = gp(!1),
    Fe = X(null),
    dn = null;
  function Jn(t) {
    var e = t.alternate;
    W(ee, ee.current & 1),
      W(Fe, t),
      dn === null &&
        (e === null || wa.current !== null || e.memoizedState !== null) &&
        (dn = t);
  }
  function vp(t) {
    if (t.tag === 22) {
      if ((W(ee, ee.current), W(Fe, t), dn === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (dn = t);
      }
    } else In();
  }
  function In() {
    W(ee, ee.current), W(Fe, Fe.current);
  }
  function _n(t) {
    $(Fe), dn === t && (dn = null), $(ee);
  }
  var ee = X(0);
  function Tr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Ku(a))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function iu(t, e, a, l) {
    (e = t.memoizedState),
      (a = a(l, e)),
      (a = a == null ? e : g({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var au = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var l = ke(),
        c = Fn(l);
      (c.payload = e),
        a != null && (c.callback = a),
        (e = Wn(t, c, l)),
        e !== null && (Ue(e, t, l), zs(e, t, l));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var l = ke(),
        c = Fn(l);
      (c.tag = 1),
        (c.payload = e),
        a != null && (c.callback = a),
        (e = Wn(t, c, l)),
        e !== null && (Ue(e, t, l), zs(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = ke(),
        l = Fn(a);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = Wn(t, l, a)),
        e !== null && (Ue(e, t, a), zs(e, t, a));
    },
  };
  function bp(t, e, a, l, c, u, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, u, y)
        : e.prototype && e.prototype.isPureReactComponent
        ? !As(a, l) || !As(c, u)
        : !0
    );
  }
  function xp(t, e, a, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(a, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, l),
      e.state !== t && au.enqueueReplaceState(e, e.state, null);
  }
  function Yi(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e) l !== "ref" && (a[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = g({}, a));
      for (var c in t) a[c] === void 0 && (a[c] = t[c]);
    }
    return a;
  }
  var wr =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Sp(t) {
    wr(t);
  }
  function Tp(t) {
    console.error(t);
  }
  function wp(t) {
    wr(t);
  }
  function Ar(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Ap(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function su(t, e, a) {
    return (
      (a = Fn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Ar(t, e);
      }),
      a
    );
  }
  function Ep(t) {
    return (t = Fn(t)), (t.tag = 3), t;
  }
  function Mp(t, e, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = l.value;
      (t.payload = function () {
        return c(u);
      }),
        (t.callback = function () {
          Ap(e, a, l);
        });
    }
    var y = a.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        Ap(e, a, l),
          typeof c != "function" &&
            (si === null ? (si = new Set([this])) : si.add(this));
        var b = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: b !== null ? b : "",
        });
      });
  }
  function YS(t, e, a, l, c) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = a.alternate),
        e !== null && Ds(e, a, c, !0),
        (a = Fe.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              dn === null ? Du() : a.alternate === null && Gt === 0 && (Gt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = c),
              l === zc
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([l])) : e.add(l),
                  Nu(t, l, c)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === zc
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue),
                      a === null ? (e.retryQueue = new Set([l])) : a.add(l)),
                  Nu(t, l, c)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return Nu(t, l, c), Du(), !1;
    }
    if (Ot)
      return (
        (e = Fe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = c),
            l !== Cc && ((t = Error(r(422), { cause: l })), Rs(Xe(t, a))))
          : (l !== Cc && ((e = Error(r(423), { cause: l })), Rs(Xe(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (c &= -c),
            (t.lanes |= c),
            (l = Xe(l, a)),
            (c = su(t.stateNode, l, c)),
            Bc(t, c),
            Gt !== 4 && (Gt = 2)),
        !1
      );
    var u = Error(r(520), { cause: l });
    if (
      ((u = Xe(u, a)),
      Fs === null ? (Fs = [u]) : Fs.push(u),
      Gt !== 4 && (Gt = 2),
      e === null)
    )
      return !0;
    (l = Xe(l, a)), (a = e);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = c & -c),
            (a.lanes |= t),
            (t = su(a.stateNode, l, t)),
            Bc(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (si === null || !si.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (c &= -c),
              (a.lanes |= c),
              (c = Ep(c)),
              Mp(c, t, a, l),
              Bc(a, c),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Cp = Error(r(461)),
    ae = !1;
  function ue(t, e, a, l) {
    e.child = t === null ? yp(e, null, a, l) : Ra(e, t.child, a, l);
  }
  function Rp(t, e, a, l, c) {
    a = a.render;
    var u = e.ref;
    if ("ref" in l) {
      var y = {};
      for (var b in l) b !== "ref" && (y[b] = l[b]);
    } else y = l;
    return (
      Ui(e),
      (l = Yc(t, e, a, y, u, c)),
      (b = qc()),
      t !== null && !ae
        ? (Gc(t, e, c), jn(t, e, c))
        : (Ot && b && Ec(e), (e.flags |= 1), ue(t, e, l, c), e.child)
    );
  }
  function Dp(t, e, a, l, c) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" &&
        !Tc(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((e.tag = 15), (e.type = u), Op(t, e, u, l, c))
        : ((t = ir(a.type, null, l, e, e.mode, c)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !hu(t, c))) {
      var y = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : As), a(y, l) && t.ref === e.ref)
      )
        return jn(t, e, c);
    }
    return (
      (e.flags |= 1),
      (t = Mn(u, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Op(t, e, a, l, c) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (As(u, l) && t.ref === e.ref)
        if (((ae = !1), (e.pendingProps = l = u), hu(t, c)))
          (t.flags & 131072) !== 0 && (ae = !0);
        else return (e.lanes = t.lanes), jn(t, e, c);
    }
    return lu(t, e, a, l, c);
  }
  function Np(t, e, a) {
    var l = e.pendingProps,
      c = l.children,
      u = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((l = u !== null ? u.baseLanes | a : a), t !== null)) {
          for (c = e.child = t.child, u = 0; c !== null; )
            (u = u | c.lanes | c.childLanes), (c = c.sibling);
          e.childLanes = u & ~l;
        } else (e.childLanes = 0), (e.child = null);
        return _p(t, e, l, a);
      }
      if ((a & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && or(e, u !== null ? u.cachePool : null),
          u !== null ? Om(e, u) : Uc(),
          vp(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          _p(t, e, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null
        ? (or(e, u.cachePool), Om(e, u), In(), (e.memoizedState = null))
        : (t !== null && or(e, null), Uc(), In());
    return ue(t, e, c, a), e.child;
  }
  function _p(t, e, a, l) {
    var c = jc();
    return (
      (c = c === null ? null : { parent: te._currentValue, pool: c }),
      (e.memoizedState = { baseLanes: a, cachePool: c }),
      t !== null && or(e, null),
      Uc(),
      vp(e),
      t !== null && Ds(t, e, l, !0),
      null
    );
  }
  function Er(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function lu(t, e, a, l, c) {
    return (
      Ui(e),
      (a = Yc(t, e, a, l, void 0, c)),
      (l = qc()),
      t !== null && !ae
        ? (Gc(t, e, c), jn(t, e, c))
        : (Ot && l && Ec(e), (e.flags |= 1), ue(t, e, a, c), e.child)
    );
  }
  function jp(t, e, a, l, c, u) {
    return (
      Ui(e),
      (e.updateQueue = null),
      (a = _m(e, l, a, c)),
      Nm(t),
      (l = qc()),
      t !== null && !ae
        ? (Gc(t, e, u), jn(t, e, u))
        : (Ot && l && Ec(e), (e.flags |= 1), ue(t, e, a, u), e.child)
    );
  }
  function zp(t, e, a, l, c) {
    if ((Ui(e), e.stateNode === null)) {
      var u = va,
        y = a.contextType;
      typeof y == "object" && y !== null && (u = pe(y)),
        (u = new a(l, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = au),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = l),
        (u.state = e.memoizedState),
        (u.refs = {}),
        Vc(e),
        (y = a.contextType),
        (u.context = typeof y == "object" && y !== null ? pe(y) : va),
        (u.state = e.memoizedState),
        (y = a.getDerivedStateFromProps),
        typeof y == "function" && (iu(e, a, y, l), (u.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((y = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          y !== u.state && au.enqueueReplaceState(u, u.state, null),
          Ls(e, l, u, c),
          Vs(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      u = e.stateNode;
      var b = e.memoizedProps,
        C = Yi(a, b);
      u.props = C;
      var B = u.context,
        G = a.contextType;
      (y = va), typeof G == "object" && G !== null && (y = pe(G));
      var F = a.getDerivedStateFromProps;
      (G =
        typeof F == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (b = e.pendingProps !== b),
        G ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((b || B !== y) && xp(e, u, l, y)),
        (Qn = !1);
      var k = e.memoizedState;
      (u.state = k),
        Ls(e, l, u, c),
        Vs(),
        (B = e.memoizedState),
        b || k !== B || Qn
          ? (typeof F == "function" && (iu(e, a, F, l), (B = e.memoizedState)),
            (C = Qn || bp(e, a, C, l, k, B, y))
              ? (G ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = B)),
            (u.props = l),
            (u.state = B),
            (u.context = y),
            (l = C))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (u = e.stateNode),
        Lc(t, e),
        (y = e.memoizedProps),
        (G = Yi(a, y)),
        (u.props = G),
        (F = e.pendingProps),
        (k = u.context),
        (B = a.contextType),
        (C = va),
        typeof B == "object" && B !== null && (C = pe(B)),
        (b = a.getDerivedStateFromProps),
        (B =
          typeof b == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((y !== F || k !== C) && xp(e, u, l, C)),
        (Qn = !1),
        (k = e.memoizedState),
        (u.state = k),
        Ls(e, l, u, c),
        Vs();
      var H = e.memoizedState;
      y !== F ||
      k !== H ||
      Qn ||
      (t !== null && t.dependencies !== null && lr(t.dependencies))
        ? (typeof b == "function" && (iu(e, a, b, l), (H = e.memoizedState)),
          (G =
            Qn ||
            bp(e, a, G, l, k, H, C) ||
            (t !== null && t.dependencies !== null && lr(t.dependencies)))
            ? (B ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, H, C),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, H, C)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (y === t.memoizedProps && k === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && k === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = H)),
          (u.props = l),
          (u.state = H),
          (u.context = C),
          (l = G))
        : (typeof u.componentDidUpdate != "function" ||
            (y === t.memoizedProps && k === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && k === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      Er(t, e),
      (l = (e.flags & 128) !== 0),
      u || l
        ? ((u = e.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = Ra(e, t.child, null, c)),
              (e.child = Ra(e, null, a, c)))
            : ue(t, e, a, c),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = jn(t, e, c)),
      t
    );
  }
  function Vp(t, e, a, l) {
    return Cs(), (e.flags |= 256), ue(t, e, a, l), e.child;
  }
  var ru = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ou(t) {
    return { baseLanes: t, cachePool: Tm() };
  }
  function cu(t, e, a) {
    return (t = t !== null ? t.childLanes & ~a : 0), e && (t |= We), t;
  }
  function Lp(t, e, a) {
    var l = e.pendingProps,
      c = !1,
      u = (e.flags & 128) !== 0,
      y;
    if (
      ((y = u) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (ee.current & 2) !== 0),
      y && ((c = !0), (e.flags &= -129)),
      (y = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ot) {
        if ((c ? Jn(e) : In(), Ot)) {
          var b = qt,
            C;
          if ((C = b)) {
            t: {
              for (C = b, b = fn; C.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break t;
                }
                if (((C = an(C.nextSibling)), C === null)) {
                  b = null;
                  break t;
                }
              }
              b = C;
            }
            b !== null
              ? ((e.memoizedState = {
                  dehydrated: b,
                  treeContext: zi !== null ? { id: Cn, overflow: Rn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (C = ze(18, null, null, 0)),
                (C.stateNode = b),
                (C.return = e),
                (e.child = C),
                (be = e),
                (qt = null),
                (C = !0))
              : (C = !1);
          }
          C || Bi(e);
        }
        if (
          ((b = e.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return Ku(b) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        _n(e);
      }
      return (
        (b = l.children),
        (l = l.fallback),
        c
          ? (In(),
            (c = e.mode),
            (b = Mr({ mode: "hidden", children: b }, c)),
            (l = ji(l, c, a, null)),
            (b.return = e),
            (l.return = e),
            (b.sibling = l),
            (e.child = b),
            (c = e.child),
            (c.memoizedState = ou(a)),
            (c.childLanes = cu(t, y, a)),
            (e.memoizedState = ru),
            l)
          : (Jn(e), uu(e, b))
      );
    }
    if (
      ((C = t.memoizedState), C !== null && ((b = C.dehydrated), b !== null))
    ) {
      if (u)
        e.flags & 256
          ? (Jn(e), (e.flags &= -257), (e = fu(t, e, a)))
          : e.memoizedState !== null
          ? (In(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (In(),
            (c = l.fallback),
            (b = e.mode),
            (l = Mr({ mode: "visible", children: l.children }, b)),
            (c = ji(c, b, a, null)),
            (c.flags |= 2),
            (l.return = e),
            (c.return = e),
            (l.sibling = c),
            (e.child = l),
            Ra(e, t.child, null, a),
            (l = e.child),
            (l.memoizedState = ou(a)),
            (l.childLanes = cu(t, y, a)),
            (e.memoizedState = ru),
            (e = c));
      else if ((Jn(e), Ku(b))) {
        if (((y = b.nextSibling && b.nextSibling.dataset), y)) var B = y.dgst;
        (y = B),
          (l = Error(r(419))),
          (l.stack = ""),
          (l.digest = y),
          Rs({ value: l, source: null, stack: null }),
          (e = fu(t, e, a));
      } else if (
        (ae || Ds(t, e, a, !1), (y = (a & t.childLanes) !== 0), ae || y)
      ) {
        if (
          ((y = Ut),
          y !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : Zo(l)),
            (l = (l & (y.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== C.retryLane))
        )
          throw ((C.retryLane = l), ya(t, l), Ue(y, t, l), Cp);
        b.data === "$?" || Du(), (e = fu(t, e, a));
      } else
        b.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = C.treeContext),
            (qt = an(b.nextSibling)),
            (be = e),
            (Ot = !0),
            (Li = null),
            (fn = !1),
            t !== null &&
              ((Ze[Qe++] = Cn),
              (Ze[Qe++] = Rn),
              (Ze[Qe++] = zi),
              (Cn = t.id),
              (Rn = t.overflow),
              (zi = e)),
            (e = uu(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return c
      ? (In(),
        (c = l.fallback),
        (b = e.mode),
        (C = t.child),
        (B = C.sibling),
        (l = Mn(C, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = C.subtreeFlags & 65011712),
        B !== null ? (c = Mn(B, c)) : ((c = ji(c, b, a, null)), (c.flags |= 2)),
        (c.return = e),
        (l.return = e),
        (l.sibling = c),
        (e.child = l),
        (l = c),
        (c = e.child),
        (b = t.child.memoizedState),
        b === null
          ? (b = ou(a))
          : ((C = b.cachePool),
            C !== null
              ? ((B = te._currentValue),
                (C = C.parent !== B ? { parent: B, pool: B } : C))
              : (C = Tm()),
            (b = { baseLanes: b.baseLanes | a, cachePool: C })),
        (c.memoizedState = b),
        (c.childLanes = cu(t, y, a)),
        (e.memoizedState = ru),
        l)
      : (Jn(e),
        (a = t.child),
        (t = a.sibling),
        (a = Mn(a, { mode: "visible", children: l.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((y = e.deletions),
          y === null ? ((e.deletions = [t]), (e.flags |= 16)) : y.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function uu(t, e) {
    return (
      (e = Mr({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Mr(t, e) {
    return (
      (t = ze(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function fu(t, e, a) {
    return (
      Ra(e, t.child, null, a),
      (t = uu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Bp(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Dc(t.return, e, a);
  }
  function du(t, e, a, l, c) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: c,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = l),
        (u.tail = a),
        (u.tailMode = c));
  }
  function kp(t, e, a) {
    var l = e.pendingProps,
      c = l.revealOrder,
      u = l.tail;
    if ((ue(t, e, l.children, a), (l = ee.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Bp(t, a, e);
          else if (t.tag === 19) Bp(t, a, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((W(ee, l), c)) {
      case "forwards":
        for (a = e.child, c = null; a !== null; )
          (t = a.alternate),
            t !== null && Tr(t) === null && (c = a),
            (a = a.sibling);
        (a = c),
          a === null
            ? ((c = e.child), (e.child = null))
            : ((c = a.sibling), (a.sibling = null)),
          du(e, !1, c, a, u);
        break;
      case "backwards":
        for (a = null, c = e.child, e.child = null; c !== null; ) {
          if (((t = c.alternate), t !== null && Tr(t) === null)) {
            e.child = c;
            break;
          }
          (t = c.sibling), (c.sibling = a), (a = c), (c = t);
        }
        du(e, !0, a, null, u);
        break;
      case "together":
        du(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function jn(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ai |= e.lanes),
      (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ds(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, a = Mn(t, t.pendingProps), e.child = a, a.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (a = a.sibling = Mn(t, t.pendingProps)),
          (a.return = e);
      a.sibling = null;
    }
    return e.child;
  }
  function hu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && lr(t)));
  }
  function qS(t, e, a) {
    switch (e.tag) {
      case 3:
        ot(e, e.stateNode.containerInfo),
          Zn(e, te, t.memoizedState.cache),
          Cs();
        break;
      case 27:
      case 5:
        Ct(e);
        break;
      case 4:
        ot(e, e.stateNode.containerInfo);
        break;
      case 10:
        Zn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Jn(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
            ? Lp(t, e, a)
            : (Jn(e), (t = jn(t, e, a)), t !== null ? t.sibling : null);
        Jn(e);
        break;
      case 19:
        var c = (t.flags & 128) !== 0;
        if (
          ((l = (a & e.childLanes) !== 0),
          l || (Ds(t, e, a, !1), (l = (a & e.childLanes) !== 0)),
          c)
        ) {
          if (l) return kp(t, e, a);
          e.flags |= 128;
        }
        if (
          ((c = e.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          W(ee, ee.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Np(t, e, a);
      case 24:
        Zn(e, te, t.memoizedState.cache);
    }
    return jn(t, e, a);
  }
  function Up(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) ae = !0;
      else {
        if (!hu(t, a) && (e.flags & 128) === 0) return (ae = !1), qS(t, e, a);
        ae = (t.flags & 131072) !== 0;
      }
    else (ae = !1), Ot && (e.flags & 1048576) !== 0 && pm(e, sr, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            c = l._init;
          if (((l = c(l._payload)), (e.type = l), typeof l == "function"))
            Tc(l)
              ? ((t = Yi(l, t)), (e.tag = 1), (e = zp(null, e, l, t, a)))
              : ((e.tag = 0), (e = lu(null, e, l, t, a)));
          else {
            if (l != null) {
              if (((c = l.$$typeof), c === Y)) {
                (e.tag = 11), (e = Rp(null, e, l, t, a));
                break t;
              } else if (c === Z) {
                (e.tag = 14), (e = Dp(null, e, l, t, a));
                break t;
              }
            }
            throw ((e = vt(l) || l), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return lu(t, e, e.type, e.pendingProps, a);
      case 1:
        return (l = e.type), (c = Yi(l, e.pendingProps)), zp(t, e, l, c, a);
      case 3:
        t: {
          if ((ot(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          (c = u.element), Lc(t, e), Ls(e, l, null, a);
          var y = e.memoizedState;
          if (
            ((l = y.cache),
            Zn(e, te, l),
            l !== u.cache && Oc(e, [te], a, !0),
            Vs(),
            (l = y.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: y.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Vp(t, e, l, a);
              break t;
            } else if (l !== c) {
              (c = Xe(Error(r(424)), e)), Rs(c), (e = Vp(t, e, l, a));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                qt = an(t.firstChild),
                  be = e,
                  Ot = !0,
                  Li = null,
                  fn = !0,
                  a = yp(e, null, l, a),
                  e.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Cs(), l === c)) {
              e = jn(t, e, a);
              break t;
            }
            ue(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Er(t, e),
          t === null
            ? (a = qg(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : Ot ||
                ((a = e.type),
                (t = e.pendingProps),
                (l = Hr(rt.current).createElement(a)),
                (l[me] = e),
                (l[we] = t),
                de(l, a, t),
                ie(l),
                (e.stateNode = l))
            : (e.memoizedState = qg(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ct(e),
          t === null &&
            Ot &&
            ((l = e.stateNode = Hg(e.type, e.pendingProps, rt.current)),
            (be = e),
            (fn = !0),
            (c = qt),
            oi(e.type) ? ((Zu = c), (qt = an(l.firstChild))) : (qt = c)),
          ue(t, e, e.pendingProps.children, a),
          Er(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ot &&
            ((c = l = qt) &&
              ((l = yT(l, e.type, e.pendingProps, fn)),
              l !== null
                ? ((e.stateNode = l),
                  (be = e),
                  (qt = an(l.firstChild)),
                  (fn = !1),
                  (c = !0))
                : (c = !1)),
            c || Bi(e)),
          Ct(e),
          (c = e.type),
          (u = e.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (l = u.children),
          qu(c, u) ? (l = null) : y !== null && qu(c, y) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((c = Yc(t, e, VS, null, null, a)), (al._currentValue = c)),
          Er(t, e),
          ue(t, e, l, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ot &&
            ((t = a = qt) &&
              ((a = vT(a, e.pendingProps, fn)),
              a !== null
                ? ((e.stateNode = a), (be = e), (qt = null), (t = !0))
                : (t = !1)),
            t || Bi(e)),
          null
        );
      case 13:
        return Lp(t, e, a);
      case 4:
        return (
          ot(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = Ra(e, null, l, a)) : ue(t, e, l, a),
          e.child
        );
      case 11:
        return Rp(t, e, e.type, e.pendingProps, a);
      case 7:
        return ue(t, e, e.pendingProps, a), e.child;
      case 8:
        return ue(t, e, e.pendingProps.children, a), e.child;
      case 12:
        return ue(t, e, e.pendingProps.children, a), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          Zn(e, e.type, l.value),
          ue(t, e, l.children, a),
          e.child
        );
      case 9:
        return (
          (c = e.type._context),
          (l = e.pendingProps.children),
          Ui(e),
          (c = pe(c)),
          (l = l(c)),
          (e.flags |= 1),
          ue(t, e, l, a),
          e.child
        );
      case 14:
        return Dp(t, e, e.type, e.pendingProps, a);
      case 15:
        return Op(t, e, e.type, e.pendingProps, a);
      case 19:
        return kp(t, e, a);
      case 31:
        return (
          (l = e.pendingProps),
          (a = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((a = Mr(l, a)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a))
            : ((a = Mn(t.child, l)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a)),
          e
        );
      case 22:
        return Np(t, e, a);
      case 24:
        return (
          Ui(e),
          (l = pe(te)),
          t === null
            ? ((c = jc()),
              c === null &&
                ((c = Ut),
                (u = Nc()),
                (c.pooledCache = u),
                u.refCount++,
                u !== null && (c.pooledCacheLanes |= a),
                (c = u)),
              (e.memoizedState = { parent: l, cache: c }),
              Vc(e),
              Zn(e, te, c))
            : ((t.lanes & a) !== 0 && (Lc(t, e), Ls(e, null, null, a), Vs()),
              (c = t.memoizedState),
              (u = e.memoizedState),
              c.parent !== l
                ? ((c = { parent: l, cache: l }),
                  (e.memoizedState = c),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = c),
                  Zn(e, te, l))
                : ((l = u.cache),
                  Zn(e, te, l),
                  l !== c.cache && Oc(e, [te], a, !0))),
          ue(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function zn(t) {
    t.flags |= 4;
  }
  function Hp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Qg(e))) {
      if (
        ((e = Fe.current),
        e !== null &&
          ((Rt & 4194048) === Rt
            ? dn !== null
            : ((Rt & 62914560) !== Rt && (Rt & 536870912) === 0) || e !== dn))
      )
        throw ((js = zc), wm);
      t.flags |= 8192;
    }
  }
  function Cr(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? vh() : 536870912), (t.lanes |= e), (_a |= e));
  }
  function qs(t, e) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), (a = a.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Pt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      l = 0;
    if (e)
      for (var c = t.child; c !== null; )
        (a |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 65011712),
          (l |= c.flags & 65011712),
          (c.return = t),
          (c = c.sibling);
    else
      for (c = t.child; c !== null; )
        (a |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = t),
          (c = c.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = a), e;
  }
  function GS(t, e, a) {
    var l = e.pendingProps;
    switch ((Mc(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pt(e), null;
      case 1:
        return Pt(e), null;
      case 3:
        return (
          (a = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          On(te),
          Nt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ms(e)
              ? zn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), vm())),
          Pt(e),
          null
        );
      case 26:
        return (
          (a = e.memoizedState),
          t === null
            ? (zn(e),
              a !== null ? (Pt(e), Hp(e, a)) : (Pt(e), (e.flags &= -16777217)))
            : a
            ? a !== t.memoizedState
              ? (zn(e), Pt(e), Hp(e, a))
              : (Pt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== l && zn(e), Pt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        wt(e), (a = rt.current);
        var c = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && zn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return Pt(e), null;
          }
          (t = I.current),
            Ms(e) ? gm(e) : ((t = Hg(c, l, a)), (e.stateNode = t), zn(e));
        }
        return Pt(e), null;
      case 5:
        if ((wt(e), (a = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && zn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return Pt(e), null;
          }
          if (((t = I.current), Ms(e))) gm(e);
          else {
            switch (((c = Hr(rt.current)), t)) {
              case 1:
                t = c.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = c.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = c.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (t = c.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? c.createElement("select", { is: l.is })
                        : c.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? c.createElement(a, { is: l.is })
                        : c.createElement(a);
                }
            }
            (t[me] = e), (t[we] = l);
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) t.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e) break t;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            e.stateNode = t;
            t: switch ((de(t, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && zn(e);
          }
        }
        return Pt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && zn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = rt.current), Ms(e))) {
            if (
              ((t = e.stateNode),
              (a = e.memoizedProps),
              (l = null),
              (c = be),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            (t[me] = e),
              (t = !!(
                t.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                jg(t.nodeValue, a)
              )),
              t || Bi(e);
          } else (t = Hr(t).createTextNode(l)), (t[me] = e), (e.stateNode = t);
        }
        return Pt(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((c = Ms(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!c) throw Error(r(318));
              if (
                ((c = e.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(r(317));
              c[me] = e;
            } else
              Cs(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Pt(e), (c = !1);
          } else
            (c = vm()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return e.flags & 256 ? (_n(e), e) : (_n(e), null);
        }
        if ((_n(e), (e.flags & 128) !== 0)) return (e.lanes = a), e;
        if (
          ((a = l !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          (l = e.child),
            (c = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (c = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
            u !== c && (l.flags |= 2048);
        }
        return (
          a !== t && a && (e.child.flags |= 8192),
          Cr(e, e.updateQueue),
          Pt(e),
          null
        );
      case 4:
        return Nt(), t === null && ku(e.stateNode.containerInfo), Pt(e), null;
      case 10:
        return On(e.type), Pt(e), null;
      case 19:
        if (($(ee), (c = e.memoizedState), c === null)) return Pt(e), null;
        if (((l = (e.flags & 128) !== 0), (u = c.rendering), u === null))
          if (l) qs(c, !1);
          else {
            if (Gt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Tr(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      qs(c, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Cr(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;

                  )
                    mm(a, t), (a = a.sibling);
                  return W(ee, (ee.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            c.tail !== null &&
              he() > Or &&
              ((e.flags |= 128), (l = !0), qs(c, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Tr(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Cr(e, t),
                qs(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !u.alternate &&
                  !Ot)
              )
                return Pt(e), null;
            } else
              2 * he() - c.renderingStartTime > Or &&
                a !== 536870912 &&
                ((e.flags |= 128), (l = !0), qs(c, !1), (e.lanes = 4194304));
          c.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = c.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (c.last = u));
        }
        return c.tail !== null
          ? ((e = c.tail),
            (c.rendering = e),
            (c.tail = e.sibling),
            (c.renderingStartTime = he()),
            (e.sibling = null),
            (t = ee.current),
            W(ee, l ? (t & 1) | 2 : t & 1),
            e)
          : (Pt(e), null);
      case 22:
      case 23:
        return (
          _n(e),
          Hc(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Pt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Pt(e),
          (a = e.updateQueue),
          a !== null && Cr(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== a && (e.flags |= 2048),
          t !== null && $(Hi),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          On(te),
          Pt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function XS(t, e) {
    switch ((Mc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          On(te),
          Nt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return wt(e), null;
      case 13:
        if (
          (_n(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Cs();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return $(ee), null;
      case 4:
        return Nt(), null;
      case 10:
        return On(e.type), null;
      case 22:
      case 23:
        return (
          _n(e),
          Hc(),
          t !== null && $(Hi),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return On(te), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Pp(t, e) {
    switch ((Mc(e), e.tag)) {
      case 3:
        On(te), Nt();
        break;
      case 26:
      case 27:
      case 5:
        wt(e);
        break;
      case 4:
        Nt();
        break;
      case 13:
        _n(e);
        break;
      case 19:
        $(ee);
        break;
      case 10:
        On(e.type);
        break;
      case 22:
      case 23:
        _n(e), Hc(), t !== null && $(Hi);
        break;
      case 24:
        On(te);
    }
  }
  function Gs(t, e) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var u = a.create,
              y = a.inst;
            (l = u()), (y.destroy = l);
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (b) {
      kt(e, e.return, b);
    }
  }
  function ti(t, e, a) {
    try {
      var l = e.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var u = c.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var y = l.inst,
              b = y.destroy;
            if (b !== void 0) {
              (y.destroy = void 0), (c = e);
              var C = a,
                B = b;
              try {
                B();
              } catch (G) {
                kt(c, C, G);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (G) {
      kt(e, e.return, G);
    }
  }
  function Yp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Dm(e, a);
      } catch (l) {
        kt(t, t.return, l);
      }
    }
  }
  function qp(t, e, a) {
    (a.props = Yi(t.type, t.memoizedProps)), (a.state = t.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (l) {
      kt(t, e, l);
    }
  }
  function Xs(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(l)) : (a.current = l);
      }
    } catch (c) {
      kt(t, e, c);
    }
  }
  function hn(t, e) {
    var a = t.ref,
      l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          kt(t, e, c);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          kt(t, e, c);
        }
      else a.current = null;
  }
  function Gp(t) {
    var e = t.type,
      a = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (c) {
      kt(t, t.return, c);
    }
  }
  function mu(t, e, a) {
    try {
      var l = t.stateNode;
      dT(l, t.type, a, e), (l[we] = e);
    } catch (c) {
      kt(t, t.return, c);
    }
  }
  function Xp(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && oi(t.type)) ||
      t.tag === 4
    );
  }
  function pu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Xp(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && oi(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function gu(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(t, e)
          : ((e =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = Ur));
    else if (
      l !== 4 &&
      (l === 27 && oi(t.type) && ((a = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (gu(t, e, a), t = t.sibling; t !== null; )
        gu(t, e, a), (t = t.sibling);
  }
  function Rr(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && oi(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (Rr(t, e, a), t = t.sibling; t !== null; )
        Rr(t, e, a), (t = t.sibling);
  }
  function Kp(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var l = t.type, c = e.attributes; c.length; )
        e.removeAttributeNode(c[0]);
      de(e, l, a), (e[me] = t), (e[we] = a);
    } catch (u) {
      kt(t, t.return, u);
    }
  }
  var Vn = !1,
    Ft = !1,
    yu = !1,
    Zp = typeof WeakSet == "function" ? WeakSet : Set,
    se = null;
  function KS(t, e) {
    if (((t = t.containerInfo), (Pu = Kr), (t = am(t)), pc(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var c = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break t;
            }
            var y = 0,
              b = -1,
              C = -1,
              B = 0,
              G = 0,
              F = t,
              k = null;
            e: for (;;) {
              for (
                var H;
                F !== a || (c !== 0 && F.nodeType !== 3) || (b = y + c),
                  F !== u || (l !== 0 && F.nodeType !== 3) || (C = y + l),
                  F.nodeType === 3 && (y += F.nodeValue.length),
                  (H = F.firstChild) !== null;

              )
                (k = F), (F = H);
              for (;;) {
                if (F === t) break e;
                if (
                  (k === a && ++B === c && (b = y),
                  k === u && ++G === l && (C = y),
                  (H = F.nextSibling) !== null)
                )
                  break;
                (F = k), (k = F.parentNode);
              }
              F = H;
            }
            a = b === -1 || C === -1 ? null : { start: b, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Yu = { focusedElem: t, selectionRange: a }, Kr = !1, se = e;
      se !== null;

    )
      if (
        ((e = se), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (se = t);
      else
        for (; se !== null; ) {
          switch (((e = se), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (a = e),
                  (c = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = a.stateNode);
                try {
                  var ht = Yi(a.type, c, a.elementType === a.type);
                  (t = l.getSnapshotBeforeUpdate(ht, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (ut) {
                  kt(a, a.return, ut);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Xu(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (se = t);
            break;
          }
          se = e.return;
        }
  }
  function Qp(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ei(t, a), l & 4 && Gs(5, a);
        break;
      case 1:
        if ((ei(t, a), l & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (y) {
              kt(a, a.return, y);
            }
          else {
            var c = Yi(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(c, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              kt(a, a.return, y);
            }
          }
        l & 64 && Yp(a), l & 512 && Xs(a, a.return);
        break;
      case 3:
        if ((ei(t, a), l & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Dm(t, e);
          } catch (y) {
            kt(a, a.return, y);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Kp(a);
      case 26:
      case 5:
        ei(t, a), e === null && l & 4 && Gp(a), l & 512 && Xs(a, a.return);
        break;
      case 12:
        ei(t, a);
        break;
      case 13:
        ei(t, a),
          l & 4 && $p(t, a),
          l & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = eT.bind(null, a)), bT(t, a))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Vn), !l)) {
          (e = (e !== null && e.memoizedState !== null) || Ft), (c = Vn);
          var u = Ft;
          (Vn = l),
            (Ft = e) && !u ? ni(t, a, (a.subtreeFlags & 8772) !== 0) : ei(t, a),
            (Vn = c),
            (Ft = u);
        }
        break;
      case 30:
        break;
      default:
        ei(t, a);
    }
  }
  function Fp(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Fp(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Wo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ht = null,
    Me = !1;
  function Ln(t, e, a) {
    for (a = a.child; a !== null; ) Wp(t, e, a), (a = a.sibling);
  }
  function Wp(t, e, a) {
    if (Ne && typeof Ne.onCommitFiberUnmount == "function")
      try {
        Ne.onCommitFiberUnmount(ds, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Ft || hn(a, e),
          Ln(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Ft || hn(a, e);
        var l = Ht,
          c = Me;
        oi(a.type) && ((Ht = a.stateNode), (Me = !1)),
          Ln(t, e, a),
          tl(a.stateNode),
          (Ht = l),
          (Me = c);
        break;
      case 5:
        Ft || hn(a, e);
      case 6:
        if (
          ((l = Ht),
          (c = Me),
          (Ht = null),
          Ln(t, e, a),
          (Ht = l),
          (Me = c),
          Ht !== null)
        )
          if (Me)
            try {
              (Ht.nodeType === 9
                ? Ht.body
                : Ht.nodeName === "HTML"
                ? Ht.ownerDocument.body
                : Ht
              ).removeChild(a.stateNode);
            } catch (u) {
              kt(a, e, u);
            }
          else
            try {
              Ht.removeChild(a.stateNode);
            } catch (u) {
              kt(a, e, u);
            }
        break;
      case 18:
        Ht !== null &&
          (Me
            ? ((t = Ht),
              kg(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                a.stateNode
              ),
              ol(t))
            : kg(Ht, a.stateNode));
        break;
      case 4:
        (l = Ht),
          (c = Me),
          (Ht = a.stateNode.containerInfo),
          (Me = !0),
          Ln(t, e, a),
          (Ht = l),
          (Me = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ft || ti(2, a, e), Ft || ti(4, a, e), Ln(t, e, a);
        break;
      case 1:
        Ft ||
          (hn(a, e),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && qp(a, e, l)),
          Ln(t, e, a);
        break;
      case 21:
        Ln(t, e, a);
        break;
      case 22:
        (Ft = (l = Ft) || a.memoizedState !== null), Ln(t, e, a), (Ft = l);
        break;
      default:
        Ln(t, e, a);
    }
  }
  function $p(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ol(t);
      } catch (a) {
        kt(e, e.return, a);
      }
  }
  function ZS(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Zp()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Zp()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function vu(t, e) {
    var a = ZS(t);
    e.forEach(function (l) {
      var c = nT.bind(null, t, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function Ve(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l],
          u = t,
          y = e,
          b = y;
        t: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (oi(b.type)) {
                (Ht = b.stateNode), (Me = !1);
                break t;
              }
              break;
            case 5:
              (Ht = b.stateNode), (Me = !1);
              break t;
            case 3:
            case 4:
              (Ht = b.stateNode.containerInfo), (Me = !0);
              break t;
          }
          b = b.return;
        }
        if (Ht === null) throw Error(r(160));
        Wp(u, y, c),
          (Ht = null),
          (Me = !1),
          (u = c.alternate),
          u !== null && (u.return = null),
          (c.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Jp(e, t), (e = e.sibling);
  }
  var nn = null;
  function Jp(t, e) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ve(e, t),
          Le(t),
          l & 4 && (ti(3, t, t.return), Gs(3, t), ti(5, t, t.return));
        break;
      case 1:
        Ve(e, t),
          Le(t),
          l & 512 && (Ft || a === null || hn(a, a.return)),
          l & 64 &&
            Vn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? l : a.concat(l)))));
        break;
      case 26:
        var c = nn;
        if (
          (Ve(e, t),
          Le(t),
          l & 512 && (Ft || a === null || hn(a, a.return)),
          l & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((l = t.memoizedState), a === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (a = t.memoizedProps),
                    (c = c.ownerDocument || c);
                  e: switch (l) {
                    case "title":
                      (u = c.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ps] ||
                          u[me] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = c.createElement(l)),
                          c.head.insertBefore(
                            u,
                            c.querySelector("head > title")
                          )),
                        de(u, l, a),
                        (u[me] = t),
                        ie(u),
                        (l = u);
                      break t;
                    case "link":
                      var y = Kg("link", "href", c).get(l + (a.href || ""));
                      if (y) {
                        for (var b = 0; b < y.length; b++)
                          if (
                            ((u = y[b]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            y.splice(b, 1);
                            break e;
                          }
                      }
                      (u = c.createElement(l)),
                        de(u, l, a),
                        c.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (y = Kg("meta", "content", c).get(
                          l + (a.content || "")
                        ))
                      ) {
                        for (b = 0; b < y.length; b++)
                          if (
                            ((u = y[b]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            y.splice(b, 1);
                            break e;
                          }
                      }
                      (u = c.createElement(l)),
                        de(u, l, a),
                        c.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  (u[me] = t), ie(u), (l = u);
                }
                t.stateNode = l;
              } else Zg(c, t.type, t.stateNode);
            else t.stateNode = Xg(c, l, t.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                l === null
                  ? Zg(c, t.type, t.stateNode)
                  : Xg(c, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                mu(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Ve(e, t),
          Le(t),
          l & 512 && (Ft || a === null || hn(a, a.return)),
          a !== null && l & 4 && mu(t, t.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Ve(e, t),
          Le(t),
          l & 512 && (Ft || a === null || hn(a, a.return)),
          t.flags & 32)
        ) {
          c = t.stateNode;
          try {
            ua(c, "");
          } catch (H) {
            kt(t, t.return, H);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((c = t.memoizedProps), mu(t, c, a !== null ? a.memoizedProps : c)),
          l & 1024 && (yu = !0);
        break;
      case 6:
        if ((Ve(e, t), Le(t), l & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (l = t.memoizedProps), (a = t.stateNode);
          try {
            a.nodeValue = l;
          } catch (H) {
            kt(t, t.return, H);
          }
        }
        break;
      case 3:
        if (
          ((qr = null),
          (c = nn),
          (nn = Pr(e.containerInfo)),
          Ve(e, t),
          (nn = c),
          Le(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ol(e.containerInfo);
          } catch (H) {
            kt(t, t.return, H);
          }
        yu && ((yu = !1), Ip(t));
        break;
      case 4:
        (l = nn),
          (nn = Pr(t.stateNode.containerInfo)),
          Ve(e, t),
          Le(t),
          (nn = l);
        break;
      case 12:
        Ve(e, t), Le(t);
        break;
      case 13:
        Ve(e, t),
          Le(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Au = he()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), vu(t, l)));
        break;
      case 22:
        c = t.memoizedState !== null;
        var C = a !== null && a.memoizedState !== null,
          B = Vn,
          G = Ft;
        if (
          ((Vn = B || c),
          (Ft = G || C),
          Ve(e, t),
          (Ft = G),
          (Vn = B),
          Le(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = c ? e._visibility & -2 : e._visibility | 1,
              c && (a === null || C || Vn || Ft || qi(t)),
              a = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                C = a = e;
                try {
                  if (((u = C.stateNode), c))
                    (y = u.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none");
                  else {
                    b = C.stateNode;
                    var F = C.memoizedProps.style,
                      k =
                        F != null && F.hasOwnProperty("display")
                          ? F.display
                          : null;
                    b.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (H) {
                  kt(C, C.return, H);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                C = e;
                try {
                  C.stateNode.nodeValue = c ? "" : C.memoizedProps;
                } catch (H) {
                  kt(C, C.return, H);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), (e = e.return);
            }
            a === e && (a = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), vu(t, a))));
        break;
      case 19:
        Ve(e, t),
          Le(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), vu(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ve(e, t), Le(t);
    }
  }
  function Le(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Xp(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode,
              u = pu(t);
            Rr(t, u, c);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (ua(y, ""), (a.flags &= -33));
            var b = pu(t);
            Rr(t, b, y);
            break;
          case 3:
          case 4:
            var C = a.stateNode.containerInfo,
              B = pu(t);
            gu(t, B, C);
            break;
          default:
            throw Error(r(161));
        }
      } catch (G) {
        kt(t, t.return, G);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ip(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Ip(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function ei(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Qp(t, e.alternate, e), (e = e.sibling);
  }
  function qi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ti(4, e, e.return), qi(e);
          break;
        case 1:
          hn(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && qp(e, e.return, a),
            qi(e);
          break;
        case 27:
          tl(e.stateNode);
        case 26:
        case 5:
          hn(e, e.return), qi(e);
          break;
        case 22:
          e.memoizedState === null && qi(e);
          break;
        case 30:
          qi(e);
          break;
        default:
          qi(e);
      }
      t = t.sibling;
    }
  }
  function ni(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        c = t,
        u = e,
        y = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ni(c, u, a), Gs(4, u);
          break;
        case 1:
          if (
            (ni(c, u, a),
            (l = u),
            (c = l.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (B) {
              kt(l, l.return, B);
            }
          if (((l = u), (c = l.updateQueue), c !== null)) {
            var b = l.stateNode;
            try {
              var C = c.shared.hiddenCallbacks;
              if (C !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < C.length; c++)
                  Rm(C[c], b);
            } catch (B) {
              kt(l, l.return, B);
            }
          }
          a && y & 64 && Yp(u), Xs(u, u.return);
          break;
        case 27:
          Kp(u);
        case 26:
        case 5:
          ni(c, u, a), a && l === null && y & 4 && Gp(u), Xs(u, u.return);
          break;
        case 12:
          ni(c, u, a);
          break;
        case 13:
          ni(c, u, a), a && y & 4 && $p(c, u);
          break;
        case 22:
          u.memoizedState === null && ni(c, u, a), Xs(u, u.return);
          break;
        case 30:
          break;
        default:
          ni(c, u, a);
      }
      e = e.sibling;
    }
  }
  function bu(t, e) {
    var a = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Os(a));
  }
  function xu(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Os(t));
  }
  function mn(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) tg(t, e, a, l), (e = e.sibling);
  }
  function tg(t, e, a, l) {
    var c = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        mn(t, e, a, l), c & 2048 && Gs(9, e);
        break;
      case 1:
        mn(t, e, a, l);
        break;
      case 3:
        mn(t, e, a, l),
          c & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Os(t)));
        break;
      case 12:
        if (c & 2048) {
          mn(t, e, a, l), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              y = u.id,
              b = u.onPostCommit;
            typeof b == "function" &&
              b(
                y,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (C) {
            kt(e, e.return, C);
          }
        } else mn(t, e, a, l);
        break;
      case 13:
        mn(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (y = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? mn(t, e, a, l)
              : Ks(t, e)
            : u._visibility & 2
            ? mn(t, e, a, l)
            : ((u._visibility |= 2),
              Da(t, e, a, l, (e.subtreeFlags & 10256) !== 0)),
          c & 2048 && bu(y, e);
        break;
      case 24:
        mn(t, e, a, l), c & 2048 && xu(e.alternate, e);
        break;
      default:
        mn(t, e, a, l);
    }
  }
  function Da(t, e, a, l, c) {
    for (c = c && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        y = e,
        b = a,
        C = l,
        B = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Da(u, y, b, C, c), Gs(8, y);
          break;
        case 23:
          break;
        case 22:
          var G = y.stateNode;
          y.memoizedState !== null
            ? G._visibility & 2
              ? Da(u, y, b, C, c)
              : Ks(u, y)
            : ((G._visibility |= 2), Da(u, y, b, C, c)),
            c && B & 2048 && bu(y.alternate, y);
          break;
        case 24:
          Da(u, y, b, C, c), c && B & 2048 && xu(y.alternate, y);
          break;
        default:
          Da(u, y, b, C, c);
      }
      e = e.sibling;
    }
  }
  function Ks(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          l = e,
          c = l.flags;
        switch (l.tag) {
          case 22:
            Ks(a, l), c & 2048 && bu(l.alternate, l);
            break;
          case 24:
            Ks(a, l), c & 2048 && xu(l.alternate, l);
            break;
          default:
            Ks(a, l);
        }
        e = e.sibling;
      }
  }
  var Zs = 8192;
  function Oa(t) {
    if (t.subtreeFlags & Zs)
      for (t = t.child; t !== null; ) eg(t), (t = t.sibling);
  }
  function eg(t) {
    switch (t.tag) {
      case 26:
        Oa(t),
          t.flags & Zs &&
            t.memoizedState !== null &&
            _T(nn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Oa(t);
        break;
      case 3:
      case 4:
        var e = nn;
        (nn = Pr(t.stateNode.containerInfo)), Oa(t), (nn = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Zs), (Zs = 16777216), Oa(t), (Zs = e))
            : Oa(t));
        break;
      default:
        Oa(t);
    }
  }
  function ng(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Qs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          (se = l), ag(l, t);
        }
      ng(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ig(t), (t = t.sibling);
  }
  function ig(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qs(t), t.flags & 2048 && ti(9, t, t.return);
        break;
      case 3:
        Qs(t);
        break;
      case 12:
        Qs(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Dr(t))
          : Qs(t);
        break;
      default:
        Qs(t);
    }
  }
  function Dr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          (se = l), ag(l, t);
        }
      ng(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ti(8, e, e.return), Dr(e);
          break;
        case 22:
          (a = e.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Dr(e));
          break;
        default:
          Dr(e);
      }
      t = t.sibling;
    }
  }
  function ag(t, e) {
    for (; se !== null; ) {
      var a = se;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ti(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Os(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) (l.return = a), (se = l);
      else
        t: for (a = t; se !== null; ) {
          l = se;
          var c = l.sibling,
            u = l.return;
          if ((Fp(l), l === a)) {
            se = null;
            break t;
          }
          if (c !== null) {
            (c.return = u), (se = c);
            break t;
          }
          se = u;
        }
    }
  }
  var QS = {
      getCacheForType: function (t) {
        var e = pe(te),
          a = e.data.get(t);
        return a === void 0 && ((a = t()), e.data.set(t, a)), a;
      },
    },
    FS = typeof WeakMap == "function" ? WeakMap : Map,
    _t = 0,
    Ut = null,
    Et = null,
    Rt = 0,
    jt = 0,
    Be = null,
    ii = !1,
    Na = !1,
    Su = !1,
    Bn = 0,
    Gt = 0,
    ai = 0,
    Gi = 0,
    Tu = 0,
    We = 0,
    _a = 0,
    Fs = null,
    Ce = null,
    wu = !1,
    Au = 0,
    Or = 1 / 0,
    Nr = null,
    si = null,
    fe = 0,
    li = null,
    ja = null,
    za = 0,
    Eu = 0,
    Mu = null,
    sg = null,
    Ws = 0,
    Cu = null;
  function ke() {
    if ((_t & 2) !== 0 && Rt !== 0) return Rt & -Rt;
    if (V.T !== null) {
      var t = Sa;
      return t !== 0 ? t : zu();
    }
    return Sh();
  }
  function lg() {
    We === 0 && (We = (Rt & 536870912) === 0 || Ot ? yh() : 536870912);
    var t = Fe.current;
    return t !== null && (t.flags |= 32), We;
  }
  function Ue(t, e, a) {
    ((t === Ut && (jt === 2 || jt === 9)) || t.cancelPendingCommit !== null) &&
      (Va(t, 0), ri(t, Rt, We, !1)),
      ms(t, a),
      ((_t & 2) === 0 || t !== Ut) &&
        (t === Ut &&
          ((_t & 2) === 0 && (Gi |= a), Gt === 4 && ri(t, Rt, We, !1)),
        pn(t));
  }
  function rg(t, e, a) {
    if ((_t & 6) !== 0) throw Error(r(327));
    var l = (!a && (e & 124) === 0 && (e & t.expiredLanes) === 0) || hs(t, e),
      c = l ? JS(t, e) : Ou(t, e, !0),
      u = l;
    do {
      if (c === 0) {
        Na && !l && ri(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), u && !WS(a))) {
          (c = Ou(t, e, !1)), (u = !1);
          continue;
        }
        if (c === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var y = 0;
          else
            (y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            e = y;
            t: {
              var b = t;
              c = Fs;
              var C = b.current.memoizedState.isDehydrated;
              if ((C && (Va(b, y).flags |= 256), (y = Ou(b, y, !1)), y !== 2)) {
                if (Su && !C) {
                  (b.errorRecoveryDisabledLanes |= u), (Gi |= u), (c = 4);
                  break t;
                }
                (u = Ce),
                  (Ce = c),
                  u !== null && (Ce === null ? (Ce = u) : Ce.push.apply(Ce, u));
              }
              c = y;
            }
            if (((u = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Va(t, 0), ri(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), (u = c), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ri(l, e, We, !ii);
              break t;
            case 2:
              Ce = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((c = Au + 300 - he()), 10 < c)) {
            if ((ri(l, e, We, !ii), Yl(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = Lg(
              og.bind(null, l, a, Ce, Nr, wu, e, We, Gi, _a, ii, u, 2, -0, 0),
              c
            );
            break t;
          }
          og(l, a, Ce, Nr, wu, e, We, Gi, _a, ii, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    pn(t);
  }
  function og(t, e, a, l, c, u, y, b, C, B, G, F, k, H) {
    if (
      ((t.timeoutHandle = -1),
      (F = e.subtreeFlags),
      (F & 8192 || (F & 16785408) === 16785408) &&
        ((il = { stylesheets: null, count: 0, unsuspend: NT }),
        eg(e),
        (F = jT()),
        F !== null))
    ) {
      (t.cancelPendingCommit = F(
        pg.bind(null, t, e, u, a, l, c, y, b, C, G, 1, k, H)
      )),
        ri(t, u, y, !B);
      return;
    }
    pg(t, e, u, a, l, c, y, b, C);
  }
  function WS(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var c = a[l],
            u = c.getSnapshot;
          c = c.value;
          try {
            if (!je(u(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
        (a.return = e), (e = a);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function ri(t, e, a, l) {
    (e &= ~Tu),
      (e &= ~Gi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var c = e; 0 < c; ) {
      var u = 31 - _e(c),
        y = 1 << u;
      (l[u] = -1), (c &= ~y);
    }
    a !== 0 && bh(t, a, e);
  }
  function _r() {
    return (_t & 6) === 0 ? ($s(0), !1) : !0;
  }
  function Ru() {
    if (Et !== null) {
      if (jt === 0) var t = Et.return;
      else (t = Et), (Dn = ki = null), Xc(t), (Ca = null), (Ps = 0), (t = Et);
      for (; t !== null; ) Pp(t.alternate, t), (t = t.return);
      Et = null;
    }
  }
  function Va(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && ((t.timeoutHandle = -1), mT(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      Ru(),
      (Ut = t),
      (Et = a = Mn(t.current, null)),
      (Rt = e),
      (jt = 0),
      (Be = null),
      (ii = !1),
      (Na = hs(t, e)),
      (Su = !1),
      (_a = We = Tu = Gi = ai = Gt = 0),
      (Ce = Fs = null),
      (wu = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var c = 31 - _e(l),
          u = 1 << c;
        (e |= t[c]), (l &= ~u);
      }
    return (Bn = e), tr(), a;
  }
  function cg(t, e) {
    (xt = null),
      (V.H = br),
      e === _s || e === cr
        ? ((e = Mm()), (jt = 3))
        : e === wm
        ? ((e = Mm()), (jt = 4))
        : (jt =
            e === Cp
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Be = e),
      Et === null && ((Gt = 1), Ar(t, Xe(e, t.current)));
  }
  function ug() {
    var t = V.H;
    return (V.H = br), t === null ? br : t;
  }
  function fg() {
    var t = V.A;
    return (V.A = QS), t;
  }
  function Du() {
    (Gt = 4),
      ii || ((Rt & 4194048) !== Rt && Fe.current !== null) || (Na = !0),
      ((ai & 134217727) === 0 && (Gi & 134217727) === 0) ||
        Ut === null ||
        ri(Ut, Rt, We, !1);
  }
  function Ou(t, e, a) {
    var l = _t;
    _t |= 2;
    var c = ug(),
      u = fg();
    (Ut !== t || Rt !== e) && ((Nr = null), Va(t, e)), (e = !1);
    var y = Gt;
    t: do
      try {
        if (jt !== 0 && Et !== null) {
          var b = Et,
            C = Be;
          switch (jt) {
            case 8:
              Ru(), (y = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Fe.current === null && (e = !0);
              var B = jt;
              if (((jt = 0), (Be = null), La(t, b, C, B), a && Na)) {
                y = 0;
                break t;
              }
              break;
            default:
              (B = jt), (jt = 0), (Be = null), La(t, b, C, B);
          }
        }
        $S(), (y = Gt);
        break;
      } catch (G) {
        cg(t, G);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Dn = ki = null),
      (_t = l),
      (V.H = c),
      (V.A = u),
      Et === null && ((Ut = null), (Rt = 0), tr()),
      y
    );
  }
  function $S() {
    for (; Et !== null; ) dg(Et);
  }
  function JS(t, e) {
    var a = _t;
    _t |= 2;
    var l = ug(),
      c = fg();
    Ut !== t || Rt !== e
      ? ((Nr = null), (Or = he() + 500), Va(t, e))
      : (Na = hs(t, e));
    t: do
      try {
        if (jt !== 0 && Et !== null) {
          e = Et;
          var u = Be;
          e: switch (jt) {
            case 1:
              (jt = 0), (Be = null), La(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Am(u)) {
                (jt = 0), (Be = null), hg(e);
                break;
              }
              (e = function () {
                (jt !== 2 && jt !== 9) || Ut !== t || (jt = 7), pn(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              jt = 7;
              break t;
            case 4:
              jt = 5;
              break t;
            case 7:
              Am(u)
                ? ((jt = 0), (Be = null), hg(e))
                : ((jt = 0), (Be = null), La(t, e, u, 7));
              break;
            case 5:
              var y = null;
              switch (Et.tag) {
                case 26:
                  y = Et.memoizedState;
                case 5:
                case 27:
                  var b = Et;
                  if (!y || Qg(y)) {
                    (jt = 0), (Be = null);
                    var C = b.sibling;
                    if (C !== null) Et = C;
                    else {
                      var B = b.return;
                      B !== null ? ((Et = B), jr(B)) : (Et = null);
                    }
                    break e;
                  }
              }
              (jt = 0), (Be = null), La(t, e, u, 5);
              break;
            case 6:
              (jt = 0), (Be = null), La(t, e, u, 6);
              break;
            case 8:
              Ru(), (Gt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        IS();
        break;
      } catch (G) {
        cg(t, G);
      }
    while (!0);
    return (
      (Dn = ki = null),
      (V.H = l),
      (V.A = c),
      (_t = a),
      Et !== null ? 0 : ((Ut = null), (Rt = 0), tr(), Gt)
    );
  }
  function IS() {
    for (; Et !== null && !Ei(); ) dg(Et);
  }
  function dg(t) {
    var e = Up(t.alternate, t, Bn);
    (t.memoizedProps = t.pendingProps), e === null ? jr(t) : (Et = e);
  }
  function hg(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = jp(a, e, e.pendingProps, e.type, void 0, Rt);
        break;
      case 11:
        e = jp(a, e, e.pendingProps, e.type.render, e.ref, Rt);
        break;
      case 5:
        Xc(e);
      default:
        Pp(a, e), (e = Et = mm(e, Bn)), (e = Up(a, e, Bn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? jr(t) : (Et = e);
  }
  function La(t, e, a, l) {
    (Dn = ki = null), Xc(e), (Ca = null), (Ps = 0);
    var c = e.return;
    try {
      if (YS(t, c, e, a, Rt)) {
        (Gt = 1), Ar(t, Xe(a, t.current)), (Et = null);
        return;
      }
    } catch (u) {
      if (c !== null) throw ((Et = c), u);
      (Gt = 1), Ar(t, Xe(a, t.current)), (Et = null);
      return;
    }
    e.flags & 32768
      ? (Ot || l === 1
          ? (t = !0)
          : Na || (Rt & 536870912) !== 0
          ? (t = !1)
          : ((ii = t = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Fe.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        mg(e, t))
      : jr(e);
  }
  function jr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        mg(e, ii);
        return;
      }
      t = e.return;
      var a = GS(e.alternate, e, Bn);
      if (a !== null) {
        Et = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Et = e;
        return;
      }
      Et = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function mg(t, e) {
    do {
      var a = XS(t.alternate, t);
      if (a !== null) {
        (a.flags &= 32767), (Et = a);
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Et = t;
        return;
      }
      Et = t = a;
    } while (t !== null);
    (Gt = 6), (Et = null);
  }
  function pg(t, e, a, l, c, u, y, b, C) {
    t.cancelPendingCommit = null;
    do zr();
    while (fe !== 0);
    if ((_t & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= xc),
        N1(t, a, u, y, b, C),
        t === Ut && ((Et = Ut = null), (Rt = 0)),
        (ja = e),
        (li = t),
        (za = a),
        (Eu = u),
        (Mu = c),
        (sg = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            iT(Ul, function () {
              return xg(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = V.T), (V.T = null), (c = q.p), (q.p = 2), (y = _t), (_t |= 4);
        try {
          KS(t, e, a);
        } finally {
          (_t = y), (q.p = c), (V.T = l);
        }
      }
      (fe = 1), gg(), yg(), vg();
    }
  }
  function gg() {
    if (fe === 1) {
      fe = 0;
      var t = li,
        e = ja,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        (a = V.T), (V.T = null);
        var l = q.p;
        q.p = 2;
        var c = _t;
        _t |= 4;
        try {
          Jp(e, t);
          var u = Yu,
            y = am(t.containerInfo),
            b = u.focusedElem,
            C = u.selectionRange;
          if (
            y !== b &&
            b &&
            b.ownerDocument &&
            im(b.ownerDocument.documentElement, b)
          ) {
            if (C !== null && pc(b)) {
              var B = C.start,
                G = C.end;
              if ((G === void 0 && (G = B), "selectionStart" in b))
                (b.selectionStart = B),
                  (b.selectionEnd = Math.min(G, b.value.length));
              else {
                var F = b.ownerDocument || document,
                  k = (F && F.defaultView) || window;
                if (k.getSelection) {
                  var H = k.getSelection(),
                    ht = b.textContent.length,
                    ut = Math.min(C.start, ht),
                    Lt = C.end === void 0 ? ut : Math.min(C.end, ht);
                  !H.extend && ut > Lt && ((y = Lt), (Lt = ut), (ut = y));
                  var j = nm(b, ut),
                    O = nm(b, Lt);
                  if (
                    j &&
                    O &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== j.node ||
                      H.anchorOffset !== j.offset ||
                      H.focusNode !== O.node ||
                      H.focusOffset !== O.offset)
                  ) {
                    var L = F.createRange();
                    L.setStart(j.node, j.offset),
                      H.removeAllRanges(),
                      ut > Lt
                        ? (H.addRange(L), H.extend(O.node, O.offset))
                        : (L.setEnd(O.node, O.offset), H.addRange(L));
                  }
                }
              }
            }
            for (F = [], H = b; (H = H.parentNode); )
              H.nodeType === 1 &&
                F.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof b.focus == "function" && b.focus(), b = 0;
              b < F.length;
              b++
            ) {
              var K = F[b];
              (K.element.scrollLeft = K.left), (K.element.scrollTop = K.top);
            }
          }
          (Kr = !!Pu), (Yu = Pu = null);
        } finally {
          (_t = c), (q.p = l), (V.T = a);
        }
      }
      (t.current = e), (fe = 2);
    }
  }
  function yg() {
    if (fe === 2) {
      fe = 0;
      var t = li,
        e = ja,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        (a = V.T), (V.T = null);
        var l = q.p;
        q.p = 2;
        var c = _t;
        _t |= 4;
        try {
          Qp(t, e.alternate, e);
        } finally {
          (_t = c), (q.p = l), (V.T = a);
        }
      }
      fe = 3;
    }
  }
  function vg() {
    if (fe === 4 || fe === 3) {
      (fe = 0), Mi();
      var t = li,
        e = ja,
        a = za,
        l = sg;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (fe = 5)
        : ((fe = 0), (ja = li = null), bg(t, t.pendingLanes));
      var c = t.pendingLanes;
      if (
        (c === 0 && (si = null),
        Qo(a),
        (e = e.stateNode),
        Ne && typeof Ne.onCommitFiberRoot == "function")
      )
        try {
          Ne.onCommitFiberRoot(ds, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (e = V.T), (c = q.p), (q.p = 2), (V.T = null);
        try {
          for (var u = t.onRecoverableError, y = 0; y < l.length; y++) {
            var b = l[y];
            u(b.value, { componentStack: b.stack });
          }
        } finally {
          (V.T = e), (q.p = c);
        }
      }
      (za & 3) !== 0 && zr(),
        pn(t),
        (c = t.pendingLanes),
        (a & 4194090) !== 0 && (c & 42) !== 0
          ? t === Cu
            ? Ws++
            : ((Ws = 0), (Cu = t))
          : (Ws = 0),
        $s(0);
    }
  }
  function bg(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Os(e)));
  }
  function zr(t) {
    return gg(), yg(), vg(), xg();
  }
  function xg() {
    if (fe !== 5) return !1;
    var t = li,
      e = Eu;
    Eu = 0;
    var a = Qo(za),
      l = V.T,
      c = q.p;
    try {
      (q.p = 32 > a ? 32 : a), (V.T = null), (a = Mu), (Mu = null);
      var u = li,
        y = za;
      if (((fe = 0), (ja = li = null), (za = 0), (_t & 6) !== 0))
        throw Error(r(331));
      var b = _t;
      if (
        ((_t |= 4),
        ig(u.current),
        tg(u, u.current, y, a),
        (_t = b),
        $s(0, !1),
        Ne && typeof Ne.onPostCommitFiberRoot == "function")
      )
        try {
          Ne.onPostCommitFiberRoot(ds, u);
        } catch {}
      return !0;
    } finally {
      (q.p = c), (V.T = l), bg(t, e);
    }
  }
  function Sg(t, e, a) {
    (e = Xe(a, e)),
      (e = su(t.stateNode, e, 2)),
      (t = Wn(t, e, 2)),
      t !== null && (ms(t, 2), pn(t));
  }
  function kt(t, e, a) {
    if (t.tag === 3) Sg(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Sg(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (si === null || !si.has(l)))
          ) {
            (t = Xe(a, t)),
              (a = Ep(2)),
              (l = Wn(e, a, 2)),
              l !== null && (Mp(a, l, e, t), ms(l, 2), pn(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Nu(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new FS();
      var c = new Set();
      l.set(e, c);
    } else (c = l.get(e)), c === void 0 && ((c = new Set()), l.set(e, c));
    c.has(a) ||
      ((Su = !0), c.add(a), (t = tT.bind(null, t, e, a)), e.then(t, t));
  }
  function tT(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Ut === t &&
        (Rt & a) === a &&
        (Gt === 4 || (Gt === 3 && (Rt & 62914560) === Rt && 300 > he() - Au)
          ? (_t & 2) === 0 && Va(t, 0)
          : (Tu |= a),
        _a === Rt && (_a = 0)),
      pn(t);
  }
  function Tg(t, e) {
    e === 0 && (e = vh()), (t = ya(t, e)), t !== null && (ms(t, e), pn(t));
  }
  function eT(t) {
    var e = t.memoizedState,
      a = 0;
    e !== null && (a = e.retryLane), Tg(t, a);
  }
  function nT(t, e) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          c = t.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(e), Tg(t, a);
  }
  function iT(t, e) {
    return ce(t, e);
  }
  var Vr = null,
    Ba = null,
    _u = !1,
    Lr = !1,
    ju = !1,
    Xi = 0;
  function pn(t) {
    t !== Ba &&
      t.next === null &&
      (Ba === null ? (Vr = Ba = t) : (Ba = Ba.next = t)),
      (Lr = !0),
      _u || ((_u = !0), sT());
  }
  function $s(t, e) {
    if (!ju && Lr) {
      ju = !0;
      do
        for (var a = !1, l = Vr; l !== null; ) {
          if (t !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var y = l.suspendedLanes,
                b = l.pingedLanes;
              (u = (1 << (31 - _e(42 | t) + 1)) - 1),
                (u &= c & ~(y & ~b)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((a = !0), Mg(l, u));
          } else
            (u = Rt),
              (u = Yl(
                l,
                l === Ut ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || hs(l, u) || ((a = !0), Mg(l, u));
          l = l.next;
        }
      while (a);
      ju = !1;
    }
  }
  function aT() {
    wg();
  }
  function wg() {
    Lr = _u = !1;
    var t = 0;
    Xi !== 0 && (hT() && (t = Xi), (Xi = 0));
    for (var e = he(), a = null, l = Vr; l !== null; ) {
      var c = l.next,
        u = Ag(l, e);
      u === 0
        ? ((l.next = null),
          a === null ? (Vr = c) : (a.next = c),
          c === null && (Ba = a))
        : ((a = l), (t !== 0 || (u & 3) !== 0) && (Lr = !0)),
        (l = c);
    }
    $s(t);
  }
  function Ag(t, e) {
    for (
      var a = t.suspendedLanes,
        l = t.pingedLanes,
        c = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var y = 31 - _e(u),
        b = 1 << y,
        C = c[y];
      C === -1
        ? ((b & a) === 0 || (b & l) !== 0) && (c[y] = O1(b, e))
        : C <= e && (t.expiredLanes |= b),
        (u &= ~b);
    }
    if (
      ((e = Ut),
      (a = Rt),
      (a = Yl(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      a === 0 ||
        (t === e && (jt === 2 || jt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Te(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || hs(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((l !== null && Te(l), Qo(a))) {
        case 2:
        case 8:
          a = ph;
          break;
        case 32:
          a = Ul;
          break;
        case 268435456:
          a = gh;
          break;
        default:
          a = Ul;
      }
      return (
        (l = Eg.bind(null, t)),
        (a = ce(a, l)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      l !== null && l !== null && Te(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Eg(t, e) {
    if (fe !== 0 && fe !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var a = t.callbackNode;
    if (zr() && t.callbackNode !== a) return null;
    var l = Rt;
    return (
      (l = Yl(
        t,
        t === Ut ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (rg(t, l, e),
          Ag(t, he()),
          t.callbackNode != null && t.callbackNode === a
            ? Eg.bind(null, t)
            : null)
    );
  }
  function Mg(t, e) {
    if (zr()) return null;
    rg(t, e, !0);
  }
  function sT() {
    pT(function () {
      (_t & 6) !== 0 ? ce(Ci, aT) : wg();
    });
  }
  function zu() {
    return Xi === 0 && (Xi = yh()), Xi;
  }
  function Cg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Zl("" + t);
  }
  function Rg(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function lT(t, e, a, l, c) {
    if (e === "submit" && a && a.stateNode === c) {
      var u = Cg((c[we] || null).action),
        y = l.submitter;
      y &&
        ((e = (e = y[we] || null)
          ? Cg(e.formAction)
          : y.getAttribute("formAction")),
        e !== null && ((u = e), (y = null)));
      var b = new $l("action", "action", null, l, c);
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Xi !== 0) {
                  var C = y ? Rg(c, y) : new FormData(c);
                  tu(
                    a,
                    { pending: !0, data: C, method: c.method, action: u },
                    null,
                    C
                  );
                }
              } else
                typeof u == "function" &&
                  (b.preventDefault(),
                  (C = y ? Rg(c, y) : new FormData(c)),
                  tu(
                    a,
                    { pending: !0, data: C, method: c.method, action: u },
                    u,
                    C
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Vu = 0; Vu < bc.length; Vu++) {
    var Lu = bc[Vu],
      rT = Lu.toLowerCase(),
      oT = Lu[0].toUpperCase() + Lu.slice(1);
    en(rT, "on" + oT);
  }
  en(rm, "onAnimationEnd"),
    en(om, "onAnimationIteration"),
    en(cm, "onAnimationStart"),
    en("dblclick", "onDoubleClick"),
    en("focusin", "onFocus"),
    en("focusout", "onBlur"),
    en(ES, "onTransitionRun"),
    en(MS, "onTransitionStart"),
    en(CS, "onTransitionCancel"),
    en(um, "onTransitionEnd"),
    ra("onMouseEnter", ["mouseout", "mouseover"]),
    ra("onMouseLeave", ["mouseout", "mouseover"]),
    ra("onPointerEnter", ["pointerout", "pointerover"]),
    ra("onPointerLeave", ["pointerout", "pointerover"]),
    Di(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Di(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Di("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Di(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Di(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Di(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Js =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    cT = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Js)
    );
  function Dg(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a],
        c = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var y = l.length - 1; 0 <= y; y--) {
            var b = l[y],
              C = b.instance,
              B = b.currentTarget;
            if (((b = b.listener), C !== u && c.isPropagationStopped()))
              break t;
            (u = b), (c.currentTarget = B);
            try {
              u(c);
            } catch (G) {
              wr(G);
            }
            (c.currentTarget = null), (u = C);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((b = l[y]),
              (C = b.instance),
              (B = b.currentTarget),
              (b = b.listener),
              C !== u && c.isPropagationStopped())
            )
              break t;
            (u = b), (c.currentTarget = B);
            try {
              u(c);
            } catch (G) {
              wr(G);
            }
            (c.currentTarget = null), (u = C);
          }
      }
    }
  }
  function Mt(t, e) {
    var a = e[Fo];
    a === void 0 && (a = e[Fo] = new Set());
    var l = t + "__bubble";
    a.has(l) || (Og(e, t, 2, !1), a.add(l));
  }
  function Bu(t, e, a) {
    var l = 0;
    e && (l |= 4), Og(a, t, l, e);
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function ku(t) {
    if (!t[Br]) {
      (t[Br] = !0),
        wh.forEach(function (a) {
          a !== "selectionchange" && (cT.has(a) || Bu(a, !1, t), Bu(a, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Br] || ((e[Br] = !0), Bu("selectionchange", !1, e));
    }
  }
  function Og(t, e, a, l) {
    switch (ty(e)) {
      case 2:
        var c = LT;
        break;
      case 8:
        c = BT;
        break;
      default:
        c = Ju;
    }
    (a = c.bind(null, e, a, t)),
      (c = void 0),
      !lc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: c })
          : t.addEventListener(e, a, !0)
        : c !== void 0
        ? t.addEventListener(e, a, { passive: c })
        : t.addEventListener(e, a, !1);
  }
  function Uu(t, e, a, l, c) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var b = l.stateNode.containerInfo;
          if (b === c) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var C = y.tag;
              if ((C === 3 || C === 4) && y.stateNode.containerInfo === c)
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = aa(b)), y === null)) return;
            if (((C = y.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              l = u = y;
              continue t;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    Bh(function () {
      var B = u,
        G = ac(a),
        F = [];
      t: {
        var k = fm.get(t);
        if (k !== void 0) {
          var H = $l,
            ht = t;
          switch (t) {
            case "keypress":
              if (Fl(a) === 0) break t;
            case "keydown":
            case "keyup":
              H = iS;
              break;
            case "focusin":
              (ht = "focus"), (H = uc);
              break;
            case "focusout":
              (ht = "blur"), (H = uc);
              break;
            case "beforeblur":
            case "afterblur":
              H = uc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = X1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = lS;
              break;
            case rm:
            case om:
            case cm:
              H = Q1;
              break;
            case um:
              H = oS;
              break;
            case "scroll":
            case "scrollend":
              H = q1;
              break;
            case "wheel":
              H = uS;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = W1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Yh;
              break;
            case "toggle":
            case "beforetoggle":
              H = dS;
          }
          var ut = (e & 4) !== 0,
            Lt = !ut && (t === "scroll" || t === "scrollend"),
            j = ut ? (k !== null ? k + "Capture" : null) : k;
          ut = [];
          for (var O = B, L; O !== null; ) {
            var K = O;
            if (
              ((L = K.stateNode),
              (K = K.tag),
              (K !== 5 && K !== 26 && K !== 27) ||
                L === null ||
                j === null ||
                ((K = ys(O, j)), K != null && ut.push(Is(O, K, L))),
              Lt)
            )
              break;
            O = O.return;
          }
          0 < ut.length &&
            ((k = new H(k, ht, null, a, G)),
            F.push({ event: k, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((k = t === "mouseover" || t === "pointerover"),
            (H = t === "mouseout" || t === "pointerout"),
            k &&
              a !== ic &&
              (ht = a.relatedTarget || a.fromElement) &&
              (aa(ht) || ht[ia]))
          )
            break t;
          if (
            (H || k) &&
            ((k =
              G.window === G
                ? G
                : (k = G.ownerDocument)
                ? k.defaultView || k.parentWindow
                : window),
            H
              ? ((ht = a.relatedTarget || a.toElement),
                (H = B),
                (ht = ht ? aa(ht) : null),
                ht !== null &&
                  ((Lt = d(ht)),
                  (ut = ht.tag),
                  ht !== Lt || (ut !== 5 && ut !== 27 && ut !== 6)) &&
                  (ht = null))
              : ((H = null), (ht = B)),
            H !== ht)
          ) {
            if (
              ((ut = Hh),
              (K = "onMouseLeave"),
              (j = "onMouseEnter"),
              (O = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ut = Yh),
                (K = "onPointerLeave"),
                (j = "onPointerEnter"),
                (O = "pointer")),
              (Lt = H == null ? k : gs(H)),
              (L = ht == null ? k : gs(ht)),
              (k = new ut(K, O + "leave", H, a, G)),
              (k.target = Lt),
              (k.relatedTarget = L),
              (K = null),
              aa(G) === B &&
                ((ut = new ut(j, O + "enter", ht, a, G)),
                (ut.target = L),
                (ut.relatedTarget = Lt),
                (K = ut)),
              (Lt = K),
              H && ht)
            )
              e: {
                for (ut = H, j = ht, O = 0, L = ut; L; L = ka(L)) O++;
                for (L = 0, K = j; K; K = ka(K)) L++;
                for (; 0 < O - L; ) (ut = ka(ut)), O--;
                for (; 0 < L - O; ) (j = ka(j)), L--;
                for (; O--; ) {
                  if (ut === j || (j !== null && ut === j.alternate)) break e;
                  (ut = ka(ut)), (j = ka(j));
                }
                ut = null;
              }
            else ut = null;
            H !== null && Ng(F, k, H, ut, !1),
              ht !== null && Lt !== null && Ng(F, Lt, ht, ut, !0);
          }
        }
        t: {
          if (
            ((k = B ? gs(B) : window),
            (H = k.nodeName && k.nodeName.toLowerCase()),
            H === "select" || (H === "input" && k.type === "file"))
          )
            var et = Wh;
          else if (Qh(k))
            if ($h) et = TS;
            else {
              et = xS;
              var Tt = bS;
            }
          else
            (H = k.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (k.type !== "checkbox" && k.type !== "radio")
                ? B && nc(B.elementType) && (et = Wh)
                : (et = SS);
          if (et && (et = et(t, B))) {
            Fh(F, et, a, G);
            break t;
          }
          Tt && Tt(t, k, B),
            t === "focusout" &&
              B &&
              k.type === "number" &&
              B.memoizedProps.value != null &&
              ec(k, "number", k.value);
        }
        switch (((Tt = B ? gs(B) : window), t)) {
          case "focusin":
            (Qh(Tt) || Tt.contentEditable === "true") &&
              ((ma = Tt), (gc = B), (Es = null));
            break;
          case "focusout":
            Es = gc = ma = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (yc = !1), sm(F, a, G);
            break;
          case "selectionchange":
            if (AS) break;
          case "keydown":
          case "keyup":
            sm(F, a, G);
        }
        var st;
        if (dc)
          t: {
            switch (t) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          ha
            ? Kh(t, a) && (dt = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (dt = "onCompositionStart");
        dt &&
          (qh &&
            a.locale !== "ko" &&
            (ha || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && ha && (st = kh())
              : ((Kn = G),
                (rc = "value" in Kn ? Kn.value : Kn.textContent),
                (ha = !0))),
          (Tt = kr(B, dt)),
          0 < Tt.length &&
            ((dt = new Ph(dt, t, null, a, G)),
            F.push({ event: dt, listeners: Tt }),
            st
              ? (dt.data = st)
              : ((st = Zh(a)), st !== null && (dt.data = st)))),
          (st = mS ? pS(t, a) : gS(t, a)) &&
            ((dt = kr(B, "onBeforeInput")),
            0 < dt.length &&
              ((Tt = new Ph("onBeforeInput", "beforeinput", null, a, G)),
              F.push({ event: Tt, listeners: dt }),
              (Tt.data = st))),
          lT(F, t, B, a, G);
      }
      Dg(F, e);
    });
  }
  function Is(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function kr(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var c = t,
        u = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          u === null ||
          ((c = ys(t, a)),
          c != null && l.unshift(Is(t, c, u)),
          (c = ys(t, e)),
          c != null && l.push(Is(t, c, u))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function ka(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ng(t, e, a, l, c) {
    for (var u = e._reactName, y = []; a !== null && a !== l; ) {
      var b = a,
        C = b.alternate,
        B = b.stateNode;
      if (((b = b.tag), C !== null && C === l)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        B === null ||
        ((C = B),
        c
          ? ((B = ys(a, u)), B != null && y.unshift(Is(a, B, C)))
          : c || ((B = ys(a, u)), B != null && y.push(Is(a, B, C)))),
        (a = a.return);
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var uT = /\r\n?/g,
    fT = /\u0000|\uFFFD/g;
  function _g(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        uT,
        `
`
      )
      .replace(fT, "");
  }
  function jg(t, e) {
    return (e = _g(e)), _g(t) === e;
  }
  function Ur() {}
  function Vt(t, e, a, l, c, u) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || ua(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            ua(t, "" + l);
        break;
      case "className":
        Gl(t, "class", l);
        break;
      case "tabIndex":
        Gl(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gl(t, a, l);
        break;
      case "style":
        Vh(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          Gl(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        (l = Zl("" + l)), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (e !== "input" && Vt(t, e, "name", c.name, c, null),
                Vt(t, e, "formEncType", c.formEncType, c, null),
                Vt(t, e, "formMethod", c.formMethod, c, null),
                Vt(t, e, "formTarget", c.formTarget, c, null))
              : (Vt(t, e, "encType", c.encType, c, null),
                Vt(t, e, "method", c.method, c, null),
                Vt(t, e, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        (l = Zl("" + l)), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = Ur);
        break;
      case "onScroll":
        l != null && Mt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Mt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (c.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (a = Zl("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "" + l)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(a, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(a, l)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(a)
          : t.setAttribute(a, l);
        break;
      case "popover":
        Mt("beforetoggle", t), Mt("toggle", t), ql(t, "popover", l);
        break;
      case "xlinkActuate":
        An(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        An(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        An(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        An(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        An(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        An(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        An(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        An(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        An(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        ql(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = P1.get(a) || a), ql(t, a, l));
    }
  }
  function Hu(t, e, a, l, c, u) {
    switch (a) {
      case "style":
        Vh(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((a = l.__html), a != null)) {
            if (c.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? ua(t, l)
          : (typeof l == "number" || typeof l == "bigint") && ua(t, "" + l);
        break;
      case "onScroll":
        l != null && Mt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Mt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Ur);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ah.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((c = a.endsWith("Capture")),
              (e = a.slice(2, c ? a.length - 7 : void 0)),
              (u = t[we] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && t.removeEventListener(e, u, c),
              typeof l == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, l, c);
              break t;
            }
            a in t
              ? (t[a] = l)
              : l === !0
              ? t.setAttribute(a, "")
              : ql(t, a, l);
          }
    }
  }
  function de(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Mt("error", t), Mt("load", t);
        var l = !1,
          c = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var y = a[u];
            if (y != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Vt(t, e, u, y, a, null);
              }
          }
        c && Vt(t, e, "srcSet", a.srcSet, a, null),
          l && Vt(t, e, "src", a.src, a, null);
        return;
      case "input":
        Mt("invalid", t);
        var b = (u = y = c = null),
          C = null,
          B = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var G = a[l];
            if (G != null)
              switch (l) {
                case "name":
                  c = G;
                  break;
                case "type":
                  y = G;
                  break;
                case "checked":
                  C = G;
                  break;
                case "defaultChecked":
                  B = G;
                  break;
                case "value":
                  u = G;
                  break;
                case "defaultValue":
                  b = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null) throw Error(r(137, e));
                  break;
                default:
                  Vt(t, e, l, G, a, null);
              }
          }
        Nh(t, u, b, C, B, y, c, !1), Xl(t);
        return;
      case "select":
        Mt("invalid", t), (l = y = u = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((b = a[c]), b != null))
            switch (c) {
              case "value":
                u = b;
                break;
              case "defaultValue":
                y = b;
                break;
              case "multiple":
                l = b;
              default:
                Vt(t, e, c, b, a, null);
            }
        (e = u),
          (a = y),
          (t.multiple = !!l),
          e != null ? ca(t, !!l, e, !1) : a != null && ca(t, !!l, a, !0);
        return;
      case "textarea":
        Mt("invalid", t), (u = c = l = null);
        for (y in a)
          if (a.hasOwnProperty(y) && ((b = a[y]), b != null))
            switch (y) {
              case "value":
                l = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
                u = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(91));
                break;
              default:
                Vt(t, e, y, b, a, null);
            }
        jh(t, l, c, u), Xl(t);
        return;
      case "option":
        for (C in a)
          if (a.hasOwnProperty(C) && ((l = a[C]), l != null))
            switch (C) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Vt(t, e, C, l, a, null);
            }
        return;
      case "dialog":
        Mt("beforetoggle", t), Mt("toggle", t), Mt("cancel", t), Mt("close", t);
        break;
      case "iframe":
      case "object":
        Mt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Js.length; l++) Mt(Js[l], t);
        break;
      case "image":
        Mt("error", t), Mt("load", t);
        break;
      case "details":
        Mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Mt("error", t), Mt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in a)
          if (a.hasOwnProperty(B) && ((l = a[B]), l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Vt(t, e, B, l, a, null);
            }
        return;
      default:
        if (nc(e)) {
          for (G in a)
            a.hasOwnProperty(G) &&
              ((l = a[G]), l !== void 0 && Hu(t, e, G, l, a, void 0));
          return;
        }
    }
    for (b in a)
      a.hasOwnProperty(b) && ((l = a[b]), l != null && Vt(t, e, b, l, a, null));
  }
  function dT(t, e, a, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          u = null,
          y = null,
          b = null,
          C = null,
          B = null,
          G = null;
        for (H in a) {
          var F = a[H];
          if (a.hasOwnProperty(H) && F != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = F;
              default:
                l.hasOwnProperty(H) || Vt(t, e, H, null, l, F);
            }
        }
        for (var k in l) {
          var H = l[k];
          if (((F = a[k]), l.hasOwnProperty(k) && (H != null || F != null)))
            switch (k) {
              case "type":
                u = H;
                break;
              case "name":
                c = H;
                break;
              case "checked":
                B = H;
                break;
              case "defaultChecked":
                G = H;
                break;
              case "value":
                y = H;
                break;
              case "defaultValue":
                b = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(r(137, e));
                break;
              default:
                H !== F && Vt(t, e, k, H, l, F);
            }
        }
        tc(t, y, b, C, B, G, u, c);
        return;
      case "select":
        H = y = b = k = null;
        for (u in a)
          if (((C = a[u]), a.hasOwnProperty(u) && C != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                H = C;
              default:
                l.hasOwnProperty(u) || Vt(t, e, u, null, l, C);
            }
        for (c in l)
          if (
            ((u = l[c]),
            (C = a[c]),
            l.hasOwnProperty(c) && (u != null || C != null))
          )
            switch (c) {
              case "value":
                k = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "multiple":
                y = u;
              default:
                u !== C && Vt(t, e, c, u, l, C);
            }
        (e = b),
          (a = y),
          (l = H),
          k != null
            ? ca(t, !!a, k, !1)
            : !!l != !!a &&
              (e != null ? ca(t, !!a, e, !0) : ca(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        H = k = null;
        for (b in a)
          if (
            ((c = a[b]),
            a.hasOwnProperty(b) && c != null && !l.hasOwnProperty(b))
          )
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Vt(t, e, b, null, l, c);
            }
        for (y in l)
          if (
            ((c = l[y]),
            (u = a[y]),
            l.hasOwnProperty(y) && (c != null || u != null))
          )
            switch (y) {
              case "value":
                k = c;
                break;
              case "defaultValue":
                H = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                c !== u && Vt(t, e, y, c, l, u);
            }
        _h(t, k, H);
        return;
      case "option":
        for (var ht in a)
          if (
            ((k = a[ht]),
            a.hasOwnProperty(ht) && k != null && !l.hasOwnProperty(ht))
          )
            switch (ht) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Vt(t, e, ht, null, l, k);
            }
        for (C in l)
          if (
            ((k = l[C]),
            (H = a[C]),
            l.hasOwnProperty(C) && k !== H && (k != null || H != null))
          )
            switch (C) {
              case "selected":
                t.selected =
                  k && typeof k != "function" && typeof k != "symbol";
                break;
              default:
                Vt(t, e, C, k, l, H);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ut in a)
          (k = a[ut]),
            a.hasOwnProperty(ut) &&
              k != null &&
              !l.hasOwnProperty(ut) &&
              Vt(t, e, ut, null, l, k);
        for (B in l)
          if (
            ((k = l[B]),
            (H = a[B]),
            l.hasOwnProperty(B) && k !== H && (k != null || H != null))
          )
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(r(137, e));
                break;
              default:
                Vt(t, e, B, k, l, H);
            }
        return;
      default:
        if (nc(e)) {
          for (var Lt in a)
            (k = a[Lt]),
              a.hasOwnProperty(Lt) &&
                k !== void 0 &&
                !l.hasOwnProperty(Lt) &&
                Hu(t, e, Lt, void 0, l, k);
          for (G in l)
            (k = l[G]),
              (H = a[G]),
              !l.hasOwnProperty(G) ||
                k === H ||
                (k === void 0 && H === void 0) ||
                Hu(t, e, G, k, l, H);
          return;
        }
    }
    for (var j in a)
      (k = a[j]),
        a.hasOwnProperty(j) &&
          k != null &&
          !l.hasOwnProperty(j) &&
          Vt(t, e, j, null, l, k);
    for (F in l)
      (k = l[F]),
        (H = a[F]),
        !l.hasOwnProperty(F) ||
          k === H ||
          (k == null && H == null) ||
          Vt(t, e, F, k, l, H);
  }
  var Pu = null,
    Yu = null;
  function Hr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function zg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vg(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function qu(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gu = null;
  function hT() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Gu
        ? !1
        : ((Gu = t), !0)
      : ((Gu = null), !1);
  }
  var Lg = typeof setTimeout == "function" ? setTimeout : void 0,
    mT = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bg = typeof Promise == "function" ? Promise : void 0,
    pT =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bg < "u"
        ? function (t) {
            return Bg.resolve(null).then(t).catch(gT);
          }
        : Lg;
  function gT(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function oi(t) {
    return t === "head";
  }
  function kg(t, e) {
    var a = e,
      l = 0,
      c = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$")) {
          if (0 < l && 8 > l) {
            a = l;
            var y = t.ownerDocument;
            if ((a & 1 && tl(y.documentElement), a & 2 && tl(y.body), a & 4))
              for (a = y.head, tl(a), y = a.firstChild; y; ) {
                var b = y.nextSibling,
                  C = y.nodeName;
                y[ps] ||
                  C === "SCRIPT" ||
                  C === "STYLE" ||
                  (C === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(y),
                  (y = b);
              }
          }
          if (c === 0) {
            t.removeChild(u), ol(e);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? c++
            : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = u;
    } while (a);
    ol(e);
  }
  function Xu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xu(a), Wo(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function yT(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var c = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[ps])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== c.rel ||
                t.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                t.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                t.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (c.src == null ? null : c.src) ||
                  t.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  t.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = an(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function vT(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = an(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ku(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function bT(t, e) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete") e();
    else {
      var l = function () {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function an(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Zu = null;
  function Ug(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (e === 0) return t;
          e--;
        } else a === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Hg(t, e, a) {
    switch (((e = Hr(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function tl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Wo(t);
  }
  var $e = new Map(),
    Pg = new Set();
  function Pr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var kn = q.d;
  q.d = { f: xT, r: ST, D: TT, C: wT, L: AT, m: ET, X: CT, S: MT, M: RT };
  function xT() {
    var t = kn.f(),
      e = _r();
    return t || e;
  }
  function ST(t) {
    var e = sa(t);
    e !== null && e.tag === 5 && e.type === "form" ? rp(e) : kn.r(t);
  }
  var Ua = typeof document > "u" ? null : document;
  function Yg(t, e, a) {
    var l = Ua;
    if (l && typeof e == "string" && e) {
      var c = Ge(e);
      (c = 'link[rel="' + t + '"][href="' + c + '"]'),
        typeof a == "string" && (c += '[crossorigin="' + a + '"]'),
        Pg.has(c) ||
          (Pg.add(c),
          (t = { rel: t, crossOrigin: a, href: e }),
          l.querySelector(c) === null &&
            ((e = l.createElement("link")),
            de(e, "link", t),
            ie(e),
            l.head.appendChild(e)));
    }
  }
  function TT(t) {
    kn.D(t), Yg("dns-prefetch", t, null);
  }
  function wT(t, e) {
    kn.C(t, e), Yg("preconnect", t, e);
  }
  function AT(t, e, a) {
    kn.L(t, e, a);
    var l = Ua;
    if (l && t && e) {
      var c = 'link[rel="preload"][as="' + Ge(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((c += '[imagesrcset="' + Ge(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (c += '[imagesizes="' + Ge(a.imageSizes) + '"]'))
        : (c += '[href="' + Ge(t) + '"]');
      var u = c;
      switch (e) {
        case "style":
          u = Ha(t);
          break;
        case "script":
          u = Pa(t);
      }
      $e.has(u) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && a && a.imageSrcSet ? void 0 : t,
            as: e,
          },
          a
        )),
        $e.set(u, t),
        l.querySelector(c) !== null ||
          (e === "style" && l.querySelector(el(u))) ||
          (e === "script" && l.querySelector(nl(u))) ||
          ((e = l.createElement("link")),
          de(e, "link", t),
          ie(e),
          l.head.appendChild(e)));
    }
  }
  function ET(t, e) {
    kn.m(t, e);
    var a = Ua;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Ge(l) + '"][href="' + Ge(t) + '"]',
        u = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Pa(t);
      }
      if (
        !$e.has(u) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        $e.set(u, t),
        a.querySelector(c) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(nl(u))) return;
        }
        (l = a.createElement("link")),
          de(l, "link", t),
          ie(l),
          a.head.appendChild(l);
      }
    }
  }
  function MT(t, e, a) {
    kn.S(t, e, a);
    var l = Ua;
    if (l && t) {
      var c = la(l).hoistableStyles,
        u = Ha(t);
      e = e || "default";
      var y = c.get(u);
      if (!y) {
        var b = { loading: 0, preload: null };
        if ((y = l.querySelector(el(u)))) b.loading = 5;
        else {
          (t = g({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = $e.get(u)) && Qu(t, a);
          var C = (y = l.createElement("link"));
          ie(C),
            de(C, "link", t),
            (C._p = new Promise(function (B, G) {
              (C.onload = B), (C.onerror = G);
            })),
            C.addEventListener("load", function () {
              b.loading |= 1;
            }),
            C.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            Yr(y, e, l);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: b }),
          c.set(u, y);
      }
    }
  }
  function CT(t, e) {
    kn.X(t, e);
    var a = Ua;
    if (a && t) {
      var l = la(a).hoistableScripts,
        c = Pa(t),
        u = l.get(c);
      u ||
        ((u = a.querySelector(nl(c))),
        u ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = $e.get(c)) && Fu(t, e),
          (u = a.createElement("script")),
          ie(u),
          de(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(c, u));
    }
  }
  function RT(t, e) {
    kn.M(t, e);
    var a = Ua;
    if (a && t) {
      var l = la(a).hoistableScripts,
        c = Pa(t),
        u = l.get(c);
      u ||
        ((u = a.querySelector(nl(c))),
        u ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = $e.get(c)) && Fu(t, e),
          (u = a.createElement("script")),
          ie(u),
          de(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(c, u));
    }
  }
  function qg(t, e, a, l) {
    var c = (c = rt.current) ? Pr(c) : null;
    if (!c) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = Ha(a.href)),
            (a = la(c).hoistableStyles),
            (l = a.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = Ha(a.href);
          var u = la(c).hoistableStyles,
            y = u.get(t);
          if (
            (y ||
              ((c = c.ownerDocument || c),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, y),
              (u = c.querySelector(el(t))) &&
                !u._p &&
                ((y.instance = u), (y.state.loading = 5)),
              $e.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                $e.set(t, a),
                u || DT(c, t, a, y.state))),
            e && l === null)
          )
            throw Error(r(528, ""));
          return y;
        }
        if (e && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Pa(a)),
              (a = la(c).hoistableScripts),
              (l = a.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ha(t) {
    return 'href="' + Ge(t) + '"';
  }
  function el(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Gg(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function DT(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        de(e, "link", a),
        ie(e),
        t.head.appendChild(e));
  }
  function Pa(t) {
    return '[src="' + Ge(t) + '"]';
  }
  function nl(t) {
    return "script[async]" + t;
  }
  function Xg(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Ge(a.href) + '"]');
          if (l) return (e.instance = l), ie(l), l;
          var c = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            ie(l),
            de(l, "style", c),
            Yr(l, a.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          c = Ha(a.href);
          var u = t.querySelector(el(c));
          if (u) return (e.state.loading |= 4), (e.instance = u), ie(u), u;
          (l = Gg(a)),
            (c = $e.get(c)) && Qu(l, c),
            (u = (t.ownerDocument || t).createElement("link")),
            ie(u);
          var y = u;
          return (
            (y._p = new Promise(function (b, C) {
              (y.onload = b), (y.onerror = C);
            })),
            de(u, "link", l),
            (e.state.loading |= 4),
            Yr(u, a.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Pa(a.src)),
            (c = t.querySelector(nl(u)))
              ? ((e.instance = c), ie(c), c)
              : ((l = a),
                (c = $e.get(u)) && ((l = g({}, a)), Fu(l, c)),
                (t = t.ownerDocument || t),
                (c = t.createElement("script")),
                ie(c),
                de(c, "link", l),
                t.head.appendChild(c),
                (e.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Yr(l, a.precedence, t));
    return e.instance;
  }
  function Yr(t, e, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = l.length ? l[l.length - 1] : null,
        u = c,
        y = 0;
      y < l.length;
      y++
    ) {
      var b = l[y];
      if (b.dataset.precedence === e) u = b;
      else if (u !== c) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function Qu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Fu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var qr = null;
  function Kg(t, e, a) {
    if (qr === null) {
      var l = new Map(),
        c = (qr = new Map());
      c.set(a, l);
    } else (c = qr), (l = c.get(a)), l || ((l = new Map()), c.set(a, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), a = a.getElementsByTagName(t), c = 0;
      c < a.length;
      c++
    ) {
      var u = a[c];
      if (
        !(
          u[ps] ||
          u[me] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = u.getAttribute(e) || "";
        y = t + y;
        var b = l.get(y);
        b ? b.push(u) : l.set(y, [u]);
      }
    }
    return l;
  }
  function Zg(t, e, a) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function OT(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Qg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var il = null;
  function NT() {}
  function _T(t, e, a) {
    if (il === null) throw Error(r(475));
    var l = il;
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var c = Ha(a.href),
          u = t.querySelector(el(c));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Gr.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            ie(u);
          return;
        }
        (u = t.ownerDocument || t),
          (a = Gg(a)),
          (c = $e.get(c)) && Qu(a, c),
          (u = u.createElement("link")),
          ie(u);
        var y = u;
        (y._p = new Promise(function (b, C) {
          (y.onload = b), (y.onerror = C);
        })),
          de(u, "link", a),
          (e.instance = u);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Gr.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function jT() {
    if (il === null) throw Error(r(475));
    var t = il;
    return (
      t.stylesheets && t.count === 0 && Wu(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Wu(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Gr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Xr = null;
  function Wu(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Xr = new Map()),
        e.forEach(zT, t),
        (Xr = null),
        Gr.call(t));
  }
  function zT(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Xr.get(t);
      if (a) var l = a.get(null);
      else {
        (a = new Map()), Xr.set(t, a);
        for (
          var c = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < c.length;
          u++
        ) {
          var y = c[u];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (a.set(y.dataset.precedence, y), (l = y));
        }
        l && a.set(null, l);
      }
      (c = e.instance),
        (y = c.getAttribute("data-precedence")),
        (u = a.get(y) || l),
        u === l && a.set(null, c),
        a.set(y, c),
        this.count++,
        (l = Gr.bind(this)),
        c.addEventListener("load", l),
        c.addEventListener("error", l),
        u
          ? u.parentNode.insertBefore(c, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(c, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var al = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: U,
    _currentValue2: U,
    _threadCount: 0,
  };
  function VT(t, e, a, l, c, u, y, b) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ko(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ko(0)),
      (this.hiddenUpdates = Ko(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = c),
      (this.onCaughtError = u),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function Fg(t, e, a, l, c, u, y, b, C, B, G, F) {
    return (
      (t = new VT(t, e, a, y, b, C, B, F)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = ze(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Nc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: l, isDehydrated: a, cache: e }),
      Vc(u),
      t
    );
  }
  function Wg(t) {
    return t ? ((t = va), t) : va;
  }
  function $g(t, e, a, l, c, u) {
    (c = Wg(c)),
      l.context === null ? (l.context = c) : (l.pendingContext = c),
      (l = Fn(e)),
      (l.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (a = Wn(t, l, e)),
      a !== null && (Ue(a, t, e), zs(a, t, e));
  }
  function Jg(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function $u(t, e) {
    Jg(t, e), (t = t.alternate) && Jg(t, e);
  }
  function Ig(t) {
    if (t.tag === 13) {
      var e = ya(t, 67108864);
      e !== null && Ue(e, t, 67108864), $u(t, 67108864);
    }
  }
  var Kr = !0;
  function LT(t, e, a, l) {
    var c = V.T;
    V.T = null;
    var u = q.p;
    try {
      (q.p = 2), Ju(t, e, a, l);
    } finally {
      (q.p = u), (V.T = c);
    }
  }
  function BT(t, e, a, l) {
    var c = V.T;
    V.T = null;
    var u = q.p;
    try {
      (q.p = 8), Ju(t, e, a, l);
    } finally {
      (q.p = u), (V.T = c);
    }
  }
  function Ju(t, e, a, l) {
    if (Kr) {
      var c = Iu(l);
      if (c === null) Uu(t, e, l, Zr, a), ey(t, l);
      else if (UT(c, t, e, a, l)) l.stopPropagation();
      else if ((ey(t, l), e & 4 && -1 < kT.indexOf(t))) {
        for (; c !== null; ) {
          var u = sa(c);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var y = Ri(u.pendingLanes);
                  if (y !== 0) {
                    var b = u;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var C = 1 << (31 - _e(y));
                      (b.entanglements[1] |= C), (y &= ~C);
                    }
                    pn(u), (_t & 6) === 0 && ((Or = he() + 500), $s(0));
                  }
                }
                break;
              case 13:
                (b = ya(u, 2)), b !== null && Ue(b, u, 2), _r(), $u(u, 2);
            }
          if (((u = Iu(l)), u === null && Uu(t, e, l, Zr, a), u === c)) break;
          c = u;
        }
        c !== null && l.stopPropagation();
      } else Uu(t, e, l, null, a);
    }
  }
  function Iu(t) {
    return (t = ac(t)), tf(t);
  }
  var Zr = null;
  function tf(t) {
    if (((Zr = null), (t = aa(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Zr = t), null;
  }
  function ty(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Xo()) {
          case Ci:
            return 2;
          case ph:
            return 8;
          case Ul:
          case A1:
            return 32;
          case gh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1,
    ci = null,
    ui = null,
    fi = null,
    sl = new Map(),
    ll = new Map(),
    di = [],
    kT =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function ey(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ci = null;
        break;
      case "dragenter":
      case "dragleave":
        ui = null;
        break;
      case "mouseover":
      case "mouseout":
        fi = null;
        break;
      case "pointerover":
      case "pointerout":
        sl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ll.delete(e.pointerId);
    }
  }
  function rl(t, e, a, l, c, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [c],
        }),
        e !== null && ((e = sa(e)), e !== null && Ig(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        c !== null && e.indexOf(c) === -1 && e.push(c),
        t);
  }
  function UT(t, e, a, l, c) {
    switch (e) {
      case "focusin":
        return (ci = rl(ci, t, e, a, l, c)), !0;
      case "dragenter":
        return (ui = rl(ui, t, e, a, l, c)), !0;
      case "mouseover":
        return (fi = rl(fi, t, e, a, l, c)), !0;
      case "pointerover":
        var u = c.pointerId;
        return sl.set(u, rl(sl.get(u) || null, t, e, a, l, c)), !0;
      case "gotpointercapture":
        return (
          (u = c.pointerId), ll.set(u, rl(ll.get(u) || null, t, e, a, l, c)), !0
        );
    }
    return !1;
  }
  function ny(t) {
    var e = aa(t.target);
    if (e !== null) {
      var a = d(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = f(a)), e !== null)) {
            (t.blockedOn = e),
              _1(t.priority, function () {
                if (a.tag === 13) {
                  var l = ke();
                  l = Zo(l);
                  var c = ya(a, l);
                  c !== null && Ue(c, a, l), $u(a, l);
                }
              });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Qr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Iu(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        (ic = l), a.target.dispatchEvent(l), (ic = null);
      } else return (e = sa(a)), e !== null && Ig(e), (t.blockedOn = a), !1;
      e.shift();
    }
    return !0;
  }
  function iy(t, e, a) {
    Qr(t) && a.delete(e);
  }
  function HT() {
    (ef = !1),
      ci !== null && Qr(ci) && (ci = null),
      ui !== null && Qr(ui) && (ui = null),
      fi !== null && Qr(fi) && (fi = null),
      sl.forEach(iy),
      ll.forEach(iy);
  }
  function Fr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      ef ||
        ((ef = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, HT)));
  }
  var Wr = null;
  function ay(t) {
    Wr !== t &&
      ((Wr = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Wr === t && (Wr = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            l = t[e + 1],
            c = t[e + 2];
          if (typeof l != "function") {
            if (tf(l || a) === null) continue;
            break;
          }
          var u = sa(a);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            tu(u, { pending: !0, data: c, method: a.method, action: l }, l, c));
        }
      }));
  }
  function ol(t) {
    function e(C) {
      return Fr(C, t);
    }
    ci !== null && Fr(ci, t),
      ui !== null && Fr(ui, t),
      fi !== null && Fr(fi, t),
      sl.forEach(e),
      ll.forEach(e);
    for (var a = 0; a < di.length; a++) {
      var l = di[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < di.length && ((a = di[0]), a.blockedOn === null); )
      ny(a), a.blockedOn === null && di.shift();
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var c = a[l],
          u = a[l + 1],
          y = c[we] || null;
        if (typeof u == "function") y || ay(a);
        else if (y) {
          var b = null;
          if (u && u.hasAttribute("formAction")) {
            if (((c = u), (y = u[we] || null))) b = y.formAction;
            else if (tf(c) !== null) continue;
          } else b = y.action;
          typeof b == "function" ? (a[l + 1] = b) : (a.splice(l, 3), (l -= 3)),
            ay(a);
        }
      }
  }
  function nf(t) {
    this._internalRoot = t;
  }
  ($r.prototype.render = nf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var a = e.current,
        l = ke();
      $g(a, l, t, e, null, null);
    }),
    ($r.prototype.unmount = nf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          $g(t.current, 2, null, t, null, null), _r(), (e[ia] = null);
        }
      });
  function $r(t) {
    this._internalRoot = t;
  }
  $r.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Sh();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < di.length && e !== 0 && e < di[a].priority; a++);
      di.splice(a, 0, t), a === 0 && ny(t);
    }
  };
  var sy = i.version;
  if (sy !== "19.1.0") throw Error(r(527, sy, "19.1.0"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var PT = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: V,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jr.isDisabled && Jr.supportsFiber)
      try {
        (ds = Jr.inject(PT)), (Ne = Jr);
      } catch {}
  }
  return (
    (ul.createRoot = function (t, e) {
      if (!o(t)) throw Error(r(299));
      var a = !1,
        l = "",
        c = Sp,
        u = Tp,
        y = wp,
        b = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (c = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (y = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (b = e.unstable_transitionCallbacks)),
        (e = Fg(t, 1, !1, null, null, a, l, c, u, y, b, null)),
        (t[ia] = e.current),
        ku(t),
        new nf(e)
      );
    }),
    (ul.hydrateRoot = function (t, e, a) {
      if (!o(t)) throw Error(r(299));
      var l = !1,
        c = "",
        u = Sp,
        y = Tp,
        b = wp,
        C = null,
        B = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (c = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (y = a.onCaughtError),
          a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (C = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (B = a.formState)),
        (e = Fg(t, 1, !0, e, a ?? null, l, c, u, y, b, C, B)),
        (e.context = Wg(null)),
        (a = e.current),
        (l = ke()),
        (l = Zo(l)),
        (c = Fn(l)),
        (c.callback = null),
        Wn(a, c, l),
        (a = l),
        (e.current.lanes = a),
        ms(e, a),
        pn(e),
        (t[ia] = e.current),
        ku(t),
        new $r(e)
      );
    }),
    (ul.version = "19.1.0"),
    ul
  );
}
var py;
function $T() {
  if (py) return lf.exports;
  py = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (lf.exports = WT()), lf.exports;
}
var JT = $T();
function gy(n, i) {
  if (typeof n == "function") return n(i);
  n != null && (n.current = i);
}
function IT(...n) {
  return (i) => {
    let s = !1;
    const r = n.map((o) => {
      const d = gy(o, i);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const d = r[o];
          typeof d == "function" ? d() : gy(n[o], null);
        }
      };
  };
}
function oe(...n) {
  return S.useCallback(IT(...n), n);
}
function Al(n) {
  const i = tw(n),
    s = S.forwardRef((r, o) => {
      const { children: d, ...f } = r,
        h = S.Children.toArray(d),
        p = h.find(nw);
      if (p) {
        const m = p.props.children,
          g = h.map((v) =>
            v === p
              ? S.Children.count(m) > 1
                ? S.Children.only(null)
                : S.isValidElement(m)
                ? m.props.children
                : null
              : v
          );
        return A.jsx(i, {
          ...f,
          ref: o,
          children: S.isValidElement(m) ? S.cloneElement(m, void 0, g) : null,
        });
      }
      return A.jsx(i, { ...f, ref: o, children: d });
    });
  return (s.displayName = `${n}.Slot`), s;
}
var v0 = Al("Slot");
function tw(n) {
  const i = S.forwardRef((s, r) => {
    const { children: o, ...d } = s,
      f = S.isValidElement(o) ? aw(o) : void 0,
      h = oe(f, r);
    if (S.isValidElement(o)) {
      const p = iw(d, o.props);
      return o.type !== S.Fragment && (p.ref = h), S.cloneElement(o, p);
    }
    return S.Children.count(o) > 1 ? S.Children.only(null) : null;
  });
  return (i.displayName = `${n}.SlotClone`), i;
}
var ew = Symbol("radix.slottable");
function nw(n) {
  return (
    S.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === ew
  );
}
function iw(n, i) {
  const s = { ...i };
  for (const r in i) {
    const o = n[r],
      d = i[r];
    /^on[A-Z]/.test(r)
      ? o && d
        ? (s[r] = (...h) => {
            const p = d(...h);
            return o(...h), p;
          })
        : o && (s[r] = o)
      : r === "style"
      ? (s[r] = { ...o, ...d })
      : r === "className" && (s[r] = [o, d].filter(Boolean).join(" "));
  }
  return { ...n, ...s };
}
function aw(n) {
  var r, o;
  let i =
      (r = Object.getOwnPropertyDescriptor(n.props, "ref")) == null
        ? void 0
        : r.get,
    s = i && "isReactWarning" in i && i.isReactWarning;
  return s
    ? n.ref
    : ((i =
        (o = Object.getOwnPropertyDescriptor(n, "ref")) == null
          ? void 0
          : o.get),
      (s = i && "isReactWarning" in i && i.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
function b0(n) {
  var i,
    s,
    r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var o = n.length;
      for (i = 0; i < o; i++)
        n[i] && (s = b0(n[i])) && (r && (r += " "), (r += s));
    } else for (s in n) n[s] && (r && (r += " "), (r += s));
  return r;
}
function x0() {
  for (var n, i, s = 0, r = "", o = arguments.length; s < o; s++)
    (n = arguments[s]) && (i = b0(n)) && (r && (r += " "), (r += i));
  return r;
}
const yy = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  vy = x0,
  S0 = (n, i) => (s) => {
    var r;
    if ((i == null ? void 0 : i.variants) == null)
      return vy(
        n,
        s == null ? void 0 : s.class,
        s == null ? void 0 : s.className
      );
    const { variants: o, defaultVariants: d } = i,
      f = Object.keys(o).map((m) => {
        const g = s == null ? void 0 : s[m],
          v = d == null ? void 0 : d[m];
        if (g === null) return null;
        const x = yy(g) || yy(v);
        return o[m][x];
      }),
      h =
        s &&
        Object.entries(s).reduce((m, g) => {
          let [v, x] = g;
          return x === void 0 || (m[v] = x), m;
        }, {}),
      p =
        i == null || (r = i.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((m, g) => {
              let { class: v, className: x, ...T } = g;
              return Object.entries(T).every((D) => {
                let [w, E] = D;
                return Array.isArray(E)
                  ? E.includes({ ...d, ...h }[w])
                  : { ...d, ...h }[w] === E;
              })
                ? [...m, v, x]
                : m;
            }, []);
    return vy(
      n,
      f,
      p,
      s == null ? void 0 : s.class,
      s == null ? void 0 : s.className
    );
  },
  Sd = "-",
  sw = (n) => {
    const i = rw(n),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: r } = n;
    return {
      getClassGroupId: (f) => {
        const h = f.split(Sd);
        return h[0] === "" && h.length !== 1 && h.shift(), T0(h, i) || lw(f);
      },
      getConflictingClassGroupIds: (f, h) => {
        const p = s[f] || [];
        return h && r[f] ? [...p, ...r[f]] : p;
      },
    };
  },
  T0 = (n, i) => {
    var f;
    if (n.length === 0) return i.classGroupId;
    const s = n[0],
      r = i.nextPart.get(s),
      o = r ? T0(n.slice(1), r) : void 0;
    if (o) return o;
    if (i.validators.length === 0) return;
    const d = n.join(Sd);
    return (f = i.validators.find(({ validator: h }) => h(d))) == null
      ? void 0
      : f.classGroupId;
  },
  by = /^\[(.+)\]$/,
  lw = (n) => {
    if (by.test(n)) {
      const i = by.exec(n)[1],
        s = i == null ? void 0 : i.substring(0, i.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  rw = (n) => {
    const { theme: i, classGroups: s } = n,
      r = { nextPart: new Map(), validators: [] };
    for (const o in s) Vf(s[o], r, o, i);
    return r;
  },
  Vf = (n, i, s, r) => {
    n.forEach((o) => {
      if (typeof o == "string") {
        const d = o === "" ? i : xy(i, o);
        d.classGroupId = s;
        return;
      }
      if (typeof o == "function") {
        if (ow(o)) {
          Vf(o(r), i, s, r);
          return;
        }
        i.validators.push({ validator: o, classGroupId: s });
        return;
      }
      Object.entries(o).forEach(([d, f]) => {
        Vf(f, xy(i, d), s, r);
      });
    });
  },
  xy = (n, i) => {
    let s = n;
    return (
      i.split(Sd).forEach((r) => {
        s.nextPart.has(r) ||
          s.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(r));
      }),
      s
    );
  },
  ow = (n) => n.isThemeGetter,
  cw = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      s = new Map(),
      r = new Map();
    const o = (d, f) => {
      s.set(d, f), i++, i > n && ((i = 0), (r = s), (s = new Map()));
    };
    return {
      get(d) {
        let f = s.get(d);
        if (f !== void 0) return f;
        if ((f = r.get(d)) !== void 0) return o(d, f), f;
      },
      set(d, f) {
        s.has(d) ? s.set(d, f) : o(d, f);
      },
    };
  },
  Lf = "!",
  Bf = ":",
  uw = Bf.length,
  fw = (n) => {
    const { prefix: i, experimentalParseClassName: s } = n;
    let r = (o) => {
      const d = [];
      let f = 0,
        h = 0,
        p = 0,
        m;
      for (let D = 0; D < o.length; D++) {
        let w = o[D];
        if (f === 0 && h === 0) {
          if (w === Bf) {
            d.push(o.slice(p, D)), (p = D + uw);
            continue;
          }
          if (w === "/") {
            m = D;
            continue;
          }
        }
        w === "[" ? f++ : w === "]" ? f-- : w === "(" ? h++ : w === ")" && h--;
      }
      const g = d.length === 0 ? o : o.substring(p),
        v = dw(g),
        x = v !== g,
        T = m && m > p ? m - p : void 0;
      return {
        modifiers: d,
        hasImportantModifier: x,
        baseClassName: v,
        maybePostfixModifierPosition: T,
      };
    };
    if (i) {
      const o = i + Bf,
        d = r;
      r = (f) =>
        f.startsWith(o)
          ? d(f.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (s) {
      const o = r;
      r = (d) => s({ className: d, parseClassName: o });
    }
    return r;
  },
  dw = (n) =>
    n.endsWith(Lf)
      ? n.substring(0, n.length - 1)
      : n.startsWith(Lf)
      ? n.substring(1)
      : n,
  hw = (n) => {
    const i = Object.fromEntries(n.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const o = [];
      let d = [];
      return (
        r.forEach((f) => {
          f[0] === "[" || i[f] ? (o.push(...d.sort(), f), (d = [])) : d.push(f);
        }),
        o.push(...d.sort()),
        o
      );
    };
  },
  mw = (n) => ({
    cache: cw(n.cacheSize),
    parseClassName: fw(n),
    sortModifiers: hw(n),
    ...sw(n),
  }),
  pw = /\s+/,
  gw = (n, i) => {
    const {
        parseClassName: s,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
        sortModifiers: d,
      } = i,
      f = [],
      h = n.trim().split(pw);
    let p = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const g = h[m],
        {
          isExternal: v,
          modifiers: x,
          hasImportantModifier: T,
          baseClassName: D,
          maybePostfixModifierPosition: w,
        } = s(g);
      if (v) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      let E = !!w,
        M = r(E ? D.substring(0, w) : D);
      if (!M) {
        if (!E) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((M = r(D)), !M)) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        E = !1;
      }
      const _ = d(x).join(":"),
        N = T ? _ + Lf : _,
        Y = N + M;
      if (f.includes(Y)) continue;
      f.push(Y);
      const z = o(M, E);
      for (let Q = 0; Q < z.length; ++Q) {
        const Z = z[Q];
        f.push(N + Z);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function yw() {
  let n = 0,
    i,
    s,
    r = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (s = w0(i)) && (r && (r += " "), (r += s));
  return r;
}
const w0 = (n) => {
  if (typeof n == "string") return n;
  let i,
    s = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (i = w0(n[r])) && (s && (s += " "), (s += i));
  return s;
};
function vw(n, ...i) {
  let s,
    r,
    o,
    d = f;
  function f(p) {
    const m = i.reduce((g, v) => v(g), n());
    return (s = mw(m)), (r = s.cache.get), (o = s.cache.set), (d = h), h(p);
  }
  function h(p) {
    const m = r(p);
    if (m) return m;
    const g = gw(p, s);
    return o(p, g), g;
  }
  return function () {
    return d(yw.apply(null, arguments));
  };
}
const ne = (n) => {
    const i = (s) => s[n] || [];
    return (i.isThemeGetter = !0), i;
  },
  A0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  E0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  bw = /^\d+\/\d+$/,
  xw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Sw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Tw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ww = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Aw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ya = (n) => bw.test(n),
  St = (n) => !!n && !Number.isNaN(Number(n)),
  mi = (n) => !!n && Number.isInteger(Number(n)),
  uf = (n) => n.endsWith("%") && St(n.slice(0, -1)),
  Un = (n) => xw.test(n),
  Ew = () => !0,
  Mw = (n) => Sw.test(n) && !Tw.test(n),
  M0 = () => !1,
  Cw = (n) => ww.test(n),
  Rw = (n) => Aw.test(n),
  Dw = (n) => !nt(n) && !it(n),
  Ow = (n) => is(n, D0, M0),
  nt = (n) => A0.test(n),
  Ki = (n) => is(n, O0, Mw),
  ff = (n) => is(n, Vw, St),
  Sy = (n) => is(n, C0, M0),
  Nw = (n) => is(n, R0, Rw),
  Ir = (n) => is(n, N0, Cw),
  it = (n) => E0.test(n),
  fl = (n) => as(n, O0),
  _w = (n) => as(n, Lw),
  Ty = (n) => as(n, C0),
  jw = (n) => as(n, D0),
  zw = (n) => as(n, R0),
  to = (n) => as(n, N0, !0),
  is = (n, i, s) => {
    const r = A0.exec(n);
    return r ? (r[1] ? i(r[1]) : s(r[2])) : !1;
  },
  as = (n, i, s = !1) => {
    const r = E0.exec(n);
    return r ? (r[1] ? i(r[1]) : s) : !1;
  },
  C0 = (n) => n === "position" || n === "percentage",
  R0 = (n) => n === "image" || n === "url",
  D0 = (n) => n === "length" || n === "size" || n === "bg-size",
  O0 = (n) => n === "length",
  Vw = (n) => n === "number",
  Lw = (n) => n === "family-name",
  N0 = (n) => n === "shadow",
  Bw = () => {
    const n = ne("color"),
      i = ne("font"),
      s = ne("text"),
      r = ne("font-weight"),
      o = ne("tracking"),
      d = ne("leading"),
      f = ne("breakpoint"),
      h = ne("container"),
      p = ne("spacing"),
      m = ne("radius"),
      g = ne("shadow"),
      v = ne("inset-shadow"),
      x = ne("text-shadow"),
      T = ne("drop-shadow"),
      D = ne("blur"),
      w = ne("perspective"),
      E = ne("aspect"),
      M = ne("ease"),
      _ = ne("animate"),
      N = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Y = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      z = () => [...Y(), it, nt],
      Q = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Z = () => ["auto", "contain", "none"],
      P = () => [it, nt, p],
      tt = () => [Ya, "full", "auto", ...P()],
      lt = () => [mi, "none", "subgrid", it, nt],
      pt = () => ["auto", { span: ["full", mi, it, nt] }, mi, it, nt],
      ft = () => [mi, "auto", it, nt],
      yt = () => ["auto", "min", "max", "fr", it, nt],
      vt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ct = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      V = () => ["auto", ...P()],
      q = () => [
        Ya,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...P(),
      ],
      U = () => [n, it, nt],
      at = () => [...Y(), Ty, Sy, { position: [it, nt] }],
      R = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      X = () => ["auto", "cover", "contain", jw, Ow, { size: [it, nt] }],
      $ = () => [uf, fl, Ki],
      W = () => ["", "none", "full", m, it, nt],
      I = () => ["", St, fl, Ki],
      gt = () => ["solid", "dashed", "dotted", "double"],
      rt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      J = () => [St, uf, Ty, Sy],
      ot = () => ["", "none", D, it, nt],
      Nt = () => ["none", St, it, nt],
      Ct = () => ["none", St, it, nt],
      wt = () => [St, it, nt],
      At = () => [Ya, "full", ...P()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Un],
        breakpoint: [Un],
        color: [Ew],
        container: [Un],
        "drop-shadow": [Un],
        ease: ["in", "out", "in-out"],
        font: [Dw],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Un],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Un],
        shadow: [Un],
        spacing: ["px", St],
        text: [Un],
        "text-shadow": [Un],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ya, nt, it, E] }],
        container: ["container"],
        columns: [{ columns: [St, nt, it, h] }],
        "break-after": [{ "break-after": N() }],
        "break-before": [{ "break-before": N() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: z() }],
        overflow: [{ overflow: Q() }],
        "overflow-x": [{ "overflow-x": Q() }],
        "overflow-y": [{ "overflow-y": Q() }],
        overscroll: [{ overscroll: Z() }],
        "overscroll-x": [{ "overscroll-x": Z() }],
        "overscroll-y": [{ "overscroll-y": Z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: tt() }],
        "inset-x": [{ "inset-x": tt() }],
        "inset-y": [{ "inset-y": tt() }],
        start: [{ start: tt() }],
        end: [{ end: tt() }],
        top: [{ top: tt() }],
        right: [{ right: tt() }],
        bottom: [{ bottom: tt() }],
        left: [{ left: tt() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [mi, "auto", it, nt] }],
        basis: [{ basis: [Ya, "full", "auto", h, ...P()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [St, Ya, "auto", "initial", "none", nt] }],
        grow: [{ grow: ["", St, it, nt] }],
        shrink: [{ shrink: ["", St, it, nt] }],
        order: [{ order: [mi, "first", "last", "none", it, nt] }],
        "grid-cols": [{ "grid-cols": lt() }],
        "col-start-end": [{ col: pt() }],
        "col-start": [{ "col-start": ft() }],
        "col-end": [{ "col-end": ft() }],
        "grid-rows": [{ "grid-rows": lt() }],
        "row-start-end": [{ row: pt() }],
        "row-start": [{ "row-start": ft() }],
        "row-end": [{ "row-end": ft() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": yt() }],
        "auto-rows": [{ "auto-rows": yt() }],
        gap: [{ gap: P() }],
        "gap-x": [{ "gap-x": P() }],
        "gap-y": [{ "gap-y": P() }],
        "justify-content": [{ justify: [...vt(), "normal"] }],
        "justify-items": [{ "justify-items": [...ct(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ct()] }],
        "align-content": [{ content: ["normal", ...vt()] }],
        "align-items": [{ items: [...ct(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ct(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": vt() }],
        "place-items": [{ "place-items": [...ct(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ct()] }],
        p: [{ p: P() }],
        px: [{ px: P() }],
        py: [{ py: P() }],
        ps: [{ ps: P() }],
        pe: [{ pe: P() }],
        pt: [{ pt: P() }],
        pr: [{ pr: P() }],
        pb: [{ pb: P() }],
        pl: [{ pl: P() }],
        m: [{ m: V() }],
        mx: [{ mx: V() }],
        my: [{ my: V() }],
        ms: [{ ms: V() }],
        me: [{ me: V() }],
        mt: [{ mt: V() }],
        mr: [{ mr: V() }],
        mb: [{ mb: V() }],
        ml: [{ ml: V() }],
        "space-x": [{ "space-x": P() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": P() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: q() }],
        w: [{ w: [h, "screen", ...q()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...q()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [f] }, ...q()] },
        ],
        h: [{ h: ["screen", "lh", ...q()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...q()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...q()] }],
        "font-size": [{ text: ["base", s, fl, Ki] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, it, ff] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              uf,
              nt,
            ],
          },
        ],
        "font-family": [{ font: [_w, nt, i] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, it, nt] }],
        "line-clamp": [{ "line-clamp": [St, "none", it, ff] }],
        leading: [{ leading: [d, ...P()] }],
        "list-image": [{ "list-image": ["none", it, nt] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", it, nt] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: U() }],
        "text-color": [{ text: U() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...gt(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [St, "from-font", "auto", it, Ki] },
        ],
        "text-decoration-color": [{ decoration: U() }],
        "underline-offset": [{ "underline-offset": [St, "auto", it, nt] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: P() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              it,
              nt,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", it, nt] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: at() }],
        "bg-repeat": [{ bg: R() }],
        "bg-size": [{ bg: X() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  mi,
                  it,
                  nt,
                ],
                radial: ["", it, nt],
                conic: [mi, it, nt],
              },
              zw,
              Nw,
            ],
          },
        ],
        "bg-color": [{ bg: U() }],
        "gradient-from-pos": [{ from: $() }],
        "gradient-via-pos": [{ via: $() }],
        "gradient-to-pos": [{ to: $() }],
        "gradient-from": [{ from: U() }],
        "gradient-via": [{ via: U() }],
        "gradient-to": [{ to: U() }],
        rounded: [{ rounded: W() }],
        "rounded-s": [{ "rounded-s": W() }],
        "rounded-e": [{ "rounded-e": W() }],
        "rounded-t": [{ "rounded-t": W() }],
        "rounded-r": [{ "rounded-r": W() }],
        "rounded-b": [{ "rounded-b": W() }],
        "rounded-l": [{ "rounded-l": W() }],
        "rounded-ss": [{ "rounded-ss": W() }],
        "rounded-se": [{ "rounded-se": W() }],
        "rounded-ee": [{ "rounded-ee": W() }],
        "rounded-es": [{ "rounded-es": W() }],
        "rounded-tl": [{ "rounded-tl": W() }],
        "rounded-tr": [{ "rounded-tr": W() }],
        "rounded-br": [{ "rounded-br": W() }],
        "rounded-bl": [{ "rounded-bl": W() }],
        "border-w": [{ border: I() }],
        "border-w-x": [{ "border-x": I() }],
        "border-w-y": [{ "border-y": I() }],
        "border-w-s": [{ "border-s": I() }],
        "border-w-e": [{ "border-e": I() }],
        "border-w-t": [{ "border-t": I() }],
        "border-w-r": [{ "border-r": I() }],
        "border-w-b": [{ "border-b": I() }],
        "border-w-l": [{ "border-l": I() }],
        "divide-x": [{ "divide-x": I() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": I() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...gt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...gt(), "hidden", "none"] }],
        "border-color": [{ border: U() }],
        "border-color-x": [{ "border-x": U() }],
        "border-color-y": [{ "border-y": U() }],
        "border-color-s": [{ "border-s": U() }],
        "border-color-e": [{ "border-e": U() }],
        "border-color-t": [{ "border-t": U() }],
        "border-color-r": [{ "border-r": U() }],
        "border-color-b": [{ "border-b": U() }],
        "border-color-l": [{ "border-l": U() }],
        "divide-color": [{ divide: U() }],
        "outline-style": [{ outline: [...gt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [St, it, nt] }],
        "outline-w": [{ outline: ["", St, fl, Ki] }],
        "outline-color": [{ outline: U() }],
        shadow: [{ shadow: ["", "none", g, to, Ir] }],
        "shadow-color": [{ shadow: U() }],
        "inset-shadow": [{ "inset-shadow": ["none", v, to, Ir] }],
        "inset-shadow-color": [{ "inset-shadow": U() }],
        "ring-w": [{ ring: I() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: U() }],
        "ring-offset-w": [{ "ring-offset": [St, Ki] }],
        "ring-offset-color": [{ "ring-offset": U() }],
        "inset-ring-w": [{ "inset-ring": I() }],
        "inset-ring-color": [{ "inset-ring": U() }],
        "text-shadow": [{ "text-shadow": ["none", x, to, Ir] }],
        "text-shadow-color": [{ "text-shadow": U() }],
        opacity: [{ opacity: [St, it, nt] }],
        "mix-blend": [
          { "mix-blend": [...rt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": rt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [St] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": J() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": J() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": U() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": U() }],
        "mask-image-t-from-pos": [{ "mask-t-from": J() }],
        "mask-image-t-to-pos": [{ "mask-t-to": J() }],
        "mask-image-t-from-color": [{ "mask-t-from": U() }],
        "mask-image-t-to-color": [{ "mask-t-to": U() }],
        "mask-image-r-from-pos": [{ "mask-r-from": J() }],
        "mask-image-r-to-pos": [{ "mask-r-to": J() }],
        "mask-image-r-from-color": [{ "mask-r-from": U() }],
        "mask-image-r-to-color": [{ "mask-r-to": U() }],
        "mask-image-b-from-pos": [{ "mask-b-from": J() }],
        "mask-image-b-to-pos": [{ "mask-b-to": J() }],
        "mask-image-b-from-color": [{ "mask-b-from": U() }],
        "mask-image-b-to-color": [{ "mask-b-to": U() }],
        "mask-image-l-from-pos": [{ "mask-l-from": J() }],
        "mask-image-l-to-pos": [{ "mask-l-to": J() }],
        "mask-image-l-from-color": [{ "mask-l-from": U() }],
        "mask-image-l-to-color": [{ "mask-l-to": U() }],
        "mask-image-x-from-pos": [{ "mask-x-from": J() }],
        "mask-image-x-to-pos": [{ "mask-x-to": J() }],
        "mask-image-x-from-color": [{ "mask-x-from": U() }],
        "mask-image-x-to-color": [{ "mask-x-to": U() }],
        "mask-image-y-from-pos": [{ "mask-y-from": J() }],
        "mask-image-y-to-pos": [{ "mask-y-to": J() }],
        "mask-image-y-from-color": [{ "mask-y-from": U() }],
        "mask-image-y-to-color": [{ "mask-y-to": U() }],
        "mask-image-radial": [{ "mask-radial": [it, nt] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": J() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": J() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": U() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": U() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": Y() }],
        "mask-image-conic-pos": [{ "mask-conic": [St] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": J() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": J() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": U() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": U() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: at() }],
        "mask-repeat": [{ mask: R() }],
        "mask-size": [{ mask: X() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", it, nt] }],
        filter: [{ filter: ["", "none", it, nt] }],
        blur: [{ blur: ot() }],
        brightness: [{ brightness: [St, it, nt] }],
        contrast: [{ contrast: [St, it, nt] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", T, to, Ir] }],
        "drop-shadow-color": [{ "drop-shadow": U() }],
        grayscale: [{ grayscale: ["", St, it, nt] }],
        "hue-rotate": [{ "hue-rotate": [St, it, nt] }],
        invert: [{ invert: ["", St, it, nt] }],
        saturate: [{ saturate: [St, it, nt] }],
        sepia: [{ sepia: ["", St, it, nt] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", it, nt] }],
        "backdrop-blur": [{ "backdrop-blur": ot() }],
        "backdrop-brightness": [{ "backdrop-brightness": [St, it, nt] }],
        "backdrop-contrast": [{ "backdrop-contrast": [St, it, nt] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", St, it, nt] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [St, it, nt] }],
        "backdrop-invert": [{ "backdrop-invert": ["", St, it, nt] }],
        "backdrop-opacity": [{ "backdrop-opacity": [St, it, nt] }],
        "backdrop-saturate": [{ "backdrop-saturate": [St, it, nt] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", St, it, nt] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": P() }],
        "border-spacing-x": [{ "border-spacing-x": P() }],
        "border-spacing-y": [{ "border-spacing-y": P() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              it,
              nt,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [St, "initial", it, nt] }],
        ease: [{ ease: ["linear", "initial", M, it, nt] }],
        delay: [{ delay: [St, it, nt] }],
        animate: [{ animate: ["none", _, it, nt] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [w, it, nt] }],
        "perspective-origin": [{ "perspective-origin": z() }],
        rotate: [{ rotate: Nt() }],
        "rotate-x": [{ "rotate-x": Nt() }],
        "rotate-y": [{ "rotate-y": Nt() }],
        "rotate-z": [{ "rotate-z": Nt() }],
        scale: [{ scale: Ct() }],
        "scale-x": [{ "scale-x": Ct() }],
        "scale-y": [{ "scale-y": Ct() }],
        "scale-z": [{ "scale-z": Ct() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: wt() }],
        "skew-x": [{ "skew-x": wt() }],
        "skew-y": [{ "skew-y": wt() }],
        transform: [{ transform: [it, nt, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: z() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: At() }],
        "translate-x": [{ "translate-x": At() }],
        "translate-y": [{ "translate-y": At() }],
        "translate-z": [{ "translate-z": At() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: U() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: U() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              it,
              nt,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": P() }],
        "scroll-mx": [{ "scroll-mx": P() }],
        "scroll-my": [{ "scroll-my": P() }],
        "scroll-ms": [{ "scroll-ms": P() }],
        "scroll-me": [{ "scroll-me": P() }],
        "scroll-mt": [{ "scroll-mt": P() }],
        "scroll-mr": [{ "scroll-mr": P() }],
        "scroll-mb": [{ "scroll-mb": P() }],
        "scroll-ml": [{ "scroll-ml": P() }],
        "scroll-p": [{ "scroll-p": P() }],
        "scroll-px": [{ "scroll-px": P() }],
        "scroll-py": [{ "scroll-py": P() }],
        "scroll-ps": [{ "scroll-ps": P() }],
        "scroll-pe": [{ "scroll-pe": P() }],
        "scroll-pt": [{ "scroll-pt": P() }],
        "scroll-pr": [{ "scroll-pr": P() }],
        "scroll-pb": [{ "scroll-pb": P() }],
        "scroll-pl": [{ "scroll-pl": P() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", it, nt],
          },
        ],
        fill: [{ fill: ["none", ...U()] }],
        "stroke-w": [{ stroke: [St, fl, Ki, ff] }],
        stroke: [{ stroke: ["none", ...U()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  kw = vw(Bw);
function Se(...n) {
  return kw(x0(n));
}
const Uw = S0(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function He({ className: n, variant: i, size: s, asChild: r = !1, ...o }) {
  const d = r ? v0 : "button";
  return A.jsx(d, {
    "data-slot": "button",
    className: Se(Uw({ variant: i, size: s, className: n })),
    ...o,
  });
}
function kf({ className: n, ...i }) {
  return A.jsx("div", {
    "data-slot": "card",
    className: Se(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      n
    ),
    ...i,
  });
}
function Uf({ className: n, ...i }) {
  return A.jsx("div", {
    "data-slot": "card-header",
    className: Se(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      n
    ),
    ...i,
  });
}
function Hf({ className: n, ...i }) {
  return A.jsx("div", {
    "data-slot": "card-title",
    className: Se("leading-none font-semibold", n),
    ...i,
  });
}
function Pf({ className: n, ...i }) {
  return A.jsx("div", {
    "data-slot": "card-description",
    className: Se("text-muted-foreground text-sm", n),
    ...i,
  });
}
function Yf({ className: n, ...i }) {
  return A.jsx("div", {
    "data-slot": "card-content",
    className: Se("px-6", n),
    ...i,
  });
}
const Hw = S0(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function Pw({ className: n, variant: i, asChild: s = !1, ...r }) {
  const o = s ? v0 : "span";
  return A.jsx(o, {
    "data-slot": "badge",
    className: Se(Hw({ variant: i }), n),
    ...r,
  });
}
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  qw = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, r) =>
      r ? r.toUpperCase() : s.toLowerCase()
    ),
  wy = (n) => {
    const i = qw(n);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  _0 = (...n) =>
    n
      .filter((i, s, r) => !!i && i.trim() !== "" && r.indexOf(i) === s)
      .join(" ")
      .trim(),
  Gw = (n) => {
    for (const i in n)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kw = S.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: d,
      iconNode: f,
      ...h
    },
    p
  ) =>
    S.createElement(
      "svg",
      {
        ref: p,
        ...Xw,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: r ? (Number(s) * 24) / Number(i) : s,
        className: _0("lucide", o),
        ...(!d && !Gw(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...f.map(([m, g]) => S.createElement(m, g)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kt = (n, i) => {
  const s = S.forwardRef(({ className: r, ...o }, d) =>
    S.createElement(Kw, {
      ref: d,
      iconNode: i,
      className: _0(`lucide-${Yw(wy(n))}`, `lucide-${n}`, r),
      ...o,
    })
  );
  return (s.displayName = wy(n)), s;
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zw = [
    ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
    ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
    ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
    ["path", { d: "M10 6h4", key: "1itunk" }],
    ["path", { d: "M10 10h4", key: "tcdvrf" }],
    ["path", { d: "M10 14h4", key: "kelpxr" }],
    ["path", { d: "M10 18h4", key: "1ulq68" }],
  ],
  df = Kt("building-2", Zw);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qw = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Fw = Kt("check", Qw);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ww = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  j0 = Kt("chevron-down", Ww);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $w = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  Jw = Kt("chevron-up", $w);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iw = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  t2 = Kt("circle-check-big", Iw);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e2 = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  n2 = Kt("facebook", e2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  a2 = Kt("globe", i2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s2 = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt",
      },
    ],
  ],
  l2 = Kt("house", s2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r2 = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  o2 = Kt("instagram", r2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c2 = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  u2 = Kt("linkedin", c2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f2 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  d2 = Kt("mail", f2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h2 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  m2 = Kt("map-pin", h2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p2 = [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ],
  g2 = Kt("message-circle", p2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y2 = [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ],
  v2 = Kt("moon", y2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b2 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  x2 = Kt("phone", b2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S2 = [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  T2 = Kt("settings", S2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w2 = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  A2 = Kt("smartphone", w2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E2 = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  M2 = Kt("star", E2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C2 = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  R2 = Kt("sun", C2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D2 = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  O2 = Kt("twitter", D2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N2 = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  _2 = Kt("upload", N2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  z2 = Kt("x", j2),
  Td = S.createContext({});
function ss(n) {
  const i = S.useRef(null);
  return i.current === null && (i.current = n()), i.current;
}
const wd = typeof window < "u",
  No = wd ? S.useLayoutEffect : S.useEffect,
  _o = S.createContext(null);
function Ad(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Ed(n, i) {
  const s = n.indexOf(i);
  s > -1 && n.splice(s, 1);
}
const Sn = (n, i, s) => (s > i ? i : s < n ? n : s);
let V2 = () => {},
  Md = () => {};
const Pn = {},
  z0 = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function V0(n) {
  return typeof n == "object" && n !== null;
}
const L0 = (n) => /^0[^.\s]+$/u.test(n);
function Cd(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const De = (n) => n,
  L2 = (n, i) => (s) => i(n(s)),
  jl = (...n) => n.reduce(L2),
  ts = (n, i, s) => {
    const r = i - n;
    return r === 0 ? 1 : (s - n) / r;
  };
class Rd {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Ad(this.subscriptions, i), () => Ed(this.subscriptions, i);
  }
  notify(i, s, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](i, s, r);
      else
        for (let d = 0; d < o; d++) {
          const f = this.subscriptions[d];
          f && f(i, s, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const yn = (n) => n * 1e3,
  vn = (n) => n / 1e3;
function Dd(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const B0 = (n, i, s) =>
    (((1 - 3 * s + 3 * i) * n + (3 * s - 6 * i)) * n + 3 * i) * n,
  B2 = 1e-7,
  k2 = 12;
function U2(n, i, s, r, o) {
  let d,
    f,
    h = 0;
  do (f = i + (s - i) / 2), (d = B0(f, r, o) - n), d > 0 ? (s = f) : (i = f);
  while (Math.abs(d) > B2 && ++h < k2);
  return f;
}
function zl(n, i, s, r) {
  if (n === i && s === r) return De;
  const o = (d) => U2(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : B0(o(d), i, r));
}
const k0 = (n) => (i) => i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2,
  U0 = (n) => (i) => 1 - n(1 - i),
  H0 = zl(0.33, 1.53, 0.69, 0.99),
  Od = U0(H0),
  P0 = k0(Od),
  Y0 = (n) =>
    (n *= 2) < 1 ? 0.5 * Od(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  Nd = (n) => 1 - Math.sin(Math.acos(n)),
  q0 = U0(Nd),
  G0 = k0(Nd),
  H2 = zl(0.42, 0, 1, 1),
  P2 = zl(0, 0, 0.58, 1),
  X0 = zl(0.42, 0, 0.58, 1),
  Y2 = (n) => Array.isArray(n) && typeof n[0] != "number",
  K0 = (n) => Array.isArray(n) && typeof n[0] == "number",
  q2 = {
    linear: De,
    easeIn: H2,
    easeInOut: X0,
    easeOut: P2,
    circIn: Nd,
    circInOut: G0,
    circOut: q0,
    backIn: Od,
    backInOut: P0,
    backOut: H0,
    anticipate: Y0,
  },
  G2 = (n) => typeof n == "string",
  Ay = (n) => {
    if (K0(n)) {
      Md(n.length === 4);
      const [i, s, r, o] = n;
      return zl(i, s, r, o);
    } else if (G2(n)) return q2[n];
    return n;
  },
  eo = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function X2(n, i) {
  let s = new Set(),
    r = new Set(),
    o = !1,
    d = !1;
  const f = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    f.has(g) && (m.schedule(g), n()), g(h);
  }
  const m = {
    schedule: (g, v = !1, x = !1) => {
      const D = x && o ? s : r;
      return v && f.add(g), D.has(g) || D.add(g), g;
    },
    cancel: (g) => {
      r.delete(g), f.delete(g);
    },
    process: (g) => {
      if (((h = g), o)) {
        d = !0;
        return;
      }
      (o = !0),
        ([s, r] = [r, s]),
        s.forEach(p),
        s.clear(),
        (o = !1),
        d && ((d = !1), m.process(g));
    },
  };
  return m;
}
const K2 = 40;
function Z0(n, i) {
  let s = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = eo.reduce((N, Y) => ((N[Y] = X2(d)), N), {}),
    {
      setup: h,
      read: p,
      resolveKeyframes: m,
      preUpdate: g,
      update: v,
      preRender: x,
      render: T,
      postRender: D,
    } = f,
    w = () => {
      const N = Pn.useManualTiming ? o.timestamp : performance.now();
      (s = !1),
        Pn.useManualTiming ||
          (o.delta = r ? 1e3 / 60 : Math.max(Math.min(N - o.timestamp, K2), 1)),
        (o.timestamp = N),
        (o.isProcessing = !0),
        h.process(o),
        p.process(o),
        m.process(o),
        g.process(o),
        v.process(o),
        x.process(o),
        T.process(o),
        D.process(o),
        (o.isProcessing = !1),
        s && i && ((r = !1), n(w));
    },
    E = () => {
      (s = !0), (r = !0), o.isProcessing || n(w);
    };
  return {
    schedule: eo.reduce((N, Y) => {
      const z = f[Y];
      return (N[Y] = (Q, Z = !1, P = !1) => (s || E(), z.schedule(Q, Z, P))), N;
    }, {}),
    cancel: (N) => {
      for (let Y = 0; Y < eo.length; Y++) f[eo[Y]].cancel(N);
    },
    state: o,
    steps: f,
  };
}
const {
  schedule: Bt,
  cancel: on,
  state: re,
  steps: hf,
} = Z0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0);
let fo;
function Z2() {
  fo = void 0;
}
const Re = {
    now: () => (
      fo === void 0 &&
        Re.set(
          re.isProcessing || Pn.useManualTiming
            ? re.timestamp
            : performance.now()
        ),
      fo
    ),
    set: (n) => {
      (fo = n), queueMicrotask(Z2);
    },
  },
  Q0 = (n) => (i) => typeof i == "string" && i.startsWith(n),
  _d = Q0("--"),
  Q2 = Q0("var(--"),
  jd = (n) => (Q2(n) ? F2.test(n.split("/*")[0].trim()) : !1),
  F2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ls = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  El = { ...ls, transform: (n) => Sn(0, 1, n) },
  no = { ...ls, default: 1 },
  yl = (n) => Math.round(n * 1e5) / 1e5,
  zd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function W2(n) {
  return n == null;
}
const $2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Vd = (n, i) => (s) =>
    !!(
      (typeof s == "string" && $2.test(s) && s.startsWith(n)) ||
      (i && !W2(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  F0 = (n, i, s) => (r) => {
    if (typeof r != "string") return r;
    const [o, d, f, h] = r.match(zd);
    return {
      [n]: parseFloat(o),
      [i]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  J2 = (n) => Sn(0, 255, n),
  mf = { ...ls, transform: (n) => Math.round(J2(n)) },
  Fi = {
    test: Vd("rgb", "red"),
    parse: F0("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: s, alpha: r = 1 }) =>
      "rgba(" +
      mf.transform(n) +
      ", " +
      mf.transform(i) +
      ", " +
      mf.transform(s) +
      ", " +
      yl(El.transform(r)) +
      ")",
  };
function I2(n) {
  let i = "",
    s = "",
    r = "",
    o = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (r = n.substring(5, 7)),
        (o = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (r = n.substring(3, 4)),
        (o = n.substring(4, 5)),
        (i += i),
        (s += s),
        (r += r),
        (o += o)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const qf = { test: Vd("#"), parse: I2, transform: Fi.transform },
  Vl = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  gi = Vl("deg"),
  bn = Vl("%"),
  mt = Vl("px"),
  tA = Vl("vh"),
  eA = Vl("vw"),
  Ey = {
    ...bn,
    parse: (n) => bn.parse(n) / 100,
    transform: (n) => bn.transform(n * 100),
  },
  Za = {
    test: Vd("hsl", "hue"),
    parse: F0("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: s, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      bn.transform(yl(i)) +
      ", " +
      bn.transform(yl(s)) +
      ", " +
      yl(El.transform(r)) +
      ")",
  },
  ye = {
    test: (n) => Fi.test(n) || qf.test(n) || Za.test(n),
    parse: (n) =>
      Fi.test(n) ? Fi.parse(n) : Za.test(n) ? Za.parse(n) : qf.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
        ? Fi.transform(n)
        : Za.transform(n),
  },
  nA =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function iA(n) {
  var i, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((i = n.match(zd)) == null ? void 0 : i.length) || 0) +
      (((s = n.match(nA)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const W0 = "number",
  $0 = "color",
  aA = "var",
  sA = "var(",
  My = "${}",
  lA =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ml(n) {
  const i = n.toString(),
    s = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let d = 0;
  const h = i
    .replace(
      lA,
      (p) => (
        ye.test(p)
          ? (r.color.push(d), o.push($0), s.push(ye.parse(p)))
          : p.startsWith(sA)
          ? (r.var.push(d), o.push(aA), s.push(p))
          : (r.number.push(d), o.push(W0), s.push(parseFloat(p))),
        ++d,
        My
      )
    )
    .split(My);
  return { values: s, split: h, indexes: r, types: o };
}
function J0(n) {
  return Ml(n).values;
}
function I0(n) {
  const { split: i, types: s } = Ml(n),
    r = i.length;
  return (o) => {
    let d = "";
    for (let f = 0; f < r; f++)
      if (((d += i[f]), o[f] !== void 0)) {
        const h = s[f];
        h === W0
          ? (d += yl(o[f]))
          : h === $0
          ? (d += ye.transform(o[f]))
          : (d += o[f]);
      }
    return d;
  };
}
const rA = (n) => (typeof n == "number" ? 0 : n);
function oA(n) {
  const i = J0(n);
  return I0(n)(i.map(rA));
}
const bi = {
  test: iA,
  parse: J0,
  createTransformer: I0,
  getAnimatableNone: oA,
};
function pf(n, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? n + (i - n) * 6 * s
      : s < 1 / 2
      ? i
      : s < 2 / 3
      ? n + (i - n) * (2 / 3 - s) * 6
      : n
  );
}
function cA({ hue: n, saturation: i, lightness: s, alpha: r }) {
  (n /= 360), (i /= 100), (s /= 100);
  let o = 0,
    d = 0,
    f = 0;
  if (!i) o = d = f = s;
  else {
    const h = s < 0.5 ? s * (1 + i) : s + i - s * i,
      p = 2 * s - h;
    (o = pf(p, h, n + 1 / 3)), (d = pf(p, h, n)), (f = pf(p, h, n - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function So(n, i) {
  return (s) => (s > 0 ? i : n);
}
const Yt = (n, i, s) => n + (i - n) * s,
  gf = (n, i, s) => {
    const r = n * n,
      o = s * (i * i - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  uA = [qf, Fi, Za],
  fA = (n) => uA.find((i) => i.test(n));
function Cy(n) {
  const i = fA(n);
  if (!i) return !1;
  let s = i.parse(n);
  return i === Za && (s = cA(s)), s;
}
const Ry = (n, i) => {
    const s = Cy(n),
      r = Cy(i);
    if (!s || !r) return So(n, i);
    const o = { ...s };
    return (d) => (
      (o.red = gf(s.red, r.red, d)),
      (o.green = gf(s.green, r.green, d)),
      (o.blue = gf(s.blue, r.blue, d)),
      (o.alpha = Yt(s.alpha, r.alpha, d)),
      Fi.transform(o)
    );
  },
  Gf = new Set(["none", "hidden"]);
function dA(n, i) {
  return Gf.has(n) ? (s) => (s <= 0 ? n : i) : (s) => (s >= 1 ? i : n);
}
function hA(n, i) {
  return (s) => Yt(n, i, s);
}
function Ld(n) {
  return typeof n == "number"
    ? hA
    : typeof n == "string"
    ? jd(n)
      ? So
      : ye.test(n)
      ? Ry
      : gA
    : Array.isArray(n)
    ? tb
    : typeof n == "object"
    ? ye.test(n)
      ? Ry
      : mA
    : So;
}
function tb(n, i) {
  const s = [...n],
    r = s.length,
    o = n.map((d, f) => Ld(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < r; f++) s[f] = o[f](d);
    return s;
  };
}
function mA(n, i) {
  const s = { ...n, ...i },
    r = {};
  for (const o in s)
    n[o] !== void 0 && i[o] !== void 0 && (r[o] = Ld(n[o])(n[o], i[o]));
  return (o) => {
    for (const d in r) s[d] = r[d](o);
    return s;
  };
}
function pA(n, i) {
  const s = [],
    r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < i.values.length; o++) {
    const d = i.types[o],
      f = n.indexes[d][r[d]],
      h = n.values[f] ?? 0;
    (s[o] = h), r[d]++;
  }
  return s;
}
const gA = (n, i) => {
  const s = bi.createTransformer(i),
    r = Ml(n),
    o = Ml(i);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Gf.has(n) && !o.values.length) || (Gf.has(i) && !r.values.length)
      ? dA(n, i)
      : jl(tb(pA(r, o), o.values), s)
    : So(n, i);
};
function eb(n, i, s) {
  return typeof n == "number" && typeof i == "number" && typeof s == "number"
    ? Yt(n, i, s)
    : Ld(n)(n, i);
}
const yA = (n) => {
    const i = ({ timestamp: s }) => n(s);
    return {
      start: (s = !0) => Bt.update(i, s),
      stop: () => on(i),
      now: () => (re.isProcessing ? re.timestamp : Re.now()),
    };
  },
  nb = (n, i, s = 10) => {
    let r = "";
    const o = Math.max(Math.round(i / s), 2);
    for (let d = 0; d < o; d++) r += n(d / (o - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  To = 2e4;
function Bd(n) {
  let i = 0;
  const s = 50;
  let r = n.next(i);
  for (; !r.done && i < To; ) (i += s), (r = n.next(i));
  return i >= To ? 1 / 0 : i;
}
function vA(n, i = 100, s) {
  const r = s({ ...n, keyframes: [0, i] }),
    o = Math.min(Bd(r), To);
  return {
    type: "keyframes",
    ease: (d) => r.next(o * d).value / i,
    duration: vn(o),
  };
}
const bA = 5;
function ib(n, i, s) {
  const r = Math.max(i - bA, 0);
  return Dd(s - n(r), i - r);
}
const Xt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Dy = 0.001;
function xA({
  duration: n = Xt.duration,
  bounce: i = Xt.bounce,
  velocity: s = Xt.velocity,
  mass: r = Xt.mass,
}) {
  let o,
    d,
    f = 1 - i;
  (f = Sn(Xt.minDamping, Xt.maxDamping, f)),
    (n = Sn(Xt.minDuration, Xt.maxDuration, vn(n))),
    f < 1
      ? ((o = (m) => {
          const g = m * f,
            v = g * n,
            x = g - s,
            T = Xf(m, f),
            D = Math.exp(-v);
          return Dy - (x / T) * D;
        }),
        (d = (m) => {
          const v = m * f * n,
            x = v * s + s,
            T = Math.pow(f, 2) * Math.pow(m, 2) * n,
            D = Math.exp(-v),
            w = Xf(Math.pow(m, 2), f);
          return ((-o(m) + Dy > 0 ? -1 : 1) * ((x - T) * D)) / w;
        }))
      : ((o = (m) => {
          const g = Math.exp(-m * n),
            v = (m - s) * n + 1;
          return -0.001 + g * v;
        }),
        (d = (m) => {
          const g = Math.exp(-m * n),
            v = (s - m) * (n * n);
          return g * v;
        }));
  const h = 5 / n,
    p = TA(o, d, h);
  if (((n = yn(n)), isNaN(p)))
    return { stiffness: Xt.stiffness, damping: Xt.damping, duration: n };
  {
    const m = Math.pow(p, 2) * r;
    return { stiffness: m, damping: f * 2 * Math.sqrt(r * m), duration: n };
  }
}
const SA = 12;
function TA(n, i, s) {
  let r = s;
  for (let o = 1; o < SA; o++) r = r - n(r) / i(r);
  return r;
}
function Xf(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const wA = ["duration", "bounce"],
  AA = ["stiffness", "damping", "mass"];
function Oy(n, i) {
  return i.some((s) => n[s] !== void 0);
}
function EA(n) {
  let i = {
    velocity: Xt.velocity,
    stiffness: Xt.stiffness,
    damping: Xt.damping,
    mass: Xt.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Oy(n, AA) && Oy(n, wA))
    if (n.visualDuration) {
      const s = n.visualDuration,
        r = (2 * Math.PI) / (s * 1.2),
        o = r * r,
        d = 2 * Sn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
      i = { ...i, mass: Xt.mass, stiffness: o, damping: d };
    } else {
      const s = xA(n);
      (i = { ...i, ...s, mass: Xt.mass }), (i.isResolvedFromDuration = !0);
    }
  return i;
}
function wo(n = Xt.visualDuration, i = Xt.bounce) {
  const s =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: r, restDelta: o } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    h = { done: !1, value: d },
    {
      stiffness: p,
      damping: m,
      mass: g,
      duration: v,
      velocity: x,
      isResolvedFromDuration: T,
    } = EA({ ...s, velocity: -vn(s.velocity || 0) }),
    D = x || 0,
    w = m / (2 * Math.sqrt(p * g)),
    E = f - d,
    M = vn(Math.sqrt(p / g)),
    _ = Math.abs(E) < 5;
  r || (r = _ ? Xt.restSpeed.granular : Xt.restSpeed.default),
    o || (o = _ ? Xt.restDelta.granular : Xt.restDelta.default);
  let N;
  if (w < 1) {
    const z = Xf(M, w);
    N = (Q) => {
      const Z = Math.exp(-w * M * Q);
      return (
        f - Z * (((D + w * M * E) / z) * Math.sin(z * Q) + E * Math.cos(z * Q))
      );
    };
  } else if (w === 1) N = (z) => f - Math.exp(-M * z) * (E + (D + M * E) * z);
  else {
    const z = M * Math.sqrt(w * w - 1);
    N = (Q) => {
      const Z = Math.exp(-w * M * Q),
        P = Math.min(z * Q, 300);
      return (
        f - (Z * ((D + w * M * E) * Math.sinh(P) + z * E * Math.cosh(P))) / z
      );
    };
  }
  const Y = {
    calculatedDuration: (T && v) || null,
    next: (z) => {
      const Q = N(z);
      if (T) h.done = z >= v;
      else {
        let Z = z === 0 ? D : 0;
        w < 1 && (Z = z === 0 ? yn(D) : ib(N, z, Q));
        const P = Math.abs(Z) <= r,
          tt = Math.abs(f - Q) <= o;
        h.done = P && tt;
      }
      return (h.value = h.done ? f : Q), h;
    },
    toString: () => {
      const z = Math.min(Bd(Y), To),
        Q = nb((Z) => Y.next(z * Z).value, z, 30);
      return z + "ms " + Q;
    },
    toTransition: () => {},
  };
  return Y;
}
wo.applyToOptions = (n) => {
  const i = vA(n, 100, wo);
  return (
    (n.ease = i.ease), (n.duration = yn(i.duration)), (n.type = "keyframes"), n
  );
};
function Kf({
  keyframes: n,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: h,
  max: p,
  restDelta: m = 0.5,
  restSpeed: g,
}) {
  const v = n[0],
    x = { done: !1, value: v },
    T = (P) => (h !== void 0 && P < h) || (p !== void 0 && P > p),
    D = (P) =>
      h === void 0
        ? p
        : p === void 0 || Math.abs(h - P) < Math.abs(p - P)
        ? h
        : p;
  let w = s * i;
  const E = v + w,
    M = f === void 0 ? E : f(E);
  M !== E && (w = M - v);
  const _ = (P) => -w * Math.exp(-P / r),
    N = (P) => M + _(P),
    Y = (P) => {
      const tt = _(P),
        lt = N(P);
      (x.done = Math.abs(tt) <= m), (x.value = x.done ? M : lt);
    };
  let z, Q;
  const Z = (P) => {
    T(x.value) &&
      ((z = P),
      (Q = wo({
        keyframes: [x.value, D(x.value)],
        velocity: ib(N, P, x.value),
        damping: o,
        stiffness: d,
        restDelta: m,
        restSpeed: g,
      })));
  };
  return (
    Z(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let tt = !1;
        return (
          !Q && z === void 0 && ((tt = !0), Y(P), Z(P)),
          z !== void 0 && P >= z ? Q.next(P - z) : (!tt && Y(P), x)
        );
      },
    }
  );
}
function MA(n, i, s) {
  const r = [],
    o = s || Pn.mix || eb,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let h = o(n[f], n[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || De : i;
      h = jl(p, h);
    }
    r.push(h);
  }
  return r;
}
function kd(n, i, { clamp: s = !0, ease: r, mixer: o } = {}) {
  const d = n.length;
  if ((Md(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const h = MA(i, r, o),
    p = h.length,
    m = (g) => {
      if (f && g < n[0]) return i[0];
      let v = 0;
      if (p > 1) for (; v < n.length - 2 && !(g < n[v + 1]); v++);
      const x = ts(n[v], n[v + 1], g);
      return h[v](x);
    };
  return s ? (g) => m(Sn(n[0], n[d - 1], g)) : m;
}
function CA(n, i) {
  const s = n[n.length - 1];
  for (let r = 1; r <= i; r++) {
    const o = ts(0, i, r);
    n.push(Yt(s, 1, o));
  }
}
function ab(n) {
  const i = [0];
  return CA(i, n.length - 1), i;
}
function RA(n, i) {
  return n.map((s) => s * i);
}
function DA(n, i) {
  return n.map(() => i || X0).splice(0, n.length - 1);
}
function vl({
  duration: n = 300,
  keyframes: i,
  times: s,
  ease: r = "easeInOut",
}) {
  const o = Y2(r) ? r.map(Ay) : Ay(r),
    d = { done: !1, value: i[0] },
    f = RA(s && s.length === i.length ? s : ab(i), n),
    h = kd(f, i, { ease: Array.isArray(o) ? o : DA(i, o) });
  return {
    calculatedDuration: n,
    next: (p) => ((d.value = h(p)), (d.done = p >= n), d),
  };
}
const OA = (n) => n !== null;
function Ud(n, { repeat: i, repeatType: s = "loop" }, r, o = 1) {
  const d = n.filter(OA),
    h = o < 0 || (i && s !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !h || r === void 0 ? d[h] : r;
}
const NA = { decay: Kf, inertia: Kf, tween: vl, keyframes: vl, spring: wo };
function sb(n) {
  typeof n.type == "string" && (n.type = NA[n.type]);
}
class Hd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
}
const _A = (n) => n / 100;
class Pd extends Hd {
  constructor(i) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, o;
        const { motionValue: s } = this.options;
        s && s.updatedAt !== Re.now() && this.tick(Re.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (o = (r = this.options).onStop) == null || o.call(r));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: i } = this;
    sb(i);
    const {
      type: s = vl,
      repeat: r = 0,
      repeatDelay: o = 0,
      repeatType: d,
      velocity: f = 0,
    } = i;
    let { keyframes: h } = i;
    const p = s || vl;
    p !== vl &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = jl(_A, eb(h[0], h[1]))), (h = [0, 100]));
    const m = p({ ...i, keyframes: h });
    d === "mirror" &&
      (this.mirroredGenerator = p({
        ...i,
        keyframes: [...h].reverse(),
        velocity: -f,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = Bd(m));
    const { calculatedDuration: g } = m;
    (this.calculatedDuration = g),
      (this.resolvedDuration = g + o),
      (this.totalDuration = this.resolvedDuration * (r + 1) - o),
      (this.generator = m);
  }
  updateTime(i) {
    const s = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(i, s = !1) {
    const {
      generator: r,
      totalDuration: o,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: h,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: g,
      repeat: v,
      repeatType: x,
      repeatDelay: T,
      type: D,
      onUpdate: w,
      finalKeyframe: E,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - o / this.speed, this.startTime)),
      s ? (this.currentTime = i) : this.updateTime(i);
    const M = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      _ = this.playbackSpeed >= 0 ? M < 0 : M > o;
    (this.currentTime = Math.max(M, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = o);
    let N = this.currentTime,
      Y = r;
    if (v) {
      const P = Math.min(this.currentTime, o) / h;
      let tt = Math.floor(P),
        lt = P % 1;
      !lt && P >= 1 && (lt = 1),
        lt === 1 && tt--,
        (tt = Math.min(tt, v + 1)),
        !!(tt % 2) &&
          (x === "reverse"
            ? ((lt = 1 - lt), T && (lt -= T / h))
            : x === "mirror" && (Y = f)),
        (N = Sn(0, 1, lt) * h);
    }
    const z = _ ? { done: !1, value: g[0] } : Y.next(N);
    d && (z.value = d(z.value));
    let { done: Q } = z;
    !_ &&
      p !== null &&
      (Q =
        this.playbackSpeed >= 0
          ? this.currentTime >= o
          : this.currentTime <= 0);
    const Z =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && Q));
    return (
      Z && D !== Kf && (z.value = Ud(g, this.options, E, this.speed)),
      w && w(z.value),
      Z && this.finish(),
      z
    );
  }
  then(i, s) {
    return this.finished.then(i, s);
  }
  get duration() {
    return vn(this.calculatedDuration);
  }
  get time() {
    return vn(this.currentTime);
  }
  set time(i) {
    var s;
    (i = yn(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      (s = this.driver) == null || s.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(Re.now());
    const s = this.playbackSpeed !== i;
    (this.playbackSpeed = i), s && (this.time = vn(this.currentTime));
  }
  play() {
    var o, d;
    if (this.isStopped) return;
    const { driver: i = yA, startTime: s } = this.options;
    this.driver || (this.driver = i((f) => this.tick(f))),
      (d = (o = this.options).onPlay) == null || d.call(o);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = s ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Re.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var i, s;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (s = (i = this.options).onComplete) == null || s.call(i);
  }
  cancel() {
    var i, s;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (s = (i = this.options).onCancel) == null || s.call(i);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0);
  }
  attachTimeline(i) {
    var s;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (s = this.driver) == null || s.stop(),
      i.observe(this)
    );
  }
}
function jA(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const Wi = (n) => (n * 180) / Math.PI,
  Zf = (n) => {
    const i = Wi(Math.atan2(n[1], n[0]));
    return Qf(i);
  },
  zA = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Zf,
    rotateZ: Zf,
    skewX: (n) => Wi(Math.atan(n[1])),
    skewY: (n) => Wi(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Qf = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Ny = Zf,
  _y = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  jy = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  VA = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: _y,
    scaleY: jy,
    scale: (n) => (_y(n) + jy(n)) / 2,
    rotateX: (n) => Qf(Wi(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Qf(Wi(Math.atan2(-n[2], n[0]))),
    rotateZ: Ny,
    rotate: Ny,
    skewX: (n) => Wi(Math.atan(n[4])),
    skewY: (n) => Wi(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Ff(n) {
  return n.includes("scale") ? 1 : 0;
}
function Wf(n, i) {
  if (!n || n === "none") return Ff(i);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (s) (r = VA), (o = s);
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = zA), (o = h);
  }
  if (!o) return Ff(i);
  const d = r[i],
    f = o[1].split(",").map(BA);
  return typeof d == "function" ? d(f) : f[d];
}
const LA = (n, i) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return Wf(s, i);
};
function BA(n) {
  return parseFloat(n.trim());
}
const rs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  os = new Set(rs),
  zy = (n) => n === ls || n === mt,
  kA = new Set(["x", "y", "z"]),
  UA = rs.filter((n) => !kA.has(n));
function HA(n) {
  const i = [];
  return (
    UA.forEach((s) => {
      const r = n.getValue(s);
      r !== void 0 &&
        (i.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const $i = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(s),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => Wf(i, "x"),
  y: (n, { transform: i }) => Wf(i, "y"),
};
$i.translateX = $i.x;
$i.translateY = $i.y;
const Ji = new Set();
let $f = !1,
  Jf = !1,
  If = !1;
function lb() {
  if (Jf) {
    const n = Array.from(Ji).filter((r) => r.needsMeasurement),
      i = new Set(n.map((r) => r.element)),
      s = new Map();
    i.forEach((r) => {
      const o = HA(r);
      o.length && (s.set(r, o), r.render());
    }),
      n.forEach((r) => r.measureInitialState()),
      i.forEach((r) => {
        r.render();
        const o = s.get(r);
        o &&
          o.forEach(([d, f]) => {
            var h;
            (h = r.getValue(d)) == null || h.set(f);
          });
      }),
      n.forEach((r) => r.measureEndState()),
      n.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Jf = !1), ($f = !1), Ji.forEach((n) => n.complete(If)), Ji.clear();
}
function rb() {
  Ji.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (Jf = !0);
  });
}
function PA() {
  (If = !0), rb(), lb(), (If = !1);
}
class Yd {
  constructor(i, s, r, o, d, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = r),
      (this.motionValue = o),
      (this.element = d),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Ji.add(this),
          $f || (($f = !0), Bt.read(rb), Bt.resolveKeyframes(lb)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: s,
      element: r,
      motionValue: o,
    } = this;
    if (i[0] === null) {
      const d = o == null ? void 0 : o.get(),
        f = i[i.length - 1];
      if (d !== void 0) i[0] = d;
      else if (r && s) {
        const h = r.readValue(s, f);
        h != null && (i[0] = h);
      }
      i[0] === void 0 && (i[0] = f), o && d === void 0 && o.set(i[0]);
    }
    jA(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Ji.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ji.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const YA = (n) => n.startsWith("--");
function qA(n, i, s) {
  YA(i) ? n.style.setProperty(i, s) : (n.style[i] = s);
}
const ob = Cd(() => window.ScrollTimeline !== void 0),
  GA = {};
function XA(n, i) {
  const s = Cd(n);
  return () => GA[i] ?? s();
}
const cb = XA(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  pl = ([n, i, s, r]) => `cubic-bezier(${n}, ${i}, ${s}, ${r})`,
  Vy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: pl([0, 0.65, 0.55, 1]),
    circOut: pl([0.55, 0, 1, 0.45]),
    backIn: pl([0.31, 0.01, 0.66, -0.59]),
    backOut: pl([0.33, 1.53, 0.69, 0.99]),
  };
function ub(n, i) {
  if (n)
    return typeof n == "function"
      ? cb()
        ? nb(n, i)
        : "ease-out"
      : K0(n)
      ? pl(n)
      : Array.isArray(n)
      ? n.map((s) => ub(s, i) || Vy.easeOut)
      : Vy[n];
}
function KA(
  n,
  i,
  s,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: p,
  } = {},
  m = void 0
) {
  const g = { [i]: s };
  p && (g.offset = p);
  const v = ub(h, o);
  Array.isArray(v) && (g.easing = v);
  const x = {
    delay: r,
    duration: o,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return m && (x.pseudoElement = m), n.animate(g, x);
}
function fb(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function ZA({ type: n, ...i }) {
  return fb(n) && cb()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class QA extends Hd {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: s,
      name: r,
      keyframes: o,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: h,
      onComplete: p,
    } = i;
    (this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = i),
      Md(typeof i.type != "string");
    const m = ZA(i);
    (this.animation = KA(s, r, o, m, d)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const g = Ud(o, this.options, h, this.speed);
          this.updateMotionValue ? this.updateMotionValue(g) : qA(s, r, g),
            this.animation.cancel();
        }
        p == null || p(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var i, s;
    (s = (i = this.animation).finish) == null || s.call(i);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var i, s;
    this.isPseudoElement ||
      (s = (i = this.animation).commitStyles) == null ||
      s.call(i);
  }
  get duration() {
    var s, r;
    const i =
      ((r =
        (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) ==
      null
        ? void 0
        : r.call(s).duration) || 0;
    return vn(Number(i));
  }
  get time() {
    return vn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    (this.finishedTime = null), (this.animation.currentTime = yn(i));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: s }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      i && ob() ? ((this.animation.timeline = i), De) : s(this)
    );
  }
}
const db = { anticipate: Y0, backInOut: P0, circInOut: G0 };
function FA(n) {
  return n in db;
}
function WA(n) {
  typeof n.ease == "string" && FA(n.ease) && (n.ease = db[n.ease]);
}
const Ly = 10;
class $A extends QA {
  constructor(i) {
    WA(i),
      sb(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i);
  }
  updateMotionValue(i) {
    const {
      motionValue: s,
      onUpdate: r,
      onComplete: o,
      element: d,
      ...f
    } = this.options;
    if (!s) return;
    if (i !== void 0) {
      s.set(i);
      return;
    }
    const h = new Pd({ ...f, autoplay: !1 }),
      p = yn(this.finishedTime ?? this.time);
    s.setWithVelocity(h.sample(p - Ly).value, h.sample(p).value, Ly), h.stop();
  }
}
const By = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (bi.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function JA(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== i) return !0;
}
function IA(n, i, s, r) {
  const o = n[0];
  if (o === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = By(o, i),
    h = By(d, i);
  return !f || !h ? !1 : JA(n) || ((s === "spring" || fb(s)) && r);
}
function jo(n) {
  return V0(n) && "offsetHeight" in n;
}
const tE = new Set(["opacity", "clipPath", "filter", "transform"]),
  eE = Cd(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function nE(n) {
  var m;
  const {
    motionValue: i,
    name: s,
    repeatDelay: r,
    repeatType: o,
    damping: d,
    type: f,
  } = n;
  if (!jo((m = i == null ? void 0 : i.owner) == null ? void 0 : m.current))
    return !1;
  const { onUpdate: h, transformTemplate: p } = i.owner.getProps();
  return (
    eE() &&
    s &&
    tE.has(s) &&
    (s !== "transform" || !p) &&
    !h &&
    !r &&
    o !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const iE = 40;
class aE extends Hd {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: h,
    name: p,
    motionValue: m,
    element: g,
    ...v
  }) {
    var D;
    super(),
      (this.stop = () => {
        var w, E;
        this._animation &&
          (this._animation.stop(),
          (w = this.stopTimeline) == null || w.call(this)),
          (E = this.keyframeResolver) == null || E.cancel();
      }),
      (this.createdAt = Re.now());
    const x = {
        autoplay: i,
        delay: s,
        type: r,
        repeat: o,
        repeatDelay: d,
        repeatType: f,
        name: p,
        motionValue: m,
        element: g,
        ...v,
      },
      T = (g == null ? void 0 : g.KeyframeResolver) || Yd;
    (this.keyframeResolver = new T(
      h,
      (w, E, M) => this.onKeyframesResolved(w, E, x, !M),
      p,
      m,
      g
    )),
      (D = this.keyframeResolver) == null || D.scheduleResolve();
  }
  onKeyframesResolved(i, s, r, o) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: h,
      delay: p,
      isHandoff: m,
      onUpdate: g,
    } = r;
    (this.resolvedAt = Re.now()),
      IA(i, d, f, h) ||
        ((Pn.instantAnimations || !p) && (g == null || g(Ud(i, r, s))),
        (i[0] = i[i.length - 1]),
        (r.duration = 0),
        (r.repeat = 0));
    const x = {
        startTime: o
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > iE
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...r,
        keyframes: i,
      },
      T =
        !m && nE(x)
          ? new $A({ ...x, element: x.motionValue.owner.current })
          : new Pd(x);
    T.finished.then(() => this.notifyFinished()).catch(De),
      this.pendingTimeline &&
        ((this.stopTimeline = T.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = T);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, s) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    var i;
    return (
      this._animation ||
        ((i = this.keyframeResolver) == null || i.resume(), PA()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var i;
    this._animation && this.animation.cancel(),
      (i = this.keyframeResolver) == null || i.cancel();
  }
}
const sE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lE(n) {
  const i = sE.exec(n);
  if (!i) return [,];
  const [, s, r, o] = i;
  return [`--${s ?? r}`, o];
}
function hb(n, i, s = 1) {
  const [r, o] = lE(n);
  if (!r) return;
  const d = window.getComputedStyle(i).getPropertyValue(r);
  if (d) {
    const f = d.trim();
    return z0(f) ? parseFloat(f) : f;
  }
  return jd(o) ? hb(o, i, s + 1) : o;
}
function qd(n, i) {
  return (n == null ? void 0 : n[i]) ?? (n == null ? void 0 : n.default) ?? n;
}
const mb = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...rs,
  ]),
  rE = { test: (n) => n === "auto", parse: (n) => n },
  pb = (n) => (i) => i.test(n),
  gb = [ls, mt, bn, gi, eA, tA, rE],
  ky = (n) => gb.find(pb(n));
function oE(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
    ? n === "none" || n === "0" || L0(n)
    : !0;
}
const cE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function uE(n) {
  const [i, s] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [r] = s.match(zd) || [];
  if (!r) return n;
  const o = s.replace(r, "");
  let d = cE.has(i) ? 1 : 0;
  return r !== s && (d *= 100), i + "(" + d + o + ")";
}
const fE = /\b([a-z-]*)\(.*?\)/gu,
  td = {
    ...bi,
    getAnimatableNone: (n) => {
      const i = n.match(fE);
      return i ? i.map(uE).join(" ") : n;
    },
  },
  Uy = { ...ls, transform: Math.round },
  dE = {
    rotate: gi,
    rotateX: gi,
    rotateY: gi,
    rotateZ: gi,
    scale: no,
    scaleX: no,
    scaleY: no,
    scaleZ: no,
    skew: gi,
    skewX: gi,
    skewY: gi,
    distance: mt,
    translateX: mt,
    translateY: mt,
    translateZ: mt,
    x: mt,
    y: mt,
    z: mt,
    perspective: mt,
    transformPerspective: mt,
    opacity: El,
    originX: Ey,
    originY: Ey,
    originZ: mt,
  },
  Gd = {
    borderWidth: mt,
    borderTopWidth: mt,
    borderRightWidth: mt,
    borderBottomWidth: mt,
    borderLeftWidth: mt,
    borderRadius: mt,
    radius: mt,
    borderTopLeftRadius: mt,
    borderTopRightRadius: mt,
    borderBottomRightRadius: mt,
    borderBottomLeftRadius: mt,
    width: mt,
    maxWidth: mt,
    height: mt,
    maxHeight: mt,
    top: mt,
    right: mt,
    bottom: mt,
    left: mt,
    padding: mt,
    paddingTop: mt,
    paddingRight: mt,
    paddingBottom: mt,
    paddingLeft: mt,
    margin: mt,
    marginTop: mt,
    marginRight: mt,
    marginBottom: mt,
    marginLeft: mt,
    backgroundPositionX: mt,
    backgroundPositionY: mt,
    ...dE,
    zIndex: Uy,
    fillOpacity: El,
    strokeOpacity: El,
    numOctaves: Uy,
  },
  hE = {
    ...Gd,
    color: ye,
    backgroundColor: ye,
    outlineColor: ye,
    fill: ye,
    stroke: ye,
    borderColor: ye,
    borderTopColor: ye,
    borderRightColor: ye,
    borderBottomColor: ye,
    borderLeftColor: ye,
    filter: td,
    WebkitFilter: td,
  },
  yb = (n) => hE[n];
function vb(n, i) {
  let s = yb(n);
  return (
    s !== td && (s = bi), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
  );
}
const mE = new Set(["auto", "none", "0"]);
function pE(n, i, s) {
  let r = 0,
    o;
  for (; r < n.length && !o; ) {
    const d = n[r];
    typeof d == "string" && !mE.has(d) && Ml(d).values.length && (o = n[r]),
      r++;
  }
  if (o && s) for (const d of i) n[d] = vb(s, o);
}
class gE extends Yd {
  constructor(i, s, r, o, d) {
    super(i, s, r, o, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: r } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let p = 0; p < i.length; p++) {
      let m = i[p];
      if (typeof m == "string" && ((m = m.trim()), jd(m))) {
        const g = hb(m, s.current);
        g !== void 0 && (i[p] = g),
          p === i.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !mb.has(r) || i.length !== 2)) return;
    const [o, d] = i,
      f = ky(o),
      h = ky(d);
    if (f !== h)
      if (zy(f) && zy(h))
        for (let p = 0; p < i.length; p++) {
          const m = i[p];
          typeof m == "string" && (i[p] = parseFloat(m));
        }
      else $i[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      r = [];
    for (let o = 0; o < i.length; o++) (i[o] === null || oE(i[o])) && r.push(o);
    r.length && pE(i, r, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: r } = this;
    if (!i || !i.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = $i[r](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
      (s[0] = this.measuredOrigin);
    const o = s[s.length - 1];
    o !== void 0 && i.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var h;
    const { element: i, name: s, unresolvedKeyframes: r } = this;
    if (!i || !i.current) return;
    const o = i.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const d = r.length - 1,
      f = r[d];
    (r[d] = $i[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (h = this.removedTransforms) != null &&
        h.length &&
        this.removedTransforms.forEach(([p, m]) => {
          i.getValue(p).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
function bb(n, i, s) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    const o = document.querySelectorAll(n);
    return o ? Array.from(o) : [];
  }
  return Array.from(n);
}
const xb = (n, i) => (i && typeof n == "number" ? i.transform(n) : n),
  Hy = 30,
  yE = (n) => !isNaN(parseFloat(n)),
  bl = { current: void 0 };
class vE {
  constructor(i, s = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        var f, h;
        const d = Re.now();
        if (
          (this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((f = this.events.change) == null || f.notify(this.current),
            this.dependents))
        )
          for (const p of this.dependents) p.dirty();
        o &&
          ((h = this.events.renderRequest) == null || h.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner);
  }
  setCurrent(i) {
    (this.current = i),
      (this.updatedAt = Re.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = yE(this.current));
  }
  setPrevFrameValue(i = this.current) {
    (this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new Rd());
    const r = this.events[i].add(s);
    return i === "change"
      ? () => {
          r(),
            Bt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, s) {
    (this.passiveEffect = i), (this.stopPassiveEffect = s);
  }
  set(i, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(i, s)
      : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, s, r) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(i, s = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var i;
    (i = this.events.change) == null || i.notify(this.current);
  }
  addDependent(i) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(i);
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return bl.current && bl.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = Re.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Hy
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Hy);
    return Dd(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        (this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var i, s;
    (i = this.dependents) == null || i.clear(),
      (s = this.events.destroy) == null || s.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function rn(n, i) {
  return new vE(n, i);
}
const { schedule: Xd } = Z0(queueMicrotask, !1),
  sn = { x: !1, y: !1 };
function Sb() {
  return sn.x || sn.y;
}
function bE(n) {
  return n === "x" || n === "y"
    ? sn[n]
      ? null
      : ((sn[n] = !0),
        () => {
          sn[n] = !1;
        })
    : sn.x || sn.y
    ? null
    : ((sn.x = sn.y = !0),
      () => {
        sn.x = sn.y = !1;
      });
}
function Tb(n, i) {
  const s = bb(n),
    r = new AbortController(),
    o = { passive: !0, ...i, signal: r.signal };
  return [s, o, () => r.abort()];
}
function Py(n) {
  return !(n.pointerType === "touch" || Sb());
}
function xE(n, i, s = {}) {
  const [r, o, d] = Tb(n, s),
    f = (h) => {
      if (!Py(h)) return;
      const { target: p } = h,
        m = i(p, h);
      if (typeof m != "function" || !p) return;
      const g = (v) => {
        Py(v) && (m(v), p.removeEventListener("pointerleave", g));
      };
      p.addEventListener("pointerleave", g, o);
    };
  return (
    r.forEach((h) => {
      h.addEventListener("pointerenter", f, o);
    }),
    d
  );
}
const wb = (n, i) => (i ? (n === i ? !0 : wb(n, i.parentElement)) : !1),
  Kd = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  SE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function TE(n) {
  return SE.has(n.tagName) || n.tabIndex !== -1;
}
const ho = new WeakSet();
function Yy(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function yf(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 })
  );
}
const wE = (n, i) => {
  const s = n.currentTarget;
  if (!s) return;
  const r = Yy(() => {
    if (ho.has(s)) return;
    yf(s, "down");
    const o = Yy(() => {
        yf(s, "up");
      }),
      d = () => yf(s, "cancel");
    s.addEventListener("keyup", o, i), s.addEventListener("blur", d, i);
  });
  s.addEventListener("keydown", r, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", r), i);
};
function qy(n) {
  return Kd(n) && !Sb();
}
function AE(n, i, s = {}) {
  const [r, o, d] = Tb(n, s),
    f = (h) => {
      const p = h.currentTarget;
      if (!qy(h)) return;
      ho.add(p);
      const m = i(p, h),
        g = (T, D) => {
          window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", x),
            ho.has(p) && ho.delete(p),
            qy(T) && typeof m == "function" && m(T, { success: D });
        },
        v = (T) => {
          g(
            T,
            p === window ||
              p === document ||
              s.useGlobalTarget ||
              wb(p, T.target)
          );
        },
        x = (T) => {
          g(T, !1);
        };
      window.addEventListener("pointerup", v, o),
        window.addEventListener("pointercancel", x, o);
    };
  return (
    r.forEach((h) => {
      (s.useGlobalTarget ? window : h).addEventListener("pointerdown", f, o),
        jo(h) &&
          (h.addEventListener("focus", (m) => wE(m, o)),
          !TE(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
    }),
    d
  );
}
function Ab(n, i) {
  let s;
  const r = () => {
    const { currentTime: o } = i,
      f = (o === null ? 0 : o.value) / 100;
    s !== f && n(f), (s = f);
  };
  return Bt.preUpdate(r, !0), () => on(r);
}
function Zd(n) {
  return V0(n) && "ownerSVGElement" in n;
}
function EE(n) {
  return Zd(n) && n.tagName === "svg";
}
function ME(...n) {
  const i = !Array.isArray(n[0]),
    s = i ? 0 : -1,
    r = n[0 + s],
    o = n[1 + s],
    d = n[2 + s],
    f = n[3 + s],
    h = kd(o, d, f);
  return i ? h(r) : h;
}
const ve = (n) => !!(n && n.getVelocity),
  CE = [...gb, ye, bi],
  RE = (n) => CE.find(pb(n)),
  zo = S.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
class DE extends S.Component {
  getSnapshotBeforeUpdate(i) {
    const s = this.props.childRef.current;
    if (s && i.isPresent && !this.props.isPresent) {
      const r = s.offsetParent,
        o = (jo(r) && r.offsetWidth) || 0,
        d = this.props.sizeRef.current;
      (d.height = s.offsetHeight || 0),
        (d.width = s.offsetWidth || 0),
        (d.top = s.offsetTop),
        (d.left = s.offsetLeft),
        (d.right = o - d.width - d.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function OE({ children: n, isPresent: i, anchorX: s }) {
  const r = S.useId(),
    o = S.useRef(null),
    d = S.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: f } = S.useContext(zo);
  return (
    S.useInsertionEffect(() => {
      const { width: h, height: p, top: m, left: g, right: v } = d.current;
      if (i || !o.current || !h || !p) return;
      const x = s === "left" ? `left: ${g}` : `right: ${v}`;
      o.current.dataset.motionPopId = r;
      const T = document.createElement("style");
      return (
        f && (T.nonce = f),
        document.head.appendChild(T),
        T.sheet &&
          T.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${x}px !important;
            top: ${m}px !important;
          }
        `),
        () => {
          document.head.contains(T) && document.head.removeChild(T);
        }
      );
    }, [i]),
    A.jsx(DE, {
      isPresent: i,
      childRef: o,
      sizeRef: d,
      children: S.cloneElement(n, { ref: o }),
    })
  );
}
const NE = ({
  children: n,
  initial: i,
  isPresent: s,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: d,
  mode: f,
  anchorX: h,
}) => {
  const p = ss(_E),
    m = S.useId();
  let g = !0,
    v = S.useMemo(
      () => (
        (g = !1),
        {
          id: m,
          initial: i,
          isPresent: s,
          custom: o,
          onExitComplete: (x) => {
            p.set(x, !0);
            for (const T of p.values()) if (!T) return;
            r && r();
          },
          register: (x) => (p.set(x, !1), () => p.delete(x)),
        }
      ),
      [s, p, r]
    );
  return (
    d && g && (v = { ...v }),
    S.useMemo(() => {
      p.forEach((x, T) => p.set(T, !1));
    }, [s]),
    S.useEffect(() => {
      !s && !p.size && r && r();
    }, [s]),
    f === "popLayout" &&
      (n = A.jsx(OE, { isPresent: s, anchorX: h, children: n })),
    A.jsx(_o.Provider, { value: v, children: n })
  );
};
function _E() {
  return new Map();
}
function Eb(n = !0) {
  const i = S.useContext(_o);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: r, register: o } = i,
    d = S.useId();
  S.useEffect(() => {
    if (n) return o(d);
  }, [n]);
  const f = S.useCallback(() => n && r && r(d), [d, r, n]);
  return !s && r ? [!1, f] : [!0];
}
const io = (n) => n.key || "";
function Gy(n) {
  const i = [];
  return (
    S.Children.forEach(n, (s) => {
      S.isValidElement(s) && i.push(s);
    }),
    i
  );
}
const jE = ({
    children: n,
    custom: i,
    initial: s = !0,
    onExitComplete: r,
    presenceAffectsLayout: o = !0,
    mode: d = "sync",
    propagate: f = !1,
    anchorX: h = "left",
  }) => {
    const [p, m] = Eb(f),
      g = S.useMemo(() => Gy(n), [n]),
      v = f && !p ? [] : g.map(io),
      x = S.useRef(!0),
      T = S.useRef(g),
      D = ss(() => new Map()),
      [w, E] = S.useState(g),
      [M, _] = S.useState(g);
    No(() => {
      (x.current = !1), (T.current = g);
      for (let z = 0; z < M.length; z++) {
        const Q = io(M[z]);
        v.includes(Q) ? D.delete(Q) : D.get(Q) !== !0 && D.set(Q, !1);
      }
    }, [M, v.length, v.join("-")]);
    const N = [];
    if (g !== w) {
      let z = [...g];
      for (let Q = 0; Q < M.length; Q++) {
        const Z = M[Q],
          P = io(Z);
        v.includes(P) || (z.splice(Q, 0, Z), N.push(Z));
      }
      return d === "wait" && N.length && (z = N), _(Gy(z)), E(g), null;
    }
    const { forceRender: Y } = S.useContext(Td);
    return A.jsx(A.Fragment, {
      children: M.map((z) => {
        const Q = io(z),
          Z = f && !p ? !1 : g === M || v.includes(Q),
          P = () => {
            if (D.has(Q)) D.set(Q, !0);
            else return;
            let tt = !0;
            D.forEach((lt) => {
              lt || (tt = !1);
            }),
              tt &&
                (Y == null || Y(),
                _(T.current),
                f && (m == null || m()),
                r && r());
          };
        return A.jsx(
          NE,
          {
            isPresent: Z,
            initial: !x.current || s ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: o,
            mode: d,
            onExitComplete: Z ? void 0 : P,
            anchorX: h,
            children: z,
          },
          Q
        );
      }),
    });
  },
  Mb = S.createContext({ strict: !1 }),
  Xy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  es = {};
for (const n in Xy) es[n] = { isEnabled: (i) => Xy[n].some((s) => !!i[s]) };
function zE(n) {
  for (const i in n) es[i] = { ...es[i], ...n[i] };
}
const VE = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ao(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    VE.has(n)
  );
}
let Cb = (n) => !Ao(n);
function LE(n) {
  n && (Cb = (i) => (i.startsWith("on") ? !Ao(i) : n(i)));
}
try {
  LE(require("@emotion/is-prop-valid").default);
} catch {}
function BE(n, i, s) {
  const r = {};
  for (const o in n)
    (o === "values" && typeof n.values == "object") ||
      ((Cb(o) ||
        (s === !0 && Ao(o)) ||
        (!i && !Ao(o)) ||
        (n.draggable && o.startsWith("onDrag"))) &&
        (r[o] = n[o]));
  return r;
}
function kE(n) {
  if (typeof Proxy > "u") return n;
  const i = new Map(),
    s = (...r) => n(...r);
  return new Proxy(s, {
    get: (r, o) =>
      o === "create" ? n : (i.has(o) || i.set(o, n(o)), i.get(o)),
  });
}
const Vo = S.createContext({});
function Lo(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Cl(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Qd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Fd = ["initial", ...Qd];
function Bo(n) {
  return Lo(n.animate) || Fd.some((i) => Cl(n[i]));
}
function Rb(n) {
  return !!(Bo(n) || n.variants);
}
function UE(n, i) {
  if (Bo(n)) {
    const { initial: s, animate: r } = n;
    return {
      initial: s === !1 || Cl(s) ? s : void 0,
      animate: Cl(r) ? r : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function HE(n) {
  const { initial: i, animate: s } = UE(n, S.useContext(Vo));
  return S.useMemo(() => ({ initial: i, animate: s }), [Ky(i), Ky(s)]);
}
function Ky(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const PE = Symbol.for("motionComponentSymbol");
function Qa(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function YE(n, i, s) {
  return S.useCallback(
    (r) => {
      r && n.onMount && n.onMount(r),
        i && (r ? i.mount(r) : i.unmount()),
        s && (typeof s == "function" ? s(r) : Qa(s) && (s.current = r));
    },
    [i]
  );
}
const Wd = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  qE = "framerAppearId",
  Db = "data-" + Wd(qE),
  Ob = S.createContext({});
function GE(n, i, s, r, o) {
  var w, E;
  const { visualElement: d } = S.useContext(Vo),
    f = S.useContext(Mb),
    h = S.useContext(_o),
    p = S.useContext(zo).reducedMotion,
    m = S.useRef(null);
  (r = r || f.renderer),
    !m.current &&
      r &&
      (m.current = r(n, {
        visualState: i,
        parent: d,
        props: s,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: p,
      }));
  const g = m.current,
    v = S.useContext(Ob);
  g &&
    !g.projection &&
    o &&
    (g.type === "html" || g.type === "svg") &&
    XE(m.current, s, o, v);
  const x = S.useRef(!1);
  S.useInsertionEffect(() => {
    g && x.current && g.update(s, h);
  });
  const T = s[Db],
    D = S.useRef(
      !!T &&
        !((w = window.MotionHandoffIsComplete) != null && w.call(window, T)) &&
        ((E = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : E.call(window, T))
    );
  return (
    No(() => {
      g &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        g.updateFeatures(),
        Xd.render(g.render),
        D.current && g.animationState && g.animationState.animateChanges());
    }),
    S.useEffect(() => {
      g &&
        (!D.current && g.animationState && g.animationState.animateChanges(),
        D.current &&
          (queueMicrotask(() => {
            var M;
            (M = window.MotionHandoffMarkAsComplete) == null ||
              M.call(window, T);
          }),
          (D.current = !1)));
    }),
    g
  );
}
function XE(n, i, s, r) {
  const {
    layoutId: o,
    layout: d,
    drag: f,
    dragConstraints: h,
    layoutScroll: p,
    layoutRoot: m,
    layoutCrossfade: g,
  } = i;
  (n.projection = new s(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : Nb(n.parent)
  )),
    n.projection.setOptions({
      layoutId: o,
      layout: d,
      alwaysMeasureLayout: !!f || (h && Qa(h)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      crossfade: g,
      layoutScroll: p,
      layoutRoot: m,
    });
}
function Nb(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Nb(n.parent);
}
function KE({
  preloadedFeatures: n,
  createVisualElement: i,
  useRender: s,
  useVisualState: r,
  Component: o,
}) {
  n && zE(n);
  function d(h, p) {
    let m;
    const g = { ...S.useContext(zo), ...h, layoutId: ZE(h) },
      { isStatic: v } = g,
      x = HE(h),
      T = r(h, v);
    if (!v && wd) {
      QE();
      const D = FE(g);
      (m = D.MeasureLayout),
        (x.visualElement = GE(o, T, g, i, D.ProjectionNode));
    }
    return A.jsxs(Vo.Provider, {
      value: x,
      children: [
        m && x.visualElement
          ? A.jsx(m, { visualElement: x.visualElement, ...g })
          : null,
        s(o, h, YE(T, x.visualElement, p), T, v, x.visualElement),
      ],
    });
  }
  d.displayName = `motion.${
    typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`
  }`;
  const f = S.forwardRef(d);
  return (f[PE] = o), f;
}
function ZE({ layoutId: n }) {
  const i = S.useContext(Td).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function QE(n, i) {
  S.useContext(Mb).strict;
}
function FE(n) {
  const { drag: i, layout: s } = es;
  if (!i && !s) return {};
  const r = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(n)) || (s != null && s.isEnabled(n))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Rl = {};
function WE(n) {
  for (const i in n) (Rl[i] = n[i]), _d(i) && (Rl[i].isCSSVariable = !0);
}
function _b(n, { layout: i, layoutId: s }) {
  return (
    os.has(n) ||
    n.startsWith("origin") ||
    ((i || s !== void 0) && (!!Rl[n] || n === "opacity"))
  );
}
const $E = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  JE = rs.length;
function IE(n, i, s) {
  let r = "",
    o = !0;
  for (let d = 0; d < JE; d++) {
    const f = rs[d],
      h = n[f];
    if (h === void 0) continue;
    let p = !0;
    if (
      (typeof h == "number"
        ? (p = h === (f.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(h) === 0),
      !p || s)
    ) {
      const m = xb(h, Gd[f]);
      if (!p) {
        o = !1;
        const g = $E[f] || f;
        r += `${g}(${m}) `;
      }
      s && (i[f] = m);
    }
  }
  return (r = r.trim()), s ? (r = s(i, o ? "" : r)) : o && (r = "none"), r;
}
function $d(n, i, s) {
  const { style: r, vars: o, transformOrigin: d } = n;
  let f = !1,
    h = !1;
  for (const p in i) {
    const m = i[p];
    if (os.has(p)) {
      f = !0;
      continue;
    } else if (_d(p)) {
      o[p] = m;
      continue;
    } else {
      const g = xb(m, Gd[p]);
      p.startsWith("origin") ? ((h = !0), (d[p] = g)) : (r[p] = g);
    }
  }
  if (
    (i.transform ||
      (f || s
        ? (r.transform = IE(i, n.transform, s))
        : r.transform && (r.transform = "none")),
    h)
  ) {
    const { originX: p = "50%", originY: m = "50%", originZ: g = 0 } = d;
    r.transformOrigin = `${p} ${m} ${g}`;
  }
}
const Jd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function jb(n, i, s) {
  for (const r in i) !ve(i[r]) && !_b(r, s) && (n[r] = i[r]);
}
function tM({ transformTemplate: n }, i) {
  return S.useMemo(() => {
    const s = Jd();
    return $d(s, i, n), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function eM(n, i) {
  const s = n.style || {},
    r = {};
  return jb(r, s, n), Object.assign(r, tM(n, i)), r;
}
function nM(n, i) {
  const s = {},
    r = eM(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((s.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (s.tabIndex = 0),
    (s.style = r),
    s
  );
}
const iM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  aM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function sM(n, i, s = 1, r = 0, o = !0) {
  n.pathLength = 1;
  const d = o ? iM : aM;
  n[d.offset] = mt.transform(-r);
  const f = mt.transform(i),
    h = mt.transform(s);
  n[d.array] = `${f} ${h}`;
}
function zb(
  n,
  {
    attrX: i,
    attrY: s,
    attrScale: r,
    pathLength: o,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...h
  },
  p,
  m,
  g
) {
  if (($d(n, h, m), p)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: v, style: x } = n;
  v.transform && ((x.transform = v.transform), delete v.transform),
    (x.transform || v.transformOrigin) &&
      ((x.transformOrigin = v.transformOrigin ?? "50% 50%"),
      delete v.transformOrigin),
    x.transform &&
      ((x.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"),
      delete v.transformBox),
    i !== void 0 && (v.x = i),
    s !== void 0 && (v.y = s),
    r !== void 0 && (v.scale = r),
    o !== void 0 && sM(v, o, d, f, !1);
}
const Vb = () => ({ ...Jd(), attrs: {} }),
  Lb = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function lM(n, i, s, r) {
  const o = S.useMemo(() => {
    const d = Vb();
    return (
      zb(d, i, Lb(r), n.transformTemplate, n.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [i]);
  if (n.style) {
    const d = {};
    jb(d, n.style, n), (o.style = { ...d, ...o.style });
  }
  return o;
}
const rM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Id(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(rM.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function oM(n = !1) {
  return (s, r, o, { latestValues: d }, f) => {
    const p = (Id(s) ? lM : nM)(r, d, f, s),
      m = BE(r, typeof s == "string", n),
      g = s !== S.Fragment ? { ...m, ...p, ref: o } : {},
      { children: v } = r,
      x = S.useMemo(() => (ve(v) ? v.get() : v), [v]);
    return S.createElement(s, { ...g, children: x });
  };
}
function Zy(n) {
  const i = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, r) => {
        (i[0][r] = s.get()), (i[1][r] = s.getVelocity());
      }),
    i
  );
}
function th(n, i, s, r) {
  if (typeof i == "function") {
    const [o, d] = Zy(r);
    i = i(s !== void 0 ? s : n.custom, o, d);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function")
  ) {
    const [o, d] = Zy(r);
    i = i(s !== void 0 ? s : n.custom, o, d);
  }
  return i;
}
function mo(n) {
  return ve(n) ? n.get() : n;
}
function cM({ scrapeMotionValuesFromProps: n, createRenderState: i }, s, r, o) {
  return { latestValues: uM(s, r, o, n), renderState: i() };
}
const Bb = (n) => (i, s) => {
  const r = S.useContext(Vo),
    o = S.useContext(_o),
    d = () => cM(n, i, r, o);
  return s ? d() : ss(d);
};
function uM(n, i, s, r) {
  const o = {},
    d = r(n, {});
  for (const x in d) o[x] = mo(d[x]);
  let { initial: f, animate: h } = n;
  const p = Bo(n),
    m = Rb(n);
  i &&
    m &&
    !p &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), h === void 0 && (h = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const v = g ? h : f;
  if (v && typeof v != "boolean" && !Lo(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let T = 0; T < x.length; T++) {
      const D = th(n, x[T]);
      if (D) {
        const { transitionEnd: w, transition: E, ...M } = D;
        for (const _ in M) {
          let N = M[_];
          if (Array.isArray(N)) {
            const Y = g ? N.length - 1 : 0;
            N = N[Y];
          }
          N !== null && (o[_] = N);
        }
        for (const _ in w) o[_] = w[_];
      }
    }
  }
  return o;
}
function eh(n, i, s) {
  var d;
  const { style: r } = n,
    o = {};
  for (const f in r)
    (ve(r[f]) ||
      (i.style && ve(i.style[f])) ||
      _b(f, n) ||
      ((d = s == null ? void 0 : s.getValue(f)) == null
        ? void 0
        : d.liveStyle) !== void 0) &&
      (o[f] = r[f]);
  return o;
}
const fM = {
  useVisualState: Bb({
    scrapeMotionValuesFromProps: eh,
    createRenderState: Jd,
  }),
};
function kb(n, i, s) {
  const r = eh(n, i, s);
  for (const o in n)
    if (ve(n[o]) || ve(i[o])) {
      const d =
        rs.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[d] = n[o];
    }
  return r;
}
const dM = {
  useVisualState: Bb({
    scrapeMotionValuesFromProps: kb,
    createRenderState: Vb,
  }),
};
function hM(n, i) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Id(r) ? dM : fM),
      preloadedFeatures: n,
      useRender: oM(o),
      createVisualElement: i,
      Component: r,
    };
    return KE(f);
  };
}
function Dl(n, i, s) {
  const r = n.getProps();
  return th(r, i, s !== void 0 ? s : r.custom, n);
}
const ed = (n) => Array.isArray(n);
function mM(n, i, s) {
  n.hasValue(i) ? n.getValue(i).set(s) : n.addValue(i, rn(s));
}
function pM(n) {
  return ed(n) ? n[n.length - 1] || 0 : n;
}
function gM(n, i) {
  const s = Dl(n, i);
  let { transitionEnd: r = {}, transition: o = {}, ...d } = s || {};
  d = { ...d, ...r };
  for (const f in d) {
    const h = pM(d[f]);
    mM(n, f, h);
  }
}
function yM(n) {
  return !!(ve(n) && n.add);
}
function nd(n, i) {
  const s = n.getValue("willChange");
  if (yM(s)) return s.add(i);
  if (!s && Pn.WillChange) {
    const r = new Pn.WillChange("auto");
    n.addValue("willChange", r), r.add(i);
  }
}
function Ub(n) {
  return n.props[Db];
}
const vM = (n) => n !== null;
function bM(n, { repeat: i, repeatType: s = "loop" }, r) {
  const o = n.filter(vM),
    d = i && s !== "loop" && i % 2 === 1 ? 0 : o.length - 1;
  return o[d];
}
const xM = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  SM = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  TM = { type: "keyframes", duration: 0.8 },
  wM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  AM = (n, { keyframes: i }) =>
    i.length > 2
      ? TM
      : os.has(n)
      ? n.startsWith("scale")
        ? SM(i[1])
        : xM
      : wM;
function EM({
  when: n,
  delay: i,
  delayChildren: s,
  staggerChildren: r,
  staggerDirection: o,
  repeat: d,
  repeatType: f,
  repeatDelay: h,
  from: p,
  elapsed: m,
  ...g
}) {
  return !!Object.keys(g).length;
}
const nh =
  (n, i, s, r = {}, o, d) =>
  (f) => {
    const h = qd(r, n) || {},
      p = h.delay || r.delay || 0;
    let { elapsed: m = 0 } = r;
    m = m - yn(p);
    const g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...h,
      delay: -m,
      onUpdate: (x) => {
        i.set(x), h.onUpdate && h.onUpdate(x);
      },
      onComplete: () => {
        f(), h.onComplete && h.onComplete();
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : o,
    };
    EM(h) || Object.assign(g, AM(n, g)),
      g.duration && (g.duration = yn(g.duration)),
      g.repeatDelay && (g.repeatDelay = yn(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from);
    let v = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        ((g.duration = 0), g.delay === 0 && (v = !0)),
      (Pn.instantAnimations || Pn.skipAnimations) &&
        ((v = !0), (g.duration = 0), (g.delay = 0)),
      (g.allowFlatten = !h.type && !h.ease),
      v && !d && i.get() !== void 0)
    ) {
      const x = bM(g.keyframes, h);
      if (x !== void 0) {
        Bt.update(() => {
          g.onUpdate(x), g.onComplete();
        });
        return;
      }
    }
    return h.isSync ? new Pd(g) : new aE(g);
  };
function MM({ protectedKeys: n, needsAnimating: i }, s) {
  const r = n.hasOwnProperty(s) && i[s] !== !0;
  return (i[s] = !1), r;
}
function Hb(n, i, { delay: s = 0, transitionOverride: r, type: o } = {}) {
  let { transition: d = n.getDefaultTransition(), transitionEnd: f, ...h } = i;
  r && (d = r);
  const p = [],
    m = o && n.animationState && n.animationState.getState()[o];
  for (const g in h) {
    const v = n.getValue(g, n.latestValues[g] ?? null),
      x = h[g];
    if (x === void 0 || (m && MM(m, g))) continue;
    const T = { delay: s, ...qd(d || {}, g) },
      D = v.get();
    if (
      D !== void 0 &&
      !v.isAnimating &&
      !Array.isArray(x) &&
      x === D &&
      !T.velocity
    )
      continue;
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const M = Ub(n);
      if (M) {
        const _ = window.MotionHandoffAnimation(M, g, Bt);
        _ !== null && ((T.startTime = _), (w = !0));
      }
    }
    nd(n, g),
      v.start(
        nh(g, v, x, n.shouldReduceMotion && mb.has(g) ? { type: !1 } : T, n, w)
      );
    const E = v.animation;
    E && p.push(E);
  }
  return (
    f &&
      Promise.all(p).then(() => {
        Bt.update(() => {
          f && gM(n, f);
        });
      }),
    p
  );
}
function id(n, i, s = {}) {
  var p;
  const r = Dl(
    n,
    i,
    s.type === "exit"
      ? (p = n.presenceContext) == null
        ? void 0
        : p.custom
      : void 0
  );
  let { transition: o = n.getDefaultTransition() || {} } = r || {};
  s.transitionOverride && (o = s.transitionOverride);
  const d = r ? () => Promise.all(Hb(n, r, s)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: v,
              staggerDirection: x,
            } = o;
            return CM(n, i, g + m, v, x, s);
          }
        : () => Promise.resolve(),
    { when: h } = o;
  if (h) {
    const [m, g] = h === "beforeChildren" ? [d, f] : [f, d];
    return m().then(() => g());
  } else return Promise.all([d(), f(s.delay)]);
}
function CM(n, i, s = 0, r = 0, o = 1, d) {
  const f = [],
    h = (n.variantChildren.size - 1) * r,
    p = o === 1 ? (m = 0) => m * r : (m = 0) => h - m * r;
  return (
    Array.from(n.variantChildren)
      .sort(RM)
      .forEach((m, g) => {
        m.notify("AnimationStart", i),
          f.push(
            id(m, i, { ...d, delay: s + p(g) }).then(() =>
              m.notify("AnimationComplete", i)
            )
          );
      }),
    Promise.all(f)
  );
}
function RM(n, i) {
  return n.sortNodePosition(i);
}
function DM(n, i, s = {}) {
  n.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const o = i.map((d) => id(n, d, s));
    r = Promise.all(o);
  } else if (typeof i == "string") r = id(n, i, s);
  else {
    const o = typeof i == "function" ? Dl(n, i, s.custom) : i;
    r = Promise.all(Hb(n, o, s));
  }
  return r.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function Pb(n, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== n.length) return !1;
  for (let r = 0; r < s; r++) if (i[r] !== n[r]) return !1;
  return !0;
}
const OM = Fd.length;
function Yb(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Yb(n.parent) || {} : {};
    return n.props.initial !== void 0 && (s.initial = n.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < OM; s++) {
    const r = Fd[s],
      o = n.props[r];
    (Cl(o) || o === !1) && (i[r] = o);
  }
  return i;
}
const NM = [...Qd].reverse(),
  _M = Qd.length;
function jM(n) {
  return (i) =>
    Promise.all(i.map(({ animation: s, options: r }) => DM(n, s, r)));
}
function zM(n) {
  let i = jM(n),
    s = Qy(),
    r = !0;
  const o = (p) => (m, g) => {
    var x;
    const v = Dl(
      n,
      g,
      p === "exit"
        ? (x = n.presenceContext) == null
          ? void 0
          : x.custom
        : void 0
    );
    if (v) {
      const { transition: T, transitionEnd: D, ...w } = v;
      m = { ...m, ...w, ...D };
    }
    return m;
  };
  function d(p) {
    i = p(n);
  }
  function f(p) {
    const { props: m } = n,
      g = Yb(n.parent) || {},
      v = [],
      x = new Set();
    let T = {},
      D = 1 / 0;
    for (let E = 0; E < _M; E++) {
      const M = NM[E],
        _ = s[M],
        N = m[M] !== void 0 ? m[M] : g[M],
        Y = Cl(N),
        z = M === p ? _.isActive : null;
      z === !1 && (D = E);
      let Q = N === g[M] && N !== m[M] && Y;
      if (
        (Q && r && n.manuallyAnimateOnMount && (Q = !1),
        (_.protectedKeys = { ...T }),
        (!_.isActive && z === null) ||
          (!N && !_.prevProp) ||
          Lo(N) ||
          typeof N == "boolean")
      )
        continue;
      const Z = VM(_.prevProp, N);
      let P = Z || (M === p && _.isActive && !Q && Y) || (E > D && Y),
        tt = !1;
      const lt = Array.isArray(N) ? N : [N];
      let pt = lt.reduce(o(M), {});
      z === !1 && (pt = {});
      const { prevResolvedValues: ft = {} } = _,
        yt = { ...ft, ...pt },
        vt = (q) => {
          (P = !0),
            x.has(q) && ((tt = !0), x.delete(q)),
            (_.needsAnimating[q] = !0);
          const U = n.getValue(q);
          U && (U.liveStyle = !1);
        };
      for (const q in yt) {
        const U = pt[q],
          at = ft[q];
        if (T.hasOwnProperty(q)) continue;
        let R = !1;
        ed(U) && ed(at) ? (R = !Pb(U, at)) : (R = U !== at),
          R
            ? U != null
              ? vt(q)
              : x.add(q)
            : U !== void 0 && x.has(q)
            ? vt(q)
            : (_.protectedKeys[q] = !0);
      }
      (_.prevProp = N),
        (_.prevResolvedValues = pt),
        _.isActive && (T = { ...T, ...pt }),
        r && n.blockInitialAnimation && (P = !1),
        P &&
          (!(Q && Z) || tt) &&
          v.push(...lt.map((q) => ({ animation: q, options: { type: M } })));
    }
    if (x.size) {
      const E = {};
      if (typeof m.initial != "boolean") {
        const M = Dl(n, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        M && M.transition && (E.transition = M.transition);
      }
      x.forEach((M) => {
        const _ = n.getBaseTarget(M),
          N = n.getValue(M);
        N && (N.liveStyle = !0), (E[M] = _ ?? null);
      }),
        v.push({ animation: E });
    }
    let w = !!v.length;
    return (
      r &&
        (m.initial === !1 || m.initial === m.animate) &&
        !n.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? i(v) : Promise.resolve()
    );
  }
  function h(p, m) {
    var v;
    if (s[p].isActive === m) return Promise.resolve();
    (v = n.variantChildren) == null ||
      v.forEach((x) => {
        var T;
        return (T = x.animationState) == null ? void 0 : T.setActive(p, m);
      }),
      (s[p].isActive = m);
    const g = f(p);
    for (const x in s) s[x].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: f,
    setActive: h,
    setAnimateFunction: d,
    getState: () => s,
    reset: () => {
      (s = Qy()), (r = !0);
    },
  };
}
function VM(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !Pb(i, n) : !1;
}
function Zi(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Qy() {
  return {
    animate: Zi(!0),
    whileInView: Zi(),
    whileHover: Zi(),
    whileTap: Zi(),
    whileDrag: Zi(),
    whileFocus: Zi(),
    exit: Zi(),
  };
}
class Ti {
  constructor(i) {
    (this.isMounted = !1), (this.node = i);
  }
  update() {}
}
class LM extends Ti {
  constructor(i) {
    super(i), i.animationState || (i.animationState = zM(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Lo(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    this.node.animationState.reset(),
      (i = this.unmountControls) == null || i.call(this);
  }
}
let BM = 0;
class kM extends Ti {
  constructor() {
    super(...arguments), (this.id = BM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r) return;
    const o = this.node.animationState.setActive("exit", !i);
    s &&
      !i &&
      o.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const UM = { animation: { Feature: LM }, exit: { Feature: kM } };
function Ol(n, i, s, r = { passive: !0 }) {
  return n.addEventListener(i, s, r), () => n.removeEventListener(i, s);
}
function Ll(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const HM = (n) => (i) => Kd(i) && n(i, Ll(i));
function xl(n, i, s, r) {
  return Ol(n, i, HM(s), r);
}
function qb({ top: n, left: i, right: s, bottom: r }) {
  return { x: { min: i, max: s }, y: { min: n, max: r } };
}
function PM({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function YM(n, i) {
  if (!i) return n;
  const s = i({ x: n.left, y: n.top }),
    r = i({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: r.y, right: r.x };
}
const Gb = 1e-4,
  qM = 1 - Gb,
  GM = 1 + Gb,
  Xb = 0.01,
  XM = 0 - Xb,
  KM = 0 + Xb;
function xe(n) {
  return n.max - n.min;
}
function ZM(n, i, s) {
  return Math.abs(n - i) <= s;
}
function Fy(n, i, s, r = 0.5) {
  (n.origin = r),
    (n.originPoint = Yt(i.min, i.max, n.origin)),
    (n.scale = xe(s) / xe(i)),
    (n.translate = Yt(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= qM && n.scale <= GM) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= XM && n.translate <= KM) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function Sl(n, i, s, r) {
  Fy(n.x, i.x, s.x, r ? r.originX : void 0),
    Fy(n.y, i.y, s.y, r ? r.originY : void 0);
}
function Wy(n, i, s) {
  (n.min = s.min + i.min), (n.max = n.min + xe(i));
}
function QM(n, i, s) {
  Wy(n.x, i.x, s.x), Wy(n.y, i.y, s.y);
}
function $y(n, i, s) {
  (n.min = i.min - s.min), (n.max = n.min + xe(i));
}
function Tl(n, i, s) {
  $y(n.x, i.x, s.x), $y(n.y, i.y, s.y);
}
const Jy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Fa = () => ({ x: Jy(), y: Jy() }),
  Iy = () => ({ min: 0, max: 0 }),
  Wt = () => ({ x: Iy(), y: Iy() });
function Ie(n) {
  return [n("x"), n("y")];
}
function vf(n) {
  return n === void 0 || n === 1;
}
function ad({ scale: n, scaleX: i, scaleY: s }) {
  return !vf(n) || !vf(i) || !vf(s);
}
function Qi(n) {
  return (
    ad(n) ||
    Kb(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function Kb(n) {
  return tv(n.x) || tv(n.y);
}
function tv(n) {
  return n && n !== "0%";
}
function Eo(n, i, s) {
  const r = n - s,
    o = i * r;
  return s + o;
}
function ev(n, i, s, r, o) {
  return o !== void 0 && (n = Eo(n, o, r)), Eo(n, s, r) + i;
}
function sd(n, i = 0, s = 1, r, o) {
  (n.min = ev(n.min, i, s, r, o)), (n.max = ev(n.max, i, s, r, o));
}
function Zb(n, { x: i, y: s }) {
  sd(n.x, i.translate, i.scale, i.originPoint),
    sd(n.y, s.translate, s.scale, s.originPoint);
}
const nv = 0.999999999999,
  iv = 1.0000000000001;
function FM(n, i, s, r = !1) {
  const o = s.length;
  if (!o) return;
  i.x = i.y = 1;
  let d, f;
  for (let h = 0; h < o; h++) {
    (d = s[h]), (f = d.projectionDelta);
    const { visualElement: p } = d.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        $a(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Zb(n, f)),
      r && Qi(d.latestValues) && $a(n, d.latestValues));
  }
  i.x < iv && i.x > nv && (i.x = 1), i.y < iv && i.y > nv && (i.y = 1);
}
function Wa(n, i) {
  (n.min = n.min + i), (n.max = n.max + i);
}
function av(n, i, s, r, o = 0.5) {
  const d = Yt(n.min, n.max, o);
  sd(n, i, s, d, r);
}
function $a(n, i) {
  av(n.x, i.x, i.scaleX, i.scale, i.originX),
    av(n.y, i.y, i.scaleY, i.scale, i.originY);
}
function Qb(n, i) {
  return qb(YM(n.getBoundingClientRect(), i));
}
function WM(n, i, s) {
  const r = Qb(n, s),
    { scroll: o } = i;
  return o && (Wa(r.x, o.offset.x), Wa(r.y, o.offset.y)), r;
}
const Fb = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  sv = (n, i) => Math.abs(n - i);
function $M(n, i) {
  const s = sv(n.x, i.x),
    r = sv(n.y, i.y);
  return Math.sqrt(s ** 2 + r ** 2);
}
class Wb {
  constructor(
    i,
    s,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: d = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const v = xf(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          T = $M(v.offset, { x: 0, y: 0 }) >= 3;
        if (!x && !T) return;
        const { point: D } = v,
          { timestamp: w } = re;
        this.history.push({ ...D, timestamp: w });
        const { onStart: E, onMove: M } = this.handlers;
        x ||
          (E && E(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          M && M(this.lastMoveEvent, v);
      }),
      (this.handlePointerMove = (v, x) => {
        (this.lastMoveEvent = v),
          (this.lastMoveEventInfo = bf(x, this.transformPagePoint)),
          Bt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (v, x) => {
        this.end();
        const { onEnd: T, onSessionEnd: D, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const E = xf(
          v.type === "pointercancel"
            ? this.lastMoveEventInfo
            : bf(x, this.transformPagePoint),
          this.history
        );
        this.startEvent && T && T(v, E), D && D(v, E);
      }),
      !Kd(i))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const f = Ll(i),
      h = bf(f, this.transformPagePoint),
      { point: p } = h,
      { timestamp: m } = re;
    this.history = [{ ...p, timestamp: m }];
    const { onSessionStart: g } = s;
    g && g(i, xf(h, this.history)),
      (this.removeListeners = jl(
        xl(this.contextWindow, "pointermove", this.handlePointerMove),
        xl(this.contextWindow, "pointerup", this.handlePointerUp),
        xl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), on(this.updatePoint);
  }
}
function bf(n, i) {
  return i ? { point: i(n.point) } : n;
}
function lv(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function xf({ point: n }, i) {
  return {
    point: n,
    delta: lv(n, $b(i)),
    offset: lv(n, JM(i)),
    velocity: IM(i, 0.1),
  };
}
function JM(n) {
  return n[0];
}
function $b(n) {
  return n[n.length - 1];
}
function IM(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    r = null;
  const o = $b(n);
  for (; s >= 0 && ((r = n[s]), !(o.timestamp - r.timestamp > yn(i))); ) s--;
  if (!r) return { x: 0, y: 0 };
  const d = vn(o.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (o.x - r.x) / d, y: (o.y - r.y) / d };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function tC(n, { min: i, max: s }, r) {
  return (
    i !== void 0 && n < i
      ? (n = r ? Yt(i, n, r.min) : Math.max(n, i))
      : s !== void 0 && n > s && (n = r ? Yt(s, n, r.max) : Math.min(n, s)),
    n
  );
}
function rv(n, i, s) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function eC(n, { top: i, left: s, bottom: r, right: o }) {
  return { x: rv(n.x, s, o), y: rv(n.y, i, r) };
}
function ov(n, i) {
  let s = i.min - n.min,
    r = i.max - n.max;
  return i.max - i.min < n.max - n.min && ([s, r] = [r, s]), { min: s, max: r };
}
function nC(n, i) {
  return { x: ov(n.x, i.x), y: ov(n.y, i.y) };
}
function iC(n, i) {
  let s = 0.5;
  const r = xe(n),
    o = xe(i);
  return (
    o > r
      ? (s = ts(i.min, i.max - r, n.min))
      : r > o && (s = ts(n.min, n.max - o, i.min)),
    Sn(0, 1, s)
  );
}
function aC(n, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - n.min),
    i.max !== void 0 && (s.max = i.max - n.min),
    s
  );
}
const ld = 0.35;
function sC(n = ld) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = ld),
    { x: cv(n, "left", "right"), y: cv(n, "top", "bottom") }
  );
}
function cv(n, i, s) {
  return { min: uv(n, i), max: uv(n, s) };
}
function uv(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const lC = new WeakMap();
class rC {
  constructor(i) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Wt()),
      (this.visualElement = i);
  }
  start(i, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (g) => {
        const { dragSnapToOrigin: v } = this.getProps();
        v ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(Ll(g).point);
      },
      d = (g, v) => {
        const { drag: x, dragPropagation: T, onDragStart: D } = this.getProps();
        if (
          x &&
          !T &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = bE(x)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((E) => {
            let M = this.getAxisMotionValue(E).get() || 0;
            if (bn.test(M)) {
              const { projection: _ } = this.visualElement;
              if (_ && _.layout) {
                const N = _.layout.layoutBox[E];
                N && (M = xe(N) * (parseFloat(M) / 100));
              }
            }
            this.originPoint[E] = M;
          }),
          D && Bt.postRender(() => D(g, v)),
          nd(this.visualElement, "transform");
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      f = (g, v) => {
        const {
          dragPropagation: x,
          dragDirectionLock: T,
          onDirectionLock: D,
          onDrag: w,
        } = this.getProps();
        if (!x && !this.openDragLock) return;
        const { offset: E } = v;
        if (T && this.currentDirection === null) {
          (this.currentDirection = oC(E)),
            this.currentDirection !== null && D && D(this.currentDirection);
          return;
        }
        this.updateAxis("x", v.point, E),
          this.updateAxis("y", v.point, E),
          this.visualElement.render(),
          w && w(g, v);
      },
      h = (g, v) => this.stop(g, v),
      p = () =>
        Ie((g) => {
          var v;
          return (
            this.getAnimationState(g) === "paused" &&
            ((v = this.getAxisMotionValue(g).animation) == null
              ? void 0
              : v.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new Wb(
      i,
      {
        onSessionStart: o,
        onStart: d,
        onMove: f,
        onSessionEnd: h,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
        contextWindow: Fb(this.visualElement),
      }
    );
  }
  stop(i, s) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: d } = this.getProps();
    d && Bt.postRender(() => d(i, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1);
  }
  updateAxis(i, s, r) {
    const { drag: o } = this.getProps();
    if (!r || !ao(i, o, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + r[i];
    this.constraints &&
      this.constraints[i] &&
      (f = tC(f, this.constraints[i], this.elastic[i])),
      d.set(f);
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
          ? void 0
          : d.layout,
      o = this.constraints;
    i && Qa(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && r
      ? (this.constraints = eC(r.layoutBox, i))
      : (this.constraints = !1),
      (this.elastic = sC(s)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = aC(r.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !Qa(i)) return !1;
    const r = i.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const d = WM(r, o.root, this.visualElement.getTransformPagePoint());
    let f = nC(o.layout.layoutBox, d);
    if (s) {
      const h = s(PM(f));
      (this.hasMutatedConstraints = !!h), h && (f = qb(h));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: h,
      } = this.getProps(),
      p = this.constraints || {},
      m = Ie((g) => {
        if (!ao(g, s, this.currentDirection)) return;
        let v = (p && p[g]) || {};
        f && (v = { min: 0, max: 0 });
        const x = o ? 200 : 1e6,
          T = o ? 40 : 1e7,
          D = {
            type: "inertia",
            velocity: r ? i[g] : 0,
            bounceStiffness: x,
            bounceDamping: T,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...v,
          };
        return this.startAxisValueAnimation(g, D);
      });
    return Promise.all(m).then(h);
  }
  startAxisValueAnimation(i, s) {
    const r = this.getAxisMotionValue(i);
    return (
      nd(this.visualElement, i), r.start(nh(i, r, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ie((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    Ie((i) => {
      var s;
      return (s = this.getAxisMotionValue(i).animation) == null
        ? void 0
        : s.pause();
    });
  }
  getAnimationState(i) {
    var s;
    return (s = this.getAxisMotionValue(i).animation) == null
      ? void 0
      : s.state;
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[s];
    return (
      o ||
      this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    Ie((s) => {
      const { drag: r } = this.getProps();
      if (!ao(s, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        d = this.getAxisMotionValue(s);
      if (o && o.layout) {
        const { min: f, max: h } = o.layout.layoutBox[s];
        d.set(i[s] - Yt(f, h, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Qa(s) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ie((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const p = h.get();
        o[f] = iC({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ie((f) => {
        if (!ao(f, i, null)) return;
        const h = this.getAxisMotionValue(f),
          { min: p, max: m } = this.constraints[f];
        h.set(Yt(p, m, o[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    lC.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = xl(i, "pointerdown", (p) => {
        const { drag: m, dragListener: g = !0 } = this.getProps();
        m && g && this.start(p);
      }),
      r = () => {
        const { dragConstraints: p } = this.getProps();
        Qa(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      d = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      Bt.read(r);
    const f = Ol(window, "resize", () => this.scalePositionWithinConstraints()),
      h = o.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            (Ie((g) => {
              const v = this.getAxisMotionValue(g);
              v &&
                ((this.originPoint[g] += p[g].translate),
                v.set(v.get() + p[g].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), s(), d(), h && h();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: d = !1,
        dragElastic: f = ld,
        dragMomentum: h = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: h,
    };
  }
}
function ao(n, i, s) {
  return (i === !0 || i === n) && (s === null || s === n);
}
function oC(n, i = 10) {
  let s = null;
  return Math.abs(n.y) > i ? (s = "y") : Math.abs(n.x) > i && (s = "x"), s;
}
class cC extends Ti {
  constructor(i) {
    super(i),
      (this.removeGroupControls = De),
      (this.removeListeners = De),
      (this.controls = new rC(i));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || De);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const fv = (n) => (i, s) => {
  n && Bt.postRender(() => n(i, s));
};
class uC extends Ti {
  constructor() {
    super(...arguments), (this.removePointerDownListener = De);
  }
  onPointerDown(i) {
    this.session = new Wb(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Fb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: s,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: fv(i),
      onStart: fv(s),
      onMove: r,
      onEnd: (d, f) => {
        delete this.session, o && Bt.postRender(() => o(d, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = xl(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const po = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function dv(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const dl = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (mt.test(n)) n = parseFloat(n);
        else return n;
      const s = dv(n, i.target.x),
        r = dv(n, i.target.y);
      return `${s}% ${r}%`;
    },
  },
  fC = {
    correct: (n, { treeScale: i, projectionDelta: s }) => {
      const r = n,
        o = bi.parse(n);
      if (o.length > 5) return r;
      const d = bi.createTransformer(n),
        f = typeof o[0] != "number" ? 1 : 0,
        h = s.x.scale * i.x,
        p = s.y.scale * i.y;
      (o[0 + f] /= h), (o[1 + f] /= p);
      const m = Yt(h, p, 0.5);
      return (
        typeof o[2 + f] == "number" && (o[2 + f] /= m),
        typeof o[3 + f] == "number" && (o[3 + f] /= m),
        d(o)
      );
    },
  };
class dC extends S.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: d } = i;
    WE(hC),
      d &&
        (s.group && s.group.add(d),
        r && r.register && o && r.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (po.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: s,
        visualElement: r,
        drag: o,
        isPresent: d,
      } = this.props,
      { projection: f } = r;
    return (
      f &&
        ((f.isPresent = d),
        o || i.layoutDependency !== s || s === void 0 || i.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              Bt.postRender(() => {
                const h = f.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Xd.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = i;
    o &&
      (o.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function Jb(n) {
  const [i, s] = Eb(),
    r = S.useContext(Td);
  return A.jsx(dC, {
    ...n,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Ob),
    isPresent: i,
    safeToRemove: s,
  });
}
const hC = {
  borderRadius: {
    ...dl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: dl,
  borderTopRightRadius: dl,
  borderBottomLeftRadius: dl,
  borderBottomRightRadius: dl,
  boxShadow: fC,
};
function mC(n, i, s) {
  const r = ve(n) ? n : rn(n);
  return r.start(nh("", r, i, s)), r.animation;
}
const pC = (n, i) => n.depth - i.depth;
class gC {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(i) {
    Ad(this.children, i), (this.isDirty = !0);
  }
  remove(i) {
    Ed(this.children, i), (this.isDirty = !0);
  }
  forEach(i) {
    this.isDirty && this.children.sort(pC),
      (this.isDirty = !1),
      this.children.forEach(i);
  }
}
function yC(n, i) {
  const s = Re.now(),
    r = ({ timestamp: o }) => {
      const d = o - s;
      d >= i && (on(r), n(d - i));
    };
  return Bt.setup(r, !0), () => on(r);
}
const Ib = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  vC = Ib.length,
  hv = (n) => (typeof n == "string" ? parseFloat(n) : n),
  mv = (n) => typeof n == "number" || mt.test(n);
function bC(n, i, s, r, o, d) {
  o
    ? ((n.opacity = Yt(0, s.opacity ?? 1, xC(r))),
      (n.opacityExit = Yt(i.opacity ?? 1, 0, SC(r))))
    : d && (n.opacity = Yt(i.opacity ?? 1, s.opacity ?? 1, r));
  for (let f = 0; f < vC; f++) {
    const h = `border${Ib[f]}Radius`;
    let p = pv(i, h),
      m = pv(s, h);
    if (p === void 0 && m === void 0) continue;
    p || (p = 0),
      m || (m = 0),
      p === 0 || m === 0 || mv(p) === mv(m)
        ? ((n[h] = Math.max(Yt(hv(p), hv(m), r), 0)),
          (bn.test(m) || bn.test(p)) && (n[h] += "%"))
        : (n[h] = m);
  }
  (i.rotate || s.rotate) && (n.rotate = Yt(i.rotate || 0, s.rotate || 0, r));
}
function pv(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const xC = tx(0, 0.5, q0),
  SC = tx(0.5, 0.95, De);
function tx(n, i, s) {
  return (r) => (r < n ? 0 : r > i ? 1 : s(ts(n, i, r)));
}
function gv(n, i) {
  (n.min = i.min), (n.max = i.max);
}
function Je(n, i) {
  gv(n.x, i.x), gv(n.y, i.y);
}
function yv(n, i) {
  (n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin);
}
function vv(n, i, s, r, o) {
  return (
    (n -= i), (n = Eo(n, 1 / s, r)), o !== void 0 && (n = Eo(n, 1 / o, r)), n
  );
}
function TC(n, i = 0, s = 1, r = 0.5, o, d = n, f = n) {
  if (
    (bn.test(i) &&
      ((i = parseFloat(i)), (i = Yt(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let h = Yt(d.min, d.max, r);
  n === d && (h -= i),
    (n.min = vv(n.min, i, s, h, o)),
    (n.max = vv(n.max, i, s, h, o));
}
function bv(n, i, [s, r, o], d, f) {
  TC(n, i[s], i[r], i[o], i.scale, d, f);
}
const wC = ["x", "scaleX", "originX"],
  AC = ["y", "scaleY", "originY"];
function xv(n, i, s, r) {
  bv(n.x, i, wC, s ? s.x : void 0, r ? r.x : void 0),
    bv(n.y, i, AC, s ? s.y : void 0, r ? r.y : void 0);
}
function Sv(n) {
  return n.translate === 0 && n.scale === 1;
}
function ex(n) {
  return Sv(n.x) && Sv(n.y);
}
function Tv(n, i) {
  return n.min === i.min && n.max === i.max;
}
function EC(n, i) {
  return Tv(n.x, i.x) && Tv(n.y, i.y);
}
function wv(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function nx(n, i) {
  return wv(n.x, i.x) && wv(n.y, i.y);
}
function Av(n) {
  return xe(n.x) / xe(n.y);
}
function Ev(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class MC {
  constructor() {
    this.members = [];
  }
  add(i) {
    Ad(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (
      (Ed(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((o) => i === o);
    if (s === 0) return !1;
    let r;
    for (let o = s; o >= 0; o--) {
      const d = this.members[o];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(i, s) {
    const r = this.lead;
    if (i !== r && ((this.prevLead = r), (this.lead = i), i.show(), r)) {
      r.instance && r.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = r),
        s && (i.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((i.snapshot = r.snapshot),
          (i.snapshot.latestValues = r.animationValues || r.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: o } = i.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: r } = i;
      s.onExitComplete && s.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function CC(n, i, s) {
  let r = "";
  const o = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((o || d || f) && (r = `translate3d(${o}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const {
      transformPerspective: m,
      rotate: g,
      rotateX: v,
      rotateY: x,
      skewX: T,
      skewY: D,
    } = s;
    m && (r = `perspective(${m}px) ${r}`),
      g && (r += `rotate(${g}deg) `),
      v && (r += `rotateX(${v}deg) `),
      x && (r += `rotateY(${x}deg) `),
      T && (r += `skewX(${T}deg) `),
      D && (r += `skewY(${D}deg) `);
  }
  const h = n.x.scale * i.x,
    p = n.y.scale * i.y;
  return (h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`), r || "none";
}
const Sf = ["", "X", "Y", "Z"],
  RC = { visibility: "hidden" },
  DC = 1e3;
let OC = 0;
function Tf(n, i, s, r) {
  const { latestValues: o } = i;
  o[n] && ((s[n] = o[n]), i.setStaticValue(n, 0), r && (r[n] = 0));
}
function ix(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const s = Ub(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: o, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Bt, !(o || d));
  }
  const { parent: r } = n;
  r && !r.hasCheckedOptimisedAppear && ix(r);
}
function ax({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(f = {}, h = i == null ? void 0 : i()) {
      (this.id = OC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(jC),
            this.nodes.forEach(kC),
            this.nodes.forEach(UC),
            this.nodes.forEach(zC);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0);
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new gC());
    }
    addEventListener(f, h) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Rd()),
        this.eventHandlers.get(f).add(h)
      );
    }
    notifyListeners(f, ...h) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = Zd(f) && !EE(f)), (this.instance = f);
      const { layoutId: h, layout: p, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0),
        n)
      ) {
        let g;
        const v = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          (this.root.updateBlockedByResize = !0),
            g && g(),
            (g = yC(v, 250)),
            po.hasAnimatedSinceResize &&
              ((po.hasAnimatedSinceResize = !1), this.nodes.forEach(Cv));
        });
      }
      h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          m &&
          (h || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: v,
              hasRelativeLayoutChanged: x,
              layout: T,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const D =
                  this.options.transition || m.getDefaultTransition() || GC,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: E } =
                  m.getProps(),
                M = !this.targetLayout || !nx(this.targetLayout, T),
                _ = !v && x;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                _ ||
                (v && (M || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const N = { ...qd(D, "layout"), onPlay: w, onComplete: E };
                (m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((N.delay = 0), (N.type = !1)),
                  this.startAnimation(N),
                  this.setAnimationOrigin(g, _);
              } else
                v || Cv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = T;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        on(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(HC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          ix(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        (v.shouldResetTransform = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mv);
        return;
      }
      this.isUpdating || this.nodes.forEach(LC),
        (this.isUpdating = !1),
        this.nodes.forEach(BC),
        this.nodes.forEach(NC),
        this.nodes.forEach(_C),
        this.clearAllSnapshots();
      const h = Re.now();
      (re.delta = Sn(0, 1e3 / 60, h - re.timestamp)),
        (re.timestamp = h),
        (re.isProcessing = !0),
        hf.update.process(re),
        hf.preRender.process(re),
        hf.render.process(re),
        (re.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Xd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(VC), this.sharedNodes.forEach(PC);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Bt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Bt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !xe(this.snapshot.measuredBox.x) &&
          !xe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Wt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (h = !1),
        h && this.instance)
      ) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !ex(this.projectionDelta),
        p = this.getTransformTemplate(),
        m = p ? p(this.latestValues, "") : void 0,
        g = m !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (h || Qi(this.latestValues) || g) &&
        (o(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return (
        f && (p = this.removeTransform(p)),
        XC(p),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var m;
      const { visualElement: f } = this.options;
      if (!f) return Wt();
      const h = f.measureViewportBox();
      if (
        !(
          ((m = this.scroll) == null ? void 0 : m.wasRoot) || this.path.some(KC)
        )
      ) {
        const { scroll: g } = this.root;
        g && (Wa(h.x, g.offset.x), Wa(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      var p;
      const h = Wt();
      if ((Je(h, f), (p = this.scroll) != null && p.wasRoot)) return h;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m],
          { scroll: v, options: x } = g;
        g !== this.root &&
          v &&
          x.layoutScroll &&
          (v.wasRoot && Je(h, f), Wa(h.x, v.offset.x), Wa(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1) {
      const p = Wt();
      Je(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        !h &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          $a(p, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          Qi(g.latestValues) && $a(p, g.latestValues);
      }
      return Qi(this.latestValues) && $a(p, this.latestValues), p;
    }
    removeTransform(f) {
      const h = Wt();
      Je(h, f);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !Qi(m.latestValues)) continue;
        ad(m.latestValues) && m.updateSnapshot();
        const g = Wt(),
          v = m.measurePageBox();
        Je(g, v),
          xv(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g);
      }
      return Qi(this.latestValues) && xv(h, this.latestValues), h;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var x;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== h;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((x = this.parent) != null && x.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (!(!this.layout || !(g || v))) {
        if (
          ((this.resolvedRelativeTargetAt = re.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const T = this.getClosestProjectingParent();
          T && T.layout && this.animationProgress !== 1
            ? ((this.relativeParent = T),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Wt()),
              (this.relativeTargetOrigin = Wt()),
              Tl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                T.layout.layoutBox
              ),
              Je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Wt()), (this.targetWithTransforms = Wt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              QM(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Je(this.target, this.layout.layoutBox),
              Zb(this.target, this.targetDelta))
            : Je(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const T = this.getClosestProjectingParent();
          T &&
          !!T.resumingFrom == !!this.resumingFrom &&
          !T.options.layoutScroll &&
          T.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = T),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Wt()),
              (this.relativeTargetOrigin = Wt()),
              Tl(this.relativeTargetOrigin, this.target, T.target),
              Je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ad(this.parent.latestValues) ||
          Kb(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var D;
      const f = this.getLead(),
        h = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          ((D = this.parent) != null && D.isProjectionDirty)) &&
          (p = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === re.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: m, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || g))
      )
        return;
      Je(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        x = this.treeScale.y;
      FM(this.layoutCorrected, this.treeScale, this.path, h),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Wt()));
      const { target: T } = f;
      if (!T) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (yv(this.prevProjectionDelta.x, this.projectionDelta.x),
          yv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Sl(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== x ||
          !Ev(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ev(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", T));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var h;
      if (((h = this.options.visualElement) == null || h.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Fa()),
        (this.projectionDelta = Fa()),
        (this.projectionDeltaWithTransform = Fa());
    }
    setAnimationOrigin(f, h = !1) {
      const p = this.snapshot,
        m = p ? p.latestValues : {},
        g = { ...this.latestValues },
        v = Fa();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h);
      const x = Wt(),
        T = p ? p.source : void 0,
        D = this.layout ? this.layout.source : void 0,
        w = T !== D,
        E = this.getStack(),
        M = !E || E.members.length <= 1,
        _ = !!(w && !M && this.options.crossfade === !0 && !this.path.some(qC));
      this.animationProgress = 0;
      let N;
      (this.mixTargetDelta = (Y) => {
        const z = Y / 1e3;
        Rv(v.x, f.x, z),
          Rv(v.y, f.y, z),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Tl(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            YC(this.relativeTarget, this.relativeTargetOrigin, x, z),
            N && EC(this.relativeTarget, N) && (this.isProjectionDirty = !1),
            N || (N = Wt()),
            Je(N, this.relativeTarget)),
          w &&
            ((this.animationValues = g), bC(g, m, this.latestValues, z, _, M)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = z);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var h, p, m;
      this.notifyListeners("animationStart"),
        (h = this.currentAnimation) == null || h.stop(),
        (m = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) ==
          null || m.stop(),
        this.pendingAnimation &&
          (on(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Bt.update(() => {
          (po.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = rn(0)),
            (this.currentAnimation = mC(this.motionValue, [0, 1e3], {
              ...f,
              isSync: !0,
              onUpdate: (g) => {
                this.mixTargetDelta(g), f.onUpdate && f.onUpdate(g);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(DC),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: h,
        target: p,
        layout: m,
        latestValues: g,
      } = f;
      if (!(!h || !p || !m)) {
        if (
          this !== f &&
          this.layout &&
          m &&
          sx(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          p = this.target || Wt();
          const v = xe(this.layout.layoutBox.x);
          (p.x.min = f.target.x.min), (p.x.max = p.x.min + v);
          const x = xe(this.layout.layoutBox.y);
          (p.y.min = f.target.y.min), (p.y.max = p.y.min + x);
        }
        Je(h, p),
          $a(h, g),
          Sl(this.projectionDeltaWithTransform, this.layoutCorrected, h, g);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new MC()),
        this.sharedNodes.get(f).add(h);
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: f } = this.options;
      return f
        ? ((h = this.getStack()) == null ? void 0 : h.lead) || this
        : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: f } = this.options;
      return f ? ((h = this.getStack()) == null ? void 0 : h.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      m && m.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let h = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const m = {};
      p.z && Tf("z", f, m, this.animationValues);
      for (let g = 0; g < Sf.length; g++)
        Tf(`rotate${Sf[g]}`, f, m, this.animationValues),
          Tf(`skew${Sf[g]}`, f, m, this.animationValues);
      f.render();
      for (const g in m)
        f.setStaticValue(g, m[g]),
          this.animationValues && (this.animationValues[g] = m[g]);
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return RC;
      const h = { visibility: "" },
        p = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (h.opacity = ""),
          (h.pointerEvents = mo(f == null ? void 0 : f.pointerEvents) || ""),
          (h.transform = p ? p(this.latestValues, "") : "none"),
          h
        );
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        const T = {};
        return (
          this.options.layoutId &&
            ((T.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (T.pointerEvents = mo(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !Qi(this.latestValues) &&
            ((T.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)),
          T
        );
      }
      const g = m.animationValues || m.latestValues;
      this.applyTransformsToTarget(),
        (h.transform = CC(
          this.projectionDeltaWithTransform,
          this.treeScale,
          g
        )),
        p && (h.transform = p(g, h.transform));
      const { x: v, y: x } = this.projectionDelta;
      (h.transformOrigin = `${v.origin * 100}% ${x.origin * 100}% 0`),
        m.animationValues
          ? (h.opacity =
              m === this
                ? g.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : g.opacityExit)
          : (h.opacity =
              m === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                ? g.opacityExit
                : 0);
      for (const T in Rl) {
        if (g[T] === void 0) continue;
        const { correct: D, applyTo: w, isCSSVariable: E } = Rl[T],
          M = h.transform === "none" ? g[T] : D(g[T], m);
        if (w) {
          const _ = w.length;
          for (let N = 0; N < _; N++) h[w[N]] = M;
        } else
          E ? (this.options.visualElement.renderState.vars[T] = M) : (h[T] = M);
      }
      return (
        this.options.layoutId &&
          (h.pointerEvents =
            m === this
              ? mo(f == null ? void 0 : f.pointerEvents) || ""
              : "none"),
        h
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var h;
        return (h = f.currentAnimation) == null ? void 0 : h.stop();
      }),
        this.root.nodes.forEach(Mv),
        this.root.sharedNodes.clear();
    }
  };
}
function NC(n) {
  n.updateLayout();
}
function _C(n) {
  var s;
  const i = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = n.layout,
      { animationType: d } = n.options,
      f = i.source !== n.layout.source;
    d === "size"
      ? Ie((v) => {
          const x = f ? i.measuredBox[v] : i.layoutBox[v],
            T = xe(x);
          (x.min = r[v].min), (x.max = x.min + T);
        })
      : sx(d, i.layoutBox, r) &&
        Ie((v) => {
          const x = f ? i.measuredBox[v] : i.layoutBox[v],
            T = xe(r[v]);
          (x.max = x.min + T),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[v].max = n.relativeTarget[v].min + T));
        });
    const h = Fa();
    Sl(h, r, i.layoutBox);
    const p = Fa();
    f ? Sl(p, n.applyTransform(o, !0), i.measuredBox) : Sl(p, r, i.layoutBox);
    const m = !ex(h);
    let g = !1;
    if (!n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: x, layout: T } = v;
        if (x && T) {
          const D = Wt();
          Tl(D, i.layoutBox, x.layoutBox);
          const w = Wt();
          Tl(w, r, T.layoutBox),
            nx(D, w) || (g = !0),
            v.options.layoutRoot &&
              ((n.relativeTarget = w),
              (n.relativeTargetOrigin = D),
              (n.relativeParent = v));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: r,
      snapshot: i,
      delta: p,
      layoutDelta: h,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: r } = n.options;
    r && r();
  }
  n.options.transition = void 0;
}
function jC(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function zC(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function VC(n) {
  n.clearSnapshot();
}
function Mv(n) {
  n.clearMeasurements();
}
function LC(n) {
  n.isLayoutDirty = !1;
}
function BC(n) {
  const { visualElement: i } = n.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function Cv(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function kC(n) {
  n.resolveTargetDelta();
}
function UC(n) {
  n.calcProjection();
}
function HC(n) {
  n.resetSkewAndRotation();
}
function PC(n) {
  n.removeLeadSnapshot();
}
function Rv(n, i, s) {
  (n.translate = Yt(i.translate, 0, s)),
    (n.scale = Yt(i.scale, 1, s)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint);
}
function Dv(n, i, s, r) {
  (n.min = Yt(i.min, s.min, r)), (n.max = Yt(i.max, s.max, r));
}
function YC(n, i, s, r) {
  Dv(n.x, i.x, s.x, r), Dv(n.y, i.y, s.y, r);
}
function qC(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const GC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ov = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  Nv = Ov("applewebkit/") && !Ov("chrome/") ? Math.round : De;
function _v(n) {
  (n.min = Nv(n.min)), (n.max = Nv(n.max));
}
function XC(n) {
  _v(n.x), _v(n.y);
}
function sx(n, i, s) {
  return (
    n === "position" || (n === "preserve-aspect" && !ZM(Av(i), Av(s), 0.2))
  );
}
function KC(n) {
  var i;
  return n !== n.root && ((i = n.scroll) == null ? void 0 : i.wasRoot);
}
const ZC = ax({
    attachResizeListener: (n, i) => Ol(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  wf = { current: void 0 },
  lx = ax({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!wf.current) {
        const n = new ZC({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (wf.current = n);
      }
      return wf.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  QC = {
    pan: { Feature: uC },
    drag: { Feature: cC, ProjectionNode: lx, MeasureLayout: Jb },
  };
function jv(n, i, s) {
  const { props: r } = n;
  n.animationState &&
    r.whileHover &&
    n.animationState.setActive("whileHover", s === "Start");
  const o = "onHover" + s,
    d = r[o];
  d && Bt.postRender(() => d(i, Ll(i)));
}
class FC extends Ti {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = xE(
        i,
        (s, r) => (jv(this.node, r, "Start"), (o) => jv(this.node, o, "End"))
      ));
  }
  unmount() {}
}
class WC extends Ti {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = jl(
      Ol(this.node.current, "focus", () => this.onFocus()),
      Ol(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function zv(n, i, s) {
  const { props: r } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    r.whileTap &&
    n.animationState.setActive("whileTap", s === "Start");
  const o = "onTap" + (s === "End" ? "" : s),
    d = r[o];
  d && Bt.postRender(() => d(i, Ll(i)));
}
class $C extends Ti {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = AE(
        i,
        (s, r) => (
          zv(this.node, r, "Start"),
          (o, { success: d }) => zv(this.node, o, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const rd = new WeakMap(),
  Af = new WeakMap(),
  JC = (n) => {
    const i = rd.get(n.target);
    i && i(n);
  },
  IC = (n) => {
    n.forEach(JC);
  };
function tR({ root: n, ...i }) {
  const s = n || document;
  Af.has(s) || Af.set(s, {});
  const r = Af.get(s),
    o = JSON.stringify(i);
  return r[o] || (r[o] = new IntersectionObserver(IC, { root: n, ...i })), r[o];
}
function eR(n, i, s) {
  const r = tR(i);
  return (
    rd.set(n, s),
    r.observe(n),
    () => {
      rd.delete(n), r.unobserve(n);
    }
  );
}
const nR = { some: 0, all: 1 };
class iR extends Ti {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: r, amount: o = "some", once: d } = i,
      f = {
        root: s ? s.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : nR[o],
      },
      h = (p) => {
        const { isIntersecting: m } = p;
        if (
          this.isInView === m ||
          ((this.isInView = m), d && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(),
          x = m ? g : v;
        x && x(p);
      };
    return eR(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(aR(i, s)) && this.startObserver();
  }
  unmount() {}
}
function aR({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (s) => n[s] !== i[s];
}
const sR = {
    inView: { Feature: iR },
    tap: { Feature: $C },
    focus: { Feature: WC },
    hover: { Feature: FC },
  },
  lR = { layout: { ProjectionNode: lx, MeasureLayout: Jb } },
  od = { current: null },
  rx = { current: !1 };
function rR() {
  if (((rx.current = !0), !!wd))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (od.current = n.matches);
      n.addListener(i), i();
    } else od.current = !1;
}
const oR = new WeakMap();
function cR(n, i, s) {
  for (const r in i) {
    const o = i[r],
      d = s[r];
    if (ve(o)) n.addValue(r, o);
    else if (ve(d)) n.addValue(r, rn(o, { owner: n }));
    else if (d !== o)
      if (n.hasValue(r)) {
        const f = n.getValue(r);
        f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o);
      } else {
        const f = n.getStaticValue(r);
        n.addValue(r, rn(f !== void 0 ? f : o, { owner: n }));
      }
  }
  for (const r in s) i[r] === void 0 && n.removeValue(r);
  return i;
}
const Vv = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class uR {
  scrapeMotionValuesFromProps(i, s, r) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: d,
      visualState: f,
    },
    h = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Yd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = Re.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), Bt.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: m } = f;
    (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = s.initial ? { ...p } : {}),
      (this.renderState = m),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = r),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = h),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = Bo(s)),
      (this.isVariantNode = Rb(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current));
    const { willChange: g, ...v } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this
    );
    for (const x in v) {
      const T = v[x];
      p[x] !== void 0 && ve(T) && T.set(p[x], !1);
    }
  }
  mount(i) {
    (this.current = i),
      oR.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, r) => this.bindToMotionValue(r, s)),
      rx.current || rR(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : od.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      on(this.notifyUpdate),
      on(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const r = os.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const o = s.on("change", (h) => {
        (this.latestValues[i] = h),
          this.props.onUpdate && Bt.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      d = s.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        o(), d(), f && f(), s.owner && s.stop();
      });
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in es) {
      const s = es[i];
      if (!s) continue;
      const { isEnabled: r, Feature: o } = s;
      if (
        (!this.features[i] &&
          o &&
          r(this.props) &&
          (this.features[i] = new o(this)),
        this.features[i])
      ) {
        const d = this.features[i];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Wt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  update(i, s) {
    (i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s);
    for (let r = 0; r < Vv.length; r++) {
      const o = Vv[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const d = "on" + o,
        f = i[d];
      f && (this.propEventSubscriptions[o] = this.on(o, f));
    }
    (this.prevMotionValues = cR(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(i),
        () => s.variantChildren.delete(i)
      );
  }
  addValue(i, s) {
    const r = this.values.get(i);
    s !== r &&
      (r && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      (this.latestValues[i] = s.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState);
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let r = this.values.get(i);
    return (
      r === void 0 &&
        s !== void 0 &&
        ((r = rn(s === null ? void 0 : s, { owner: this })),
        this.addValue(i, r)),
      r
    );
  }
  readValue(i, s) {
    let r =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options);
    return (
      r != null &&
        (typeof r == "string" && (z0(r) || L0(r))
          ? (r = parseFloat(r))
          : !RE(r) && bi.test(s) && (r = vb(i, s)),
        this.setBaseTarget(i, ve(r) ? r.get() : r)),
      ve(r) ? r.get() : r
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    var d;
    const { initial: s } = this.props;
    let r;
    if (typeof s == "string" || typeof s == "object") {
      const f = th(
        this.props,
        s,
        (d = this.presenceContext) == null ? void 0 : d.custom
      );
      f && (r = f[i]);
    }
    if (s && r !== void 0) return r;
    const o = this.getBaseTargetFromProps(this.props, i);
    return o !== void 0 && !ve(o)
      ? o
      : this.initialValues[i] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[i];
  }
  on(i, s) {
    return this.events[i] || (this.events[i] = new Rd()), this.events[i].add(s);
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class ox extends uR {
  constructor() {
    super(...arguments), (this.KeyframeResolver = gE);
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: r }) {
    delete s[i], delete r[i];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    ve(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function cx(n, { style: i, vars: s }, r, o) {
  Object.assign(n.style, i, o && o.getProjectionStyles(r));
  for (const d in s) n.style.setProperty(d, s[d]);
}
function fR(n) {
  return window.getComputedStyle(n);
}
class dR extends ox {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = cx);
  }
  readValueFromInstance(i, s) {
    var r;
    if (os.has(s))
      return (r = this.projection) != null && r.isProjecting ? Ff(s) : LA(i, s);
    {
      const o = fR(i),
        d = (_d(s) ? o.getPropertyValue(s) : o[s]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Qb(i, s);
  }
  build(i, s, r) {
    $d(i, s, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return eh(i, s, r);
  }
}
const ux = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function hR(n, i, s, r) {
  cx(n, i, void 0, r);
  for (const o in i.attrs) n.setAttribute(ux.has(o) ? o : Wd(o), i.attrs[o]);
}
class mR extends ox {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Wt);
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (os.has(s)) {
      const r = yb(s);
      return (r && r.default) || 0;
    }
    return (s = ux.has(s) ? s : Wd(s)), i.getAttribute(s);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return kb(i, s, r);
  }
  build(i, s, r) {
    zb(i, s, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(i, s, r, o) {
    hR(i, s, r, o);
  }
  mount(i) {
    (this.isSVGTag = Lb(i.tagName)), super.mount(i);
  }
}
const pR = (n, i) =>
    Id(n) ? new mR(i) : new dR(i, { allowProjection: n !== S.Fragment }),
  gR = hM({ ...UM, ...sR, ...QC, ...lR }, pR),
  tn = kE(gR),
  go = new WeakMap();
let yi;
function yR(n, i) {
  if (i) {
    const { inlineSize: s, blockSize: r } = i[0];
    return { width: s, height: r };
  } else
    return Zd(n) && "getBBox" in n
      ? n.getBBox()
      : { width: n.offsetWidth, height: n.offsetHeight };
}
function vR({ target: n, contentRect: i, borderBoxSize: s }) {
  var r;
  (r = go.get(n)) == null ||
    r.forEach((o) => {
      o({
        target: n,
        contentSize: i,
        get size() {
          return yR(n, s);
        },
      });
    });
}
function bR(n) {
  n.forEach(vR);
}
function xR() {
  typeof ResizeObserver > "u" || (yi = new ResizeObserver(bR));
}
function SR(n, i) {
  yi || xR();
  const s = bb(n);
  return (
    s.forEach((r) => {
      let o = go.get(r);
      o || ((o = new Set()), go.set(r, o)),
        o.add(i),
        yi == null || yi.observe(r);
    }),
    () => {
      s.forEach((r) => {
        const o = go.get(r);
        o == null || o.delete(i),
          (o != null && o.size) || yi == null || yi.unobserve(r);
      });
    }
  );
}
const yo = new Set();
let wl;
function TR() {
  (wl = () => {
    const n = { width: window.innerWidth, height: window.innerHeight },
      i = { target: window, size: n, contentSize: n };
    yo.forEach((s) => s(i));
  }),
    window.addEventListener("resize", wl);
}
function wR(n) {
  return (
    yo.add(n),
    wl || TR(),
    () => {
      yo.delete(n), !yo.size && wl && (wl = void 0);
    }
  );
}
function AR(n, i) {
  return typeof n == "function" ? wR(n) : SR(n, i);
}
const ER = 50,
  Lv = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  MR = () => ({ time: 0, x: Lv(), y: Lv() }),
  CR = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Bv(n, i, s, r) {
  const o = s[i],
    { length: d, position: f } = CR[i],
    h = o.current,
    p = s.time;
  (o.current = n[`scroll${f}`]),
    (o.scrollLength = n[`scroll${d}`] - n[`client${d}`]),
    (o.offset.length = 0),
    (o.offset[0] = 0),
    (o.offset[1] = o.scrollLength),
    (o.progress = ts(0, o.scrollLength, o.current));
  const m = r - p;
  o.velocity = m > ER ? 0 : Dd(o.current - h, m);
}
function RR(n, i, s) {
  Bv(n, "x", i, s), Bv(n, "y", i, s), (i.time = s);
}
function DR(n, i) {
  const s = { x: 0, y: 0 };
  let r = n;
  for (; r && r !== i; )
    if (jo(r))
      (s.x += r.offsetLeft), (s.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const o = r.getBoundingClientRect();
      r = r.parentElement;
      const d = r.getBoundingClientRect();
      (s.x += o.left - d.left), (s.y += o.top - d.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: o, y: d } = r.getBBox();
      (s.x += o), (s.y += d);
      let f = null,
        h = r.parentNode;
      for (; !f; ) h.tagName === "svg" && (f = h), (h = r.parentNode);
      r = f;
    } else break;
  return s;
}
const cd = { start: 0, center: 0.5, end: 1 };
function kv(n, i, s = 0) {
  let r = 0;
  if ((n in cd && (n = cd[n]), typeof n == "string")) {
    const o = parseFloat(n);
    n.endsWith("px")
      ? (r = o)
      : n.endsWith("%")
      ? (n = o / 100)
      : n.endsWith("vw")
      ? (r = (o / 100) * document.documentElement.clientWidth)
      : n.endsWith("vh")
      ? (r = (o / 100) * document.documentElement.clientHeight)
      : (n = o);
  }
  return typeof n == "number" && (r = i * n), s + r;
}
const OR = [0, 0];
function NR(n, i, s, r) {
  let o = Array.isArray(n) ? n : OR,
    d = 0,
    f = 0;
  return (
    typeof n == "number"
      ? (o = [n, n])
      : typeof n == "string" &&
        ((n = n.trim()),
        n.includes(" ") ? (o = n.split(" ")) : (o = [n, cd[n] ? n : "0"])),
    (d = kv(o[0], s, r)),
    (f = kv(o[1], i)),
    d - f
  );
}
const _R = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  jR = { x: 0, y: 0 };
function zR(n) {
  return "getBBox" in n && n.tagName !== "svg"
    ? n.getBBox()
    : { width: n.clientWidth, height: n.clientHeight };
}
function VR(n, i, s) {
  const { offset: r = _R.All } = s,
    { target: o = n, axis: d = "y" } = s,
    f = d === "y" ? "height" : "width",
    h = o !== n ? DR(o, n) : jR,
    p = o === n ? { width: n.scrollWidth, height: n.scrollHeight } : zR(o),
    m = { width: n.clientWidth, height: n.clientHeight };
  i[d].offset.length = 0;
  let g = !i[d].interpolate;
  const v = r.length;
  for (let x = 0; x < v; x++) {
    const T = NR(r[x], m[f], p[f], h[d]);
    !g && T !== i[d].interpolatorOffsets[x] && (g = !0), (i[d].offset[x] = T);
  }
  g &&
    ((i[d].interpolate = kd(i[d].offset, ab(r), { clamp: !1 })),
    (i[d].interpolatorOffsets = [...i[d].offset])),
    (i[d].progress = Sn(0, 1, i[d].interpolate(i[d].current)));
}
function LR(n, i = n, s) {
  if (((s.x.targetOffset = 0), (s.y.targetOffset = 0), i !== n)) {
    let r = i;
    for (; r && r !== n; )
      (s.x.targetOffset += r.offsetLeft),
        (s.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (s.x.targetLength = i === n ? i.scrollWidth : i.clientWidth),
    (s.y.targetLength = i === n ? i.scrollHeight : i.clientHeight),
    (s.x.containerLength = n.clientWidth),
    (s.y.containerLength = n.clientHeight);
}
function BR(n, i, s, r = {}) {
  return {
    measure: (o) => {
      LR(n, r.target, s), RR(n, s, o), (r.offset || r.target) && VR(n, s, r);
    },
    notify: () => i(s),
  };
}
const hl = new WeakMap(),
  Uv = new WeakMap(),
  Ef = new WeakMap(),
  Hv = (n) => (n === document.scrollingElement ? window : n);
function fx(n, { container: i = document.scrollingElement, ...s } = {}) {
  if (!i) return De;
  let r = Ef.get(i);
  r || ((r = new Set()), Ef.set(i, r));
  const o = MR(),
    d = BR(i, n, o, s);
  if ((r.add(d), !hl.has(i))) {
    const h = () => {
        for (const v of r) v.measure(re.timestamp);
        Bt.preUpdate(p);
      },
      p = () => {
        for (const v of r) v.notify();
      },
      m = () => Bt.read(h);
    hl.set(i, m);
    const g = Hv(i);
    window.addEventListener("resize", m, { passive: !0 }),
      i !== document.documentElement && Uv.set(i, AR(i, m)),
      g.addEventListener("scroll", m, { passive: !0 }),
      m();
  }
  const f = hl.get(i);
  return (
    Bt.read(f, !1, !0),
    () => {
      var m;
      on(f);
      const h = Ef.get(i);
      if (!h || (h.delete(d), h.size)) return;
      const p = hl.get(i);
      hl.delete(i),
        p &&
          (Hv(i).removeEventListener("scroll", p),
          (m = Uv.get(i)) == null || m(),
          window.removeEventListener("resize", p));
    }
  );
}
const Pv = new Map();
function kR(n) {
  const i = { value: 0 },
    s = fx((r) => {
      i.value = r[n.axis].progress * 100;
    }, n);
  return { currentTime: i, cancel: s };
}
function dx({ source: n, container: i, ...s }) {
  const { axis: r } = s;
  n && (i = n);
  const o = Pv.get(i) ?? new Map();
  Pv.set(i, o);
  const d = s.target ?? "self",
    f = o.get(d) ?? {},
    h = r + (s.offset ?? []).join(",");
  return (
    f[h] ||
      (f[h] =
        !s.target && ob()
          ? new ScrollTimeline({ source: i, axis: r })
          : kR({ container: i, ...s })),
    f[h]
  );
}
function UR(n, i) {
  const s = dx(i);
  return n.attachTimeline({
    timeline: i.target ? void 0 : s,
    observe: (r) => (
      r.pause(),
      Ab((o) => {
        r.time = r.duration * o;
      }, s)
    ),
  });
}
function HR(n) {
  return n.length === 2;
}
function PR(n, i) {
  return HR(n)
    ? fx((s) => {
        n(s[i.axis].progress, s);
      }, i)
    : Ab(n, dx(i));
}
function YR(
  n,
  { axis: i = "y", container: s = document.scrollingElement, ...r } = {}
) {
  if (!s) return De;
  const o = { axis: i, container: s, ...r };
  return typeof n == "function" ? PR(n, o) : UR(n, o);
}
function Yv(n, i) {
  V2(!!(!i || i.current));
}
const qR = () => ({
  scrollX: rn(0),
  scrollY: rn(0),
  scrollXProgress: rn(0),
  scrollYProgress: rn(0),
});
function GR({ container: n, target: i, layoutEffect: s = !0, ...r } = {}) {
  const o = ss(qR);
  return (
    (s ? No : S.useEffect)(
      () => (
        Yv("target", i),
        Yv("container", n),
        YR(
          (f, { x: h, y: p }) => {
            o.scrollX.set(h.current),
              o.scrollXProgress.set(h.progress),
              o.scrollY.set(p.current),
              o.scrollYProgress.set(p.progress);
          },
          {
            ...r,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (i == null ? void 0 : i.current) || void 0,
          }
        )
      ),
      [n, i, JSON.stringify(r.offset)]
    ),
    o
  );
}
function XR(n) {
  const i = ss(() => rn(n)),
    { isStatic: s } = S.useContext(zo);
  if (s) {
    const [, r] = S.useState(n);
    S.useEffect(() => i.on("change", r), []);
  }
  return i;
}
function hx(n, i) {
  const s = XR(i()),
    r = () => s.set(i());
  return (
    r(),
    No(() => {
      const o = () => Bt.preRender(r, !1, !0),
        d = n.map((f) => f.on("change", o));
      return () => {
        d.forEach((f) => f()), on(r);
      };
    }),
    s
  );
}
function KR(n) {
  (bl.current = []), n();
  const i = hx(bl.current, n);
  return (bl.current = void 0), i;
}
function qv(n, i, s, r) {
  if (typeof n == "function") return KR(n);
  const o = typeof i == "function" ? i : ME(i, s, r);
  return Array.isArray(n) ? Gv(n, o) : Gv([n], ([d]) => o(d));
}
function Gv(n, i) {
  const s = ss(() => []);
  return hx(n, () => {
    s.length = 0;
    const r = n.length;
    for (let o = 0; o < r; o++) s[o] = n[o].get();
    return i(s);
  });
}
const ZR = {
  ar: {
    loginAsAgent: "دخول كوسيط",
    loginAsUser: "دخول كمستخدم",
    darkMode: "الوضع الليلي",
    lightMode: "الوضع النهاري",
    language: "اللغة",
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navOffices: "المكاتب العقارية",
    navContact: "اتصل بنا",
    heroTitle: "خدمات العقارات السياحية والسكنية",
    heroSubtitle:
      "نحن نقدم أفضل خدمات بيع وتأجير العقارات السياحية والسكنية مع فريق من الخبراء المتخصصين",
    exploreProperties: "استكشف العقارات",
    contactUs: "تواصل معنا",
    servicesTitle: "خدماتنا",
    servicesSubtitle: "نقدم مجموعة شاملة من الخدمات العقارية",
    touristProperties: "العقارات السياحية",
    touristPropertiesDesc: "عقارات سياحية مميزة في أفضل المواقع",
    residentialProperties: "العقارات السكنية",
    residentialPropertiesDesc: "شقق وفلل سكنية بمواصفات عالية الجودة",
    propertyManagement: "إدارة العقارات",
    propertyManagementDesc: "خدمات إدارة شاملة لعقاراتك",
    consultation: "الاستشارات العقارية",
    consultationDesc: "استشارات متخصصة لاتخاذ القرار الأمثل",
    topOfficesTitle: "أفضل 5 مكاتب عقارية",
    topOfficesSubtitle: "شركاؤنا المتميزون في مجال العقارات",
    office1Name: "مكتب العقارات الذهبية",
    office1Desc: "متخصص في العقارات الفاخرة والاستثمارية",
    office2Name: "مكتب النخبة العقاري",
    office2Desc: "خبرة 15 عاماً في السوق العقاري",
    office3Name: "مكتب الأصالة للعقارات",
    office3Desc: "أفضل العروض العقارية بأسعار تنافسية",
    office4Name: "مكتب المستقبل العقاري",
    office4Desc: "حلول عقارية مبتكرة ومتطورة",
    office5Name: "مكتب الثقة للعقارات",
    office5Desc: "الشفافية والمصداقية في كل معاملة",
    footerTitle: "منصة العقارات",
    footerDesc: "شريكك الموثوق في عالم العقارات",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    contact: "اتصل بنا",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة",
    agentRegistration: "تسجيل الوسيط",
    agentType: "نوع الوسيط",
    office: "مكتب",
    serviceProvider: "مزود خدمة",
    agentName: "اسم الوسيط",
    location: "الموقع",
    email: "البريد الإلكتروني",
    proofDocument: "وثيقة إثبات الوسيط",
    uploadDocument: "رفع الوثيقة",
    submitRequest: "إرسال الطلب",
    cancel: "إلغاء",
    pleaseSelectAgentType: "يرجى اختيار نوع الوسيط",
    pleaseEnterAgentName: "يرجى إدخال اسم الوسيط",
    pleaseEnterLocation: "يرجى إدخال الموقع",
    pleaseEnterValidEmail: "يرجى إدخال بريد إلكتروني صحيح",
    pleaseUploadDocument: "يرجى رفع وثيقة الإثبات",
    requestSubmittedSuccessfully:
      "تم إرسال الطلب بنجاح! سيتم مراجعته والرد عليك قريباً.",
    downloadMobileApp: "تحميل تطبيق الجوال",
  },
  en: {
    loginAsAgent: "Login as Agent",
    loginAsUser: "Login as User",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "Language",
    navHome: "Home",
    navServices: "Services",
    navOffices: "Offices",
    navContact: "Contact",
    heroTitle: "Tourist & Residential Real Estate Services",
    heroSubtitle:
      "We provide the best tourist and residential real estate sales and rental services with a team of specialized experts",
    exploreProperties: "Explore Properties",
    contactUs: "Contact Us",
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer a comprehensive range of real estate services",
    touristProperties: "Tourist Properties",
    touristPropertiesDesc: "Premium tourist properties in the best locations",
    residentialProperties: "Residential Properties",
    residentialPropertiesDesc: "High-quality apartments and villas",
    propertyManagement: "Property Management",
    propertyManagementDesc:
      "Comprehensive management services for your properties",
    consultation: "Real Estate Consultation",
    consultationDesc: "Specialized consultations for optimal decision making",
    topOfficesTitle: "Top 5 Real Estate Offices",
    topOfficesSubtitle: "Our distinguished partners in real estate",
    office1Name: "Golden Real Estate Office",
    office1Desc: "Specialized in luxury and investment properties",
    office2Name: "Elite Real Estate Office",
    office2Desc: "15 years of experience in the real estate market",
    office3Name: "Authenticity Real Estate Office",
    office3Desc: "Best real estate offers at competitive prices",
    office4Name: "Future Real Estate Office",
    office4Desc: "Innovative and advanced real estate solutions",
    office5Name: "Trust Real Estate Office",
    office5Desc: "Transparency and credibility in every transaction",
    footerTitle: "Real Estate Platform",
    footerDesc: "Your trusted partner in the world of real estate",
    quickLinks: "Quick Links",
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    followUs: "Follow Us",
    allRightsReserved: "All Rights Reserved",
    agentRegistration: "Agent Registration",
    agentType: "Agent Type",
    office: "Office",
    serviceProvider: "Service Provider",
    agentName: "Agent Name",
    location: "Location",
    email: "Email",
    proofDocument: "Agent Proof Document",
    uploadDocument: "Upload Document",
    submitRequest: "Submit Request",
    cancel: "Cancel",
    pleaseSelectAgentType: "Please select agent type",
    pleaseEnterAgentName: "Please enter agent name",
    pleaseEnterLocation: "Please enter location",
    pleaseEnterValidEmail: "Please enter a valid email",
    pleaseUploadDocument: "Please upload proof document",
    requestSubmittedSuccessfully:
      "Request submitted successfully! It will be reviewed and we'll get back to you soon.",
    downloadMobileApp: "Download Mobile App",
  },
};
function so({ className: n, type: i, ...s }) {
  return A.jsx("input", {
    type: i,
    "data-slot": "input",
    className: Se(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      n
    ),
    ...s,
  });
}
var Bl = y0();
const QR = p0(Bl);
var FR = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Zt = FR.reduce((n, i) => {
    const s = Al(`Primitive.${i}`),
      r = S.forwardRef((o, d) => {
        const { asChild: f, ...h } = o,
          p = f ? s : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          A.jsx(p, { ...h, ref: d })
        );
      });
    return (r.displayName = `Primitive.${i}`), { ...n, [i]: r };
  }, {});
function WR(n, i) {
  n && Bl.flushSync(() => n.dispatchEvent(i));
}
var $R = "Label",
  mx = S.forwardRef((n, i) =>
    A.jsx(Zt.label, {
      ...n,
      ref: i,
      onMouseDown: (s) => {
        var o;
        s.target.closest("button, input, select, textarea") ||
          ((o = n.onMouseDown) == null || o.call(n, s),
          !s.defaultPrevented && s.detail > 1 && s.preventDefault());
      },
    })
  );
mx.displayName = $R;
var JR = mx;
function ml({ className: n, ...i }) {
  return A.jsx(JR, {
    "data-slot": "label",
    className: Se(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      n
    ),
    ...i,
  });
}
function Xv(n, [i, s]) {
  return Math.min(s, Math.max(i, n));
}
function It(n, i, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (o) {
    if ((n == null || n(o), s === !1 || !o.defaultPrevented))
      return i == null ? void 0 : i(o);
  };
}
function ih(n, i = []) {
  let s = [];
  function r(d, f) {
    const h = S.createContext(f),
      p = s.length;
    s = [...s, f];
    const m = (v) => {
      var M;
      const { scope: x, children: T, ...D } = v,
        w = ((M = x == null ? void 0 : x[n]) == null ? void 0 : M[p]) || h,
        E = S.useMemo(() => D, Object.values(D));
      return A.jsx(w.Provider, { value: E, children: T });
    };
    m.displayName = d + "Provider";
    function g(v, x) {
      var w;
      const T = ((w = x == null ? void 0 : x[n]) == null ? void 0 : w[p]) || h,
        D = S.useContext(T);
      if (D) return D;
      if (f !== void 0) return f;
      throw new Error(`\`${v}\` must be used within \`${d}\``);
    }
    return [m, g];
  }
  const o = () => {
    const d = s.map((f) => S.createContext(f));
    return function (h) {
      const p = (h == null ? void 0 : h[n]) || d;
      return S.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: p } }), [h, p]);
    };
  };
  return (o.scopeName = n), [r, IR(o, ...i)];
}
function IR(...n) {
  const i = n[0];
  if (n.length === 1) return i;
  const s = () => {
    const r = n.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (d) {
      const f = r.reduce((h, { useScope: p, scopeName: m }) => {
        const v = p(d)[`__scope${m}`];
        return { ...h, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return (s.scopeName = i.scopeName), s;
}
function tD(n) {
  const i = n + "CollectionProvider",
    [s, r] = ih(i),
    [o, d] = s(i, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (w) => {
      const { scope: E, children: M } = w,
        _ = pi.useRef(null),
        N = pi.useRef(new Map()).current;
      return A.jsx(o, { scope: E, itemMap: N, collectionRef: _, children: M });
    };
  f.displayName = i;
  const h = n + "CollectionSlot",
    p = Al(h),
    m = pi.forwardRef((w, E) => {
      const { scope: M, children: _ } = w,
        N = d(h, M),
        Y = oe(E, N.collectionRef);
      return A.jsx(p, { ref: Y, children: _ });
    });
  m.displayName = h;
  const g = n + "CollectionItemSlot",
    v = "data-radix-collection-item",
    x = Al(g),
    T = pi.forwardRef((w, E) => {
      const { scope: M, children: _, ...N } = w,
        Y = pi.useRef(null),
        z = oe(E, Y),
        Q = d(g, M);
      return (
        pi.useEffect(
          () => (
            Q.itemMap.set(Y, { ref: Y, ...N }), () => void Q.itemMap.delete(Y)
          )
        ),
        A.jsx(x, { [v]: "", ref: z, children: _ })
      );
    });
  T.displayName = g;
  function D(w) {
    const E = d(n + "CollectionConsumer", w);
    return pi.useCallback(() => {
      const _ = E.collectionRef.current;
      if (!_) return [];
      const N = Array.from(_.querySelectorAll(`[${v}]`));
      return Array.from(E.itemMap.values()).sort(
        (Q, Z) => N.indexOf(Q.ref.current) - N.indexOf(Z.ref.current)
      );
    }, [E.collectionRef, E.itemMap]);
  }
  return [{ Provider: f, Slot: m, ItemSlot: T }, D, r];
}
var eD = S.createContext(void 0);
function nD(n) {
  const i = S.useContext(eD);
  return n || i || "ltr";
}
function Ii(n) {
  const i = S.useRef(n);
  return (
    S.useEffect(() => {
      i.current = n;
    }),
    S.useMemo(
      () =>
        (...s) => {
          var r;
          return (r = i.current) == null ? void 0 : r.call(i, ...s);
        },
      []
    )
  );
}
function iD(n, i = globalThis == null ? void 0 : globalThis.document) {
  const s = Ii(n);
  S.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && s(o);
    };
    return (
      i.addEventListener("keydown", r, { capture: !0 }),
      () => i.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [s, i]);
}
var aD = "DismissableLayer",
  ud = "dismissableLayer.update",
  sD = "dismissableLayer.pointerDownOutside",
  lD = "dismissableLayer.focusOutside",
  Kv,
  px = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  gx = S.forwardRef((n, i) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: h,
        ...p
      } = n,
      m = S.useContext(px),
      [g, v] = S.useState(null),
      x =
        (g == null ? void 0 : g.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, T] = S.useState({}),
      D = oe(i, (Z) => v(Z)),
      w = Array.from(m.layers),
      [E] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      M = w.indexOf(E),
      _ = g ? w.indexOf(g) : -1,
      N = m.layersWithOutsidePointerEventsDisabled.size > 0,
      Y = _ >= M,
      z = cD((Z) => {
        const P = Z.target,
          tt = [...m.branches].some((lt) => lt.contains(P));
        !Y ||
          tt ||
          (o == null || o(Z),
          f == null || f(Z),
          Z.defaultPrevented || h == null || h());
      }, x),
      Q = uD((Z) => {
        const P = Z.target;
        [...m.branches].some((lt) => lt.contains(P)) ||
          (d == null || d(Z),
          f == null || f(Z),
          Z.defaultPrevented || h == null || h());
      }, x);
    return (
      iD((Z) => {
        _ === m.layers.size - 1 &&
          (r == null || r(Z),
          !Z.defaultPrevented && h && (Z.preventDefault(), h()));
      }, x),
      S.useEffect(() => {
        if (g)
          return (
            s &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Kv = x.body.style.pointerEvents),
                (x.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            Zv(),
            () => {
              s &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (x.body.style.pointerEvents = Kv);
            }
          );
      }, [g, x, s, m]),
      S.useEffect(
        () => () => {
          g &&
            (m.layers.delete(g),
            m.layersWithOutsidePointerEventsDisabled.delete(g),
            Zv());
        },
        [g, m]
      ),
      S.useEffect(() => {
        const Z = () => T({});
        return (
          document.addEventListener(ud, Z),
          () => document.removeEventListener(ud, Z)
        );
      }, []),
      A.jsx(Zt.div, {
        ...p,
        ref: D,
        style: {
          pointerEvents: N ? (Y ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: It(n.onFocusCapture, Q.onFocusCapture),
        onBlurCapture: It(n.onBlurCapture, Q.onBlurCapture),
        onPointerDownCapture: It(
          n.onPointerDownCapture,
          z.onPointerDownCapture
        ),
      })
    );
  });
gx.displayName = aD;
var rD = "DismissableLayerBranch",
  oD = S.forwardRef((n, i) => {
    const s = S.useContext(px),
      r = S.useRef(null),
      o = oe(i, r);
    return (
      S.useEffect(() => {
        const d = r.current;
        if (d)
          return (
            s.branches.add(d),
            () => {
              s.branches.delete(d);
            }
          );
      }, [s.branches]),
      A.jsx(Zt.div, { ...n, ref: o })
    );
  });
oD.displayName = rD;
function cD(n, i = globalThis == null ? void 0 : globalThis.document) {
  const s = Ii(n),
    r = S.useRef(!1),
    o = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const d = (h) => {
          if (h.target && !r.current) {
            let p = function () {
              yx(sD, s, m, { discrete: !0 });
            };
            const m = { originalEvent: h };
            h.pointerType === "touch"
              ? (i.removeEventListener("click", o.current),
                (o.current = p),
                i.addEventListener("click", o.current, { once: !0 }))
              : p();
          } else i.removeEventListener("click", o.current);
          r.current = !1;
        },
        f = window.setTimeout(() => {
          i.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(f),
          i.removeEventListener("pointerdown", d),
          i.removeEventListener("click", o.current);
      };
    }, [i, s]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function uD(n, i = globalThis == null ? void 0 : globalThis.document) {
  const s = Ii(n),
    r = S.useRef(!1);
  return (
    S.useEffect(() => {
      const o = (d) => {
        d.target &&
          !r.current &&
          yx(lD, s, { originalEvent: d }, { discrete: !1 });
      };
      return (
        i.addEventListener("focusin", o),
        () => i.removeEventListener("focusin", o)
      );
    }, [i, s]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Zv() {
  const n = new CustomEvent(ud);
  document.dispatchEvent(n);
}
function yx(n, i, s, { discrete: r }) {
  const o = s.originalEvent.target,
    d = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: s });
  i && o.addEventListener(n, i, { once: !0 }),
    r ? WR(o, d) : o.dispatchEvent(d);
}
var Mf = 0;
function fD() {
  S.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", n[0] ?? Qv()),
      document.body.insertAdjacentElement("beforeend", n[1] ?? Qv()),
      Mf++,
      () => {
        Mf === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((i) => i.remove()),
          Mf--;
      }
    );
  }, []);
}
function Qv() {
  const n = document.createElement("span");
  return (
    n.setAttribute("data-radix-focus-guard", ""),
    (n.tabIndex = 0),
    (n.style.outline = "none"),
    (n.style.opacity = "0"),
    (n.style.position = "fixed"),
    (n.style.pointerEvents = "none"),
    n
  );
}
var Cf = "focusScope.autoFocusOnMount",
  Rf = "focusScope.autoFocusOnUnmount",
  Fv = { bubbles: !1, cancelable: !0 },
  dD = "FocusScope",
  vx = S.forwardRef((n, i) => {
    const {
        loop: s = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: d,
        ...f
      } = n,
      [h, p] = S.useState(null),
      m = Ii(o),
      g = Ii(d),
      v = S.useRef(null),
      x = oe(i, (w) => p(w)),
      T = S.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    S.useEffect(() => {
      if (r) {
        let w = function (N) {
            if (T.paused || !h) return;
            const Y = N.target;
            h.contains(Y) ? (v.current = Y) : vi(v.current, { select: !0 });
          },
          E = function (N) {
            if (T.paused || !h) return;
            const Y = N.relatedTarget;
            Y !== null && (h.contains(Y) || vi(v.current, { select: !0 }));
          },
          M = function (N) {
            if (document.activeElement === document.body)
              for (const z of N) z.removedNodes.length > 0 && vi(h);
          };
        document.addEventListener("focusin", w),
          document.addEventListener("focusout", E);
        const _ = new MutationObserver(M);
        return (
          h && _.observe(h, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", w),
              document.removeEventListener("focusout", E),
              _.disconnect();
          }
        );
      }
    }, [r, h, T.paused]),
      S.useEffect(() => {
        if (h) {
          $v.add(T);
          const w = document.activeElement;
          if (!h.contains(w)) {
            const M = new CustomEvent(Cf, Fv);
            h.addEventListener(Cf, m),
              h.dispatchEvent(M),
              M.defaultPrevented ||
                (hD(vD(bx(h)), { select: !0 }),
                document.activeElement === w && vi(h));
          }
          return () => {
            h.removeEventListener(Cf, m),
              setTimeout(() => {
                const M = new CustomEvent(Rf, Fv);
                h.addEventListener(Rf, g),
                  h.dispatchEvent(M),
                  M.defaultPrevented || vi(w ?? document.body, { select: !0 }),
                  h.removeEventListener(Rf, g),
                  $v.remove(T);
              }, 0);
          };
        }
      }, [h, m, g, T]);
    const D = S.useCallback(
      (w) => {
        if ((!s && !r) || T.paused) return;
        const E = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey,
          M = document.activeElement;
        if (E && M) {
          const _ = w.currentTarget,
            [N, Y] = mD(_);
          N && Y
            ? !w.shiftKey && M === Y
              ? (w.preventDefault(), s && vi(N, { select: !0 }))
              : w.shiftKey &&
                M === N &&
                (w.preventDefault(), s && vi(Y, { select: !0 }))
            : M === _ && w.preventDefault();
        }
      },
      [s, r, T.paused]
    );
    return A.jsx(Zt.div, { tabIndex: -1, ...f, ref: x, onKeyDown: D });
  });
vx.displayName = dD;
function hD(n, { select: i = !1 } = {}) {
  const s = document.activeElement;
  for (const r of n)
    if ((vi(r, { select: i }), document.activeElement !== s)) return;
}
function mD(n) {
  const i = bx(n),
    s = Wv(i, n),
    r = Wv(i.reverse(), n);
  return [s, r];
}
function bx(n) {
  const i = [],
    s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) i.push(s.currentNode);
  return i;
}
function Wv(n, i) {
  for (const s of n) if (!pD(s, { upTo: i })) return s;
}
function pD(n, { upTo: i }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (i !== void 0 && n === i) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function gD(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function vi(n, { select: i = !1 } = {}) {
  if (n && n.focus) {
    const s = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== s && gD(n) && i && n.select();
  }
}
var $v = yD();
function yD() {
  let n = [];
  return {
    add(i) {
      const s = n[0];
      i !== s && (s == null || s.pause()), (n = Jv(n, i)), n.unshift(i);
    },
    remove(i) {
      var s;
      (n = Jv(n, i)), (s = n[0]) == null || s.resume();
    },
  };
}
function Jv(n, i) {
  const s = [...n],
    r = s.indexOf(i);
  return r !== -1 && s.splice(r, 1), s;
}
function vD(n) {
  return n.filter((i) => i.tagName !== "A");
}
var Oe =
    globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
  bD = g0[" useId ".trim().toString()] || (() => {}),
  xD = 0;
function ah(n) {
  const [i, s] = S.useState(bD());
  return (
    Oe(() => {
      s((r) => r ?? String(xD++));
    }, [n]),
    n || (i ? `radix-${i}` : "")
  );
}
const SD = ["top", "right", "bottom", "left"],
  xi = Math.min,
  Pe = Math.max,
  Mo = Math.round,
  lo = Math.floor,
  xn = (n) => ({ x: n, y: n }),
  TD = { left: "right", right: "left", bottom: "top", top: "bottom" },
  wD = { start: "end", end: "start" };
function fd(n, i, s) {
  return Pe(n, xi(i, s));
}
function Yn(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function qn(n) {
  return n.split("-")[0];
}
function cs(n) {
  return n.split("-")[1];
}
function sh(n) {
  return n === "x" ? "y" : "x";
}
function lh(n) {
  return n === "y" ? "height" : "width";
}
function Hn(n) {
  return ["top", "bottom"].includes(qn(n)) ? "y" : "x";
}
function rh(n) {
  return sh(Hn(n));
}
function AD(n, i, s) {
  s === void 0 && (s = !1);
  const r = cs(n),
    o = rh(n),
    d = lh(o);
  let f =
    o === "x"
      ? r === (s ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return i.reference[d] > i.floating[d] && (f = Co(f)), [f, Co(f)];
}
function ED(n) {
  const i = Co(n);
  return [dd(n), i, dd(i)];
}
function dd(n) {
  return n.replace(/start|end/g, (i) => wD[i]);
}
function MD(n, i, s) {
  const r = ["left", "right"],
    o = ["right", "left"],
    d = ["top", "bottom"],
    f = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return s ? (i ? o : r) : i ? r : o;
    case "left":
    case "right":
      return i ? d : f;
    default:
      return [];
  }
}
function CD(n, i, s, r) {
  const o = cs(n);
  let d = MD(qn(n), s === "start", r);
  return (
    o && ((d = d.map((f) => f + "-" + o)), i && (d = d.concat(d.map(dd)))), d
  );
}
function Co(n) {
  return n.replace(/left|right|bottom|top/g, (i) => TD[i]);
}
function RD(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function xx(n) {
  return typeof n != "number"
    ? RD(n)
    : { top: n, right: n, bottom: n, left: n };
}
function Ro(n) {
  const { x: i, y: s, width: r, height: o } = n;
  return {
    width: r,
    height: o,
    top: s,
    left: i,
    right: i + r,
    bottom: s + o,
    x: i,
    y: s,
  };
}
function Iv(n, i, s) {
  let { reference: r, floating: o } = n;
  const d = Hn(i),
    f = rh(i),
    h = lh(f),
    p = qn(i),
    m = d === "y",
    g = r.x + r.width / 2 - o.width / 2,
    v = r.y + r.height / 2 - o.height / 2,
    x = r[h] / 2 - o[h] / 2;
  let T;
  switch (p) {
    case "top":
      T = { x: g, y: r.y - o.height };
      break;
    case "bottom":
      T = { x: g, y: r.y + r.height };
      break;
    case "right":
      T = { x: r.x + r.width, y: v };
      break;
    case "left":
      T = { x: r.x - o.width, y: v };
      break;
    default:
      T = { x: r.x, y: r.y };
  }
  switch (cs(i)) {
    case "start":
      T[f] -= x * (s && m ? -1 : 1);
      break;
    case "end":
      T[f] += x * (s && m ? -1 : 1);
      break;
  }
  return T;
}
const DD = async (n, i, s) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: d = [],
      platform: f,
    } = s,
    h = d.filter(Boolean),
    p = await (f.isRTL == null ? void 0 : f.isRTL(i));
  let m = await f.getElementRects({ reference: n, floating: i, strategy: o }),
    { x: g, y: v } = Iv(m, r, p),
    x = r,
    T = {},
    D = 0;
  for (let w = 0; w < h.length; w++) {
    const { name: E, fn: M } = h[w],
      {
        x: _,
        y: N,
        data: Y,
        reset: z,
      } = await M({
        x: g,
        y: v,
        initialPlacement: r,
        placement: x,
        strategy: o,
        middlewareData: T,
        rects: m,
        platform: f,
        elements: { reference: n, floating: i },
      });
    (g = _ ?? g),
      (v = N ?? v),
      (T = { ...T, [E]: { ...T[E], ...Y } }),
      z &&
        D <= 50 &&
        (D++,
        typeof z == "object" &&
          (z.placement && (x = z.placement),
          z.rects &&
            (m =
              z.rects === !0
                ? await f.getElementRects({
                    reference: n,
                    floating: i,
                    strategy: o,
                  })
                : z.rects),
          ({ x: g, y: v } = Iv(m, x, p))),
        (w = -1));
  }
  return { x: g, y: v, placement: x, strategy: o, middlewareData: T };
};
async function Nl(n, i) {
  var s;
  i === void 0 && (i = {});
  const { x: r, y: o, platform: d, rects: f, elements: h, strategy: p } = n,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: v = "floating",
      altBoundary: x = !1,
      padding: T = 0,
    } = Yn(i, n),
    D = xx(T),
    E = h[x ? (v === "floating" ? "reference" : "floating") : v],
    M = Ro(
      await d.getClippingRect({
        element:
          (s = await (d.isElement == null ? void 0 : d.isElement(E))) == null ||
          s
            ? E
            : E.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(h.floating))),
        boundary: m,
        rootBoundary: g,
        strategy: p,
      })
    ),
    _ =
      v === "floating"
        ? { x: r, y: o, width: f.floating.width, height: f.floating.height }
        : f.reference,
    N = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(h.floating)),
    Y = (await (d.isElement == null ? void 0 : d.isElement(N)))
      ? (await (d.getScale == null ? void 0 : d.getScale(N))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    z = Ro(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: _,
            offsetParent: N,
            strategy: p,
          })
        : _
    );
  return {
    top: (M.top - z.top + D.top) / Y.y,
    bottom: (z.bottom - M.bottom + D.bottom) / Y.y,
    left: (M.left - z.left + D.left) / Y.x,
    right: (z.right - M.right + D.right) / Y.x,
  };
}
const OD = (n) => ({
    name: "arrow",
    options: n,
    async fn(i) {
      const {
          x: s,
          y: r,
          placement: o,
          rects: d,
          platform: f,
          elements: h,
          middlewareData: p,
        } = i,
        { element: m, padding: g = 0 } = Yn(n, i) || {};
      if (m == null) return {};
      const v = xx(g),
        x = { x: s, y: r },
        T = rh(o),
        D = lh(T),
        w = await f.getDimensions(m),
        E = T === "y",
        M = E ? "top" : "left",
        _ = E ? "bottom" : "right",
        N = E ? "clientHeight" : "clientWidth",
        Y = d.reference[D] + d.reference[T] - x[T] - d.floating[D],
        z = x[T] - d.reference[T],
        Q = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
      let Z = Q ? Q[N] : 0;
      (!Z || !(await (f.isElement == null ? void 0 : f.isElement(Q)))) &&
        (Z = h.floating[N] || d.floating[D]);
      const P = Y / 2 - z / 2,
        tt = Z / 2 - w[D] / 2 - 1,
        lt = xi(v[M], tt),
        pt = xi(v[_], tt),
        ft = lt,
        yt = Z - w[D] - pt,
        vt = Z / 2 - w[D] / 2 + P,
        ct = fd(ft, vt, yt),
        V =
          !p.arrow &&
          cs(o) != null &&
          vt !== ct &&
          d.reference[D] / 2 - (vt < ft ? lt : pt) - w[D] / 2 < 0,
        q = V ? (vt < ft ? vt - ft : vt - yt) : 0;
      return {
        [T]: x[T] + q,
        data: {
          [T]: ct,
          centerOffset: vt - ct - q,
          ...(V && { alignmentOffset: q }),
        },
        reset: V,
      };
    },
  }),
  ND = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(i) {
          var s, r;
          const {
              placement: o,
              middlewareData: d,
              rects: f,
              initialPlacement: h,
              platform: p,
              elements: m,
            } = i,
            {
              mainAxis: g = !0,
              crossAxis: v = !0,
              fallbackPlacements: x,
              fallbackStrategy: T = "bestFit",
              fallbackAxisSideDirection: D = "none",
              flipAlignment: w = !0,
              ...E
            } = Yn(n, i);
          if ((s = d.arrow) != null && s.alignmentOffset) return {};
          const M = qn(o),
            _ = Hn(h),
            N = qn(h) === h,
            Y = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            z = x || (N || !w ? [Co(h)] : ED(h)),
            Q = D !== "none";
          !x && Q && z.push(...CD(h, w, D, Y));
          const Z = [h, ...z],
            P = await Nl(i, E),
            tt = [];
          let lt = ((r = d.flip) == null ? void 0 : r.overflows) || [];
          if ((g && tt.push(P[M]), v)) {
            const ct = AD(o, f, Y);
            tt.push(P[ct[0]], P[ct[1]]);
          }
          if (
            ((lt = [...lt, { placement: o, overflows: tt }]),
            !tt.every((ct) => ct <= 0))
          ) {
            var pt, ft;
            const ct = (((pt = d.flip) == null ? void 0 : pt.index) || 0) + 1,
              V = Z[ct];
            if (V) {
              var yt;
              const U = v === "alignment" ? _ !== Hn(V) : !1,
                at = ((yt = lt[0]) == null ? void 0 : yt.overflows[0]) > 0;
              if (!U || at)
                return {
                  data: { index: ct, overflows: lt },
                  reset: { placement: V },
                };
            }
            let q =
              (ft = lt
                .filter((U) => U.overflows[0] <= 0)
                .sort((U, at) => U.overflows[1] - at.overflows[1])[0]) == null
                ? void 0
                : ft.placement;
            if (!q)
              switch (T) {
                case "bestFit": {
                  var vt;
                  const U =
                    (vt = lt
                      .filter((at) => {
                        if (Q) {
                          const R = Hn(at.placement);
                          return R === _ || R === "y";
                        }
                        return !0;
                      })
                      .map((at) => [
                        at.placement,
                        at.overflows
                          .filter((R) => R > 0)
                          .reduce((R, X) => R + X, 0),
                      ])
                      .sort((at, R) => at[1] - R[1])[0]) == null
                      ? void 0
                      : vt[0];
                  U && (q = U);
                  break;
                }
                case "initialPlacement":
                  q = h;
                  break;
              }
            if (o !== q) return { reset: { placement: q } };
          }
          return {};
        },
      }
    );
  };
function t0(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width,
  };
}
function e0(n) {
  return SD.some((i) => n[i] >= 0);
}
const _D = function (n) {
  return (
    n === void 0 && (n = {}),
    {
      name: "hide",
      options: n,
      async fn(i) {
        const { rects: s } = i,
          { strategy: r = "referenceHidden", ...o } = Yn(n, i);
        switch (r) {
          case "referenceHidden": {
            const d = await Nl(i, { ...o, elementContext: "reference" }),
              f = t0(d, s.reference);
            return {
              data: { referenceHiddenOffsets: f, referenceHidden: e0(f) },
            };
          }
          case "escaped": {
            const d = await Nl(i, { ...o, altBoundary: !0 }),
              f = t0(d, s.floating);
            return { data: { escapedOffsets: f, escaped: e0(f) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function jD(n, i) {
  const { placement: s, platform: r, elements: o } = n,
    d = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    f = qn(s),
    h = cs(s),
    p = Hn(s) === "y",
    m = ["left", "top"].includes(f) ? -1 : 1,
    g = d && p ? -1 : 1,
    v = Yn(i, n);
  let {
    mainAxis: x,
    crossAxis: T,
    alignmentAxis: D,
  } = typeof v == "number"
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    h && typeof D == "number" && (T = h === "end" ? D * -1 : D),
    p ? { x: T * g, y: x * m } : { x: x * m, y: T * g }
  );
}
const zD = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(i) {
          var s, r;
          const { x: o, y: d, placement: f, middlewareData: h } = i,
            p = await jD(i, n);
          return f === ((s = h.offset) == null ? void 0 : s.placement) &&
            (r = h.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + p.x, y: d + p.y, data: { ...p, placement: f } };
        },
      }
    );
  },
  VD = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(i) {
          const { x: s, y: r, placement: o } = i,
            {
              mainAxis: d = !0,
              crossAxis: f = !1,
              limiter: h = {
                fn: (E) => {
                  let { x: M, y: _ } = E;
                  return { x: M, y: _ };
                },
              },
              ...p
            } = Yn(n, i),
            m = { x: s, y: r },
            g = await Nl(i, p),
            v = Hn(qn(o)),
            x = sh(v);
          let T = m[x],
            D = m[v];
          if (d) {
            const E = x === "y" ? "top" : "left",
              M = x === "y" ? "bottom" : "right",
              _ = T + g[E],
              N = T - g[M];
            T = fd(_, T, N);
          }
          if (f) {
            const E = v === "y" ? "top" : "left",
              M = v === "y" ? "bottom" : "right",
              _ = D + g[E],
              N = D - g[M];
            D = fd(_, D, N);
          }
          const w = h.fn({ ...i, [x]: T, [v]: D });
          return {
            ...w,
            data: { x: w.x - s, y: w.y - r, enabled: { [x]: d, [v]: f } },
          };
        },
      }
    );
  },
  LD = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(i) {
          const { x: s, y: r, placement: o, rects: d, middlewareData: f } = i,
            { offset: h = 0, mainAxis: p = !0, crossAxis: m = !0 } = Yn(n, i),
            g = { x: s, y: r },
            v = Hn(o),
            x = sh(v);
          let T = g[x],
            D = g[v];
          const w = Yn(h, i),
            E =
              typeof w == "number"
                ? { mainAxis: w, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...w };
          if (p) {
            const N = x === "y" ? "height" : "width",
              Y = d.reference[x] - d.floating[N] + E.mainAxis,
              z = d.reference[x] + d.reference[N] - E.mainAxis;
            T < Y ? (T = Y) : T > z && (T = z);
          }
          if (m) {
            var M, _;
            const N = x === "y" ? "width" : "height",
              Y = ["top", "left"].includes(qn(o)),
              z =
                d.reference[v] -
                d.floating[N] +
                ((Y && ((M = f.offset) == null ? void 0 : M[v])) || 0) +
                (Y ? 0 : E.crossAxis),
              Q =
                d.reference[v] +
                d.reference[N] +
                (Y ? 0 : ((_ = f.offset) == null ? void 0 : _[v]) || 0) -
                (Y ? E.crossAxis : 0);
            D < z ? (D = z) : D > Q && (D = Q);
          }
          return { [x]: T, [v]: D };
        },
      }
    );
  },
  BD = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(i) {
          var s, r;
          const { placement: o, rects: d, platform: f, elements: h } = i,
            { apply: p = () => {}, ...m } = Yn(n, i),
            g = await Nl(i, m),
            v = qn(o),
            x = cs(o),
            T = Hn(o) === "y",
            { width: D, height: w } = d.floating;
          let E, M;
          v === "top" || v === "bottom"
            ? ((E = v),
              (M =
                x ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((M = v), (E = x === "end" ? "top" : "bottom"));
          const _ = w - g.top - g.bottom,
            N = D - g.left - g.right,
            Y = xi(w - g[E], _),
            z = xi(D - g[M], N),
            Q = !i.middlewareData.shift;
          let Z = Y,
            P = z;
          if (
            ((s = i.middlewareData.shift) != null && s.enabled.x && (P = N),
            (r = i.middlewareData.shift) != null && r.enabled.y && (Z = _),
            Q && !x)
          ) {
            const lt = Pe(g.left, 0),
              pt = Pe(g.right, 0),
              ft = Pe(g.top, 0),
              yt = Pe(g.bottom, 0);
            T
              ? (P =
                  D -
                  2 * (lt !== 0 || pt !== 0 ? lt + pt : Pe(g.left, g.right)))
              : (Z =
                  w -
                  2 * (ft !== 0 || yt !== 0 ? ft + yt : Pe(g.top, g.bottom)));
          }
          await p({ ...i, availableWidth: P, availableHeight: Z });
          const tt = await f.getDimensions(h.floating);
          return D !== tt.width || w !== tt.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ko() {
  return typeof window < "u";
}
function us(n) {
  return Sx(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Ye(n) {
  var i;
  return (
    (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function wn(n) {
  var i;
  return (i = (Sx(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function Sx(n) {
  return ko() ? n instanceof Node || n instanceof Ye(n).Node : !1;
}
function cn(n) {
  return ko() ? n instanceof Element || n instanceof Ye(n).Element : !1;
}
function Tn(n) {
  return ko() ? n instanceof HTMLElement || n instanceof Ye(n).HTMLElement : !1;
}
function n0(n) {
  return !ko() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof Ye(n).ShadowRoot;
}
function kl(n) {
  const { overflow: i, overflowX: s, overflowY: r, display: o } = un(n);
  return (
    /auto|scroll|overlay|hidden|clip/.test(i + r + s) &&
    !["inline", "contents"].includes(o)
  );
}
function kD(n) {
  return ["table", "td", "th"].includes(us(n));
}
function Uo(n) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return n.matches(i);
    } catch {
      return !1;
    }
  });
}
function oh(n) {
  const i = ch(),
    s = cn(n) ? un(n) : n;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      s[r] ? s[r] !== "none" : !1
    ) ||
    (s.containerType ? s.containerType !== "normal" : !1) ||
    (!i && (s.backdropFilter ? s.backdropFilter !== "none" : !1)) ||
    (!i && (s.filter ? s.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (s.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (s.contain || "").includes(r)
    )
  );
}
function UD(n) {
  let i = Si(n);
  for (; Tn(i) && !ns(i); ) {
    if (oh(i)) return i;
    if (Uo(i)) return null;
    i = Si(i);
  }
  return null;
}
function ch() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function ns(n) {
  return ["html", "body", "#document"].includes(us(n));
}
function un(n) {
  return Ye(n).getComputedStyle(n);
}
function Ho(n) {
  return cn(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Si(n) {
  if (us(n) === "html") return n;
  const i = n.assignedSlot || n.parentNode || (n0(n) && n.host) || wn(n);
  return n0(i) ? i.host : i;
}
function Tx(n) {
  const i = Si(n);
  return ns(i)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : Tn(i) && kl(i)
    ? i
    : Tx(i);
}
function _l(n, i, s) {
  var r;
  i === void 0 && (i = []), s === void 0 && (s = !0);
  const o = Tx(n),
    d = o === ((r = n.ownerDocument) == null ? void 0 : r.body),
    f = Ye(o);
  if (d) {
    const h = hd(f);
    return i.concat(
      f,
      f.visualViewport || [],
      kl(o) ? o : [],
      h && s ? _l(h) : []
    );
  }
  return i.concat(o, _l(o, [], s));
}
function hd(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function wx(n) {
  const i = un(n);
  let s = parseFloat(i.width) || 0,
    r = parseFloat(i.height) || 0;
  const o = Tn(n),
    d = o ? n.offsetWidth : s,
    f = o ? n.offsetHeight : r,
    h = Mo(s) !== d || Mo(r) !== f;
  return h && ((s = d), (r = f)), { width: s, height: r, $: h };
}
function uh(n) {
  return cn(n) ? n : n.contextElement;
}
function Ja(n) {
  const i = uh(n);
  if (!Tn(i)) return xn(1);
  const s = i.getBoundingClientRect(),
    { width: r, height: o, $: d } = wx(i);
  let f = (d ? Mo(s.width) : s.width) / r,
    h = (d ? Mo(s.height) : s.height) / o;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: f, y: h }
  );
}
const HD = xn(0);
function Ax(n) {
  const i = Ye(n);
  return !ch() || !i.visualViewport
    ? HD
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function PD(n, i, s) {
  return i === void 0 && (i = !1), !s || (i && s !== Ye(n)) ? !1 : i;
}
function ta(n, i, s, r) {
  i === void 0 && (i = !1), s === void 0 && (s = !1);
  const o = n.getBoundingClientRect(),
    d = uh(n);
  let f = xn(1);
  i && (r ? cn(r) && (f = Ja(r)) : (f = Ja(n)));
  const h = PD(d, s, r) ? Ax(d) : xn(0);
  let p = (o.left + h.x) / f.x,
    m = (o.top + h.y) / f.y,
    g = o.width / f.x,
    v = o.height / f.y;
  if (d) {
    const x = Ye(d),
      T = r && cn(r) ? Ye(r) : r;
    let D = x,
      w = hd(D);
    for (; w && r && T !== D; ) {
      const E = Ja(w),
        M = w.getBoundingClientRect(),
        _ = un(w),
        N = M.left + (w.clientLeft + parseFloat(_.paddingLeft)) * E.x,
        Y = M.top + (w.clientTop + parseFloat(_.paddingTop)) * E.y;
      (p *= E.x),
        (m *= E.y),
        (g *= E.x),
        (v *= E.y),
        (p += N),
        (m += Y),
        (D = Ye(w)),
        (w = hd(D));
    }
  }
  return Ro({ width: g, height: v, x: p, y: m });
}
function fh(n, i) {
  const s = Ho(n).scrollLeft;
  return i ? i.left + s : ta(wn(n)).left + s;
}
function Ex(n, i, s) {
  s === void 0 && (s = !1);
  const r = n.getBoundingClientRect(),
    o = r.left + i.scrollLeft - (s ? 0 : fh(n, r)),
    d = r.top + i.scrollTop;
  return { x: o, y: d };
}
function YD(n) {
  let { elements: i, rect: s, offsetParent: r, strategy: o } = n;
  const d = o === "fixed",
    f = wn(r),
    h = i ? Uo(i.floating) : !1;
  if (r === f || (h && d)) return s;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = xn(1);
  const g = xn(0),
    v = Tn(r);
  if (
    (v || (!v && !d)) &&
    ((us(r) !== "body" || kl(f)) && (p = Ho(r)), Tn(r))
  ) {
    const T = ta(r);
    (m = Ja(r)), (g.x = T.x + r.clientLeft), (g.y = T.y + r.clientTop);
  }
  const x = f && !v && !d ? Ex(f, p, !0) : xn(0);
  return {
    width: s.width * m.x,
    height: s.height * m.y,
    x: s.x * m.x - p.scrollLeft * m.x + g.x + x.x,
    y: s.y * m.y - p.scrollTop * m.y + g.y + x.y,
  };
}
function qD(n) {
  return Array.from(n.getClientRects());
}
function GD(n) {
  const i = wn(n),
    s = Ho(n),
    r = n.ownerDocument.body,
    o = Pe(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth),
    d = Pe(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let f = -s.scrollLeft + fh(n);
  const h = -s.scrollTop;
  return (
    un(r).direction === "rtl" && (f += Pe(i.clientWidth, r.clientWidth) - o),
    { width: o, height: d, x: f, y: h }
  );
}
function XD(n, i) {
  const s = Ye(n),
    r = wn(n),
    o = s.visualViewport;
  let d = r.clientWidth,
    f = r.clientHeight,
    h = 0,
    p = 0;
  if (o) {
    (d = o.width), (f = o.height);
    const m = ch();
    (!m || (m && i === "fixed")) && ((h = o.offsetLeft), (p = o.offsetTop));
  }
  return { width: d, height: f, x: h, y: p };
}
function KD(n, i) {
  const s = ta(n, !0, i === "fixed"),
    r = s.top + n.clientTop,
    o = s.left + n.clientLeft,
    d = Tn(n) ? Ja(n) : xn(1),
    f = n.clientWidth * d.x,
    h = n.clientHeight * d.y,
    p = o * d.x,
    m = r * d.y;
  return { width: f, height: h, x: p, y: m };
}
function i0(n, i, s) {
  let r;
  if (i === "viewport") r = XD(n, s);
  else if (i === "document") r = GD(wn(n));
  else if (cn(i)) r = KD(i, s);
  else {
    const o = Ax(n);
    r = { x: i.x - o.x, y: i.y - o.y, width: i.width, height: i.height };
  }
  return Ro(r);
}
function Mx(n, i) {
  const s = Si(n);
  return s === i || !cn(s) || ns(s)
    ? !1
    : un(s).position === "fixed" || Mx(s, i);
}
function ZD(n, i) {
  const s = i.get(n);
  if (s) return s;
  let r = _l(n, [], !1).filter((h) => cn(h) && us(h) !== "body"),
    o = null;
  const d = un(n).position === "fixed";
  let f = d ? Si(n) : n;
  for (; cn(f) && !ns(f); ) {
    const h = un(f),
      p = oh(f);
    !p && h.position === "fixed" && (o = null),
      (
        d
          ? !p && !o
          : (!p &&
              h.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (kl(f) && !p && Mx(n, f))
      )
        ? (r = r.filter((g) => g !== f))
        : (o = h),
      (f = Si(f));
  }
  return i.set(n, r), r;
}
function QD(n) {
  let { element: i, boundary: s, rootBoundary: r, strategy: o } = n;
  const f = [
      ...(s === "clippingAncestors"
        ? Uo(i)
          ? []
          : ZD(i, this._c)
        : [].concat(s)),
      r,
    ],
    h = f[0],
    p = f.reduce((m, g) => {
      const v = i0(i, g, o);
      return (
        (m.top = Pe(v.top, m.top)),
        (m.right = xi(v.right, m.right)),
        (m.bottom = xi(v.bottom, m.bottom)),
        (m.left = Pe(v.left, m.left)),
        m
      );
    }, i0(i, h, o));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top,
  };
}
function FD(n) {
  const { width: i, height: s } = wx(n);
  return { width: i, height: s };
}
function WD(n, i, s) {
  const r = Tn(i),
    o = wn(i),
    d = s === "fixed",
    f = ta(n, !0, d, i);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const p = xn(0);
  function m() {
    p.x = fh(o);
  }
  if (r || (!r && !d))
    if (((us(i) !== "body" || kl(o)) && (h = Ho(i)), r)) {
      const T = ta(i, !0, d, i);
      (p.x = T.x + i.clientLeft), (p.y = T.y + i.clientTop);
    } else o && m();
  d && !r && o && m();
  const g = o && !r && !d ? Ex(o, h) : xn(0),
    v = f.left + h.scrollLeft - p.x - g.x,
    x = f.top + h.scrollTop - p.y - g.y;
  return { x: v, y: x, width: f.width, height: f.height };
}
function Df(n) {
  return un(n).position === "static";
}
function a0(n, i) {
  if (!Tn(n) || un(n).position === "fixed") return null;
  if (i) return i(n);
  let s = n.offsetParent;
  return wn(n) === s && (s = s.ownerDocument.body), s;
}
function Cx(n, i) {
  const s = Ye(n);
  if (Uo(n)) return s;
  if (!Tn(n)) {
    let o = Si(n);
    for (; o && !ns(o); ) {
      if (cn(o) && !Df(o)) return o;
      o = Si(o);
    }
    return s;
  }
  let r = a0(n, i);
  for (; r && kD(r) && Df(r); ) r = a0(r, i);
  return r && ns(r) && Df(r) && !oh(r) ? s : r || UD(n) || s;
}
const $D = async function (n) {
  const i = this.getOffsetParent || Cx,
    s = this.getDimensions,
    r = await s(n.floating);
  return {
    reference: WD(n.reference, await i(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function JD(n) {
  return un(n).direction === "rtl";
}
const ID = {
  convertOffsetParentRelativeRectToViewportRelativeRect: YD,
  getDocumentElement: wn,
  getClippingRect: QD,
  getOffsetParent: Cx,
  getElementRects: $D,
  getClientRects: qD,
  getDimensions: FD,
  getScale: Ja,
  isElement: cn,
  isRTL: JD,
};
function Rx(n, i) {
  return (
    n.x === i.x && n.y === i.y && n.width === i.width && n.height === i.height
  );
}
function tO(n, i) {
  let s = null,
    r;
  const o = wn(n);
  function d() {
    var h;
    clearTimeout(r), (h = s) == null || h.disconnect(), (s = null);
  }
  function f(h, p) {
    h === void 0 && (h = !1), p === void 0 && (p = 1), d();
    const m = n.getBoundingClientRect(),
      { left: g, top: v, width: x, height: T } = m;
    if ((h || i(), !x || !T)) return;
    const D = lo(v),
      w = lo(o.clientWidth - (g + x)),
      E = lo(o.clientHeight - (v + T)),
      M = lo(g),
      N = {
        rootMargin: -D + "px " + -w + "px " + -E + "px " + -M + "px",
        threshold: Pe(0, xi(1, p)) || 1,
      };
    let Y = !0;
    function z(Q) {
      const Z = Q[0].intersectionRatio;
      if (Z !== p) {
        if (!Y) return f();
        Z
          ? f(!1, Z)
          : (r = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      Z === 1 && !Rx(m, n.getBoundingClientRect()) && f(), (Y = !1);
    }
    try {
      s = new IntersectionObserver(z, { ...N, root: o.ownerDocument });
    } catch {
      s = new IntersectionObserver(z, N);
    }
    s.observe(n);
  }
  return f(!0), d;
}
function eO(n, i, s, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: d = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = r,
    m = uh(n),
    g = o || d ? [...(m ? _l(m) : []), ..._l(i)] : [];
  g.forEach((M) => {
    o && M.addEventListener("scroll", s, { passive: !0 }),
      d && M.addEventListener("resize", s);
  });
  const v = m && h ? tO(m, s) : null;
  let x = -1,
    T = null;
  f &&
    ((T = new ResizeObserver((M) => {
      let [_] = M;
      _ &&
        _.target === m &&
        T &&
        (T.unobserve(i),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var N;
          (N = T) == null || N.observe(i);
        }))),
        s();
    })),
    m && !p && T.observe(m),
    T.observe(i));
  let D,
    w = p ? ta(n) : null;
  p && E();
  function E() {
    const M = ta(n);
    w && !Rx(w, M) && s(), (w = M), (D = requestAnimationFrame(E));
  }
  return (
    s(),
    () => {
      var M;
      g.forEach((_) => {
        o && _.removeEventListener("scroll", s),
          d && _.removeEventListener("resize", s);
      }),
        v == null || v(),
        (M = T) == null || M.disconnect(),
        (T = null),
        p && cancelAnimationFrame(D);
    }
  );
}
const nO = zD,
  iO = VD,
  aO = ND,
  sO = BD,
  lO = _D,
  s0 = OD,
  rO = LD,
  oO = (n, i, s) => {
    const r = new Map(),
      o = { platform: ID, ...s },
      d = { ...o.platform, _c: r };
    return DD(n, i, { ...o, platform: d });
  };
var vo = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function Do(n, i) {
  if (n === i) return !0;
  if (typeof n != typeof i) return !1;
  if (typeof n == "function" && n.toString() === i.toString()) return !0;
  let s, r, o;
  if (n && i && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((s = n.length), s !== i.length)) return !1;
      for (r = s; r-- !== 0; ) if (!Do(n[r], i[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(n)), (s = o.length), s !== Object.keys(i).length))
      return !1;
    for (r = s; r-- !== 0; ) if (!{}.hasOwnProperty.call(i, o[r])) return !1;
    for (r = s; r-- !== 0; ) {
      const d = o[r];
      if (!(d === "_owner" && n.$$typeof) && !Do(n[d], i[d])) return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
}
function Dx(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function l0(n, i) {
  const s = Dx(n);
  return Math.round(i * s) / s;
}
function Of(n) {
  const i = S.useRef(n);
  return (
    vo(() => {
      i.current = n;
    }),
    i
  );
}
function cO(n) {
  n === void 0 && (n = {});
  const {
      placement: i = "bottom",
      strategy: s = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: d, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: p,
      open: m,
    } = n,
    [g, v] = S.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, T] = S.useState(r);
  Do(x, r) || T(r);
  const [D, w] = S.useState(null),
    [E, M] = S.useState(null),
    _ = S.useCallback((U) => {
      U !== Q.current && ((Q.current = U), w(U));
    }, []),
    N = S.useCallback((U) => {
      U !== Z.current && ((Z.current = U), M(U));
    }, []),
    Y = d || D,
    z = f || E,
    Q = S.useRef(null),
    Z = S.useRef(null),
    P = S.useRef(g),
    tt = p != null,
    lt = Of(p),
    pt = Of(o),
    ft = Of(m),
    yt = S.useCallback(() => {
      if (!Q.current || !Z.current) return;
      const U = { placement: i, strategy: s, middleware: x };
      pt.current && (U.platform = pt.current),
        oO(Q.current, Z.current, U).then((at) => {
          const R = { ...at, isPositioned: ft.current !== !1 };
          vt.current &&
            !Do(P.current, R) &&
            ((P.current = R),
            Bl.flushSync(() => {
              v(R);
            }));
        });
    }, [x, i, s, pt, ft]);
  vo(() => {
    m === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), v((U) => ({ ...U, isPositioned: !1 })));
  }, [m]);
  const vt = S.useRef(!1);
  vo(
    () => (
      (vt.current = !0),
      () => {
        vt.current = !1;
      }
    ),
    []
  ),
    vo(() => {
      if ((Y && (Q.current = Y), z && (Z.current = z), Y && z)) {
        if (lt.current) return lt.current(Y, z, yt);
        yt();
      }
    }, [Y, z, yt, lt, tt]);
  const ct = S.useMemo(
      () => ({ reference: Q, floating: Z, setReference: _, setFloating: N }),
      [_, N]
    ),
    V = S.useMemo(() => ({ reference: Y, floating: z }), [Y, z]),
    q = S.useMemo(() => {
      const U = { position: s, left: 0, top: 0 };
      if (!V.floating) return U;
      const at = l0(V.floating, g.x),
        R = l0(V.floating, g.y);
      return h
        ? {
            ...U,
            transform: "translate(" + at + "px, " + R + "px)",
            ...(Dx(V.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: at, top: R };
    }, [s, h, V.floating, g.x, g.y]);
  return S.useMemo(
    () => ({ ...g, update: yt, refs: ct, elements: V, floatingStyles: q }),
    [g, yt, ct, V, q]
  );
}
const uO = (n) => {
    function i(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(s) {
        const { element: r, padding: o } = typeof n == "function" ? n(s) : n;
        return r && i(r)
          ? r.current != null
            ? s0({ element: r.current, padding: o }).fn(s)
            : {}
          : r
          ? s0({ element: r, padding: o }).fn(s)
          : {};
      },
    };
  },
  fO = (n, i) => ({ ...nO(n), options: [n, i] }),
  dO = (n, i) => ({ ...iO(n), options: [n, i] }),
  hO = (n, i) => ({ ...rO(n), options: [n, i] }),
  mO = (n, i) => ({ ...aO(n), options: [n, i] }),
  pO = (n, i) => ({ ...sO(n), options: [n, i] }),
  gO = (n, i) => ({ ...lO(n), options: [n, i] }),
  yO = (n, i) => ({ ...uO(n), options: [n, i] });
var vO = "Arrow",
  Ox = S.forwardRef((n, i) => {
    const { children: s, width: r = 10, height: o = 5, ...d } = n;
    return A.jsx(Zt.svg, {
      ...d,
      ref: i,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? s : A.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ox.displayName = vO;
var bO = Ox;
function xO(n) {
  const [i, s] = S.useState(void 0);
  return (
    Oe(() => {
      if (n) {
        s({ width: n.offsetWidth, height: n.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const d = o[0];
          let f, h;
          if ("borderBoxSize" in d) {
            const p = d.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            (f = m.inlineSize), (h = m.blockSize);
          } else (f = n.offsetWidth), (h = n.offsetHeight);
          s({ width: f, height: h });
        });
        return r.observe(n, { box: "border-box" }), () => r.unobserve(n);
      } else s(void 0);
    }, [n]),
    i
  );
}
var dh = "Popper",
  [Nx, _x] = ih(dh),
  [SO, jx] = Nx(dh),
  zx = (n) => {
    const { __scopePopper: i, children: s } = n,
      [r, o] = S.useState(null);
    return A.jsx(SO, { scope: i, anchor: r, onAnchorChange: o, children: s });
  };
zx.displayName = dh;
var Vx = "PopperAnchor",
  Lx = S.forwardRef((n, i) => {
    const { __scopePopper: s, virtualRef: r, ...o } = n,
      d = jx(Vx, s),
      f = S.useRef(null),
      h = oe(i, f);
    return (
      S.useEffect(() => {
        d.onAnchorChange((r == null ? void 0 : r.current) || f.current);
      }),
      r ? null : A.jsx(Zt.div, { ...o, ref: h })
    );
  });
Lx.displayName = Vx;
var hh = "PopperContent",
  [TO, wO] = Nx(hh),
  Bx = S.forwardRef((n, i) => {
    var J, ot, Nt, Ct, wt, At;
    const {
        __scopePopper: s,
        side: r = "bottom",
        sideOffset: o = 0,
        align: d = "center",
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: g = 0,
        sticky: v = "partial",
        hideWhenDetached: x = !1,
        updatePositionStrategy: T = "optimized",
        onPlaced: D,
        ...w
      } = n,
      E = jx(hh, s),
      [M, _] = S.useState(null),
      N = oe(i, (ce) => _(ce)),
      [Y, z] = S.useState(null),
      Q = xO(Y),
      Z = (Q == null ? void 0 : Q.width) ?? 0,
      P = (Q == null ? void 0 : Q.height) ?? 0,
      tt = r + (d !== "center" ? "-" + d : ""),
      lt =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      pt = Array.isArray(m) ? m : [m],
      ft = pt.length > 0,
      yt = { padding: lt, boundary: pt.filter(EO), altBoundary: ft },
      {
        refs: vt,
        floatingStyles: ct,
        placement: V,
        isPositioned: q,
        middlewareData: U,
      } = cO({
        strategy: "fixed",
        placement: tt,
        whileElementsMounted: (...ce) =>
          eO(...ce, { animationFrame: T === "always" }),
        elements: { reference: E.anchor },
        middleware: [
          fO({ mainAxis: o + P, alignmentAxis: f }),
          p &&
            dO({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? hO() : void 0,
              ...yt,
            }),
          p && mO({ ...yt }),
          pO({
            ...yt,
            apply: ({
              elements: ce,
              rects: Te,
              availableWidth: Ei,
              availableHeight: Mi,
            }) => {
              const { width: he, height: Xo } = Te.reference,
                Ci = ce.floating.style;
              Ci.setProperty("--radix-popper-available-width", `${Ei}px`),
                Ci.setProperty("--radix-popper-available-height", `${Mi}px`),
                Ci.setProperty("--radix-popper-anchor-width", `${he}px`),
                Ci.setProperty("--radix-popper-anchor-height", `${Xo}px`);
            },
          }),
          Y && yO({ element: Y, padding: h }),
          MO({ arrowWidth: Z, arrowHeight: P }),
          x && gO({ strategy: "referenceHidden", ...yt }),
        ],
      }),
      [at, R] = Hx(V),
      X = Ii(D);
    Oe(() => {
      q && (X == null || X());
    }, [q, X]);
    const $ = (J = U.arrow) == null ? void 0 : J.x,
      W = (ot = U.arrow) == null ? void 0 : ot.y,
      I = ((Nt = U.arrow) == null ? void 0 : Nt.centerOffset) !== 0,
      [gt, rt] = S.useState();
    return (
      Oe(() => {
        M && rt(window.getComputedStyle(M).zIndex);
      }, [M]),
      A.jsx("div", {
        ref: vt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ct,
          transform: q ? ct.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: gt,
          "--radix-popper-transform-origin": [
            (Ct = U.transformOrigin) == null ? void 0 : Ct.x,
            (wt = U.transformOrigin) == null ? void 0 : wt.y,
          ].join(" "),
          ...(((At = U.hide) == null ? void 0 : At.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: n.dir,
        children: A.jsx(TO, {
          scope: s,
          placedSide: at,
          onArrowChange: z,
          arrowX: $,
          arrowY: W,
          shouldHideArrow: I,
          children: A.jsx(Zt.div, {
            "data-side": at,
            "data-align": R,
            ...w,
            ref: N,
            style: { ...w.style, animation: q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Bx.displayName = hh;
var kx = "PopperArrow",
  AO = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ux = S.forwardRef(function (i, s) {
    const { __scopePopper: r, ...o } = i,
      d = wO(kx, r),
      f = AO[d.placedSide];
    return A.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: A.jsx(bO, {
        ...o,
        ref: s,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Ux.displayName = kx;
function EO(n) {
  return n !== null;
}
var MO = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    var E, M, _;
    const { placement: s, rects: r, middlewareData: o } = i,
      f = ((E = o.arrow) == null ? void 0 : E.centerOffset) !== 0,
      h = f ? 0 : n.arrowWidth,
      p = f ? 0 : n.arrowHeight,
      [m, g] = Hx(s),
      v = { start: "0%", center: "50%", end: "100%" }[g],
      x = (((M = o.arrow) == null ? void 0 : M.x) ?? 0) + h / 2,
      T = (((_ = o.arrow) == null ? void 0 : _.y) ?? 0) + p / 2;
    let D = "",
      w = "";
    return (
      m === "bottom"
        ? ((D = f ? v : `${x}px`), (w = `${-p}px`))
        : m === "top"
        ? ((D = f ? v : `${x}px`), (w = `${r.floating.height + p}px`))
        : m === "right"
        ? ((D = `${-p}px`), (w = f ? v : `${T}px`))
        : m === "left" &&
          ((D = `${r.floating.width + p}px`), (w = f ? v : `${T}px`)),
      { data: { x: D, y: w } }
    );
  },
});
function Hx(n) {
  const [i, s = "center"] = n.split("-");
  return [i, s];
}
var CO = zx,
  RO = Lx,
  DO = Bx,
  OO = Ux,
  NO = "Portal",
  Px = S.forwardRef((n, i) => {
    var h;
    const { container: s, ...r } = n,
      [o, d] = S.useState(!1);
    Oe(() => d(!0), []);
    const f =
      s ||
      (o &&
        ((h = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : h.body));
    return f ? QR.createPortal(A.jsx(Zt.div, { ...r, ref: i }), f) : null;
  });
Px.displayName = NO;
var _O = g0[" useInsertionEffect ".trim().toString()] || Oe;
function r0({ prop: n, defaultProp: i, onChange: s = () => {}, caller: r }) {
  const [o, d, f] = jO({ defaultProp: i, onChange: s }),
    h = n !== void 0,
    p = h ? n : o;
  {
    const g = S.useRef(n !== void 0);
    S.useEffect(() => {
      const v = g.current;
      v !== h &&
        console.warn(
          `${r} is changing from ${v ? "controlled" : "uncontrolled"} to ${
            h ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (g.current = h);
    }, [h, r]);
  }
  const m = S.useCallback(
    (g) => {
      var v;
      if (h) {
        const x = zO(g) ? g(n) : g;
        x !== n && ((v = f.current) == null || v.call(f, x));
      } else d(g);
    },
    [h, n, d, f]
  );
  return [p, m];
}
function jO({ defaultProp: n, onChange: i }) {
  const [s, r] = S.useState(n),
    o = S.useRef(s),
    d = S.useRef(i);
  return (
    _O(() => {
      d.current = i;
    }, [i]),
    S.useEffect(() => {
      var f;
      o.current !== s &&
        ((f = d.current) == null || f.call(d, s), (o.current = s));
    }, [s, o]),
    [s, r, d]
  );
}
function zO(n) {
  return typeof n == "function";
}
function VO(n) {
  const i = S.useRef({ value: n, previous: n });
  return S.useMemo(
    () => (
      i.current.value !== n &&
        ((i.current.previous = i.current.value), (i.current.value = n)),
      i.current.previous
    ),
    [n]
  );
}
var Yx = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  LO = "VisuallyHidden",
  BO = S.forwardRef((n, i) =>
    A.jsx(Zt.span, { ...n, ref: i, style: { ...Yx, ...n.style } })
  );
BO.displayName = LO;
var kO = function (n) {
    if (typeof document > "u") return null;
    var i = Array.isArray(n) ? n[0] : n;
    return i.ownerDocument.body;
  },
  qa = new WeakMap(),
  ro = new WeakMap(),
  oo = {},
  Nf = 0,
  qx = function (n) {
    return n && (n.host || qx(n.parentNode));
  },
  UO = function (n, i) {
    return i
      .map(function (s) {
        if (n.contains(s)) return s;
        var r = qx(s);
        return r && n.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              s,
              "in not contained inside",
              n,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  HO = function (n, i, s, r) {
    var o = UO(i, Array.isArray(n) ? n : [n]);
    oo[s] || (oo[s] = new WeakMap());
    var d = oo[s],
      f = [],
      h = new Set(),
      p = new Set(o),
      m = function (v) {
        !v || h.has(v) || (h.add(v), m(v.parentNode));
      };
    o.forEach(m);
    var g = function (v) {
      !v ||
        p.has(v) ||
        Array.prototype.forEach.call(v.children, function (x) {
          if (h.has(x)) g(x);
          else
            try {
              var T = x.getAttribute(r),
                D = T !== null && T !== "false",
                w = (qa.get(x) || 0) + 1,
                E = (d.get(x) || 0) + 1;
              qa.set(x, w),
                d.set(x, E),
                f.push(x),
                w === 1 && D && ro.set(x, !0),
                E === 1 && x.setAttribute(s, "true"),
                D || x.setAttribute(r, "true");
            } catch (M) {
              console.error("aria-hidden: cannot operate on ", x, M);
            }
        });
    };
    return (
      g(i),
      h.clear(),
      Nf++,
      function () {
        f.forEach(function (v) {
          var x = qa.get(v) - 1,
            T = d.get(v) - 1;
          qa.set(v, x),
            d.set(v, T),
            x || (ro.has(v) || v.removeAttribute(r), ro.delete(v)),
            T || v.removeAttribute(s);
        }),
          Nf--,
          Nf ||
            ((qa = new WeakMap()),
            (qa = new WeakMap()),
            (ro = new WeakMap()),
            (oo = {}));
      }
    );
  },
  PO = function (n, i, s) {
    s === void 0 && (s = "data-aria-hidden");
    var r = Array.from(Array.isArray(n) ? n : [n]),
      o = kO(n);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        HO(r, o, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  gn = function () {
    return (
      (gn =
        Object.assign ||
        function (i) {
          for (var s, r = 1, o = arguments.length; r < o; r++) {
            s = arguments[r];
            for (var d in s)
              Object.prototype.hasOwnProperty.call(s, d) && (i[d] = s[d]);
          }
          return i;
        }),
      gn.apply(this, arguments)
    );
  };
function Gx(n, i) {
  var s = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) &&
      i.indexOf(r) < 0 &&
      (s[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
      i.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, r[o]) &&
        (s[r[o]] = n[r[o]]);
  return s;
}
function YO(n, i, s) {
  if (s || arguments.length === 2)
    for (var r = 0, o = i.length, d; r < o; r++)
      (d || !(r in i)) &&
        (d || (d = Array.prototype.slice.call(i, 0, r)), (d[r] = i[r]));
  return n.concat(d || Array.prototype.slice.call(i));
}
var bo = "right-scroll-bar-position",
  xo = "width-before-scroll-bar",
  qO = "with-scroll-bars-hidden",
  GO = "--removed-body-scroll-bar-size";
function _f(n, i) {
  return typeof n == "function" ? n(i) : n && (n.current = i), n;
}
function XO(n, i) {
  var s = S.useState(function () {
    return {
      value: n,
      callback: i,
      facade: {
        get current() {
          return s.value;
        },
        set current(r) {
          var o = s.value;
          o !== r && ((s.value = r), s.callback(r, o));
        },
      },
    };
  })[0];
  return (s.callback = i), s.facade;
}
var KO = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  o0 = new WeakMap();
function ZO(n, i) {
  var s = XO(null, function (r) {
    return n.forEach(function (o) {
      return _f(o, r);
    });
  });
  return (
    KO(
      function () {
        var r = o0.get(s);
        if (r) {
          var o = new Set(r),
            d = new Set(n),
            f = s.current;
          o.forEach(function (h) {
            d.has(h) || _f(h, null);
          }),
            d.forEach(function (h) {
              o.has(h) || _f(h, f);
            });
        }
        o0.set(s, n);
      },
      [n]
    ),
    s
  );
}
function QO(n) {
  return n;
}
function FO(n, i) {
  i === void 0 && (i = QO);
  var s = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return s.length ? s[s.length - 1] : n;
      },
      useMedium: function (d) {
        var f = i(d, r);
        return (
          s.push(f),
          function () {
            s = s.filter(function (h) {
              return h !== f;
            });
          }
        );
      },
      assignSyncMedium: function (d) {
        for (r = !0; s.length; ) {
          var f = s;
          (s = []), f.forEach(d);
        }
        s = {
          push: function (h) {
            return d(h);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (d) {
        r = !0;
        var f = [];
        if (s.length) {
          var h = s;
          (s = []), h.forEach(d), (f = s);
        }
        var p = function () {
            var g = f;
            (f = []), g.forEach(d);
          },
          m = function () {
            return Promise.resolve().then(p);
          };
        m(),
          (s = {
            push: function (g) {
              f.push(g), m();
            },
            filter: function (g) {
              return (f = f.filter(g)), s;
            },
          });
      },
    };
  return o;
}
function WO(n) {
  n === void 0 && (n = {});
  var i = FO(null);
  return (i.options = gn({ async: !0, ssr: !1 }, n)), i;
}
var Xx = function (n) {
  var i = n.sideCar,
    s = Gx(n, ["sideCar"]);
  if (!i)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = i.read();
  if (!r) throw new Error("Sidecar medium not found");
  return S.createElement(r, gn({}, s));
};
Xx.isSideCarExport = !0;
function $O(n, i) {
  return n.useMedium(i), Xx;
}
var Kx = WO(),
  jf = function () {},
  Po = S.forwardRef(function (n, i) {
    var s = S.useRef(null),
      r = S.useState({
        onScrollCapture: jf,
        onWheelCapture: jf,
        onTouchMoveCapture: jf,
      }),
      o = r[0],
      d = r[1],
      f = n.forwardProps,
      h = n.children,
      p = n.className,
      m = n.removeScrollBar,
      g = n.enabled,
      v = n.shards,
      x = n.sideCar,
      T = n.noIsolation,
      D = n.inert,
      w = n.allowPinchZoom,
      E = n.as,
      M = E === void 0 ? "div" : E,
      _ = n.gapMode,
      N = Gx(n, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      Y = x,
      z = ZO([s, i]),
      Q = gn(gn({}, N), o);
    return S.createElement(
      S.Fragment,
      null,
      g &&
        S.createElement(Y, {
          sideCar: Kx,
          removeScrollBar: m,
          shards: v,
          noIsolation: T,
          inert: D,
          setCallbacks: d,
          allowPinchZoom: !!w,
          lockRef: s,
          gapMode: _,
        }),
      f
        ? S.cloneElement(S.Children.only(h), gn(gn({}, Q), { ref: z }))
        : S.createElement(M, gn({}, Q, { className: p, ref: z }), h)
    );
  });
Po.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Po.classNames = { fullWidth: xo, zeroRight: bo };
var JO = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function IO() {
  if (!document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var i = JO();
  return i && n.setAttribute("nonce", i), n;
}
function tN(n, i) {
  n.styleSheet
    ? (n.styleSheet.cssText = i)
    : n.appendChild(document.createTextNode(i));
}
function eN(n) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(n);
}
var nN = function () {
    var n = 0,
      i = null;
    return {
      add: function (s) {
        n == 0 && (i = IO()) && (tN(i, s), eN(i)), n++;
      },
      remove: function () {
        n--,
          !n && i && (i.parentNode && i.parentNode.removeChild(i), (i = null));
      },
    };
  },
  iN = function () {
    var n = nN();
    return function (i, s) {
      S.useEffect(
        function () {
          return (
            n.add(i),
            function () {
              n.remove();
            }
          );
        },
        [i && s]
      );
    };
  },
  Zx = function () {
    var n = iN(),
      i = function (s) {
        var r = s.styles,
          o = s.dynamic;
        return n(r, o), null;
      };
    return i;
  },
  aN = { left: 0, top: 0, right: 0, gap: 0 },
  zf = function (n) {
    return parseInt(n || "", 10) || 0;
  },
  sN = function (n) {
    var i = window.getComputedStyle(document.body),
      s = i[n === "padding" ? "paddingLeft" : "marginLeft"],
      r = i[n === "padding" ? "paddingTop" : "marginTop"],
      o = i[n === "padding" ? "paddingRight" : "marginRight"];
    return [zf(s), zf(r), zf(o)];
  },
  lN = function (n) {
    if ((n === void 0 && (n = "margin"), typeof window > "u")) return aN;
    var i = sN(n),
      s = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: i[0],
      top: i[1],
      right: i[2],
      gap: Math.max(0, r - s + i[2] - i[0]),
    };
  },
  rN = Zx(),
  Ia = "data-scroll-locked",
  oN = function (n, i, s, r) {
    var o = n.left,
      d = n.top,
      f = n.right,
      h = n.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          qO,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Ia,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            i && "position: relative ".concat(r, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  d,
                  `px;
    padding-right: `
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(h, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            s === "padding" &&
              "padding-right: ".concat(h, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          bo,
          ` {
    right: `
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          xo,
          ` {
    margin-right: `
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(bo, " .")
        .concat(
          bo,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(xo, " .")
        .concat(
          xo,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Ia,
          `] {
    `
        )
        .concat(GO, ": ")
        .concat(
          h,
          `px;
  }
`
        )
    );
  },
  c0 = function () {
    var n = parseInt(document.body.getAttribute(Ia) || "0", 10);
    return isFinite(n) ? n : 0;
  },
  cN = function () {
    S.useEffect(function () {
      return (
        document.body.setAttribute(Ia, (c0() + 1).toString()),
        function () {
          var n = c0() - 1;
          n <= 0
            ? document.body.removeAttribute(Ia)
            : document.body.setAttribute(Ia, n.toString());
        }
      );
    }, []);
  },
  uN = function (n) {
    var i = n.noRelative,
      s = n.noImportant,
      r = n.gapMode,
      o = r === void 0 ? "margin" : r;
    cN();
    var d = S.useMemo(
      function () {
        return lN(o);
      },
      [o]
    );
    return S.createElement(rN, { styles: oN(d, !i, o, s ? "" : "!important") });
  },
  md = !1;
if (typeof window < "u")
  try {
    var co = Object.defineProperty({}, "passive", {
      get: function () {
        return (md = !0), !0;
      },
    });
    window.addEventListener("test", co, co),
      window.removeEventListener("test", co, co);
  } catch {
    md = !1;
  }
var Ga = md ? { passive: !1 } : !1,
  fN = function (n) {
    return n.tagName === "TEXTAREA";
  },
  Qx = function (n, i) {
    if (!(n instanceof Element)) return !1;
    var s = window.getComputedStyle(n);
    return (
      s[i] !== "hidden" &&
      !(s.overflowY === s.overflowX && !fN(n) && s[i] === "visible")
    );
  },
  dN = function (n) {
    return Qx(n, "overflowY");
  },
  hN = function (n) {
    return Qx(n, "overflowX");
  },
  u0 = function (n, i) {
    var s = i.ownerDocument,
      r = i;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Fx(n, r);
      if (o) {
        var d = Wx(n, r),
          f = d[1],
          h = d[2];
        if (f > h) return !0;
      }
      r = r.parentNode;
    } while (r && r !== s.body);
    return !1;
  },
  mN = function (n) {
    var i = n.scrollTop,
      s = n.scrollHeight,
      r = n.clientHeight;
    return [i, s, r];
  },
  pN = function (n) {
    var i = n.scrollLeft,
      s = n.scrollWidth,
      r = n.clientWidth;
    return [i, s, r];
  },
  Fx = function (n, i) {
    return n === "v" ? dN(i) : hN(i);
  },
  Wx = function (n, i) {
    return n === "v" ? mN(i) : pN(i);
  },
  gN = function (n, i) {
    return n === "h" && i === "rtl" ? -1 : 1;
  },
  yN = function (n, i, s, r, o) {
    var d = gN(n, window.getComputedStyle(i).direction),
      f = d * r,
      h = s.target,
      p = i.contains(h),
      m = !1,
      g = f > 0,
      v = 0,
      x = 0;
    do {
      var T = Wx(n, h),
        D = T[0],
        w = T[1],
        E = T[2],
        M = w - E - d * D;
      (D || M) && Fx(n, h) && ((v += M), (x += D)),
        h instanceof ShadowRoot ? (h = h.host) : (h = h.parentNode);
    } while ((!p && h !== document.body) || (p && (i.contains(h) || i === h)));
    return ((g && Math.abs(v) < 1) || (!g && Math.abs(x) < 1)) && (m = !0), m;
  },
  uo = function (n) {
    return "changedTouches" in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  f0 = function (n) {
    return [n.deltaX, n.deltaY];
  },
  d0 = function (n) {
    return n && "current" in n ? n.current : n;
  },
  vN = function (n, i) {
    return n[0] === i[0] && n[1] === i[1];
  },
  bN = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        n,
        ` {pointer-events: all;}
`
      );
  },
  xN = 0,
  Xa = [];
function SN(n) {
  var i = S.useRef([]),
    s = S.useRef([0, 0]),
    r = S.useRef(),
    o = S.useState(xN++)[0],
    d = S.useState(Zx)[0],
    f = S.useRef(n);
  S.useEffect(
    function () {
      f.current = n;
    },
    [n]
  ),
    S.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var w = YO([n.lockRef.current], (n.shards || []).map(d0), !0).filter(
            Boolean
          );
          return (
            w.forEach(function (E) {
              return E.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                w.forEach(function (E) {
                  return E.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards]
    );
  var h = S.useCallback(function (w, E) {
      if (
        ("touches" in w && w.touches.length === 2) ||
        (w.type === "wheel" && w.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var M = uo(w),
        _ = s.current,
        N = "deltaX" in w ? w.deltaX : _[0] - M[0],
        Y = "deltaY" in w ? w.deltaY : _[1] - M[1],
        z,
        Q = w.target,
        Z = Math.abs(N) > Math.abs(Y) ? "h" : "v";
      if ("touches" in w && Z === "h" && Q.type === "range") return !1;
      var P = u0(Z, Q);
      if (!P) return !0;
      if ((P ? (z = Z) : ((z = Z === "v" ? "h" : "v"), (P = u0(Z, Q))), !P))
        return !1;
      if (
        (!r.current && "changedTouches" in w && (N || Y) && (r.current = z), !z)
      )
        return !0;
      var tt = r.current || z;
      return yN(tt, E, w, tt === "h" ? N : Y);
    }, []),
    p = S.useCallback(function (w) {
      var E = w;
      if (!(!Xa.length || Xa[Xa.length - 1] !== d)) {
        var M = "deltaY" in E ? f0(E) : uo(E),
          _ = i.current.filter(function (z) {
            return (
              z.name === E.type &&
              (z.target === E.target || E.target === z.shadowParent) &&
              vN(z.delta, M)
            );
          })[0];
        if (_ && _.should) {
          E.cancelable && E.preventDefault();
          return;
        }
        if (!_) {
          var N = (f.current.shards || [])
              .map(d0)
              .filter(Boolean)
              .filter(function (z) {
                return z.contains(E.target);
              }),
            Y = N.length > 0 ? h(E, N[0]) : !f.current.noIsolation;
          Y && E.cancelable && E.preventDefault();
        }
      }
    }, []),
    m = S.useCallback(function (w, E, M, _) {
      var N = { name: w, delta: E, target: M, should: _, shadowParent: TN(M) };
      i.current.push(N),
        setTimeout(function () {
          i.current = i.current.filter(function (Y) {
            return Y !== N;
          });
        }, 1);
    }, []),
    g = S.useCallback(function (w) {
      (s.current = uo(w)), (r.current = void 0);
    }, []),
    v = S.useCallback(function (w) {
      m(w.type, f0(w), w.target, h(w, n.lockRef.current));
    }, []),
    x = S.useCallback(function (w) {
      m(w.type, uo(w), w.target, h(w, n.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      Xa.push(d),
      n.setCallbacks({
        onScrollCapture: v,
        onWheelCapture: v,
        onTouchMoveCapture: x,
      }),
      document.addEventListener("wheel", p, Ga),
      document.addEventListener("touchmove", p, Ga),
      document.addEventListener("touchstart", g, Ga),
      function () {
        (Xa = Xa.filter(function (w) {
          return w !== d;
        })),
          document.removeEventListener("wheel", p, Ga),
          document.removeEventListener("touchmove", p, Ga),
          document.removeEventListener("touchstart", g, Ga);
      }
    );
  }, []);
  var T = n.removeScrollBar,
    D = n.inert;
  return S.createElement(
    S.Fragment,
    null,
    D ? S.createElement(d, { styles: bN(o) }) : null,
    T ? S.createElement(uN, { gapMode: n.gapMode }) : null
  );
}
function TN(n) {
  for (var i = null; n !== null; )
    n instanceof ShadowRoot && ((i = n.host), (n = n.host)), (n = n.parentNode);
  return i;
}
const wN = $O(Kx, SN);
var $x = S.forwardRef(function (n, i) {
  return S.createElement(Po, gn({}, n, { ref: i, sideCar: wN }));
});
$x.classNames = Po.classNames;
var AN = [" ", "Enter", "ArrowUp", "ArrowDown"],
  EN = [" ", "Enter"],
  ea = "Select",
  [Yo, qo, MN] = tD(ea),
  [fs, g3] = ih(ea, [MN, _x]),
  Go = _x(),
  [CN, wi] = fs(ea),
  [RN, DN] = fs(ea),
  Jx = (n) => {
    const {
        __scopeSelect: i,
        children: s,
        open: r,
        defaultOpen: o,
        onOpenChange: d,
        value: f,
        defaultValue: h,
        onValueChange: p,
        dir: m,
        name: g,
        autoComplete: v,
        disabled: x,
        required: T,
        form: D,
      } = n,
      w = Go(i),
      [E, M] = S.useState(null),
      [_, N] = S.useState(null),
      [Y, z] = S.useState(!1),
      Q = nD(m),
      [Z, P] = r0({ prop: r, defaultProp: o ?? !1, onChange: d, caller: ea }),
      [tt, lt] = r0({ prop: f, defaultProp: h, onChange: p, caller: ea }),
      pt = S.useRef(null),
      ft = E ? D || !!E.closest("form") : !0,
      [yt, vt] = S.useState(new Set()),
      ct = Array.from(yt)
        .map((V) => V.props.value)
        .join(";");
    return A.jsx(CO, {
      ...w,
      children: A.jsxs(CN, {
        required: T,
        scope: i,
        trigger: E,
        onTriggerChange: M,
        valueNode: _,
        onValueNodeChange: N,
        valueNodeHasChildren: Y,
        onValueNodeHasChildrenChange: z,
        contentId: ah(),
        value: tt,
        onValueChange: lt,
        open: Z,
        onOpenChange: P,
        dir: Q,
        triggerPointerDownPosRef: pt,
        disabled: x,
        children: [
          A.jsx(Yo.Provider, {
            scope: i,
            children: A.jsx(RN, {
              scope: n.__scopeSelect,
              onNativeOptionAdd: S.useCallback((V) => {
                vt((q) => new Set(q).add(V));
              }, []),
              onNativeOptionRemove: S.useCallback((V) => {
                vt((q) => {
                  const U = new Set(q);
                  return U.delete(V), U;
                });
              }, []),
              children: s,
            }),
          }),
          ft
            ? A.jsxs(
                x1,
                {
                  "aria-hidden": !0,
                  required: T,
                  tabIndex: -1,
                  name: g,
                  autoComplete: v,
                  value: tt,
                  onChange: (V) => lt(V.target.value),
                  disabled: x,
                  form: D,
                  children: [
                    tt === void 0 ? A.jsx("option", { value: "" }) : null,
                    Array.from(yt),
                  ],
                },
                ct
              )
            : null,
        ],
      }),
    });
  };
Jx.displayName = ea;
var Ix = "SelectTrigger",
  t1 = S.forwardRef((n, i) => {
    const { __scopeSelect: s, disabled: r = !1, ...o } = n,
      d = Go(s),
      f = wi(Ix, s),
      h = f.disabled || r,
      p = oe(i, f.onTriggerChange),
      m = qo(s),
      g = S.useRef("touch"),
      [v, x, T] = T1((w) => {
        const E = m().filter((N) => !N.disabled),
          M = E.find((N) => N.value === f.value),
          _ = w1(E, w, M);
        _ !== void 0 && f.onValueChange(_.value);
      }),
      D = (w) => {
        h || (f.onOpenChange(!0), T()),
          w &&
            (f.triggerPointerDownPosRef.current = {
              x: Math.round(w.pageX),
              y: Math.round(w.pageY),
            });
      };
    return A.jsx(RO, {
      asChild: !0,
      ...d,
      children: A.jsx(Zt.button, {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: h,
        "data-disabled": h ? "" : void 0,
        "data-placeholder": S1(f.value) ? "" : void 0,
        ...o,
        ref: p,
        onClick: It(o.onClick, (w) => {
          w.currentTarget.focus(), g.current !== "mouse" && D(w);
        }),
        onPointerDown: It(o.onPointerDown, (w) => {
          g.current = w.pointerType;
          const E = w.target;
          E.hasPointerCapture(w.pointerId) &&
            E.releasePointerCapture(w.pointerId),
            w.button === 0 &&
              w.ctrlKey === !1 &&
              w.pointerType === "mouse" &&
              (D(w), w.preventDefault());
        }),
        onKeyDown: It(o.onKeyDown, (w) => {
          const E = v.current !== "";
          !(w.ctrlKey || w.altKey || w.metaKey) &&
            w.key.length === 1 &&
            x(w.key),
            !(E && w.key === " ") &&
              AN.includes(w.key) &&
              (D(), w.preventDefault());
        }),
      }),
    });
  });
t1.displayName = Ix;
var e1 = "SelectValue",
  n1 = S.forwardRef((n, i) => {
    const {
        __scopeSelect: s,
        className: r,
        style: o,
        children: d,
        placeholder: f = "",
        ...h
      } = n,
      p = wi(e1, s),
      { onValueNodeHasChildrenChange: m } = p,
      g = d !== void 0,
      v = oe(i, p.onValueNodeChange);
    return (
      Oe(() => {
        m(g);
      }, [m, g]),
      A.jsx(Zt.span, {
        ...h,
        ref: v,
        style: { pointerEvents: "none" },
        children: S1(p.value) ? A.jsx(A.Fragment, { children: f }) : d,
      })
    );
  });
n1.displayName = e1;
var ON = "SelectIcon",
  i1 = S.forwardRef((n, i) => {
    const { __scopeSelect: s, children: r, ...o } = n;
    return A.jsx(Zt.span, {
      "aria-hidden": !0,
      ...o,
      ref: i,
      children: r || "▼",
    });
  });
i1.displayName = ON;
var NN = "SelectPortal",
  a1 = (n) => A.jsx(Px, { asChild: !0, ...n });
a1.displayName = NN;
var na = "SelectContent",
  s1 = S.forwardRef((n, i) => {
    const s = wi(na, n.__scopeSelect),
      [r, o] = S.useState();
    if (
      (Oe(() => {
        o(new DocumentFragment());
      }, []),
      !s.open)
    ) {
      const d = r;
      return d
        ? Bl.createPortal(
            A.jsx(l1, {
              scope: n.__scopeSelect,
              children: A.jsx(Yo.Slot, {
                scope: n.__scopeSelect,
                children: A.jsx("div", { children: n.children }),
              }),
            }),
            d
          )
        : null;
    }
    return A.jsx(r1, { ...n, ref: i });
  });
s1.displayName = na;
var ln = 10,
  [l1, Ai] = fs(na),
  _N = "SelectContentImpl",
  jN = Al("SelectContent.RemoveScroll"),
  r1 = S.forwardRef((n, i) => {
    const {
        __scopeSelect: s,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        side: h,
        sideOffset: p,
        align: m,
        alignOffset: g,
        arrowPadding: v,
        collisionBoundary: x,
        collisionPadding: T,
        sticky: D,
        hideWhenDetached: w,
        avoidCollisions: E,
        ...M
      } = n,
      _ = wi(na, s),
      [N, Y] = S.useState(null),
      [z, Q] = S.useState(null),
      Z = oe(i, (J) => Y(J)),
      [P, tt] = S.useState(null),
      [lt, pt] = S.useState(null),
      ft = qo(s),
      [yt, vt] = S.useState(!1),
      ct = S.useRef(!1);
    S.useEffect(() => {
      if (N) return PO(N);
    }, [N]),
      fD();
    const V = S.useCallback(
        (J) => {
          const [ot, ...Nt] = ft().map((At) => At.ref.current),
            [Ct] = Nt.slice(-1),
            wt = document.activeElement;
          for (const At of J)
            if (
              At === wt ||
              (At == null || At.scrollIntoView({ block: "nearest" }),
              At === ot && z && (z.scrollTop = 0),
              At === Ct && z && (z.scrollTop = z.scrollHeight),
              At == null || At.focus(),
              document.activeElement !== wt)
            )
              return;
        },
        [ft, z]
      ),
      q = S.useCallback(() => V([P, N]), [V, P, N]);
    S.useEffect(() => {
      yt && q();
    }, [yt, q]);
    const { onOpenChange: U, triggerPointerDownPosRef: at } = _;
    S.useEffect(() => {
      if (N) {
        let J = { x: 0, y: 0 };
        const ot = (Ct) => {
            var wt, At;
            J = {
              x: Math.abs(
                Math.round(Ct.pageX) -
                  (((wt = at.current) == null ? void 0 : wt.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(Ct.pageY) -
                  (((At = at.current) == null ? void 0 : At.y) ?? 0)
              ),
            };
          },
          Nt = (Ct) => {
            J.x <= 10 && J.y <= 10
              ? Ct.preventDefault()
              : N.contains(Ct.target) || U(!1),
              document.removeEventListener("pointermove", ot),
              (at.current = null);
          };
        return (
          at.current !== null &&
            (document.addEventListener("pointermove", ot),
            document.addEventListener("pointerup", Nt, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", ot),
              document.removeEventListener("pointerup", Nt, { capture: !0 });
          }
        );
      }
    }, [N, U, at]),
      S.useEffect(() => {
        const J = () => U(!1);
        return (
          window.addEventListener("blur", J),
          window.addEventListener("resize", J),
          () => {
            window.removeEventListener("blur", J),
              window.removeEventListener("resize", J);
          }
        );
      }, [U]);
    const [R, X] = T1((J) => {
        const ot = ft().filter((wt) => !wt.disabled),
          Nt = ot.find((wt) => wt.ref.current === document.activeElement),
          Ct = w1(ot, J, Nt);
        Ct && setTimeout(() => Ct.ref.current.focus());
      }),
      $ = S.useCallback(
        (J, ot, Nt) => {
          const Ct = !ct.current && !Nt;
          ((_.value !== void 0 && _.value === ot) || Ct) &&
            (tt(J), Ct && (ct.current = !0));
        },
        [_.value]
      ),
      W = S.useCallback(() => (N == null ? void 0 : N.focus()), [N]),
      I = S.useCallback(
        (J, ot, Nt) => {
          const Ct = !ct.current && !Nt;
          ((_.value !== void 0 && _.value === ot) || Ct) && pt(J);
        },
        [_.value]
      ),
      gt = r === "popper" ? pd : o1,
      rt =
        gt === pd
          ? {
              side: h,
              sideOffset: p,
              align: m,
              alignOffset: g,
              arrowPadding: v,
              collisionBoundary: x,
              collisionPadding: T,
              sticky: D,
              hideWhenDetached: w,
              avoidCollisions: E,
            }
          : {};
    return A.jsx(l1, {
      scope: s,
      content: N,
      viewport: z,
      onViewportChange: Q,
      itemRefCallback: $,
      selectedItem: P,
      onItemLeave: W,
      itemTextRefCallback: I,
      focusSelectedItem: q,
      selectedItemText: lt,
      position: r,
      isPositioned: yt,
      searchRef: R,
      children: A.jsx($x, {
        as: jN,
        allowPinchZoom: !0,
        children: A.jsx(vx, {
          asChild: !0,
          trapped: _.open,
          onMountAutoFocus: (J) => {
            J.preventDefault();
          },
          onUnmountAutoFocus: It(o, (J) => {
            var ot;
            (ot = _.trigger) == null || ot.focus({ preventScroll: !0 }),
              J.preventDefault();
          }),
          children: A.jsx(gx, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: d,
            onPointerDownOutside: f,
            onFocusOutside: (J) => J.preventDefault(),
            onDismiss: () => _.onOpenChange(!1),
            children: A.jsx(gt, {
              role: "listbox",
              id: _.contentId,
              "data-state": _.open ? "open" : "closed",
              dir: _.dir,
              onContextMenu: (J) => J.preventDefault(),
              ...M,
              ...rt,
              onPlaced: () => vt(!0),
              ref: Z,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...M.style,
              },
              onKeyDown: It(M.onKeyDown, (J) => {
                const ot = J.ctrlKey || J.altKey || J.metaKey;
                if (
                  (J.key === "Tab" && J.preventDefault(),
                  !ot && J.key.length === 1 && X(J.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(J.key))
                ) {
                  let Ct = ft()
                    .filter((wt) => !wt.disabled)
                    .map((wt) => wt.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(J.key) &&
                      (Ct = Ct.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(J.key))
                  ) {
                    const wt = J.target,
                      At = Ct.indexOf(wt);
                    Ct = Ct.slice(At + 1);
                  }
                  setTimeout(() => V(Ct)), J.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
r1.displayName = _N;
var zN = "SelectItemAlignedPosition",
  o1 = S.forwardRef((n, i) => {
    const { __scopeSelect: s, onPlaced: r, ...o } = n,
      d = wi(na, s),
      f = Ai(na, s),
      [h, p] = S.useState(null),
      [m, g] = S.useState(null),
      v = oe(i, (Z) => g(Z)),
      x = qo(s),
      T = S.useRef(!1),
      D = S.useRef(!0),
      {
        viewport: w,
        selectedItem: E,
        selectedItemText: M,
        focusSelectedItem: _,
      } = f,
      N = S.useCallback(() => {
        if (d.trigger && d.valueNode && h && m && w && E && M) {
          const Z = d.trigger.getBoundingClientRect(),
            P = m.getBoundingClientRect(),
            tt = d.valueNode.getBoundingClientRect(),
            lt = M.getBoundingClientRect();
          if (d.dir !== "rtl") {
            const wt = lt.left - P.left,
              At = tt.left - wt,
              ce = Z.left - At,
              Te = Z.width + ce,
              Ei = Math.max(Te, P.width),
              Mi = window.innerWidth - ln,
              he = Xv(At, [ln, Math.max(ln, Mi - Ei)]);
            (h.style.minWidth = Te + "px"), (h.style.left = he + "px");
          } else {
            const wt = P.right - lt.right,
              At = window.innerWidth - tt.right - wt,
              ce = window.innerWidth - Z.right - At,
              Te = Z.width + ce,
              Ei = Math.max(Te, P.width),
              Mi = window.innerWidth - ln,
              he = Xv(At, [ln, Math.max(ln, Mi - Ei)]);
            (h.style.minWidth = Te + "px"), (h.style.right = he + "px");
          }
          const pt = x(),
            ft = window.innerHeight - ln * 2,
            yt = w.scrollHeight,
            vt = window.getComputedStyle(m),
            ct = parseInt(vt.borderTopWidth, 10),
            V = parseInt(vt.paddingTop, 10),
            q = parseInt(vt.borderBottomWidth, 10),
            U = parseInt(vt.paddingBottom, 10),
            at = ct + V + yt + U + q,
            R = Math.min(E.offsetHeight * 5, at),
            X = window.getComputedStyle(w),
            $ = parseInt(X.paddingTop, 10),
            W = parseInt(X.paddingBottom, 10),
            I = Z.top + Z.height / 2 - ln,
            gt = ft - I,
            rt = E.offsetHeight / 2,
            J = E.offsetTop + rt,
            ot = ct + V + J,
            Nt = at - ot;
          if (ot <= I) {
            const wt = pt.length > 0 && E === pt[pt.length - 1].ref.current;
            h.style.bottom = "0px";
            const At = m.clientHeight - w.offsetTop - w.offsetHeight,
              ce = Math.max(gt, rt + (wt ? W : 0) + At + q),
              Te = ot + ce;
            h.style.height = Te + "px";
          } else {
            const wt = pt.length > 0 && E === pt[0].ref.current;
            h.style.top = "0px";
            const ce = Math.max(I, ct + w.offsetTop + (wt ? $ : 0) + rt) + Nt;
            (h.style.height = ce + "px"), (w.scrollTop = ot - I + w.offsetTop);
          }
          (h.style.margin = `${ln}px 0`),
            (h.style.minHeight = R + "px"),
            (h.style.maxHeight = ft + "px"),
            r == null || r(),
            requestAnimationFrame(() => (T.current = !0));
        }
      }, [x, d.trigger, d.valueNode, h, m, w, E, M, d.dir, r]);
    Oe(() => N(), [N]);
    const [Y, z] = S.useState();
    Oe(() => {
      m && z(window.getComputedStyle(m).zIndex);
    }, [m]);
    const Q = S.useCallback(
      (Z) => {
        Z && D.current === !0 && (N(), _ == null || _(), (D.current = !1));
      },
      [N, _]
    );
    return A.jsx(LN, {
      scope: s,
      contentWrapper: h,
      shouldExpandOnScrollRef: T,
      onScrollButtonChange: Q,
      children: A.jsx("div", {
        ref: p,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: Y,
        },
        children: A.jsx(Zt.div, {
          ...o,
          ref: v,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
o1.displayName = zN;
var VN = "SelectPopperPosition",
  pd = S.forwardRef((n, i) => {
    const {
        __scopeSelect: s,
        align: r = "start",
        collisionPadding: o = ln,
        ...d
      } = n,
      f = Go(s);
    return A.jsx(DO, {
      ...f,
      ...d,
      ref: i,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...d.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
pd.displayName = VN;
var [LN, mh] = fs(na, {}),
  gd = "SelectViewport",
  c1 = S.forwardRef((n, i) => {
    const { __scopeSelect: s, nonce: r, ...o } = n,
      d = Ai(gd, s),
      f = mh(gd, s),
      h = oe(i, d.onViewportChange),
      p = S.useRef(0);
    return A.jsxs(A.Fragment, {
      children: [
        A.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        A.jsx(Yo.Slot, {
          scope: s,
          children: A.jsx(Zt.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: h,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: It(o.onScroll, (m) => {
              const g = m.currentTarget,
                { contentWrapper: v, shouldExpandOnScrollRef: x } = f;
              if (x != null && x.current && v) {
                const T = Math.abs(p.current - g.scrollTop);
                if (T > 0) {
                  const D = window.innerHeight - ln * 2,
                    w = parseFloat(v.style.minHeight),
                    E = parseFloat(v.style.height),
                    M = Math.max(w, E);
                  if (M < D) {
                    const _ = M + T,
                      N = Math.min(D, _),
                      Y = _ - N;
                    (v.style.height = N + "px"),
                      v.style.bottom === "0px" &&
                        ((g.scrollTop = Y > 0 ? Y : 0),
                        (v.style.justifyContent = "flex-end"));
                  }
                }
              }
              p.current = g.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
c1.displayName = gd;
var u1 = "SelectGroup",
  [BN, kN] = fs(u1),
  UN = S.forwardRef((n, i) => {
    const { __scopeSelect: s, ...r } = n,
      o = ah();
    return A.jsx(BN, {
      scope: s,
      id: o,
      children: A.jsx(Zt.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: i,
      }),
    });
  });
UN.displayName = u1;
var f1 = "SelectLabel",
  HN = S.forwardRef((n, i) => {
    const { __scopeSelect: s, ...r } = n,
      o = kN(f1, s);
    return A.jsx(Zt.div, { id: o.id, ...r, ref: i });
  });
HN.displayName = f1;
var Oo = "SelectItem",
  [PN, d1] = fs(Oo),
  h1 = S.forwardRef((n, i) => {
    const {
        __scopeSelect: s,
        value: r,
        disabled: o = !1,
        textValue: d,
        ...f
      } = n,
      h = wi(Oo, s),
      p = Ai(Oo, s),
      m = h.value === r,
      [g, v] = S.useState(d ?? ""),
      [x, T] = S.useState(!1),
      D = oe(i, (_) => {
        var N;
        return (N = p.itemRefCallback) == null ? void 0 : N.call(p, _, r, o);
      }),
      w = ah(),
      E = S.useRef("touch"),
      M = () => {
        o || (h.onValueChange(r), h.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return A.jsx(PN, {
      scope: s,
      value: r,
      disabled: o,
      textId: w,
      isSelected: m,
      onItemTextChange: S.useCallback((_) => {
        v((N) => N || ((_ == null ? void 0 : _.textContent) ?? "").trim());
      }, []),
      children: A.jsx(Yo.ItemSlot, {
        scope: s,
        value: r,
        disabled: o,
        textValue: g,
        children: A.jsx(Zt.div, {
          role: "option",
          "aria-labelledby": w,
          "data-highlighted": x ? "" : void 0,
          "aria-selected": m && x,
          "data-state": m ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...f,
          ref: D,
          onFocus: It(f.onFocus, () => T(!0)),
          onBlur: It(f.onBlur, () => T(!1)),
          onClick: It(f.onClick, () => {
            E.current !== "mouse" && M();
          }),
          onPointerUp: It(f.onPointerUp, () => {
            E.current === "mouse" && M();
          }),
          onPointerDown: It(f.onPointerDown, (_) => {
            E.current = _.pointerType;
          }),
          onPointerMove: It(f.onPointerMove, (_) => {
            var N;
            (E.current = _.pointerType),
              o
                ? (N = p.onItemLeave) == null || N.call(p)
                : E.current === "mouse" &&
                  _.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: It(f.onPointerLeave, (_) => {
            var N;
            _.currentTarget === document.activeElement &&
              ((N = p.onItemLeave) == null || N.call(p));
          }),
          onKeyDown: It(f.onKeyDown, (_) => {
            var Y;
            (((Y = p.searchRef) == null ? void 0 : Y.current) !== "" &&
              _.key === " ") ||
              (EN.includes(_.key) && M(), _.key === " " && _.preventDefault());
          }),
        }),
      }),
    });
  });
h1.displayName = Oo;
var gl = "SelectItemText",
  m1 = S.forwardRef((n, i) => {
    const { __scopeSelect: s, className: r, style: o, ...d } = n,
      f = wi(gl, s),
      h = Ai(gl, s),
      p = d1(gl, s),
      m = DN(gl, s),
      [g, v] = S.useState(null),
      x = oe(
        i,
        (M) => v(M),
        p.onItemTextChange,
        (M) => {
          var _;
          return (_ = h.itemTextRefCallback) == null
            ? void 0
            : _.call(h, M, p.value, p.disabled);
        }
      ),
      T = g == null ? void 0 : g.textContent,
      D = S.useMemo(
        () =>
          A.jsx(
            "option",
            { value: p.value, disabled: p.disabled, children: T },
            p.value
          ),
        [p.disabled, p.value, T]
      ),
      { onNativeOptionAdd: w, onNativeOptionRemove: E } = m;
    return (
      Oe(() => (w(D), () => E(D)), [w, E, D]),
      A.jsxs(A.Fragment, {
        children: [
          A.jsx(Zt.span, { id: p.textId, ...d, ref: x }),
          p.isSelected && f.valueNode && !f.valueNodeHasChildren
            ? Bl.createPortal(d.children, f.valueNode)
            : null,
        ],
      })
    );
  });
m1.displayName = gl;
var p1 = "SelectItemIndicator",
  g1 = S.forwardRef((n, i) => {
    const { __scopeSelect: s, ...r } = n;
    return d1(p1, s).isSelected
      ? A.jsx(Zt.span, { "aria-hidden": !0, ...r, ref: i })
      : null;
  });
g1.displayName = p1;
var yd = "SelectScrollUpButton",
  y1 = S.forwardRef((n, i) => {
    const s = Ai(yd, n.__scopeSelect),
      r = mh(yd, n.__scopeSelect),
      [o, d] = S.useState(!1),
      f = oe(i, r.onScrollButtonChange);
    return (
      Oe(() => {
        if (s.viewport && s.isPositioned) {
          let h = function () {
            const m = p.scrollTop > 0;
            d(m);
          };
          const p = s.viewport;
          return (
            h(),
            p.addEventListener("scroll", h),
            () => p.removeEventListener("scroll", h)
          );
        }
      }, [s.viewport, s.isPositioned]),
      o
        ? A.jsx(b1, {
            ...n,
            ref: f,
            onAutoScroll: () => {
              const { viewport: h, selectedItem: p } = s;
              h && p && (h.scrollTop = h.scrollTop - p.offsetHeight);
            },
          })
        : null
    );
  });
y1.displayName = yd;
var vd = "SelectScrollDownButton",
  v1 = S.forwardRef((n, i) => {
    const s = Ai(vd, n.__scopeSelect),
      r = mh(vd, n.__scopeSelect),
      [o, d] = S.useState(!1),
      f = oe(i, r.onScrollButtonChange);
    return (
      Oe(() => {
        if (s.viewport && s.isPositioned) {
          let h = function () {
            const m = p.scrollHeight - p.clientHeight,
              g = Math.ceil(p.scrollTop) < m;
            d(g);
          };
          const p = s.viewport;
          return (
            h(),
            p.addEventListener("scroll", h),
            () => p.removeEventListener("scroll", h)
          );
        }
      }, [s.viewport, s.isPositioned]),
      o
        ? A.jsx(b1, {
            ...n,
            ref: f,
            onAutoScroll: () => {
              const { viewport: h, selectedItem: p } = s;
              h && p && (h.scrollTop = h.scrollTop + p.offsetHeight);
            },
          })
        : null
    );
  });
v1.displayName = vd;
var b1 = S.forwardRef((n, i) => {
    const { __scopeSelect: s, onAutoScroll: r, ...o } = n,
      d = Ai("SelectScrollButton", s),
      f = S.useRef(null),
      h = qo(s),
      p = S.useCallback(() => {
        f.current !== null &&
          (window.clearInterval(f.current), (f.current = null));
      }, []);
    return (
      S.useEffect(() => () => p(), [p]),
      Oe(() => {
        var g;
        const m = h().find((v) => v.ref.current === document.activeElement);
        (g = m == null ? void 0 : m.ref.current) == null ||
          g.scrollIntoView({ block: "nearest" });
      }, [h]),
      A.jsx(Zt.div, {
        "aria-hidden": !0,
        ...o,
        ref: i,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: It(o.onPointerDown, () => {
          f.current === null && (f.current = window.setInterval(r, 50));
        }),
        onPointerMove: It(o.onPointerMove, () => {
          var m;
          (m = d.onItemLeave) == null || m.call(d),
            f.current === null && (f.current = window.setInterval(r, 50));
        }),
        onPointerLeave: It(o.onPointerLeave, () => {
          p();
        }),
      })
    );
  }),
  YN = "SelectSeparator",
  qN = S.forwardRef((n, i) => {
    const { __scopeSelect: s, ...r } = n;
    return A.jsx(Zt.div, { "aria-hidden": !0, ...r, ref: i });
  });
qN.displayName = YN;
var bd = "SelectArrow",
  GN = S.forwardRef((n, i) => {
    const { __scopeSelect: s, ...r } = n,
      o = Go(s),
      d = wi(bd, s),
      f = Ai(bd, s);
    return d.open && f.position === "popper"
      ? A.jsx(OO, { ...o, ...r, ref: i })
      : null;
  });
GN.displayName = bd;
var XN = "SelectBubbleInput",
  x1 = S.forwardRef(({ __scopeSelect: n, value: i, ...s }, r) => {
    const o = S.useRef(null),
      d = oe(r, o),
      f = VO(i);
    return (
      S.useEffect(() => {
        const h = o.current;
        if (!h) return;
        const p = window.HTMLSelectElement.prototype,
          g = Object.getOwnPropertyDescriptor(p, "value").set;
        if (f !== i && g) {
          const v = new Event("change", { bubbles: !0 });
          g.call(h, i), h.dispatchEvent(v);
        }
      }, [f, i]),
      A.jsx(Zt.select, {
        ...s,
        style: { ...Yx, ...s.style },
        ref: d,
        defaultValue: i,
      })
    );
  });
x1.displayName = XN;
function S1(n) {
  return n === "" || n === void 0;
}
function T1(n) {
  const i = Ii(n),
    s = S.useRef(""),
    r = S.useRef(0),
    o = S.useCallback(
      (f) => {
        const h = s.current + f;
        i(h),
          (function p(m) {
            (s.current = m),
              window.clearTimeout(r.current),
              m !== "" && (r.current = window.setTimeout(() => p(""), 1e3));
          })(h);
      },
      [i]
    ),
    d = S.useCallback(() => {
      (s.current = ""), window.clearTimeout(r.current);
    }, []);
  return S.useEffect(() => () => window.clearTimeout(r.current), []), [s, o, d];
}
function w1(n, i, s) {
  const o = i.length > 1 && Array.from(i).every((m) => m === i[0]) ? i[0] : i,
    d = s ? n.indexOf(s) : -1;
  let f = KN(n, Math.max(d, 0));
  o.length === 1 && (f = f.filter((m) => m !== s));
  const p = f.find((m) =>
    m.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return p !== s ? p : void 0;
}
function KN(n, i) {
  return n.map((s, r) => n[(i + r) % n.length]);
}
var ZN = Jx,
  QN = t1,
  FN = n1,
  WN = i1,
  $N = a1,
  JN = s1,
  IN = c1,
  t3 = h1,
  e3 = m1,
  n3 = g1,
  i3 = y1,
  a3 = v1;
function s3({ ...n }) {
  return A.jsx(ZN, { "data-slot": "select", ...n });
}
function l3({ ...n }) {
  return A.jsx(FN, { "data-slot": "select-value", ...n });
}
function r3({ className: n, size: i = "default", children: s, ...r }) {
  return A.jsxs(QN, {
    "data-slot": "select-trigger",
    "data-size": i,
    className: Se(
      "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      n
    ),
    ...r,
    children: [
      s,
      A.jsx(WN, {
        asChild: !0,
        children: A.jsx(j0, { className: "size-4 opacity-50" }),
      }),
    ],
  });
}
function o3({ className: n, children: i, position: s = "popper", ...r }) {
  return A.jsx($N, {
    children: A.jsxs(JN, {
      "data-slot": "select-content",
      className: Se(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: s,
      ...r,
      children: [
        A.jsx(c3, {}),
        A.jsx(IN, {
          className: Se(
            "p-1",
            s === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          ),
          children: i,
        }),
        A.jsx(u3, {}),
      ],
    }),
  });
}
function h0({ className: n, children: i, ...s }) {
  return A.jsxs(t3, {
    "data-slot": "select-item",
    className: Se(
      "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      n
    ),
    ...s,
    children: [
      A.jsx("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: A.jsx(n3, { children: A.jsx(Fw, { className: "size-4" }) }),
      }),
      A.jsx(e3, { children: i }),
    ],
  });
}
function c3({ className: n, ...i }) {
  return A.jsx(i3, {
    "data-slot": "select-scroll-up-button",
    className: Se("flex cursor-default items-center justify-center py-1", n),
    ...i,
    children: A.jsx(Jw, { className: "size-4" }),
  });
}
function u3({ className: n, ...i }) {
  return A.jsx(a3, {
    "data-slot": "select-scroll-down-button",
    className: Se("flex cursor-default items-center justify-center py-1", n),
    ...i,
    children: A.jsx(j0, { className: "size-4" }),
  });
}
const f3 = ({ isOpen: n, onClose: i, translations: s, language: r }) => {
    const [o, d] = S.useState({
        agentType: "",
        agentName: "",
        location: "",
        email: "",
        document: null,
      }),
      [f, h] = S.useState({}),
      [p, m] = S.useState(!1),
      [g, v] = S.useState(!1),
      x = s,
      T = () => {
        const M = {};
        return (
          o.agentType || (M.agentType = x.pleaseSelectAgentType),
          o.agentName.trim() || (M.agentName = x.pleaseEnterAgentName),
          o.location.trim() || (M.location = x.pleaseEnterLocation),
          (o.email.trim() && /\S+@\S+\.\S+/.test(o.email)) ||
            (M.email = x.pleaseEnterValidEmail),
          o.document || (M.document = x.pleaseUploadDocument),
          h(M),
          Object.keys(M).length === 0
        );
      },
      D = async (M) => {
        M.preventDefault(),
          T() &&
            (v(!0),
            setTimeout(() => {
              v(!1),
                m(!0),
                setTimeout(() => {
                  m(!1),
                    d({
                      agentType: "",
                      agentName: "",
                      location: "",
                      email: "",
                      document: null,
                    }),
                    h({}),
                    i();
                }, 3e3);
            }, 2e3));
      },
      w = (M) => {
        const _ = M.target.files[0];
        _ && (d({ ...o, document: _ }), h({ ...f, document: "" }));
      },
      E = (M, _) => {
        d({ ...o, [M]: _ }), f[M] && h({ ...f, [M]: "" });
      };
    return n
      ? A.jsx(jE, {
          children: A.jsx(tn.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            onClick: i,
            children: A.jsx(tn.div, {
              initial: { opacity: 0, scale: 0.95, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 20 },
              transition: { duration: 0.2 },
              className: "w-full max-w-md",
              onClick: (M) => M.stopPropagation(),
              children: A.jsxs(kf, {
                className: "w-full",
                children: [
                  A.jsxs(Uf, {
                    className: "relative",
                    children: [
                      A.jsx(He, {
                        variant: "ghost",
                        size: "icon",
                        className: "absolute top-2 right-2",
                        onClick: i,
                        children: A.jsx(z2, { className: "w-4 h-4" }),
                      }),
                      A.jsx(Hf, {
                        className: "text-2xl text-sky-600 text-center",
                        children: x.agentRegistration,
                      }),
                      A.jsx(Pf, {
                        className: "text-center",
                        children:
                          r === "ar"
                            ? "املأ البيانات التالية لتسجيل حسابك كوسيط عقاري"
                            : "Fill in the following information to register as a real estate agent",
                      }),
                    ],
                  }),
                  A.jsx(Yf, {
                    children: p
                      ? A.jsxs(tn.div, {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          className: "text-center py-8",
                          children: [
                            A.jsx(t2, {
                              className:
                                "w-16 h-16 text-green-500 mx-auto mb-4",
                            }),
                            A.jsx("h3", {
                              className:
                                "text-lg font-semibold text-green-600 mb-2",
                              children:
                                r === "ar"
                                  ? "تم الإرسال بنجاح!"
                                  : "Successfully Submitted!",
                            }),
                            A.jsx("p", {
                              className: "text-muted-foreground",
                              children: x.requestSubmittedSuccessfully,
                            }),
                          ],
                        })
                      : A.jsxs("form", {
                          onSubmit: D,
                          className: "space-y-4",
                          children: [
                            A.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                A.jsx(ml, {
                                  htmlFor: "agentType",
                                  children: x.agentType,
                                }),
                                A.jsxs(s3, {
                                  value: o.agentType,
                                  onValueChange: (M) => E("agentType", M),
                                  children: [
                                    A.jsx(r3, {
                                      className: f.agentType
                                        ? "border-red-500"
                                        : "",
                                      children: A.jsx(l3, {
                                        placeholder: x.pleaseSelectAgentType,
                                      }),
                                    }),
                                    A.jsxs(o3, {
                                      children: [
                                        A.jsx(h0, {
                                          value: "office",
                                          children: x.office,
                                        }),
                                        A.jsx(h0, {
                                          value: "serviceProvider",
                                          children: x.serviceProvider,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                f.agentType &&
                                  A.jsx("p", {
                                    className: "text-sm text-red-500",
                                    children: f.agentType,
                                  }),
                              ],
                            }),
                            A.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                A.jsx(ml, {
                                  htmlFor: "agentName",
                                  children: x.agentName,
                                }),
                                A.jsx(so, {
                                  id: "agentName",
                                  type: "text",
                                  value: o.agentName,
                                  onChange: (M) =>
                                    E("agentName", M.target.value),
                                  className: f.agentName
                                    ? "border-red-500"
                                    : "",
                                  placeholder: x.pleaseEnterAgentName,
                                }),
                                f.agentName &&
                                  A.jsx("p", {
                                    className: "text-sm text-red-500",
                                    children: f.agentName,
                                  }),
                              ],
                            }),
                            A.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                A.jsx(ml, {
                                  htmlFor: "location",
                                  children: x.location,
                                }),
                                A.jsx(so, {
                                  id: "location",
                                  type: "text",
                                  value: o.location,
                                  onChange: (M) =>
                                    E("location", M.target.value),
                                  className: f.location ? "border-red-500" : "",
                                  placeholder: x.pleaseEnterLocation,
                                }),
                                f.location &&
                                  A.jsx("p", {
                                    className: "text-sm text-red-500",
                                    children: f.location,
                                  }),
                              ],
                            }),
                            A.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                A.jsx(ml, {
                                  htmlFor: "email",
                                  children: x.email,
                                }),
                                A.jsx(so, {
                                  id: "email",
                                  type: "email",
                                  value: o.email,
                                  onChange: (M) => E("email", M.target.value),
                                  className: f.email ? "border-red-500" : "",
                                  placeholder: x.pleaseEnterValidEmail,
                                }),
                                f.email &&
                                  A.jsx("p", {
                                    className: "text-sm text-red-500",
                                    children: f.email,
                                  }),
                              ],
                            }),
                            A.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                A.jsx(ml, {
                                  htmlFor: "document",
                                  children: x.proofDocument,
                                }),
                                A.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    A.jsx(so, {
                                      id: "document",
                                      type: "file",
                                      onChange: w,
                                      className: `${
                                        f.document ? "border-red-500" : ""
                                      } file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100`,
                                      accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
                                    }),
                                    A.jsx(_2, {
                                      className:
                                        "absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none",
                                    }),
                                  ],
                                }),
                                o.document &&
                                  A.jsxs("p", {
                                    className: "text-sm text-green-600",
                                    children: [
                                      r === "ar"
                                        ? "تم رفع الملف:"
                                        : "File uploaded:",
                                      " ",
                                      o.document.name,
                                    ],
                                  }),
                                f.document &&
                                  A.jsx("p", {
                                    className: "text-sm text-red-500",
                                    children: f.document,
                                  }),
                              ],
                            }),
                            A.jsxs("div", {
                              className: "flex gap-3 pt-4",
                              children: [
                                A.jsx(He, {
                                  type: "button",
                                  variant: "outline",
                                  onClick: i,
                                  className: "flex-1",
                                  disabled: g,
                                  children: x.cancel,
                                }),
                                A.jsx(He, {
                                  type: "submit",
                                  className:
                                    "flex-1 bg-sky-600 hover:bg-sky-700",
                                  disabled: g,
                                  children: g
                                    ? A.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          A.jsx("div", {
                                            className:
                                              "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                                          }),
                                          r === "ar"
                                            ? "جاري الإرسال..."
                                            : "Submitting...",
                                        ],
                                      })
                                    : x.submitRequest,
                                }),
                              ],
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          }),
        })
      : null;
  },
  d3 = "/assets/tourist_property_1-BaiNcvrU.jpg",
  h3 = "/assets/tourist_property_2-Cx1RrfM9.jpg",
  Ka = "/assets/real_estate_office_1-CBtm49_1.jpeg",
  m0 = "/assets/modern_architecture_background-jjeU5ede.jpg";
function m3() {
  const [n, i] = S.useState(!1),
    [s, r] = S.useState("ar"),
    [o, d] = S.useState(!1),
    { scrollY: f } = GR(),
    h = qv(f, [0, 500], [0, 150]),
    p = qv(f, [0, 500], [0, 100]),
    m = ZR[s];
  S.useEffect(() => {
    document.documentElement.classList.toggle("dark", n),
      (document.documentElement.dir = s === "ar" ? "rtl" : "ltr");
  }, [n, s]);
  const g = () => i(!n),
    v = () => r(s === "ar" ? "en" : "ar"),
    x = () => {
      d(!0);
    },
    T = () => {
      window.open("https://your-mobile-app-url.com", "_blank");
    },
    D = [
      {
        icon: df,
        title: m.touristProperties,
        description: m.touristPropertiesDesc,
        image: d3,
      },
      {
        icon: l2,
        title: m.residentialProperties,
        description: m.residentialPropertiesDesc,
        image: h3,
      },
      {
        icon: T2,
        title: m.propertyManagement,
        description: m.propertyManagementDesc,
        image: Ka,
      },
      {
        icon: g2,
        title: m.consultation,
        description: m.consultationDesc,
        image: m0,
      },
    ],
    w = [
      {
        name: m.office1Name,
        description: m.office1Desc,
        rating: 4.9,
        image: Ka,
      },
      {
        name: m.office2Name,
        description: m.office2Desc,
        rating: 4.8,
        image: Ka,
      },
      {
        name: m.office3Name,
        description: m.office3Desc,
        rating: 4.7,
        image: Ka,
      },
      {
        name: m.office4Name,
        description: m.office4Desc,
        rating: 4.9,
        image: Ka,
      },
      {
        name: m.office5Name,
        description: m.office5Desc,
        rating: 4.8,
        image: Ka,
      },
    ];
  return A.jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [
      A.jsx("header", {
        className:
          "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b",
        children: A.jsx("div", {
          className: "container mx-auto px-4 py-4",
          children: A.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              A.jsxs("div", {
                className: "flex items-center space-x-4 rtl:space-x-reverse",
                children: [
                  A.jsx("div", {
                    className:
                      "w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center",
                    children: A.jsx(df, { className: "w-6 h-6 text-white" }),
                  }),
                  A.jsx("div", {
                    className: "text-xl font-bold text-sky-600",
                    children: "[مساحة للشعار والاسم]",
                  }),
                ],
              }),
              A.jsxs("nav", {
                className:
                  "hidden md:flex items-center space-x-8 rtl:space-x-reverse",
                children: [
                  A.jsx("a", {
                    href: "#home",
                    className:
                      "text-foreground hover:text-sky-600 transition-colors font-medium",
                    children: m.navHome,
                  }),
                  A.jsx("a", {
                    href: "#services",
                    className:
                      "text-foreground hover:text-sky-600 transition-colors font-medium",
                    children: m.navServices,
                  }),
                  A.jsx("a", {
                    href: "#offices",
                    className:
                      "text-foreground hover:text-sky-600 transition-colors font-medium",
                    children: m.navOffices,
                  }),
                  A.jsx("a", {
                    href: "#contact",
                    className:
                      "text-foreground hover:text-sky-600 transition-colors font-medium",
                    children: m.navContact,
                  }),
                ],
              }),
              A.jsxs("div", {
                className: "flex items-center space-x-4 rtl:space-x-reverse",
                children: [
                  A.jsx(He, {
                    variant: "outline",
                    className:
                      "bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100",
                    onClick: x,
                    children: m.loginAsAgent,
                  }),
                  A.jsxs(He, {
                    className:
                      "bg-sky-600 hover:bg-sky-700 flex items-center gap-2",
                    onClick: T,
                    children: [
                      A.jsx(A2, { className: "w-4 h-4" }),
                      m.loginAsUser,
                    ],
                  }),
                  A.jsx(He, {
                    variant: "ghost",
                    size: "icon",
                    onClick: g,
                    children: n
                      ? A.jsx(R2, { className: "w-5 h-5" })
                      : A.jsx(v2, { className: "w-5 h-5" }),
                  }),
                  A.jsx(He, {
                    variant: "ghost",
                    size: "icon",
                    onClick: v,
                    children: A.jsx(a2, { className: "w-5 h-5" }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      A.jsxs("section", {
        id: "home",
        className:
          "relative min-h-screen flex items-center justify-center overflow-hidden",
        children: [
          A.jsxs(tn.div, {
            className: "absolute inset-0 z-0",
            style: { y: h },
            children: [
              A.jsx("img", {
                src: m0,
                alt: "Background",
                className: "w-full h-full object-cover opacity-20",
              }),
              A.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20",
              }),
            ],
          }),
          A.jsxs(tn.div, {
            className: "relative z-10 text-center px-4 max-w-4xl mx-auto",
            style: { y: p },
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1 },
            children: [
              A.jsx(tn.h1, {
                className:
                  "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.2 },
                children: m.heroTitle,
              }),
              A.jsx(tn.p, {
                className:
                  "text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.4 },
                children: m.heroSubtitle,
              }),
              A.jsxs(tn.div, {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.6 },
                children: [
                  A.jsx(He, {
                    size: "lg",
                    className: "bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6",
                    children: m.exploreProperties,
                  }),
                  A.jsx(He, {
                    size: "lg",
                    variant: "outline",
                    className:
                      "border-sky-200 text-sky-700 hover:bg-sky-50 text-lg px-8 py-6",
                    children: m.contactUs,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      A.jsx("section", {
        id: "services",
        className: "py-20 px-4",
        children: A.jsxs("div", {
          className: "container mx-auto",
          children: [
            A.jsxs(tn.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              viewport: { once: !0 },
              children: [
                A.jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-4 text-sky-600",
                  children: m.servicesTitle,
                }),
                A.jsx("p", {
                  className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                  children: m.servicesSubtitle,
                }),
              ],
            }),
            A.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
              children: D.map((E, M) =>
                A.jsx(
                  tn.div,
                  {
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: M * 0.1 },
                    viewport: { once: !0 },
                    whileHover: { y: -10 },
                    children: A.jsxs(kf, {
                      className:
                        "h-full hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-200",
                      children: [
                        A.jsxs("div", {
                          className:
                            "relative h-48 overflow-hidden rounded-t-lg",
                          children: [
                            A.jsx("img", {
                              src: E.image,
                              alt: E.title,
                              className:
                                "w-full h-full object-cover transition-transform duration-300 hover:scale-110",
                            }),
                            A.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent",
                            }),
                            A.jsx("div", {
                              className: "absolute bottom-4 left-4",
                              children: A.jsx(E.icon, {
                                className: "w-8 h-8 text-white",
                              }),
                            }),
                          ],
                        }),
                        A.jsx(Uf, {
                          children: A.jsx(Hf, {
                            className: "text-sky-700",
                            children: E.title,
                          }),
                        }),
                        A.jsx(Yf, {
                          children: A.jsx(Pf, {
                            className: "text-base",
                            children: E.description,
                          }),
                        }),
                      ],
                    }),
                  },
                  M
                )
              ),
            }),
          ],
        }),
      }),
      A.jsx("section", {
        id: "offices",
        className: "py-20 px-4 bg-sky-50/50 dark:bg-sky-950/20",
        children: A.jsxs("div", {
          className: "container mx-auto",
          children: [
            A.jsxs(tn.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              viewport: { once: !0 },
              children: [
                A.jsx("h2", {
                  className: "text-4xl md:text-5xl font-bold mb-4 text-sky-600",
                  children: m.topOfficesTitle,
                }),
                A.jsx("p", {
                  className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                  children: m.topOfficesSubtitle,
                }),
              ],
            }),
            A.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6",
              children: w.map((E, M) =>
                A.jsx(
                  tn.div,
                  {
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: M * 0.1 },
                    viewport: { once: !0 },
                    whileHover: { y: -10 },
                    children: A.jsxs(kf, {
                      className:
                        "h-full hover:shadow-xl transition-all duration-300 border-sky-100 hover:border-sky-200",
                      children: [
                        A.jsxs("div", {
                          className:
                            "relative h-32 overflow-hidden rounded-t-lg",
                          children: [
                            A.jsx("img", {
                              src: E.image,
                              alt: E.name,
                              className: "w-full h-full object-cover",
                            }),
                            A.jsx("div", {
                              className: "absolute top-2 right-2",
                              children: A.jsxs(Pw, {
                                className: "bg-sky-600 text-white",
                                children: [
                                  A.jsx(M2, { className: "w-3 h-3 mr-1" }),
                                  E.rating,
                                ],
                              }),
                            }),
                          ],
                        }),
                        A.jsx(Uf, {
                          className: "pb-2",
                          children: A.jsx(Hf, {
                            className: "text-sm text-sky-700",
                            children: E.name,
                          }),
                        }),
                        A.jsx(Yf, {
                          children: A.jsx(Pf, {
                            className: "text-xs",
                            children: E.description,
                          }),
                        }),
                      ],
                    }),
                  },
                  M
                )
              ),
            }),
          ],
        }),
      }),
      A.jsx("footer", {
        id: "contact",
        className: "bg-sky-900 text-white py-16",
        children: A.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            A.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-8",
              children: [
                A.jsxs("div", {
                  className: "col-span-1 md:col-span-2",
                  children: [
                    A.jsxs("div", {
                      className:
                        "flex items-center space-x-4 rtl:space-x-reverse mb-4",
                      children: [
                        A.jsx("div", {
                          className:
                            "w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center",
                          children: A.jsx(df, {
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                        A.jsx("div", {
                          className: "text-2xl font-bold",
                          children: m.footerTitle,
                        }),
                      ],
                    }),
                    A.jsx("p", {
                      className: "text-sky-100 mb-6 max-w-md",
                      children: m.footerDesc,
                    }),
                    A.jsxs("div", {
                      className: "flex space-x-4 rtl:space-x-reverse",
                      children: [
                        A.jsx(He, {
                          size: "icon",
                          variant: "ghost",
                          className:
                            "text-sky-100 hover:text-white hover:bg-sky-800",
                          children: A.jsx(n2, { className: "w-5 h-5" }),
                        }),
                        A.jsx(He, {
                          size: "icon",
                          variant: "ghost",
                          className:
                            "text-sky-100 hover:text-white hover:bg-sky-800",
                          children: A.jsx(O2, { className: "w-5 h-5" }),
                        }),
                        A.jsx(He, {
                          size: "icon",
                          variant: "ghost",
                          className:
                            "text-sky-100 hover:text-white hover:bg-sky-800",
                          children: A.jsx(o2, { className: "w-5 h-5" }),
                        }),
                        A.jsx(He, {
                          size: "icon",
                          variant: "ghost",
                          className:
                            "text-sky-100 hover:text-white hover:bg-sky-800",
                          children: A.jsx(u2, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                A.jsxs("div", {
                  children: [
                    A.jsx("h3", {
                      className: "text-lg font-semibold mb-4",
                      children: m.quickLinks,
                    }),
                    A.jsxs("ul", {
                      className: "space-y-2",
                      children: [
                        A.jsx("li", {
                          children: A.jsx("a", {
                            href: "#",
                            className:
                              "text-sky-100 hover:text-white transition-colors",
                            children: m.home,
                          }),
                        }),
                        A.jsx("li", {
                          children: A.jsx("a", {
                            href: "#",
                            className:
                              "text-sky-100 hover:text-white transition-colors",
                            children: m.services,
                          }),
                        }),
                        A.jsx("li", {
                          children: A.jsx("a", {
                            href: "#",
                            className:
                              "text-sky-100 hover:text-white transition-colors",
                            children: m.about,
                          }),
                        }),
                        A.jsx("li", {
                          children: A.jsx("a", {
                            href: "#",
                            className:
                              "text-sky-100 hover:text-white transition-colors",
                            children: m.contact,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                A.jsxs("div", {
                  children: [
                    A.jsx("h3", {
                      className: "text-lg font-semibold mb-4",
                      children: m.contact,
                    }),
                    A.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        A.jsxs("div", {
                          className:
                            "flex items-center space-x-2 rtl:space-x-reverse",
                          children: [
                            A.jsx(x2, { className: "w-4 h-4" }),
                            A.jsx("span", {
                              className: "text-sky-100",
                              children: "+1 234 567 890",
                            }),
                          ],
                        }),
                        A.jsxs("div", {
                          className:
                            "flex items-center space-x-2 rtl:space-x-reverse",
                          children: [
                            A.jsx(d2, { className: "w-4 h-4" }),
                            A.jsx("span", {
                              className: "text-sky-100",
                              children: "info@realestate.com",
                            }),
                          ],
                        }),
                        A.jsxs("div", {
                          className:
                            "flex items-center space-x-2 rtl:space-x-reverse",
                          children: [
                            A.jsx(m2, { className: "w-4 h-4" }),
                            A.jsx("span", {
                              className: "text-sky-100",
                              children: "123 Real Estate St.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            A.jsx("div", {
              className: "border-t border-sky-800 mt-12 pt-8 text-center",
              children: A.jsxs("p", {
                className: "text-sky-100",
                children: ["© 2024 ", m.footerTitle, ". ", m.allRightsReserved],
              }),
            }),
          ],
        }),
      }),
      A.jsx(f3, {
        isOpen: o,
        onClose: () => d(!1),
        translations: m,
        language: s,
      }),
    ],
  });
}
JT.createRoot(document.getElementById("root")).render(
  A.jsx(S.StrictMode, { children: A.jsx(m3, {}) })
);
