import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { Navbar } from '@@/Navbar'
import { NotFound } from '@@/NotFound'
import { Event } from '@/pages/Event/Event'
import { Actions } from '@/pages/Event/Actions'


export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/event/:id' element={<Event />} />
        <Route path='/event/actions/:id' element={<Actions />} />
        {/* <Route path='/event/:id' element={<Event />} />  */}
        {/* <Route path='/' element={
          <PublicRoutes>
          </PublicRoutes>
        }/>
        <Route  path='profile' element={<PrivateRoutes />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
