import { Chip } from '@mui/material'
import React from 'react'
import styles from './ProductInfoStatus.module.scss'

export default function ProductInfoStatus() {
  return (
    <div className={classNames(styles["product-info-status"])}>
         <Chip className={classNames(styles["status"])} color="secondary"  variant="filled" icon = {<Circle></Circle>} label = {"LIVE"}></Chip>
    </div>
  )
}
