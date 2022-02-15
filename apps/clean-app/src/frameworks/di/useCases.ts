import IRepositories from './interfaces/iRepositories';
import IUseCases from './interfaces/iUseCases';
import Post from '@domains/useCases/Post';

export default (repositories: IRepositories): IUseCases => {
  return {
    post: new Post(repositories.post),
  };
};
