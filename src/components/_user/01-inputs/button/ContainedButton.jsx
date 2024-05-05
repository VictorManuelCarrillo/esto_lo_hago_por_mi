import Link from 'next/link'
import { Button } from '@mui/material'

//* properties:
//# text:           string
//# color:          string
//# start||endIcon: object
//# onClick:        function
//# href:           string
//# newTab:         boolean

const ContainedButton = (props) => {
  //extraction of properties
  const { text, onClick, color, startIcon, endIcon, disabled, href, newTab } =
    props

  return (
    <Link href={href ? href : ''} target={newTab ? '_blank' : null}>
      <Button
        variant="contained"
        color={color}
        onClick={onClick}
        size="small"
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled ? true : false}
        sx={{ px: '1.5em', m: '0.5em', borderRadius: '2.5em' }}
      >
        {text}
      </Button>
    </Link>
  )
}

export default ContainedButton
