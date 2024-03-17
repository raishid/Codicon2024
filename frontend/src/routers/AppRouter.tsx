import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Navbar } from '@@/Navbar'
import { NotFound } from '@@/NotFound'
import { Event } from '@/pages/Event/Event'
import { Actions } from '@/pages/Event/Actions'
import { Header } from '@@/Header'
import { Footer } from '@@/Footer/Footer'


export const AppRouter = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event/:id' element={<Event />} />
        <Route path='/event/actions/:id' element={<Actions />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
