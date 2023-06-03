import ChessEngine from '../chessEngine';
import { getRowColFromPos } from '../chessEngine/utils/commonFuncs.ts';
import { AssetsMapper } from './utils/assetsMapper.ts';
import { PieceCodeName } from '../chessEngine/entitites/pieces.entities.ts';

class GraphicsEngine {
	private static Instance: GraphicsEngine;
	private chessEngineInstance: ChessEngine;
	private canvasRef: HTMLCanvasElement;
	private canvasCtx: CanvasRenderingContext2D;
	private previousWidth: number = NaN;

	private constructor() {
		this.chessEngineInstance = ChessEngine.getInstance();
		this.canvasRef = document.querySelector('#GAME_CANVAS') as HTMLCanvasElement;
		this.canvasCtx = this.canvasRef.getContext('2d') as CanvasRenderingContext2D;

		window.addEventListener('resize', () => {
			const currentCanvasWidth = this.canvasRef.clientWidth * window.devicePixelRatio
			
			void(this.previousWidth !== currentCanvasWidth && this.prepareGraphics());

			this.previousWidth = currentCanvasWidth;
		});

		this.loadAssets()
			.then(() => {
				this.prepareGraphics();
			})
			.catch(() => {
				debugger;
			});
	}

	public static getInstance(): GraphicsEngine {
		if (!this.Instance) {
			this.Instance = new GraphicsEngine();
		}
		return this.Instance;
	}

	private loadAssets() {
		return new Promise((resolve, reject) => {
			const pieces = Object.keys(AssetsMapper.PiecesImages) as Array<PieceCodeName>;
			let index: number = 0;
			const loadImage = (piece: PieceCodeName) => {
				index++;
				const img = new Image();
				img.src = `src/assets/pieces/${piece}.svg`;
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
	}

	public prepareGraphics(): void {
		this.canvasRef.width = this.canvasRef.clientWidth * window.devicePixelRatio;
		this.canvasRef.height = this.canvasRef.clientHeight * window.devicePixelRatio;

		this.gameLoop();
	}

	private gameLoop(): void {
		window.requestAnimationFrame(() => this.gameLoop());

		this.canvasCtx.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height);

		this.chessEngineInstance.getBoard().forEach((_row) => {
			_row.forEach((_col) => {
				const { row, col } = getRowColFromPos(_col.position);
				const squareWidth = this.canvasRef.width / 8;
				this.canvasCtx.fillStyle = (row + col) % 2 === 0 ? '#fff' : '#e3bda2';
				this.canvasCtx.fillRect(squareWidth * col, squareWidth * row, squareWidth, squareWidth);
				if (_col.piece) {
					this.canvasCtx.drawImage(
						AssetsMapper.PiecesImages[_col.piece.codeName] as HTMLImageElement,
						squareWidth * col,
						squareWidth * row,
						squareWidth,
						squareWidth,
					);
				}
			});
		});
	}
}

export default GraphicsEngine;
