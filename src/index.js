import throttle from 'lodash.throttle';

// action
const SET_WINDOW = '@@redux-window/SET_WINDOW';

// reducer
export default function reducer(state = {
  width: window.innerWidth,
  height: window.innerHeight
}, action) {
  switch (action.type) {
    case SET_WINDOW: {
      return {
        width: action.width,
        height: action.height,
      };
    }
    default: {
      return state
    }
  }
};

// action creator
function setWindow(width, height) {
  return {
    type: SET_WINDOW,
    width,
    height,
  };
}

// selectors
export function getWidth(state) {
  return state.reduxWindow.width;
}
export function getHeight(state) {
  return state.reduxWindow.height;
}

// function for listening to the window
export function resizeEvent(store, wait = 200) {
  window.addEventListener('resize', throttle(() => {
    store.dispatch(setWindow(window.innerWidth, window.innerHeight))
  }, wait));
}
