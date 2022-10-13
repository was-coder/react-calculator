import { ACTIONS } from "../../App";

// handling dispatch for operands

export default function OperandButton({ dispatch, operand }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.CLICK_OPERAND,
          load: { operand },
        })
      }
      className="input-btn signs"
    >
      {operand}
    </button>
  );
}
