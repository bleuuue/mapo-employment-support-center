import { FC } from 'react';
import { Link } from 'react-router-dom';
import RecruitLeftSide from './RecruitLeftSide';
import RecruitPostCard from './RecruitPostCard';

const RecruitList: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <RecruitLeftSide />
        <div className="content">
          <Link className="btn btn-lg-five" to="/recruit/create">
            채용 공고 만들기
          </Link>
          <RecruitPostCard />
        </div>
      </div>
    </div>
  );
};

export default RecruitList;
