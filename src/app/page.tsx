import Image from "next/image";
import "./principal.css"
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import GatoEscodinho from "../../public/assets/gatoescondido.avif"
import CachorroEstilo from "../../public/assets/cachorroestilo.avif"

export default function Home() {
  return (
    <main >
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
              <FaDog className="icon-Dog" />
              <p className="companheiros-amorosos">
                Cachorros: leais, brincalhões, companheiros e amigos que preenchem nossos dias com alegria.
              </p>
            </div>
          </div>

          <div className="card-gato-cachorro">
            <Image className="imagem-pets-cards" src={CachorroEstilo} alt="cachorro estilo" />
          </div>

          <div className="card-gato-cachorro">
            <div className="icone-text">
              <FaCat className="icon-Cat" />
              <p className="companheiros-amorosos">
                Gatos: independentes, carinhosos, misteriosos e donos de personalidades cativantes e únicas
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
