"use client";

import { FeatureRange } from "./components/FeatureRange";
import { Testimonial } from "./components/Testimonial";
import { Category } from "./components/Category";
import { BestSeller } from "./components/BestSeller";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules";


export const Reviews = [{ name: "Maria Rossi", rating: 5, review: "I've been using this product for a few months now and it has completely transformed my skin. I'm so happy with the results!", Avatar: "/images/avatar.jpg" },
{ name: "Luca Bianchi", rating: 4, review: "Great quality and effective results. My skin feels rejuvenated and healthy.", Avatar: "/images/Product1.jpg" },
{ name: "Giulia Verdi", rating: 5, review: "I love the natural ingredients in this product. It works wonders for my sensitive skin.", Avatar: "/images/Product1.jpg" },
{ name: "Marco Neri", rating: 4, review: "Good value for money. I've noticed a significant improvement in my skin texture.", Avatar: "/images/Product1.jpg" },
{ name: "Sofia Gallo", rating: 5, review: "This is now a staple in my skincare routine. Highly recommend to anyone looking for quality skincare.", Avatar: "/images/Product1.jpg" },
{ name: "Alessandro Russo", rating: 5, review: "Fantastic product! My skin has never felt better. Will definitely repurchase.", Avatar: "/images/Product1.jpg" },
{ name: "Elena Ferri", rating: 4, review: "Very pleased with the results. The product is gentle yet effective.", Avatar: "/images/Product1.jpg" },
{ name: "Davide Moretti", rating: 5, review: "Exceeded my expectations! My skin looks radiant and feels amazing.", Avatar: "/images/Product1.jpg" }];

export default function Home() {

  return (
    <div className="flex min-h-screen justify-center bg-[#F5EFE8] font-sans ">
      <main className="">
        <div className="flex justify-between">
          <div className="text-4xl font-bold w-full text-center text-[#654b2e] relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="w-full h-[40vh] md:h-[55vh] lg:h-[65vh]">
              <SwiperSlide className="relative">
                <img className="w-full h-[80vh] object-cover" src="/images/banner1.png" alt="Banner Fisio" />
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
                  <h1 className="text-3xl mb-3">Premium Italian Plant-Based Cosmetics</h1>
                  <p className="text-3xl mb-6">Powered by Science & Nature</p>
                  <div className="flex gap-4 justify-center">
                    <button className="bg-[#b1a08d] border-whitesmoke-4 text-white text-xl px-4 py-3 rounded-md hover:bg-[#654b2e]">Shop Collection</button>
                    <button className="bg-[#b1a08d] border-whitesmoke-4 text-white text-xl px-4 py-3 rounded-md hover:bg-[#654b2e]">Explorer Products</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img className="w-full h-[80vh] object-cover" src="/images/banner1.png" alt="Banner Fisio" />
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
                  <h1 className="text-3xl mb-3">Premium Italian Plant-Based Cosmetics</h1>
                  <p className="text-3xl mb-6">Powered by Science & Nature</p>
                  <div className="flex gap-4 justify-center">
                    <button className="bg-[#b1a08d] border-whitesmoke-4 text-white text-xl px-4 py-3 rounded-md hover:bg-[#654b2e]">Shop Collection</button>
                    <button className="bg-[#b1a08d] border-whitesmoke-4 text-white text-xl px-4 py-3 rounded-md hover:bg-[#654b2e]">Explorer Products</button>
                  </div>
                </div>
              </SwiperSlide>



            </Swiper>
            {/* <img className="w-full h-[80vh] bg-cover" src="/images/banner1.png" alt="Banner Fisio" />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <h1 className="text-3xl mb-3">Premium Italian Plant-Based Cosmetics</h1>
              <p className="text-3xl mb-6">Powered by Science & Nature</p>
              <div className="flex gap-4 justify-center">
                <button className="bg-[#b1a08d] border-whitesmoke-4 text-white text-xl px-4 py-3 rounded-md hover:bg-[#654b2e]">Shop Collection</button>
                <button className="bg-[#b1a08d] border-whitesmoke-4 text-white text-xl px-4 py-3 rounded-md hover:bg-[#654b2e]">Explorer Products</button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="h-15 w-100% bg-[rgb(253,246,246)] text-black">
          <h2 className="text-xl font-500 text-center py-4 justify-center flex items-center">
            <p>🌿 Plant Based</p> <hr /> <p>🐰 Cruelty Free </p> <p>🧪 Dermatologically Tested</p> <p>🍃 Natural Ingredients</p>
          </h2>
        </div>

        {/* Shop By Category */}
        <Category />
        {/* Shop By Category */}

        {/* Feature Range */}
        <FeatureRange />
        {/* Feature Range */}
        {/* Best Seller */}
        <BestSeller />
        {/* Best Seller */}
        <Testimonial />


      </main>
    </div>
  );
}
