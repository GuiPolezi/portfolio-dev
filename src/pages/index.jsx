export function Home() {
    return (
        <div className="flex items-center h-100">
            {/* A mágica acontece aqui: 1 coluna no padrão, 2 colunas a partir da tela 'md' */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-5">

                {/* Div 1 (Esquerda no PC / Topo no Celular) */}
                <div className="col-span-1 hidden md:block">
                    {/* Ocultei essa div no celular com 'hidden md:block' assumindo que ela é só um espaçador */}
                </div>

                {/* Div 2 (Direita no PC / Fica em destaque no Celular) */}
                <div className="col-span-1">
                    <p id="textHome" className="text-start text-sm md:text-base font-bold">
                        Born in 2005
                        in Piracicaba, Brazil.
                        I believe
                        web design
                        can be more
                        diverse and inspiring.
                        With a mission
                        to present
                        the possibilities
                        of web design,
                        I am pursuing
                        new expressions
                        through experiments
                        and thoughts.
                    </p>
                </div>

            </div>
        </div>
    )
}
