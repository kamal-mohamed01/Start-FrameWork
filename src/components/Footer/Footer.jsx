import React from 'react'

import Style from './Footer.module.css'

export default function Footer() {
  return<>
  <footer className={` ${Style.test}   pt-5 text-center`}>
      <div className=' container pb-4'>
          <div className="row">
              <div className="col-md-4">
                  <div className=''>
                      <h2 className=' text-white fw-bold mb-3'>LOCATION</h2>
                      <p className=' text-white  mb-2'>2215 John Daniel Drive</p>
                      <p className=' text-white  mb-2'>Clark, MO 65243</p>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div>
                      <h2 className=' text-white  fw-bold mb-3'>AROUND THE WEB</h2>
                          <div className='icon d-flex mt-3 justify-content-center align-items-center'>
                              <div className={`${Style.icon2} d-flex justify-content-center align-items-center me-3`}>
                                  <i className={`fa-brands fa-facebook fa-xl  text-white`}></i>
                              </div>
                              <div className={`${Style.icon2} d-flex justify-content-center align-items-center me-3`}>
                                  <i className={`fa-brands fa-twitter fa-xl text-white`}></i>
                              </div>
                              <div className={`${Style.icon2} d-flex justify-content-center align-items-center me-3`}>
                                  <i className={`fa-brands fa-linkedin-in text-white fa-xl`}></i>
                              </div>
                              <div className={`${Style.icon2} d-flex justify-content-center align-items-center me-3`}>
                                  <i className={`fa-solid fa-globe fa-xl text-white`}></i>
                              </div>
                          </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div>
                      <h2 className=' text-white fw-bold mb-3'>ABOUT FREELANCER</h2>
                      <p className=' text-white  mb-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  </div>
              </div>
          </div>
      </div>
      <div className=' p-3 bg-dark text-white'>
      <p>Copyright © Your Website 2021</p>
  </div>
  </footer>


  </>
}
