"use client";
import Image from "next/image";
import Link from "next/link";
import "./principal.css"
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import GatoEscodinho from "../../public/assets/gatoescondido.avif"
import CachorroEstilo from "../../public/assets/cachorroestilo.avif"
import AdoteUmCachorro from "../../public/assets/photo-1584303597973-0401cd1f9796isso.avif"
import CachorroNoCarro from "../../public/assets/CachorroBonito.avif"
import React, { useEffect, useState } from 'react';


const Home: React.FC = () => {

   const [isVisible, setIsVisible] = useState<boolean>(true);
   useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
   }, [isVisible]);

  return (
    <main >
      {isVisible && (        
       <div><p>Aqui está a sua mensagem!</p></div>      
       )} 
      <section className="imagem-e-texto">
        <h1 className="titulo-amigo-verdadeiro">
          <span className="Jornada">Amigo Verdadeiro</span>
          Laços que Resistem ao Tempo
        </h1>
      </section>
      
      <section className="sobre">
        <div className="conteudo">
          <div className="card-gato-cachorro  card-cor-black">
            <div className="alinhando-o-texto-e-a-seta">
              <p className="texto-revitalize">Revitalize seus Vínculos com os Animais de Estimação: Uma Abordagem Abrangente</p>
              <FaArrowRight className="ArrowRight-cards" />
            </div>

          </div>

          <div className="card-gato-cachorro">
            <div className="icone-text">
              <FaHeart className="icon-coracao" />
              <p className="companheiros-amorosos">
                Pets são companheiros amorosos, ensinando-nos gratidão, lealdade e felicidade diária.
              </p>
            </div>
          </div>

          <div className="card-gato-cachorro">
            <Image className="imagem-pets-cards" src={GatoEscodinho} alt="gato escodido" />
          </div>

          <div className="card-gato-cachorro">
            <div className="icone-text">
              <FaCat className="icon-Cat" />
              <p className="companheiros-amorosos">
                Gatos: independentes, carinhosos, misteriosos e donos de personalidades cativantes e únicas
              </p>
            </div>
          </div>

          <div className="card-gato-cachorro">
            <Image className="imagem-pets-cards" src={CachorroEstilo} alt="cachorro estilo" />
          </div>

          <div className="card-gato-cachorro">
            <div className="icone-text">
              <FaDog className="icon-Dog" />
              <p className="companheiros-amorosos">
                Cachorros: leais, brincalhões, companheiros e amigos que preenchem nossos dias com alegria.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="imagem-texto-gato">
        <div className="imagem-texto-gato-container">
          <h2 className="ronronando">Ronronando em Casa: O Mundo Encantador dos Gatos</h2>
          <p className="dicas-para-vida">DICAS PARA A VIDA COM GATOS</p>
        </div>
      </section>

      <section className="adote">
        <div className="adote-content">
          <div className="adote-um-cachorro">
            <h2 className="mude-uma-vida">Adote um Cachorro e Mude uma Vida: Descubra o Amor Incondicional!</h2>
            <p className="procurando-por-amor">
              Procurando por amor incondicional e alegria em quatro patas? Não procure mais! Em nossa seção de adoção de cachorros, você encontrará companheiros peludos ansiosos por um lar amoroso. De  pequenos filhotes a cães mais velhos, temos um amigo de quatro patas perfeito para você. Adote hoje e descubra o amor que só um cachorro pode oferecer!
            </p>
          </div>
          <Image className="imagem-adote-um-cachorro" src={AdoteUmCachorro} alt="Imagem adote seu cachorro" />
        </div>
      </section>

      <section className="benefico-de-adotar">
        <div className="beneficio-conteudo">

          <div className="titulo-beneficio">
            <h2>Transforme Vidas: Descubra o Poder da Adoção de Pets!</h2>
          </div>
          <Image className="cachorro-no-carro" src={CachorroNoCarro} alt="imagem do cachorro no carro" />
          <div className="paragrafos-beneficios">
            <div className="primeiro-paragrafo">
              <p className="descobrindo-a-familia-feliz-com-pet">
                Adotar um pet não só oferece companheirismo, mas também traz uma sensação incrível de gratificação. Ao escolher a adoção, não apenas damos a um animal uma nova chance, mas também enchemos nossas vidas com amor incondicional e alegria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contato-doacao">
        <div className="contato-doacao-content">
          <h1 className="precisa-de-um-doce">Precisa de um doce coração?</h1>
          <p className="ajude-nos-a-garantir">
            Ajude-nos a garantir que cada cachorro abandonado encontre um lar amoroso e seguro. Com sua doação, podemos fornecer cuidados essenciais, incluindo alimentação, vacinas e esterilização, preparando-os para uma vida cheia de amor e felicidade ao lado de uma família carinhosa. Cada contribuição, por menor que seja, faz uma grande diferença na vida desses animais necessitados. Junte-se a nós nessa missão de compaixão e ajude a transformar a vida de um cachorro abandonado hoje mesmo.
          </p>
          <Link className="links-contato-doacao" href="../../Pages/Contato">Contato</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;