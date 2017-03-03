# redux-window

Responsively set browser window size in redux state.

## Getting Started

Add resize event to your app's entry point:
~~~~
import { resizeEvent } from 'redux-window'
resizeEvent(store)
~~~~

Add reducer:
~~~~
import { combineReducers } from 'redux'
import { reduxWindow } from 'redux-window'

export default combineReducers({
  reduxWindow,
  // other reducers...
})
~~~~
