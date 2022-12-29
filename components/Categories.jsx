import Link from "next/link"

const Categories = ({ categories }) => {
    return (
        <div className='py-32 px-16 md:px-56'>
            <h1 className='text-stone-300 text-center text-3xl md:text-5xl md:mb-6'>Categories</h1>
            <h3 className='text-stone-300 text-center text-lg my-4'>Watches that show much more than just time.</h3>
            <div className='py-4 grid grid-cols-2 gap-7 md:grid-cols-4'>
                {
                    categories?.map(category => (
                        <div key={category.id} className='bg-zinc-900 justify-self-center rounded-md opacity-60 hover:opacity-100 hover:scale-105 shadow-md hover:shadow-lg duration-200'>
                            <Link href={`categories/${category.slug}`}>
                                <img src={category.image.url} alt="analog watch category" className='p-8' />
                                <div>
                                    <h2 className='text-center text-lg md:text-xl pb-3'>{category.name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories

