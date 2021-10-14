import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useInput2 } from '../../../hooks/useInput2';
import { EnterpriseProfile, IDivision } from '../../../interfaces';
import MyPageLeftMenu from '../MyPageLeftMenu';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import imageCompression from 'browser-image-compression';

const RegisterBusinessProfile: FC = () => {
  const [leaderName, onChangeLeaderName] = useInput2('');
  const [address, onChangeAddress] = useInput2('');
  const [detailAddress, onChangeDetailAddress] = useInput2('');
  const [businessType, onChangeBusinessType] = useInput2('');
  const [memberNum, onChangeMemberNum] = useInput2('');
  const [webAddress, onChangeWebAddress] = useInput2('');
  const [businessEmail, onChangeBusinessEmail] = useInput2('');
  const [sectorCheck, onChangeSectorCheck] = useInput2('');
  const sectorConfig = [
    {
      CODE: '10',
      CODE_NM: '개인기업',
    },
    {
      CODE: '20',
      CODE_NM: '법인기업',
    },
    {
      CODE: '30',
      CODE_NM: '공공기관',
    },
  ];
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<any>(null);

  const token = localStorage.getItem('token');

  const getEnterpriseProfile = async (url: string) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: enterpriseProfileData } = useSWR<EnterpriseProfile>(
    `${process.env.REACT_APP_BACK_URL}/user/enterprise/profile`,
    getEnterpriseProfile,
  );

  if (!enterpriseProfileData) return <div>Loading...</div>;

  // const getEnterpriseDivision = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_BACK_URL}/user/enterprise/profile`,
  //     );
  //     setSector(response.data.ENTRPRS_SE_CODE);

  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onSubmitUpload = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await axios.put(
        `${process.env.REACT_APP_BACK_URL}/user/enterprise/upload/profile`,
        {
          APPLCNT_NM: enterpriseProfileData.APPLCNT_NM,
          APPLCNT_EMAIL_ADRES: enterpriseProfileData.APPLCNT_EMAIL_ADRES,
          ENTRPRS_SE_CODE: sectorCheck,
          CMPNY_NM: enterpriseProfileData.CMPNY_NM,
          BIZRNO: enterpriseProfileData.BIZRNO,
          CEO: leaderName,
          ADRES: address,
          DETAIL_ADRES: detailAddress,
          INDUTY: businessType,
          NMBR_WRKRS: memberNum,
          WEB_ADRES: webAddress,
          CEO_EMAIL_ADRES: businessEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.statusText === 'OK') {
        window.location.href = 'http://localhost:3000/user/enterprise';
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || !e.target.files[0]) return;

      const imageFile = e.target.files[0];

      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.onload = (e) => setPreview(e.target?.result);

      const compressedImage = await imageCompression(imageFile, {
        maxSizeMB: 5,
      });
      const blobToFile = new File([compressedImage], compressedImage.name, {
        type: compressedImage.type,
      });
      const formData = new FormData();
      formData.append('file', compressedImage);

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/user/enterprise/upload/profile/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.statusText === 'Created') {
        console.log('success upload image');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getEnterpriseDivision();
  // }, []);

  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <MyPageLeftMenu />
        <div className="content">
          <div>
            <div className="mb-6 relative">
              <div className="flex">
                <div className="-mt-3 mx-auto">
                  <div className="pb-8">
                    <h2 className="font-black text-3xl text-center">
                      프로필 등록
                    </h2>
                  </div>
                  <form onSubmit={onSubmitUpload}>
                    <div className="form-group">
                      <div className="mb-1">
                        사업체명
                        <span className="red-star">*</span>
                      </div>
                      <input
                        className="block w-full input gray-bg-color"
                        placeholder="mapo"
                        type="text"
                        disabled
                      ></input>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        사업자 등록번호
                        <span className="red-star">*</span>
                      </div>
                      <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          <input
                            className="block w-full input gray-bg-color"
                            placeholder="mapo"
                            disabled
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        대표자
                        <span className="red-star">*</span>
                      </div>
                      <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          <input
                            className="block w-full input"
                            placeholder="대표자 성함을 입력해주세요"
                            type="text"
                            value={leaderName}
                            onChange={onChangeLeaderName}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        기업 구분
                        <span className="red-star">*</span>
                      </div>
                      <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          {sectorConfig.map((sector, i) => {
                            return (
                              <label
                                key={i}
                                className="inline-flex items-center label-form-radio"
                              >
                                <input
                                  type="radio"
                                  className="form-radio"
                                  value={sector.CODE}
                                  checked={sectorCheck === sector.CODE}
                                  onChange={onChangeSectorCheck}
                                />
                                <span className="mx-1 mr-8">
                                  {sector.CODE_NM}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        소재지
                        <span className="red-star">*</span>
                      </div>
                      <div className="mt-1 relative flex flex-wrap flex-col md:flex-row">
                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          <input
                            className="block w-full input"
                            placeholder="예: 서울 성동구 왕십리로 2길 20"
                            type="text"
                            value={address}
                            onChange={onChangeAddress}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        상세주소
                        <span className="red-star">*</span>
                      </div>
                      <div className="relative">
                        <input
                          className="input input-size"
                          placeholder="예: 카우앤독"
                          type="text"
                          value={detailAddress}
                          onChange={onChangeDetailAddress}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        업종 (산업분야)
                        <span className="red-star">*</span>
                      </div>
                      <div className="relative">
                        <input
                          className="input input-size"
                          placeholder="예: 서비스, 제조, 미디어, IT 등"
                          type="text"
                          value={businessType}
                          onChange={onChangeBusinessType}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        근로자 수<span className="red-star">*</span>
                      </div>
                      <div className="relative">
                        <input
                          className="input input-size"
                          placeholder="예: 0명"
                          type="text"
                          value={memberNum}
                          onChange={onChangeMemberNum}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        홈페이지 주소<span className="red-star">*</span>
                      </div>
                      <div className="relative">
                        <input
                          className="input input-size"
                          placeholder="기업 홈페이지 주소를 입력해주세요"
                          type="text"
                          value={webAddress}
                          onChange={onChangeWebAddress}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mb-1">
                        회사 대표 이메일<span className="red-star">*</span>
                      </div>
                      <div className="relative">
                        <input
                          className="input input-size"
                          placeholder="예: hello@gmail.com"
                          type="text"
                          value={businessEmail}
                          onChange={onChangeBusinessEmail}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label-recruit">타이틀 이미지</label>
                      <div className="control">
                        <div>
                          <div className="border border-gray-100 p-6 content-center text-center rounded my-2">
                            <div className="relative cursor-pointer">
                              {preview ? (
                                <img
                                  style={{ width: '30%' }}
                                  className="inline-block"
                                  src={preview}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faUpload}
                                  className="rounded inline-block cursor-pointer text-4xl"
                                />
                              )}
                              <input
                                type="file"
                                className="absolute left-0 top-0 w-full h-full opacity-0"
                                onChange={onChangeImage}
                              />
                              <p className="text-black mt-2">
                                클릭하여 파일 업로드
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 lg:pt-4 pb-4 my-4 bottom-0 left-0 right-0">
                      <button
                        type="submit"
                        className="input-btn my-3 font-black input-size bg-primary-color text-white"
                      >
                        저장하기
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusinessProfile;
