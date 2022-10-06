/**
 * Calcula la suma de todos los números de un array.
 * @param {number[]} lista
 * @return {number}
 */
export function suma(lista) {
    let resultado = 0;
    lista.forEach((x) => resultado += x);
    return resultado;
}

/**
 * Calcula la media de los números de un array.
 * @param {number[]} lista
 * @return {number}
 */
export function media(lista) {
    return suma(lista) / lista.length;
}

/**
 * Calcula el número más alto de los de un array.
 * @param {number[]} lista
 * @return {number}
 */
export function maximo(lista) {
    let resultado = -Infinity;
    lista.forEach((x) => {
        if (x > resultado) {
            resultado = x;
        }
    });
    return resultado;
}

/**
 * Calcula el número más bajo de los de un array.
 * @param {number[]} lista
 * @return {number}
 */
export function minimo(lista) {
    let resultado = Infinity;
    lista.forEach((x) => {
        if (x < resultado) {
            resultado = x;
        }
    });
    return resultado;
}
