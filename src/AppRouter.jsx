import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, PokemonPage } from './pages/index'
import { SearchPage } from './pages/SearchPage'
import { Navigation } from './components/Navigation'

const AppRouter = () => {
  return (
    <Routes >
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='pokemon/:id' element={<PokemonPage />} />
        <Route path='search/:id' element={<SearchPage />} />
      </Route>

      <Route element={<Navigate to='/' />} />
    </Routes>
  )
}

export default AppRouter