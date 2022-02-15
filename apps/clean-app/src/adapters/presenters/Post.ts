import { IPostPresenter } from './interfaces/iPost';
import { IPostUseCase } from '@domains/useCases/interfaces/iPost';
import { IPostEntity } from '@domains/aggregates/interfaces/iPost';

class PostPresenter implements IPostPresenter {
  constructor(private readonly useCases: IPostUseCase) {}

  async getPosts(): Promise<IPostEntity[]> {
    return await this.useCases.getPosts();
  }
}

export default PostPresenter;
