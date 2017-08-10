# redux-window

This is a small package to store the browser window's width and height in state.

## Getting started

Install:
~~~
npm install --save redux-window
~~~

Add the reduxWindow reducer:
~~~~js
import { combineReducers } from 'redux';
import reduxWindow from 'redux-window';

const reducers = combineReducers({
  reduxWindow,
  ...other reducers
});
~~~~
Then in `index.js`, import resizeEvent and pass it your store:
~~~~js
import { resizeEvent } from 'redux-window';
import store from './store';

resizeEvent(store);
~~~~

## Optional throttle on dispatch

The resize event is throttled to allow dispatch to be fired a maximum of once every 200ms. To change the default wait time, pass a second parameter to resizeEvent.
~~~js
resizeEvent(store, 500);
~~~
You can optionally pass this value in with an object too:
~~~js
resizeEvent(store, { wait: 500 });
~~~

## Useage with Redux and NextJS

When the store is initialised on the server there is no access to the
window object. Because of this you can set a default width and height
for the initial render and the client will correct these values once
it loads.
~~~js
resizeEvent(store, {
  wait: 500,
  defaultWidth: 1200,
  defaultHeight: 900,
});
~~~

## Selectors
To get the window width and height from state:
~~~js
import { getWidth, getHeight } from 'redux-window';

function mapStateToProps(state, ownProps) {
  return {
    width: getWidth(state),
    height: getHeight(state),
  };
}
~~~
*NOTE: the selectors require your reducer to use the key `reduxWindow`, as in the example above.* 