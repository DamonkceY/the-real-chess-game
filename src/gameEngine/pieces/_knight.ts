import Piece from "./index.ts";
import {initialPiecesPosition} from "../utils/initialPiecesPosition.ts";

class Knight extends Piece {

    protected defaultPositions = {
        B: initialPiecesPosition.B_Kn,
        W: initialPiecesPosition.W_Kn,
    };

    constructor(color: 'W' | 'B', position?: number) {
        super(`${color}_Kn`);
        this.setDefaultPos(color, position);
    }
}

export default Knight;