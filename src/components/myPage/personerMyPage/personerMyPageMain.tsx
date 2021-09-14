import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';

const PersonerMyPageMain: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <MyPageLeftMenu />
        <div className="content">
          <div>
            <div className="mb-6 relative">
              <h5 className="-mt-3 mb-2">프로필 정보</h5>
              <ul className="list-menu">
                <li className="li-recruit inline-block py-[14px] px-4 text-center text-sm gray-bg-color border-none font-bold">
                  등록된 프로필이 없습니다.
                </li>
              </ul>
            </div>
            <div className="inset-0 flex items-center mb-8">
              <div className="w-full border-t border-[#e5e5e5]"></div>
            </div>
            <div className="mb-8 relative">
              <h5 className="-mt-3 mb-2">스크랩 리스트</h5>
              <ul className="list-menu">
                <li className="li-recruit inline-block py-[14px] px-4 text-center text-sm gray-bg-color border-none font-bold">
                  스크랩한 공고가 없습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonerMyPageMain;
