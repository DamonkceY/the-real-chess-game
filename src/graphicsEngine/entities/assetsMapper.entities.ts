import { PieceCodeName } from '../../chessEngine/entitites/pieces.entities.ts';

export type AssetsMapperType = {
	PiecesImages: Record<PieceCodeName, HTMLImageElement | undefined>;
};
