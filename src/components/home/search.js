import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./search.module.scss";

function Search({ filterPokemons }) {
    const [keyword, setKeyword] = useState();

    function _handleSubmit(e) {
        e.preventDefault();
        filterPokemons(keyword);
    }

    return (
        <div className={styles.container}>
            <div>
                <h4 className={styles.title}>Name or Number</h4>
                <form className={styles.form} onSubmit={_handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter here..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button onClick={() => filterPokemons(keyword)}>
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>
            <div className={styles.instruction}>
                <h4>
                    Search for a Pokémon by name or using its National Pokédex
                    number
                </h4>
            </div>
        </div>
    );
}

export default Search;
