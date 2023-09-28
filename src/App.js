import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolioo from './components/Portfolioo/Portfolioo';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';

export default function App() {
  return <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  
}




let routers = createBrowserRouter ([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about" ,element:<About/>},
    {path:"portfolioo" ,element:<Portfolioo/>},
    {path:"contact" ,element:<Contact/>},
    {path:"*" ,element:<Notfound/>}
  ]}
])