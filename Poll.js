import React from 'react';

function Poll({ options, handleVote }) {
    return (
        <div className="poll">
            {options.map(option => (
                <button key={option.id} onClick={() => handleVote(option.id)}>
                    {option.text}
                </button>
            ))}
        </div>
    );
}

export default Poll;
