import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";

const product = ({ product }) => {
    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>

            <div>
                <div>
                    <Image src={product.image.url} alt={product.name} width={500} height={500} />
                </div>

                <div>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <div
                        dangerouslySetInnerHTML={{ __html: product.description.html }}
                    >
                    </div>
                    <button
                        className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url={`products/${product.slug}`}
                        data-item-image={product.image.url}
                        data-item-name={product.name}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
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