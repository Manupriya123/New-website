import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Knowledgebase = () => {

    const data = [
      {
        title: "Psymate Clinic Noida",
        address:
          "D-4, D Block, Pocket D, Sector 20, Noida, Uttar Pradesh 201301",
        img: "icon1.svg",
      },
      {
        title: "Psymate Clinic South Delhi",
        address:
          "Vikram Vikram, Medical Center, 18A, Ring Rd, Lajpat Nagar 4, Delhi 110026",
        img: "icon2.svg",
      },
      {
        title: "Psymate Clinic Gurgaon",
        address: "Golf Course Road , Gurugram",
        img: "icon3.svg",
      },
    ];

    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-style-2",
            nextEl: ".swiper-button-next-style-2",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1199: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1350: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="swiper-wrapper"
        >
          {data.map((item, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <div className="card-guide">
                <div className="card-image">
                  <img src={`assets/imgs/page/help/${item.img}`} alt="iori" />
                </div>
                <div className="card-info">
                  <h5 className="color-brand-1 mb-15">{item.title}</h5>
                  <p className="font-xs color-grey-500">{item.address}</p>
                  <div className="mt-10">
                    <div className="list-socials mt-0">
                      <a className="icon-socials icon-facebook" href="#" />
                      <a className="icon-socials icon-twitter" href="#" />
                      <a className="icon-socials icon-instagram" href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
};

export default Knowledgebase;

