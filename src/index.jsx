import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}> </Route>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />

            </Routes>
        </BrowserRouter >
    );
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);