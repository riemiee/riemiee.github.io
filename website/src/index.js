import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Story from './Pages/Story';
import Animation from './Pages/Animation';
import Projects from './Pages/Projects';
import Design from './Pages/Design';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Animation />} />
        <Route path="/storyboard" element={<Story />} />
        <Route path="/design" element={<Design />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
