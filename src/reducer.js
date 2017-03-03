import { RESIZE } from './action'

const initialState = {
  w: window.innerWidth,
  h: window.innerHeight
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESIZE: {
      return {
        w: action.w,
        h: action.h
      }
    }
    default: {
      return state
    }
  }
}
