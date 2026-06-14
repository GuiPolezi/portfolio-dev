import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import ReCAPTCHA from 'react-google-recaptcha';

export function Contact() {
    const form = useRef(null);
    const [status, setStatus] = useState('');
    const recaptchaRef = useRef(null);

    const [captchaToken, setCaptchaToken] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault(); // Evita que a página recarregue
        setStatus('Enviando...');

        if (!captchaToken) {
            setStatus('Por favor, confirme que você não é um robô. 🤖');
            return;
        }

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
            <div className="grid grid-cols-1 gap-10 px-4 py-2 md:grid-cols-4 md:gap-0 md:px-0 md:py-0">

                {/* Sidebar de links */}
                <div className="col-span-1 flex flex-col items-center md:items-start">
                    <div className="circle mt-0 md:mt-5"></div>
                    <div className="contactLinks p-2 text-base sm:text-lg md:text-xl">
                        <ul className="flex gap-6 md:flex-col md:gap-0">
                            <li>
                                <a href="https://github.com/GuiPolezi" target='_blank'>Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/guilherme-polezi-machado/" target='_blank'>Linkedin</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/GuiPolezi" target='_blank'>Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Área do formulário */}
                <div className="col-span-1 md:col-span-3 md:mt-12">
                    <div className="form grid grid-cols-1 md:grid-cols-2">

                        {/* Coluna vazia no desktop, ocultada no mobile */}
                        <div className="hidden md:col-span-1 md:block"></div>

                        <div className="col-span-1 text-center md:text-end">
                            <h4 className="text-3xl sm:text-4xl md:text-5xl">Contact</h4>

                            <div className="grid mt-2 grid-cols-1 md:grid-cols-3">

                                {/* Coluna vazia no desktop, ocultada no mobile */}
                                <div className="hidden md:col-span-1 md:block"></div>

                                <div className="col-span-1 md:col-span-2">
                                    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                                        <input
                                            type="email"
                                            name='name'
                                            placeholder="Mail"
                                            className="text-left placeholder-right p-2"
                                            required
                                        />

                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Your Message"
                                            required
                                            className="resize-none mt-5 text-left placeholder-right p-2"
                                        ></textarea>

                                        <div className="mt-2 flex justify-center scale-[0.60] origin-center md:scale-75">
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                                onChange={(token) => setCaptchaToken(token)}
                                            />
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="mt-2">
                                                Send <i className="fa-solid fa-arrow-right"></i>
                                            </button>
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
                </div>
            </div>
        </>
    )
}