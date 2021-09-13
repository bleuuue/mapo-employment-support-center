import React, { FC } from 'react';

const PersonerMyPageMain: FC = () => {
  return (
    <div className="container pb-12 px-44">
      <div className="layout-side">
        <div className="sidebar">
          <div className="hidden sm:block">
            <div className="pt-6 pb-4 md:py-8">
              <h2 className="text-3xl font-black">마이페이지</h2>
            </div>
            <ul className="list-menu">
              <li>
                <a className="inline-block w-full h-full py-3 px-4 md:px-4">
                  프로필 정보
                </a>
              </li>
              <li>
                <a className="inline-block w-full h-full py-3 px-4 md:px-4">
                  비밀번호 변경
                </a>
              </li>
              <li>
                <a className="inline-block w-full h-full py-3 px-4 md:px-4">
                  스크랩 리스트
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default PersonerMyPageMain;
