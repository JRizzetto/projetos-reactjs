import FotoAmpliada from "./components/FotoAmpliada";
import FotoList  from "./components/FotoList";
import Searchbar  from "./components/Searchbar";

import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  console.log(import.meta.env.VITE_UNSPLASH_API_KEY)

  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [activateSerach, setActivateSerach] = useState(false)


  const fetchData = async ({query, categoria}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if(query || categoria) {
      let searchQuery = query;

      if(query && categoria) {
        searchQuery = `${query} ${categoria}`;
      }else if (categoria) {
        searchQuery = categoria;
      }

      const response = await axios.get("https://api.unsplash.com/search/photos", 
        {
          params: {
            client_id: apiKey,
            query: searchQuery,
          },
        }
      );

      setFotos(response.data.results);
      return;
    }

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });

    console.log("Fetched photos:", response.data);

    setFotos(response.data);

    
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, [])

  useEffect(() => {
    if(activateSerach) {
      fetchData({ query, categoria });
      setActivateSerach(false);
    }
  })

  return (
    <div className="container">
      <Searchbar  
      setQuery={setQuery}
      setCategoria={setCategoria}
      setActivateSerach={setActivateSerach}
      />
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada}/>
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada}/>
      )}
    </div>
  )
}

export default App
