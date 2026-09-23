export abstract class Arma {
	private municionesRestantes: number;

	protected constructor(
		public readonly nombre: string,
		public readonly daño: number,
		municiones: number,
	) {
		if (daño <= 0) {
			throw new Error('El daño debe ser mayor que cero');
		}

		if (municiones < 0) {
			throw new Error('Las municiones no pueden ser negativas');
		}

		this.municionesRestantes = municiones;
	}

	get municiones(): number {
		return this.municionesRestantes;
	}

	disparar(): number {
		if (this.municionesRestantes === 0) {
			return 0;
		}

		this.municionesRestantes -= 1;
		return this.daño;
	}
}
