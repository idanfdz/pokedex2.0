import React from 'react'
import AppRouter from './AppRouter'
import PokemonProvider from './context/PokemonProvider'

export const App = () => {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}