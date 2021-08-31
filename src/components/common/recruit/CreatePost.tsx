import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const CreatePost: FC = () => {
  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <div className="sidebar">
          <div className="py-8">
            <h2 className="flex justify-between text-3xl font-bold">
              채용 관리
            </h2>
          </div>
          <div>
            <ul className="list-menu">
              <li className="li-recruit">
                <NavLink
                  to="/recruit/create"
                  className="a-li-recruit"
                  activeClassName="is-active-recruit"
                >
                  채용 공고 만들기
                </NavLink>
              </li>
              <li className="li-recruit">
                <a href="#" className="a-li-recruit">
                  채용 공고 리스트
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div>
            <form>
              <div>
                <div className="mb-8">
                  <h5 className="font-bold text-xl">구인사항</h5>
                </div>
                <div className="form-group">
                  <label className="label-recruit">채용제목</label>
                  <div>
                    <input className="input-recruit" placeholder="aaaaaaa" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">모집직종</label>
                  <div>
                    <input className="input-recruit" placeholder="aaaaaaa" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">모집인원</label>
                  <div>
                    <input className="input-recruit" placeholder="aaaaaaa" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">직무내용</label>
                  <div>
                    <textarea
                      className="textarea-recruit"
                      placeholder="aaaaaaa"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">학력</label>
                  <div className="my-1">
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" />
                      <span className="mx-1">고졸</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" />
                      <span className="mx-1">대졸</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" />
                      <span className="mx-1">대학원졸</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" className="form-radio" />
                      <span className="mx-1">관계없음</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">경력</label>
                  <div className="my-1 flex flex-wrap flex-row">
                    <div className="flex-1 w-1/4">
                      <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" />
                        <span className="mx-1">신입</span>
                      </label>
                    </div>
                    <div className="flex-1 w-1/4">
                      <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" />
                        <span className="mx-1">경력</span>
                      </label>
                    </div>
                    <div className="flex-1 w-1/4">
                      <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" />
                        <span className="mx-1">관계없음</span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-recruit">모집인원</label>
                    <div>
                      <input className="input-recruit" placeholder="aaaaaaa" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h5 className="font-bold text-xl">근로조건</h5>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h5 className="font-bold text-xl">전형사항</h5>
                </div>
              </div>
              <div className="pt-4 pb-20 lg:pt-4 lg:pb-4 my-4 bottom-0 left-0 right-0 z-0">
                <div className="flex flex-wrap flex-row">
                  <button className="flex-auto w-auto mr-1 btn btn-lg-three text-white bg-gray-300 shadow-xl">
                    임시저장
                  </button>
                  <button
                    type="submit"
                    className="flex-auto btn btn-lg-two w-auto text-white shadow-xl"
                  >
                    승인요청하기
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
