import React, { createContext, useState } from 'react'

export const ThemeModalContext = createContext({
  isOpen: false,
  handleToggle: (isOpen: boolean) => {},
})

const ThemeModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = (value: boolean) => {
    setIsOpen(value)
  }

  return (
    <ThemeModalContext.Provider value={{ isOpen, handleToggle: handleToggle }}>
      {children}
    </ThemeModalContext.Provider>
  )
}

export default ThemeModalProvider