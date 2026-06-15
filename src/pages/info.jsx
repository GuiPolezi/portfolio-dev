export function Info() {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1">
                    <h3 id="infoText" className="mb-2">Info</h3>
                    <p className="font-bold text-justify mb-2 md:mb-10 text-[10px] md:text-xs lg:text-md 2xl:text-lg" id="infoP">
                        I'm an independent Developer and Artist. 
                    </p>
                    <p className="font-bold text-justify mb-2 lg:mb-10 text-[10px] md:text-xs lg:text-md 2xl:text-lg" id="infoP">
                       At first, grasping anything related to software development was truly challenging. The overwhelming amount of new information made me feel confused, as if I would never get the hang of it. I pushed through, looked for foundational courses, started university, and began my own projects. Now I stand here, showcasing a glimpse of my art to the digital world. To find out more, please access my Resume below.
                    </p>
                    <h3 id="infoText">My CV</h3>
                    <a id="infoA" className="text-xs md:text-md lg:text-md 2xl:text-lg" href="files/Curriculo-2026.pdf" target="_blank">Download <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div id="topics" className="col-span-2 md:col-span-1 text-end flex md:block mt-3 md:mt-0">
                    <div className="text-start md:text-end">

                        <p className="text-sm md:text-2xl lg:text-5xl mb-0 lg:mb-5" id="infoTitle">Front-End Developer</p>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 md:col-span-2">
                                <p id="titleDesc" className="text-[10px] md:text-xs lg:text-md" >Beyond just writing code, my goal is to bring designs to life with fluid layouts, a sharp focus on micro-details, and an intuitive, memorable user experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-end">

                        <p className="text-5xl mt-0 md:mt-5 mb-0 lg:mb-5 text-sm md:text-2xl lg:text-5xl" id="infoTitle">Computer Science</p>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 md:col-span-2">
                                <p id="titleDesc" className="text-[10px] md:text-xs lg:text-md" >Computer Science undergraduate at Faculdade de Engenharia de Piracicaba - EEP. College is the environment where I continuously refine my logic, algorithms, and analytical thinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-end md:text-end">

                        <p className="text-5xl mt-0 md:mt-5 mb-0 lg:mb-5 text-sm md:text-2xl lg:text-5xl" id="infoTitle">Technical System</p>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="col-span-1 md:col-span-2">
                                <p id="titleDesc" className="text-[10px] md:text-xs lg:text-md" >Working in IT Support, I turn complex reports into structured technical solutions. My routine involves continuous diagnostics and deep troubleshooting of software and databases, backed by an advanced mastery in the administration and maintenance of Windows ecosystems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}