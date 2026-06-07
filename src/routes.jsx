import { Routes, Route } from "react-router-dom"
import { Home, Home2 } from './pages/index'


export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home />
                }
            />

            <Route
                path="/a"
                element={
                    <Home2 />
                }
            />
        </Routes>

    )
}

