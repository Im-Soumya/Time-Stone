import { BsArrowLeft } from "react-icons/bs"

const CustomButton = ({ product }) => {
    return (
        <div className='flex items-center justify-end group'>
            <BsArrowLeft className='hidden lg:flex mr-5 text-3xl text-stone-600 group-hover:-translate-x-3 group-hover:text-stone-100 duration-300' />
            <button
                className="flex items-center border-1 border-stone-500 py-2 md:py-3 px-5 md:px-7 text-stone-400 hover:border-stone-200 hover:text-stone-100 duration-300 rounded-md snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={`products/${product.slug}`}
                data-item-image={product.image.url}
                data-item-name={product.name}
            >
                Buy Now
            </button>
        </div>
    )
}

export default CustomButton