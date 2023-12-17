import { useState } from "react";
import { mockData } from "./mockData";
import "./App.css";

const shuffledArray = mockData.sort(() => 0.5 - Math.random());
const lengthPhrase = mockData.length;

export default function App() {
  const [answers, setAnswers] = useState(
    Array(lengthPhrase).fill({ value: "", isSelected: false })
  );
  const [questions, setQuestions] = useState(
    shuffledArray.map((item) => ({ value: item.value, isSelected: false }))
  );

  const handleClickAnswer = (word) => {
    if (!word.isSelected) return;

    const newAnswers = [...answers];
    const objIndex = newAnswers.findIndex((item) => item.value === word.value);
    const newWords = { value: "", isSelected: false };
    newAnswers[objIndex] = newWords;
    setAnswers(newAnswers);

    const newQuestions = [...questions];
    const position = newQuestions.findIndex(
      (item) => item.value === word.value
    );
    newQuestions[position].isSelected = false;
    setQuestions(newQuestions);
  };

  const handleClickQuestion = (question) => {
    if (question.isSelected) return;

    const newQuestions = [...questions];
    const findIndex = questions.findIndex(
      (item) => item.value === question.value
    );
    newQuestions[findIndex].isSelected = !question.isSelected;
    setQuestions(newQuestions);

    const newAnswers = [...answers];
    const position = newAnswers.findIndex((item) => item.isSelected === false);
    const newWords = { value: question.value, isSelected: true };
    newAnswers[position] = newWords;
    setAnswers(newAnswers);
  };

  return (
    <div className="container-fluid my-5">
      <h1 className="text-center">Recovery Phrase</h1>
      <h6 className="text-center">
        Click each word in the correct order to verify your recovery phrase
      </h6>
      <div className="answer-box my-5">
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`answer-item ${answer.isSelected ? "selected" : ""}`}
            onClick={() => handleClickAnswer(answer)}
          >
            {index + 1}. {answer.value}
          </div>
        ))}
      </div>
      <div className="question-box my-5">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question-item ${question.isSelected ? "selected" : ""}`}
            onClick={() => handleClickQuestion(question)}
          >
            {question.value}
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          disabled={
            answers.filter((word) => word.isSelected).length < answers.length
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}
