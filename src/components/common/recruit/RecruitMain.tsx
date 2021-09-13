import { ChangeEvent, FC, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';

const RecruitMain: FC = ({ children }) => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <div className="sidebar">
          <div className="py-8">
            <h2 className="flex justify-between text-3xl font-bold">
              채용 관리
            </h2>
          </div>
          <div>
            <ul className="list-menu">
              <li className="li-recruit">
                <NavLink
                  to="/recruit/create"
                  className="a-li-recruit"
                  activeClassName="is-active-recruit"
                >
                  채용 공고 만들기
                </NavLink>
              </li>
              <li className="li-recruit">
                <NavLink
                  to="/recruit/management"
                  className="a-li-recruit"
                  activeClassName="is-active-recruit"
                >
                  채용 공고 리스트
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default RecruitMain;
