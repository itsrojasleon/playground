import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../common/index-04edb6a1.js';
import { p as propTypes } from '../common/index-ce016b4a.js';

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var interopRequireWildcard = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectSpread2 = createCommonjsModule(function (module) {
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var Loading_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = interopRequireDefault(react);

var loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: loadingStyles
  }, content);
}

var _default = Loading;
exports.default = _default;
});

var Loading = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Loading = interopRequireDefault(Loading_1);

var _default = _Loading.default;
exports.default = _default;
});

var styles_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};
var _default = styles;
exports.default = _default;
});

var MonacoContainer_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = interopRequireDefault(objectSpread2);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);

var _Loading = interopRequireDefault(Loading);

var _styles = interopRequireDefault(styles_1);

// ** forwardref render functions do not support proptypes or defaultprops **
// one of the reasons why we use a separate prop for passing ref instead of using forwardref
function MonacoContainer(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      isEditorReady = _ref2.isEditorReady,
      loading = _ref2.loading,
      _ref = _ref2._ref,
      className = _ref2.className,
      wrapperClassName = _ref2.wrapperClassName;
  return /*#__PURE__*/_react.default.createElement("section", {
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _styles.default.wrapper), {}, {
      width: width,
      height: height
    }),
    className: wrapperClassName
  }, !isEditorReady && /*#__PURE__*/_react.default.createElement(_Loading.default, {
    content: loading
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: _ref,
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _styles.default.fullWidth), !isEditorReady && _styles.default.hide),
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  loading: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]).isRequired,
  isEditorReady: _propTypes.default.bool.isRequired,
  className: _propTypes.default.string,
  wrapperClassName: _propTypes.default.string
};
var _default = MonacoContainer;
exports.default = _default;
});

var MonacoContainer = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _MonacoContainer = interopRequireDefault(MonacoContainer_1);

var _default = /*#__PURE__*/(0, react.memo)(_MonacoContainer.default);

exports.default = _default;
});

var noop_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var noop = function noop() {};

var _default = noop;
exports.default = _default;
});

var compose_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

var _default = compose;
exports.default = _default;
});

var deepMerge = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = interopRequireDefault(objectSpread2);

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, target), source);
}

var _default = merge;
exports.default = _default;
});

var makeCancelable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise.catch(reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

var _default = makeCancelable;
exports.default = _default;
});

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

var config_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs'
  }
};
var _default = config;
exports.default = _default;
});

var monaco = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

var _slicedToArray2 = interopRequireDefault(slicedToArray);

var _stateLocal = interopRequireDefault(index);

var _config = interopRequireDefault(config_1);



var _state$create = _stateLocal.default.create({
  config: _config.default,
  isInitialized: false,
  configScriptSrc: null,
  resolve: null,
  reject: null
}),
    _state$create2 = (0, _slicedToArray2.default)(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];

var MONACO_INIT = 'monaco_init';

function config(_ref) {
  var src = _ref.src,
      config = (0, _objectWithoutProperties2.default)(_ref, ["src"]);
  setState(function (state) {
    return {
      configScriptSrc: src,
      config: (0, utils.deepMerge)(state.config, validateConfig(config))
    };
  });
}

function init() {
  var state = getState(function (_ref2) {
    var isInitialized = _ref2.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      return Promise.resolve(window.monaco);
    }

    document.addEventListener(MONACO_INIT, handleConfigScriptLoad);
    (0, utils.compose)(injectScripts, createMonacoLoaderScript, createConfigScript)();
    setState({
      isInitialized: true
    });
  }

  return (0, utils.makeCancelable)(wrapperPromise);
}

function validateConfig(config) {
  if (config.urls) {
    informAboutDepreciation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}

function injectScripts(script) {
  return document.body.appendChild(script);
}

function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}

function handleConfigScriptLoad() {
  var state = getState(function (_ref3) {
    var resolve = _ref3.resolve;
    return {
      resolve: resolve
    };
  });
  document.removeEventListener(MONACO_INIT, handleConfigScriptLoad);
  state.resolve(window.monaco);
}

