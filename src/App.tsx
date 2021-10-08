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
import SavedList from './components/myPage/personalMyPage/SavedList';
import FindPersonalId from './components/login/FindPersonalId';
import PersonalMyPageMain from './components/myPage/personalMyPage/PersonalMyPageMain';
import PersonalProfileInfo from './components/myPage/personalMyPage/PersonalProfileInfo';
import RegisterPersonalProfile from './components/myPage/personalMyPage/RegisterPersonalProfile';
import ChangePersonalPassword from './components/myPage/personalMyPage/ChangePersonalPassword';
import RecruitList from './components/common/recruit/RecruitList';
import RecruitMain from './components/common/recruit/RecruitMain';
import GeneralJobList from './components/job/GeneralJobList';
import EditPost from './components/common/recruit/EditPost';
import CreatePost from './components/common/recruit/CreatePost';

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
          <Route exact path="/recruit" component={RecruitMain} />
          <Route path="/recruit/create" component={CreatePost} />
          <Route path="/recruit/management" component={RecruitList} />
          <Route
            path="/personal/ChangePwd"
            component={ChangePersonalPassword}
          />
          <Route path="/savedList" component={SavedList} />
          <Route exact path="/job/general" component={GeneralJobList} />
          <Route path="/job/detail/:jobId" component={Wanted} />
          <Route path="/job/enterprise/edit/:jobId" component={EditPost} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
