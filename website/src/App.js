import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header';
import { useState } from 'react';
import Story from './Pages/Story';
import Modelling from './Pages/Animation';
import Animation from './Pages/Projects';
import Design from './Pages/Design';

function Apps() {

  const [page, setPage] = useState(0);

  const pageList = [
    <Modelling
      page={page}
      setPage={setPage}
    />,
    <Story
      page={page}
      setPage={setPage}
    />,
    <Design
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
