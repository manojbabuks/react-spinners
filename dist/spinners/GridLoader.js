(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'domkit/appendVendorPrefix', 'domkit/insertKeyframesRule'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('domkit/appendVendorPrefix'), require('domkit/insertKeyframesRule'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.appendVendorPrefix, global.insertKeyframesRule);
    global.GridLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _appendVendorPrefix, _insertKeyframesRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

  var _insertKeyframesRule2 = _interopRequireDefault(_insertKeyframesRule);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
   * @type {object}
   */
  var keyframes = {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(0.5)',
      opacity: 0.7
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }

    /**
     * @type {string}
     */
  };var animationName = (0, _insertKeyframesRule2.default)(keyframes);

  /**
   * @param  {number} top top position
   * @return {number} random value
   */
  var random = function random(top) {
    return Math.random() * top;
  };

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      _classCallCheck(this, Loader);

      return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
    }

    _createClass(Loader, [{
      key: 'getBallStyle',
      value: function getBallStyle() {
        return {
          backgroundColor: this.props.color,
          width: this.props.size,
          height: this.props.size,
          margin: this.props.margin,
          borderRadius: '100%'
        };
      }
    }, {
      key: 'getAnimationStyle',
      value: function getAnimationStyle(i) {
        var animationDuration = random(100) / 100 + 0.6 + 's';
        var animationDelay = random(100) / 100 - 0.2 + 's';

        var animation = [animationName, animationDuration, animationDelay, 'infinite', 'ease'].join(' ');
        var animationFillMode = 'both';

        return {
          animation: animation,
          animationFillMode: animationFillMode
        };
      }
    }, {
      key: 'getStyle',
      value: function getStyle(i) {
        return (0, _appendVendorPrefix2.default)(this.getBallStyle(i), this.getAnimationStyle(i), {
          display: 'inline-block'
        });
      }
    }, {
      key: 'renderLoader',
      value: function renderLoader(loading) {
        if (loading) {
          var style = {
            width: parseFloat(this.props.size) * 3 + parseFloat(this.props.margin) * 6,
            fontSize: 0
          };

          return _react2.default.createElement(
            'div',
            { id: this.props.id, className: this.props.className },
            _react2.default.createElement(
              'div',
              { style: style },
              _react2.default.createElement('div', { style: this.getStyle(1) }),
              _react2.default.createElement('div', { style: this.getStyle(2) }),
              _react2.default.createElement('div', { style: this.getStyle(3) }),
              _react2.default.createElement('div', { style: this.getStyle(4) }),
              _react2.default.createElement('div', { style: this.getStyle(5) }),
              _react2.default.createElement('div', { style: this.getStyle(6) }),
              _react2.default.createElement('div', { style: this.getStyle(7) }),
              _react2.default.createElement('div', { style: this.getStyle(8) }),
              _react2.default.createElement('div', { style: this.getStyle(9) })
            )
          );
        }

        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        return this.renderLoader(this.props.loading);
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  /**
   * @type {object}
   */
  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    size: _propTypes2.default.number,
    margin: _propTypes2.default.number

    /**
     * @type {object}
     */
  };Loader.defaultProps = {
    loading: true,
    color: '#ffffff',
    size: 15,
    margin: 2
  };

  exports.default = Loader;
});