// 1st way to image show

import img from "../images/Kolhapur.jpg";


// 2nd way to image show

import React from "react"

const Threewaytoimportimages = () => {
  return (
    <div>
   <h2>Multiple Components card KK</h2>

      {/* 1st way to image show */}
      <img src={img} alt="kolhapur images" style={{width: "30%", height: "40%" }}/>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, dolor!</p>

      {/* 2nd way to image show */}

      {/* <img src="/react-kushal/src/images/Kolhapur.jpg" alt="" /> */}

     {/* {3rd way to add images } */}

      {/* <img src="https://mitsde.com/assets/images/city/online-pgdm-in-nagpur.jpg" alt="" /> */}
      
      
    </div>
  )
}

export default Threewaytoimportimages
