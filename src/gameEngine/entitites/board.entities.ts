import Piece from "../pieces";

export type Square = {
    position: number;
    piece?: Piece;
};
export type Board = Array<Array<Square>>