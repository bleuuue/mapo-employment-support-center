import React, { FC, useState } from 'react';
import { useInput } from '../../hooks';

const FindPersonerId: FC = () => {
  const [personerName, onChangePersonerName] = useInput('');
  const [personerNameError, setPersonerNameError] = useState<string>('');
  const [personerEmail, onChangePersonerEmail] = useInput('');
  const [personerEmailError, setPersonerEmailError] = useState<string>('');

  const onSubmitFindId = () => {
    if (!personerName || !personerEmail) checkNull();
  };

  const checkNull = () => {
    if (!personerName) {
      setPersonerNameError('이름은 필수 정보입니다');
    } else {
      setPersonerNameError('');
    }

    if (!personerEmail) {
      setPersonerEmailError('이메일 항목은 필수 정보입니다');
    } else {
      setPersonerEmailError('');
    }
  };

  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-bold md:text-3xl">개인회원 아이디 찾기</h2>
        </div>
        <div className="form-group">
          <div className="mb-1">
            이름
            <span className="red-star">*</span>
          </div>
          <input
            className="input input-size"
            placeholder="이름을 입력해주세요"
            type="text"
            value={personerName}
            onChange={onChangePersonerName}
          ></input>
          {personerNameError && (
            <div className="text-sm red-star pl-3">{personerNameError}</div>
          )}
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
            value={personerEmail}
            onChange={onChangePersonerEmail}
          ></input>
          {personerEmailError && (
            <div className="text-sm red-star pl-3">{personerEmailError}</div>
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

export default FindPersonerId;
