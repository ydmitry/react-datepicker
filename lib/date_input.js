'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _date_utils = require('./date_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  DateInput: {
    displayName: 'DateInput'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/date_input.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var DateInput = _wrapComponent('DateInput')(_react3.default.createClass({
  displayName: 'DateInput',

  propTypes: {
    date: _react3.default.PropTypes.object,
    dateFormat: _react3.default.PropTypes.string,
    disabled: _react3.default.PropTypes.bool,
    excludeDates: _react3.default.PropTypes.array,
    filterDate: _react3.default.PropTypes.func,
    includeDates: _react3.default.PropTypes.array,
    locale: _react3.default.PropTypes.string,
    maxDate: _react3.default.PropTypes.object,
    minDate: _react3.default.PropTypes.object,
    onBlur: _react3.default.PropTypes.func,
    onChange: _react3.default.PropTypes.func,
    onChangeDate: _react3.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dateFormat: 'L'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.safeDateFormat(this.props)
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (!(0, _date_utils.isSameDay)(newProps.date, this.props.date) || newProps.locale !== this.props.locale || newProps.dateFormat !== this.props.dateFormat) {
      this.setState({
        value: this.safeDateFormat(newProps)
      });
    }
  },
  handleChange: function handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    if (!event.isDefaultPrevented()) {
      this.handleChangeDate(event.target.value);
    }
  },
  handleChangeDate: function handleChangeDate(value) {
    if (this.props.onChangeDate) {
      var date = (0, _moment2.default)(value, this.props.dateFormat, this.props.locale || _moment2.default.locale(), true);
      if (date.isValid() && !(0, _date_utils.isDayDisabled)(date, this.props)) {
        this.props.onChangeDate(date);
      } else if (value === '') {
        this.props.onChangeDate(null);
      }
    }
    this.setState({ value: value });
  },
  safeDateFormat: function safeDateFormat(props) {
    return props.date && props.date.clone().locale(props.locale || _moment2.default.locale()).format(props.dateFormat) || '';
  },
  handleBlur: function handleBlur(event) {
    this.setState({
      value: this.safeDateFormat(this.props)
    });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  },
  focus: function focus() {
    this.refs.input.focus();
  },
  render: function render() {
    return _react3.default.createElement('input', _extends({
      ref: 'input',
      type: 'text'
    }, this.props, {
      value: this.state.value,
      onBlur: this.handleBlur,
      onChange: this.handleChange }));
  }
}));

module.exports = DateInput;
