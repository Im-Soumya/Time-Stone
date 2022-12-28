import Head from "next/head";
import Image from "next/image";
import { Marcellus } from "@next/font/google"
import { BiChevronDown } from "react-icons/bi"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400']
})

const product = ({ product }) => {
    console.log(product)

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>

            <Layout>
                <div className="mx-12 my-7 min-h-screen flex flex-col lg:flex-row">
                    <div className="bg-smokyblack lg:bg-transparent mb-7 lg:mb-0 rounded-md">
                        <Image src={product.image.url} alt={product.name} width={600} height={600} className="mx-auto lg:p-2" />
                    </div>

                    <div className="lg:w-1/2 lg:mx-10">
                        <h4 className="text-stone-500 font-semibold mb-2">{product.brand.toUpperCase()}</h4>
                        <h3 className={`${marcellus.className} text-3xl lg:text-5xl [text-shadow:_1px_4px_8px_rgb(0_0_0_/_40%)]`}>{product.name}</h3>
                        <div className="flex items-center justify-between my-10">
                            <p className="text-2xl font-bold">${product.price}</p>
                            <CustomButton product={product} />
                        </div>
                        <div>
                            <div className="flex items-center text-xl text-stone-300 mb-2">Description<BiChevronDown className="ml-2 text-xl text-stone-300" /></div>
                            <div
                                dangerouslySetInnerHTML={{ __html: product.description.html }}
                                className="text-md text-stone-500"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default product;

export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: process.env.CONTENT_API,
        cache: new InMemoryCache(),
    })

    const data = await client.query({
        query: gql`
            query ProductsQuery {
                products {
                    id
                    name
                    brand
                    category
                    price
                    slug
                    image {
                        url
                    }
                }
            }
        `
    })

    const paths = data.data.products.map(product => {
        return {
            params: {
                slug: product.slug,
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const client = new ApolloClient({
        uri: process.env.CONTENT_API,
        cache: new InMemoryCache(),
    })

    const data = await client.query({
        query: gql`
            query ProductQuery($slug: String) {
                product(where: {slug: $slug}) {
                    id
                    name
                    brand 
                    category
                    price
                    slug
                    description {
                        html
                    }
                    image {
                        url
                    }
                }
            }
        `,
        variables: {
            slug: params.slug
        }
    })

    const product = data.data.product

    return {
        props: {
            product
        }
    }
}