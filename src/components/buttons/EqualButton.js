import { ACTIONS } from "../App";

// handling dispatch for equal button

export default function EqualButton({ dispatch, equals }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.EVALUATE,
        })
      }
      className="input-btn signs equal"
    >
      {equals}
    </button>
  );
}
