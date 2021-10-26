import React, { FC, useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import GeneralJobs from './GeneralJobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { IJob } from '../../interfaces';
import { useInput2 } from '../../hooks/useInput2';

const mapoguConfig = [
  { id: 1, title: '공덕동' },
  { id: 2, title: '대흥동' },
  { id: 3, title: '도화동' },
  { id: 4, title: '망원1동' },
  { id: 5, title: '망원2동' },
  { id: 6, title: '상암동' },
  { id: 7, title: '서강동' },
  { id: 8, title: '서교동' },
  { id: 9, title: '성산1동' },
  { id: 10, title: '성산2동' },
  { id: 11, title: '신수동' },
  { id: 12, title: '아현동' },
  { id: 13, title: '연남동' },
  { id: 14, title: '염리동' },
  { id: 15, title: '용강동' },
  { id: 16, title: '합정동' },
];

const jobConfig = [
  { id: 1, title: '경영지원' },
  { id: 2, title: '마케팅' },
  { id: 3, title: '기획' },
  { id: 4, title: '인사, 교육' },
  { id: 5, title: '디자인' },
  { id: 6, title: '공간운영' },
  { id: 7, title: '컨텐츠' },
  { id: 8, title: '고객서비스' },
  { id: 9, title: '영업' },
  { id: 10, title: '개발' },
  { id: 11, title: '투자, 금융' },
  { id: 12, title: '컨설팅' },
  { id: 13, title: '물류, 무역' },
  { id: 14, title: '의료' },
  { id: 15, title: '공공, 특수' },
  { id: 16, title: '기타' },
];

const GeneralJobList: FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [searchKeyword, onChangeSearchKeyword] = useInput2('');
  const [activePage, setActivePage] = useState<number>(1);

  const jobPath = window.location.pathname.split('/');

  const fetcher = async (url: string) => {
    try {
      const response = await axios.post(url, {
        SEARCH_NAME: searchKeyword,
      });

      if (response.statusText === 'Created') {
        setPageCount(Number(response.data.count) / 12);
        return response.data.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { data, error, mutate } = useSWR<IJob[]>(
    `${process.env.REACT_APP_BACK_URL}/job/${jobPath[2]}?page=${pageIndex}`,
    fetcher,
  );

  // const getJobList = async () => {
  //   try {
  //     const response = await axios.post(
  //       '${process.env.REACT_APP_BACK_URL}/job/general?page=${pageIndex}',
  //       {
  //         SEARCH_NAME: searchKeyword,
  //       },
  //     );

  //     if (response.statusText === 'Created') {
  //       setPageCount(Number(response.data.count) / 12);
  //       return response.data.data;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  if (!data) return <div>loading...</div>;
  if (error) return <div>error</div>;

  // useEffect(() => {
  //   getJobList();
  // }, []);

  const paging = () => {
    const pageArray = [];

    for (let i = 1; i <= Math.ceil(pageCount); i++) {
      pageArray.push(
        <button
          className={`page ${activePage === i ? 'is-active' : ''}`}
          onClick={() => {
            setPageIndex(i);
            setActivePage(i);
          }}
        >
          {i}
        </button>,
      );
    }
    return pageArray;
  };

  const search = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-recruit px-4 pb-12">
        <div className="content-header">
          <h2 className="flex justify-between text-3xl font-bold">
            {jobPath[2] === 'general' ? '일반 채용' : '공공 채용'}
          </h2>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 py-2 md:w-2/3">
            <div className="relative mb-0">
              <div className="relative min-h-[auto]">
                <input
                  type="text"
                  placeholder="회사, 직무, 지역으로 검색해보세요"
                  className="w-full rounded border-1 py-2 px-4"
                  value={searchKeyword}
                  onChange={onChangeSearchKeyword}
                />
                <div className="bundle ml-2 mt-2">
                  <button type="button" tabIndex={-1} onClick={search}>
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
                {/* <div className="absolute left-0 z-1 w-full">
                  <div className="p-4 my-2 bg-white border-1 rounded">
                    <div className="flex flex-wrap flex-row">
                      <div className="flex-1">
                        <div className=" overflow-y-scroll max-h-60">
                          {mapoguConfig.map((jobConfig) => {
                            <div className="my-2 text-sm">
                              <a className="py-1 px-2 cursor-pointer">
                                dong.title
                              </a>
                            </div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-right">
                      <div className="gray-bg-color font-bold text-gray-300 py-1 px-4 rounded">
                        선택해제
                      </div>
                      <div className="bg-primary-color font-bold text-white py-1 px-4 rounded">
                        적용하기
                      </div>
                    </div>
                  </div>
                </div> */}
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
                {/* <div className="absolute left-0 z-1 w-full">
                  <div className="p-4 my-2 bg-white border-1 rounded">
                    <div className="flex flex-wrap flex-row">
                      <div className="flex-1">
                        <div className=" overflow-y-scroll max-h-60">
                          {jobConfig.map((job) => {
                            <div className="my-2 text-sm">
                              <a className="py-1 px-2 cursor-pointer">
                                job.title
                              </a>
                            </div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-right">
                      <div className="gray-bg-color font-bold text-gray-300 py-1 px-4 rounded">
                        선택해제
                      </div>
                      <div className="bg-primary-color font-bold text-white py-1 px-4 rounded">
                        적용하기
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-gray-200" />
        <div className="my-4 -mx-2 flex flex-wrap">
          {data.map((jobs, i) => {
            return <GeneralJobs key={i} job={jobs} mutate={mutate} />;
          })}
        </div>
        <div className="paginations">
          <div>{paging()}</div>
        </div>
      </div>
    </>
  );
};

export default GeneralJobList;
