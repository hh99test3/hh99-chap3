const MODAL_OPEN = "modal/open";
const MODAL_CLOSE = "modal/close";

export const modalOpen = (id) => ({ type: MODAL_OPEN, id });
export const modalClose = (id) => ({ type: MODAL_CLOSE, id });

const initialState = {};

function modal(state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, [action.id]: true };
    case MODAL_CLOSE:
      return { ...state, [action.id]: false };
    default:
      return state;
  }
}

export default modal;
