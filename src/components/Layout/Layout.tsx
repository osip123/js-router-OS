import Aside from './aside/Aside'
import { Outlet } from 'react-router-dom'
import './Layout.scss'

const Layout = () => {
  return (
    <main>
      <Aside />
      <Outlet />
    </main>
  )
}

export default Layout
