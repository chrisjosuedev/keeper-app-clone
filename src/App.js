import React, { useState } from 'react';
import Header from './Components/Header';
import Note from './Components/Note';
import CreateArea from './Components/CreateArea';
import Footer from './Components/Footer';

function App() {
    const [tasks, setTask] = useState([]);

    function addTask(e, task) {
        setTask((prevTask) => {
            return [...prevTask, task];
        });

        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addTask} />
            {tasks.map((note, index) => {
                return (
                    <Note key={index} id={index} title={note.title} content={note.content} />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
