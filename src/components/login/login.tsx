import React, { FC } from 'react';

const Login: FC = () => {
  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-bold md:text-3xl">로그인</h2>
        </div>
        <div className="form-group">
          <div className="mb-1">
            아이디
            <span className="red-star">*</span>
          </div>
          <input
            className="input input-size"
            placeholder="아이디를 입력해주세요"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <div className="mb-1">
            비밀번호
            <span className="red-star">*</span>
          </div>
          <input
            className="input input-size"
            placeholder="비밀번호를 입력해주세요"
            type="text"
          ></input>
        </div>
        <button
          type="submit"
          className="input-btn my-4 font-bold input-size bg-primary-color text-white"
        >
          개인 / 기업 통합 로그인
        </button>
        <div className="my-4 text-sm">
          <div className="flex justify-between">
            <div className="flex items-center">
              <input className="checkbox mr-2 text-sm" type="checkbox" />
              <div className="flex"> 자동 로그인</div>
            </div>
            <div className="flex">
              <a href="/personerId" className="whitespace-nowrap">
                <div className="gray-text-color">개인 아이디 찾기</div>
              </a>
              <div className="mx-2 gray-text-color"> / </div>
              <a href="/businessId" className="whitespace-nowrap">
                <div className="gray-text-color"> 기업 아이디 찾기</div>
              </a>
            </div>
          </div>
          <a href="/password" className="whitespace-nowrap">
            <div className="flex justify-end gray-text-color">
              비밀번호 찾기
            </div>
          </a>
        </div>
        <a href="/personalSignUp" className="whitespace-nowrap">
          <button
            type="button"
            className="input-btn my-3 font-bold input-size bg-opacity"
          >
            이메일로 개인회원 가입하기
          </button>
        </a>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm gray-text-color font-bold">
              또는
            </span>
          </div>
        </div>
        <a href="/businessSignUp" className="whitespace-nowrap">
          <button
            type="button"
            className="input-btn my-3 font-bold input-size border-1"
          >
            이메일로 기업회원 가입하기
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
