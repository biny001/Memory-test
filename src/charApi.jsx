//Pokemon Api
// useEffect(function () {
//     async function GetPokemon() {
//       try {
//         const response = await fetch(
//           "https://pokeapi.co/api/v2/pokemon?limit=20"
//         );
//         const { results } = await response.json();

//         const pokemonData = await Promise.all(
//           results.map(async (pokemon) => {
//             const detailResponse = await fetch(pokemon.url);
//             return await detailResponse.json();
//           })
//         );

//         console.log(pokemonData);
//         setPokemonData(pokemonData);
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//     GetPokemon();
//   }, []);
