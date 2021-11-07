import "./style.css"

function Characters ({students, setPagePrivate, pagePrivate}){

    return pagePrivate ? (
        <div>
        <p>
            Os bruxos de Hogwarts estão ansiosos para as Preparatórias do Torneio Tribruxo. 
            Três alunos serão escolhidos para representar as suas escolas. 
            Quais alunos serão escolhidos?
        </p> 
        </div>
        ):(
        <div className="characteres">
        { students.map((character) => (
            <div className="personagem">
            <img src={character.image} alt="alt"/>
            <h3> {character.name}</h3>
            <h4>{character.house}</h4>
            <h4> {character.species}</h4>
        </div>
        ))}
        </div>
    )
}

export default Characters;
