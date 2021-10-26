import { FC } from 'react';

const NoRecruit: FC = () => {
  return (
    <div className="container-recruit">
      <div className="mb-8">
        <div className="text-center rounded bg-gray-50 p-4 mt-4">
          접수 중인 채용 공고가 없습니다.
        </div>
      </div>
    </div>
  );
};

export default NoRecruit;
