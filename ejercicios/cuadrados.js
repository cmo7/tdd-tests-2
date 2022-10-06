/**
 * Función que comprueba si un número es un cuadrado perfecto.
 * Para ser cuadrado perfecto su raiz cuadrada debe ser un número entero.
 * @param {number} n
 * @return {boolean}
 */
export function esCuadrado(n) {
    const raiz = Math.sqrt(n);
    return raiz === Math.round(raiz);
}

/**
 * Función que evalua si todos los números de un array son cuadrados perfectos.
 * @param {number[]} lista
 * @return {boolean}
 */
export function todosSonCuadrados(lista) {
    return lista.every(esCuadrado);
}
