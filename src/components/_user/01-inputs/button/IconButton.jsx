import Link from 'next/link'
import { IconButton as Button } from '@mui/material'

//* properties:
//# ariaLabel: string
//# color:     string
//# icon:      string
//# disabled:  boolean
//# href:      string
//# newTab:    boolean

const IconButton = (props) => {
  //extraction of properties
  const { ariaLabel, icon, color, onClick, disabled, href, newTab } = props

  return (
    <Link href={href ? href : ''} target={newTab ? '_blank' : null}>
      <Button
        aria-label={ariaLabel}
        color={color}
        onClick={onClick}
        disabled={disabled ? true : false}
      >
        {icon}
      </Button>
    </Link>
  )
}

export default IconButton
