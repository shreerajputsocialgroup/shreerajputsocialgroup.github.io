import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ColorModeProvider, useAppTheme } from './app/theme'
import { router } from './app/router'

function AppShell() {
  const theme = useAppTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

function App() {
  return (
    <ColorModeProvider>
      <AppShell />
    </ColorModeProvider>
  )
}

export default App
