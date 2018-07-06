import TeamContainer from './containers/TeamContainer';
import BoardContainer from './containers/BoardContainer';

const routes = [
  {
    path: '/',
    exact: true,
    component: TeamContainer
  },
  {
    path: '/:boardName',
    component: BoardContainer
  }
];

export default routes;
