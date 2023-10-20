import React, { useState } from "react";
import style from "./Design.module.scss"
import model_style from "./Design.module.scss"
import model1 from '../Media/model_1.jpg'
import model2 from '../Media/model_2.jpg'
import model3 from '../Media/model_3.jpg'
import img1 from '../Media/Background_Coloured_Thumbnails2.png'
import img2 from '../Media/RocketRide_Paint_BGs.png'
import img3 from '../Media/RocketRide_Paint_BGs (2).png'
import img4 from '../Media/RocketRide_Paint_BGs (3).png'
import img5 from '../Media/RocketRide_Paint_BGs (4).png'
import img6 from '../Media/RocketRide_Paint_BGs (5).png'
import img7 from '../Media/RocketRide_Paint_BGs (6).png'
import img8 from '../Media/RocketRide_Paint_BGs (7).png'
import img9 from '../Media/Styleframe_Paint_Story.png'


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

  const [modal, changeModal] = useState(false);
  const [imageNum, changeImageNum] = useState(0);
  
  const imageArray = [model1, model2, model3]
  
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
      
      <span className={style.subtitle}>Background Design</span>
      
      <div className={style.imgBox}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
        <img src={img9} />
      </div>

      <span className={style.subtitle}>Character Design</span>
      
      <div className={model_style.imagebox}>
        <img src={model1} data-image='0' onClick={showModal}/>
        <img src={model2} data-image='1' onClick={showModal}/>
        <img src={model3} data-image='2' onClick={showModal}/>
        <img src={img11} />
        <img src={img13} />
        <img src={img12} />
      </div>
      
      <div className={style.turtleBox}>
        <img src={img10} className={style.turtle} />
      </div>
      
      <span className={style.subtitle}>Visual Development</span>

      <div className={style.visBox}>
        <div className={style.visColumn1}>
          <img src={img14} />
        </div>
        <div className={style.visColumn}>
          <img src={img15} />
          <img src={img16} />
        </div>
      </div>

    </div>
  </>)
}

export default Design