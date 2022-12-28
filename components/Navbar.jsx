import Link from "next/link";
import { Marcellus } from "@next/font/google";
import { FiShoppingBag } from "react-icons/fi"
import { FaRegUserCircle } from "react-icons/fa"

const marcellus = Marcellus({
    subsets: ['400'],
    weight: ['400']
})

const Navbar = () => {
    return (
        <nav className="w-full py-3 px-8 flex justify-between items-center backdrop-blur-sm">
            <Link href="/">
                <div className='flex items-center left-5'>
                    <img src="/images/hourglass_crop.png" alt="logo" className="w-7 h-7 mr-3" />
                    <h1 className={`${marcellus.className} text-lg`}>Time stone</h1>
                </div>
            </Link>

            <div className="flex items-center">
                <h1 className="mr-5">About</h1>
                <Link href="/products">
                    <h1 className="mr-5">Shop</h1>
                </Link>
                <div className="mr-5 p-2 relative flex items-center snipcart-checkout cursor-pointer">
                    <FiShoppingBag className="text-xl" />
                    <p className="absolute bottom-0 left-0 w-4 h-4 pb-1 bg-white text-xs text-center rounded-full text-black font-bold snipcart-items-count">0</p>
                </div>
                <div>
                    <FaRegUserCircle className="text-xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;