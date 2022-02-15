import { IPostEntity } from '@domains/aggregates/interfaces/iPost';

export interface IPostPresenter {
  getPosts(): Promise<Array<IPostEntity>>;
}
