import { IPostRepository } from '@domains/useCases/repositories/Post';

interface IRepositories {
  post: IPostRepository;
}

export default IRepositories;
