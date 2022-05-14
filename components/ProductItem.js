import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import styles from "../styles/components/ProductItem.module.css";
import { numberWithCommas } from '../utils/format';

const ProductItem = ({ product }) => {
    return (
        <Link href={`/products/${product.id}`} passHref>
            <Card className={styles.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={product.pic}
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography className={styles.name} gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography className={styles.price} variant="body1" component="div">
                            {`${numberWithCommas(product.price)} `}
                            <span style={{ textDecoration: "underline" }}>đ</span>
                        </Typography>
                        <Typography className={styles.description} variant="body2">
                            {product.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        </Link>

    );
}

export default ProductItem;