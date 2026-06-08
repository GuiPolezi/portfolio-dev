import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Home } from './pages/index'
import { Info } from './pages/info'
import { Projects } from './pages/projects'

export default function AppRoutes() {
    // 1. Pegamos a localização atual da URL
    const location = useLocation();

    // 2. Usamos o useEffect para disparar uma ação toda vez que a URL (location.pathname) mudar
    useEffect(() => {
        // Selecionamos o seu container root
        const rootElement = document.getElementById('root');
        
        if (rootElement) {
            // Se a rota for /projects, liberamos o scroll. Caso contrário, bloqueamos.
            if (location.pathname === '/projects') {
                rootElement.style.overflowY = 'auto';
            } else {
                rootElement.style.overflowY = 'hidden';
            }
        }
    }, [location.pathname]); // O array de dependências garante que isso rode a cada troca de rota

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )
}