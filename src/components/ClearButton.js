import { ACTIONS } from "../App";

// handling dispatch for clear button

export default function ClearButton({ dispatch, clear }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.CLEAR,
        })
      }
      className="input-btn ac-del"
    >
      {clear}
    </button>
  );
}
