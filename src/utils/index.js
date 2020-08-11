export function getPokemonTypeStyles(type) {
  const normalizedType = String(type).toLowerCase();

  switch (normalizedType) {
    case "grass":
      return {
        background: "#9bcd50",
        color: "black",
      };
    case "poison":
      return {
        background: "#5e35b1",
        color: "white",
      };
    case "water":
      return {
        background: "#1976d2",
        color: "white",
      };
    case "fire":
      return {
        background: "#c62828",
        color: "white",
      };
    case "bug":
      return {
        background: "#6d4c41",
        color: "white",
      };
    case "dark":
      return {
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
      };
    case "electric":
      return {
        background: "#ffb300",
        color: "white",
      };
    case "steel":
      return {
        background: "#607d8b",
        color: "white",
      };
    case "ice":
      return {
        background: "#00bcd4",
        color: "white",
      };
    default:
      return {
        background: "rgb(236, 238, 240)",
        color: "black",
      };
  }
}
