import { Board } from './entitites/board.entities.ts';
import { getArrayOf8 } from './utils/commonFuncs.ts';
import King from './pieces/_king.ts';
import Queen from './pieces/_queen.ts';
import Rook from './pieces/_rook.ts';
import Bishop from './pieces/_bishop.ts';
import Knight from './pieces/_knight.ts';
import Pawn from './pieces/_pawn.ts';
import Piece from './pieces';

class ChessEngine {
	private static Board: Board;
	private static Instance: ChessEngine;

	private constructor() {
		this.createAllPieces();
		this.prepareBoard();
	}

	public static getInstance(): ChessEngine {
		if (!this.Instance) {
			this.Instance = new ChessEngine();
		}

		return this.Instance;
	}

	private createAllPieces(): void {
		new King('W');
		new King('B');
		new Queen('W');
		new Queen('B');
		Array(2)
			.fill('')
			.forEach(() => {
				new Rook('W');
				new Rook('B');
				new Bishop('W');
				new Bishop('B');
				new Knight('W');
				new Knight('B');
			});
		Array(8)
			.fill('')
			.forEach(() => {
				new Pawn('W');
				new Pawn('B');
			});
	}

	private prepareBoard(): void {
		ChessEngine.Board = getArrayOf8().map((row) =>
			getArrayOf8().map((col) => ({
				position: row * 8 + col,
				piece: Piece.AllPieces.find((_: Piece) => _.position === row * 8 + col) || undefined,
			})),
		);
	}

	public getBoard(): Board {
		return ChessEngine.Board;
	}
}

export default ChessEngine;
