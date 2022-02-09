import { IPostDto } from '@domains/dto/PostDto';

export interface IPostRepository {
  getPosts(): Promise<Array<IPostDto>>;
  insertPost(title: string, content: string): Promise<boolean>;
}
