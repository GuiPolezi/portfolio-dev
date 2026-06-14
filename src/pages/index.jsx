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
                    <p id="textHome" className="text-start bg-red-500 text-sm md:text-base font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur risus ac dolor fermentum lacinia. Ut porta purus et accumsan dignissim. Maecenas laoreet sodales odio. Sed id urna erat. Fusce fermentum mollis metus, id suscipit risus malesuada non. Integer bibendum tellus in sapien tempus volutpat.
                    </p>
                </div>

            </div>
        </div>
    )
}
