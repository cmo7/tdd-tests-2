import {describe, test, expect} from 'vitest';
import {quitarElementos} from '../ejercicios/quitarElementos';

describe('La función quitarElementos', () => {
    test(`Retorna un array conteniendo solo los elementos en posiciones pares
     (0, 2, 4...) del array que evalúa`, () => {
        expect(quitarElementos([1, 2, 3, 4, 5, 6, 7, 8, 9]))
            .toEqual([1, 3, 5, 7, 9]);
        expect(quitarElementos(['si', 'no', 'si', 'no']))
            .toEqual(['si', 'si']);
    });
});
