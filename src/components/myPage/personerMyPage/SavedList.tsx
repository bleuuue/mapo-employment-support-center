import React, { FC } from 'react';
import MyPageLeftMenu from '../MyPageLeftMenu';

const SavedList: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <MyPageLeftMenu />
        <div className="content">
          <div>
            <div className="mb-6 relative">
              <h5 className="-mt-3 mb-2">스크랩 리스트</h5>
              <div className="flex flex-wrap flex-row -mx-2">
                <div className="w-full sm:w-1/2 px-2">
                  <div className="rounded relative my-2 sm:my-6">
                    <div className="relative">
                      <div>
                        <div>
                          <div className="pb-[52.5%]"></div>
                          <div className="rounded overflow-hidden absolute left-0 right-0 top-0 bottom-0">
                            <img
                              src="../../image/dong-gu.jpg"
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
  );
};

export default SavedList;
