import Image from "next/image";
import "./Header.css"
import Link from "next/link";
import Logo  from '../../../../public/assets/Amigo.png'
const Header = () =>{
    return(
        <>
            <header className="Cabecalho">
                <Image  className="imagem-logo" src={Logo}  alt="Logomarca da empresa"/>
                <nav className="menu">
                    <ul className="links-de-navegacao">
                       <li className="links"><Link className="link-contato" href="">Contato</Link></li>
                       <li className="links"><Link className="link" href="">Time</Link></li> 
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;