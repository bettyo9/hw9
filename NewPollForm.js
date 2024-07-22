import React, { useState } from 'react';

const NewPollForm = ({ addPoll }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPoll = {
      question,
      options: options.map((text) => ({ text, votes: 0 })),
    };
    addPoll(newPoll);
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Poll</h2>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </label>
      {options.map((option, index) => (
        <label key={index}>
          Option {index + 1}:
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            required
          />
        </label>
      ))}
      <button type="submit">Create Poll</button>
    </form>
  );
};

export default NewPollForm;
