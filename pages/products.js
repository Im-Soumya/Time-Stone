import Head from "next/head"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Image from "next/image"
import Link from "next/link"

export default function Products({ allProducts }) {

    return (
        <>
            <Head>
                <title>Time stone | Products</title>
            </Head>

            <div>
                <h1>All Products</h1>
                <div className="mx-10 flex flex-col lg:flex-row">
                    <div className="">
                        <h1>Categories</h1>
                        <h3>New Arrivals</h3>
                        <h3>Featured</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            allProducts.map(product => (
                                <div key={product.id} className="bg-stone-900 justify-self-center p-3 rounded-md">
                                    <Link href={`products/${product.slug}`}>
                                        <div>
                                            <div className="p-10">
                                                <Image src={product.image.url} alt={product.name} width={500} height={500} className="hover:scale-110 duration-700" />
                                            </div>
                                            <h1 className="line-clamp-1">{product.name}</h1>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    <div className="">
                        <h1>Relevance</h1>
                        <h3>Trending</h3>
                        <h3>Price: low to high</h3>
                        <h3>Price: high to low</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

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

    const allProducts = data.data.products

    return {
        props: {
            allProducts
        }
    }
}