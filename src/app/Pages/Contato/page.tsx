import "./Formulario.css"

const 

const Contato = () => {
    return(
        <>
         <section className="secao-formulario">
            <div className="formulario-content">
                <form action="">
                    <legend className="titulo-form">Adote seu pet</legend>
                    <label htmlFor="">Nome</label>
                    <input type="text" name="nome" placeholder="Digite seu nome" />

                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="Digite seu email" />

                    <label htmlFor="">Telefone</label>
                    <input type="text" name="telefone" placeholder="(XX)XXXXX-XXXX" />

                    <label htmlFor="">Endereço</label>
                    <input type="text" name="endereco" placeholder="Digite seu endereço"/>

                    <label htmlFor="">Bairro</label>
                    <input type="text" name="bairro" placeholder="Digite seu bairro"/>

                    <label htmlFor="">Numero</label>
                    <input type="number" name="numro" placeholder="Digite o numero da casa" />

                    <button className="btn-form">Enviar</button>
                </form>
            </div>
         </section>
        </>
    )
}
export default  Contato; 