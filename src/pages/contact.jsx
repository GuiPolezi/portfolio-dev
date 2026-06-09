import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export function Contact() {
    const form = useRef(null);
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault(); // Evita que a página recarregue
        setStatus('Enviando...');

        // Substitua as strings abaixo pelas suas chaves do EmailJS
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('Mensagem enviada com sucesso! 🚀');
                form.current.reset(); // Limpa os campos do formulário
            }, (error) => {
                console.log(error.text);
                setStatus('Erro ao enviar a mensagem. Tente novamente. 😢');
            });
    };
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
                    <div className="grid mt-2 grid-cols-3">
                        <div className="col-span-1">

                        </div>
                        <div className="col-span-2">
                            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                                <input type="email" name='name' placeholder="Mail" className="text-left placeholder-right p-2" required />
                                <textarea name="message" rows={5} placeholder="Your Message" required className="resize-none mt-5 text-left placeholder-right p-2" id=""></textarea>
                                <div className="text-center">
                                    <button type="submit" className="mt-4">Send <i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                                {status && (
    <p className={`mt-3 text-sm ${status.includes('sucesso') ? 'text-green-400' : status.includes('Erro') ? 'text-red-400' : 'text-gray-400'}`}>
        {status}
    </p>
)}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}