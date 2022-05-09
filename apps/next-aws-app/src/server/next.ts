import next from 'next';
import routes from '../routes';
import app from '../app';

const PORT = process.env.PORT || 8080;
const STAGE = process.env.STAGE || 'local';

const nextApp = next({
  dev: STAGE === 'local',
});

const requestHandler = nextApp.getRequestHandler();

routes.forEach(route => {
  app.get(route.path, (req, res) => {
    nextApp.render(req, res, route.page, { title: req.params.id });
  });
});

app.get('*', (req, res) => requestHandler(req, res));

nextApp.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`Project is running on port ${PORT}`);
  });
});
