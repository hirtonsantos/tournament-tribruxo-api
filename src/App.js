import {useEffect, useState} from "react"
// import CharCard from "./CharCard";
import InitialPage from "./InitialPage";

function App() {

  const [characterList, setCharacterList] = useState([])
  const [students, setStudents] = useState([])
  const [page, setPage] = useState(false)

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => setCharacterList(response))
    .catch((err) => console(err))
  }, []);  


  return (
    <div className="App">
      <header className="App-header">
      <InitialPage setPage={setPage} page={page} characterList={characterList} setStudents={setStudents} students={students}/>
      {/* <CharCard characterList={characterList} setStudents={setStudents} students={students}/> */}
      </header>
    </div>
  );
}

export default App;
