import Question from "./Question";
import Answer from "./Answer";
import React from "react";
import { useReducer } from "react";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
  }
};

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=" w-full h-screen bg-violet-50 ">
      <div className="flex flex-col items-center justify-center h-screen gap-y-4">
        <div className=" bg-white pl-7 pr-7 pt-2 pb-2 font-bold">
          Question {state.currentQuestionIndex}/8
        </div>
        <div className="w-4/5">
          <div className=" mb-8">
            <Question />
          </div>
          <div className="flex flex-col gap-y-4 gap-x-2.5">
            <div className="flex flex-row w-full gap-x-2.5">
              <Answer />
              <Answer />
            </div>
            <div className="flex flex-row gap-x-2.5">
              <Answer />
              <Answer />
            </div>
          </div>
        </div>

        <div
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          className=" bg-black pl-9 pr-9 pt-2 pb-2 text-white cursor-pointer"
        >
          NEXT QUESTION
        </div>
      </div>
    </div>
  );
};

export default Quiz;
