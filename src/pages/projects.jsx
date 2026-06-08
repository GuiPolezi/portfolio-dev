import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Projects() {
    
    return (
        <>
        <div className="headerProjects text-end">
            <h3 id="titleProject" className="text-5xl">Starred Projects</h3>
            <div id="stars">
                <i id="starone" class="fa-solid fa-star"></i>
                <i id="startwo" class="fa-solid fa-star"></i>
                <i id="starthree" class="fa-solid fa-star"></i>
            </div>
        </div>
        <div className="content mt-15">
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                   <div className="image bg-red-200 h-70" style={{borderRadius: '10px'}}>
                    <p>oi</p>
                   </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-6">
                        <div className="col-span-1"></div>
                        <div className="col-span-5 flex flex-col">
                            <p id="infoText" className="mb-2">01 // Beta Jahint</p>
                            <h4 className="text-4xl mb-2">Jahint</h4>
                            <p className="text-justify mb-25" style={{opacity: '0.5'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada ultrices elementum. Fusce id urna sed tortor malesuada pulvinar vitae tristique mi.</p>
                            <div className="flex gap-5">
                                <a id="infoA" href="https://github.com/GuiPolezi">Live Demo <i className="fa-solid fa-arrow-right"></i> </a>
                                <a style={{color: 'black'}} id="infoA" href="/">GitHub <i className="fa-solid fa-arrow-right"></i> </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="content mt-40">
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="grid grid-cols-6">
                         <div className="col-span-5 flex flex-col">
                            <p id="infoText" className="mb-2">02 // MyDesktop</p>
                            <h4 className="text-4xl mb-2">My Desktop</h4>
                            <p className="text-justify mb-25" style={{opacity: '0.5'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada ultrices elementum. Fusce id urna sed tortor malesuada pulvinar vitae tristique mi.</p>
                            <div className="flex gap-5">
                                <a id="infoA" href="https://github.com/GuiPolezi">Live Demo <i className="fa-solid fa-arrow-right"></i> </a>
                                <a style={{color: 'black'}} id="infoA" href="/">GitHub <i className="fa-solid fa-arrow-right"></i> </a>

                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
                 <div className="col-span-1">
                   <div className="image bg-red-200 h-70" style={{borderRadius: '10px'}}>
                    <p>oi</p>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}