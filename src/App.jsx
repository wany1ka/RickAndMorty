import {useState, useEffect } from "react"

const RickAndMorty = () => {
    const [characters, setCharacters] = useState([])
    const fetchCharacters = async () => {
        const response = await 
        fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setCharacters(data.results)
    }
    useEffect (() => {fetchCharacters()},
    [])

    return (
      <div>
        {/**The data is mapped through and information will be displayed on the UI */}
        {characters.map((character) => (
          <div key={character.id}>
            <div>{character.name}</div>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    );
}

export default RickAndMorty;

// const DisplayData = () => {
//   const data = [
//     {
//       id: 0,
//       language: "JavaScript",
//       description: "Software Engineering",
//     },
//     {
//       id: 1,
//       language: "Python",
//       description: "Data Science",
//     },
//     {
//       id: 2,
//       language: "Kotlin",
//       description: "Android Development",
//       },
//   ];
  
//   return(
//     <>
//     {data.map((item) => {
//       return(
//         <div key={item.id}>
//           <div>{item.language}</div>
//           <div>{item.description}</div>
//         </div>
//       )})}
//       </>
//   );
// };

// export default DisplayData;