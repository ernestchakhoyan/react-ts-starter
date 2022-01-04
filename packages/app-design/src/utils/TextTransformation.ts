export const capitalize = ([first, ...rest]) => {
    return first[0].toUpperCase() + rest.join("");
}
