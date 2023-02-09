import React from "react";
import style from "./Story.module.scss"
import Header from '../Components/Header';

const Story = ({ page, setPage }) => {

  return (<>
    
    <Header 
      page={page}
      setPage={setPage}
    />
    
    <div className={style.mainBox}>
      <div className={style.titleBox}>STORY</div>
      
      <span className={style.subtitle}>Storyboard Development</span>
      
      <iframe width="641" height="361" src="https://www.youtube.com/embed/3J72vZYVX7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
    </div>
  </>)
}

export default Story