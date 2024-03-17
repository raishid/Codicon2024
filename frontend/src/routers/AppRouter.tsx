import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Navbar } from '@@/Navbar'
import { NotFound } from '@@/NotFound'
import { Event } from '@/pages/Event/Event'
import { Actions } from '@/pages/Event/Actions'
import { Header } from '@@/Header'
import { Footer } from '@@/Footer/Footer'
import { Shop } from '@@/Shop/Shop'
import { Paquetes } from '@@/Paquetes/Paquetes'


export const AppRouter = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/paquetes' element={<Paquetes />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/event/:id' element={<Event />} />
        <Route path='/event/actions/:id' element={<Actions />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
