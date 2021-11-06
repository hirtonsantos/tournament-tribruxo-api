import "./style.css"

function Characters ({students}){

    return (
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


// {products.map((item, index) => (
//     <Product key={index} showProducts={showProducts}  handleClick={handleClick} id={item.id} name={item.name} price={item.price} category={item.category} img={item.img}/>
// ))}