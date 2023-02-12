import React from "react";
import style from "./Story.module.scss"
import Header from '../Components/Header';

const Animation = ({ page, setPage}) => {

  return (<>
    <Header 
      page={page}
      setPage={setPage}
    />
  
    <div className={style.mainBox}>
      <div className={style.titleBox}>ANIMATION</div>
      
      <span className={style.subtitle}>Short Animated Film</span>
      
      <iframe width="650" height="361" src="https://www.youtube.com/embed/6r5LLSmRc3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
    </div>
  </>)
}

export default Animation