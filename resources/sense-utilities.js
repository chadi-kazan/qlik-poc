/**
 * enigma.js v2.4.0
 * Copyright (c) 2018 QlikTech International AB
 * This library is licensed under MIT - See the LICENSE file for full details
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.senseUtilities = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.


  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  function stringifyPrimitive(v) {
    switch (typeof v) {
      case 'string':
        return v;

      case 'boolean':
        return v ? 'true' : 'false';

      case 'number':
        return isFinite(v) ? v : '';

      default:
        return '';
    }
  }

  function stringify (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }

    if (typeof obj === 'object') {
      return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) {
          return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);

    }

    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq +
           encodeURIComponent(stringifyPrimitive(obj));
  }
  function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }

  var objectKeys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  };

  function parse(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr, vstr, k, v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  }var QueryString = {
    encode: stringify,
    stringify: stringify,
    decode: parse,
    parse: parse
  };

  /**
  * The Qlik Sense configuration object.
  * @typedef {Object} SenseConfiguration
  * @property {String} [appId] The app id. If omitted, only the global object is returned.
  *                            Otherwise both global and app object are returned.
  * @property {Boolean} [noData=false] Whether to open the app without data.
  * @property {Boolean} [secure=true] Set to false if an unsecure WebSocket should be used.
  * @property {String} [host] Host address.
  * @property {Number} [port] Port to connect to.
  * @property {String} [prefix="/"] The absolute base path to use when connecting.
  *                             Used for proxy prefixes.
  * @property {String} [subpath=""] The subpath.
  * @property {String} [route=""] Used to instruct Proxy to route to the correct receiver.
  * @property {String} [identity=""] Identity to use.
  * @property {Object} [urlParams={}] Used to add parameters to the WebSocket URL.
  * @property {Number} [ttl] A value in seconds that QIX Engine should keep the session
  *                             alive after socket disconnect (only works if QIX Engine supports it).
  */

  function replaceLeadingAndTrailingSlashes(str) {
    return str.replace(/(^[/]+)|([/]+$)/g, '');
  }

  var SenseUtilities =
  /*#__PURE__*/
  function () {
    function SenseUtilities() {
      _classCallCheck(this, SenseUtilities);
    }

    _createClass(SenseUtilities, null, [{
      key: "configureDefaults",

      /**
      * Ensures that the configuration has defaults set.
      *
      * @private
      * @param {SenseConfiguration} senseConfig The configuration to ensure defaults on.
      */
      value: function configureDefaults(senseConfig) {
        if (!senseConfig.host) {
          senseConfig.host = 'localhost';
        }

        if (typeof senseConfig.secure === 'undefined') {
          senseConfig.secure = true;
        }

        if (!senseConfig.appId && !senseConfig.route) {
          senseConfig.route = 'app/engineData';
        }

        if (typeof senseConfig.noData === 'undefined') {
          senseConfig.noData = false;
        }
      }
      /**
      * Function used to build an URL.
      * @param {SenseConfiguration} urlConfig - The URL configuration object.
      * @returns {String} Returns the websocket URL.
      */

    }, {
      key: "buildUrl",
      value: function buildUrl(urlConfig) {
        SenseUtilities.configureDefaults(urlConfig);
        var secure = urlConfig.secure,
            host = urlConfig.host,
            port = urlConfig.port,
            prefix = urlConfig.prefix,
            subpath = urlConfig.subpath,
            route = urlConfig.route,
            identity = urlConfig.identity,
            urlParams = urlConfig.urlParams,
            ttl = urlConfig.ttl,
            appId = urlConfig.appId;
        var url = '';
        url += "".concat(secure ? 'wss' : 'ws', "://");
        url += host || 'localhost';

        if (port) {
          url += ":".concat(port);
        }

        if (prefix) {
          url += "/".concat(replaceLeadingAndTrailingSlashes(prefix));
        }

        if (subpath) {
          url += "/".concat(replaceLeadingAndTrailingSlashes(subpath));
        }

        if (route) {
          url += "/".concat(replaceLeadingAndTrailingSlashes(route));
        } else if (appId && appId !== '') {
          url += "/app/".concat(encodeURIComponent(appId));
        }

        if (identity) {
          url += "/identity/".concat(encodeURIComponent(identity));
        }

        if (ttl) {
          url += "/ttl/".concat(ttl);
        }

        if (urlParams) {
          url += "?".concat(QueryString.stringify(urlParams));
        }

        return url;
      }
    }]);

    return SenseUtilities;
  }();

  return SenseUtilities;

})));
//# sourceMappingURL=sense-utilities.js.map
