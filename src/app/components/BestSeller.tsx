import React from 'react'

export const BestSeller = () => {
    return (
        <div className="bg-[#F5EFE8] relative">
            <h2 className="text-3xl font-400 text-center text-[#654b2e] flex items-center justify-center pt-8 pb-8">
                <hr className="w-[10em] mx-3 opacity-17" />
                Our Best Sellers
                <hr className="w-[10em] mx-3 opacity-17" />
            </h2>

            <div className="justify-center grid grid-cols-1 md:grid-cols-4 mx-auto max-w-[95%] bg-whitesmoke px-6 pb-4 gap-3 ">
                <div className="bg-[#ffffff]  rounded-2xl  flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-full w-full p-1 rounded-2xl" />
                </div>

                <div className="bg-[#ffffff] rounded-2xl flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-full w-full p-1 rounded-2xl" />
                </div>

                <div className="bg-[#ffffff] rounded-2xl flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-full w-full p-1 rounded-2xl" />
                </div>

                <div className="bg-[#ffffff] rounded-2xl flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-full w-full p-1 rounded-2xl" />
                </div>

            </div>

        </div>
    )
}
