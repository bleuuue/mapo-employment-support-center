import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';
import { NavLink } from 'react-router-dom';

const PersonalProfileInfo: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <MyPageLeftMenu />
        <div className="content">
          <div>
            <div className="mb-6 relative">
              <div className="text-center">
                <div className="text-[34px] font-black">프로필 등록 필요 </div>
                <div className="text-sm text-[#B1B1B1] font-bold mb-6">
                  프로필 등록 후 사용해주세요
                </div>
                <NavLink to="/personal/registerProfile">
                  <button className="input-btn bg-primary-color">
                    <span className="mx-[85px] text-sm text-white">
                      등록하기
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfileInfo;
