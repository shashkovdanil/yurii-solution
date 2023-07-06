import * as RadixCheckbox from '@radix-ui/react-checkbox'
import cn from 'classnames'
import { Typography } from '../Typography'
import checkmark from '../../assets/checkmark.svg'

import styles from './Checkbox.module.css'

type Props = {
  id: string
  label: string
  checked: RadixCheckbox.CheckboxProps['checked']
  onCheckedChange: RadixCheckbox.CheckboxProps['onCheckedChange']
}

export function Checkbox({ id, label, checked, onCheckedChange }: Props) {
  return (
    <div className={styles.Root}>
      <RadixCheckbox.Root
        id={id}
        className={cn(styles.Checkbox, {
          [styles.isChecked]: checked,
        })}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <RadixCheckbox.Indicator className={styles.Indicator}>
          <img src={checkmark} alt="" width={10} height={7.5} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id}>
        <Typography variant="label">{label}</Typography>
      </label>
    </div>
  )
}
