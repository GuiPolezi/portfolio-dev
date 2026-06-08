import React, { useState, useEffect } from 'react';

const GithubReposWidget = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
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
        <div>
            <h3>Repositórios Recentes do GitHub</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                {repos.map(repo => (
                    <div key={repo.id} style={cardStyle}>
                        <h4 style={{ margin: '0 0 8px 0' }}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0366d6' }}>
                                {repo.name}
                            </a>
                        </h4>
                        <p style={{ fontSize: '14px', color: '#586069', margin: '0 0 16px 0' }}>
                            {repo.description || 'Nenhuma descrição fornecida.'}
                        </p>
                        <div style={{ fontSize: '12px', color: '#586069', display: 'flex', gap: '15px' }}>
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>🍴 {repo.forks_count}</span>
                            {repo.language && <span>💻 {repo.language}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GithubReposWidget;


export function Lab() {
    return (
        <>
            <div className="headerLab text-start">
                <h3 id="titleLab" className="text-5xl">Lab</h3>
                <div id="iconsLab">
                    <i id='iconlabone' class="fa-solid fa-skull-crossbones"></i>
                    <i id='iconlabtwo' class="fa-solid fa-flask-vial"></i>
                    <i id='iconlabthree' class="fa-solid fa-vial-virus"></i>
                </div>
            </div>
            <GithubReposWidget username="GuiPolezi" />
        </>
    )
}