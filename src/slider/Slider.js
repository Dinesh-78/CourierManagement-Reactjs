import React from "react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import { sliderdata } from "./slider-data";
const Slider = () =>{
    const [currslide, setcurrslide ]= useState(0)
    return(
        
        <div className="slider">
            <AiFillCaretLeft className="leftarr" />
            <AiFillCaretRight className="rightarr" />

              {sliderdata.map((slide, index) =>{
                return(
                    <div className={index === currslide ?
                       "slide curr" : "slide"} key={index}>
                          {index === currslide && (
                            <>
                            <img src={slide.image} alt="slide" />
                            <div className="context">
                              <h2>{slide.head}</h2>
                               <p>{slide.desc}</p>
                               <button className="btn">Book Now</button>
                            </div>
                             </>
                          )}
                        </div>
                )
              })}
        </div>

    )
}
export default Slider