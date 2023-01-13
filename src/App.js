import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Show from './pages/Show'
import Register from './pages/Register'
import Login from './pages/Login'
import Create from './pages/Create'
import Manage from './pages/Manage'
import Edit from './pages/Edit'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show/:slug" element={<Show />} />
                <Route path="/show/edit/:id" element={<Edit />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<Create />} />
                <Route path="/manage" element={<Manage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
