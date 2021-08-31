import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/main';
import Recruitment from './pages/recruitment';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/recruit" component={Recruitment} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
