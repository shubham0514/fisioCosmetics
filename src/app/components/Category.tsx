import React from 'react'

export const Category = () => {
    return (
        <div className="bg-[#F5EFE8] relative">
            <h2 className="text-3xl font-400 text-center text-[#654b2e] flex items-center justify-center pt-8 pb-8">
                <hr className="w-[10em] mx-3 opacity-17" />
                Shop by Category
                <hr className="w-[10em] mx-3 opacity-17" />
            </h2>

            <div className="justify-center grid grid-cols-1 md:grid-cols-4 mx-auto max-w-[95%] bg-whitesmoke px-6 pb-4 gap-4 ">
                <div className="bg-[#ffffff]  rounded-2xl  flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-60 w-full p-1 rounded-t-2xl" />
                    <div className="bg-white text-black p-2 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-500 text-center py-2">Skin Care</h3>
                        <p className="text-center py-2">Free Mask</p>
                        <button className="bg-[#b1a08d] text-white w-fit px-4 py-2 flex align-center justify-between hover:bg-[#654b2e]">Explore
                            <svg className="w-4 h-4 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="bg-[#ffffff] rounded-2xl flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-60 w-full p-1 rounded-t-2xl" />
                    <div className="bg-white text-black p-2 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-500 text-center py-2">Hair Care</h3>
                        <p className="text-center py-2">Revitaising Shampoo</p>
                        <button className="bg-[#b1a08d] text-white w-fit px-4 py-2  flex align-center justify-between hover:bg-[#654b2e]">Explore
                            <svg className="w-4 h-4 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="bg-[#ffffff] rounded-2xl flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-60 w-full p-1 rounded-t-2xl" />
                    <div className="bg-white text-black p-2 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-500 text-center py-2">Tea & Rituals</h3>
                        <p className="text-center py-2">Fiming Bio-Cellulose Masks</p>
                        <button className="bg-[#b1a08d] text-white w-fit px-4 py-2 flex align-center justify-between hover:bg-[#654b2e]">Quick Add
                            <svg className="w-4 h-4 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="bg-[#ffffff] rounded-2xl flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Product2.jpg" alt="Category 1" className="h-60 w-full p-1 rounded-t-2xl" />
                    <div className="bg-white text-black p-2 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-500 text-center py-2">Bundles</h3>
                        <p className="text-center py-2">Oil Blotting Paper Sheets</p>
                        <button className="bg-[#b1a08d] text-white w-fit px-4 py-2 flex align-center justify-between hover:bg-[#654b2e]">Quick Add
                            <svg className="w-4 h-4 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
            <div className="absolute top-15 right-5 transform -translate-x-1/2 text-black hover:bg-[#b1a08d] hover:text-white py-1 px-3">
                View All +
            </div>
        </div>
    )
}
