export const RESIZE = '@@redux-window/RESIZE'

export default (w, h) => {
  return {
    type: RESIZE,
    w,
    h
  }
}
