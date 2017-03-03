import throttle from 'lodash.throttle'
import reduxWindow from './reducer'
import setWindow from './action'

export const resizeEvent = (store, wait = 200) => {
  window.addEventListener('resize', throttle(() => {
    store.dispatch(setWindow(window.innerWidth, window.innerHeight))
  }, wait))
}

export { reduxWindow }
