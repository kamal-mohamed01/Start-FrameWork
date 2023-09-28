import React, { useState } from 'react'
import Style from "./Portfolioo.module.css"

import img1 from "../../Assets/imgs/poert1.png"
import img2 from "../../Assets/imgs/port2.png"
import img3 from "../../Assets/imgs/port3.png"


export default function Portfolioo() {


  const [data] = useState([
    {img:img1,id:'img1'},
    {img:img2,id:'img2'},
    {img:img3,id:'img3'},
    {img:img1,id:'img4'},
    {img:img2,id:'img5'},
    {img:img3,id:'img6'},
  ])




  return<>
  <section className='portfolioo py-5 text-center'>
    <h2 className=' fw-bolder mb-5'>PORTFOLIO COMPONENT</h2>
    <div className={`${Style.line} icon mb-5`}>
        <i className='fa-solid fa-star  fa-xl'></i>
    </div>
    <div className=' container'>
      <div className="row g-5">
        {data.map((numOfPic)=>(
        <div className="col-md-4">
          <div className={`${Style.portofolioItem}`}>
          <img src={numOfPic.img} alt="" className='w-100 rounded-4 ' />
          <div 
          data-bs-toggle="modal" 
              data-bs-target={"#"+numOfPic.id}
              className={`${Style.plus} rounded-4`}>
              <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
          </div>
        </div>
        ))}

        {data.map((numOfPic)=><>



<div className="modal fade" id={numOfPic.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-body p-0">
    <img src={numOfPic.img} className=' w-100' alt="" />
  </div>
</div>
</div>
</div>
        
        </>)}
      </div>
    </div>
  </section>




</>
}
