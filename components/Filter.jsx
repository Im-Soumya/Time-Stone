
import { BiChevronDown } from "react-icons/bi"

const Filter = () => {
    return (
        <div className="tracking-tight my-7 lg:my-12">
            <div className="flex items-center ml-2 text-lg lg:text-sm font-semibold mb-1 lg:mb-3 text-stone-200">Relevance<BiChevronDown className="ml-2 text-xl" /></div>
            <h3 className="ml-5 lg:ml-3 mb-1 lg:mb-4 text-neutral-400 text-sm hover:text-white">Trending</h3>
            <h3 className="ml-5 lg:ml-3 mb-1 lg:mb-4 text-neutral-400 text-sm hover:text-white">Price: Low to high</h3>
            <h3 className="ml-5 lg:ml-3 text-neutral-400 text-sm hover:text-white">Price: High to low</h3>
        </div>
    )
}

export default Filter