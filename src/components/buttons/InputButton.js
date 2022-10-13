import { ACTIONS } from "../../App";

// handling dispatch for digits

export default function InputButton({ dispatch, digit }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.CLICK_INPUT,
          load: { digit },
        })
      }
      className="input-btn"
    >
      {digit}
    </button>
  );
}
