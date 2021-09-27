import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useInput } from '../../../hooks';
import RecruitLeftSide from './RecruitLeftSide';

const CreatePost: FC = () => {
  const [folding, setFolding] = useState(true);

  const [recruitTitle, onChangeRecruitTitle] = useInput('');
  const [recruitOccupation, onChangeRecruitOccupation] = useInput('');
  const [recruitNumber, onChangeRecruitNumber] = useInput('');
  const [jobDetail, setJobDetail] = useState<string>('');
  const [eduBackground, onChangeEduBackground] = useInput('');
  const [career, onChangeCareer] = useInput('');

  const onChangeJobDetail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setJobDetail(value);
  };

  const onSubmitRecruitment = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickFoldingButton = () => {
    setFolding(!folding);
  };

  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <RecruitLeftSide />
        <div className="content">
          <div>
            <form onSubmit={onSubmitRecruitment}>
              <div>
                <div>
                  <h5 className="font-bold text-xl">기업정보</h5>
                </div>
                <details className="mb-8">
                  <summary
                    className="cursor-pointer"
                    onClick={onClickFoldingButton}
                  >
                    {folding ? '펼치기!' : '접기!'}
                  </summary>
                  <div className="form-group mt-4">
                    <label className="label-recruit">사업체명</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value="mapogu-office"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">사업자 등록번호</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={recruitOccupation}
                        onChange={onChangeRecruitOccupation}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">대표자</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={recruitOccupation}
                        onChange={onChangeRecruitOccupation}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">소재지</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={recruitOccupation}
                        onChange={onChangeRecruitOccupation}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">업종</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={recruitOccupation}
                        onChange={onChangeRecruitOccupation}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">사업내용</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={recruitOccupation}
                        onChange={onChangeRecruitOccupation}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">근로자 수</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={recruitOccupation}
                        onChange={onChangeRecruitOccupation}
                        disabled
                      />
                    </div>
                  </div>
                </details>

                <div className="mb-8">
                  <h5 className="font-bold text-xl">구인사항</h5>
                </div>
                <div className="form-group">
                  <label className="label-recruit">채용제목</label>
                  <div>
                    <input
                      className="input-recruit"
                      placeholder="aaaaaaa"
                      value={recruitTitle}
                      onChange={onChangeRecruitTitle}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">모집직종</label>
                  <div>
                    <input
                      className="input-recruit"
                      placeholder="aaaaaaa"
                      value={recruitOccupation}
                      onChange={onChangeRecruitOccupation}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">모집인원</label>
                  <div>
                    <input
                      className="input-recruit"
                      placeholder="aaaaaaa"
                      value={recruitNumber}
                      onChange={onChangeRecruitNumber}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">직무내용</label>
                  <div>
                    <textarea
                      className="textarea-recruit"
                      placeholder="aaaaaaa"
                      value={jobDetail}
                      onChange={onChangeJobDetail}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">학력</label>
                  <div className="my-1 flex flex-col">
                    <label className="inline-flex items-center label-form-radio">
                      <input
                        type="radio"
                        className="form-radio"
                        value="고졸"
                        checked={eduBackground === '고졸'}
                        onChange={onChangeEduBackground}
                      />
                      <span className="mx-1">고졸</span>
                    </label>
                    <label className="inline-flex items-center label-form-radio">
                      <input
                        type="radio"
                        className="form-radio"
                        value="대졸"
                        checked={eduBackground === '대졸'}
                        onChange={onChangeEduBackground}
                      />
                      <span className="mx-1">대졸</span>
                    </label>
                    <label className="inline-flex items-center label-form-radio">
                      <input
                        type="radio"
                        className="form-radio"
                        value="대학원졸"
                        checked={eduBackground === '대학원졸'}
                        onChange={onChangeEduBackground}
                      />
                      <span className="mx-1">대학원졸</span>
                    </label>
                    <label className="inline-flex items-center label-form-radio">
                      <input
                        type="radio"
                        className="form-radio"
                        value="관계없음"
                        checked={eduBackground === '관계없음'}
                        onChange={onChangeEduBackground}
                      />
                      <span className="mx-1">관계없음</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">경력</label>
                  <div className="my-1 flex flex-wrap flex-col">
                    <div>
                      <label className="inline-flex items-center label-form-radio">
                        <input
                          type="radio"
                          className="form-radio"
                          value="신입"
                          checked={career === '신입'}
                          onChange={onChangeCareer}
                        />
                        <span className="mx-1">신입</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center label-form-radio">
                        <input
                          type="radio"
                          className="form-radio"
                          value="경력"
                          checked={career === '경력'}
                          onChange={onChangeCareer}
                        />
                        <span className="mx-1">경력</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center label-form-radio">
                        <input
                          type="radio"
                          className="form-radio"
                          value="관계없음"
                          checked={career === '관계없음'}
                          onChange={onChangeCareer}
                        />
                        <span className="mx-1">관계없음</span>
                      </label>
                    </div>
                  </div>
                  {career === '경력' ? (
                    <div className="form-group">
                      <label className="label-recruit">경력 기간</label>
                      <div>
                        <input className="input-recruit" placeholder="1년" />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
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
              <div className="sticky pt-4 pb-20 lg:pt-4 lg:pb-4 my-4 bottom-0 left-0 right-0 z-0">
                <div className="flex flex-wrap flex-row">
                  <button className="flex-auto w-auto mr-1 btn btn-lg-three text-white bg-gray-300 shadow-xl hover:filter hover:brightness-90">
                    임시저장
                  </button>
                  <button
                    type="submit"
                    className="flex-auto btn btn-lg-two w-auto bg-primary-color text-white shadow-xl hover:filter hover:brightness-90"
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
