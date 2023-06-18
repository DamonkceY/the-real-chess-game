import { AssetsMapperType } from '../entities/assetsMapper.entities.ts';
import { PieceCodeName } from '../../chessEngine/entitites/pieces.entities.ts';

export const AssetsMapper: AssetsMapperType = {
	PiecesImages: {
		B_P: undefined,
		W_P: undefined,
		B_B: undefined,
		W_B: undefined,
		B_Kn: undefined,
		W_Kn: undefined,
		B_R: undefined,
		W_R: undefined,
		B_Q: undefined,
		W_Q: undefined,
		B_K: undefined,
		W_K: undefined,
	},
};

export const loadAssets = () => {
	return new Promise((resolve, reject) => {
		const pieces = Object.keys(AssetsMapper.PiecesImages) as Array<PieceCodeName>;
		let index: number = 0;
		const loadImage = (piece: PieceCodeName) => {
			index++;
			const img: HTMLImageElement = new Image();
			img.src = new URL(`/src/assets/pieces/${piece}.svg`, import.meta.url).href;
			img.onload = () => {
				AssetsMapper.PiecesImages[piece] = img;
				if (pieces[index]) {
					loadImage(pieces[index]);
				} else {
					resolve(true);
				}
			};
			img.onerror = () => {
				reject(false);
			};
		};
		loadImage(pieces[index]);
	});
};
