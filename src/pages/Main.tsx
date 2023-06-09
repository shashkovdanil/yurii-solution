import { Button } from '../components/Button'
import { Link } from '../components/Link'
import { RadioGroup } from '../components/RadioGroup'

import phone from '../assets/phone.svg'
import cart from '../assets/cart.svg'

export function Main() {
  return (
    <div>
      <Button variant="blue">Main</Button>
      <Button variant="red">Main</Button>
      <Button variant="blue" disabled>
        Main
      </Button>
      <Link
        type="a"
        props={{ href: 'tel:+80509379992' }}
        icon={phone}
        variant="accent"
      >
        +8 050 937 99 92
      </Link>
      <Link
        type="link"
        props={{
          to: '/cart',
        }}
        icon={cart}
      >
        Cart
      </Link>
      <RadioGroup
        group={[
          { id: '1', label: 'Test 1', value: '1' },
          { id: '2', label: 'Test 2', value: '2' },
        ]}
      />
    </div>
  )
}
