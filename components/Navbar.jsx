import Link from "next/link";
import { useState } from "react";
import { Marcellus } from "@next/font/google";
import { FiShoppingBag } from "react-icons/fi"
import { FaRegUserCircle } from "react-icons/fa"

const marcellus = Marcellus({
    subsets: ['400'],
    weight: ['400']
})

const Navbar = () => {
    const [input, setInput] = useState('')

    return (
        <nav className="w-full py-3 px-8 flex justify-between items-center backdrop-blur-sm">
            <Link href="/">
                <div className='flex items-center left-5'>
                    <img src="/images/hourglass_crop.png" alt="logo" className="w-7 h-7 mr-3" />
                    <h1 className={`${marcellus.className} text-lg`}>Time stone</h1>
                </div>
            </Link>

            {/* <div className="hidden lg:flex">
                <input type="text" value={input} placeholder="Search for products..." className="py-2 mt-2 rounded-sm indent-3 bg-transparent border-1 border-stone-500" onChange={(e) => setInput(e.target.value)} />
            </div> */}

            <div className="flex items-center">
                <h1 className="mr-5 hover:text-white hover:border-b-1 hover:border-white duration-100">About</h1>
                <Link href="/products">
                    <h1 className="mr-7 hover:text-white hover:border-b-1 hover:border-white duration-100">Shop</h1>
                </Link>
                <div className="group mr-5 p-2 relative flex items-center snipcart-checkout cursor-pointer hover:scale-110 duration-100">
                    <FiShoppingBag className="text-xl group-hover:text-stone-300" />
                    <p className="absolute bottom-0 left-0 w-4 h-4 pb-1 bg-white text-xs text-center rounded-full text-black font-bold snipcart-items-count">0</p>
                </div>
                <div className="hover:scale-110 duration-100">
                    <FaRegUserCircle className="text-xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;