import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";

const initialState = {
  questions: [],
  //  status can be loading, ready, active, finished
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      // .catch((err) => console.log("Error"));
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status == "loading" && <Loader />}
        {status == "error" && <Error />}
        {status == "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {/* now how do wwe start this active state, go to use reducer */}
        {status == "active" && <Question />}
      </Main>
    </div>
  );
}
