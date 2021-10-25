import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Room from '../pages/Room';
import { PATHS } from './paths';

const Router: React.FC = () => (
  <Switch>
    <Route path={PATHS.root} exact component={Home} />
    <Route path={PATHS.rooms.new}>
      <Home isCreateRoom />
    </Route>
    <Route path={PATHS.rooms.root} component={Room} />
  </Switch>
);

export { Router };
