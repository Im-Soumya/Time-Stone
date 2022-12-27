import { Marcellus } from "@next/font/google";
import Link from "next/link";

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400']
})

const Footer = () => {
    return (
        <footer className={` ${marcellus.className} border-t-1 border-stone-800 text-stone-500 py-3 px-20 md:px-80 flex justify-evenly`}>
            <Link href="https://github.com/Im-Soumya" target="_blank">
                <h1 className="hover:text-white duration-200">Github</h1>
            </Link>
            <Link href="https://www.linkedin.com/in/soumya-mukherjee-88a551248/" target="_blank">
                <h1 className="hover:text-white duration-200">Linkedin</h1>
            </Link>
            <Link href="https://twitter.com/iamsoumyass" target="_blank">
                <h1 className="hover:text-white duration-200">Twitter</h1>
            </Link>
        </footer>
    )
}

export default Footer;