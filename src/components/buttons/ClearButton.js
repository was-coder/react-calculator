import { ACTION } from "../../App";

// handling dispatch for clear button

export default function ClearButton({ dispatch, clear }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTION.CLEAR,
        })
      }
      className="input-btn ac-del"
    >
      {clear}
    </button>
  );
}
