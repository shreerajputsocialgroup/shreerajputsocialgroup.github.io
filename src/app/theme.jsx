import { createContext, useContext, useMemo, useState } from 'react'
import { createTheme } from '@mui/material/styles'

const ColorModeContext = createContext({
  mode: 'light',
  toggleMode: () => {},
})

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('light')

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
      },
    }),
    [mode],
  )

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
}

export function useColorMode() {
  return useContext(ColorModeContext)
}

export function useAppTheme() {
  const { mode } = useColorMode()

  return useMemo(
    () =>
      createTheme({
        colorSchemes: {
          light: true,
          dark: true,
        },
        palette: {
          mode,
          primary: {
            main: '#7c3aed',
          },
          secondary: {
            main: '#0891b2',
          },
        },
        shape: {
          borderRadius: 14,
        },
      }),
    [mode],
  )
}
