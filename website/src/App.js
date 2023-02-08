import logo from './logo.svg';
import './App.scss';
import Story from './Pages/Story';
import Header from './Components/Header';
import { useState } from 'react';
import Modelling from './Pages/Modelling';
import Animation from './Pages/Animation';

function App() {

  const [page, setPage] = useState(0);

  const pageList = [
    <Story 
      page={page}
      setPage={setPage}
    />,
    <Modelling 
      page={page}
      setPage={setPage}
    />,
    <Animation 
      page={page}
      setPage={setPage}
    />
  ]

  return (<>
    
    {pageList[page]}
    
  </>);
}

export default App;
