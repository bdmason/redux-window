# redux-window

This is a small package to set the browser window's width and height in state.

It stores `window.innerWidth` and `window.innerHeight` in the initial state, then adds a listener to the resize event to keep state up to date with any changes in the window size.

`lodash.throttle()` is used to improve performance by preventing the event listener from firing too often.

## Getting Started

Pass the reduxWindow reducer to your store:
~~~~
import { combineReducers, createStore } from 'redux'
import { reduxWindow, resizeEvent } from 'redux-window'

const reducers = combineReducers({
  reduxWindow,
  // other reducers...
})
const store = createStore(reducers)
~~~~
Then pass your store to the resizeEvent:
~~~~
resizeEvent(store)
~~~~

## Optional throttle wait

The resize event is throttled to allow dispatch to be fired a maximum of once every 200ms. To change the default wait time, pass it as a second parameter to resizeEvent.
~~~~
resizeEvent(store, 500)
~~~~
