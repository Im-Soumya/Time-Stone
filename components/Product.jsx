import Link from "next/link"
import Image from "next/image"
import { Marcellus } from "@next/font/google"

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400']
})

const Product = ({ product }) => {
    return (
        <div className="tracking-normal bg-darkcharcoal justify-self-center rounded-md group">
            <Link href={`products/${product.slug}`}>
                <div>
                    <div className="p-12">
                        <Image src={product.image.url} alt={product.name} width={500} height={500} className="group-hover:scale-110 duration-700" />
                    </div>
                    <div className="flex px-2 py-2 border-t-1 border-stone-800">
                        <div className="pl-2">
                            <p className="text-xs text-stone-600 font-bold">{product.brand.toUpperCase()}</p>
                            <h1 className={`${marcellus.className} line-clamp-1`}>{product.name}</h1>
                        </div>
                        <div className="pr-2">
                            {/* <button className={`${montserrat.className}`}>ADD TO CART</button> */}
                            <p className="mt-3 tracking-wider font-bold text-xl">${product.price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product