/**
 * Función que dado un array retorna otro solo con los elementos en posiciones
 * pares.
 * @param {array} lista
 * @return {array}
 */
export function quitarElementos(lista) {
    return lista.filter((x, i) => i % 2 === 0);
}
