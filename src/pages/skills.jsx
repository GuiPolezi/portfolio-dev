import { useEffect, useRef, useState } from "react";
import gsap from "gsap";




export function Skills() {
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


    // Efeito revelação do icone skillbox
    const iconRef = useRef(null);

    // Função disparada ao passar o mouse sobre o <p>
    const handleMouseEnter = () => {
        gsap.to(iconRef.current, {
            duration: 0.3,
            autoAlpha: 1,
            y: 0,                    // (Opcional) Faz o ícone deslizar um pouco para cima
            ease: 'power2.out'
        });
    };

    // Função disparada ao tirar o mouse do <p>
    const handleMouseLeaveP = () => {
        gsap.to(iconRef.current, {
            duration: 0.3,
            autoAlpha: 0,
            y: 10,                   // (Opcional) Faz o ícone descer um pouco ao sumir
            ease: 'power2.in'
        });
    };

    return (
        <div className="skillsContainer" ref={containerRef}>
            <ParticleBackground />
            <div className="headerSkills mt-5 text-center">
                <div id="skills">
                    <i id="cubes" className="fa-solid fa-cubes parallax-layer" data-speed="20"></i>
                </div>
                <h3 id="titleSkills" className="text-5xl">Skills</h3>
            </div>
            <div id="one" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeaveP} className="skillBox">
                <i class="fa-brands fa-html5" ref={iconRef}></i>
                <p>HTML</p>

            </div>
            <div id="two" className="skillBox">
                <i className="fa-brands fa-css3-alt"></i>
                <p>Tailwind - Css</p>
            </div>
            <div id="three" className="skillBox">
                <i className="fa-brands fa-node"></i>
                <p>Node</p>
            </div>
            <div id="four" className="skillBox">
                <i className="fa-solid fa-c">#</i>
                <p>C#</p>
            </div>
            <div id="five" className="skillBox">
                <i className="fa-brands fa-react"></i>
                <p>React</p>
            </div>
            <div id="six" className="skillBox">
                <i className="fa-solid fa-robot"></i>
                <p>Prompt Engineering</p>
            </div>
            <div id="seven" className="skillBox">
                <i className="fa-brands fa-java"></i>
                <p>Java</p>
            </div>
        </div>
    )
}

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let pids = 0;

        // Configurações do estado original
        const maxParticles = 70;
        const colors = [
            '#000000', '#000000', '#000000', // Preto com mais chance
            '#283618', '#283618',            // Verde escuro frequente
            '#606C38',                       // Verde médio
            '#FEFAE0',                       // Bege claro (detalhe)
            '#28BD2F'                        // Verde vibrante (detalhe)
        ];

        // Utilitário para substituir o Lodash
        const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

        const hexToRGBA = (hex, alpha) => {
            const trimHex = hex.replace('#', '');
            const red = parseInt(trimHex.substring(0, 2), 16);
            const green = parseInt(trimHex.substring(2, 4), 16);
            const blue = parseInt(trimHex.substring(4, 6), 16);
            return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        };

        class Particle {
            constructor(id = 0) {
                this.id = id;
                this.type = this.randomizeType();
                this.inBounds = false;

                this.coords = {
                    x: Math.round(Math.random() * canvas.width),
                    y: Math.round(Math.random() * canvas.height)
                };

                this.velocity = {
                    x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.7),
                    y: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.7)
                };

                this.alpha = 0.1;
                this.hex = randomFromArray(colors);
                this.color = hexToRGBA(this.hex, this.alpha);
                this.strokeWidth = Math.random() * (Math.random() > 0.5 ? 1.5 : 2.5);

                switch (this.type) {
                    case 'bubble':
                        this.diameter = this.getCircleDiameter();
                        break;
                    case 'line':
                        this.angle = Math.atan2(this.coords.y, this.coords.x);
                        this.length = randomFromArray([5, 7, 3, 10]);
                        this.rotateSpeed = randomFromArray([10, 30, 60, 120]);
                        this.rotateClockwise = Math.random() < 0.5;
                        break;
                    default:
                        break;
                }
            }

            getCircleDiameter() {
                let diameter = 0;
                while (diameter < 2) {
                    diameter = (Math.random() * 7) * 2;
                }
                return diameter;
            }

            update() {
                if (this.alpha < 1) {
                    this.alpha += 0.01;
                    this.color = hexToRGBA(this.hex, this.alpha);
                }

                this.coords.x += this.velocity.x;
                this.coords.y += this.velocity.y;

                if (this.type === 'line') {
                    let angle = Math.PI / this.rotateSpeed;
                    this.angle += this.rotateClockwise ? -Math.abs(angle) : Math.abs(angle);
                }

                return this.withinBounds();
            }

            draw() {
                ctx.lineWidth = this.strokeWidth;
                ctx.strokeStyle = this.color;
                ctx.save();

                switch (this.type) {
                    case 'line':
                        ctx.translate(this.coords.x / 2, this.coords.y / 2);
                        ctx.rotate(this.angle);
                        ctx.beginPath();
                        ctx.moveTo(-this.length / 2, 0);
                        ctx.lineTo(this.length / 2, 0);
                        break;
                    case 'bubble':
                        ctx.beginPath();
                        ctx.arc(this.coords.x, this.coords.y, this.diameter, 0, Math.PI * 2, false);
                        break;
                    default:
                        break;
                }

                ctx.stroke();
                ctx.restore();
            }

            withinBounds() {
                // Adaptado para checar com base no tamanho total do canvas
                const boundX = canvas.width + 10;
                const boundY = canvas.height + 10;
                const x = this.coords.x;
                const y = this.coords.y;

                this.inBounds = !(x > boundX || x < -10 || y > boundY || y < -10);
                return this.inBounds;
            }

            randomizeType() {
                let types = Array(4).fill('bubble');
                types.push('line');
                return randomFromArray(types);
            }
        }

        const updateCanvasSize = () => {
            // Ajusta o canvas para preencher a tela e lidar com telas Retina/High-DPI
            canvas.width = window.innerWidth * 2;
            canvas.height = window.innerHeight * 2;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        };

        const generateParticles = () => {
            if (particles.length < maxParticles) {
                for (let i = particles.length; i < maxParticles; i++) {
                    particles.push(new Particle(pids++));
                }
            }
        };

        const update = () => {
            if (particles.length < maxParticles - 5) {
                generateParticles();
            }

            particles = particles.filter(particle => particle.update());

            // Renderiza o canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => particle.draw());

            // Loop de animação
            animationFrameId = requestAnimationFrame(update);
        };

        // Inicialização
        updateCanvasSize();
        generateParticles();
        update();

        window.addEventListener('resize', updateCanvasSize);

        // Cleanup: limpa a memória e cancela o loop ao desmontar o componente
        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                right: 0,
                top: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none' // Impede que o canvas bloqueie cliques nos elementos da frente
            }}
        />
    );
};

export default ParticleBackground;

