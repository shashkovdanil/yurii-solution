import type { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

import styles from './Layout.module.css'

type Props = {
  children: ReactNode
  header?: 'hidden' | ReactNode
  footer?: 'hidden' | ReactNode
}

export function Layout({ children, header, footer }: Props) {
  return (
    <div className={styles.Layout}>
      {header === 'hidden' ? null : header || <Header />}
      <main className={styles.Main}>{children}</main>
      {footer === 'hidden' ? null : footer || <Footer />}
    </div>
  )
}
