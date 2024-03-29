import React, { useEffect } from "react";
import img from "../imagews/airbnb-host-welcoming-guests.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Explore = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let cards = gsap.utils.toArray(".explore-card");
      let headings = gsap.utils.toArray(".card-heading");
      let exploreImages = gsap.utils.toArray(".explore-images");
      let seeMore = document.querySelector(".explore-seeMore");

      let headingAnim = gsap.from(".explore-heading", {
        x: -200,
      });

      function callAnims(anim, trigger) {
        ScrollTrigger.create({
          trigger: trigger || ".explore-section",
          start: "top 80%",
          animation: anim,
        });
      }

      callAnims(headingAnim);

      //   Animation for the individual images of each card
      exploreImages.forEach((image) => {
        let cardImageAnim = gsap.from(image, {
          x: -200,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
        });
        callAnims(cardImageAnim, image);
      });
      //   Animation for the individual headings of each card
      headings.forEach((heading) => {
        let cardHeadingAnim = gsap.from(heading, {
          x: -200,
          //   stagger: 0.2,
        });
        callAnims(cardHeadingAnim, heading);
      });

      // Animation for "see more" text fade in
      let seeMoreAnim = gsap.from(seeMore, {
        x: -200,
      });
      callAnims(seeMoreAnim, seeMore);
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="bg-black w-[100%] py-10 pb-16 explore-section">
      <h2 className="uppercase text-white font-bold ml-[5%] mb-4 text-xl overflow-hidden">
        <div className="explore-heading">explore</div>
      </h2>
      <section className="w-[90%] mx-auto flex justify-between gap-9">
        <div className="p-4 bg-white rounded-lg explore-box overflow-hidden explore-card">
          <img
            className="h-[300px] w-[100%] rounded-tr-lg rounded-tl-lg explore-images"
            src={img}
            alt="user"
          />
          <div className="bg-white py-7 px-0 pb-0">
            <h2 className="card-heading font-bold text-2xl">Ifmaestheic</h2>
            <h2 className="card-heading font-bold  text-2xl uppercase mt-2">
              AESTHEICS
            </h2>
            <div className="flex my-6 justify-between">
              <div className="flex ">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <h2 className="my-auto ml-1">Mobile</h2>
              </div>
              <div className="ml-8">
                <span>£ 120</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex my-auto">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <h2 className="ml-2 my-auto">1hour 0Minutes</h2>
              </div>
              <button className=" mt-4 bg-slate-600 text-white px-2 py-2 rounded-md">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg explore-box overflow-hidden explore-card">
          <img
            className="h-[300px] w-[100%] rounded-tr-lg rounded-tl-lg explore-images"
            src={img}
            alt="user"
          />
          <div className="bg-white py-7 px-0 pb-0">
            <h2 className="card-heading font-bold text-2xl">Ifmaestheic</h2>
            <h2 className="card-heading font-bold  text-2xl uppercase mt-2">
              AESTHEICS
            </h2>
            <div className="flex my-6 justify-between">
              <div className="flex ">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <h2 className="my-auto ml-1">Mobile</h2>
              </div>
              <div className="ml-8">
                <span>£ 120</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex my-auto">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <h2 className="ml-2 my-auto">1hour 0Minutes</h2>
              </div>
              <button className=" mt-4 bg-slate-600 text-white px-2 py-2 rounded-md">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg explore-box overflow-hidden explore-card">
          <img
            className="h-[300px] w-[100%] rounded-tr-lg rounded-tl-lg explore-images"
            src={img}
            alt="user"
          />
          <div className="bg-white py-7 px-0 pb-0">
            <h2 className="card-heading font-bold text-2xl">Ifmaestheic</h2>
            <h2 className="card-heading font-bold  text-2xl uppercase mt-2">
              AESTHEICS
            </h2>
            <div className="flex my-6 justify-between">
              <div className="flex ">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <h2 className="my-auto ml-1">Mobile</h2>
              </div>
              <div className="ml-8">
                <span>£ 120</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex my-auto">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <h2 className="ml-2 my-auto">1hour 0Minutes</h2>
              </div>
              <button className=" mt-4 bg-slate-600 text-white px-2 py-2 rounded-md">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg explore-box overflow-hidden explore-card">
          <img
            className="h-[300px] w-[100%] rounded-tr-lg rounded-tl-lg explore-images"
            src={img}
            alt="user"
          />
          <div className="bg-white py-7 px-0 pb-0">
            <h2 className="card-heading font-bold text-2xl">Ifmaestheic</h2>
            <h2 className="card-heading font-bold  text-2xl uppercase mt-2">
              AESTHEICS
            </h2>
            <div className="flex my-6 justify-between">
              <div className="flex ">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <h2 className="my-auto ml-1">Mobile</h2>
              </div>
              <div className="ml-8">
                <span>£ 120</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex my-auto">
                <svg
                  className="w-[20px] h-[20px] my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <h2 className="ml-2 my-auto">1hour 0Minutes</h2>
              </div>
              <button className=" mt-4 bg-slate-600 text-white px-2 py-2 rounded-md">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <h2 className="uppercase text-white font-bold text-center  mt-7 text-xl overflow-hidden max-w-[200px] mx-auto">
        <div className="explore-seeMore">see more</div>
      </h2>
    </section>
  );
};

export default Explore;
