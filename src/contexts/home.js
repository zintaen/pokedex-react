import React, { useReducer, useEffect } from "react";

import { fetchPokemons } from "core/api/pokemon";

export const Context = React.createContext(null);

const initStore = {
    pokemons: [],
    filteredPokemons: [],
};

export const actions = {
    FETCH_POKEMONS: "FETCH_POKEMON",
    FILTER_POKEMONS: "FILTER_POKEMONS",
};

function reducer(store, action) {
    switch (action.type) {
        case actions.FETCH_POKEMONS:
            return {
                ...store,
                pokemons: action.payload,
                filteredPokemons: action.payload,
            };
        case actions.FILTER_POKEMONS:
            return { ...store, filteredPokemons: action.payload };
        default:
            throw new Error("Context.home - action doest not exist!");
    }
}

export function ContextProvider({ children }) {
    const [store, dispatch] = useReducer(reducer, initStore);

    async function _filterPokemons(keyword = "") {
        const filteredPokemons = store.pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(keyword.trim().toLowerCase())
        );
        dispatch({ type: actions.FILTER_POKEMONS, payload: filteredPokemons });
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetchPokemons();
            dispatch({ type: actions.FETCH_POKEMONS, payload: response.data });
        }
        fetchData();
    }, []);

    if (!store.pokemons.length) {
        return "Loading...";
    }

    return (
        <Context.Provider value={{ store, filterPokemons: _filterPokemons }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
