import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';
import { PieceColor } from '../entitites/pieces.entities.ts';
import { piecesMovementDirections } from '../utils/piecesMovementDirections.ts';

class King extends Piece {
	protected isRecursiveMovement = false;
	protected pieceMovementACC = piecesMovementDirections.K;

	protected defaultPositions = {
		B_: initialPiecesPosition.B_K,
		W_: initialPiecesPosition.W_K,
	};

	constructor(color: PieceColor, position?: number) {
		super(`${color}K`);
		this.setDefaultPos(color, position);
	}

	protected getAccCondition(acc: number): boolean {
		return false;
	}
}

export default King;
