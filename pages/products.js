import Head from "next/head"
import Link from "next/link.js"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

import Layout from "../components/Layout.jsx"
import Filter from "../components/Filter.jsx"
import Product from "../components/Product.jsx"

export default function Products({ allProducts, allCategories }) {
    const [input, setInput] = useState('')

    if (input) {
        allProducts = allProducts.filter(product => product.name.toLowerCase().includes(input))
    }

    return (
        <>
            <Head>
                <title>Time stone | Products</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="mx-12 flex flex-col lg:flex-row">
                    <input type="text" value={input} placeholder="Search for products..." className="py-2 mt-2 rounded-sm indent-3 bg-transparent border-1 border-stone-500 lg:hidden" onChange={(e) => setInput(e.target.value)} />
                    {
                        allProducts.length > 0 ?
                            (
                                <>
                                    <div className="tracking-tight my-7 lg:my-12">
                                        <div className="flex items-center ml-2 lg:ml-0 text-lg lg:text-sm font-semibold mb-1 lg:mb-3 text-stone-200">Categories<BiChevronDown className="ml-2 text-xl" /></div>
                                        <Link href="/products">
                                            <h1 className="ml-5 lg:ml-3 mb-1 lg:text-sm lg:mb-4 text-neutral-400 hover:text-white">All items</h1>
                                        </Link>
                                        {
                                            allCategories.map(category => (
                                                <div key={category.id}>
                                                    <Link href={`categories/${category.slug}`}>
                                                        <h3 className="ml-5 lg:ml-3 mb-1 lg:text-sm lg:mb-4 text-neutral-400 hover:text-white">{category.name}</h3>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-10 lg:my-10">
                                        {
                                            allProducts.map(product => (
                                                <div key={product.id}>
                                                    <Product product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <Filter />
                                </>
                            ) :
                            (
                                <>
                                    <div className="h-screen">
                                        <h1 className="text-center text-2xl font-semibold mt-10">This item is unavailable.</h1>
                                    </div>
                                </>
                            )
                    }
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const client = new ApolloClient({
        uri: process.env.CONTENT_API,
        cache: new InMemoryCache(),
    })

    const productsData = await client.query({
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

    const categoriesData = await client.query({
        query: gql`
            query CategoriesQuery {
                categories {
                    id
                    name
                    slug
                }
            }
        `
    })

    const allProducts = productsData.data.products
    const allCategories = categoriesData.data.categories

    return {
        props: {
            allProducts,
            allCategories
        }
    }
}