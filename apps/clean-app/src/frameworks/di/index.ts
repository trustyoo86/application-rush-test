import IPresenters from './interfaces/iPresenters';
import infrastructures from './infrastructures';
import repositories from './repositories';
import presenters from './presenters';
import useCases from './useCases';

const cInfrastructure = infrastructures();
const cRepositories = repositories(cInfrastructure);
const cUseCases = useCases(cRepositories);
const cPresenters = presenters(cUseCases);

export default {
  post: cPresenters.post,
} as IPresenters;
