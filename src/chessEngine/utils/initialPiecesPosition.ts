import { getArrayOf8 } from './commonFuncs.ts';
import { PieceCodeName } from '../entitites/pieces.entities.ts';

export const initialPiecesPosition: Record<PieceCodeName, Array<number>> = Object.freeze({
	B_P: [...getArrayOf8().map((_) => _ + 8)], // Black pawns initial positions
	W_P: [...getArrayOf8().map((_) => _ + 48)], // White pawns initial positions
	B_B: [2, 5], // Black bishops initial positions
	W_B: [58, 61], // White bishops initial positions
	B_Kn: [1, 6], // Black knights initial positions
	W_Kn: [57, 62], // White knights initial positions
	B_R: [0, 7], // Black rooks initial positions
	W_R: [56, 63], // White rooks initial positions
	B_Q: [3], // Black queen initial positions
	W_Q: [59], // White queen initial positions
	B_K: [4], // Black king initial positions
	W_K: [60], // White king initial positions
});
