import Question from "./Question";
import Answer from "./Answer";

const Quiz = () => {
  return (
    <div className=" w-full h-screen">
      <div className="flex flex-row items-center justify-center h-screen">
        <div>Question 1/8</div>
        <Question />
        <Answer />
      </div>
    </div>
  );
};

export default Quiz;
