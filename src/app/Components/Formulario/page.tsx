"use client";
import "./Formulario.css"
import { useState, useEffect } from "react";

interface FormData {
 nome: string;
 email: string;
 telefone: string;
 endereco: string;
 bairro: string;
}

interface FormularioProps {
 initialData?: FormData;
}


const Formulario: React.FC<FormularioProps> = ({ initialData }) => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        bairro: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            endereco: '',
            bairro: '',
        });
    };


    return (
        <main>
            <section className="secao-formulario">
                <div className="formulario-content">
                    <form onSubmit={handleSubmit}>
                        <legend className="titulo-form">Cadastre um novo contato</legend>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="telefone">Telefone:</label>
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="(XX)XXXXX-XXXX"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            type="text"
                            name="endereco"
                            placeholder="Digite seu endereço"
                            value={formData.endereco}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="bairro">Bairro:</label>
                        <input
                            type="text"
                            name="bairro"
                            placeholder="Digite seu bairro"
                            value={formData.bairro}
                            onChange={handleChange}
                            required
                        />
                        <button className="btn-form" type="submit">Enviar</button>
                        {showSuccessMessage && <div className="success-message">Cadastrado com sucesso!</div>}
                    </form>

                </div>
            </section>
        </main>
    )
}
export default Formulario;