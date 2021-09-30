import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderList from './HeaderList';

const Header: FC = () => {
  const [loginButton, setLoginButton] = useState('회원가입/로그인');

  return (
    <div className="border-b-2 border-gray-200">
      <header className="max-w-screen-xl mx-auto px-4 flex flex-row flex-wrap text-xs lg:text-sm justify-between items-center py-4">
        <div className="flex flex-row flex-wrap justify-between items-center space-x-12">
          <div className="text-bold text-2xl">
            <a href="/">
              <img src="image/mapojob.jpg" />
            </a>
          </div>
          <HeaderList />
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center space-x-3">
          <NavLink to="/login" className="whitespace-nowrap">
            회원가입/로그인
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
