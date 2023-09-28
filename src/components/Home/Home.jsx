import React from 'react'
import img from "../../Assets/imgs/avataaars (2).svg"
import Style from './Home.module.css'
export default function Home() {
  return <>

  <header className={` ${Style.hed} vh-100 d-flex align-items-center text-center justify-content-center`}>
      <div>
      <img className=' w-75'  src={img} alt="poy" />
      <h1 className='text-white fw-bolder my-3'>START FRAMEWORK</h1>
      <div className={`${Style.line} icon`}>
          <i className='fa-solid fa-star text-white fa-xl'></i>
      </div>
      <p className=' text-white mt-3 '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
  </header>


      </>
  
}
