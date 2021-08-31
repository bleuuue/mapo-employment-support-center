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
            className="input"
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
            className="input"
            placeholder="비밀번호를 입력해주세요"
            type="text"
          ></input>
        </div>
        <button type="submit" className="input-btn sticky my-4 font-bold">
          로그인
        </button>
        <div className="my-4 text-sm">
          <div className="flex justify-between">
            <div className="flex"> 자동 로그인</div>
            <div className="flex text-gray-400">
              <div>개인 아이디 찾기</div>
              <div className="mx-2"> / </div>
              <div> 기업 아이디 찾기</div>
            </div>
          </div>
          <div className="flex justify-end text-gray-400">비밀번호 찾기</div>
        </div>
        <button type="button" className="input-btn my-3 font-bold">
          이메일로 개인회원 가입하기
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-300"> 또는 </span>
          </div>
        </div>
        <button type="button" className="input-btn my-3 font-bold">
          이메일로 기업회원 가입하기
        </button>
      </div>
    </div>
  );
};

export default Login;
