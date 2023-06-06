import { memo, forwardRef } from 'react'
import type { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

type Props = PropsWithChildren<
  {
    variant?: 'blue' | 'red'
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

export const Button = memo(
  forwardRef<HTMLButtonElement, Props>(
    (
      { variant = 'blue', children, className = '', ...htmlButtonProps },
      ref,
    ) => {
      return (
        <button
          className={cn(
            styles.Button,
            {
              [styles.isBlue]: variant === 'blue',
              [styles.isRed]: variant === 'red',
            },
            className,
          )}
          ref={ref}
          {...htmlButtonProps}
        >
          {children}
        </button>
      )
    },
  ),
)
