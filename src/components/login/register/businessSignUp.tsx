import axios from 'axios';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useInput2 } from '../../../hooks/useInput2';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import crypto from 'crypto';

const BusinessSignUp: FC = () => {
  const [name, onChangeName] = useInput2('');
  const [email, onChangeEmail] = useInput2('');
  const [userId, onChangeUserId] = useInput2('');
  const [password, onChangePassword] = useInput2('');
  const [passwordCheck, onChangePasswordCheck] = useInput2('');
  const [hashKey, setHashKey] = useState<any>('');
  const [businessName, onChangeBusinessName] = useInput2('');
  const [businessNumber, onChangeBusinessNumber] = useInput2('');
  const [idDuplicateCheck, setIdDuplicateCheck] = useState<boolean>(true);
  const [emailDuplicateCheck, setEmailDuplicateCheck] = useState<boolean>(true);
  const [sendEmailCode, setSendEmailCode] = useState<boolean>();
  const [verifyEmailCheck, setVerifyEmailCheck] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<number>(0);
  const [userVerifyCode, onChangeUserVerifyCode] = useInput2('');
  const [businessNumberDuplicateCheck, setBusinessNumberDuplicateCheck] =
    useState<boolean>(true);
  const [isAgreeTerms, setIsAgreeTerms] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });
  const [checkList, setCheckList] = useState<any>([]);
  const [checkbox, setCheckbox] = useState<any>([]);

  const terms = [
    {
      id: 0,
      content: '서비스 이용약관',
    },
    {
      id: 1,
      content: '개인정보 이용 동의',
    },
  ];

  const duplicateId = async () => {
    try {
      if (!idDuplicateCheck) return;

      if (!userId)
        Swal.fire({
          html: '<p style={padding-top: 20px}>아이디를 입력해주세요.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });

      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/user/duplicate/id/${userId}`,
      );

      if (response.statusText === 'OK') {
        setIdDuplicateCheck(response.data.isDuplicate);
      }

      Swal.fire({
        html: response.data.isDuplicate
          ? '<p style={padding-top: 20px}>중복된 아이디입니다.</p>'
          : '<p style={margin-top: 8px}>사용할 수 있는 아이디입니다.</p>',
        focusConfirm: false,
        confirmButtonColor: '#7c9ff2',
        confirmButtonText: '확인',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const duplicateEmail = async () => {
    try {
      if (sendEmailCode) return;

      if (emailDuplicateCheck) {
        if (!email) {
          Swal.fire({
            html: '<p style={padding-top: 20px}>이메일을 입력해주세요.</p>',
            focusConfirm: false,
            confirmButtonColor: '#7c9ff2',
            confirmButtonText: '확인',
          });
          return;
        }

        const regEmail =
          /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        if (!regEmail.test(email)) {
          Swal.fire({
            html: '<p style={padding-top: 20px}>이메일 형식이 잘못되었습니다.</p>',
            focusConfirm: false,
            confirmButtonColor: '#7c9ff2',
            confirmButtonText: '확인',
          });
          return;
        }

        const response = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/user/duplicate/email/${email}`,
        );

        if (response.statusText === 'OK') {
          setEmailDuplicateCheck(response.data.isDuplicate);
        }

        Swal.fire({
          html: response.data.isDuplicate
            ? '<p style={padding-top: 20px}>중복된 이메일입니다.</p>'
            : '<p style={margin-top: 8px}>사용할 수 있는 이메일입니다.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
      } else {
        Swal.fire({
          html: '<p style={padding-top: 20px}>이메일로 인증번호를 발송하였습니다.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });

        const response = await axios.post(
          `${process.env.REACT_APP_BACK_URL}/user/auth/email/${email}`,
        );

        if (response.statusText === 'Created') {
          setVerifyCode(response.data.code);
          setSendEmailCode(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verifyEmail = async () => {
    try {
      if (verifyEmailCheck) return;

      if (!userVerifyCode) {
        Swal.fire({
          html: '<p style={padding-top: 20px}>인증번호를 입력해주세요.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
        return;
      }

      if (Number(userVerifyCode) === verifyCode) {
        setVerifyEmailCheck(true);

        Swal.fire({
          html: '<p style={padding-top: 20px}>인증이 완료되었습니다.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
      } else {
        Swal.fire({
          html: '<p style={padding-top: 20px}>인증번호가 틀렸습니다.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const duplicateBusinessNumber = async () => {
    try {
      if (!businessNumberDuplicateCheck) return;

      if (!businessNumber)
        Swal.fire({
          html: '<p style={padding-top: 20px}>사업자 등록번호를 입력해주세요.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });

      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/user/duplicate/bizrno/${businessNumber}`,
      );

      if (response.statusText === 'OK') {
        setBusinessNumberDuplicateCheck(response.data.isDuplicate);
      }

      Swal.fire({
        html: response.data.isDuplicate
          ? '<p style={padding-top: 20px}>중복된 사업자 번호입니다.</p>'
          : '<p style={margin-top: 8px}>사용할 수 있는 사업자 번호입니다.</p>',
        focusConfirm: false,
        confirmButtonColor: '#7c9ff2',
        confirmButtonText: '확인',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const onSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!name || !password || !passwordCheck || !businessName) {
        Swal.fire({
          html: '<p style={padding-top: 20px}>필수입력란을 기입해주세요.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
        return;
      }

      if (checkList.length == 2) setIsAgreeTerms(true);

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/user/enterprise/signup`,
        {
          CMPNY_NM: businessName,
          ENTRPRS_MBER_ID: userId,
          APPLCNT_EMAIL_ADRES: email,
          ENTRPRS_MBER_PASSWORD: hashKey,
          APPLCNT_NM: name,
          BIZRNO: businessNumber,
          EMAIL_VRFCT: verifyEmailCheck,
          TERMS: true,
          BIZRNOAVAILABLE: !businessNumberDuplicateCheck,
        },
      );

      if (response.data.statusCode === 201) {
        window.location.href = `${process.env.REACT_APP_BACK_URL}/user/signin`;
      } else {
        Swal.fire({
          html: `<p style={padding-top: 20px}>${response.data.message}</p>`,
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter((checkedId: number) => checkedId !== id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    setCheckList(checked ? checkbox : []);
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

  useEffect(() => {
    if (password && password.length < 8) {
      setPasswordError('비밀번호 항목의 값은 최소 8글자이어야 합니다');
    }
    if (passwordCheck) {
      if (password === passwordCheck) {
        setPasswordError('');
      } else {
        setPasswordError('패스워드가 일치하지 않습니다.');
      }
    }
  }, [password, passwordCheck]);

  useEffect(() => {
    const ids: any = [];

    terms.map((term, i) => {
      ids[i] = term.id;
    });

    setCheckbox(ids);
  }, []);

  return (
    <div className="flex">
      <div className="mx-auto">
        <div className="pt-8 pb-8">
          <h2 className="font-black text-3xl text-center">기업 회원가입</h2>
        </div>
        <form onSubmit={onSubmitSignUp}>
          <div className="form-group">
            <div className="mb-1">
              이름
              <span className="red-star">*</span>
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
              아이디
              <span className="red-star">*</span>
            </div>
            <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  className="block w-full input"
                  placeholder="아이디를 입력해주세요"
                  type="text"
                  value={userId}
                  onChange={onChangeUserId}
                ></input>
              </div>
              <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                <button
                  className={`double-check-btn text-sm font-black ${
                    idDuplicateCheck
                      ? 'border-primary-color text-primary-color'
                      : 'border-none gray-bg-color text-white cursor-default'
                  }`}
                  type="button"
                  onClick={duplicateId}
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
                  className={`double-check-btn text-sm font-black ${
                    sendEmailCode
                      ? 'border-none gray-bg-color text-white cursor-default'
                      : 'border-primary-color text-primary-color'
                  }`}
                  type="button"
                  onClick={duplicateEmail}
                >
                  <span className="text-sm text-primary-color font-black">
                    {emailDuplicateCheck ? '중복확인' : '인증요청'}
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
                  value={userVerifyCode}
                  onChange={onChangeUserVerifyCode}
                ></input>
              </div>
              <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                <button
                  className={`double-check-btn text-sm font-black ${
                    verifyEmailCheck
                      ? 'border-none gray-bg-color text-white cursor-default'
                      : 'border-primary-color text-primary-color'
                  }`}
                  type="button"
                  onClick={verifyEmail}
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
              {passwordError && (
                <div className="text-sm red-star pl-3">{passwordError}</div>
              )}
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
                type={passwordType.type}
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              ></input>
              <div className="bundle">
                <FontAwesomeIcon
                  className="inline-block text-gray-400"
                  icon={passwordType.visible ? faEyeSlash : faEye}
                  onClick={handlePasswordType}
                />
              </div>
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
                value={businessName}
                onChange={onChangeBusinessName}
              ></input>
            </div>
            <span className="ml-1 gray-text-color text-sm">
              채용 공고 및 회사 페이지에 표시될 법인명을 입력해주세요
            </span>
          </div>
          <div className="form-group">
            <div className="mb-1">
              사업자 등록번호
              <span className="red-star">*</span>
            </div>
            <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  className="block w-full input"
                  placeholder="사업자 등록번호를 입력해주세요"
                  type="text"
                  value={businessNumber}
                  onChange={onChangeBusinessNumber}
                ></input>
              </div>
              <div className="flex flex-wrap flex-row mt-2 md:mt-0">
                <button
                  className={`double-check-btn text-sm font-black ${
                    !businessNumberDuplicateCheck
                      ? 'border-none gray-bg-color text-white cursor-default'
                      : 'border-primary-color text-primary-color'
                  }`}
                  type="button"
                  onClick={duplicateBusinessNumber}
                >
                  <span className="text-sm text-primary-color font-black">
                    중복확인
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="inline-flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkList.length === checkbox.length}
              />
              <div className="ml-2">약관 전체 동의</div>
            </div>
          </div>
          <div className="border-1 border-gray-200 rounded py-2 px-2 md:px-4 mb-4 mt-2 text-sm">
            {terms.map((term, i) => {
              return (
                <div className="my-2">
                  <div className="inline-flex items-center">
                    <input
                      className="mr-2"
                      type="checkbox"
                      onChange={(e) => handleSingleCheck(e.target.checked, i)}
                      checked={checkList.includes(i)}
                    />
                    <div>{term.content}</div>
                    <div className="ml-2 cursor-pointer text-xs mt-1 text-primary-color">
                      약관 보기 &gt;{' '}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-4 lg:pt-4 pb-4 my-4 bottom-0 left-0 right-0">
            <button
              type="submit"
              className="input-btn my-3 font-black input-size bg-primary-color text-white"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessSignUp;
