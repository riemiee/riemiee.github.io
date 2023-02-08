import React from "react";
import style from "./Story.module.scss"

const Animation = () => {

  return (<>
    <div className={style.mainBox}>
      <div className={style.titleBox}>ANIMATION</div>
      
      <span className={style.subtitle}>Short Animated Film</span>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6r5LLSmRc3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
    </div>
  </>)
}

export default Animation