function createMonacoLoaderScript(configScript) {
  var state = getState(function (_ref4) {
    var config = _ref4.config,
        reject = _ref4.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return injectScripts(configScript);
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}

function createConfigScript() {
  var state = getState(function (_ref5) {
    var configScriptSrc = _ref5.configScriptSrc,
        config = _ref5.config,
        reject = _ref5.reject;
    return {
      configScriptSrc: configScriptSrc,
      config: config,
      reject: reject
    };
  });
  var configScript = createScript();

  if (state.configScriptSrc) {
    // it will be helpfull in case of CSP, which doesn't allow
    // inline script execution
    configScript.src = state.configScriptSrc;
  } else {
    configScript.innerHTML = "\n      require.config(".concat(JSON.stringify(state.config), ");\n      require(['vs/editor/editor.main'], function() {\n        document.dispatchEvent(new Event('monaco_init'));\n      });\n    ");
  }

  configScript.onerror = state.reject;
  return configScript;
}

function informAboutDepreciation() {
  console.warn("Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-react#config\n  ");
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var _default = {
  config: config,
  init: init
};
exports.default = _default;
});

var utils = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function get() {
    return _noop.default;
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _compose.default;
  }
});
Object.defineProperty(exports, "deepMerge", {
  enumerable: true,
  get: function get() {
    return _deepMerge.default;
  }
});
Object.defineProperty(exports, "makeCancelable", {
  enumerable: true,
  get: function get() {
    return _makeCancelable.default;
  }
});
Object.defineProperty(exports, "monaco", {
  enumerable: true,
  get: function get() {
    return _monaco.default;
  }
});

var _noop = interopRequireDefault(noop_1);

var _compose = interopRequireDefault(compose_1);

var _deepMerge = interopRequireDefault(deepMerge);

var _makeCancelable = interopRequireDefault(makeCancelable_1);

var _monaco = interopRequireDefault(monaco);
});

var useMount_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var useMount = function useMount(effect) {
  return (0, react.useEffect)(effect, []);
};

var _default = useMount;
exports.default = _default;
});

var useUpdate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var useUpdate = function useUpdate(effect, deps) {
  var applyChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var isInitialMount = (0, react.useRef)(true);
  (0, react.useEffect)(isInitialMount.current || !applyChanges ? function () {
    isInitialMount.current = false;
  } : effect, deps);
};

var _default = useUpdate;
exports.default = _default;
});

var hooks = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useMount", {
  enumerable: true,
  get: function get() {
    return _useMount.default;
  }
});
Object.defineProperty(exports, "useUpdate", {
  enumerable: true,
  get: function get() {
    return _useUpdate.default;
  }
});

var _useMount = interopRequireDefault(useMount_1);

var _useUpdate = interopRequireDefault(useUpdate_1);
});

var themes_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var themes = {
  'night-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#202124'
    }
  }
};
var _default = themes;
exports.default = _default;
});

var Editor_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = interopRequireDefault(objectSpread2);

var _slicedToArray2 = interopRequireDefault(slicedToArray);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _MonacoContainer = interopRequireDefault(MonacoContainer);





var _themes = interopRequireDefault(themes_1);

