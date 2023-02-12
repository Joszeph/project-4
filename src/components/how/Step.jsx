import classNames from "classnames";
import styles from './Step.module.scss'

export default function Step({ number, title='', description='' }) {
  return (
    <div className={classNames(styles.stepWrapper)}>
      <div className={classNames(styles.stepP)}>
        <p className={classNames(styles.stepNumber)}>{number}</p>
      </div>
      <div className={classNames(styles.stepContent)}>
        <p>{title}</p>
        <p>
         {description}
        </p>
      </div>
    </div>
  );
}
