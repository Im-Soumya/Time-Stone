import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Marcellus, Figtree, Montserrat } from "@next/font/google";

import useAuth from "../libs/firebaseAuthHook";
import Categories from "./Categories";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../libs/firebase";

const figtree = Figtree({
    subsets: ['latin'],
    variable: '--font-figtree'
})

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-marcellus',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat'
})

const HomePage = ({ categories }) => {
    const { user } = useAuth()

    const handleLogin = () => {
        if (!user) {
            signInWithPopup(auth, provider)
                .then(res => {
                    console.log(res.user)
                })
                .catch(e => console.log(e.message))
        } else {
            signOut(auth)
        }
    }

    return (
        <div className={marcellus.className}>
            <div className='relative'>
                <img src="/images/black watch large.jpg" alt="watch" className="w-full h-screen object-cover" />

                <div className='absolute top-0 py-4 px-5 md:px-10 flex justify-between items-center w-full backdrop-blur-sm'>
                    <Link href="/">
                        <div className='flex items-center left-5'>
                            <img src="/images/hourglass_crop.png" alt="logo" className="w-10 h-10 mr-4" />
                        </div>
                    </Link>

                    <div className='flex justify-center text-sm font-semibold tracking-wider'>
                        <Link href="/">
                            <h1 className='mr-10 md:mr-20'>Home</h1>
                        </Link>
                        <Link href="/products">
                            <h1 className='mr-10 md:mr-20'>Products</h1>
                        </Link>
                        <Link href="/">
                            <h1 className=''>About</h1>
                        </Link>
                    </div>

                    <div onClick={handleLogin} className="cursor-pointer hover:scale-110 duration-100">
                        {
                            user ? (
                                <div className="w-7 h-7 rounded-full bg-stone-400 text-stone-900">
                                    <p className={`${montserrat.className} h-full pr-0.5 font-bold flex justify-center items-center`}>{user?.displayName.charAt(0).toUpperCase()}</p>
                                </div>
                            ) : (
                                <FaRegUserCircle className="text-xl" />
                            )
                        }
                    </div>
                </div>

                <div className='absolute top-1/4 md:top-1/3 left-4 w-[200px] md:w-1/2 md:pl-3 text-stone-400'>
                    <h1 className='text-white pt-7 md:pt-0 mb-1 md:mb-4 md:text-5xl tracking-tighter md:tracking-normal'>The perfect moment,</h1>
                    <h2 className='mb-2 md:mb-4 md:text-3xl tracking-wider'>between <span className='text-white text-3xl md:text-[48px]'>past</span></h2>
                    <h3 className='md:text-3xl tracking-wider'>and <span className='text-white text-3xl md:text-[48px]'>future</span>.</h3>
                </div>

                <div className='absolute text-sm top-1/2 md:top-[28%] right-2 text-right md:pr-7'>
                    <div>
                        <div className='flex justify-end'>
                            <div className={`${figtree.className} bg-stone-400 text-center text-xs text-black font-bold px-2 py-1 mb-3 md:mb-6 rounded-sm`}>NEW MODEL</div>
                        </div>
                        <h1 className='text-2xl mb-3 md:mb-7 text-gray-200 md:text-[54px]'>It&apos;s moon o&apos;clock</h1>
                        <h3 className='text-stone-500 font-semibold w-[180px] md:w-[400px]'>Destined as an entity, rather than an object, we aim to make the timepiece less a feature and more an accoutrement to the wearer.</h3>
                    </div>

                    <div className='flex items-center justify-end group mt-6 md:mt-10'>
                        <BsArrowLeft className='hidden sm:flex mr-5 text-3xl text-stone-600 group-hover:-translate-x-3 group-hover:text-stone-100 duration-300' />
                        <Link href="/products">
                            <div className='flex items-center border-2 border-stone-600 py-2 md:py-3 px-5 md:px-7 text-stone-400 hover:border-stone-200 hover:text-stone-100 duration-300 rounded-md'>
                                Shop Now
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Categories categories={categories} />

            <div className='text-stone-400 pb-32'>
                <h1 className='text-center text-2xl mb-2 md:mb-3'>Find your <span className='text-white'>style.</span></h1>
                <h2 className='text-center text-4xl'>It&apos;s your <span className='text-white'>time</span>.</h2>
            </div>
        </div>
    )
}


export default HomePage;