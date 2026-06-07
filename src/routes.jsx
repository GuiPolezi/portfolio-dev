import { Routes, Route } from "react-router-dom"
import { Home} from './pages/index'
import {Info} from './pages/info'


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
                path="/info"
                element={
                    <Info />
                }
            />
            
        </Routes>

    )
}

