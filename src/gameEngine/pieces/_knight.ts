import Piece from "./index.ts";

class Knight extends Piece {

    constructor(color: 'W' | 'B', position: number) {
        super(`${color}_Kn`, position);
    }
}

export default Knight;