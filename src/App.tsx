import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from './components/common/recruit/CreatePost';
import Wanted from './components/common/wanted/wanted';
import Layout from './components/Layout';
import Login from './components/login/Login';
import PersonalSignUp from './components/login/register/personerSignUp';
import BusinessSignUp from './components/login/register/businessSignUp';
import Main from './pages/main';
import FindPersonerId from './components/login/FindPersonerId';
import FindBusinessId from './components/login/FindBusinessId';
import FindPassword from './components/login/FindPassword';
import Recruitment from './pages/recruitment';
import PersonerProfileInfo from './components/myPage/personerMyPage/PersonerProfileInfo';
import RegisterPersonerProfile from './components/myPage/personerMyPage/RegisterPersonerProfile';
import PersonerMyPageMain from './components/myPage/personerMyPage/PersonerMyPageMain';
import ChangePersonerPassword from './components/myPage/personerMyPage/ChangePersonerPassword';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/personalSignUp" component={PersonalSignUp} />
          <Route exact path="/businessSignUp" component={BusinessSignUp} />
          <Route exact path="/personerId" component={FindPersonerId} />
          <Route exact path="/businessId" component={FindBusinessId} />
          <Route exact path="/password" component={FindPassword} />
          <Route exact path="/personer" component={PersonerMyPageMain} />
          <Route exact path="/personer/info" component={PersonerProfileInfo} />
          <Route
            exact
            path="/personer/registerProfile"
            component={RegisterPersonerProfile}
          />
          <Route path="/recruit" component={Recruitment} />
          <Route path="/wanted" component={Wanted} />
          <Route
            path="/personer/ChangePwd"
            component={ChangePersonerPassword}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
