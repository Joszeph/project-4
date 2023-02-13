import * as React from 'react';
import { Chip } from '@mui/material'
import { Circle } from '@mui/icons-material'

import styles from './ProductInfoStatus.module.scss'
import classNames from "classnames";

export default function ProductInfoStatus() {
  return (
    <div className={classNames(styles["product-info-status"])}>
         <Chip className={classNames(styles["status"])} color="secondary" variant="filled" icon = {<Circle></Circle>} label = {"LIVE"}></Chip>
    </div>
  )
}
