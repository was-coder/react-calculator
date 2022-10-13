import { ACTION } from "../../App";

// handling dispatch for operands

export default function OperandButton({ dispatch, operand }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTION.CLICK_OPERAND,
          value: { operand },
        })
      }
      className="input-btn signs"
    >
      {operand}
    </button>
  );
}
