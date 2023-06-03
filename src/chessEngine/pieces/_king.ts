import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';

class King extends Piece {
	protected defaultPositions = {
		B: initialPiecesPosition.B_K,
		W: initialPiecesPosition.W_K,
	};

	constructor(color: 'W' | 'B', position?: number) {
		super(`${color}_K`);
		this.setDefaultPos(color, position);
	}
}

export default King;
