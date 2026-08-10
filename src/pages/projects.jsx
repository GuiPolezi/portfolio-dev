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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Coluna da Imagem */}
                    <div className="col-span-1">
                        <div className="imageone w-full rounded-lg min-h-[300px] md:h-full lg:h-[400px] bg-cover bg-top"></div>
                    </div>
                    <div className="col-span-1">
                        {/* Adicionei um 'mt-4 md:mt-0' para o texto não ficar colado na imagem no celular */}
                        <div className="grid grid-cols-6 mt-4 md:mt-0">

                            {/* MÁGICA AQUI: Oculta o espaço vazio no celular (hidden) e mostra no PC (md:block) */}
                            <div className="hidden md:block md:col-span-1"></div>

                            {/* No celular ele ocupa todas as 6 colunas (col-span-6). No PC ele volta a ocupar 5 (md:col-span-5) */}
                            <div className="col-span-6 md:col-span-5 flex flex-col">

                                <p id="infoText" className="mb-2 text-xs md:text-sm text-gray-500">01 // Beta Jahint</p>

                                {/* Título um pouco menor no celular para não quebrar linha de forma feia */}
                                <h4 className="text-3xl md:text-4xl mb-2 font-bold text-black dark:text-white">Jahint</h4>

                                {/* Troquei o style de opacidade pela classe nativa 'opacity-50' e ajustei o text-size */}
                                <p className="text-justify mb-6 md:mb-25 opacity-50 text-sm md:text-base">
                                    Fashion and lifestyle e-commerce built from scratch with Shopify Hydrogen. Jahint is an independent clothing brand that connects the high-performance aesthetics of the fitness niche to medicinal cannabis culture. The project represents the union of an authentic concept, striking visual design, and cutting-edge web engineering.
                                </p>

                                <div className="flex gap-5 text-sm md:text-base">
                                    <a id="infoA" href="https://beta-jahint-838ce4c060347c7b932e.o2.myshopify.dev/" target="_blank">
                                        Live Demo <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reduzi o mt-50 no mobile para mt-16 para não criar um espaço gigante no celular */}
            <div className="content mt-16 md:mt-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Coluna do Texto */}
                    {/* 'order-2' joga o texto para baixo no celular. 'md:order-1' traz ele de volta para a esquerda no PC */}
                    <div className="col-span-1 order-2 md:order-1 mt-4 md:mt-0">
                        <div className="grid grid-cols-6">

                            {/* O texto ocupa todas as 6 colunas no celular e 5 no PC */}
                            <div className="col-span-6 md:col-span-5 flex flex-col">
                                <p id="infoText" className="mb-2 text-xs md:text-sm text-gray-500">02 // MyDesktop</p>
                                <h4 className="text-3xl md:text-4xl mb-2 font-bold text-black dark:text-white">My Desktop</h4>
                                <p className="text-justify mb-6 md:mb-25 opacity-50 text-sm md:text-base">
                                    Your workspace for taking notes and accessing other services. <br></br><br></br>
                                    A web-based system for managing individual or group information.

                                    Add your most used informations and guaranteed a quickly access for this informations
                                </p>
                                <div className="flex gap-5 text-sm md:text-base">
                                    <a id="infoA" href="https://my-desktop-gold.vercel.app/" target="_blank">
                                        Live Demo <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                    <a className="text-black dark:text-white" id="infoA" href="https://github.com/GuiPolezi/MyDesktop" target="_blank">
                                        GitHub <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>

                            {/* MÁGICA DO ESPAÇADOR: Oculto no celular, aparece na direita no PC */}
                            <div className="hidden md:block md:col-span-1"></div>

                        </div>
                    </div>

                    {/* Coluna da Imagem */}
                    {/* 'order-1' faz a imagem carregar no topo no celular. 'md:order-2' joga ela para a direita no PC */}
                    <div className="col-span-1 order-1 md:order-2">
                        {/* Mesma correção de altura do primeiro bloco: min-h no celular, h-full no PC */}
                        <div className="imagetwo w-full rounded-lg min-h-[300px] md:h-full lg:h-[400px] bg-cover bg-top"></div>
                    </div>

                </div>
            </div>
            <div className="content mt-16 md:mt-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Coluna da Imagem */}
                    <div className="col-span-1">
                        <div className="imagethree w-full rounded-lg min-h-[300px] md:h-full lg:h-[400px] bg-cover bg-top"></div>
                    </div>
                    <div className="col-span-1">
                        {/* Adicionei um 'mt-4 md:mt-0' para o texto não ficar colado na imagem no celular */}
                        <div className="grid grid-cols-6 mt-4 md:mt-0">

                            {/* MÁGICA AQUI: Oculta o espaço vazio no celular (hidden) e mostra no PC (md:block) */}
                            <div className="hidden md:block md:col-span-1"></div>

                            {/* No celular ele ocupa todas as 6 colunas (col-span-6). No PC ele volta a ocupar 5 (md:col-span-5) */}
                            <div className="col-span-6 md:col-span-5 flex flex-col">

                                <p id="infoText" className="mb-2 text-xs md:text-sm text-gray-500">03 // MoneyBox</p>

                                {/* Título um pouco menor no celular para não quebrar linha de forma feia */}
                                <h4 className="text-3xl md:text-4xl mb-2 font-bold text-black dark:text-white">MoneyBox</h4>

                                {/* Troquei o style de opacidade pela classe nativa 'opacity-50' e ajustei o text-size */}
                                <p className="text-justify mb-6 md:mb-25 opacity-50 text-sm md:text-base">
                                    A modern, multi-user personal finance manager built with React, Vite, and Tailwind CSS. Move beyond manual spreadsheets with interactive dashboards, intelligent transaction tracking (including installments and recurring expenses), multi-wallet management, budget limits, and investment forecasting.
                                </p>

                                 <div className="flex gap-5 text-sm md:text-base">
                                    <a id="infoA" href="https://moneybox-blue.vercel.app/" target="_blank">
                                        Live Demo <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                    <a className="text-black dark:text-white" id="infoA" href="https://github.com/GuiPolezi/moneybox" target="_blank">
                                        GitHub <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reduzi o mt-50 no mobile para mt-16 para não criar um espaço gigante no celular */}
            <div className="content mt-16 md:mt-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Coluna do Texto */}
                    {/* 'order-2' joga o texto para baixo no celular. 'md:order-1' traz ele de volta para a esquerda no PC */}
                    <div className="col-span-1 order-2 md:order-1 mt-4 md:mt-0">
                        <div className="grid grid-cols-6">

                            {/* O texto ocupa todas as 6 colunas no celular e 5 no PC */}
                            <div className="col-span-6 md:col-span-5 flex flex-col">
                                <p id="infoText" className="mb-2 text-xs md:text-sm text-gray-500">04 // HelpDesk_Alpha</p>
                                <h4 className="text-3xl md:text-4xl mb-2 font-bold text-black dark:text-white">HelpDesk</h4>
                                <p className="text-justify mb-6 md:mb-25 opacity-50 text-sm md:text-base">
                                    A full-featured ticketing and service-desk prototype built to validate requirements before the production build. Multi-tenant workspaces, role-based permissions, SLAs, workflows and analytics — running entirely in the browser, with no backend.
                                </p>
                                <div className="flex gap-5 text-sm md:text-base">
                                    <a id="infoA" href="https://sys-req.vercel.app//" target="_blank">
                                        Live Demo <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                    <a className="text-black dark:text-white" id="infoA" href="https://github.com/GuiPolezi/sys.req" target="_blank">
                                        GitHub <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>

                            {/* MÁGICA DO ESPAÇADOR: Oculto no celular, aparece na direita no PC */}
                            <div className="hidden md:block md:col-span-1"></div>

                        </div>
                    </div>

                    {/* Coluna da Imagem */}
                    {/* 'order-1' faz a imagem carregar no topo no celular. 'md:order-2' joga ela para a direita no PC */}
                    <div className="col-span-1 order-1 md:order-2">
                        {/* Mesma correção de altura do primeiro bloco: min-h no celular, h-full no PC */}
                        <div className="imagefour w-full rounded-lg min-h-[300px] md:h-full lg:h-[400px] bg-cover bg-top"></div>
                    </div>

                </div>
            </div>
            
             <div className="content mt-16 md:mt-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Coluna da Imagem */}
                    <div className="col-span-1">
                        <div className="imagefive w-full rounded-lg min-h-[300px] md:h-full lg:h-[400px] bg-cover bg-top"></div>
                    </div>
                    <div className="col-span-1">
                        {/* Adicionei um 'mt-4 md:mt-0' para o texto não ficar colado na imagem no celular */}
                        <div className="grid grid-cols-6 mt-4 md:mt-0">

                            {/* MÁGICA AQUI: Oculta o espaço vazio no celular (hidden) e mostra no PC (md:block) */}
                            <div className="hidden md:block md:col-span-1"></div>

                            {/* No celular ele ocupa todas as 6 colunas (col-span-6). No PC ele volta a ocupar 5 (md:col-span-5) */}
                            <div className="col-span-6 md:col-span-5 flex flex-col">

                                <p id="infoText" className="mb-2 text-xs md:text-sm text-gray-500">05 // Jahint.Studies</p>

                                {/* Título um pouco menor no celular para não quebrar linha de forma feia */}
                                <h4 className="text-3xl md:text-4xl mb-2 font-bold text-black dark:text-white">Jahint.Studies</h4>

                                {/* Troquei o style de opacidade pela classe nativa 'opacity-50' e ajustei o text-size */}
                                <p className="text-justify mb-6 md:mb-25 opacity-50 text-sm md:text-base">
                                    A modern, React-based system to organize your academic studies. Store all your class notes, assignment developments, and online exam dates, keeping your essential information always within reach.
                                </p>

                                 <div className="flex gap-5 text-sm md:text-base">
                                    <a id="infoA" href="https://jahint-studies.com/" target="_blank">
                                        Site <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
