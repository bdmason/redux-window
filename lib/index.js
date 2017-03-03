'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduxWindow = exports.resizeEvent = undefined;

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeEvent = exports.resizeEvent = function resizeEvent(store) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  window.addEventListener('resize', (0, _lodash2.default)(function () {
    store.dispatch((0, _action2.default)(window.innerWidth, window.innerHeight));
  }, wait));
};

exports.reduxWindow = _reducer2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXNpemVFdmVudCIsInN0b3JlIiwid2FpdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlZHV4V2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBdUI7QUFBQSxNQUFmQyxJQUFlLHVFQUFSLEdBQVE7O0FBQ2hEQyxTQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxzQkFBUyxZQUFNO0FBQy9DSCxVQUFNSSxRQUFOLENBQWUsc0JBQVVGLE9BQU9HLFVBQWpCLEVBQTZCSCxPQUFPSSxXQUFwQyxDQUFmO0FBQ0QsR0FGaUMsRUFFL0JMLElBRitCLENBQWxDO0FBR0QsQ0FKTTs7UUFNRU0sVyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnXG5pbXBvcnQgcmVkdXhXaW5kb3cgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IHNldFdpbmRvdyBmcm9tICcuL2FjdGlvbidcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZUV2ZW50ID0gKHN0b3JlLCB3YWl0ID0gMjAwKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZSgoKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goc2V0V2luZG93KHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpKVxuICB9LCB3YWl0KSlcbn1cblxuZXhwb3J0IHsgcmVkdXhXaW5kb3cgfVxuIl19