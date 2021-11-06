
function Characters ({characterList}){

    return (
        <div>
        {/* <h1> Lista de personagens: </h1> */}
        <div className="card">
        <img src={characterList} alt="alt" />
        </div>
        </div>
    )
}

export default Characters;