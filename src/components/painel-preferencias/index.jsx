
import { useState, useEffect } from "react";
import { salvarNoStorage, buscarDoStorage } from "../../utils/storage";

import "./style.css";

export function PainelPreferencias() {

    const [nome, setNome] = useState(
        () => buscarDoStorage("usuario_nome") || ""
    );

    const [tema, setTema] = useState(
        () => buscarDoStorage("usuario_tema") || "claro"
    );

    // Atualiza o tema do body conforme a escolha do usuário
    useEffect(() => {
        if (tema === "escuro") {
            document.body.classList.add("tema-escuro");
        } else {
            document.body.classList.remove("tema-escuro");
        }
    }, [tema]);

    // Manipula a alteração do nome
    const handleMudancaNome = (e) => {
        const novoNome = e.target.value;

        setNome(novoNome);
        salvarNoStorage("usuario_nome", novoNome);
    };

    // Manipula a alteração do tema
    const handleMudancaTema = (e) => {
        const novoTema = e.target.value;

        setTema(novoTema);
        salvarNoStorage("usuario_tema", novoTema);
    };

    return (
        <div className="painel-container">

            <h2>Olá, {nome || "Visitante"}!</h2>

            <div className="grupo-input">
                <label htmlFor="nome">Seu nome:</label>

                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={handleMudancaNome}
                    placeholder="Digite seu nome aqui..."
                />
            </div>

            <div className="grupo-input">
                <label htmlFor="tema">Escolha seu tema:</label>

                <select
                    id="tema"
                    value={tema}
                    onChange={handleMudancaTema}
                >
                    <option value="claro">Tema claro</option>
                    <option value="escuro">Tema escuro</option>
                </select>
            </div>

        </div>
    );
}
