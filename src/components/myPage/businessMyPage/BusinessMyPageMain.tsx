import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';
import axios from 'axios';
import useSWR from 'swr';
import { EnterpriseProfile } from '../../../interfaces';
import BusinessProfile from './BusinessProfile';

const BusinessMyPageMain: FC = () => {
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
                <h5 className="-mt-3 mb-2">프로필 정보</h5>
                <ul className="list-menu">
                  <li className="li-recruit inline-block py-[14px] px-4 text-center text-sm gray-bg-color border-none font-bold">
                    등록된 프로필이 없습니다.
                  </li>
                </ul>
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

export default BusinessMyPageMain;
