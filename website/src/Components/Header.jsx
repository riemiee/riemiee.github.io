import React, { useEffect, useState } from "react";
import style from './Header.module.scss'
import { useNavigate, NavLink } from 'react-router-dom';
import './header.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = ({ page, setPage }) => {

  const [pageName, setPageName] = useState('temporary');
  const [dropping, setDropping] = useState(false);
  const [firstLink, setFirstLink] = useState(<NavLink className={style.nav} to='/'>ANIMATION</NavLink >);
  const [navArray, setNavArray] = useState([
        <NavLink className={style.nav} to='/'>ANIMATION</NavLink >,
        <NavLink className={style.nav} to='/storyboard'>STORYBOARDS</NavLink >,
        <NavLink className={style.nav} to='/design'>DESIGN</NavLink >,
        <NavLink className={style.nav} to='/projects'>PROJECTS</NavLink >]
  );

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        break;
      case '/storyboard':
        let tempArray = navArray;
        let index = 1;
        tempArray.unshift(tempArray.splice(index, 1)[0]);
        setNavArray(tempArray)
        setFirstLink(tempArray[0])
        console.log(navArray[0])
        break;
      case '/design':
        let teempArray = navArray;
        let indexx = 2;
        teempArray.unshift(teempArray.splice(indexx, 1)[0]);
        setNavArray(teempArray)
        setFirstLink(teempArray[0])
        console.log(navArray[0])
        break;
      case '/projects':
        let tempArraay = navArray;
        let indeex = 3;
        tempArraay.unshift(tempArraay.splice(indeex, 1)[0]);
        setNavArray(tempArraay)
        setFirstLink(tempArraay[0])
        console.log(navArray[0])
        break;
    }
  }, [navArray])

  const dropDown = (e) => {
    setDropping(!dropping);
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
      <NavLink className={style.nav} to='/'>ANIMATION</NavLink >
      <NavLink className={style.nav} to='/storyboard'>STORYBOARDS</NavLink >
      <NavLink className={style.nav} to='/design'>DESIGN</NavLink >
      <NavLink className={style.nav} to='/projects'>PROJECTS</NavLink >
      <a className={style.nav} href="http://www.linkedin.com/in/rissaputra" target="_blank" style={page == 4 ? { opacity: 1 } : {}} data-page='4'>ABOUT</a>
    </div>

    <div className={style.botMobile}>
      <div className={style.topSideMobile}>
        <KeyboardArrowDownIcon className={style.arrow} onClick={dropDown}/>
          {firstLink}
      </div>
      <div className={`${style.mobileNav} ${dropping ? style.dropdown : style.droptop}`}>
        {navArray.slice(1)}
        <a className={style.nav} href="http://www.linkedin.com/in/rissaputra" target="_blank" style={page == 4 ? { opacity: 1 } : {}} data-page='4'>ABOUT</a>
      </div>
    </div>
  
  </div>)
}

export default Header;