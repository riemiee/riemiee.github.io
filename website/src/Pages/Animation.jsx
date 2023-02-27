import React, { useState } from "react";
import style from "./Story.module.scss"
import styles from "./Animation.module.scss"
import Header from '../Components/Header';
import anim1 from '../Media/anim1.gif'
import anim2 from '../Media/anim2.gif'
import anim3 from '../Media/anim3.gif'
import anim4 from '../Media/anim4.gif'

import img1 from '../Media/anim1.png'
import img2 from '../Media/anim2.png'
import img3 from '../Media/anim3.png'
import img4 from '../Media/anim4.png'

import Modal from "../Components/Modal";


const Animation = ({ page, setPage}) => {

  const [gifNum, setGifNum] = useState(0)
  const [gifNumModal, setGifNumModal] = useState(0)
  
  const [modal, changeModal] = useState(false);
  
  const [selected1, setSelected1] = useState(true)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)
  const [selected4, setSelected4] = useState(false)

  
  const gifArray = [anim1, anim2, anim3, anim4]
  
  const showModal = (e) => {
    setGifNumModal(gifNum)
    changeModal(true);
  }

  const setMainGif = (e) => {
    console.log('asdasd')
    const imageNum = Number(e.target.getAttribute("data-image"));
    setGifNum(imageNum)
    setSelected1(false)
    setSelected2(false)
    setSelected3(false)
    setSelected4(false)
    
    if (imageNum === 0) {
      setSelected1(true)
    }
      
    else if (imageNum === 1) {
      setSelected2(true)
    }
    
    else if (imageNum === 2) {
      setSelected3(true)
    }
    
    else if (imageNum === 3) {
      setSelected4(true)
    }
    
  }

  return (<>
    {modal
    ? <Modal 
      changeModal={changeModal}
      imageArray={gifArray}
      imageNum={gifNumModal}
      changeImageNum={setGifNumModal}
    /> :
    ''
    }
  
    <Header 
      page={page}
      setPage={setPage}
    />
  
    <div className={style.mainBox}>
      <div className={style.titleBox}>ANIMATION</div>
      
      <span className={style.subtitle}>Short Animated Film</span>
      
      <iframe width="650" height="361" src="https://www.youtube.com/embed/6r5LLSmRc3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className={styles.subHeadBox}>
        <span className={styles.subHead}>Hard Pressed (2022)</span>
        <span className={styles.subText}>sedkjfiojasdkljaskljdklasjkldjklasjdklasjkldjlasjdklsjakl jlasj ljksad jlasjl jjkash kjshad jkash d jklhaskj hjkas kasjh jkash d jkhkasdh kasjh ljash jjlas jljkas jlasjd loasjdh ojas ojdasuohd ouiashuid oash douasdhodu uioas uash uioasdhuih uihdiuashd hasjkdh uikjashdkjash dkjasdh jkdh jkashd</span>
      </div>
      
      <span className={style.subtitle}>Animation Installation</span>
      
      <div className={styles.imagebox}>
        <img src={gifArray[gifNum]} className={styles.gif} data-image='0' onClick={showModal}/>
      </div>
      
      <div className={styles.miniImage}>
        <img src={img1} className={`${styles.selectImg} ${selected1 ? styles.select : ''}`} data-image='0' onClick={setMainGif}/>
        <img src={img2} className={`${styles.selectImg} ${selected2 ? styles.select : ''}`} data-image='1' onClick={setMainGif}/>
        <img src={img3} className={`${styles.selectImg} ${selected3 ? styles.select : ''}`} data-image='2' onClick={setMainGif}/>
        <img src={img4} className={`${styles.selectImg} ${selected4 ? styles.select : ''}`} data-image='3' onClick={setMainGif}/>
      </div>
      
    </div>
  </>)
}

export default Animation