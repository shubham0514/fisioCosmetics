import React, { useState } from 'react'
import { Reviews } from '../page'

export const Testimonial = () => {
    const [card, setCard] = useState(1);
    return (
        <div className=" bg-[#F5EFE8]">
            <h2 className="text-3xl font-400 text-center text-[#654b2e] flex items-center justify-center pt-8 pb-8">
                <hr className="w-[10em] mx-3 opacity-17" />
                Testimonial
                <hr className="w-[10em] mx-3 opacity-17" />
            </h2>

            <div className="justify-center grid grid-cols-1 md:grid-cols-4 mx-auto max-w-[95%] bg-whitesmoke px-6 pb-4 gap-2">
                {Reviews.map((review, index) => {
                    if (card <= index + 1 && index + 1 < card + 4) {
                        return (
                            <div className="flex flex-col items-center justify-around bg-white text-black shadow-lg" key={index}>
                                <div className=" top-0 left-0 w-full h-40 bg-gradient-to-b flex flex-col items-center justify-center p-4 from-transparent to-white">
                                    <img src="/images/avatar.jpg" alt="Customer 1" className="h-20 w-20 object-cover rounded-full" />
                                    <p className="text-xs font-500 text-center mt-2"> {review.name}</p>
                                    <p className="text-xs font-500 text-center mt-2">⭐️⭐️⭐️⭐️⭐️</p>
                                </div>
                                <div className=" z-10 p-4">
                                    <p className="text-sm font-500 text-center">{review.review}</p>
                                </div>
                            </div>
                        )
                    }
                }
                )}
            </div>
            <div className="dots flex justify-center gap-2 mt-4">
                <span className="dot w-4 h-4 p-1 rounded-full bg-white border-2 border-[#b1a08d]-500 cursor-pointer" onClick={() => setCard(1)}></span>
                <span className="dot w-4 h-4 p-1 rounded-full bg-white border-2 border-[#b1a08d]-500 cursor-pointer" onClick={() => setCard(5)}></span>
            </div>
        </div>
    )
}
