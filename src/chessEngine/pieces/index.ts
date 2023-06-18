import { PieceCodeName, PieceColor } from '../entitites/pieces.entities.ts';
import { getPieceInPos } from '../utils/commonFuncs.ts';

abstract class Piece {
	public static AllPieces: Array<Piece> = [];
	public codeName: PieceCodeName;
	public position: number = NaN;
	protected haveMoved: boolean = false;
	protected abstract isRecursiveMovement: boolean;
	protected abstract pieceMovementACC: Array<number>;
	protected abstract defaultPositions: {
		B_: Array<number>;
		W_: Array<number>;
	};
	protected abstract getAccCondition(acc: number): boolean;

	protected constructor(codeName: PieceCodeName) {
		this.codeName = codeName;
		Piece.AllPieces.push(this);
	}

	/* 1 => White // 0 => Black */
	public getColor(): 1 | 0 {
		return this.codeName.includes('W_') ? 1 : 0;
	}

	public getLegalMoves(): Array<number> {
		return this.pieceMovementACC.reduce((prev: Array<number>, curr: number): Array<number> => {
			if (this.isRecursiveMovement) {
				return [];
			}
			return this.getAccCondition(curr) ? [...prev, this.position + curr] : prev;
		}, []);
	}

	public moveTo(posTo: number) {
		return new Promise<boolean>((resolve) => {
			if (!!getPieceInPos(posTo)) {
				getPieceInPos(posTo)?.moveTo(-1).then();
			}
			this.position = posTo;
			this.haveMoved = true;
			resolve(true);
		});
	}

	public setDefaultPos(color: PieceColor, position?: number): void {
		if (position === undefined) {
			position = this.defaultPositions[color][0];
			this.defaultPositions[color].shift();
		}
		this.position = position;
	}
}

export default Piece;
