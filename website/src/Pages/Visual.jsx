import React, { useState } from "react";
import style from "./Visual.module.scss"

import pdf from '../Media/Loreal_Branding_Project.pdf'


import Header from '../Components/Header';

const Visual = ({ page, setPage }) => {

  return (<>
    
    <Header 
      page={page}
      setPage={setPage}
    />
  
    <div className={style.mainBox}>
      
      <span className={style.subtitle}>Loreal Brandstorm Project</span>
      
      <object data={pdf} className={style.pdf} />
      

    </div>
  </>)
}

export default Visual