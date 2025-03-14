import { useState, useEffect } from "react";



const Citacao = ({texto, autor}) => {
    const [traducao, setTraducao] = useState("");

    async function traduzirCitacao(idioma) {
        try {
            const resposta = await fetch("https://api.funtranslations.com/translate/yoda.json?text=" + encodeURIComponent(texto), {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            const data = await resposta.json();

            // Verifique se a tradução está no formato esperado
            setTraducao(data.contents.translated);
        } catch (error) {
            console.log("Erro ao traduzir", error);
        }
    }

    return (
        <div>
            <blockquote className="blockquote">
                <p>{traducao ? traducao : texto}</p>
                <footer className="blockquote-footer">{autor}</footer>
            </blockquote>
            <button 
            className="btn btn-primary mr-1"
            onClick={()  => traduzirCitacao("en")}
            >
                Traduzir para o inglês
            </button>

            <button 
            className="btn btn-secondary m-1"
            onClick={() => traduzirCitacao("es")}
            >
                Traduzir para o Espanhol
            </button>
        </div>
    )
}

export default Citacao;