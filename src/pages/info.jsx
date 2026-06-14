export function Info() {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1">
                    <h3 id="infoText" className="mb-2">Info</h3>
                    <p className="font-bold text-justify mb-2 md:mb-10 text-[10px] md:text-xs lg:text-md" id="infoP">
                        Busco me tornar um Artista e Desenvolvedor Independente.  
                    </p>
                    <p className="font-bold text-justify mb-2 lg:mb-10 text-[10px] md:text-xs lg:text-md" id="infoP">
                        Morbi nec ultrices est. Pellentesque ligula urna, elementum commodo urna sed, interdum faucibus est. Pellentesque a ante eu diam malesuada tincidunt nec id eros. Aliquam eros arcu, tempor quis leo vitae, posuere rhoncus turpis. Curabitur elementum leo eget massa elementum, vel laoreet massa blandit. Aenean mattis vulputate auctor. Sed non ipsum congue, sollicitudin mauris et, porta magna. Suspendisse in urna at purus porta luctus sed at sapien. Curabitur scelerisque imperdiet elit et ultricies.
                    </p>
                    <h3 id="infoText">My CV</h3>
                    <a id="infoA" className="text-xs" href="files/Curriculo-2026.pdf" target="_blank">Download <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div id="topics" className="col-span-2 md:col-span-1 text-end flex md:block mt-3 md:mt-0">
                    <div className="text-start md:text-end">

                        <p className="text-sm md:text-2xl lg:text-5xl mb-0 lg:mb-5" id="infoTitle">Front-End Developer</p>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 md:col-span-2">
                                <p id="titleDesc" className="text-[10px] md:text-xs lg:text-md" >Maecenas auctor, ligula eu volutpat commodo, arcu nulla tristique urna, id consectetur turpis arcu sit amet risus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-end">

                        <p className="text-5xl mt-0 md:mt-5 mb-0 lg:mb-5 text-sm md:text-2xl lg:text-5xl" id="infoTitle">Computer Science</p>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 md:col-span-2">
                                <p id="titleDesc" className="text-[10px] md:text-xs lg:text-md" >Maecenas auctor, ligula eu volutpat commodo, arcu nulla tristique urna, id consectetur turpis arcu sit amet risus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-end md:text-end">

                        <p className="text-5xl mt-0 md:mt-5 mb-0 lg:mb-5 text-sm md:text-2xl lg:text-5xl" id="infoTitle">Technical System</p>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 md:col-span-2">
                                <p id="titleDesc" className="text-[10px] md:text-xs lg:text-md" >Maecenas auctor, ligula eu volutpat commodo, arcu nulla tristique urna, id consectetur turpis arcu sit amet risus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}