export function Contact() {
    return (
        <>
            <div className="circle mt-5"></div>
            <div className="contactLinks p-2">
                <ul>
                    <li>
                        <a href="/">Github</a>
                    </li>
                    <li>
                        <a href="#">Linkedin</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-2 form">
                <div className="col-span-1">
                  
                </div>
                <div className="col-span-1 text-end">
                    <h4>Contact</h4>
                    <div className="grid mt-5 grid-cols-3">
                        <div className="col-span-1">

                        </div>
                        <div className="col-span-2">
                            <form action="" className="flex flex-col">
                                <input type="email" placeholder="Mail" className="text-left placeholder-right p-2" required/>
                            
                                <button type="submit">Send <i className="fa-solid fa-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}