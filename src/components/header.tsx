import { FC } from 'react';
import { Route, Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <div className="border-b-2 border-gray-200">
      <header className="max-w-screen-xl mx-auto px-4 flex flex-row flex-wrap text-xs lg:text-sm justify-between items-center py-4">
        <div className="flex flex-row flex-wrap justify-between items-center space-x-12">
          <div className="text-bold text-2xl">
            <a href="/">
              <img src="image/mapojob.jpg" />
            </a>
          </div>
          <nav className="hidden lg:block space-x-8 font-bold">
            <a href="#" className="whitespace-nowrap">
              공공채용
            </a>
            <a href="#" className="whitespace-nowrap">
              일반채용
            </a>
            <Link to="/recruit" className="whitespace-nowrap">
              채용관리
            </Link>
            <a href="#" className="whitespace-nowrap">
              마이페이지
            </a>
          </nav>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center space-x-3">
          회원가입/로그인
        </div>
      </header>
    </div>
  );
};

export default Header;
