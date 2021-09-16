import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';

const RegisterPersonerProfile: FC = () => {
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
                      프로필 등록
                    </h2>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      이름
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
                      아이디
                      <span className="red-star">*</span>
                    </div>
                    <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <input
                          className="block w-full input gray-bg-color"
                          placeholder="mapo"
                          type="text"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      이메일
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
                      <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                        <button
                          className="double-check-btn border-primary-color"
                          type="button"
                        >
                          <span className="text-sm text-primary-color font-black">
                            중복확인
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      이메일 인증
                      <span className="red-star">*</span>
                    </div>
                    <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <input
                          className="block w-full input"
                          placeholder="인증번호 6자리를 입력해주세요"
                          type="text"
                        ></input>
                      </div>
                      <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                        <button
                          className="double-check-btn border-primary-color"
                          type="button"
                        >
                          <span className="text-sm text-primary-color font-black padding-13">
                            확인
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      휴대폰번호
                      <span className="red-star">*</span>
                    </div>
                    <div className="relative">
                      <input
                        className="input input-size"
                        placeholder="010-1234-5678"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      주소
                      <span className="red-star">*</span>
                    </div>
                    <div className="relative">
                      <input
                        className="input input-size"
                        placeholder="서울 마포구 성산로4길 53"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mb-1">
                      상세 주소
                      <span className="red-star">*</span>
                    </div>
                    <div className="relative">
                      <input
                        className="input input-size"
                        placeholder="4층"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="inline-flex items-center">
                      <input className="checkbox" type="checkbox" />
                      <div className="ml-2">약관 전체 동의</div>
                    </div>
                  </div>
                  <div className="border-1 border-gray-200 rounded py-2 px-2 md:px-4 mb-4 mt-2 text-sm">
                    <div className="my-2">
                      <div className="inline-flex items-center">
                        <input className="checkbox mr-2" type="checkbox" />
                        <div>서비스 이용약관</div>
                        <div className="ml-2 cursor-pointer text-xs mt-1 text-primary-color">
                          약관 보기 &gt;{' '}
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="inline-flex items-center">
                        <input
                          className="checkbox mr-2 text-sm"
                          type="checkbox"
                        />
                        <div>개인정보 수집 및 이용</div>
                        <div>서비스 이용약관</div>
                        <div className="ml-2 cursor-pointer text-xs mt-1 text-primary-color">
                          약관 보기 &gt;{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 lg:pt-4 pb-4 my-4 bottom-0 left-0 right-0">
                    <button
                      type="submit"
                      className="input-btn my-3 font-black input-size bg-primary-color text-white"
                    >
                      저장하기
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

export default RegisterPersonerProfile;
