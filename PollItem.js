import React from 'react';

const PollItem = ({ index, poll, vote }) => {
  const handleVote = (optionIndex) => {
    vote(index, optionIndex);
  };

  return (
    <div className="poll-item">
      <h3>{poll.question}</h3>
      {poll.options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <button onClick={() => handleVote(optionIndex)}>
            {option.text}
          </button>
          <span>Votes: {option.votes}</span>
        </div>
      ))}
    </div>
  );
};

export default PollItem;
