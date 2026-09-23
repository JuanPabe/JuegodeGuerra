import { Arma } from './Arma.js';
import { Escudo } from './Escudo.js';

export abstract class Unidad {
	private vidaActual: number;
	private escudo?: Escudo;

	protected constructor(public readonly vidaMaxima: number) {
		this.vidaActual = vidaMaxima;
	}

	get vida(): number {
		return this.vidaActual;
	}

	estaVivo(): boolean {
		return this.vidaActual > 0;
	}

	equiparEscudo(escudo: Escudo): void {
		this.escudo = escudo;
	}

	dispararContra(objetivo: Unidad, arma: Arma): void {
		objetivo.recibirDisparo(arma);
	}

	recibirDisparo(arma: Arma): void {
		const dañoDisparado = arma.disparar();
		const dañoRecibido = this.escudo?.reducirDaño(dañoDisparado) ?? dañoDisparado;
		this.vidaActual = Math.max(0, this.vidaActual - dañoRecibido);
	}
}
