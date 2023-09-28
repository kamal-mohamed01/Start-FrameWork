import React from 'react'
import Style from "./Contact.module.css"
export default function Contact() {
  return <>
  <section className='contant py-5 '>
      <h2 className=' fw-bolder text-center mb-5'>
      CONATCT SECTION
      </h2>
      <div className={`${Style.line} text-center icon`}>
          <i className='fa-solid fa-star fa-xl'></i>
      </div>

      <div className="w-50 m-auto mt-4">
          <form action="">
              <input type="text" placeholder='User Name' className=' mb-5 w-100 border-0 border-bottom rounded-0 form-control forn-control-lg'/>
              <input type="number" placeholder='User Age' className=' mb-5 w-100 border-0 border-bottom rounded-0 form-control forn-control-lg'/>
              <input type="email" placeholder='User Email' className='mb-5 w-100 border-0 border-bottom rounded-0 form-control forn-control-lg'/>
              <input type="password" placeholder='User Password' className=' mb-5 w-100 border-0 border-bottom rounded-0 form-control forn-control-lg'/>
          <button className={`${Style.send} btn`}>send Message</button>
          </form>
      </div>

  </section>


  </>
}
