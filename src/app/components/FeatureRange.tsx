import React from 'react'

export const FeatureRange = () => {
    return (
        <div className=" bg-[#F5EFE8]">
            <h2 className="text-3xl font-400 text-center text-[#654b2e] flex items-center justify-center pt-8 pb-8">
                {/* <hr className="w-[10em] mx-3 opacity-17" />
                Featured Range
                <hr className="w-[10em] mx-3 opacity-17" /> */}
            </h2>
            <div className="justify-center grid grid-cols-1 md:grid-cols-3 mx-auto max-w-[95%] bg-whitesmoke px-6 pb-4 gap-4">
                <div className="bg-[#ffffff] rounded-2xl  flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Fisio-green.jpg" alt="Category 1" className="h-60 w-full p-1 rounded-t-2xl" />
                    <div className="bg-white text-black">
                        <h3 className="text-sm font-500 text-center p-2">It was born from the inspiration that our land, Tuscany,
                            gives us every day The sublime art of its artists, the beautiful hilly landscape, the mild climate,
                            and the nature that surrounds and embraces you with its warm, soothing rhythms. The olive trees, the
                            vineyards, the thermal springs.</h3>
                    </div>
                </div>
                <div className="bg-[#ffffff] rounded-2xl  flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Fisio-donna.jpg" alt="Category 1" className="h-60 w-full p-1 rounded-t-2xl" />
                    <div className="bg-white text-black">
                        <h3 className="text-sm font-500 text-center p-2">Discover our new Women&apos;s collection,
                            designed to make every woman feel confident in her beauty and uniqueness.</h3>
                    </div>
                </div>
                <div className="bg-[#ffffff] rounded-2xl  flex flex-col items-center border-0 shadow-lg">
                    <img src="/images/Fisio-UOMO.jpg" alt="Category 1" className="h-60 w-full p-1 rounded-t-2xl" />
                    <div className="bg-white text-black">
                        <h3 className="text-sm font-500 text-center p-2">An essential, minimalist but
                            precious line, designed for the man immersed in modern dynamism: enterprising, passionate, dedicated to attention to detail.
                            The new men&apos;s cosmetics are designed for contemporary needs: practicality and efficiency.</h3>
                    </div>
                </div>

            </div>


        </div>
    )
}
