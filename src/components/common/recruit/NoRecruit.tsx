import { FC } from 'react';

const NoRecruit: FC = () => {
  return (
    <div className="container-recruit">
      <div className="mb-8">
        <h5 className="font-bold text-xl">접수 중인 채용 공고</h5>
        <div className="text-center rounded bg-gray-50 p-4 mt-4">
          접수 중인 채용 공고가 없습니다.
        </div>
      </div>
      <hr className="border-b-2 border-gray-100 my-4"></hr>
      <div className="my-8 relative"></div>
    </div>
  );
};

export default NoRecruit;
