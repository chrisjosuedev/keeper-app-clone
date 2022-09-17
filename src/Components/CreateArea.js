import React, { useState } from 'react';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea({ onAdd }) {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const [animationState, setAnimationState] = useState(false);

    function handleText(e) {
        const { name, value } = e.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    /** Animation */
    function handleClick() {
        setAnimationState(true);
    }

    return (
        <div>
            <form
                className="create-note"
                onSubmit={(e) => {
                    onAdd(e, note);
                    setNote({
                        title: '',
                        content: '',
                    });
                }}
            >
                {animationState && (
                    <input
                        onChange={handleText}
                        name="title"
                        placeholder="Title"
                        autoFocus
                        value={note.title}
                    />
                )}

                <textarea
                    onChange={handleText}
                    name="content"
                    placeholder="Take a note..."
                    rows={animationState ? '3' : '1'}
                    onClick={handleClick}
                    value={note.content}
                />
                <Zoom in={animationState}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
