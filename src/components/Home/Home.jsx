import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Styles
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.hero}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
          }}
        >
          <SwiperSlide>
            <div className={`${classes.banner1} ${classes.banner}`} />
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.banner2} ${classes.banner}`} />
          </SwiperSlide>
        </Swiper>
      </div>

      <h2
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
      >
        Categories
      </h2>
      <div className={classes.categories}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          slidesPerView={2}
          spaceBetween={20}
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
          }}
          breakpoints={{
            800: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className={`${classes.category1} ${classes.categoryBanner}`}>
              <Link to="/category/1" className={classes.categoryTitle}>
                Accesories
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.category2} ${classes.categoryBanner}`}>
              <Link to="/category/2" className={classes.categoryTitle}>
                Cellphones
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.category3} ${classes.categoryBanner}`}>
              <Link to="/category/3" className={classes.categoryTitle}>
                Tablets
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.category4} ${classes.categoryBanner}`}>
              <Link to="/category/4" className={classes.categoryTitle}>
                Computers
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${classes.category5} ${classes.categoryBanner}`}>
              <Link to="/category/5" className={classes.categoryTitle}>
                Tv's
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
