import React, { useState } from 'react';
import Header from './Components/Header';
import Note from './Components/Note';
import CreateArea from './Components/CreateArea';
import Footer from './Components/Footer';

function App() {
    // Hook to save arrays of note objects.
    const [tasks, setTask] = useState([]);

    function addTask(e, task) {
        setTask((prevTask) => {
            return [...prevTask, task];
        });

        e.preventDefault();
    }

    function deleteNote(id) {
        /** Delete  */
        setTask((prevTask) => prevTask.filter((note, i) => i !== id))
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addTask} />
            {/* List Notes from tasks */}
            {tasks.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        onDelete={deleteNote}
                        title={note.title}
                        content={note.content}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
