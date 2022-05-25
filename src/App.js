import './App.css'
import { Header } from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Comics } from './components/Comics/Comics'
import { Characters } from './components/Characters/Characters'

function App() {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='container'>
          <Routes>
            <Route path='/comics' element={<Comics />} />
            <Route path='/characters' element={<Characters />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
