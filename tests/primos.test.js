import {describe, test, expect} from 'vitest';
import {esPrimo, enesimoPrimo} from '../ejercicios/primos';

describe('La función esPrimo', () => {
    test('Retorna verdadero al evaluar un número primo', () => {
        expect(esPrimo(11)).toBe(true);
        expect(esPrimo(7)).toBe(true);
        expect(esPrimo(5)).toBe(true);
        expect(esPrimo(13)).toBe(true);
    });
    test('Reorna falso al evaluar un número no primo', () => {
        expect(esPrimo(4)).toBe(false);
        expect(esPrimo(100)).toBe(false);
        expect(esPrimo(91)).toBe(false);
        expect(esPrimo(40000)).toBe(false);
    });
});

describe('La función enesimoPrimo', () => {
    test('Retorna el numero primo correspondiente, contando desde el 1', () => {
        expect(enesimoPrimo(1)).toBe(1);
        expect(enesimoPrimo(2)).toBe(2);
        expect(enesimoPrimo(3)).toBe(3);
        expect(enesimoPrimo(4)).toBe(5);
        expect(enesimoPrimo(5)).toBe(7);
        expect(enesimoPrimo(6)).toBe(11);
    });
});
