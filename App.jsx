import React, { useState } from 'react';
import PollList from './components/PollList';
import NewPollForm from './components/NewPollForm';

const App = () => {
  const [polls, setPolls] = useState([]);

  const addPoll = (newPoll) => {
    setPolls([...polls, newPoll]);
  };

  const vote = (pollIndex, optionIndex) => {
    const updatedPolls = [...polls];
    updatedPolls[pollIndex].options[optionIndex].votes++;
    setPolls(updatedPolls);
  };

  return (
    <div className="App">
      <h1>Simple Polling Application</h1>
      <NewPollForm addPoll={addPoll} />
      <PollList polls={polls} vote={vote} />
    </div>
  );
};

export default App;
