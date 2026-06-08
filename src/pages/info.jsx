export function Info() {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <h3 id="infoText" className="mb-2">Info</h3>
                    <p className="font-bold text-justify mb-10" id="infoP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum semper erat, quis aliquam urna maximus rutrum. Integer eget pulvinar sem, ac pretium dui. Suspendisse commodo fringilla arcu in finibus. Sed eros nulla, rutrum vel vehicula ac, lacinia nec nulla. Pellentesque fringilla tempus ornare.
                    </p>
                    <p className="font-bold text-justify mb-10" id="infoP">
                       Morbi nec ultrices est. Pellentesque ligula urna, elementum commodo urna sed, interdum faucibus est. Pellentesque a ante eu diam malesuada tincidunt nec id eros. Aliquam eros arcu, tempor quis leo vitae, posuere rhoncus turpis. Curabitur elementum leo eget massa elementum, vel laoreet massa blandit. Aenean mattis vulputate auctor. Sed non ipsum congue, sollicitudin mauris et, porta magna. Suspendisse in urna at purus porta luctus sed at sapien. Curabitur scelerisque imperdiet elit et ultricies.
                    </p>
                    <h3 id="infoText">My CV</h3>
                    <a id="infoA" href="https://github.com/GuiPolezi">Download <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div id="topics" className="col-span-1 text-end">
                        <p className="text-5xl mb-5" id="infoTitle">Front-End Developer</p>
                        <div className="grid grid-cols-3">
                            <div className="col-span-1"></div>
                            <div className="col-span-2">
                                <p id="titleDesc" >Maecenas auctor, ligula eu volutpat commodo, arcu nulla tristique urna, id consectetur turpis arcu sit amet risus.</p>
                            </div>
                        </div>
                        <p className="text-5xl mt-5 mb-5" id="infoTitle">Computer Science</p>
                        <div className="grid grid-cols-3">
                            <div className="col-span-1"></div>
                            <div className="col-span-2">
                                <p id="titleDesc" >Maecenas auctor, ligula eu volutpat commodo, arcu nulla tristique urna, id consectetur turpis arcu sit amet risus.</p>
                            </div>
                        </div>
                        <p className="text-5xl mt-5 mb-5" id="infoTitle">Technical System</p>
                        <div className="grid grid-cols-3">
                            <div className="col-span-1"></div>
                            <div className="col-span-2">
                                <p id="titleDesc" >Maecenas auctor, ligula eu volutpat commodo, arcu nulla tristique urna, id consectetur turpis arcu sit amet risus.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}