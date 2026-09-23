import { describe, expect, it } from 'vitest';
import { Arma } from '../src/dominio/Arma.js';

class ArmaDePrueba extends Arma {
	constructor(municiones: number) {
		super('Arma de prueba', 1, municiones);
	}
}

describe('Arma', () => {
	it('consume una municion y devuelve su daño al disparar', () => {
		const arma = new ArmaDePrueba(2);

		expect(arma.disparar()).toBe(1);
		expect(arma.municiones).toBe(1);
	});

	it('no causa daño cuando se queda sin municiones', () => {
		const arma = new ArmaDePrueba(1);

		arma.disparar();

		expect(arma.disparar()).toBe(0);
		expect(arma.municiones).toBe(0);
	});

	it('rechaza una cantidad negativa de municiones', () => {
		expect(() => new ArmaDePrueba(-1)).toThrow(
			'Las municiones no pueden ser negativas',
		);
	});
});
