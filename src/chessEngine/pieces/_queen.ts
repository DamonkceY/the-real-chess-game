import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';
import { PieceColor } from '../entitites/pieces.entities.ts';
import { piecesMovementDirections } from '../utils/piecesMovementDirections.ts';

class Queen extends Piece {
	protected isRecursiveMovement = true;
	protected pieceMovementACC = piecesMovementDirections.Q;

	protected defaultPositions = {
		B_: initialPiecesPosition.B_Q,
		W_: initialPiecesPosition.W_Q,
	};

	constructor(color: PieceColor, position?: number) {
		super(`${color}Q`);
		this.setDefaultPos(color, position);
	}

	protected getAccCondition(acc: number): boolean {
		return false;
	}
}

export default Queen;
