import React from 'react'
import Slider from "react-slick";
import { larabackInstance } from '../axiosInstance';

import styles from "./index.module.css";


export default function Home(props) {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { slider } = props;

  console.log(process.env.LARABACK)


  const slides = slider.map((e) => {
    return (
      <div key={e.id}>
        <div className={styles.sliderSingleSlide}>
          {/* <h3>{e.file_name}</h3> */}
          <img src={`${process.env.LARABACK}/${e.file_url}`} alt={e.file_name} />
        </div>
      </div>
    )
  })

  return (
    <div>
      <Slider {...settings} className={styles.sliderOverride} >
        {slides}
      </Slider>
    </div>
  )
}


export async function getServerSideProps(context) {

  const request = await larabackInstance.get("/sliders");
  const response = await request.data;
  return {
    props: {
      slider: response
    },
  }
}