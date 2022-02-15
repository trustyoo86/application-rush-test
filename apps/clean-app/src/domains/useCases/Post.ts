import Post from '@domains/aggregates/Post';
import { IPostEntity } from '@domains/aggregates/interfaces/iPost';
import { IPostUseCase } from './interfaces/iPost';
import { IPostRepository } from './repositories/Post';

class PostUseCases implements IPostUseCase {
  constructor(private readonly postRepo: IPostRepository) {}

  async getPosts(): Promise<IPostEntity[]> {
    const postDtoList = await this.postRepo.getPosts();

    return postDtoList.map(post => {
      const postEntity = new Post(post);
      return postEntity;
    });
  }
}

export default PostUseCases;
