import {useEffect, useState} from "react"
import CharCard from "./CharCard";

function App() {

  const [characterList, setCharacterList] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => setCharacterList(response))
    .catch((err) => console(err))
  }, []);  

  return (
    <div className="App">
      <header className="App-header">
      <CharCard characterList={characterList} setStudents={setStudents} students={students}/>
      </header>
    </div>
  );
}

export default App;
