import { FiShoppingBag } from "react-icons/fi"
import { FaRegUserCircle } from "react-icons/fa"
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full py-2 px-5 flex justify-between items-center backdrop-blur-sm">
            <Link href="/">
                <div>Logo</div>
            </Link>

            <div className="flex items-center">
                <h1 className="mr-5">About</h1>
                <Link href="/products">
                    <h1 className="mr-5">Shop</h1>
                </Link>
                <div className="mr-5 p-2 relative flex items-center snipcart-checkout cursor-pointer">
                    <FiShoppingBag className="text-xl" />
                    {/* <p className="snipcart-total-price">$0.00</p> */}
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