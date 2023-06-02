import Piece from "./index.ts";


class Pawn extends Piece {

    constructor(color: 'W' | 'B', position: number) {
        super(`${color}_P`, position);
    }
}

export default Pawn