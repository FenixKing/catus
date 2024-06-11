import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Card } from "./Card";
import "./index.css"
import Produto1 from "../../assets/produto1.png"
import Produto2 from "../../assets/produto2.png"
import Produto3 from "../../assets/produto3.png"
import Produto4 from "../../assets/produto4.png"

import LeftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"

export const ProductList = () => (
    <section className="ProductList">
        <div className="Title">
            <h2>Oportunidade para economizar</h2>
        </div>
        <div className="Bar">
            <div />
        </div>
        <div className='Swiper'>
            <img className="review-swiper-button-prev" src={LeftArrow}></img>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            > 
            <SwiperSlide>
                <Card img={Produto1} installments={"R$ 47,68"} price={"R$ 238,41"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Card img={Produto2} installments={"R$ 47,68"} price={"R$ 238,41"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Card img={Produto3} installments={"R$ 47,68"} price={"R$ 238,41"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Card img={Produto4} installments={"R$ 47,68"} price={"R$ 238,41"}/>
            </SwiperSlide>
            <SwiperSlide>
                <Card img={Produto1} installments={"R$ 47,68"} price={"R$ 238,41"}/>
            </SwiperSlide>  
            </Swiper>
            <img className="review-swiper-button-next" src={RightArrow}></img>
        </div>
    </section>
)