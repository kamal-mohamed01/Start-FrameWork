import React from 'react'
import Style from './About.module.css'
export default function About() {
  return <>
  
  
  
  
  <section className={` ${Style.color} vh-100 text-center d-flex justify-content-center align-items-center`}>
            <div>
            <h2 className=' fw-bold text-white fs-1  mb-4'>ABOUT COMPONENT</h2>
            <div className={`${Style.line} icon`}>
            <i className='fa-solid fa-star text-white fa-xl'></i>
        </div>
                <div className=' container '>
                    <div className="row">
                        <div className="col-md-6">
                            <p className='text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6">
                            <p className='text-white '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                </div>
            </div>

            </div>
        </section>
          
  
  
  
  
  
  
  
  
  
  
  
  </>
}
