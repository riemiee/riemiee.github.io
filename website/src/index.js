import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes, Route, HashRouter
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Story from './Pages/Story';
import Animation from './Pages/Animation';
import Projects from './Pages/Projects';
import Design from './Pages/Design';
import Visual from './Pages/Visual';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Animation />} />
        <Route path="/storyboard" element={<Story />} />
        <Route path="/design" element={<Design />} />
        <Route path="/visual_design" element={<Visual />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='*' component={<Animation />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
