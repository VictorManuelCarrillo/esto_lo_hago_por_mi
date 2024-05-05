'use client'
import Link from 'next/link'
import { Button, useTheme } from '@mui/material'

//* properties:
//# text:    string
//# href:    string
//# color:   string
//# onClick: function
//# href:    string
//# newTab:  boolean

const OutlinedButton = (props) => {
  //extraction of properties
  const { text, color, onClick, startIcon, endIcon, disabled, href, newTab } =
    props

  const theme = useTheme()

  return (
    <Link href={href ? href : ''} target={newTab ? '_blank' : null}>
      <Button
        variant="outlined"
        color={color}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled ? true : false}
        size="small"
        sx={{
          px: '1.5em',
          borderRadius: '2.5em',
          border: 'solid 0.2em',
          '&:hover': {
            border: 'solid 0.2em',
            borderColor:
              color === 'primary'
                ? theme.palette.primary.main
                : theme.palette[color].main,
            bgcolor:
              color === 'primary'
                ? theme.palette.primary.main
                : theme.palette[color].main,
            color: '#000000',
          },
        }}
      >
        {text}
      </Button>
    </Link>
  )
}

export default OutlinedButton
