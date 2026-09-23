import { describe, expect, it } from 'vitest';
import { Arma } from '../src/dominio/Arma.js';
import { Buque } from '../src/dominio/Buque.js';
import { Canon } from '../src/dominio/Canon.js';
import { Escudo } from '../src/dominio/Escudo.js';
import { Pistola } from '../src/dominio/Pistola.js';
import { Soldado } from '../src/dominio/Soldado.js';
import { Tanque } from '../src/dominio/Tanque.js';

class ArmaDePrueba extends Arma {
	constructor(municiones: number) {
		super('Arma de prueba', 1, municiones);
	}
}

describe('Requisitos del juego', () => {
	it('el soldado muere con un disparo', () => {
		const soldado = new Soldado();

		soldado.recibirDisparo(new ArmaDePrueba(1));

		expect(soldado.vida).toBe(0);
		expect(soldado.estaVivo()).toBe(false);
	});

	it('el tanque queda sin vida en dos disparos', () => {
		const tanque = new Tanque();
		const arma = new ArmaDePrueba(2);

		tanque.recibirDisparo(arma);
		tanque.recibirDisparo(arma);

		expect(tanque.vida).toBe(0);
		expect(tanque.estaVivo()).toBe(false);
	});

	it('el buque queda sin vida en tres disparos', () => {
		const buque = new Buque();
		const arma = new ArmaDePrueba(3);

		buque.recibirDisparo(arma);
		buque.recibirDisparo(arma);
		expect(buque.estaVivo()).toBe(true);

		buque.recibirDisparo(arma);

		expect(buque.vida).toBe(0);
		expect(buque.estaVivo()).toBe(false);
	});

	it('el escudo reduce el daño recibido', () => {
		const tanque = new Tanque();
		tanque.equiparEscudo(new Escudo(50));

		tanque.recibirDisparo(new ArmaDePrueba(1));

		expect(tanque.vida).toBe(1);
	});

	it('las armas tienen municiones limitadas', () => {
		const pistola = new Pistola(1);
		const canon = new Canon(1);

		expect(pistola.disparar()).toBe(1);
		expect(pistola.disparar()).toBe(0);
		expect(canon.disparar()).toBe(2);
		expect(canon.disparar()).toBe(0);
	});

	it('existen al menos dos tipos de armas', () => {
		expect(new Pistola()).toBeInstanceOf(Arma);
		expect(new Canon()).toBeInstanceOf(Arma);
	});
});
