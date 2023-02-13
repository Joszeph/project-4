import React from 'react'
import styles from './ProductInfoTitle.scss'
import classNames from 'classnames'
import {Typography} from '@mui/material'

export default function ProductInfoTitle({text}) {
  return (
    <div className={classNames(styles['title'])}>
        <Typography className={classNames(styles['product-info-title'])}>{text}</Typography>
    </div>
  )
}
