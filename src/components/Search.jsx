import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Search = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      function animProperties() {
        return {
          y: -50,
          opacity: 0,
        };
      }

      ScrollTrigger.create({
        trigger: ".explore-section",
        start: "bottom 80%",
        animation: gsap
          .timeline()
          .from(".search-white-cont", {
            y: -60,
            opacity: 0,
          })
          .from(".search-heading-cont", animProperties())
          .from(".search-bubble", animProperties())
          .from(".search-btn", animProperties())
          .from(".search-para", animProperties()),
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section className="bg-black w-[100%] flex flex-col justify-center items-center pb-16">
      <section className="bg-white w-[60%] mx-auto py-8 rounded-2xl pb-28 search-white-cont">
        <div className="search-heading-cont">
          <h2 className="uppercase text-4xl text-black font-bold text-center ">
            start
          </h2>
          <h2 className="uppercase text-4xl text-black font-bold text-center ">
            search
          </h2>
        </div>
        <div className="flex justify-between w-[80%] mt-10 mx-auto">
          <div className="uppercase text-center text-4xl text-black font-bold bg-[#ccc] px-5 rounded-3xl py-3 search-bubble">
            hair
          </div>
          <div className="uppercase text-center text-4xl text-black font-bold bg-[#ccc] px-5 rounded-3xl py-3 search-bubble">
            face
          </div>
          <div className="uppercase text-center text-4xl text-black font-bold bg-[#ccc] px-5 rounded-3xl py-3 search-bubble">
            body
          </div>
        </div>
      </section>
      <button className="mt-7 uppercase bg-red-800 text-white font-medium py-3 px-7 mx-auto text-center rounded-2xl search-btn">
        sign up
      </button>
      <p className="text-white font-medium mt-4 search-para">
        Create an account to personalise your search results
      </p>
    </section>
  );
};

export default Search;
