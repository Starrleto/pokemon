const fetchPokemon = async (p) => {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/'+p);
    const data = await promise.json();
    console.log(data);
    return data;
}

const fetchData = async(l) => {
    const promise = await fetch(l);
    const data = await promise.json();
    console.log(data);
    return data;
}

export { fetchData, fetchPokemon };