import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';

class Rook extends Piece {
	protected defaultPositions: { B: Array<number>; W: Array<number> } = {
		B: initialPiecesPosition.B_R,
		W: initialPiecesPosition.W_R,
	};

	constructor(color: 'W' | 'B', position?: number) {
		super(`${color}_R`);
		this.setDefaultPos(color, position);
	}
}

export default Rook;
