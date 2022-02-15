import { IPostEntity } from '@domains/aggregates/interfaces/iPost';

export interface IPostVM {
  id: number;
  title: string;
  content: string;
}

class PostVM implements IPostVM {
  private readonly _id: number;
  private readonly _title: string;
  private readonly _content: string;

  constructor(params: IPostEntity) {
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

export default PostVM;
