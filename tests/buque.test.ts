import { describe, expect, it } from 'vitest';
import { Arma } from '../src/dominio/Arma.js';
import { Buque } from '../src/dominio/Buque.js';

class ArmaDePrueba extends Arma {
	constructor(municiones: number) {
		super('Arma de prueba', 1, municiones);
	}
}

describe('Buque', () => {
	it('comienza con tres puntos de vida', () => {
		const buque = new Buque();

		expect(buque.vida).toBe(3);
		expect(buque.estaVivo()).toBe(true);
	});

	it('queda sin vida luego de recibir tres disparos', () => {
		const buque = new Buque();
		const arma = new ArmaDePrueba(3);

		buque.recibirDisparo(arma);
		buque.recibirDisparo(arma);
		expect(buque.estaVivo()).toBe(true);

		buque.recibirDisparo(arma);

		expect(buque.vida).toBe(0);
		expect(buque.estaVivo()).toBe(false);
	});
});