import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/react-iframe/dist/es/iframe.js
var import_react = __toESM(require_react());
var import_object_assign = __toESM(require_object_assign());
var Iframe = ({ url, allowFullScreen, position, display, height, width, overflow, styles, onLoad, onMouseOver, onMouseOut, scrolling, id, frameBorder, ariaHidden, sandbox, allow, className, title, ariaLabel, ariaLabelledby, name, target, loading, importance, referrerpolicy, allowpaymentrequest, src, key }) => {
  const defaultProps = (0, import_object_assign.default)({
    src: src || url,
    target: target || null,
    style: {
      position: position || null,
      display: display || "initial",
      overflow: overflow || null
    },
    scrolling: scrolling || null,
    allowpaymentrequest: allowpaymentrequest || null,
    importance: importance || null,
    sandbox: sandbox && [...sandbox].join(" ") || null,
    loading: loading || null,
    styles: styles || null,
    name: name || null,
    className: className || null,
    allowFullScreen: "allowFullScreen",
    referrerpolicy: referrerpolicy || null,
    title: title || null,
    allow: allow || null,
    id: id || null,
    "aria-labelledby": ariaLabelledby || null,
    "aria-hidden": ariaHidden || null,
    "aria-label": ariaLabel || null,
    width: width || null,
    height: height || null,
    onLoad: onLoad || null,
    onMouseOver: onMouseOver || null,
    onMouseOut: onMouseOut || null,
    key: key || "iframe"
  });
  let props = /* @__PURE__ */ Object.create(null);
  for (let prop of Object.keys(defaultProps)) {
    if (defaultProps[prop] != null) {
      props[prop] = defaultProps[prop];
    }
  }
  for (let i of Object.keys(props.style)) {
    if (props.style[i] == null) {
      delete props.style[i];
    }
  }
  if (props.styles) {
    for (let key2 of Object.keys(props.styles)) {
      if (props.styles.hasOwnProperty(key2)) {
        props.style[key2] = props.styles[key2];
      }
      if (Object.keys(props.styles).pop() == key2) {
        delete props.styles;
      }
    }
  }
  if (allowFullScreen) {
    if ("allow" in props) {
      const currentAllow = props.allow.replace("fullscreen", "");
      props.allow = `fullscreen ${currentAllow.trim()}`.trim();
    } else {
      props.allow = "fullscreen";
    }
  }
  if (frameBorder >= 0) {
    if (!props.style.hasOwnProperty("border")) {
      props.style.border = frameBorder;
    }
  }
  return import_react.default.createElement("iframe", Object.assign({}, props));
};
var iframe_default = Iframe;
export {
  iframe_default as default
};
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-iframe.js.map
