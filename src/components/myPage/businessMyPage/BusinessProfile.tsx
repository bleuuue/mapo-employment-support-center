import axios from 'axios';
import React, { FC } from 'react';
import { EnterpriseProfile } from '../../../interfaces';
import Swal from 'sweetalert2';

interface profileProps {
  enterpriseProfileData: EnterpriseProfile;
}

const BusinessProfile: FC<profileProps> = ({ enterpriseProfileData }) => {
  const token = localStorage.getItem('token');

  const requestApprove = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACK_URL}/user/enterprise/approval`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.statusText === 'OK') {
        Swal.fire({
          html: '<p style={padding-top: 20px}>승인 요청되었습니다.</p>',
          focusConfirm: false,
          confirmButtonColor: '#7c9ff2',
          confirmButtonText: '확인',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-6 relative">
      <div className="mb-6">
        <div className="-mt-3 mb-4">
          <div className="flex">
            <div className="h5">{enterpriseProfileData.APPLCNT_NM}님</div>
            <div className="ml-3 text-xs text-blue-400 font-semibold mt-2">
              ({enterpriseProfileData.BSNNM_APRVL_NAME})
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">아이디</span>
            <span className="ml-3">
              {enterpriseProfileData.ENTRPRS_MBER_ID}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">이메일</span>
            <span className="ml-3">
              {enterpriseProfileData.APPLCNT_EMAIL_ADRES}
            </span>
          </div>
          <div className="flex mb-2">
            <span className=" gray-text-color font-bold">사업체명</span>
            <span className="ml-3">{enterpriseProfileData.CMPNY_NM}</span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">사업자 등록번호</span>
            <span className="ml-3">{enterpriseProfileData.BIZRNO}</span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">대표자</span>
            <span className="ml-3">{enterpriseProfileData.CEO}</span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">소재지</span>
            <span className="ml-3">{enterpriseProfileData.ADRES}</span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">업종</span>
            <span className="ml-3">{enterpriseProfileData.INDUTY}</span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">근로자 수</span>
            <span className="ml-3">{enterpriseProfileData.NMBR_WRKRS}</span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">홈페이지 주소</span>
            <a className="ml-3" href={enterpriseProfileData.WEB_ADRES}>
              <span>{enterpriseProfileData.WEB_ADRES}</span>
            </a>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">회사 대표 메일</span>
            <span className="ml-3">
              {enterpriseProfileData.CEO_EMAIL_ADRES}
            </span>
          </div>
          <div className="flex mb-2">
            <span className="gray-text-color font-bold">회사 대표 이미지</span>
          </div>
          <div className="mb-2">
            <img src={enterpriseProfileData.CMPNY_IM} />
          </div>
        </div>
      </div>
      <div>
        <button className="border-1 rounded px-10 py-2 text-sm gray-text-color mr-3 hover:bg-gray-200">
          프로필 수정
        </button>
        <button
          className=" bg-[#7c9ff2] rounded px-10 py-2 text-sm text-white hover:filter hover:brightness-90"
          onClick={requestApprove}
        >
          승인 요청하기
        </button>
      </div>
    </div>
  );
};

export default BusinessProfile;
