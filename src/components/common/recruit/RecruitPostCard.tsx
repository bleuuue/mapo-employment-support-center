import { FC } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { RecruitPost } from '../../../interfaces';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface RecruitPostCardProps {
  post: RecruitPost;
  mutate: any;
}

const RecruitPostCard: FC<RecruitPostCardProps> = ({ post, mutate }) => {
  dayjs.extend(relativeTime);

  const onClickDeleteRecruitPost = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.delete(
        `${process.env.REACT_APP_BACK_URL}/job/enterprise/delete/${post.JOBID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.statusText === 'OK') {
        mutate();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-auto sm:flex-none sm:w-1/2 p-2">
      <div className="border border-gray-100 rounded my-4 p-4 h-full">
        <div>
          {post.JOB_STAT === '등록' ? (
            <span className="font-bold text-purple-400 mr-3">작성중</span>
          ) : (
            <span className="font-bold text-primary-color mr-3">승인 완료</span>
          )}
        </div>
        <div className="tag-list">
          <span className="text-sm text-gray-300 mr-1">일반채용</span>
          <span className="text-sm text-gray-300 mr-1">정규직</span>
        </div>
        <a href="#" className="my-1">
          <h2></h2>
          <p className="my-1 text-lg">{post.TITLE}</p>
        </a>
        <p className="text-xs text-gray-300">
          작성일 : {dayjs(post.CREATE_AT).locale('ko').fromNow()}
        </p>
        <p className="text-xs text-gray-300">
          {post.REQUEST_DATE
            ? `심사요청일 : ${dayjs(post.REQUEST_DATE).locale('ko').fromNow()}`
            : ''}
        </p>

        {/* <div className="flex flex-wrap flex-row -mx-1 text-center my-4">
          <div className="flex-1 py-2 px-1 border-2 border-purple-100 rounded mx-1">
            <p className="text-sm">조회수</p>
            <p className="h4 text-purple-400 font-normal">{post.JOBID}</p>
          </div>
          <div className="flex-1 py-2 px-1 border-2 border-purple-100 rounded mx-1">
            <p className="text-sm">지원자 수</p>
            <p className="h4 text-purple-400 font-normal">0</p>
          </div>
          <div className="flex-1 py-2 px-1 border-2 border-purple-100 rounded mx-1">
            <p className="text-sm">관심 수</p>
            <p className="h4 text-purple-400 font-normal">0</p>
          </div>
        </div> */}
        <div className="text-right btn-grouped my-2">
          <Link to={'/job/detail/' + post.JOBID} className="btn-xs-purple mr-1">
            채용공고 보기
          </Link>
        </div>
        {post.JOB_STAT === '등록' ? (
          <div>
            <div className="text-right btn-grouped my-2">
              <a href="#" className="btn-xs-purple mr-1">
                수정하기
              </a>
            </div>
            <div className="text-right btn-grouped my-2">
              <button
                onClick={onClickDeleteRecruitPost}
                className="btn-xs-red mr-1"
              >
                삭제하기
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default RecruitPostCard;
