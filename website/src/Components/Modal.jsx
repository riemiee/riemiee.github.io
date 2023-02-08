import React, { useState } from "react";
import style from "./Modal.module.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Modal = ({ changeModal, imageArray, imageNum, changeImageNum }) => {

  const updateImageForward = (e) => {
    if (imageNum === 2) {
      changeImageNum(0);
    } else {
      changeImageNum(imageNum + 1)
    }
    console.log(imageNum)
    e.stopPropagation()
  }
  
  const updateImageBackward = (e) => {
    if (imageNum === 0) {
      changeImageNum(2);
    } else {
      changeImageNum(imageNum - 1)
    }
    console.log(imageNum)
    e.stopPropagation()
  }

  const closeModal = () => {
    changeModal(false);
  }
  
  const pointer = {cursor: 'pointer'};

  return (
    <div className={style.main} onClick={closeModal}>
      <ArrowBackIosNewIcon 
        sx={{ fontSize: 40 }}
        style={pointer}
        onClick={updateImageBackward}
      />
      <img src={imageArray[imageNum]} />
      <ArrowForwardIosIcon 
        sx={{ fontSize: 40 }}
        style={pointer}
        onClick={updateImageForward}
      />
    </div>
  )
}

export default Modal;