function Editor(_ref) {
  var value = _ref.value,
      language = _ref.language,
      editorDidMount = _ref.editorDidMount,
      theme = _ref.theme,
      line = _ref.line,
      width = _ref.width,
      height = _ref.height,
      loading = _ref.loading,
      options = _ref.options,
      overrideServices = _ref.overrideServices,
      _isControlledMode = _ref._isControlledMode,
      className = _ref.className,
      wrapperClassName = _ref.wrapperClassName;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isEditorReady = _useState2[0],
      setIsEditorReady = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isMonacoMounting = _useState4[0],
      setIsMonacoMounting = _useState4[1];

  var editorRef = (0, _react.useRef)(null);
  var monacoRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var editorDidMountRef = (0, _react.useRef)(editorDidMount);
  (0, hooks.useMount)(function () {
    var cancelable = utils.monaco.init();

    cancelable.then(function (monaco) {
      return (monacoRef.current = monaco) && setIsMonacoMounting(false);
    }).catch(function (error) {
      return (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error);
    });
    return function () {
      return editorRef.current ? disposeEditor() : cancelable.cancel();
    };
  });
  (0, hooks.useUpdate)(function () {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  (0, hooks.useUpdate)(function () {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);

        if (_isControlledMode) {
          var model = editorRef.current.getModel();
          model.forceTokenization(model.getLineCount());
        }

        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  (0, hooks.useUpdate)(function () {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  (0, hooks.useUpdate)(function () {
    editorRef.current.setScrollPosition({
      scrollTop: line
    });
  }, [line], isEditorReady);
  (0, hooks.useUpdate)(function () {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  var createEditor = (0, _react.useCallback)(function () {
    editorRef.current = monacoRef.current.editor.create(containerRef.current, (0, _objectSpread2.default)({
      value: value,
      language: language,
      automaticLayout: true
    }, options), overrideServices);
    monacoRef.current.editor.defineTheme('dark', _themes.default['night-dark']);
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [language, options, overrideServices, theme, value]);
  (0, _react.useEffect)(function () {
    if (isEditorReady) {
      editorDidMountRef.current(editorRef.current.getValue.bind(editorRef.current), editorRef.current);
    }
  }, [isEditorReady]);
  (0, _react.useEffect)(function () {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  var disposeEditor = function disposeEditor() {
    return editorRef.current.dispose();
  };

  return /*#__PURE__*/_react.default.createElement(_MonacoContainer.default, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

Editor.propTypes = {
  value: _propTypes.default.string,
  language: _propTypes.default.string,
  editorDidMount: _propTypes.default.func,
  theme: _propTypes.default.string,
  line: _propTypes.default.number,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  loading: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  options: _propTypes.default.object,
  className: _propTypes.default.string,
  wrapperClassName: _propTypes.default.string,
  overrideServices: _propTypes.default.object,
  _isControlledMode: _propTypes.default.bool
};
Editor.defaultProps = {
  editorDidMount: utils.noop,
  theme: 'light',
  width: '100%',
  height: '100%',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  _isControlledMode: false
};
var _default = Editor;
exports.default = _default;
});

var Editor = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _Editor = interopRequireDefault(Editor_1);

var _default = /*#__PURE__*/(0, react.memo)(_Editor.default);

exports.default = _default;
});

var DiffEditor_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = interopRequireDefault(objectSpread2);

var _slicedToArray2 = interopRequireDefault(slicedToArray);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _MonacoContainer = interopRequireDefault(MonacoContainer);





var _themes = interopRequireDefault(themes_1);

function DiffEditor(_ref) {
  var original = _ref.original,
      modified = _ref.modified,
      language = _ref.language,
      originalLanguage = _ref.originalLanguage,
      modifiedLanguage = _ref.modifiedLanguage,
      editorDidMount = _ref.editorDidMount,
      theme = _ref.theme,
      width = _ref.width,
      height = _ref.height,
      loading = _ref.loading,
      options = _ref.options,
      className = _ref.className,
      wrapperClassName = _ref.wrapperClassName;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isEditorReady = _useState2[0],
      setIsEditorReady = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isMonacoMounting = _useState4[0],
      setIsMonacoMounting = _useState4[1];

  var editorRef = (0, _react.useRef)(null);
  var monacoRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var editorDidMountRef = (0, _react.useRef)(editorDidMount);
  (0, hooks.useMount)(function () {
    var cancelable = utils.monaco.init();

    cancelable.then(function (monaco) {
      return (monacoRef.current = monaco) && setIsMonacoMounting(false);
    }).catch(function (error) {
      return (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error);
    });
    return function () {
      return editorRef.current ? disposeEditor() : cancelable.cancel();
    };
  });
  (0, hooks.useUpdate)(function () {
    editorRef.current.getModel().modified.setValue(modified);
  }, [modified], isEditorReady);
  (0, hooks.useUpdate)(function () {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  (0, hooks.useUpdate)(function () {
    var _editorRef$current$ge = editorRef.current.getModel(),
        original = _editorRef$current$ge.original,
        modified = _editorRef$current$ge.modified;

    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  (0, hooks.useUpdate)(function () {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  (0, hooks.useUpdate)(function () {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  var setModels = (0, _react.useCallback)(function () {
    var originalModel = monacoRef.current.editor.createModel(original, originalLanguage || language);
    var modifiedModel = monacoRef.current.editor.createModel(modified, modifiedLanguage || language);
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage]);
  var createEditor = (0, _react.useCallback)(function () {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, (0, _objectSpread2.default)({
      automaticLayout: true
    }, options));
    setModels();
    monacoRef.current.editor.defineTheme('dark', _themes.default['night-dark']);
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  (0, _react.useEffect)(function () {
    if (isEditorReady) {
      var _editorRef$current$ge2 = editorRef.current.getModel(),
          _original = _editorRef$current$ge2.original,
          _modified = _editorRef$current$ge2.modified;

      editorDidMountRef.current(_modified.getValue.bind(_modified), _original.getValue.bind(_original), editorRef.current);
    }
  }, [isEditorReady]);
  (0, _react.useEffect)(function () {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  var disposeEditor = function disposeEditor() {
    return editorRef.current.dispose();
  };

  return /*#__PURE__*/_react.default.createElement(_MonacoContainer.default, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

DiffEditor.propTypes = {
  original: _propTypes.default.string,
  modified: _propTypes.default.string,
  language: _propTypes.default.string,
  originalLanguage: _propTypes.default.string,
  modifiedLanguage: _propTypes.default.string,
  editorDidMount: _propTypes.default.func,
  theme: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  loading: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  options: _propTypes.default.object,
  className: _propTypes.default.string,
  wrapperClassName: _propTypes.default.string
};
DiffEditor.defaultProps = {
  editorDidMount: utils.noop,
  theme: 'light',
  width: '100%',
  height: '100%',
  loading: 'Loading...',
  options: {}
};
var _default = DiffEditor;
exports.default = _default;
});

var DiffEditor = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _DiffEditor = interopRequireDefault(DiffEditor_1);

var _default = /*#__PURE__*/(0, react.memo)(_DiffEditor.default);

exports.default = _default;
});

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var ControlledEditor_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

var _react = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _ = interopRequireDefault(lib);



function ControlledEditor(_ref) {
  var providedValue = _ref.value,
      onChange = _ref.onChange,
      editorDidMount = _ref.editorDidMount,
      props = (0, _objectWithoutProperties2.default)(_ref, ["value", "onChange", "editorDidMount"]);
  var editor = (0, _react.useRef)(null);
  var listener = (0, _react.useRef)(null);
  var value = (0, _react.useRef)(providedValue); // to avoid unnecessary updates in `handleEditorModelChange`
  // (that depends on the `current value` and will trigger to update `attachChangeEventListener`,
  // thus, the listener will be disposed and attached again for every value change)
  // the current value is stored in ref (useRef) instead of being a dependency of `handleEditorModelChange`

  value.current = providedValue;
  var handleEditorModelChange = (0, _react.useCallback)(function (event) {
    var editorValue = editor.current.getValue();

    if (value.current !== editorValue) {
      var directChange = onChange(event, editorValue);

      if (typeof directChange === 'string' && editorValue !== directChange) {
        editor.current.setValue(directChange);
      }
    }
  }, [onChange]);
  var attachChangeEventListener = (0, _react.useCallback)(function () {
    var _editor$current;

    listener.current = (_editor$current = editor.current) === null || _editor$current === void 0 ? void 0 : _editor$current.onDidChangeModelContent(handleEditorModelChange);
  }, [handleEditorModelChange]);
  (0, _react.useEffect)(function () {
    attachChangeEventListener();
    return function () {
      var _listener$current;

      return (_listener$current = listener.current) === null || _listener$current === void 0 ? void 0 : _listener$current.dispose();
    };
  }, [attachChangeEventListener]);
  var handleEditorDidMount = (0, _react.useCallback)(function (getValue, _editor) {
    editor.current = _editor;
    attachChangeEventListener();
    editorDidMount(getValue, _editor);
  }, [attachChangeEventListener, editorDidMount]);
  return /*#__PURE__*/_react.default.createElement(_.default, (0, _extends2.default)({
    value: providedValue,
    editorDidMount: handleEditorDidMount,
    _isControlledMode: true
  }, props));
}

ControlledEditor.propTypes = {
  value: _propTypes.default.string,
  editorDidMount: _propTypes.default.func,
  onChange: _propTypes.default.func
};
ControlledEditor.defaultProps = {
  editorDidMount: utils.noop,
  onChange: utils.noop
};
var _default = ControlledEditor;
exports.default = _default;
});

var ControlledEditor = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _ControlledEditor = interopRequireDefault(ControlledEditor_1);

var _default = /*#__PURE__*/(0, react.memo)(_ControlledEditor.default);

exports.default = _default;
});

var lib = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DiffEditor", {
  enumerable: true,
  get: function get() {
    return _DiffEditor.default;
  }
});
Object.defineProperty(exports, "ControlledEditor", {
  enumerable: true,
  get: function get() {
    return _ControlledEditor.default;
  }
});
Object.defineProperty(exports, "monaco", {
  enumerable: true,
  get: function get() {
    return utils.monaco;
  }
});
exports.default = void 0;

var _Editor = interopRequireDefault(Editor);

var _DiffEditor = interopRequireDefault(DiffEditor);

var _ControlledEditor = interopRequireDefault(ControlledEditor);



var _default = _Editor.default;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(lib);

export default __pika_web_default_export_for_treeshaking__;
