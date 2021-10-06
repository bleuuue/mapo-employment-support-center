import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useInput } from '../../../hooks';
import RecruitLeftSide from './RecruitLeftSide';
import axios from 'axios';
import { ListMenu } from '../../../interfaces';

const CreatePost: FC = () => {
  const token = localStorage.getItem('token');

  const [folding, setFolding] = useState(true);

  const [areacd, setAreacd] = useState([]);
  const [educd, setEducd] = useState([]);
  const [apytyp, setApytyp] = useState([]);
  const [career, setCareer] = useState([]);
  const [clstyp, setClstyp] = useState([]);
  const [doccd, setDoccd] = useState([]);
  const [empcd, setEmpcd] = useState([]);
  const [empdet, setEmpdet] = useState([]);
  const [mealcd, setMealcd] = useState([]);
  const [paycd, setPaycd] = useState([]);
  const [sevpay, setSevpay] = useState([]);
  const [socins, setSocins] = useState([]);
  const [testmt, setTestmt] = useState([]);
  const [timecd, setTimecd] = useState([]);

  const [recruitTitle, onChangeRecruitTitle] = useInput('');
  const [recruitOccupation, onChangeRecruitOccupation] = useInput('');
  const [recruitNumber, onChangeRecruitNumber] = useInput('');
  const [jobDetail, setJobDetail] = useState<string>('');
  const [eduBackground, onChangeEduBackground] = useInput('');
  const [careerCheck, onChangeCareerCheck] = useInput('');
  const [careerPeriod, onChangeCareerPeriod] = useInput('');
  const [areaCheck, onChangeAreaCheck] = useInput('');
  const [areaAddress, onChangeAreaAddress] = useInput('');
  const [industrialComplex, onChangeIndustrialComplex] = useInput('');
  const [apytypCheck, onChangeApytypCheck] = useInput('');
  const [clstypCheck, onChangeClstypCheck] = useInput('');
  const [doccdCheck, onChangeDoccdCheck] = useInput('');
  const [empcdCheck, onChangeEmpcdCheck] = useInput('');
  const [empdetCheck, onChangeEmpdetCheck] = useInput('');
  const [paycdCheck, onChangePaycdCheck] = useInput('');
  const [payAmount, onChangePayAmount] = useInput('');
  const [workHourForWeek, onChangeWorkHourForWeek] = useInput('');
  const [mealcdCheck, onChangeMealcdCheck] = useInput('');
  const [sevpayCheck, onChangeSevpayCheck] = useInput('');
  const [socinsCheck, onChangeSocinsCheck] = useInput('');
  const [timecdCheck, onChangeTimecdCheck] = useInput('');
  const [closingTime, onChangeClosingTime] = useInput('');
  const [testmtCheck, onChangeTestmtCheck] = useInput('');

  useEffect(() => {
    getEnterpriseProfile();
    getEnterpriseRegister();
  }, []);

  const getEnterpriseProfile = async () => {
    try {
      const response = await axios.get(
        `http://121.162.15.140:3000/user/enterprise/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getEnterpriseRegister = async () => {
    try {
      const response = await axios.get(
        `http://121.162.15.140:3000/job/enterprise/register/all`,
      );

      setAreacd(response.data.data.areacd);
      setEducd(response.data.data.educd);
      setApytyp(response.data.data.apytyp);
      setCareer(response.data.data.career);
      setClstyp(response.data.data.clstyp);
      setDoccd(response.data.data.doccd);
      setEmpcd(response.data.data.empcd);
      setEmpdet(response.data.data.empdet);
      setMealcd(response.data.data.mealcd);
      setPaycd(response.data.data.paycd);
      setSevpay(response.data.data.sevpay);
      setSocins(response.data.data.socins);
      setTestmt(response.data.data.testmt);
      setTimecd(response.data.data.timecd);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeJobDetail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setJobDetail(value);
  };

  const onSubmitRecruitment = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        `http://121.162.15.140:3000/job/enterprise/register`,
        {
          TITLE: recruitTitle,
          JOB_TYPE_DESC: recruitOccupation,
          REQUIRE_COUNT: recruitNumber,
          JOB_DESC: jobDetail,
          DEUCATION: eduBackground,
          CAREER: careerCheck,
          CAREER_PERIOD: careerPeriod,
          WORK_AREA: areaCheck,
          WORK_ADDRESS: areaAddress,
          WORK_AREA_DESC: industrialComplex,
          EMPLOYTYPE: empcdCheck,
          EMPLOYTYPE_DET: empdetCheck,
          PAYCD: paycdCheck,
          PAY_AMOUNT: payAmount,
          WORK_TIME_TYPE: paycdCheck,
          MEAL_COD: mealcdCheck,
          WORKINGHOURS: workHourForWeek,
          SEVERANCE_PAY_TYPE: sevpayCheck,
          SOCIAL_INSURANCE: socinsCheck,
          CLOSING_TYPE: clstypCheck,
          ENDRECEPTION: closingTime,
          APPLY_METHOD: apytypCheck,
          APPLY_METHOD_ETC: '접수방법 상세',
          TEST_METHOD: testmtCheck,
          TEST_METHOD_DTC: '전형방법 상세',
          APPLY_DOCUMENT: doccdCheck,
          CONTACT_NAME: '채용담당자 성명',
          CONTACT_DEPARTMENT: '채용담당자 부서',
          CONTACT_PHONE: '채용담당자 전화번호',
          CONTACT_EMAIL: '채용담당자 이메일',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.statusText === 'Created') {
        console.log('created recruit');
        window.location.href = 'http://localhost:3000/recruit/management';
        // return <Redirect to="/" />
      }
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
                {/* {list.filter((menu) => {
                  console.log(menu);
                })} */}
                <div className="form-group">
                  <label className="label-recruit">학력</label>
                  <div className="my-1 flex flex-col">
                    {educd.map((edu: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={edu.CODE}
                            checked={eduBackground === edu.CODE}
                            onChange={onChangeEduBackground}
                          />
                          <span className="mx-1">{edu.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">경력</label>
                  <div className="my-1 flex flex-wrap flex-col">
                    {career.map((c: ListMenu, i) => {
                      return (
                        <div>
                          <label
                            key={i}
                            className="inline-flex items-center label-form-radio"
                          >
                            <input
                              type="radio"
                              className="form-radio"
                              value={c.CODE}
                              checked={careerCheck === c.CODE}
                              onChange={onChangeCareerCheck}
                            />
                            <span className="mx-1">{c.CODE_NM}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  {careerCheck === '20' ? (
                    <div className="form-group">
                      <label className="label-recruit">경력 기간</label>
                      <div>
                        <input
                          className="input-recruit"
                          value={careerPeriod}
                          onChange={onChangeCareerPeriod}
                          placeholder="1년"
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>

                <div className="form-group">
                  <label className="label-recruit">근무예정지</label>
                  <div className="my-1 flex flex-col">
                    {areacd.map((area: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={area.CODE}
                            checked={areaCheck === area.CODE}
                            onChange={onChangeAreaCheck}
                          />
                          <span className="mx-1">{area.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                  <div className="form-group">
                    <label className="label-recruit">주소(근무할 곳)</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={areaAddress}
                        onChange={onChangeAreaAddress}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-recruit">소속산업단지</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="aaaaaaa"
                        value={industrialComplex}
                        onChange={onChangeIndustrialComplex}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">제출서류</label>
                  <div className="my-1 flex flex-col">
                    {doccd.map((doc: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={doc.CODE}
                            checked={doccdCheck === doc.CODE}
                            onChange={onChangeDoccdCheck}
                          />
                          <span className="mx-1">{doc.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">고용형태</label>
                  <div className="my-1 flex flex-col">
                    {empcd.map((emp: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={emp.CODE}
                            checked={empcdCheck === emp.CODE}
                            onChange={onChangeEmpcdCheck}
                          />
                          <span className="mx-1">{emp.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">고용형태상세</label>
                  <div className="my-1 flex flex-col">
                    {empdet.map((empd: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={empd.CODE}
                            checked={empdetCheck === empd.CODE}
                            onChange={onChangeEmpdetCheck}
                          />
                          <span className="mx-1">{empd.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">근무시간유형</label>
                  <div className="my-1 flex flex-col">
                    {timecd.map((time: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={time.CODE}
                            checked={timecdCheck === time.CODE}
                            onChange={onChangeTimecdCheck}
                          />
                          <span className="mx-1">{time.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">주당근로시간</label>
                  <div>
                    <input
                      className="input-recruit"
                      placeholder="aaaaaaa"
                      value={workHourForWeek}
                      onChange={onChangeWorkHourForWeek}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h5 className="font-bold text-xl">근로조건</h5>
                </div>

                <div className="form-group">
                  <label className="label-recruit">식사제공</label>
                  <div className="my-1 flex flex-col">
                    {mealcd.map((meal: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={meal.CODE}
                            checked={mealcdCheck === meal.CODE}
                            onChange={onChangeMealcdCheck}
                          />
                          <span className="mx-1">{meal.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h5 className="font-bold text-xl">전형사항</h5>
                </div>

                <div className="form-group">
                  <label className="label-recruit">임금지급형태</label>
                  <div className="my-1 flex flex-col">
                    {paycd.map((pay: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={pay.CODE}
                            checked={paycdCheck === pay.CODE}
                            onChange={onChangePaycdCheck}
                          />
                          <span className="mx-1">{pay.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                  <div className="form-group">
                    <label className="label-recruit">금액</label>
                    <div>
                      <input
                        className="input-recruit"
                        value={payAmount}
                        onChange={onChangePayAmount}
                        placeholder="액수"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">퇴직금 형태</label>
                  <div className="my-1 flex flex-col">
                    {sevpay.map((sev: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={sev.CODE}
                            checked={sevpayCheck === sev.CODE}
                            onChange={onChangeSevpayCheck}
                          />
                          <span className="mx-1">{sev.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">사회보험</label>
                  <div className="my-1 flex flex-col">
                    {socins.map((socin: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={socin.CODE}
                            checked={socinsCheck === socin.CODE}
                            onChange={onChangeSocinsCheck}
                          />
                          <span className="mx-1">{socin.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">전형방법</label>
                  <div className="my-1 flex flex-col">
                    {testmt.map((test: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={test.CODE}
                            checked={testmtCheck === test.CODE}
                            onChange={onChangeTestmtCheck}
                          />
                          <span className="mx-1">{test.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-recruit">접수방법</label>
                  <div className="my-1 flex flex-col">
                    {apytyp.map((apy: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={apy.CODE}
                            checked={apytypCheck === apy.CODE}
                            onChange={onChangeApytypCheck}
                          />
                          <span className="mx-1">{apy.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">접수마감일구분</label>
                  <div className="my-1 flex flex-col">
                    {clstyp.map((cls: ListMenu, i) => {
                      return (
                        <label
                          key={i}
                          className="inline-flex items-center label-form-radio"
                        >
                          <input
                            type="radio"
                            className="form-radio"
                            value={cls.CODE}
                            checked={clstypCheck === cls.CODE}
                            onChange={onChangeClstypCheck}
                          />
                          <span className="mx-1">{cls.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                  {clstypCheck === '10' ? (
                    <div className="form-group">
                      <label className="label-recruit">마감일</label>
                      <div>
                        <input
                          className="input-recruit"
                          placeholder="aaaaaaa"
                          value={closingTime}
                          onChange={onChangeClosingTime}
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
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
