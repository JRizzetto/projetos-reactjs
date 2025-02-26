import { BuscarContainer, Buscarcidade, BotaoBuscar } from "./BuscaStyles";

const Busca = ({cidade, setCidade, buscarClima}) => {
  return (
    <BuscarContainer>
      <Buscarcidade 
      type="text"
      value={cidade}
      onChange={(e) => setCidade(e.target.value)}
      placeholder='Digite uma cidade ...'/>
      <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscarContainer>
  )
}

export default Busca;
