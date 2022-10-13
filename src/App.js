import "./components/css/reset.css";
import "./components/css/main.css";
import InputButton from "./components/buttons/InputButton";
import OperandButton from "./components/buttons/OperandButton";
import ClearButton from "./components/buttons/ClearButton";
import DeleteButton from "./components/buttons/DeleteButton";
import EqualButton from "./components/buttons/EqualButton";

import { useReducer } from "react";

export const ACTIONS = {
  CLICK_INPUT: "click-input",
  CLICK_OPERAND: "click-operand",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
};

const evaluate = ({ previousInput, operand, currentInput }) => {
  const firstInput = parseFloat(previousInput);
  const secondInput = parseFloat(currentInput);
  if (isNaN(firstInput) || isNaN(secondInput)) return "";

  let answer = "";

  switch (operand) {
    case "*":
      answer = firstInput * secondInput;
      break;

    case "+":
      answer = firstInput + secondInput;
      break;

    case "-":
      answer = firstInput - secondInput;
      break;

    case "/":
      answer = firstInput / secondInput;
      break;

    default:
      return answer;
  }
  return answer.toString();
};

const reducer = (state, { type, load }) => {
  switch (type) {
    case ACTIONS.CLICK_INPUT:
      if (state.overwrite) {
        return {
          ...state,
          currentInput: load.digit,
          overwrite: false,
        };
      }

      if (load.digit === "0" && state.currentInput === "0") return state;
      if (load.digit === "." && state.currentInput.includes(".")) return state;
      return {
        ...state,
        currentInput: `${state.currentInput || ""}${load.digit}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentInput: null,
        };
      }

      if (state.currentInput == null) return state;

      if (state.currentInput.lenght === 1) {
        return {
          ...state,
          currentInput: null,
        };
      }
      return {
        ...state,
        currentInput: state.currentInput.slice(0, -1),
      };

    case ACTIONS.CLICK_OPERAND:
      if (state.currentInput == null && state.previousInput == null)
        return state;

      if (state.previousInput == null) {
        return {
          ...state,
          operand: load.operand,
          previousInput: state.currentInput,
          currentInput: null,
        };
      }

      if (state.currentInput == null) {
        return {
          ...state,
          operand: load.operand,
        };
      }

      return {
        ...state,
        previousInput: evaluate(state),
        operand: load.operand,
        currentInput: null,
      };

    case ACTIONS.EVALUATE:
      if (
        state.operand == null ||
        state.previousInput == null ||
        state.currentInput == null
      )
        return state;

      return {
        ...state,
        previousInput: null,
        operand: null,
        currentInput: evaluate(state),
        overwrite: true,
      };

    default:
      return state;
  }
};

function App() {
  const [{ currentInput, previousInput, operand }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-div">
      <div className="result">
        <div className="previous-result">{previousInput}</div>
        <div className="operand">{operand}</div>
        <div className="current-result">{currentInput}</div>
      </div>
      <ClearButton clear="AC" dispatch={dispatch} />
      <DeleteButton del="DEL" dispatch={dispatch} />
      <InputButton digit="1" dispatch={dispatch} />
      <InputButton digit="2" dispatch={dispatch} />
      <OperandButton operand="*" dispatch={dispatch} />
      <InputButton digit="3" dispatch={dispatch} />
      <InputButton digit="4" dispatch={dispatch} />
      <InputButton digit="5" dispatch={dispatch} />
      <OperandButton operand="+" dispatch={dispatch} />
      <InputButton digit="6" dispatch={dispatch} />
      <InputButton digit="7" dispatch={dispatch} />
      <InputButton digit="8" dispatch={dispatch} />
      <OperandButton operand="-" dispatch={dispatch} />
      <InputButton digit="9" dispatch={dispatch} />
      <InputButton digit="0" dispatch={dispatch} />
      <InputButton digit="." dispatch={dispatch} />
      <OperandButton operand="/" dispatch={dispatch} />
      <EqualButton equals="=" dispatch={dispatch} />
    </div>
  );
}

export default App;
