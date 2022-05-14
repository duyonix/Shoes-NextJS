import { server } from "../../config"
import Link from "next/link"
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "../../styles/pages/ProductDetail.module.css"
import DownloadIcon from '@mui/icons-material/Download';
import { numberWithCommas } from "../../utils/format";

const ProductDetail = ({ product }) => {
    return (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className={styles.image}>
                        <Image src={product.pic} alt={product.name} layout="fill" objectFit="contain" />
                    </div>
                </Grid>

                <Grid item xs={12} md={6} className={styles.detail}>
                    <h1 className={styles.name}>{product.name}</h1>

                    <Typography className={styles.price} variant="body1" component="div">
                        {`${numberWithCommas(product.price)} `}
                        <span style={{ textDecoration: "underline" }}>đ</span>
                    </Typography>

                    <p className={styles.descriptionTitle}>Mô Tả Sản Phẩm</p>
                    <span className={styles.description}>{product.description}</span>

                    <div className={styles.downloadContainer}>
                        <a className={styles.download}
                            href={product.id % 2 !== 0 ? "/document/a.xlsx" : "/document/b.xlsx"} download>
                            <DownloadIcon />
                            Tải về
                        </a>
                    </div>
                </Grid>

                <div style={{ margin: "0 auto" }}>
                    <Link href='/products' passHref>
                        <a className={styles.goBack}>
                            Quay Lại
                        </a>
                    </Link>
                </div>

            </Grid>

        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const res = await fetch(`${server}/api/products/${id}`);
    const product = await res.json();

    if (product.message === "Product not found") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product
        }
    }
}

export default ProductDetail;