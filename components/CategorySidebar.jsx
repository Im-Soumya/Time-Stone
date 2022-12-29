import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"

const CategorySidebar = ({ allCategories }) => {
    return (
        <div className="tracking-tight my-7 lg:my-12">
            <div className=" hidden lg:flex items-center ml-2 lg:ml-0 text-lg lg:text-sm font-semibold mb-1 lg:mb-3 text-stone-200">
                <h1 className="hidden lg:flex">Categories<BiChevronDown className="ml-2 text-xl" /></h1>
            </div>
            <div className="flex lg:flex-col py-3 justify-between px-5 lg:px-0 border-1 lg:border-0 border-stone-800 rounded-sm">
                <Link href="/products">
                    <h1 className="lg:ml-3 text-sm lg:mb-4 text-neutral-400 hover:text-white">All items</h1>
                </Link>
                {
                    allCategories.map(category => (
                        <div key={category.id}>
                            <Link href={`${category.slug}`}>
                                <h3 className="lg:ml-3 text-sm lg:mb-4 text-neutral-400 hover:text-white">{category.name}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategorySidebar