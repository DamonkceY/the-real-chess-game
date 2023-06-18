import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';
import { PieceColor } from '../entitites/pieces.entities.ts';
import { piecesMovementDirections } from '../utils/piecesMovementDirections.ts';

class Rook extends Piece {
	protected isRecursiveMovement = true;
	protected pieceMovementACC = piecesMovementDirections.R;

	protected defaultPositions = {
		B_: initialPiecesPosition.B_R,
		W_: initialPiecesPosition.W_R,
	};

	constructor(color: PieceColor, position?: number) {
		super(`${color}R`);
		this.setDefaultPos(color, position);
	}

	protected getAccCondition(acc: number): boolean {
		return false;
	}
}

export default Rook;
