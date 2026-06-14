import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";

const GithubReposWidget = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
                );

                if (!response.ok) {
                    throw new Error('Erro ao buscar repositórios');
                }

                const data = await response.json();
                // Filtra para remover forks e pega os principais
                const filteredRepos = data.filter(repo => !repo.fork);
                setRepos(filteredRepos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    if (loading) return <p>Carregando repositórios...</p>;
    if (error) return <p>Erro: {error}</p>;

    // Estilos inline básicos para o exemplo (você pode usar Tailwind ou CSS normal)
    const cardStyle = {
        border: '1px solid #e1e4e8',
        borderRadius: '6px',
        padding: '16px',
        margin: '10px 0',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
    };

    return (
        <>
            <div id='repoDiv' className='mt-10'>
                {repos.map(repo => (
                    <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div id='containerRepo' className='p-5'>
                            <div className='flex items-center gap-4'>
                                <span id='titleRepo' className='text-md md:text-2xl'>{repo.name}</span>
                                <span style={{
                                    fontSize: '11px',
                                    color: '#586069',
                                    border: '1px solid black',
                                    borderRadius: '12px',
                                    padding: '2px 8px',
                                    fontWeight: '600'
                                }}>
                                    {repo.private ? 'Private' : 'Public'}
                                </span>
                            </div>
                            <p className='opacity-75'>{repo.description || 'Nenhuma descrição fornecida.'}</p>
                            {repo.language && <span className='text-sm opacity-75'><strong>Language:</strong> {repo.language}</span>}
                            <div className='line'></div>
                        </div>
                    </a>
                ))}
            </div>

        </>
    );
};

export default GithubReposWidget;


export function Lab() {
    // A referência continua aqui para sabermos QUAIS elementos animar (as estrelas)
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            // Restringe a busca das camadas apenas para dentro de Projects
            const q = gsap.utils.selector(containerRef.current);
            const layers = q(".parallax-layer");

            // Como estamos rastreando a tela toda, usamos o tamanho da JANELA (window)
            // em vez do getBoundingClientRect() do container.
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Descobre a porcentagem da posição do mouse (vai de -1 até 1)
            const xPos = (e.clientX - centerX) / (window.innerWidth / 2);
            const yPos = (e.clientY - centerY) / (window.innerHeight / 2);

            layers.forEach((layer) => {
                const speed = layer.getAttribute("data-speed");
                const xMove = xPos * speed;
                const yMove = yPos * speed;

                gsap.to(layer, {
                    x: xMove,
                    y: yMove,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        };

        const handleMouseLeave = () => {
            if (!containerRef.current) return;
            const q = gsap.utils.selector(containerRef.current);

            gsap.to(q(".parallax-layer"), {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
            });
        };

        // 1. Adiciona os ouvintes de evento diretamente na janela e no body
        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        // 2. Função de Limpeza (Cleanup) - Extremamente importante no React!
        // Remove os eventos quando você mudar de página/componente para não vazar memória.
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []); // O array vazio garante que isso rode apenas uma vez quando o componente montar
    return (
        <div ref={containerRef}>
            {/* Adicionei o relative e um p-5 para dar respiro igual ao dos projetos */}
            <div className="headerLab text-end relative p-5">

                {/* Título responsivo igual ao Starred Projects */}
                <h3 id="titleLab" className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                    Lab
                </h3>

                {/* O container ganha relative e h-5 para segurar os absolutos sem quebrar o layout */}
                <div id="iconsLab" className="relative w-full h-5">

                    {/* Ícone 1 (Caveira): Começa mais perto e desce em telas maiores */}
                    <i id='iconlabone'
                        className="fa-solid fa-skull-crossbones parallax-layer absolute text-[25px] text-[#283618] right-[50px] top-[-20px] md:right-[80px] md:top-[-35px] lg:right-[120px] lg:top-[-50px]"
                        data-speed="12"></i>

                    {/* Ícone 2 (Frasco de baixo): Reduzi o recuo inferior no mobile para não invadir o conteúdo de baixo */}
                    <i id='iconlabtwo'
                        className="fa-solid fa-flask-vial parallax-layer absolute text-[26px] text-[#283618] right-0 bottom-[-20px] md:bottom-[-30px] lg:bottom-[-40px]"
                        data-speed="20"></i>

                    {/* Ícone 3 (Frasco de cima): Acompanha a caveira, mas um pouco mais alto e com opacidade (opacity-70) */}
                    <i id='iconlabthree'
                        className="fa-solid fa-vial-virus parallax-layer absolute opacity-70 text-[#283618] right-[60px] top-[-30px] md:right-[100px] md:top-[-45px] lg:right-[140px] lg:top-[-65px]"
                        data-speed="8"></i>

                </div>
            </div>
            <GithubReposWidget username="GuiPolezi" />
        </div>
    )
}