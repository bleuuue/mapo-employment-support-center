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
          {/* <div className="flex-auto sm:flex-none sm:w-1/2 p-2">
            <div className="border border-gray-100 rounded my-4 p-4 h-full">
              <div>
                <span className="font-bold text-purple-400 mr-3">작성중</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecruitList;
