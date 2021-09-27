import axios from 'axios';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useInput } from '../../../hooks';

const PersonalSignUp: FC = () => {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [id, onChangeId] = useInput('');
  const [emailCheck, onChangeEmailCheck] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  const onSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!name || !email || !id || !emailCheck || !password || !passwordCheck)
        return;

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/user/personal/signup`,
        {
          MBER_NM: name,
          MBER_ID: id,
          MBER_EMAIL_ADRES: email,
          EMAIL_VRFCT: true,
          TERMS: true,
        },
      );

      if (response.statusText === 'Created') {
        localStorage.setItem('token', response.data.token);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-black text-3xl text-center">개인 회원가입</h2>
        </div>
        <form onSubmit={onSubmitSignUp}>
          <div className="form-group">
            <div className="mb-1">
              이름
              <span className="red-star">*</span>
              <span className="ml-1 gray-text-color text-sm">
                이력서에 사용될 본명을 입력해주세요
              </span>
            </div>
            <input
              className="input input-size"
              placeholder="이름을 입력해주세요"
              type="text"
              value={name}
              onChange={onChangeName}
            ></input>
          </div>
          <div className="form-group">
            <div className="mb-1">
              이메일
              <span className="red-star">*</span>
            </div>
            <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  className="block w-full input"
                  placeholder="이메일을 입력해주세요"
                  type="text"
                  value={email}
                  onChange={onChangeEmail}
                ></input>
              </div>
              <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                <button
                  className="double-check-btn border-primary-color "
                  type="button"
                >
                  <span className="text-sm text-primary-color font-black">
                    중복확인
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="mb-1">
              아이디
              <span className="red-star">*</span>
            </div>
            <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  className="block w-full input"
                  placeholder="아이디를 입력해주세요"
                  type="text"
                  value={id}
                  onChange={onChangeId}
                ></input>
              </div>
              <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                <button
                  className="double-check-btn border-primary-color"
                  type="button"
                >
                  <span className="text-sm text-primary-color font-black">
                    중복확인
                  </span>
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
                  value={emailCheck}
                  onChange={onChangeEmailCheck}
                ></input>
              </div>
              <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                <button
                  className="double-check-btn border-primary-color"
                  type="button"
                >
                  <span className="text-sm text-primary-color font-black padding-13">
                    확인
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="mb-1">
              비밀번호
              <span className="red-star">*</span>
              <span className="ml-1 gray-text-color text-sm">
                8글자 이상 입력해주세요
              </span>
            </div>
            <div className="relative">
              <input
                className="input input-size"
                placeholder="비밀번호를 입력해주세요"
                type="text"
                value={password}
                onChange={onChangePassword}
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
                value={passwordCheck}
                onChange={onChangePasswordCheck}
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
                <div className="ml-2 cursor-pointer text-xs mt-1 text-primary-color">
                  약관 보기 &gt;{' '}
                </div>
              </div>
            </div>
            <div className="my-2">
              <div className="inline-flex items-center">
                <input className="checkbox mr-2" type="checkbox" />
                <div>개인정보 수집 및 이용</div>
                <div>서비스 이용약관</div>
                <div className="ml-2 cursor-pointer text-xs mt-1 text-primary-color">
                  약관 보기 &gt;{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 lg:pt-4 pb-4 my-4 bottom-0 left-0 right-0">
            <input
              type="submit"
              className="input-btn my-3 font-black input-size bg-primary-color text-white"
              value="회원가입"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalSignUp;
