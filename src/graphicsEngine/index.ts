import ChessEngine from '../chessEngine';
import { getRowColFromPos } from '../chessEngine/utils/commonFuncs.ts';
import { AssetsMapper, loadAssets } from './utils/assetsMapper.ts';

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

		loadAssets()
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

	private prepareGraphics(noListeners?: boolean): void {
		this.canvasRef.width = this.canvasRef.clientWidth * window.devicePixelRatio;
		this.canvasRef.height = this.canvasRef.clientHeight * window.devicePixelRatio;

		if (!noListeners) {
			this.setupListeners();
			this.gameLoop();
		}
	}

	private setupListeners(): void {
		window.addEventListener('resize', () => {
			const currentCanvasWidth = this.canvasRef.clientWidth * window.devicePixelRatio;
			void (this.previousWidth !== currentCanvasWidth && this.prepareGraphics(true));
			this.previousWidth = currentCanvasWidth;
		});

		this.canvasRef.addEventListener('mousedown', (event: MouseEvent) => {
			this.chessEngineInstance.receiveEvent(this.getRowColFromEvent(event));
		});
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
				if (this.chessEngineInstance.getHighlightedSquares().includes(_col.position)) {
					this.canvasCtx.beginPath();
					this.canvasCtx.fillStyle = '#38ad56';
					this.canvasCtx.arc(
						squareWidth * col + squareWidth / 2,
						squareWidth * row + squareWidth / 2,
						squareWidth / 6,
						0,
						2 * Math.PI,
					);
					this.canvasCtx.fill();
				}
			});
		});
	}

	private getRowColFromEvent(event: MouseEvent): { row: number; col: number } {
		return {
			row: Math.trunc(
				event.offsetY / ((this.canvasRef.height + 0.1) / window.devicePixelRatio / 8),
			),
			col: Math.trunc(event.offsetX / ((this.canvasRef.width + 0.1) / window.devicePixelRatio / 8)),
		};
	}
}

export default GraphicsEngine;
