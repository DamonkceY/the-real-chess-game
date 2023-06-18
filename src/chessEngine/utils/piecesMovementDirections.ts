import { PieceName } from '../entitites/pieces.entities.ts';

/*
 *
 * */
export const piecesMovementDirections: Record<PieceName, Array<number>> = Object.freeze({
	P: [8, 7, 9, 16],
	B: [7, 9, -7, -9],
	Kn: [17, 15, 10, 6, -17, -15, -10, -6],
	R: [8, 1, -8, -1],
	Q: [8, 1, 9, 7, -8, -1, -9, -7],
	K: [8, 9, 7, 1, -8, -9, -7, -1],
});
