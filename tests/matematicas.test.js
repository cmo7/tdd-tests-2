import {describe, test, expect} from 'vitest';
import {maximo, suma, media, minimo} from '../ejercicios/matematicas';

describe('La función suma', () => {
    test('Suma correctamente los elementos de una lista', () => {
        expect(suma([1, 2, 3])).toBe(6);
    });
});

describe('La función media', () => {
    test('Calcula correctamente las media de una lista', () => {
        expect(media([1, 2, 3])).toBe(2);
        expect(media([1, 5, 7, 12, 1])).toBe(5.2);
    });
});

describe('la función maximo', () => {
    test('Retorna correctamente el número más grande de una lista', () => {
        expect(maximo([1, 2, 3, 4, 5, 6])).toBe(6);
        expect(maximo([-1, -2, -3, -4, -5, -6])).toBe(-1);
        expect(maximo([100, 2, 3, 4, 5, 6])).toBe(100);
        expect(maximo([-1, 2, -3, 4, -5, 6])).toBe(6);
    });
});

describe('la función minimo', () => {
    test('Retorna correctamente el número más pequeño de una lista', () => {
        expect(minimo([1, 2, 3, 4, 5, 6])).toBe(1);
        expect(minimo([-1, -2, -3, -4, -5, -6])).toBe(-6);
        expect(minimo([100, 2, 3, 4, 5, 6])).toBe(2);
        expect(minimo([-1, 2, -3, 4, -5, 6])).toBe(-5);
    });
});
