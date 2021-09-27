import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wanted from './components/common/wanted/wanted';
import Layout from './components/Layout';
import Login from './components/login/Login';
import PersonalSignUp from './components/login/register/personalSignUp';
import BusinessSignUp from './components/login/register/businessSignUp';
import Main from './pages/main';
import FindBusinessId from './components/login/FindBusinessId';
import FindPassword from './components/login/FindPassword';
import Recruitment from './pages/recruitment';
import SavedList from './components/myPage/personalMyPage/SavedList';
import FindPersonalId from './components/login/FindPersonalId';
import PersonalMyPageMain from './components/myPage/personalMyPage/PersonalMyPageMain';
import PersonalProfileInfo from './components/myPage/personalMyPage/PersonalProfileInfo';
import RegisterPersonalProfile from './components/myPage/personalMyPage/RegisterPersonalProfile';
import ChangePersonalPassword from './components/myPage/personalMyPage/ChangePersonalPassword';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/personal" component={PersonalSignUp} />
          <Route exact path="/user/enterprise" component={BusinessSignUp} />
          <Route exact path="/personalId" component={FindPersonalId} />
          <Route exact path="/businessId" component={FindBusinessId} />
          <Route exact path="/password" component={FindPassword} />
          <Route exact path="/personal" component={PersonalMyPageMain} />
          <Route exact path="/personal/info" component={PersonalProfileInfo} />
          <Route
            exact
            path="/personal/registerProfile"
            component={RegisterPersonalProfile}
          />
          <Route path="/recruit" component={Recruitment} />
          <Route path="/wanted" component={Wanted} />
          <Route
            path="/personal/ChangePwd"
            component={ChangePersonalPassword}
          />
          <Route path="/savedList" component={SavedList} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
