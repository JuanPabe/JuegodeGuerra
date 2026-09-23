import { Arma } from './Arma.js';

export class Pistola extends Arma {
	constructor(municiones = 6) {
		super('Pistola', 1, municiones);
	}
}
