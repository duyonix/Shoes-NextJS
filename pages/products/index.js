import { Container, Grid, Paper, Box } from "@mui/material";
import ProductItem from "../../components/ProductItem";
import { server } from "../../config";
import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import { useRouter } from 'next/router'
import { useAppContext } from "../../context/AppContext";
// import styles from "../../styles/pages/ProductList.module.css"

const ProductList = ({ products }) => {
    // console.log("ProductList", products)
    // const router = useRouter()
    const { state, dispatch } = useAppContext()

    React.useEffect(() => {
        dispatch({ type: "set_products", value: products })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container className="mt-4">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map(product => (
                    <Grid item xs={4} sm={4} md={4} key={product.id}>
                        <ProductItem product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;

export const getServerSideProps = async (context) => {
    // get cookie in context
    let cookie = context.req.headers.cookie;
    let token = ""
    if (cookie) {
        cookie = cookie.split(";").find(c => c.trim().startsWith("token="))
        if (cookie) {
            token = cookie.split("=")[1]
        }
    }

    if (token === "") {
        return {
            redirect: {
                source: '/products',
                destination: '/login',
                permanent: true,
            }
        }
    }

    const res = await fetch(`${server}/api/products`);
    const products = await res.json();
    return {
        props: {
            products
        }
    }
}