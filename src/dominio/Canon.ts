import { Arma } from './Arma.js';

export class Canon extends Arma {
	constructor(municiones = 2) {
		super('Canon', 2, municiones);
	}
}
