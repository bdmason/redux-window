'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var initialState = {
  w: window.innerWidth,
  h: window.innerHeight
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _action.RESIZE:
      {
        return {
          w: action.w,
          h: action.h
        };
      }
    default:
      {
        return state;
      }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaCIsImlubmVySGVpZ2h0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxlQUFlO0FBQ25CQyxLQUFHQyxPQUFPQyxVQURTO0FBRW5CQyxLQUFHRixPQUFPRztBQUZTLENBQXJCOztrQkFLZSxZQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJOLFlBQXlCO0FBQUEsTUFBWE8sTUFBVzs7QUFDL0MsVUFBUUEsT0FBT0MsSUFBZjtBQUNFO0FBQWE7QUFDWCxlQUFPO0FBQ0xQLGFBQUdNLE9BQU9OLENBREw7QUFFTEcsYUFBR0csT0FBT0g7QUFGTCxTQUFQO0FBSUQ7QUFDRDtBQUFTO0FBQ1AsZUFBT0UsS0FBUDtBQUNEO0FBVEg7QUFXRCxDIiwiZmlsZSI6InJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRVNJWkUgfSBmcm9tICcuL2FjdGlvbidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgaDogd2luZG93LmlubmVySGVpZ2h0XG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFU0laRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdzogYWN0aW9uLncsXG4gICAgICAgIGg6IGFjdGlvbi5oXG4gICAgICB9XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxufVxuIl19