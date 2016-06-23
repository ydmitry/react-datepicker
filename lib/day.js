'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _date_utils = require('./date_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Day: {
    displayName: 'Day'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/day.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var Day = _wrapComponent('Day')(_react3.default.createClass({
  displayName: 'Day',

  propTypes: {
    day: _react3.default.PropTypes.object.isRequired,
    endDate: _react3.default.PropTypes.object,
    excludeDates: _react3.default.PropTypes.array,
    filterDate: _react3.default.PropTypes.func,
    includeDates: _react3.default.PropTypes.array,
    maxDate: _react3.default.PropTypes.object,
    minDate: _react3.default.PropTypes.object,
    month: _react3.default.PropTypes.number,
    onClick: _react3.default.PropTypes.func,
    selected: _react3.default.PropTypes.object,
    startDate: _react3.default.PropTypes.object,
    pricesLoading: _react3.default.PropTypes.bool,
    prices: _react3.default.PropTypes.object
  },

  handleClick: function handleClick(event) {
    if (!this.isDisabled() && this.props.onClick) {
      this.props.onClick(event);
    }
  },
  isSameDay: function isSameDay(other) {
    return (0, _date_utils.isSameDay)(this.props.day, other);
  },
  isDisabled: function isDisabled() {
    return (0, _date_utils.isDayDisabled)(this.props.day, this.props);
  },
  isInRange: function isInRange() {
    var _props = this.props;
    var day = _props.day;
    var startDate = _props.startDate;
    var endDate = _props.endDate;

    if (!startDate || !endDate) return false;

    var before = startDate.clone().startOf('day').subtract(1, 'seconds');
    var after = endDate.clone().startOf('day').add(1, 'seconds');
    return day.clone().startOf('day').isBetween(before, after);
  },
  isWeekend: function isWeekend() {
    var weekday = this.props.day.day();
    return weekday === 0 || weekday === 6;
  },
  isOutsideMonth: function isOutsideMonth() {
    return this.props.month !== undefined && this.props.month !== this.props.day.month();
  },
  getClassNames: function getClassNames() {
    return (0, _classnames2.default)('react-datepicker__day', {
      'react-datepicker__day--disabled': this.isDisabled(),
      'react-datepicker__day--selected': this.isSameDay(this.props.selected),
      'react-datepicker__day--in-range': this.isInRange(),
      'react-datepicker__day--today': this.isSameDay((0, _moment2.default)()),
      'react-datepicker__day--weekend': this.isWeekend(),
      'react-datepicker__day--outside-month': this.isOutsideMonth()
    });
  },
  render: function render() {
    var prices = this.props.prices || {};
    var day = this.props.day;
    var dayFormatted = (0, _moment2.default)(day).format('YYYY-MM-DD');
    console.log('prices', prices);
    return _react3.default.createElement(
      'div',
      { className: this.getClassNames(), onClick: this.handleClick },
      _react3.default.createElement(
        'div',
        { className: 'react-datepicker__day-number' },
        day.date()
      ),
      this.props.pricesLoading ? _react3.default.createElement('span', { className: 'react-datepicker__loading' }) : prices[dayFormatted] ? _react3.default.createElement(
        'span',
        { className: 'react-datepicker__price' },
        prices[dayFormatted],
        '$'
      ) : null
    );
  }
}));

module.exports = Day;
