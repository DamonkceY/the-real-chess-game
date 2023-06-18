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
	protected moveInProgress: {
		from: Piece | undefined;
		to: Piece | undefined;
	} = {
		from: undefined,
		to: undefined,
	};

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
		new King('W_');
		new King('B_');
		new Queen('W_');
		new Queen('B_');
		Array(2)
			.fill('')
			.forEach(() => {
				new Rook('W_');
				new Rook('B_');
				new Bishop('W_');
				new Bishop('B_');
				new Knight('W_');
				new Knight('B_');
			});
		Array(8)
			.fill('')
			.forEach(() => {
				new Pawn('W_');
				new Pawn('B_');
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

	public getHighlightedSquares = () => {
		return this.moveInProgress.from?.getLegalMoves() || [];
	};

	public receiveEvent(data: { row: number; col: number }): void {
		if (!this.moveInProgress.from) {
			this.moveInProgress.from = this.getBoard()[data.row][data.col].piece;
		} else if (
			this.moveInProgress.from
				.getLegalMoves()
				.includes(this.getBoard()[data.row][data.col].position)
		) {
			this.moveInProgress.from.moveTo(this.getBoard()[data.row][data.col].position).then((_) => {
				this.moveInProgress.from = undefined;
				this.prepareBoard();
			});
		} else {
			this.moveInProgress.from = undefined;
		}
	}
}

export default ChessEngine;
