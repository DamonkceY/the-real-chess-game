import Piece from "./index.ts";
import {initialPiecesPosition} from "../utils/initialPiecesPosition.ts";

class Queen extends Piece {

    protected defaultPositions = {
        B: initialPiecesPosition.B_Q,
        W: initialPiecesPosition.W_Q,
    };

    constructor(color: 'W' | 'B', position?: number) {
        super(`${color}_Q`);
        this.setDefaultPos(color, position);
    }
}

export default Queen;