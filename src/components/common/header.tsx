import { FC } from 'react';

const Header: FC = () => {
  return (
    <>
      <header className="max-w-screen-xl mx-auto flex flex-row flex-wrap text-xs lg:text-sm justify-between items-center py-4 border-b-2">
        <div className="flex flex-row flex-wrap justify-between items-center space-x-12">
          <div className="text-bold text-2xl">
            <a href="/">
              <img src="image/mapojob.jpg" />
            </a>
          </div>
          <nav className="hidden lg:block space-x-8 font-bold">
            <a href="#" className="whitespace-nowrap">
              채용
            </a>
            <a href="#" className="whitespace-nowrap">
              마이페이지
            </a>
            <a href="#" className="whitespace-nowrap">
              솔루션
            </a>
            <a href="/login" className="whitespace-nowrap">
              회원가입/로그인?
            </a>
          </nav>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center space-x-3">
          settings
        </div>
      </header>
    </>
  );
};

export default Header;
