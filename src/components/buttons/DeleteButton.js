import { ACTION } from "../../App";

// handling dispatch for delete button

export default function DeleteButton({ dispatch, del }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTION.DELETE,
        })
      }
      className="input-btn ac-del"
    >
      {del}
    </button>
  );
}
