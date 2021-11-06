import "./style.css"
import { useState } from "react"
import Characters from "../Characters"

function CharCard ({setStudents, characterList, students}){

    const [perso1, setPerso1] = useState([])
    const [perso2, setPerso2] = useState([])
    const [perso3, setPerso3] = useState([])

    function random (){
        const elementos = characterList.filter((obj) => obj.image !== "")
        let p1 = elementos[Math.floor(Math.random() * elementos.length)]
        let p2 = elementos[Math.floor(Math.random() * elementos.length)]
        let p3 = elementos[Math.floor(Math.random() * elementos.length)]
        if (p2 !== p1){
            if (p3 !== p1 && p2){
                setStudents([p1, p2, p3])
            } else {
                p3 = elementos[Math.floor(Math.random() * elementos.length+1)]
                setStudents([p1, p2, p3])
            }
        } 
        else {
            p2 = elementos[Math.floor(Math.random() * elementos.length+1)]
            if (p3 !== p1 && p2){
                setStudents([p1, p2, p3])
            } else {
                p3 = elementos[Math.floor(Math.random() * elementos.length+2)]
                setStudents([p1, p2, p3])
            }
        }
    }

    function teste (){
        setPerso1(students[0])
        setPerso2(students[1])
        setPerso3(students[2])
    }

    return (
        <div className="card">
            <Characters students={perso1}/>
            <Characters students={perso2}/>
            <Characters students={perso3}/>
            <button onClick={teste}> TESTA AQUI RAPIDAO</button>
            <button onClick={random}>CLIQUE AQUI</button>
        </div>
    )
}

export default CharCard