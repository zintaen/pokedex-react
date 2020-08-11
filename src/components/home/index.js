import React, { useContext } from "react";

import Search from "./search";
import PokemonList from "./pokemonList";
import { Context } from "contexts/home";

function HomeScreenPresentation() {
    const context = useContext(Context);
    return (
        <>
            <Search filterPokemons={context.filterPokemons} />
            <PokemonList filteredPokemons={context.store.filteredPokemons} />
        </>
    );
}

export default HomeScreenPresentation;
