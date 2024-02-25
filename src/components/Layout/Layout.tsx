import Header from './header/Header'
import Aside from './aside/Aside'
import { Outlet } from 'react-router-dom'
import './Layout.scss'

const Layout = () => {
  return (
    <>
    <Header />
    <main>
        <Aside />
        <Outlet />
    </main>
    </>
  )
}

export default Layout
