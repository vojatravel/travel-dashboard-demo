"use client";

import Swiper from "swiper";
import { Navigation, Pagination, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import styles from "./carousel.module.scss";

export const Carousel = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      modules: [Navigation, Pagination, Parallax],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 400,
      parallax: true,
      loop: true,
      spaceBetween: 20,
    });
  }, []);
  return (
    <div className={`${styles.swiperContainer} swiper-container`}>
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          backgroundImage:
            "url(https://swiperjs.com/demos/images/nature-1.jpg)",
        }}
        data-swiper-parallax="-23%"
      ></div>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="card text-center">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card text-center">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card text-center">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </div>
      <div className={`${styles.swiperPagination} swiper-pagination`}></div>
      <div className={`${styles.swiperButtonPrev} swiper-button-prev`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 12 12"
        >
          <path
            fill="currentColor"
            d="m6.81 6l2.72-2.72a.75.75 0 0 0-1.06-1.06L5.22 5.47a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06zM3 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0z"
          />
        </svg>
      </div>
      <div className={`${styles.swiperButtonNext} swiper-button-next`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 12 12"
        >
          <path
            fill="currentColor"
            d="M2.47 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L3.53 9.78a.75.75 0 0 1-1.06-1.06L5.19 6zM9.75 10a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75"
          />
        </svg>
      </div>
    </div>
  );
};
