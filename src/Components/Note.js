import React from 'react';

function Note({ title, content, index }) {
    return (
        <div className="note" key={index} id={index}>
            <h1>{title}</h1>
            <p>{content}</p>
            <button>DELETE</button>
        </div>
    );
}

export default Note;
