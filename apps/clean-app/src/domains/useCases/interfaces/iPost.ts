import { IPostEntity } from '@domains/aggregates/interfaces/iPost';

export interface IPostUseCase {
  getPosts(): Promise<Array<IPostEntity>>;
}
