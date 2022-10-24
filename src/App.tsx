import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Prisma from './pages/Prisma'
import NotFound from './pages/NotFound'
import { Reflect } from './pages/Reflect'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prisma" element={<Prisma />} />
      <Route path="/refelct" element={<Reflect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}
