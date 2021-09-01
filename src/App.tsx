import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/login/Login';
import PersonalSignUp from './components/login/register/personerSignUp';
import BusinessSignUp from './components/login/register/businessSignUp';
import Main from './pages/main';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/personalSignUp" component={PersonalSignUp} />
          <Route exact path="/businessSignUp" component={BusinessSignUp} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
