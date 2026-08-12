"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

export const Header = () => {
    const router = usePathname()
    console.log("Header Rendered", router)
    return (
        <header className="w-full border-b border-zinc-200 bg-[#F5EFE8] text-black shadow-x4">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-lg font-semibold cursor-pointer">
                    <img src="/images/FisioLogo.png" alt="Fisio Cosmetics" width={100} />
                </Link>
                <nav className="flex gap-6 text-md">
                    <Link href="/" className={router === "/" ? "underline underline-offset-8" : ""}>Home</Link>
                    <Link href="/products" className={router === "/products" ? "underline underline-offset-8" : ""}>Products</Link>
                    <Link href="/blogs" className={router === "/blogs" ? "underline underline-offset-8" : ""}>Blogs</Link>
                    <Link href="/contact" className={router === "/contact" ? "underline underline-offset-8" : ""}>About</Link>

                    <Link href="/contact" className={router === "/contact" ? "underline underline-offset-8" : ""}>Contact Us</Link>
                </nav>

                <nav className="flex gap-6 text-sm items-center">
                    <Link href="/">Search</Link>
                    <div className="relative pointer">
                        <Link href="/"><img src="./images/shopping.png" width={28} /></Link>
                        <div className="bg-[#654b2e] text-white w-5 h-4.5 rounded-3xl absolute -top-2.5 -right-2.5 flex items-center justify-center font-400 ">2</div>
                    </div>
                    <div className="relative cursor-pointer display md:hidden display-sm">
                        <img src="./images/hamburger.png" width={28} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
