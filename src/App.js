import {useEffect, useState} from "react"
import Characters from "./Characters";

function App() {

  const [characterList, setCharacterList] = useState([])
  const [player, setPlayer] = useState([])
  const [conditional, setConditional] = useState(false)

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => setCharacterList(response))
    .catch((err) => console(err))
  }, []);  

  // console.log(characterList[0])
  // console.log(characterList)

  function name (){
    const elemento = characterList[Math.floor(Math.random() * characterList.length)].image
      if (elemento !== ""){
        setPlayer(elemento)
        setConditional(true)
      } else {
        setConditional(false)
      }
  }


  return (
    <div className="App">
      <header className="App-header">
      {conditional ? ( <img src={player} alt="ola"/>) : ({name})}
      <button onClick={name}>CLIQUE AQUI</button>
      </header>
    </div>
  );
}

export default App;
