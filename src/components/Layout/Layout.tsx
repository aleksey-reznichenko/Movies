import React, {ReactNode} from 'react'
import {Footer} from './Footer'
import {Header} from './Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div className='layout'>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </div>
  )
}
