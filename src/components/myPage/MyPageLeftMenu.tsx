import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const MyPageLeftMenu: FC = () => {
  return (
    <div className="sidebar">
      <div className="pt-6 pb-4 md:py-8">
        <h2 className="flex justify-between text-3xl font-bold">마이페이지</h2>
      </div>
      {/* <div>
        <ul className="list-menu">
          <li className="li-recruit">
            <NavLink
              to="/user/personal/profile"
              className="a-li-recruit"
              activeClassName="is-active-recruit"
            >
              프로필 정보
            </NavLink>
          </li>
          <li className="li-recruit">
            <NavLink
              to="/user/personal/change/password"
              className="a-li-recruit"
              activeClassName="is-active-recruit"
            >
              비밀번호 변경
            </NavLink>
          </li>
          <li className="li-recruit">
            <NavLink
              to="/bookmarks"
              className="a-li-recruit"
              activeClassName="is-active-recruit"
            >
              스크랩 리스트
            </NavLink>
          </li>
        </ul>
      </div> */}
      <div>
        <ul className="list-menu">
          <li className="li-recruit">
            <NavLink
              to="/user/enterprise/profile"
              className="a-li-recruit"
              activeClassName="is-active-recruit"
            >
              프로필 정보
            </NavLink>
          </li>
          <li className="li-recruit">
            <NavLink
              to="/user/enterprise/change/password"
              className="a-li-recruit"
              activeClassName="is-active-recruit"
            >
              비밀번호 변경
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPageLeftMenu;
