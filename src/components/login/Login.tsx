import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useInput } from '../../hooks';
import Swal from 'sweetalert2';
import crypto from 'crypto';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  const [id, setId, onChangeId] = useInput('');
  const [idError, setIdError] = useState<string>('');
  const [password, setPassword, onChangePassword] = useInput('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });
  const [hashKey, setHashKey] = useState<any>('');

  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!id || !password) checkNull();

      console.log(hashKey);

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/user/signin`,
        {
          USER_ID: id,
          PASSWORD: hashKey,
        },
      );

      console.log(response.data.statusCode);

      if (response.data.statusCode === 201) {
        localStorage.setItem('token', response.data.accessToken);
        window.location.href = 'http://localhost:3000/';
      } else {
        Swal.fire({
          html: `<p style={padding-top: 20px}>아이디, 비밀번호를 확인해주세요</p>`,
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
      }
    } catch (error) {
      console.error(error);
    }
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

    return;
  };

  useEffect(() => {
    const salt = 'rHQOMrYQAJp8+XICMU2SP+YTC8YkRnWEj825pffj0GE';
    // const salt = crypto.randomBytes(32).toString('base64');

    crypto.pbkdf2(password, salt, 10000, 64, 'sha256', (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        setHashKey(hash.toString('base64'));
      }
    });
  }, [password]);

  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-bold md:text-3xl">로그인</h2>
        </div>
        <form onSubmit={onSubmitLogin}>
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
                <Link to="/personalId" className="whitespace-nowrap">
                  <div className="gray-text-color">개인 아이디 찾기</div>
                </Link>
                <div className="mx-2 gray-text-color"> / </div>
                <Link to="/businessId" className="whitespace-nowrap">
                  <div className="gray-text-color"> 기업 아이디 찾기</div>
                </Link>
              </div>
            </div>
            <Link to="/password" className="whitespace-nowrap">
              <div className="flex justify-end gray-text-color">
                비밀번호 찾기
              </div>
            </Link>
          </div>
          <Link to="/user/personal/signup" className="whitespace-nowrap">
            <button
              type="button"
              className="input-btn my-3 font-bold input-size bg-opacity"
            >
              이메일로 개인회원 가입하기
            </button>
          </Link>
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
          <Link to="/user/enterprise/signup" className="whitespace-nowrap">
            <button
              type="button"
              className="input-btn my-3 font-bold input-size border-1"
            >
              이메일로 기업회원 가입하기
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
