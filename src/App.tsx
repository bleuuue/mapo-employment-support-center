import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from './components/common/recruit/CreatePost';
import Layout from './components/Layout';
import Main from './pages/main';
import Recruitment from './pages/recruitment';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recruit" component={Recruitment} />
          <Route path="/recruit/create" component={CreatePost} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
