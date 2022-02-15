import IUseCases from './interfaces/iUseCases';
import PostPresenter from '@adapters/presenters/Post';

export default (useCases: IUseCases) => {
  return {
    post: new PostPresenter(useCases.post),
  };
};
