'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _week = require('./week');

var _week2 = _interopRequireDefault(_week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Month: {
    displayName: 'Month'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/month.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var Month = _wrapComponent('Month')(_react3.default.createClass({
  displayName: 'Month',

  propTypes: {
    day: _react3.default.PropTypes.object.isRequired,
    endDate: _react3.default.PropTypes.object,
    excludeDates: _react3.default.PropTypes.array,
    filterDate: _react3.default.PropTypes.func,
    includeDates: _react3.default.PropTypes.array,
    maxDate: _react3.default.PropTypes.object,
    minDate: _react3.default.PropTypes.object,
    onDayClick: _react3.default.PropTypes.func,
    selected: _react3.default.PropTypes.object,
    startDate: _react3.default.PropTypes.object,
    pricesLoading: _react3.default.PropTypes.bool,
    prices: _react3.default.PropTypes.object
  },

  handleDayClick: function handleDayClick(day) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day);
    }
  },
  isWeekInMonth: function isWeekInMonth(startOfWeek) {
    var day = this.props.day;
    var endOfWeek = startOfWeek.clone().add(6, 'days');
    return startOfWeek.isSame(day, 'month') || endOfWeek.isSame(day, 'month');
  },
  renderWeeks: function renderWeeks() {
    var _this = this;

    var startOfMonth = this.props.day.clone().startOf('month').startOf('week');
    return [0, 1, 2, 3, 4, 5].map(function (offset) {
      return startOfMonth.clone().add(offset, 'weeks');
    }).filter(function (startOfWeek) {
      return _this.isWeekInMonth(startOfWeek);
    }).map(function (startOfWeek, offset) {
      return _react3.default.createElement(_week2.default, {
        key: offset,
        day: startOfWeek,
        month: _this.props.day.month(),
        onDayClick: _this.handleDayClick,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        excludeDates: _this.props.excludeDates,
        includeDates: _this.props.includeDates,
        filterDate: _this.props.filterDate,
        selected: _this.props.selected,
        startDate: _this.props.startDate,
        pricesLoading: _this.props.pricesLoading,
        prices: _this.props.prices,
        endDate: _this.props.endDate });
    });
  },
  render: function render() {
    return _react3.default.createElement(
      'div',
      { className: 'react-datepicker__month' },
      this.renderWeeks()
    );
  }
}));

module.exports = Month;
