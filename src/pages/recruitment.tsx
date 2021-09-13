import { FC } from 'react';
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import CreatePost from '../components/common/recruit/CreatePost';
import Recruit from '../components/common/recruit/RecruitMain';
import RecruitList from '../components/common/recruit/RecruitList';
import RecruitMain from '../components/common/recruit/RecruitMain';

const Recruitment: FC = () => {
  return (
    <Router>
      <RecruitMain>
        <Switch>
          <Route path="/recruit/create" component={CreatePost} />
          <Route path="/recruit/management" component={RecruitList} />
        </Switch>
      </RecruitMain>
    </Router>
  );
};

export default Recruitment;
