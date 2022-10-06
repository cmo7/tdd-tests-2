/**
 * Función que evalúa si un número es primo o no.
 * @param {number} n
 * @return {boolean}
 */
export function esPrimo(n) {
    for (let i = n - 1; i > 1; i--) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Función que retorna el enésimo primo.
 * Dado un número n calcula el número primo que ocupa esa posición,
 * contando desde el 1.
 * @param {number} n
 * @return {boolean}
 */
export function enesimoPrimo(n) {
    let primosEncontrados = 0;
    let ultimoPrimoEncontrado = 1;
    let siguienteCandidato = 1;
    while (primosEncontrados < n) {
        if (esPrimo(siguienteCandidato)) {
            ultimoPrimoEncontrado = siguienteCandidato;
            primosEncontrados++;
        }
        siguienteCandidato++;
    }
    return ultimoPrimoEncontrado;
}
