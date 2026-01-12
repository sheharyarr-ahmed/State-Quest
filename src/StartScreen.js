import { type } from "@testing-library/user-event/dist/type";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React Matery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
