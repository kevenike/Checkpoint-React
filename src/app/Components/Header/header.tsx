'use client';
import Image from "next/image";
import "./Header.css"
import Link from "next/link";
import Logo from '../../../../public/assets/Amigo-removebg-preview.png'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Header = () => {

    const router = useRouter(); 
    const pathname = usePathname();

    return (
        <>
            <header className={`Cabecalho cabecalho-contato ${pathname === "/Pages/Contato" ? "header-contato-active" : ""}`}>
                <Link href="/"><Image className="imagem-logo" src={Logo} alt="Logomarca da empresa" /></Link>
                <nav className="menu">
                    <ul className="links-de-navegacao">
                        <li className="links"><Link className="link-contato" href="../../Pages/Contato">Contato</Link></li>
                        <li className="links"><Link className={`link ${pathname === "/Pages/Contato" ? "links-contato-active" : ""}`} href="">Time</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;