import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import "../styles/App.css"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Home</h1>
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/menu")}>Menu</li>
                <li onClick={() => navigate("/orders")}>Orders</li>
                <li onClick={() => navigate("/settings")}>Settings</li>
            </ul>
        </>
    )
}

function Menu() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Menu</h1>
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/menu")}>Menu</li>
                <li onClick={() => navigate("/orders")}>Orders</li>
                <li onClick={() => navigate("/settings")}>Settings</li>
            </ul>
        </>
    )
}

function Orders() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Orders</h1>
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/menu")}>Menu</li>
                <li onClick={() => navigate("/orders")}>Orders</li>
                <li onClick={() => navigate("/settings")}>Settings</li>
            </ul>
        </>
    )
}

function Settings() {
    const navigate = useNavigate();
    
    return (
        <>
            <ul>
                <li onClick={() => navigate('/')}>Home</li>
            </ul>
            <p>Settings</p>
        </>
    )
}

export default App;