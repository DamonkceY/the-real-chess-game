import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';

class Bishop extends Piece {
	protected defaultPositions = {
		B: initialPiecesPosition.B_B,
		W: initialPiecesPosition.W_B,
	};

	constructor(color: 'W' | 'B', position?: number) {
		super(`${color}_B`);
		this.setDefaultPos(color, position);
	}
}

export default Bishop;
