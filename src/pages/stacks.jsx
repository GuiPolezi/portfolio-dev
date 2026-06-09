import { useEffect, useRef } from "react";
import gsap from "gsap";



export function Stacks() {
    return (
        <>
            <ParticleBackground />
            <p>Ola</p>

        </>
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