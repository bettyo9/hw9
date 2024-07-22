import React from 'react';
import PollItem from './PollItem';

const PollList = ({ polls, vote }) => {
  return (
    <div className="poll-list">
      {polls.map((poll, index) => (
        <PollItem key={index} index={index} poll={poll} vote={vote} />
      ))}
    </div>
  );
};

export default PollList;
