import Link from 'next/link'
import { Button } from '@mui/material'

//* properties:
//# text:    string
//# href:    string
//# color:   string
//# onClick: function
//# href:    string
//# newTab:  boolean

const TextButton = (props) => {
  const { text, color, onClick, startIcon, endIcon, disabled, href, newTab } = props

  return (
    <Link href={href ? href : ''} target={newTab ? '_blank' : null}>
      <Button
        variant="text"
        color={color}
        onClick={onClick}
        size="small"
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled ? true : false}
        sx={{fontWeight: 'bold'}}
      >
        {text}
      </Button>
    </Link>
  )
}

export default TextButton
