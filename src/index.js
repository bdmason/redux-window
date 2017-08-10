import throttle from 'lodash.throttle';

// action
const SET_WINDOW = '@@redux-window/SET_WINDOW';

// reducer
export default function reducer(state = {
  // These are initialised to zero however
  // the resize event is triggered onload
  // when using resize event
  width: 0,
  height: 0
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
export function resizeEvent(store, options) {
  // To prevent new options being a breaking change
  // I check if the options is a number and then
  // consider it the wait time
  const { wait, defaultWidth, defaultHeight } =
    typeof options === 'number' ?
      { wait: options, defaultWidth: 1200, defaultHeight: 900 }
      :
      options;

  if (typeof window === 'undefined') {
    store.dispatch(setWindow(options.defaultWidth, options.defaultHeight))
  } else {
    store.dispatch(setWindow(window.innerWidth, window.innerHeight))
    window.addEventListener('resize', throttle(() => {
      store.dispatch(setWindow(window.innerWidth, window.innerHeight))
    }, options.wait));
  }
}
