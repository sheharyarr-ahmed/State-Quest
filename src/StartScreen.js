function StartScreen({ numQuestions }) {
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React Matery</h3>
      <button className="btn btn-ui">Lets Start</button>
    </div>
  );
}

export default StartScreen;
