import { FiShoppingBag } from "react-icons/fi"
import { FaRegUserCircle } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full py-4 px-5 flex justify-between">
            <div>Logo</div>

            <div className="flex items-center">
                <h1 className="mr-5">About</h1>
                <h1 className="mr-5">Shop</h1>
                <div className="mr-5 flex items-center snipcart-checkout cursor-pointer">
                    {/* <p className="snipcart-total-price">$0.00</p> */}
                    <FiShoppingBag className="text-xl" />
                    <p className="snipcart-items-count">0</p>
                </div>
                <div>
                    <FaRegUserCircle className="text-xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;