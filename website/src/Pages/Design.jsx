import React, { useState } from "react";
import style from "./Design.module.scss"
import model_style from "./Design.module.scss"

import img1 from '../Media/Background_Coloured_Thumbnails2.png'
import img2 from '../Media/RocketRide_Paint_BGs.png'
import img3 from '../Media/RocketRide_Paint_BGs (2).png'
import img4 from '../Media/RocketRide_Paint_BGs (3).png'
import img5 from '../Media/RocketRide_Paint_BGs (4).png'
import img6 from '../Media/RocketRide_Paint_BGs (5).png'
import img7 from '../Media/RocketRide_Paint_BGs (6).png'
import img8 from '../Media/RocketRide_Paint_BGs (7).png'
import img9 from '../Media/Styleframe_Paint_Story.png'

import model1 from '../Media/model_1.jpg'
import model2 from '../Media/model_2.jpg'
import model3 from '../Media/model_3.jpg'
import img10 from '../Media/WIP_Rissa_Putra.jpg'
import img11 from '../Media/IMG_1614.PNG'
import img12 from '../Media/IMG_1615.PNG'
import img13 from '../Media/charapinkified.PNG'

import img14 from '../Media/Wk3 House iteration colour.jpg'
import img15 from '../Media/Wk 4 House Design.png'
import img16 from '../Media/Wk4 Character Design 2.png'


import Header from '../Components/Header';
import Modal from "../Components/Modal";


const Design = ({ page, setPage }) => {

  const [backgroundModal, changeBackgroundModal] = useState(false);

  const [modal, changeModal] = useState(false);
  const [imageNum, changeImageNum] = useState(0);
  const [modalArray, changeModalArray] = useState([]);

  const backgroundArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const charDesignArray = [model1, model2, model3, img11, img13, img12, img10];
  const visualArray = [img14, img15, img16];
  
  const showModal = (e) => {
    const imageNum = Number(e.target.getAttribute("data-image"));

    const category = e.target.getAttribute("data-category");

    switch (category) {
      case "background":
        changeModalArray(backgroundArray)
        break;
      case "character":
        changeModalArray(charDesignArray)
        break;
      case "visual":
        changeModalArray(visualArray)
        break;
    }
    
    changeImageNum(imageNum)
    changeModal(true);
  }


  return (<>
    {modal
    ? <Modal 
      changeModal={changeModal}
      imageArray={modalArray}
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
      
      <span className={style.subtitle}>Background Design</span>
      
      <div className={style.imgBox}>
        <img src={img1} data-image="0" data-category="background" onClick={showModal} />
        <img src={img2} data-image="1" data-category="background" onClick={showModal} />
        <img src={img3} data-image="2" data-category="background" onClick={showModal} />
        <img src={img4} data-image="3" data-category="background" onClick={showModal} />
        <img src={img5} data-image="4" data-category="background" onClick={showModal} />
        <img src={img6} data-image="5" data-category="background" onClick={showModal} />
        <img src={img7} data-image="6" data-category="background" onClick={showModal} />
        <img src={img8} data-image="7" data-category="background" onClick={showModal} />
        <img src={img9} data-image="8" data-category="background" onClick={showModal} />
      </div>

      <span className={style.subtitle}>Character Design</span>
      
      <div className={model_style.imagebox}>
        <img src={model1} data-image="0" data-category="character" onClick={showModal}/>
        <img src={model2} data-image="1" data-category="character" onClick={showModal}/>
        <img src={model3} data-image="2" data-category="character" onClick={showModal}/>
        <img src={img11} data-image="3" data-category="character" onClick={showModal}/>
        <img src={img13} data-image="4" data-category="character" onClick={showModal}/>
        <img src={img12} data-image="5" data-category="character" onClick={showModal}/>
      </div>
      
      <div className={style.turtleBox}>
        <img src={img10} className={style.turtle} data-image="6" data-category="character" onClick={showModal}/>
      </div>
      
      <span className={style.subtitle}>Visual Development</span>

      <div className={style.visBox}>
        <div className={style.visColumn1}>
          <img src={img14} data-image="0" data-category="visual" onClick={showModal}/>
        </div>
        <div className={style.visColumn}>
          <img src={img15} data-image="1" data-category="visual" onClick={showModal}/>
          <img src={img16} data-image="2" data-category="visual" onClick={showModal}/>
        </div>
      </div>

    </div>
  </>)
}

export default Design