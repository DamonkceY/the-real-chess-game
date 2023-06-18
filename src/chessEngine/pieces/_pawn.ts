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

/*
 * Pawn piece movement acc:
 * 8, -8 => single square up/down
 * 16, -16 => two squares first move up/down
 * 7, -7, 9, -9 => taking another piece diagonally
 * */

class Pawn extends Piece {
	protected isRecursiveMovement = false;
	protected pieceMovementACC: Array<number>;

	protected defaultPositions = {
		B_: initialPiecesPosition.B_P,
		W_: initialPiecesPosition.W_P,
	};

	constructor(color: PieceColor, position?: number) {
		super(`${color}P`);
		this.pieceMovementACC = piecesMovementDirections.P.map((_) => (color === 'W_' ? _ * -1 : _));
		this.setDefaultPos(color, position);
	}

	protected getAccCondition(acc: number): boolean {
		const canTake = (pos: number) => areOpponents(pos, pos + acc);

		switch (acc) {
			case 8:
				return belowCondition(this.position, 'row', 7) && !getPieceInPos(this.position + acc);
			case -8:
				return aboveCondition(this.position, 'row', 0) && !getPieceInPos(this.position + acc);
			case 7:
				return (
					belowCondition(this.position, 'row', 7) &&
					aboveCondition(this.position, 'col', 0) &&
					canTake(this.position)
				);
			case -7:
				return (
					aboveCondition(this.position, 'row', 0) &&
					belowCondition(this.position, 'col', 7) &&
					canTake(this.position)
				);
			case 9:
				return (
					belowCondition(this.position, 'row', 7) &&
					belowCondition(this.position, 'col', 7) &&
					canTake(this.position)
				);
			case -9:
				return (
					aboveCondition(this.position, 'row', 0) &&
					aboveCondition(this.position, 'col', 0) &&
					canTake(this.position)
				);
			case 16:
			case -16:
				return (
					!this.haveMoved &&
					!getPieceInPos(this.position + acc) &&
					!getPieceInPos(this.position + acc / 2)
				);
			default:
				return false;
		}
	}
}

export default Pawn;
