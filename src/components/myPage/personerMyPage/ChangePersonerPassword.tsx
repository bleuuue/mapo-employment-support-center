import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';

const ChangePersonerPassword: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <MyPageLeftMenu />
        <div className="content">
          <div>
            <div className="mb-6 relative">
              <div className="flex">
                <div className="-mt-3 mx-auto">
                  <div className="pb-8">
                    <h2 className="font-black text-3xl text-center">
                      비밀번호 변경
                    </h2>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      현재 비밀번호
                      <span className="red-star">*</span>
                    </div>
                    <input
                      className="input input-size"
                      placeholder="마포"
                      type="text"
                    ></input>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      새 비밀번호
                      <span className="red-star">*</span>
                      <span className="ml-1 gray-text-color text-sm">
                        8글자 이상 입력해주세요
                      </span>
                    </div>
                    <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <input
                          className="block w-full input"
                          placeholder="mapo"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      새 비밀번호 확인
                      <span className="red-star">*</span>
                    </div>
                    <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <input
                          className="block w-full input"
                          placeholder="mapo@mapo.com"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 lg:pt-4 pb-4 my-4 bottom-0 left-0 right-0">
                    <button
                      type="submit"
                      className="input-btn my-3 font-black input-size bg-primary-color text-white"
                    >
                      변경하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePersonerPassword;
