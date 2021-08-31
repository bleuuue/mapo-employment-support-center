import { FC } from 'react';
import { Route, NavLink } from 'react-router-dom';

const Recruitment: FC = () => {
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
                <a href="#" className="a-li-recruit">
                  채용 공고 리스트
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="container-recruit">
            <div className="mb-8">
              <h5 className="font-bold text-xl">접수 중인 채용 공고</h5>
              <div className="text-center rounded bg-gray-50 p-4 mt-4">
                접수 중인 채용 공고가 없습니다.
              </div>
            </div>
            <hr className="border-b-2 border-gray-100 my-4"></hr>
            <div className="my-8 relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
