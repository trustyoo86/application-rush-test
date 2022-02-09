import PostRepository from '@adapters/repositories/Post';
import IRepositories from './interfaces/iRepositories';

function repositories(): IRepositories {
  return {
    post: new PostRepository(),
  };
}

export default repositories;
