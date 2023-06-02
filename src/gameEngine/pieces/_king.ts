import Piece from "./index.ts";


class King extends Piece {

    constructor(color: 'W' | 'B', position: number) {
        super(`${color}_K`, position);
    }
}

export default King;