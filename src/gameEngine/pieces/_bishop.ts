import Piece from "./index.ts";

class Bishop extends Piece {

    constructor(color: 'W' | 'B', position: number) {
        super(`${color}_B`, position);
    }
}

export default Bishop;