import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import MovieAPI from './MovieComponents/MovieAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <MovieAPI />
     <Footer />
    </div>
  )
}

export default App
