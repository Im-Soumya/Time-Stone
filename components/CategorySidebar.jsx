import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"

const CategorySidebar = ({ allCategories }) => {
    return (
        <div className="tracking-tight my-7 lg:my-12">
            <div className="flex items-center ml-2 lg:ml-0 text-lg lg:text-sm font-semibold mb-1 lg:mb-3 text-stone-200">Categories<BiChevronDown className="ml-2 text-xl" /></div>
            <Link href="/products">
                <h1 className="ml-5 lg:ml-3 mb-1 lg:text-sm lg:mb-4 text-neutral-400 hover:text-white">All items</h1>
            </Link>
            {
                allCategories?.map(category => (
                    <div key={category.id}>
                        <Link href={`${category.slug}`}>
                            <h3 className="ml-5 lg:ml-3 mb-1 lg:text-sm lg:mb-4 text-neutral-400 hover:text-white">{category.name}</h3>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default CategorySidebar