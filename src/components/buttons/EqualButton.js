import { ACTION } from "../../App";

// handling dispatch for equal button

export default function EqualButton({ dispatch, equals }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTION.EVALUATE,
        })
      }
      className="input-btn signs equal"
    >
      {equals}
    </button>
  );
}
