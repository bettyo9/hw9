import React, { useState } from 'react';
import Poll from './Poll';
import PollResults from './PollResults';

function App() {
    const [pollData, setPollData] = useState({
        question: 'What is your favorite color?',
        options: [
            { id: 1, text: 'Blue', count: 0 },
            { id: 2, text: 'Red', count: 0 },
            { id: 3, text: 'Green', count: 0 },
        ]
    });

    const handleVote = (optionId) => {
        const updatedOptions = pollData.options.map(option => {
            if (option.id === optionId) {
                return { ...option, count: option.count + 1 };
            }
            return option;
        });
        setPollData({ ...pollData, options: updatedOptions });
    };

    return (
        <div className="App">
            <h1>{pollData.question}</h1>
            <Poll options={pollData.options} handleVote={handleVote} />
            <PollResults options={pollData.options} />
        </div>
    );
}

export default App;
