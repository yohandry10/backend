import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface TriviaProps {
  questions: Question[];
}

const Trivia: React.FC<TriviaProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Tu puntuación: {score} / {questions.length}
          </h2>
          <p>¡Gracias por participar en la trivia!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </h2>
          <p className="mb-4">{questions[currentQuestionIndex].question}</p>
          <div className="space-y-2">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            disabled={!selectedOption}
          >
            {currentQuestionIndex + 1 === questions.length ? 'Finalizar' : 'Siguiente'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Trivia;
