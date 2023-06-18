import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';
import { PieceColor } from '../entitites/pieces.entities.ts';
import { piecesMovementDirections } from '../utils/piecesMovementDirections.ts';

class Bishop extends Piece {
	protected isRecursiveMovement = true;
	protected pieceMovementACC = piecesMovementDirections.B;

	protected defaultPositions = {
		B_: initialPiecesPosition.B_B,
		W_: initialPiecesPosition.W_B,
	};

	constructor(color: PieceColor, position?: number) {
		super(`${color}B`);
		this.setDefaultPos(color, position);
	}

	protected getAccCondition(acc: number): boolean {
		return false;
	}
}

export default Bishop;
