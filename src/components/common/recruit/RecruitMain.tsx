import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import RecruitLeftSide from './RecruitLeftSide';

const RecruitMain: FC = ({ children }) => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <RecruitLeftSide />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default RecruitMain;
