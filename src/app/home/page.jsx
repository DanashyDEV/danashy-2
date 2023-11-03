"use client";
import { useState, useEffect } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useScreenSize from "../components/useScreenSize";
import HeroImage from "../components/heroImage/HeroImage";
import { Services, InfoServices } from "./Services";
import Sections from "../components/sections/Sections";
import Presentation from "../components/presentation/Presentation";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

import style from "./Home.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Start() {
  const [cards, setCards] = useState(4);
  const width = useScreenSize();

  useEffect(() => {
    if (width >= 1200) {
      setCards(4);
    } else if (width >= 700 && width < 1200) {
      setCards(2);
    } else {
      setCards(1);
    }
  }, [width]);

  return (
    <main>
      <section id="" className={style.containerHero}>
        <HeroImage
          id="home"
          title="SOLUCIONES ESPECIALIZADAS PARA INSTALACIONES INTELIGENTES"
          description="Adquiere la mejor seguridad, confort y control de las instalaciones de
          tu organización, desde edificios y plazas comerciales hasta unidades
          habitacionales."
        />
      </section>
      <div className={`${style.containerCards}`}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={cards}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {Services.map((option) => {
            return (
              <div
                key={option.ind}
                className={`${style.cardcontainer} ${style.center}`}
              >
                <SwiperSlide key={option.ind} className={`${style.center}`}>
                  <p className={`${style.description}`}>{option.li}</p>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
      <section id="about-us" className={`${style.containerAbout}`}>
        <Presentation />
      </section>
      <section id="services" className={`${style.containerServices}`}>
        <p className={`${style.titleServices}`}>NUESTROS SERVICIOS</p>
        <div className={style.services}>
          {InfoServices.map((element) => {
            return <Sections key={element.alt} props={element} />;
          })}
        </div>
      </section>
      <section id="contact" className={`${style.contact}`}>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
