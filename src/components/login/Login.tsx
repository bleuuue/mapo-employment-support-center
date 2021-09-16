import { icon } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState, useRef } from 'react';
import { useInput } from '../../hooks';

const Login: FC = () => {
  const [id, onChangeId] = useInput('');
  const [idError, setIdError] = useState<string>('');
  const [password, onChangePassword] = useInput('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });

  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const onSubmitLogin = () => {
    if (!id || !password) checkNull();
  };

  const checkNull = () => {
    if (!id) {
      setIdError('아이디 항목은 필수 정보입니다');
    } else {
      setIdError('');
    }

    if (!password) {
      setPasswordError('비밀번호 항목은 필수 정보입니다');
    } else if (password.length < 8) {
      setPasswordError('비밀번호 항목의 값은 최소 8글자이어야 합니다');
    } else {
      setPasswordError('');
    }
  };

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
            value={id}
            onChange={onChangeId}
          ></input>
          {idError && <div className="text-sm red-star pl-3">{idError}</div>}
        </div>
        <div className="form-group">
          <div className="mb-1">
            비밀번호
            <span className="red-star">*</span>
          </div>
          <div className="control">
            <input
              className="input input-size"
              placeholder="비밀번호를 입력해주세요"
              type={passwordType.type}
              value={password}
              onChange={onChangePassword}
            ></input>
            <div className="bundle">
              <FontAwesomeIcon
                className="inline-block text-gray-400"
                icon={passwordType.visible ? faEyeSlash : faEye}
                onClick={handlePasswordType}
              />
            </div>
          </div>
          {passwordError && (
            <div className="text-sm red-star pl-3">{passwordError}</div>
          )}
        </div>
        <button
          type="submit"
          className="input-btn my-4 font-bold input-size bg-primary-color text-white"
          onClick={onSubmitLogin}
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
