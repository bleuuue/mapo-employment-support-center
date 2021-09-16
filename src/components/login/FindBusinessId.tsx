import React, { FC, useState } from 'react';
import { useInput } from '../../hooks';

const FindBusinessId: FC = () => {
  const [businessName, onChangeBusinessName] = useInput('');
  const [businessNameError, setBusinessNameError] = useState<string>('');
  const [businessNumber, onChangeBusinessNumber] = useInput('');
  const [businessNumberError, setBusinessNumberError] = useState<string>('');

  const onSubmitFindId = () => {
    if (!businessName || !businessNumber) checkNull();
  };

  const checkNull = () => {
    if (!businessName) {
      setBusinessNameError('사업체명 항목은 필수 정보입니다');
    } else {
      setBusinessNameError('');
    }

    if (!businessNumber) {
      setBusinessNumberError('사업자 등록번호 항목은 필수 정보입니다');
    } else {
      setBusinessNumberError('');
    }
  };

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
            value={businessName}
            onChange={onChangeBusinessName}
          ></input>
          {businessNameError && (
            <div className="text-sm red-star pl-3">{businessNameError}</div>
          )}
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
            value={businessNumber}
            onChange={onChangeBusinessNumber}
          ></input>
          {businessNumberError && (
            <div className="text-sm red-star pl-3">{businessNumberError}</div>
          )}
        </div>
        <button
          type="submit"
          className="input-btn my-4 font-bold input-size bg-primary-color text-white"
          onClick={onSubmitFindId}
        >
          아이디 찾기
        </button>
      </div>
    </div>
  );
};

export default FindBusinessId;
