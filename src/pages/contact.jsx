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
                    <form action="">
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}