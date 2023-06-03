import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';

class Pawn extends Piece {
	protected defaultPositions = {
		B: initialPiecesPosition.B_P,
		W: initialPiecesPosition.W_P,
	};

	constructor(color: 'W' | 'B', position?: number) {
		super(`${color}_P`);
		this.setDefaultPos(color, position);
	}
}

export default Pawn;
