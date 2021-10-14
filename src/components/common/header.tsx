import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderList from './HeaderList';

const Header: FC = () => {
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <div className="border-b-2 border-gray-200">
      <header className="max-w-screen-xl mx-auto px-4 flex flex-row flex-wrap text-xs lg:text-sm justify-between items-center">
        <div className="flex flex-row flex-wrap justify-between items-center space-x-12">
          <div className="text-bold text-2xl">
            <a href="/">
              <img src="../../image/mapojob.jpg" />
            </a>
          </div>
          <HeaderList token={token} />
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center space-x-3">
          {token ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <NavLink to="/user/signin" className="whitespace-nowrap">
              회원가입/로그인
            </NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
