import React, { useEffect } from "react";
import img from "../imagews/airbnb-host-welcoming-guests.jpg";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-image-bubble", {
        opacity: 0,
        duration: 2,
      });

      gsap.from(".image-bubble-3", {
        y: 100,
        duration: 2,
      });

      gsap.from(".hero-rectangles", {
        scale: 0.7,
        duration: 2,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="bg-black w-[100%] py-10">
      <section className="w-[90%] mx-auto flex justify-between">
        <div>
          <div className="bg-white w-[] flex px-5 py-5 rounded-md mb-10 hero-rectangles">
            <svg
              className="w-[80px] h-[80px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <div className="ml-6 my-auto">
              <h2 className="uppercase font-bold text-center">Search</h2>
              <p>Filter from area, distance, price and style</p>
            </div>
          </div>

          <div className="bg-white w-[] flex px-5 py-5 rounded-md mb-10 hero-rectangles">
            <svg
              className="w-[80px] h-[80px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
            </svg>
            <div className="ml-6 my-auto">
              <h2 className="uppercase font-bold text-center">availability</h2>
              <p>Find appointments on for the date and time you want</p>
            </div>
          </div>
          <div className="bg-white w-[] flex px-5 py-5 rounded-md mb-10 hero-rectangles">
            <svg
              className="w-[80px] h-[80px]"
              fill="pink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
            <div className="ml-6 my-auto">
              <h2 className="uppercase font-bold text-center">for you</h2>
              <p>Find stylists who can cater you you</p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex w-[100%]">
            <img
              className="hero-image-bubble rounded-full w-[40%] h-[300px]"
              src={img}
              alt="img"
            />
            <img
              className="hero-image-bubble rounded-full w-[40%] h-[300px]"
              src={img}
              alt="img"
            />
          </div>
          <div className="flex w-[100%]">
            <img
              className="hero-image-bubble image-bubble-3 rounded-full w-[40%] h-[300px]"
              src={img}
              alt="img"
            />
            <img
              className="hero-image-bubble rounded-full w-[40%] h-[300px]"
              src={img}
              alt="img"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
