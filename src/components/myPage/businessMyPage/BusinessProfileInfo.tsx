import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import { EnterpriseProfile } from '../../../interfaces';
import BusinessProfile from './BusinessProfile';

const BusinessProfileInfo: FC = () => {
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

  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <MyPageLeftMenu />
        <div className="content">
          <div>
            {!enterpriseProfileData.CEO ? (
              <div className="mb-6 relative">
                <div className="text-center">
                  <div className="text-[34px] font-black">
                    프로필 등록 필요{' '}
                  </div>
                  <div className="text-sm text-[#B1B1B1] font-bold mb-6">
                    프로필 등록 후 사용해주세요
                  </div>
                  <NavLink to="/user/enterprise/upload/profile">
                    <button className="input-btn bg-primary-color">
                      <span className="mx-[85px] text-sm text-white">
                        등록하기
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
            ) : (
              <BusinessProfile enterpriseProfileData={enterpriseProfileData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileInfo;
