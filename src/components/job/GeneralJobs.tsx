import React, { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { IJob } from '../../interfaces';
import { MutatorCallback } from 'swr/dist/types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

interface GeneralJobProps {
  job: any;
  mutate: any;
  // mutate: (
  //   // data?: IJob[][] | Promise<IJob[][]> | MutatorCallback<IJob[][]> | undefined,
  //   // shouldRevalidate?: boolean | undefined,
  //   data: any,
  // ) => Promise<IJob[][] | undefined>;
}

const GeneralJobs: FC<GeneralJobProps> = ({ job, mutate }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-2">
      <div className="rounded relative my-2 sm:my-6">
        <div className="relative">
          <Link to="/">
            <div>
              <div className="pb-[52.5%]"></div>
              <div className="rounded overflow-hidden absolute left-0 right-0 top-0 bottom-0">
                <img
                  src={job.CMPNY_IM ? job.CMPNY_IM : '../../image/no-image.png'}
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
              {job.WORK_ADDRESS}
            </span>
          </div>
          {/* <div className="rounded text-center flex items-center bg">
                  <p className="m-auto inline-block text-white font-sans font-bold tracking-wide text-lg">
                    CLOSED
                  </p>
                </div> */}
        </div>

        <div className="px-2 py-2">
          <div className="flex">
            <span className="text-sm gray-text-color mr-1">
              {job.JOB_TYPE_DESC}
            </span>
          </div>
          <div className="h4 mb-1 cursor-pointer truncate block">
            {job.TITLE}
          </div>
          {/* <link className="h4 mb-1 cursor-pointer truncate block">
                        동구밭
                      </link> */}
          <p className="mb-2 truncate-2">{job.CMPNY_NM}</p>
          <div className="my-2">
            <span className="rounded gray-bg-color uppercase px-2 lg:px-3 py-1 text-sm">
              <span className="text-primary-color">
                {dayjs(job.ENDRECEPTION).locale('ko').format('MM월 DD일')} 23시
                59분 채용 마감
              </span>
              <span className="text-primary-color ml-2 font-bold">
                D{dayjs(job.ENDRECEPTION).locale('ko').diff(dayjs(), 'day')}
              </span>
              {/* <strong className="ml-1 lg-ml-2">CLOSED</strong> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralJobs;
