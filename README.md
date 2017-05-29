# redux-window

This is a small package to store the browser window's width and height in state.

## Getting started

Install:
~~~
npm install --save redux-window
~~~

Add the reduxWindow reducer:
~~~~
import { combineReducers } from 'redux';
import reduxWindow from 'redux-window';

const reducers = combineReducers({
  reduxWindow,
  ...other reducers
});
~~~~
Then in `index.js`, import resizeEvent and pass it your store:
~~~~
import { resizeEvent } from 'redux-window';
import store from './store';

resizeEvent(store);
~~~~

## Optional throttle on dispatch

The resize event is throttled to allow dispatch to be fired a maximum of once every 200ms. To change the default wait time, pass a second parameter to resizeEvent.
~~~
resizeEvent(store, 500);
~~~

## Selectors
To get the window width and height from state:
~~~
import { getWidth, getHeight } from 'redux-window';

function mapStateToProps(state, ownProps) {
  return {
    width: getWidth(state),
    height: getHeight(state),
  };
}
~~~
*NOTE: the selectors require your reducer to use the key `reduxWindow`, as in the example above.* 