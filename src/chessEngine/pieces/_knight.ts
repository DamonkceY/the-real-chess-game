import Piece from './index.ts';
import { initialPiecesPosition } from '../utils/initialPiecesPosition.ts';
import {
	aboveCondition,
	areOpponents,
	belowCondition,
	getPieceInPos,
} from '../utils/commonFuncs.ts';
import { PieceColor } from '../entitites/pieces.entities.ts';
import { piecesMovementDirections } from '../utils/piecesMovementDirections.ts';

class Knight extends Piece {
	protected isRecursiveMovement = false;
	protected pieceMovementACC = piecesMovementDirections.Kn;

	protected defaultPositions = {
		B_: initialPiecesPosition.B_Kn,
		W_: initialPiecesPosition.W_Kn,
	};

	constructor(color: PieceColor, position?: number) {
		super(`${color}Kn`);
		this.setDefaultPos(color, position);
	}

	protected getAccCondition(acc: number): boolean {
		const checkPiece = (): boolean =>
			!getPieceInPos(this.position + acc) || areOpponents(this.position, this.position + acc);
		switch (acc) {
			case -17:
				return (
					aboveCondition(this.position, 'row', 1) &&
					aboveCondition(this.position, 'col', 0) &&
					checkPiece()
				);
			case -15:
				return (
					aboveCondition(this.position, 'row', 1) &&
					belowCondition(this.position, 'col', 7) &&
					checkPiece()
				);
			case -10:
				return (
					aboveCondition(this.position, 'row', 0) &&
					aboveCondition(this.position, 'col', 1) &&
					checkPiece()
				);
			case -6:
				return (
					aboveCondition(this.position, 'row', 0) &&
					belowCondition(this.position, 'col', 6) &&
					checkPiece()
				);
			case 17:
				return (
					belowCondition(this.position, 'row', 6) &&
					belowCondition(this.position, 'col', 7) &&
					checkPiece()
				);
			case 15:
				return (
					belowCondition(this.position, 'row', 6) &&
					aboveCondition(this.position, 'col', 0) &&
					checkPiece()
				);
			case 10:
				return (
					belowCondition(this.position, 'row', 7) &&
					belowCondition(this.position, 'col', 6) &&
					checkPiece()
				);
			case 6:
				return (
					belowCondition(this.position, 'row', 7) &&
					aboveCondition(this.position, 'col', 1) &&
					checkPiece()
				);
			default:
				return false;
		}
	}
}

export default Knight;
