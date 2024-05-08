import React from "react";
import styles from "./css/About.module.css";
import me from "../images/me.JPG";
import certification from '../images/certification.jpg';
import hackerton from '../images/hackerton.jpg';
import mbti from '../images/mbti.png';
import soccer from '../images/soccer.jpeg';

import html from "../images/html.png";
import css from "../images/css.png"
import Javascript from '../images/Javascript.png';
import Python from "../images/Python.jpeg";
import react_img from "../images/react.png";
import Typescript from "../images/Typescript.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.myImage}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img src={me} className={styles.images}  alt="images"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={certification} className={styles.images} alt="images"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={hackerton} className={styles.images} alt="images"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={mbti} className={styles.images} alt="images"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={soccer} className={styles.images} alt="images"/>
          </SwiperSlide>
         
        </Swiper>
      </div>
      <div className={styles.infos}>
        <ul>
            <li>
                Name : 김범수
            </li>
            <li className={styles.divided1}>
               <div>
                    Career:
               </div>
               <div>
                   세종대학교 컴퓨터공학과 19<br/>
                   멋쟁이사자처럼 11기 FE 수료<br/>
                   멋쟁이사자처럼 12기 FE OB<br/>
               </div>
            </li>
            <li>
                MBTI : ISTJ
            </li>
            <li>
                Hobby : 축구, 헬스 
            </li>
            <li className={styles.divided2}>
               <div>
                    기술 스택 
               </div>
               <div className={styles.rows_stack}>
                   <img src={html} alt="images" className={styles.stack_img}/>
                   <img src={css} alt="images" className={styles.stack_img}/> 
                   <img src={Javascript} alt="images" className={styles.stack_img}/> 
                   <img src={react_img} alt="images" className={styles.stack_img}/> 
                   <img src={Typescript} alt="images" className={styles.stack_img}/>
                   <img src={Python} alt="images" className={styles.stack_img}/>                    
               </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
