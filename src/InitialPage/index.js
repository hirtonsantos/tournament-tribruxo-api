import { useState } from "react";
import "./script.css"
import CharCard from "../CharCard";

function InitialPage ({setPage, page, characterList, setStudents, students}){
    
    const [pagePrivate, setPagePrivate] = useState(true)

    function pageInitialOn (){
        setPage(true)
    }

    function pagePersonal(){
        setPagePrivate(false)
    }
    
    return page ? (
        <CharCard pagePersonal= {pagePersonal }setPagePrivate={setPagePrivate} pagePrivate={pagePrivate} characterList={characterList} setStudents={setStudents} students={students}/>
    ) : (
        <div className="first-page">
            <h1> Torneio tribruxo</h1>
            <h2> Clique no botão para encontrar os feiticeiros! </h2>
            <button onClick={pageInitialOn}> ENTRE NO JOGO </button>
        </div>
    )
}

export default InitialPage;