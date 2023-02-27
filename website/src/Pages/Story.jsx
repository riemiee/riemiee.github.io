import React, { useState } from "react";
import style from "./Story.module.scss"
import Header from '../Components/Header';
import story1 from '../Media/story_1.png'
import story2 from '../Media/story_2.png'
import story3 from '../Media/story_3.jpg'
import story4 from '../Media/story_4.jpg'
import story5 from '../Media/story_5.jpg'
import Modal from "../Components/Modal";

const Story = ({ page, setPage }) => {

  const [modal, changeModal] = useState(false);
  const [imageNum, changeImageNum] = useState(0);

  const imageArray = [story1, story2, story3, story4, story5]
  
  const showModal = (e) => {
    const imageNum = Number(e.target.getAttribute("data-image"));
    changeImageNum(imageNum)
    changeModal(true);
  }

  return (<>
    
    {modal
    ? <Modal 
      changeModal={changeModal}
      imageArray={imageArray}
      imageNum={imageNum}
      changeImageNum={changeImageNum}
    /> :
    ''
    }
    
    <Header 
      page={page}
      setPage={setPage}
    />
    
    <div className={style.mainBox}>
      <div className={style.titleBox}>STORY</div>
      
      <span className={style.subtitle}>Storyboard Development</span>
      
      <iframe width="650" height="361" src="https://www.youtube.com/embed/3J72vZYVX7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <span className={style.subtitle}>Short Comic</span>
      
      <img className={style.storyImg} src={story1} data-image='0' onClick={showModal}/>
      
      <img className={style.storyImg} src={story2} data-image='1' onClick={showModal}/>
      
      <span className={style.subtitle2}>Colour Script</span>
      
      <img className={style.storyHome} src={story3} data-image='2' onClick={showModal}/>
      <img className={style.storyHome} src={story4} data-image='3' onClick={showModal}/>
      <img className={style.storyHome} src={story5} data-image='4' onClick={showModal}/>
      
    </div>
  </>)
}

export default Story