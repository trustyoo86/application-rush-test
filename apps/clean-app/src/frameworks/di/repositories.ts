import PostRepository from '@adapters/repositories/Post';
import IInfrastructures from './interfaces/iInfrastructures';
import IRepositories from './interfaces/iRepositories';

function repositories(infrastructure: IInfrastructures): IRepositories {
  return {
    post: new PostRepository(),
  };
}

export default repositories;
