import "./style.css"
import Characters from "../Characters"

function CharCard ({setStudents, characterList, students}){

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

    return (
        <div className="mae">
            <div className="card">
                <Characters students={students}/>
            </div>
            <div>
                <button onClick={random}>CLIQUE AQUI</button>
            </div>
        </div>
    )
}

export default CharCard