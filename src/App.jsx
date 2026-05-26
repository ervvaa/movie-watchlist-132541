import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* TODO: add a wildcard route that handles unknown paths */}
          <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
