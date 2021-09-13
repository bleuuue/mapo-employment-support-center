import { FC } from 'react';
import { Link } from 'react-router-dom';

const RecruitList: FC = () => {
  return (
    <div>
      <div>
        <Link className="btn btn-lg-five" to="/recruit/create">
          채용 공고 만들기
        </Link>
        <div className="flex flex-wrap flex-row -mx-2 mb-6">
          <div className="flex-auto sm:flex-none sm:w-1/2 p-2">
            <div className="border border-gray-100 rounded my-4 p-4 h-full">
              <div>
                <span className="font-bold text-purple-400 mr-3">작성중</span>
              </div>
              <div className="tag-list">
                <span className="text-sm text-gray-300 mr-1">일반채용</span>
                <span className="text-sm text-gray-300 mr-1">정규직</span>
              </div>
              <a href="#" className="my-1">
                <h2></h2>
                <p className="my-1">Test 글쓰기</p>
              </a>
              <p className="text-xs text-gray-300">최초작성 : 20210903</p>
              <p className="text-xs text-gray-300">최신수정 : 20210903</p>
              <p className="text-xs text-gray-300">게시심사요청 : 20210903</p>
              <div className="flex flex-wrap flex-row -mx-1 text-center my-4">
                <div className="flex-1 py-2 px-1 border-2 border-purple-100 rounded mx-1">
                  <p className="text-sm">조회수</p>
                  <p className="h4 text-purple-400 font-normal">9</p>
                </div>
                <div className="flex-1 py-2 px-1 border-2 border-purple-100 rounded mx-1">
                  <p className="text-sm">조회수</p>
                  <p className="h4 text-purple-400 font-normal">9</p>
                </div>
                <div className="flex-1 py-2 px-1 border-2 border-purple-100 rounded mx-1">
                  <p className="text-sm">조회수</p>
                  <p className="h4 text-purple-400 font-normal">9</p>
                </div>
              </div>
              <div className="text-right btn-grouped my-2">
                <a href="#" className="btn-xs-purple mr-1">
                  채용공고 보기
                </a>
              </div>
              <div className="text-right btn-grouped my-2">
                <a href="#" className="btn-xs-purple mr-1">
                  복사본 만들기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitList;
