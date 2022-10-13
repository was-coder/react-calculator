import { ACTION } from "../../App";

// handling dispatch for digits

export default function InputButton({ dispatch, digit }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTION.CLICK_INPUT,
          value: { digit },
        })
      }
      className="input-btn"
    >
      {digit}
    </button>
  );
}
