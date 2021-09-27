import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';

const PersonalMyPageMain: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <MyPageLeftMenu />
        <div className="content">
          <div>
            {/* 내용 없을 때 */}
            {/* <div className="mb-6 relative">
              <h5 className="-mt-3 mb-2">프로필 정보</h5>
              <ul className="list-menu">
                <li className="li-recruit inline-block py-[14px] px-4 text-center text-sm gray-bg-color border-none font-bold">
                  등록된 프로필이 없습니다.
                </li>
              </ul>
            </div>
            <div className="inset-0 flex items-center mb-8">
              <div className="w-full border-t border-[#e5e5e5]"></div>
            </div>
            <div className="mb-8 relative">
              <h5 className="-mt-3 mb-2">스크랩 리스트</h5>
              <ul className="list-menu">
                <li className="li-recruit inline-block py-[14px] px-4 text-center text-sm gray-bg-color border-none font-bold">
                  스크랩한 공고가 없습니다.
                </li>
              </ul>
            </div> */}

            {/* 내용 있을 때 */}
            <div className="mb-6 relative">
              <div className="mb-6">
                <div className="-mt-3 mb-4">
                  <div className="flex">
                    <div className="h5">홍길동님</div>
                    <div className="ml-3 text-xs">(mapo9)</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex mb-2">
                    <span className="gray-text-color font-bold">이메일</span>
                    <span className="ml-3">mapo@gmail.com</span>
                  </div>
                  <div className="flex mb-2">
                    <span className=" gray-text-color font-bold">
                      휴대폰번호
                    </span>
                    <span className="ml-3">010-1234-5678</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="gray-text-color font-bold">주소</span>
                    <span className="ml-3">
                      서울 마포구 성산로4길 53(성산동)
                    </span>
                  </div>
                </div>
              </div>
              <div className="inset-0 flex items-center mb-8">
                <div className="w-full border-t border-[#e5e5e5]"></div>
              </div>
              <div>
                <h5 className="-mt-3 mb-2">스크랩 리스트</h5>
                <div className="flex flex-wrap flex-row -mx-2">
                  <div className="w-full sm:w-1/2 px-2">
                    <div className="rounded relative my-2 sm:my-6">
                      <div className="relative">
                        <div>
                          <div>
                            <div className="rounded overflow-hidden absolute left-0 right-0 top-0 bottom-0">
                              <img
                                src="https://prod-we-attachments.s3.ap-northeast-2.amaz…12fa6a-f041-4389-baf5-c151c2193c7b-w1200-h630.jpg"
                                alt="채용 공공 기본 이미지"
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="rounded text-center flex items-center bg">
                            <p className="m-auto inline-block text-white font-sans font-bold tracking-wide text-lg">
                              CLOSED
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-2">
                        <div className="flex">
                          <span className="text-sm gray-text-color mr-1">
                            일반채용
                          </span>
                          <span className="text-sm gray-text-color mr-1">
                            정규직
                          </span>
                        </div>
                        <div className="h4 mb-1 cursor-pointer truncate block">
                          동구밭
                        </div>
                        {/* <link className="h4 mb-1 cursor-pointer truncate block">
                        동구밭
                      </link> */}
                        <p className="mb-2 truncate-2">
                          HRD 교육 영상콘텐츠 기획 제작 담당자 채용
                        </p>
                        <div className="my-2">
                          <span className="rounded gray-bg-color gray-text-color uppercase px-2 lg:px-3 py-1 text-sm">
                            <span>9월 8일 23시 59분 채용 마감</span>
                            <strong className="ml-1 lg-ml-2">CLOSED</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalMyPageMain;
