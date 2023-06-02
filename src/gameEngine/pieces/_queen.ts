import Piece from "./index.ts";

class Queen extends Piece {

    constructor(color: 'W' | 'B', position: number) {
        super(`${color}_Q`, position);
    }
}

export default Queen;