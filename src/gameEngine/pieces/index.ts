import {PieceCodeName} from "../entitites/pieces.entities.ts";

abstract class Piece {
    public codeName: PieceCodeName;
    public position: number;
    public static AllPieces: Array<Piece> = [];

    protected constructor(codeName: PieceCodeName, position: number) {
        this.codeName = codeName;
        this.position = position;

        Piece.AllPieces.push(this);
    }

    /* 1 => White // 0 => Black */
    public getColor(): 1 | 0 {
        return this.codeName.includes('W_') ? 1 : 0;
    }
}

export default Piece;
