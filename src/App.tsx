import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home/home'
import { MainLayout } from './layouts/mainLayout'
import { Posters } from './pages/posters/posters'
import { Login } from './pages/login/login'
import { Details } from './pages/details/details'
import { About } from './pages/about/about'
import { Contact } from './pages/contact/contact'


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posters" element={<Posters />} />
              <Route path="/details/:slug" element={<Details />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
  )
}

export default App
