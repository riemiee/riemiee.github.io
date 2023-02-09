import React, { useState } from "react";
import style from "./Story.module.scss"
import model_style from "./Modelling.module.scss"
import model1 from '../Media/model_1.jpg'
import model2 from '../Media/model_2.jpg'
import model3 from '../Media/model_3.jpg'
import Header from '../Components/Header';
import Modal from "../Components/Modal";


const Modelling = ({ page, setPage }) => {

  const [modal, changeModal] = useState(false);
  const [modalImage, changeModalImage] = useState(model1);
  const [imageNum, changeImageNum] = useState(0);
  
  const imageArray = [model1, model2, model3]
  
  const showModal = (e) => {
    const imageNum = Number(e.target.getAttribute("data-image"));
    changeModalImage(imageArray[imageNum]);
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
      <div className={style.titleBox}>3D Modeling/Rigging/Animation</div>
      
      <span className={style.subtitle}>Exterminator Granny</span>
      
      <iframe width="641" height="361" src="https://www.youtube.com/embed/bq_ryTjIzJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <div className={model_style.imagebox}>
        <img src={model1} data-image='0' onClick={showModal}/>
        <img src={model2} data-image='1' onClick={showModal}/>
        <img src={model3} data-image='2' onClick={showModal}/>
      </div>
      
    </div>
  </>)
}

export default Modelling