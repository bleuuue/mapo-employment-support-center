import { FC } from 'react';

const Wanted: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="py-4 md:py-8">
        <div>
          <span className="text-sm text-gray-300 mr-1">공공채용</span>
        </div>
        <h2 className="font-bold text-3xl">(주)EUGENE</h2>
        <p>Web Frontend Developer & Backend Developer 채용</p>
      </div>
      <div className="flex flex-wrap flex-row -mx-4 relative">
        <div className="w-7/12 order-1 flex-auto px-4">
          <div className="hidden md:block relative">
            <img />
          </div>
          <div className="list-description">
            <h5>상세 업무 내용</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              commodi tenetur asperiores error repudiandae architecto ut
              necessitatibus, nostrum sint obcaecati reiciendis earum illum nam?
              Alias cumque labore quae excepturi quaerat? Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Voluptas magnam, consequatur
              harum ut maxime qui nulla esse hic nobis itaque similique
              reiciendis excepturi suscipit culpa iusto vel cumque veniam
              expedita.
            </p>
          </div>
          <div className="list-description">
            <h5>자격 요건</h5>
          </div>
          <div className="list-description">
            <h5>우대 사항</h5>
          </div>
          <div className="list-description">
            <h5>채용조건</h5>
          </div>
        </div>
      </div>
      <div className="my-4">
        <a className="btn btn-xs-gray mr-4">뒤로가기</a>
        <a className="btn btn-xs-purple">목록</a>
      </div>
    </div>
  );
};

export default Wanted;
