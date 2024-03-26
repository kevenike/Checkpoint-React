import "./Footer.css"
import Image from "next/image";
import ImagemKeven from "../../../../public/assets/322727560_895996788087175_5894456101307322369_n.jpg"

const Footer = () => {
    return(
        <>
            <footer className="rodape rodape-contato">
                <div className="container-rodape">
                    <div className="centralizar-rodape">
                        <p className="paragrafo-rodape">&copy; 2024 - {new Date().getFullYear()} | Construído com Next.js</p>
                    </div>

                     <div className="rm-integrantes">
                            <div className="rm">
                                <Image className="foto-integrantes" src={ImagemKeven} alt="Foto de Keven"/> 
                                <h2 className="nome-integrantes">Nome: Keven</h2>
                                <h3 className="rms">RM: 553215</h3>
                            </div>  
                            <div className="rm">
                                <Image className="foto-integrantes" src={ImagemKeven} alt="Foto de Keven"/> 
                                <h2 className="nome-integrantes">Nome: Keven</h2>
                                <h3 className="rms">RM: 553215</h3>
                            </div>  
                            <div className="rm">
                                <Image className="foto-integrantes" src={ImagemKeven} alt="Foto de Keven"/> 
                                <h2 className="nome-integrantes">Nome: Keven</h2>
                                <h3 className="rms">RM: 553215</h3>
                            </div>  
                     </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;