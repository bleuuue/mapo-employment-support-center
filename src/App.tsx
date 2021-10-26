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
import BusinessMyPageMain from './components/myPage/businessMyPage/BusinessMyPageMain';
import BusinessProfileInfo from './components/myPage/businessMyPage/BusinessProfileInfo';
import RegisterBusinessProfile from './components/myPage/businessMyPage/RegisterBusinessProfile';
import ChangeBusinessPassword from './components/myPage/businessMyPage/ChangeBusinessPassword';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/user/signin" component={Login} />
          <Route
            exact
            path="/user/personal/signup"
            component={PersonalSignUp}
          />
          <Route
            exact
            path="/user/enterprise/signup"
            component={BusinessSignUp}
          />
          <Route exact path="/personalId" component={FindPersonalId} />
          <Route exact path="/businessId" component={FindBusinessId} />
          <Route exact path="/password" component={FindPassword} />
          <Route exact path="/user/personal" component={PersonalMyPageMain} />
          <Route
            exact
            path="/user/personal/profile"
            component={PersonalProfileInfo}
          />
          <Route
            exact
            path="/user/personal/upload/profile"
            component={RegisterPersonalProfile}
          />
          <Route exact path="/recruit" component={RecruitMain} />
          <Route path="/recruit/create" component={CreatePost} />
          <Route path="/recruit/management" component={RecruitList} />
          <Route
            path="/personal/change/password"
            component={ChangePersonalPassword}
          />
          <Route path="/bookmarks" component={SavedList} />
          <Route exact path="/job/general" component={GeneralJobList} />
          <Route exact path="/job/public" component={GeneralJobList} />
          <Route path="/job/detail/:jobId" component={Wanted} />
          <Route path="/job/enterprise/edit/:jobId" component={EditPost} />
          <Route exact path="/user/enterprise" component={BusinessMyPageMain} />
          <Route
            exact
            path="/user/enterprise/profile"
            component={BusinessProfileInfo}
          />
          <Route
            exact
            path="/user/enterprise/upload/profile"
            component={RegisterBusinessProfile}
          />
          <Route
            path="/user/enterprise/change/password"
            component={ChangeBusinessPassword}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
