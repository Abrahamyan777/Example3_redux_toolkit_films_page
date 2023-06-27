import css from './ImgSlider.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { Component } from 'react';



function ImgSlider ({image_urls}) {
     let settings = {
        dot: true,
        infinity: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
     }

    return (
        <Slider {...settings}>
            {
                image_urls.map(url => {
                    return (
                        <div  key={url} className="card-wrapper">
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={url} alt="img"/>
                                </div>
                                <ul >
                                    <li><a href='#' >Icon</a></li>
                                    <li><a href='#' >Icon</a></li>
                                    <li><a href='#' >Icon </a></li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }

        </Slider>
    )
}

export default ImgSlider;