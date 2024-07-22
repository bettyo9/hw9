import React from 'react';

function PollResults({ options }) {
    return (
        <div className="poll-results">
            <h2>Results</h2>
            <ul>
                {options.map(option => (
                    <li key={option.id}>
                        {option.text}: {option.count}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PollResults;
