import styles from './ProductImage.module.scss'
import classNames from "classnames";

const ProductImage = ({url}) => {
  return (
    <div className={classNames(styles['product-image'])}>
        <img src={url} className={classNames(styles.image)} alt="" />
    </div>
  )
}

export default ProductImage