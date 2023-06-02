import Piece from "./index.ts";

class Rook extends Piece {

    constructor(color: 'W' | 'B', position: number) {
        super(`${color}_R`, position);
    }
}

export default Rook;