import { axiosInstances } from "./axios";

const api = axiosInstances.default;

export async function fetchPokemons() {
    return await api.get("/pokemons");
}
