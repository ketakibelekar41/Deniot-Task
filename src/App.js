import logo from './logo.svg';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About'
import { Service } from './Components/Service'
import { Contact } from './Components/Contact'
import { Learnmore } from './Components/Learnmore'
import { AnimatePresence } from 'framer-motion';
function App() {

  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>

      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/learnmore' element={<Learnmore />} />
      </Routes>
    </AnimatePresence>
  );
}
function AnimatedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
export default AnimatedApp;
