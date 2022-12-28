import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { Marcellus, Figtree } from "@next/font/google";

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree'
})

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-marcellus',
})

const HomePage = () => {
    return (
        <div className={marcellus.className}>
            <div className='relative'>
                <img src="https://i.ibb.co/6B7BkL7/black-watch-large.jpg" alt="watch" className="w-full h-screen object-cover" />

                <div className='absolute top-0 py-4 px-5 md:px-10 flex justify-between w-full backdrop-blur-sm'>
                    <Link href="/">
                        <div className='left-5'>Logo</div>
                    </Link>

                    <div className='flex justify-center font-bold'>
                        <Link href="/">
                            <h1 className='text-sm mr-10 md:mr-20'>Home</h1>
                        </Link>
                        <Link href="/products">
                            <h1 className='text-sm mr-10 md:mr-20'>Products</h1>
                        </Link>
                        <Link href="/">
                            <h1 className='text-sm'>About</h1>
                        </Link>
                    </div>

                    <FaRegUserCircle className='right-5 text-xl' />
                </div>

                <div className='absolute top-1/3 md:top-1/3 left-4 w-[200px] md:w-1/2 md:pl-3 text-stone-400'>
                    <h1 className='text-white pt-7 md:pt-0 mb-1 md:mb-4 text-4xl md:text-5xl tracking-tighter md:tracking-normal'>The perfect moment,</h1>
                    <h2 className='mb-2 md:mb-4 text-xl md:text-3xl tracking-wider'>between <span className='text-white text-3xl md:text-[48px]'>past</span></h2>
                    <h3 className='text-xl md:text-3xl tracking-wider'>and <span className='text-white text-3xl md:text-[48px]'>future</span>.</h3>
                </div>

                <div className='absolute top-[28%] md:top-[180px] right-2 text-right md:pr-7'>
                    <div>
                        <div className='flex justify-end'>
                            <div className={`${figtree.className} bg-stone-400 text-center text-xs text-black font-bold px-2 py-1 mb-3 md:mb-6 rounded-sm`}>NEW MODEL</div>
                        </div>
                        <h1 className='text-2xl mb-3 md:mb-7 text-gray-200 md:text-[54px]'>It&apos;s moon o&apos;clock</h1>
                        <h3 className='text-stone-500 font-semibold w-[180px] md:w-[400px]'>Destined as an entity, rather than an object, we aim to make the timepiece less a feature and more an accoutrement to the wearer.</h3>
                    </div>

                    <div className='flex items-center justify-end group mt-6 md:mt-10'>
                        <BsArrowLeft className='hidden sm:flex mr-5 text-3xl text-stone-600 group-hover:-translate-x-3 group-hover:text-stone-100 duration-300' />
                        <button className='flex items-center border-2 border-stone-600 py-2 md:py-3 px-5 md:px-7 text-stone-400 hover:border-stone-200 hover:text-stone-100 duration-300 rounded-md'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className='py-32 px-16 md:px-56'>
                <h1 className='text-stone-300 text-center text-3xl md:text-5xl md:mb-6'>Categories</h1>
                <h3 className='text-stone-300 text-center text-lg my-4'>Watches that show much more than just time.</h3>
                <div className='py-4 grid grid-cols-2 gap-7 md:grid-cols-4'>
                    <div className='bg-zinc-900 justify-self-center rounded-md opacity-60 hover:opacity-100 hover:scale-105 shadow-md hover:shadow-lg duration-200'>
                        <img src="https://i.ibb.co/gS2nttW/seiko-Analog.png" alt="analog watch category" className='p-8' />
                        <div>
                            <h2 className='text-center text-lg md:text-xl pb-3'>Analog</h2>
                        </div>
                    </div>
                    <div className='bg-zinc-900 justify-self-center rounded-md opacity-60 hover:opacity-100 hover:scale-105 shadow-md hover:shadow-lg duration-200'>
                        <img src="https://i.ibb.co/7GX6W7r/hybrid.png" alt="digital watch category" className='p-4' />
                        <div>
                            <h2 className='text-center text-lg md:text-xl pb-3'>Digital</h2>
                        </div>
                    </div>
                    <div className='bg-zinc-900 justify-self-center rounded-md opacity-60 hover:opacity-100 hover:scale-105 shadow-md hover:shadow-lg duration-200'>
                        <img src="https://i.ibb.co/3zZNwRQ/chronograph.png" alt="chronograph watch category" className='p-3' />
                        <div>
                            <h2 className='text-center text-lg md:text-xl pb-3'>Chronograph</h2>
                        </div>
                    </div>
                    <div className='bg-zinc-900  justify-self-center rounded-md py-1 opacity-60 hover:opacity-100 hover:scale-105 shadow-md hover:shadow-lg duration-200'>
                        <img src="https://i.ibb.co/7GX6W7r/hybrid.png" alt="hybrid watch category" className='p-7' />
                        <div>
                            <h2 className='text-center text-lg md:text-xl pb-3'>Hybrid</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-stone-400 pb-32'>
                <h1 className='text-center text-2xl mb-2 md:mb-3'>Find your <span className='text-white'>style.</span></h1>
                <h2 className='text-center text-4xl'>It&apos;s your <span className='text-white'>time</span>.</h2>
            </div>
        </div>
    )
}


export default HomePage;