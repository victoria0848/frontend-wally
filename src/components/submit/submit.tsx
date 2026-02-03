import { Button } from '../button/button'

interface submitProps {
  value: string
}

export function Submit({ value }: submitProps) {
  return <Button text={value} />
}