import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import Header from './components/Header.tsx'
import CharacterDetail from './pages/CharacterDetail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className='main-browser'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<App />} />
          <Route path='/characters/:id' element={<CharacterDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
