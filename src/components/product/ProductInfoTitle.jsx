import React from 'react'
import styles from './ProductInfoTitle.scss'
import classNames from 'classnames'
import  Typography  from '@mui/material/Typography';

export default function ProductInfoTitle({text}) {
  return (
    <div className={classNames(styles['product-info-title'])}>
        <Typography className={classNames(styles['title'])}>{text}</Typography>
    </div>
  )
}
