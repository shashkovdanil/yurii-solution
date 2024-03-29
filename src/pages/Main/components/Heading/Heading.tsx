import { Typography } from '../../../../components/Typography'

import styles from './Heading.module.css'

export function Heading() {
  return (
    <section className={styles.Heading}>
      <Typography tag="p" variant="label" className={styles.Label}>
        Shop
      </Typography>
      <Typography tag="h1" variant="h1">
        Make their{' '}
        <Typography tag="span" variant="special">
          day extra special
        </Typography>{' '}
        with a handcrafted bouquet.
      </Typography>
    </section>
  )
}
