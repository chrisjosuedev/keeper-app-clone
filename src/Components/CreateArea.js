import React, { useState } from 'react';

function CreateArea({ onAdd }) {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    function handleText(e) {
        const { name, value } = e.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    return (
        <div>
            <form
                onSubmit={(e) => {
                    onAdd(e, note);
                    setNote({
                        title: '',
                        content: '',
                    });
                }}
            >
                <input
                    onChange={handleText}
                    name="title"
                    placeholder="Title"
                    autoFocus
                    value={note.title}
                />
                <textarea
                    onChange={handleText}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
