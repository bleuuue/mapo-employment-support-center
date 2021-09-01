import React, { FC } from 'react';

const BusinessSignUp: FC = () => {
  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-bold md:text-3xl text-center">기업 회원가입</h2>
        </div>
        <div className="form-group">
          <div className="mb-1">
            채용 담당자 이름
            <span className="red-star">*</span>
          </div>
          <input
            className="input input-size"
            placeholder="이름을 입력해주세요"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <div className="mb-1">
            채용 담당자 아이디
            <span className="red-star">*</span>
          </div>
          <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <input
                className="block w-full input"
                placeholder="아이디를 입력해주세요"
                type="text"
              ></input>
            </div>
            <div className="flex flex-wrap flex-row mt-2 md:mt-0">
              <button className="double-check-btn" type="button">
                <span className="text-sm">중복확인</span>
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="mb-1">
            채용 담당자 이메일
            <span className="red-star">*</span>
          </div>
          <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <input
                className="block w-full input"
                placeholder="이메일을 입력해주세요"
                type="text"
              ></input>
            </div>
            <div className="flex flex-wrap flex-row mt-2 md:mt-0">
              <button className="double-check-btn" type="button">
                <span className="text-sm">중복확인</span>
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
              <button className="double-check-btn" type="button">
                <span className="text-sm">확인</span>
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="mb-1">
            비밀번호
            <span className="red-star">*</span>
            <span className="ml-1 text-gray-400 text-sm">
              8글자 이상 입력해주세요
            </span>
          </div>
          <div className="relative">
            <input
              className="input input-size"
              placeholder="비밀번호를 입력해주세요"
              type="text"
            ></input>
          </div>
        </div>
        <div className="form-group">
          <div className="mb-1">
            비밀번호 확인
            <span className="red-star">*</span>
          </div>
          <div className="relative">
            <input
              className="input input-size"
              placeholder="비밀번호를 입력해주세요"
              type="text"
            ></input>
          </div>
        </div>
        <div className="form-group">
          <div className="mb-1">
            사업체명
            <span className="red-star">*</span>
          </div>
          <div className="relative">
            <input
              className="input input-size"
              placeholder="사업체 이름을 입력해주세요"
              type="text"
            ></input>
          </div>
        </div>
        <div className="form-group">
          <div className="mb-1">
            사업자 등록번호
            <span className="red-star">*</span>
          </div>
          <div className="relative">
            <input
              className="input input-size"
              placeholder="사업자 등록번호를 입력해주세요"
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
              <div className="ml-2 cursor-pointer text-xs mt-1">
                약관 보기 &gt;{' '}
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="inline-flex items-center">
              <input className="checkbox mr-2" type="checkbox" />
              <div>개인정보 수집 및 이용</div>
              <div>서비스 이용약관</div>
              <div className="ml-2 cursor-pointer text-xs mt-1">
                약관 보기 &gt;{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignUp;
