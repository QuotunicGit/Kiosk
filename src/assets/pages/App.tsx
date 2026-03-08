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
            </ul>
        </>
    )
}

export default App;