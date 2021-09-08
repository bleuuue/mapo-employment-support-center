import React, { FC, useState } from 'react';
import { useInput } from '../../hooks';

const FindPassword: FC = () => {
  const [id, onChangeId] = useInput('');
  const [idError, setIdError] = useState<string>('');
  const [email, onChangeEmail] = useInput('');
  const [emailError, setEmailError] = useState<string>('');

  const onSubmitFindPassword = () => {
    if (!id || !email) checkNull();
  };

  const checkNull = () => {
    if (!id) {
      setIdError('아이디 항목은 필수 정보입니다');
    } else {
      setIdError('');
    }

    if (!email) {
      setEmailError('이메일 항목은 필수 정보입니다');
    } else {
      setEmailError('');
    }
  };

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
            value={id}
            onChange={onChangeId}
          ></input>
          {idError && <div className="text-sm red-star pl-3">{idError}</div>}
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
            value={email}
            onChange={onChangeEmail}
          ></input>
          {emailError && (
            <div className="text-sm red-star pl-3">{emailError}</div>
          )}
        </div>
        <button
          type="submit"
          className="input-btn my-4 font-bold input-size bg-primary-color text-white"
          onClick={onSubmitFindPassword}
        >
          임시 비밀번호 전송
        </button>
      </div>
    </div>
  );
};

export default FindPassword;
