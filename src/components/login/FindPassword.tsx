import React, { FC } from 'react';

const FindPassword: FC = () => {
  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-bold md:text-3xl">비밀번호 찾기</h2>
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
            이메일
            <span className="red-star">*</span>
          </div>
          <input
            className="input input-size"
            placeholder="가입하신 이메일을 입력해주세요"
            type="text"
          ></input>
        </div>
        <button
          type="submit"
          className="input-btn my-4 font-bold input-size bg-primary-color text-white"
        >
          임시 비밀번호 전송
        </button>
      </div>
    </div>
  );
};

export default FindPassword;
