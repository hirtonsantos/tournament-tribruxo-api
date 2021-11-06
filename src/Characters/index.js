
function Characters ({students}){

    return (
        <div>
        <div>
        <img src={students.image} alt="alt" />
        <h1> {students.name}</h1>
        <h2>{students.house}</h2>
        <h3> {students.species}</h3>
        </div>
        </div>
    )
}

export default Characters;