export const getArrayOf8 = () => [...Array(8).keys()];

export const getRowColFromPos = (pos: number): { row: number; col: number } => {
	return {
		row: Math.floor(pos / 8),
		col: pos % 8,
	};
};
