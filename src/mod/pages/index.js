import LoginPage from './user/login';
import Index from './indexpage';
import ProjectNeeds from './project/needs';
import ProjectProgress from './project/progress';
import ProjectCompleted from './project/completed';
import UsersDashboard from './users/dashboard';

const routes = [
  {path: '/project/needs',  component: ProjectNeeds},
  {path: '/project/progress',  component: ProjectProgress},
  {path: '/project/completed',  component: ProjectCompleted},
  {path: '/users/dashboard',  component: UsersDashboard},
]


export default routes;
