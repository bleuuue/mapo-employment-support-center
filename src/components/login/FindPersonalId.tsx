import React, { FC, useState } from 'react';
import { useInput2 } from '../../hooks/useInput2';

const FindPersonalId: FC = () => {
  const [personalName, onChangePersonalName] = useInput2('');
  const [personalNameError, setPersonalNameError] = useState<string>('');
  const [personalEmail, onChangePersonalEmail] = useInput2('');
  const [personalEmailError, setPersonalEmailError] = useState<string>('');

  const onSubmitFindId = () => {
    if (!personalName || !personalEmail) checkNull();
  };

  const checkNull = () => {
    if (!personalName) {
      setPersonalNameError('이름은 필수 정보입니다');
    } else {
      setPersonalNameError('');
    }

    if (!personalEmail) {
      setPersonalEmailError('이메일 항목은 필수 정보입니다');
    } else {
      setPersonalEmailError('');
    }
  };

  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-bold md:text-3xl">아이디 찾기</h2>
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
            value={personalName}
            onChange={onChangePersonalName}
          ></input>
          {personalNameError && (
            <div className="text-sm red-star pl-3">{personalNameError}</div>
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
            value={personalEmail}
            onChange={onChangePersonalEmail}
          ></input>
          {personalEmailError && (
            <div className="text-sm red-star pl-3">{personalEmailError}</div>
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

export default FindPersonalId;
