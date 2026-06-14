import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Projects() {
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
            <div className="headerProjects text-end relative">
                {/* Título responsivo: menor no celular, grande no desktop */}
                <h3 id="titleProject" className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                    Starred Projects
                </h3>

                {/* Container das estrelas (Substitui o #stars do CSS) */}
                <div id="stars" className="relative w-full h-5">

                    {/* Estrela 1: Perto no celular, vai se afastando conforme a tela cresce */}
                    <i id="starone"
                        className="fa-solid fa-star parallax-layer absolute text-[#283618] right-[250px] top-[-10px] md:right-[390px] md:top-[-20px] lg:right-[400px] lg:top-[-30px]"
                        data-speed="30"></i>

                    {/* Estrela 2: Ajustada com z-index nativo (z-10) */}
                    <i id="startwo"
                        className="fa-solid fa-star parallax-layer absolute text-[#283618] z-10 right-[-10px] top-1 lg:right-[-15px] lg:top-0"
                        data-speed="10"></i>

                    {/* Estrela 3: Levemente recuada com opacidade de 60% */}
                    <i id="starthree"
                        className="fa-solid fa-star parallax-layer absolute text-[#283618] opacity-60 z-0 right-[-5px] top-1 lg:right-[-10px] lg:top-0"
                        data-speed="8"></i>

                </div>
            </div>
            <div className="content mt-15">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="imageone">
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-6">
                            <div className="col-span-1"></div>
                            <div className="col-span-5 flex flex-col">
                                <p id="infoText" className="mb-2">01 // Beta Jahint</p>
                                <h4 className="text-4xl mb-2">Jahint</h4>
                                <p className="text-justify mb-25" style={{ opacity: '0.5' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada ultrices elementum. Fusce id urna sed tortor malesuada pulvinar vitae tristique mi.</p>
                                <div className="flex gap-5">
                                    <a id="infoA" href="https://github.com/GuiPolezi">Live Demo <i className="fa-solid fa-arrow-right"></i> </a>
                                    <a className="text-black dark:text-white" id="infoA" href="/">GitHub <i className="fa-solid fa-arrow-right"></i> </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content mt-50">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="grid grid-cols-6">
                            <div className="col-span-5 flex flex-col">
                                <p id="infoText" className="mb-2">02 // MyDesktop</p>
                                <h4 className="text-4xl mb-2">My Desktop</h4>
                                <p className="text-justify mb-25" style={{ opacity: '0.5' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada ultrices elementum. Fusce id urna sed tortor malesuada pulvinar vitae tristique mi.</p>
                                <div className="flex gap-5">
                                    <a id="infoA" href="https://github.com/GuiPolezi">Live Demo <i className="fa-solid fa-arrow-right"></i> </a>
                                    <a style={{ color: 'black' }} id="infoA" href="/">GitHub <i className="fa-solid fa-arrow-right"></i> </a>
                                </div>
                            </div>
                            <div className="col-span-1"></div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="imagetwo">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
