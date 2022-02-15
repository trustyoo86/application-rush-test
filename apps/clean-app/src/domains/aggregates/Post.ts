import { IPostEntity, IPostData } from '@domains/aggregates/interfaces/iPost';

class Board implements IPostEntity {
  private readonly _id: number;
  private readonly _title: string;
  private readonly _content: string;

  constructor(params: IPostData) {
    this._id = params.id;
    this._title = params.title;
    this._content = params.content;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get content() {
    return this._content;
  }
}

export default Board;
