import Head from "next/head"
import { Marcellus } from "@next/font/google"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

import Layout from "../../components/Layout"
import CategorySidebar from "../../components/CategorySidebar"
import Filter from "../../components/Filter"
import Product from "../../components/Product"

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400']
})

export default function category({ category, allCategories }) {
    return (
        <>
            <Head>
                <title>Time stone | {category.name}</title>
            </Head>

            <Layout>
                <div className="min-h-screen mx-12 flex flex-col lg:flex-row">
                    <CategorySidebar allCategories={allCategories} />

                    <div>
                        <h1 className={`${marcellus.className} text-3xl mb-6 lg:my-5 ml-2 lg:mx-16`}>{category.name} Watches</h1>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-14 lg:my-10">
                            {
                                category.products.map(product => (
                                    <div key={product.id}>
                                        <Product product={product} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <Filter />
                </div>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: process.env.CONTENT_API,
        cache: new InMemoryCache()
    })

    const data = await client.query({
        query: gql`
            query CategoriesQuery {
                categories {
                    id 
                    slug
                }
            }
        `
    })

    const paths = data.data.categories.map(category => {
        return {
            params: {
                slug: category.slug
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
        cache: new InMemoryCache()
    })

    const singleData = await client.query({
        query: gql`
            query CategoryQuery($slug: String) {
                category(where: {slug: $slug}) {
                    id
                    name
                    slug
                    products {
                        id
                        name
                        brand
                        category
                        price
                        image {
                            url
                        }
                    }
                }
            }
        `,
        variables: {
            slug: params.slug
        }
    })

    const categoryData = await client.query({
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

    const category = singleData.data.category
    const allCategories = categoryData.data.categories

    return {
        props: {
            category,
            allCategories
        }
    }
}