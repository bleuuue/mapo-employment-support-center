import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import {
  faChevronUp,
  faSearch,
  faStar,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NormalJob: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="content-header">
        <h2 className="flex justify-between text-3xl font-bold">채용</h2>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2 py-2 md:w-2/3">
          <div className="relative mb-0">
            <div className="relative min-h-[auto]">
              <input
                type="text"
                placeholder="회사, 직무, 지역으로 검색해보세요"
                className="w-full rounded border-1 py-2 px-4"
              />
              <div className="bundle ml-2 mt-2">
                <button type="button" tabIndex={-1}>
                  <FontAwesomeIcon
                    className=" mb-[0.10rem] gray-text-color"
                    icon={faSearch}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-2 py-2 md:w-1/3">
          <div className="flex-wrap flex -mx-2 relative">
            <div className="w-1/2 px-2 my-1 sm:my-0">
              <div>
                <a className="block p-2 rounded flex content-center justify-between cursor-pointer border-1 gray-text-color">
                  <span>지역</span>
                  <FontAwesomeIcon
                    className="mt-1 gray-text-color"
                    icon={faChevronUp}
                  />
                </a>
              </div>
            </div>
            <div className="w-1/2 px-2 my-1 sm:my-0">
              <div>
                <a className="block p-2 rounded flex content-center justify-between cursor-pointer border-1 gray-text-color">
                  <span>직무</span>
                  <FontAwesomeIcon
                    className="mt-1 gray-text-color"
                    icon={faChevronUp}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-gray-200" />
      <div className="my-4 -mx-2 flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 px-2">
          <div className="rounded relative my-2 sm:my-6">
            <div className="relative">
              <Link to="/">
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
              </Link>
              <div className="absolute top-0 left-0 right-0 px-2 py-2">
                <span className="inline-block"></span>
                <span className="inline-block float-right">
                  <a className="cursor-pointer">
                    <FontAwesomeIcon
                      className="w-6 gray-text-color"
                      icon={faStar}
                    />
                  </a>
                </span>
              </div>
              <div className="absolute bottom-0 left-0 px-2 py-3">
                <span className="rounded bg-gray-50 text-primary-color uppercase lg:px-3 py-1 text-sm">
                  <FontAwesomeIcon
                    className="text-primary-color mr-2"
                    icon={faMapMarker}
                  />
                  서울 강남구
                </span>
              </div>
              {/* <div className="rounded text-center flex items-center bg">
                  <p className="m-auto inline-block text-white font-sans font-bold tracking-wide text-lg">
                    CLOSED
                  </p>
                </div> */}
            </div>
          </div>
          <div className="px-2 py-2">
            <div className="flex">
              <span className="text-sm gray-text-color mr-1">일반채용</span>
              <span className="text-sm gray-text-color mr-1">정규직</span>
            </div>
            <div className="h4 mb-1 cursor-pointer truncate block">동구밭</div>
            {/* <link className="h4 mb-1 cursor-pointer truncate block">
                        동구밭
                      </link> */}
            <p className="mb-2 truncate-2">
              HRD 교육 영상콘텐츠 기획 제작 담당자 채용
            </p>
            <div className="my-2">
              <span className="rounded gray-bg-color gray-text-color uppercase px-2 lg:px-3 py-1 text-sm">
                <span>9월 8일 23시 59분 채용 마감</span>
                {/* <strong className="ml-1 lg-ml-2">CLOSED</strong> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalJob;
