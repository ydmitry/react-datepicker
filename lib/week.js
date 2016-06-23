'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Week: {
    displayName: 'Week'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/week.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var Week = _wrapComponent('Week')(_react3.default.createClass({
  displayName: 'Week',

  propTypes: {
    day: _react3.default.PropTypes.object.isRequired,
    endDate: _react3.default.PropTypes.object,
    excludeDates: _react3.default.PropTypes.array,
    filterDate: _react3.default.PropTypes.func,
    includeDates: _react3.default.PropTypes.array,
    maxDate: _react3.default.PropTypes.object,
    minDate: _react3.default.PropTypes.object,
    month: _react3.default.PropTypes.number,
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
  renderDays: function renderDays() {
    var _this = this;

    var startOfWeek = this.props.day.clone().startOf('week');
    return [0, 1, 2, 3, 4, 5, 6].map(function (offset) {
      var day = startOfWeek.clone().add(offset, 'days');
      return _react3.default.createElement(_day2.default, {
        key: offset,
        day: day,
        month: _this.props.month,
        onClick: _this.handleDayClick.bind(_this, day),
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        excludeDates: _this.props.excludeDates,
        includeDates: _this.props.includeDates,
        filterDate: _this.props.filterDate,
        selected: _this.props.selected,
        pricesLoading: _this.props.pricesLoading,
        prices: _this.props.prices,
        startDate: _this.props.startDate,
        endDate: _this.props.endDate });
    });
  },
  render: function render() {
    return _react3.default.createElement(
      'div',
      { className: 'react-datepicker__week' },
      this.renderDays()
    );
  }
}));

module.exports = Week;
