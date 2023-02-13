import * as React from 'react';
import styles from './ProductInfoTitle.module.scss';
import { Typography } from '@mui/material';
import classNames from "classnames";

export default function ProductInfoTitle({text}) {
    return (
        <div className={classNames(styles['product-info-title'])}>
            <Typography variant="h1" className={classNames(styles['title'])}>
                {text}
            </Typography>
        </div>
    )
}