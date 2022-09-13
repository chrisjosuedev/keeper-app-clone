import React from 'react';
import { notes } from './notes';
import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Header />
            {notes.map((item) => {
                return (
                    <Note
                        key={item.id}
                        title={item.title}
                        content={item.content}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
