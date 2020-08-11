import React from "react";

import { getPokemonTypeStyles } from "utils";
import styles from "./pokemonCard.module.scss";

function PokemonCard({ name, type, number, ThumbnailAltText, ThumbnailImage }) {
    return (
        <div className={styles.card}>
            <img
                className={styles.thumbnail}
                src={ThumbnailImage}
                alt={ThumbnailAltText}
            />
            <div className={styles.cardBody}>
                <div className={styles.number}>#{number}</div>
                <h4 className={styles.name}>{name}</h4>
                <ul className={styles.types}>
                    {type?.map((type) => (
                        <li
                            className={styles.type}
                            style={getPokemonTypeStyles(type)}
                            key={`card-${number}-${type}`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PokemonCard;
