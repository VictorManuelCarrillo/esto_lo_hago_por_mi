'use client'

import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const primaryUserTheme = createTheme({
  palette: {
    primary: {
      main: '#c62828',
    },
    secondary: {
      main: '#0f9855',
    },
    background: {
      default: '#25282b',
      paper: '#2a2a2b',
    },
    error: {
      main: '#ffff00',
    },
    warning: {
      main: '#ad1457',
    },
    info: {
      main: '#40c4ff',
    },
    success: {
      main: '#00e676',
    },
    divider: 'rgba(230,217,217,0.12)',
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
  },
})

export default function PrimaryLayout({ children }) {
  return (
    <ThemeProvider theme={primaryUserTheme}>
      <Box sx={{ height: '1.5em' }}></Box>
      {children}
    </ThemeProvider>
  )
}
