import {describe, test, expect} from 'vitest';
import {esAnagrama} from '../ejercicios/anagramas';

describe('La Función esAnagrama', () => {
    test('Retorna true si las dos palabras evaluadas son anagramas', () => {
        expect(esAnagrama('abba', 'baab')).toBe(true);
        expect(esAnagrama('abba', 'abab')).toBe(true);
        expect(esAnagrama('abba', 'aabb')).toBe(true);
        expect(esAnagrama('abba', 'abba')).toBe(true);
        expect(esAnagrama('abba', 'bbaa')).toBe(true);
        expect(esAnagrama('abba', 'baba')).toBe(true);

        expect(esAnagrama('amor', 'mora')).toBe(true);
        expect(esAnagrama('amor', 'roma')).toBe(true);
        expect(esAnagrama('amor', 'ramo')).toBe(true);

        expect(esAnagrama('tommarvoloriddle', 'iamlordvoldemort')).toBe(true);
    });
    test('Retorna false si las dos palabras evaluadas no son anagramas', () => {
        expect(esAnagrama('caracol', 'aguacate')).toBe(false);
        expect(esAnagrama('cinco', 'serie')).toBe(false);
        expect(esAnagrama('mesa', 'silla')).toBe(false);
    });
});
