import React, { FC } from 'react';

const FindBusinessId: FC = () => {
  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-bold md:text-3xl">기업회원 아이디 찾기</h2>
        </div>
        <div className="form-group">
          <div className="mb-1">
            사업체명
            <span className="red-star">*</span>
          </div>
          <input
            className="input input-size"
            placeholder="사업체명을 입력해주세요"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <div className="mb-1">
            사업자 등록번호
            <span className="red-star">*</span>
          </div>
          <input
            className="input input-size"
            placeholder="사업자 등록번호를 입력해주세요"
            type="text"
          ></input>
        </div>
        <button
          type="submit"
          className="input-btn my-4 font-bold input-size bg-primary-color text-white"
        >
          아이디 찾기
        </button>
      </div>
    </div>
  );
};

export default FindBusinessId;
