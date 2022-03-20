import debounceFrame from '../core/debounceFrame.js';

let renderInfo = undefined
function rerender(callback, root) {
  if (renderInfo === undefined) {
    renderInfo = {callback, root}
  } else {
    renderInfo.callback({$target: renderInfo.root})
  }
}

export default debounceFrame(rerender)