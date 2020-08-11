import React from "react";

import PokemonCard from "components/shared/pokemonCard";
import styles from "./pokemonList.module.scss";

function PokemonList({ filteredPokemons }) {
    if (!filteredPokemons.length) {
        return "No pokemon matched";
    }

    return (
        <ul className={styles.container}>
            {filteredPokemons.map((pokemon) => (
                <li className={styles.pokemon} key={pokemon.id}>
                    <PokemonCard {...pokemon} />
                </li>
            ))}
        </ul>
    );
}

export default PokemonList;
