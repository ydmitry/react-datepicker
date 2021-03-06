'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  YearDropdownOptions: {
    displayName: 'YearDropdownOptions'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/year_dropdown_options.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

function generateYears(year) {
  var list = [];
  for (var i = 0; i < 5; i++) {
    list.push(year - i);
  }
  return list;
}

var YearDropdownOptions = _wrapComponent('YearDropdownOptions')(_react3.default.createClass({
  displayName: 'YearDropdownOptions',

  propTypes: {
    onCancel: _react3.default.PropTypes.func.isRequired,
    onChange: _react3.default.PropTypes.func.isRequired,
    year: _react3.default.PropTypes.number.isRequired
  },

  mixins: [require('react-onclickoutside')],

  getInitialState: function getInitialState() {
    return {
      yearsList: generateYears(this.props.year)
    };
  },
  renderOptions: function renderOptions() {
    var _this = this;

    var selectedYear = this.props.year;
    var options = this.state.yearsList.map(function (year) {
      return _react3.default.createElement(
        'div',
        { className: 'react-datepicker__year-option',
          key: year,
          onClick: _this.onChange.bind(_this, year) },
        selectedYear === year ? _react3.default.createElement(
          'span',
          { className: 'react-datepicker__year-option--selected' },
          '✓'
        ) : '',
        year
      );
    });

    options.unshift(_react3.default.createElement(
      'div',
      { className: 'react-datepicker__year-option',
        ref: "upcoming",
        key: "upcoming",
        onClick: this.incrementYears },
      _react3.default.createElement('a', { className: 'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming' })
    ));
    options.push(_react3.default.createElement(
      'div',
      { className: 'react-datepicker__year-option',
        ref: "previous",
        key: "previous",
        onClick: this.decrementYears },
      _react3.default.createElement('a', { className: 'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous' })
    ));
    return options;
  },
  onChange: function onChange(year) {
    this.props.onChange(year);
  },
  handleClickOutside: function handleClickOutside() {
    this.props.onCancel();
  },
  shiftYears: function shiftYears(amount) {
    var years = this.state.yearsList.map(function (year) {
      return year + amount;
    });

    this.setState({
      yearsList: years
    });
  },
  incrementYears: function incrementYears() {
    return this.shiftYears(1);
  },
  decrementYears: function decrementYears() {
    return this.shiftYears(-1);
  },
  render: function render() {
    return _react3.default.createElement(
      'div',
      { className: 'react-datepicker__year-dropdown' },
      this.renderOptions()
    );
  }
}));

module.exports = YearDropdownOptions;
