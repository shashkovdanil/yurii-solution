import { Button } from '../components/Button'

export function Main() {
  return (
    <div>
      <Button variant="blue">Main</Button>
      <Button variant="red">Main</Button>
      <Button variant="blue" disabled>
        Main
      </Button>
    </div>
  )
}
