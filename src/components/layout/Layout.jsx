import Navbar from '../navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
      <div className='h-full min-h-screen bg-slate-600'>
            <Navbar />
            <Outlet />
      </div>
    
  )
}

export default Layout