import "./Footer.css"

const Footer = () => {
    return(
        <>
            <footer className="rodape rodape-contato">
                <div className="centralizar-rodape">
                    <p className="paragrafo-rodape">&copy; 2024 - {new Date().getFullYear()} | Construído com Next.js</p>
                </div>    
            </footer>
        </>
    )
}

export default Footer;