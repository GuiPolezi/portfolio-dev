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
            <div className="headerProjects text-end">
                <h3 id="titleProject" className="text-5xl">Starred Projects</h3>
                <div id="stars">
                    <i id="starone" class="fa-solid fa-star parallax-layer" data-speed="30"></i>
                    <i id="startwo" class="fa-solid fa-star parallax-layer" data-speed="10"></i>
                    <i id="starthree" class="fa-solid fa-star parallax-layer" data-speed="8"></i>
                </div>
            </div>
            <div className="content mt-15">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                         <FlipCard
                            direction="horizontal"
                            bgImage="images/Jahint.png"
                            bgColor="#606c38"
                            colorText="#fefae0"
                            backTitle="Angular"
                            backText="Good tools make application development quicker and easier to maintain than if you did everything by hand."
                            className="flip-content-one"
                        />
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
                                    <a style={{ color: 'black' }} id="infoA" href="/">GitHub <i className="fa-solid fa-arrow-right"></i> </a>

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
                        <FlipCard
                            direction="horizontal"
                            bgImage="images/myDesk.png"
                            bgColor="#fefae0"
                            colorText="black"
                            backTitle="Angular"
                            backText="Good tools make application development quicker and easier to maintain than if you did everything by hand."
                            className="flip-content-two"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function FlipCard({
    direction = 'horizontal',
    bgImage,
    frontText,
    backTitle,
    backText,
    className = '',
    bgColor,
    colorText,
}) {
    const frontRef = useRef(null);
    const backRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const isVertical = direction === 'vertical';

        // 1. Configuração Inicial
        // O verso do card começa escondido e rotacionado para trás
        gsap.set(backRef.current, {
            rotateY: isVertical ? 0 : -180,
            rotateX: isVertical ? -180 : 0,
            opacity: 0,
        });

        // Para evitar distorções, o GSAP aplica perspectiva no elemento pai
        gsap.set([frontRef.current, backRef.current], {
            transformPerspective: 1000,
         //   backfaceVisibility: "hidden" // Ajuda a evitar bugs visuais no flip 3D
        });

        // 2. Criando a Timeline Pausada
        // Usamos um easing customizado parecido com o cubic-bezier do seu CSS
        tl.current = gsap.timeline({
            paused: true,
            defaults: { duration: 0.5, ease: "back.out(1.2)" }
        });

        tl.current
            // Anima a Frente (vira para as costas)
            .to(frontRef.current, {
                rotateY: isVertical ? 0 : 180,
                rotateX: isVertical ? 180 : 0,
                backgroundImage: 'none',
                backgroundColor: `${bgColor}`,
            }, 0)
            // Anima o Verso (vem para a frente)
            .to(backRef.current, {
                rotateY: 0,
                color: `${colorText}`,
                rotateX: 0,
                opacity: 1,
            }, 0); // O '0' faz as duas animações rodarem exatamente ao mesmo tempo

        // Cleanup: mata a animação se o componente for desmontado
        return () => {
            if (tl.current) tl.current.kill();
        };
    }, [direction]);

    // 3. Funções de Hover
    const handleMouseEnter = () => tl.current.play();
    const handleMouseLeave = () => tl.current.reverse();

    return (
        <div
            className="flip-container relative h-70"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`front absolute inset-0 w-full image h-full ${className}`}
                ref={frontRef}
                style={{ backgroundImage: `url(${bgImage})` }}
            >
            </div>

            <div className="back p-5 inset-0 w-full h-full" ref={backRef}>
                <h2>{backTitle}</h2>
                <p>{backText}</p>
            </div>
        </div>
    );
}