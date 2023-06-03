import { PieceCodeName } from '../entitites/pieces.entities.ts';

abstract class Piece {
	protected abstract defaultPositions: {
		B: Array<number>;
		W: Array<number>;
	};
	public codeName: PieceCodeName;
	public position: number = NaN;
	public static AllPieces: Array<Piece> = [];

	protected constructor(codeName: PieceCodeName) {
		this.codeName = codeName;
		Piece.AllPieces.push(this);
	}

	/* 1 => White // 0 => Black */
	public getColor(): 1 | 0 {
		return this.codeName.includes('W_') ? 1 : 0;
	}

	public setDefaultPos(color: 'B' | 'W', position?: number): void {
		if (position === undefined) {
			position = this.defaultPositions[color][0];
			this.defaultPositions[color].shift();
		}
		this.position = position;
	}
}

export default Piece;
