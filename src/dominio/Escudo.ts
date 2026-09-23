export class Escudo {
	constructor(public readonly porcentajeReduccion: number) {
		if (porcentajeReduccion < 0 || porcentajeReduccion > 100) {
			throw new Error('El porcentaje de reduccion debe estar entre 0 y 100');
		}
	}

	reducirDaño(daño: number): number {
		return daño * (1 - this.porcentajeReduccion / 100);
	}
}
