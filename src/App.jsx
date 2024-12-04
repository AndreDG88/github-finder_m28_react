import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
const [formularioVisivel, setFormularioVisivel] = useState(true);
const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    // uma função commais de um elemento deve ter seu conteúdo dentro de uma tag de encapsulamento ou fragmento
    // Uma tag de encapsulamento pode ser uma DIV por exemplo, qualquer taga que tnha a função de criar grupos serve.
    // Já os fragmentos são chaves de Tag vazias "<>", elas podem ser utilizadas assim neste contexto. Apenas para agrupar mas sem agregar nenhum recurso de tag.
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
