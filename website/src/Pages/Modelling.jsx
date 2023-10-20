import React, { useState } from "react";
import style from "./Modelling.module.scss"
import model_style from "./Modelling.module.scss"
import model1 from '../Media/model_1.jpg'
import model2 from '../Media/model_2.jpg'
import model3 from '../Media/model_3.jpg'
import Header from '../Components/Header';
import Modal from "../Components/Modal";


const Modelling = ({ page, setPage }) => {

  const [modal, changeModal] = useState(false);
  const [imageNum, changeImageNum] = useState(0);
  
  const imageArray = [model1, model2, model3]
  const [is2d, change2d] = useState(true);

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
  
    <div className={style.mainBox} style={is2d ? {display: 'flex'} : { display: 'none' } }>
      
      <div className={style.chooseSubtitle}>
        <span className={style.subtitle} style={{ opacity: '1' }} onClick={() => { change2d(true) }} >2D Animation Demo Reel</span>
        <span className={style.subtitle} style={{ opacity: '0.5' }} onClick={() => { change2d(false) }}>3D Animation Demo Reel</span>
      </div>
      
      <iframe width="854" height="480" src="https://www.youtube.com/embed/XCqEdtsOMmI?autoplay=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
    </div>

    <div className={style.mainBox} style={is2d ? { display: 'none' } : { display: 'flex' } }>

      <div className={style.chooseSubtitle}>
        <span className={style.subtitle} style={{ opacity: '0.5' }} onClick={() => { change2d(true) }} >2D Animation Demo Reel</span>
        <span className={style.subtitle} style={{ opacity: '1' }} onClick={() => { change2d(false) }} >3D Animation Demo Reel</span>
      </div>

      <iframe width="854" height="480" src="https://www.youtube.com/embed/jnF6tVMF51I?autoplay=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </>)
}

export default Modelling