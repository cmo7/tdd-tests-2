import { describe, test, expect } from "vitest";
import { esCuadrado, todosSonCuadrados } from "../ejercicios/cuadrados";

describe('La función esCuadrado', () => {
    test('retorna true cuando se evalúa un número que tiene raiz cuadrada entera', () => {
        expect(esCuadrado(4)).toBe(true);
        expect(esCuadrado(25)).toBe(true);
        expect(esCuadrado(100)).toBe(true);
        expect(esCuadrado(9)).toBe(true);
    });
    test('retorna false cuando se evalúa un número que no tiene raiz cuadrada entera', () => {
        expect(esCuadrado(5)).toBe(false);
        expect(esCuadrado(13)).toBe(false);
        expect(esCuadrado(98)).toBe(false);
        expect(esCuadrado(1983)).toBe(false);
    })
});

describe('La función todosSonCuadrados', () => {
    test('retorna true si evalua un array cuyos elementos son todos cuadrados', () => {
        expect(todosSonCuadrados([2,4,9])).toBe(true);
        expect(todosSonCuadrados([25,100])).toBe(true);
        expect(todosSonCuadrados([4356])).toBe(true);
    });
    test('retorna flase si alguno de los elementos del array no es cuadrado', () => {
        expect(todosSonCuadrados([3, 4, 9])).toBe(false);
        expect(todosSonCuadrados([25, 101])).toBe(false);
        expect(todosSonCuadrados([4355])).toBe(false);
    })
})