import ChessEngine from '../index.ts';
import Piece from '../pieces';

export const getArrayOf8 = () => [...Array(8).keys()];

export const getRowColFromPos = (pos: number): { row: number; col: number } => {
	return {
		row: Math.floor(pos / 8),
		col: pos % 8,
	};
};

export const getPieceInPos = (pos: number): Piece | undefined => {
	if (pos < 0 || pos > 63) return undefined;
	const { row, col } = getRowColFromPos(pos);
	const board = ChessEngine.getInstance().getBoard();
	return board[row][col].piece;
};

export const belowCondition = (pos: number, key: 'row' | 'col', num: number): boolean =>
	getRowColFromPos(pos)[key] < num;

export const aboveCondition = (pos: number, key: 'row' | 'col', num: number): boolean =>
	getRowColFromPos(pos)[key] > num;

export const areOpponents = (pos1: number, pos2: number): boolean =>
	!!getPieceInPos(pos1) &&
	!!getPieceInPos(pos2) &&
	getPieceInPos(pos1)?.getColor() !== getPieceInPos(pos2)?.getColor();
