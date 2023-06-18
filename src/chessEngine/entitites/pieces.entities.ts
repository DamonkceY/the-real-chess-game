/*
 * W_ => White
 * B_ => Black
 */
export type PieceColor = 'W_' | 'B_';
/*
 * P => Pawn
 * B => Bishop
 * Kn => Knight
 * R => Rook
 * Q => Queen
 * K => King
 */
export type PieceName = 'P' | 'B' | 'Kn' | 'R' | 'Q' | 'K';
export type PieceCodeName = `${PieceColor}${PieceName}`;
