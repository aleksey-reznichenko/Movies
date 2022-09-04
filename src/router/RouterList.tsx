import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, NoPage} from '../pages'

export const RouterList = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  )
}
