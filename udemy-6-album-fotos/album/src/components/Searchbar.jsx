import React from 'react'

const Searchbar = ({ setQuery, setCategoria, setActivateSerach }) => {
    const categorias = [
        "Natureza",
        "Pessoas",
        "Tecnologia",
        "Animais",
        "Esportes",
    ];

    return (
        <div className="search-bar">
            <input 
            type="text" 
            placeholder='Pesquisar fotos...' 
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => setActivateSerach(true)}>Pesquisar</button>
            <select onChange={(e) => {
                setCategoria(e.target.value);
                setActivateSerach(true);
            }}>
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                        {categoria}
                    </option>
                ))};
            </select>
        </div>
    );
};

export default Searchbar