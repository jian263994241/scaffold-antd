import LoginPage from './user/login';
import Index from './indexpage';
import Needs from './project/needs';
import Progress from './project/progress';
import Completed from './project/completed';

const routes = [
  {path: '/project/needs',  component: Needs},
  {path: '/project/progress',  component: Progress},
  {path: '/project/completed',  component: Completed},
]


export default routes;
