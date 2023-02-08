import React, { useEffect, useState } from "react";
import style from './Header.module.scss'

const Header = ({ page, setPage }) => {

  const [poop, setPoop] = useState(true)

  const changePage = (e) => {
    const pageNum = e.target.getAttribute("data-page");
    setPage(pageNum);
    setPoop(!poop);
  }

  return (
  <div className={style.box}>
    <div className={style.top}>
      <div className={style.greybox} />
      <div className={style.nameBox}>
        <span className={style.name}>RISSA PUTRA</span>
        <span className={style.tag}>@riemiee</span>
      </div>
    </div>
    
    <div className={style.bot}>
      <div className={style.nav} style={page == 0 ? {opacity: 1} : {}} data-page='0' onClick={changePage}>STORY</div>
      <div className={style.nav} style={page == 1 ? {opacity: 1} : {}} data-page='1' onClick={changePage}>3D</div>
      <div className={style.nav} style={page == 2 ? {opacity: 1} : {}} data-page='2' onClick={changePage}>ANIMATION</div>
      <div className={style.nav} style={page == 3 ? {opacity: 1} : {}} data-page='3' onClick={changePage}>ABOUT</div>
    </div>
  
  </div>)
}

export default Header;