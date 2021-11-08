import "./style.css"
import Characters from "../Characters"

function CharCard ({setStudents, characterList, students, pagePrivate, setPagePrivate}){

    function random (){
        setPagePrivate(false)
        const elementos = characterList.filter((obj) => obj.image !== "")
        let p1 = elementos[Math.floor(Math.random() * elementos.length)]
        let p2 = elementos[Math.floor(Math.random() * elementos.length)]
        let p3 = elementos[Math.floor(Math.random() * elementos.length)]
        if (p1.house !== p2.house){
            const newP3 = elementos.filter (item => item.house !== p1.house && item.house !== p2.house);
            console.log(newP3[0])
            setStudents([p1,p2,newP3[0]])
        } 
        else if (p1.house === p2.house) {
            const newP2 = elementos.filter (item => item.house !== p1.house);
            if ((p3.house !== newP2[0].house) && (p3.house !== p1.house)){
                setStudents([p1,newP2[0],p3])
                console.log("if 2")
            } else if (p3.house === newP2[0].house) {
                const newP3 = elementos.filter (item => item.house !== newP2[0].house && item.house !== p1.house);
                setStudents([p1, newP2[0], newP3[0]])
                console.log("else 2")
            }
        }
    }

    return pagePrivate ? (
        <div className="mae">
            <div className="card">
                <Characters students={students} pagePrivate={pagePrivate} setPagePrivate={setPagePrivate}/>
            </div>
            <div className="div-button">
                <button onClick={random}> Clique aqui </button>
            </div>
        </div>
        ):(
        <div className="mae">
            <div className="card">
                <Characters students={students} pagePrivate={pagePrivate} setPagePrivate={setPagePrivate}/>
            </div>
            <div>
                <button onClick={random}> Encontre os feiticeiros </button>
            </div>
        </div>
    )
}

export default CharCard