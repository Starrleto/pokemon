const fetchPokemon = async (p) => {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/'+p);
    const data = await promise.json();
    return data;
}

const fetchData = async(l) => {
    const promise = await fetch(l);
    const data = await promise.json();
    return data;
}

const addFav = (p) => {
    const list = localStorage.getItem("favList")
    if(list != undefined){
        let favArray = JSON.parse(list);
        if(favArray.includes(p)){
            removeFav(p);
        }
        else
        {
            favArray.push(p);
            console.log(favArray);
            localStorage.setItem("favList", JSON.stringify(favArray));   
        }
    }
    else{
        let favArray = [p];
        localStorage.setItem("favList", JSON.stringify(favArray));
    }
}

const removeFav = (p) => {
    const list = localStorage.getItem("favList")
    if(list != undefined){
        let favArray = JSON.parse(list);
        favArray.splice(favArray.indexOf(p), 1);
        console.log(favArray);
        localStorage.setItem("favList", JSON.stringify(favArray));
    }
}

const symbol = (p) => {
    
}

export { fetchData, fetchPokemon, addFav, removeFav };