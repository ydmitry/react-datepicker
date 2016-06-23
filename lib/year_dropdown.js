'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _year_dropdown_options = require('./year_dropdown_options');

var _year_dropdown_options2 = _interopRequireDefault(_year_dropdown_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  YearDropdown: {
    displayName: 'YearDropdown'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/year_dropdown.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

var YearDropdown = _wrapComponent('YearDropdown')(_react3.default.createClass({
  displayName: 'YearDropdown',

  propTypes: {
    onChange: _react3.default.PropTypes.func.isRequired,
    year: _react3.default.PropTypes.number.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      dropdownVisible: false
    };
  },
  renderReadView: function renderReadView() {
    return _react3.default.createElement(
      'div',
      { className: 'react-datepicker__year-read-view', onClick: this.toggleDropdown },
      _react3.default.createElement(
        'span',
        { className: 'react-datepicker__year-read-view--selected-year' },
        this.props.year
      ),
      _react3.default.createElement('span', { className: 'react-datepicker__year-read-view--down-arrow' })
    );
  },
  renderDropdown: function renderDropdown() {
    return _react3.default.createElement(_year_dropdown_options2.default, {
      ref: 'options',
      year: this.props.year,
      onChange: this.onChange,
      onCancel: this.toggleDropdown });
  },
  onChange: function onChange(year) {
    this.toggleDropdown();
    if (year === this.props.year) return;
    this.props.onChange(year);
  },
  toggleDropdown: function toggleDropdown() {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  },
  render: function render() {
    return _react3.default.createElement(
      'div',
      null,
      this.state.dropdownVisible ? this.renderDropdown() : this.renderReadView()
    );
  }
}));

module.exports = YearDropdown;
