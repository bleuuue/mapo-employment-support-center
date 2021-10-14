import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useInput } from '../../../hooks';
import RecruitLeftSide from './RecruitLeftSide';
import axios from 'axios';
import { EnterpriseProfile, JobDetail, ListMenu } from '../../../interfaces';
import useSWR from 'swr';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RouteComponentProps } from 'react-router';

const EditPost: FC<RouteComponentProps<{ jobId: string }>> = ({ match }) => {
  const token = localStorage.getItem('token');
  const { jobId } = match.params;

  async function getPostById(url: string) {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  const { data } = useSWR<JobDetail>(
    `${process.env.REACT_APP_BACK_URL}/job/enterprise/list/detail/${jobId}`,
    getPostById,
  );

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<any>(null);

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

  const [recruitTitle, setRecruitTitle, onChangeRecruitTitle] = useInput('');
  const [recruitOccupation, setRecruitOccupation, onChangeRecruitOccupation] =
    useInput('');
  const [recruitNumber, setRecruitNumber, onChangeRecruitNumber] = useInput('');
  const [jobDetail, setJobDetail] = useState<any>('');
  const [eduBackground, setEduBackground, onChangeEduBackground] = useInput('');
  const [careerCheck, setCareerCheck, onChangeCareerCheck] = useInput('');
  const [careerPeriod, setCareerPeriod, onChangeCareerPeriod] = useInput('');
  const [areaCheck, setAreaCheck, onChangeAreaCheck] = useInput('');
  const [areaAddress, setAreaAddress, onChangeAreaAddress] = useInput('');
  const [industrialComplex, setIndustrialComplex, onChangeIndustrialComplex] =
    useInput('');
  const [apytypetc, setApytypetc, onChangeApytypetc] = useInput('');
  const [clstypCheck, setClstypCheck, onChangeClstypCheck] = useInput('');
  const [empcdCheck, setEmpcdCheck, onChangeEmpcdCheck] = useInput('');
  const [empdetCheck, setEmpdetCheck, onChangeEmpdetCheck] = useInput('');
  const [paycdCheck, setPaycdCheck, onChangePaycdCheck] = useInput(data?.PAYCD);
  const [payAmount, setPayAmount, onChangePayAmount] = useInput(
    data?.PAY_AMOUNT,
  );
  const [workHourForWeek, setWorkHourForWeek, onChangeWorkHourForWeek] =
    useInput(data?.WORKINGHOURS);
  const [mealcdCheck, setMealcdCheck, onChangeMealcdCheck] = useInput('');
  const [sevpayCheck, setSevpayCheck, onChangeSevpayCheck] = useInput('');
  const [timecdCheck, setTimecdCheck, onChangeTimecdCheck] = useInput('');
  const [closingTime, setClosingTime, onChangeClosingTime] = useInput('');
  const [testmtetcCheck, setTestmtetcCheck, onChangeTestmtetcCheck] =
    useInput('');
  const [contactName, setContactName, onChangeContactName] = useInput('');
  const [contactDepartment, setContactDepartment, onChangeContactDepartment] =
    useInput('');
  const [contactPhone, setContactPhone, onChangeContactPhone] = useInput('');
  const [contactEmail, setContactEmail, onChangeContactEmail] = useInput('');

  const [checkedApplyMethodInputs, setCheckedApplyMethodInputs] = useState<any>(
    [],
  );
  const [checkedTestMethodInputs, setCheckedTestMethodInputs] = useState<any>(
    [],
  );
  const [checkedSocialInsuranceInputs, setCheckedSocialInsuranceInputs] =
    useState<any>([]);
  const [checkedApplyDocumentInputs, setCheckedApplyDocumentInputs] =
    useState<any>([]);

  const changeApplyMethodHandler = (checked: any, id: any) => {
    if (checked) {
      setCheckedApplyMethodInputs([...checkedApplyMethodInputs, id]);
    } else {
      setCheckedApplyMethodInputs(
        checkedApplyMethodInputs.filter((el: any) => el !== id),
      );
    }
  };

  const changeTestMethodHandler = (checked: any, id: any) => {
    if (checked) {
      setCheckedTestMethodInputs([...checkedTestMethodInputs, id]);
    } else {
      setCheckedTestMethodInputs(
        checkedTestMethodInputs.filter((el: any) => el !== id),
      );
    }
  };

  const changeSocialInsuranceHandler = (checked: any, id: any) => {
    if (checked) {
      setCheckedSocialInsuranceInputs([...checkedSocialInsuranceInputs, id]);
    } else {
      setCheckedSocialInsuranceInputs(
        checkedSocialInsuranceInputs.filter((el: any) => el !== id),
      );
    }
  };

  const changeApplyDocumentHandler = (checked: any, id: any) => {
    if (checked) {
      setCheckedApplyDocumentInputs([...checkedApplyDocumentInputs, id]);
    } else {
      setCheckedApplyDocumentInputs(
        checkedApplyDocumentInputs.filter((el: any) => el !== id),
      );
    }
  };

  useEffect(() => {
    getEnterpriseProfile();
    getEnterpriseRegister();
  }, []);

  useEffect(() => {
    setDatas();
    setCheckboxData();
    console.log(data);
  }, [data]);

  const setDatas = () => {
    setPreview(data?.JOB_IM);
    setRecruitTitle(data?.TITLE);
    setRecruitOccupation(data?.JOB_TYPE_DESC);
    setRecruitNumber(data?.REQUIRE_COUNT);
    setJobDetail(data?.JOB_DESC);
    setEduBackground(data?.DEUCATION);
    setCareerCheck(data?.CAREER.CODE);
    setCareerPeriod(data?.CAREER_PERIOD);
    setAreaCheck(data?.WORK_AREA.CODE);
    setAreaAddress(data?.WORK_ADDRESS);
    setIndustrialComplex(data?.WORK_AREA_DESC);
    setEmpcdCheck(data?.EMPLOYTYPE.CODE);
    setEmpdetCheck(data?.EMPLOYTYPE_DET.map((v) => v.CODE_NM).join());
    setPaycdCheck(data?.PAYCD.CODE);
    setPayAmount(data?.PAY_AMOUNT);
    setTimecdCheck(data?.WORK_TIME_TYPE.CODE);
    setMealcdCheck(data?.MEAL_COD.CODE);
    setWorkHourForWeek(data?.WORKINGHOURS);
    setSevpayCheck(data?.SEVERANCE_PAY_TYPE.CODE);
    setClstypCheck(data?.CLOSING_TYPE.CODE);
    setClosingTime(data?.ENDRECEPTION);
    setApytypetc(data?.APPLY_METHOD_ETC);
    setTestmtetcCheck(data?.TEST_METHOD_DTC);
    setContactName(data?.CONTACT_NAME);
    setContactEmail(data?.CONTACT_EMAIL);
    setContactPhone(data?.CONTACT_PHONE);
    setContactDepartment(data?.CONTACT_DEPARTMENT);
  };

  const setCheckboxData = () => {
    data?.APPLY_DOCUMENT.map((v) => {
      setCheckedApplyDocumentInputs((checkedApplyDocumentInputs: any) => [
        ...checkedApplyDocumentInputs,
        v.CODE_NM,
      ]);
    });

    data?.SOCIAL_INSURANCE.map((v) => {
      setCheckedSocialInsuranceInputs((checkedSocialInsuranceInputs: any) => [
        ...checkedSocialInsuranceInputs,
        v.CODE_NM,
      ]);
    });

    data?.TEST_METHOD.map((v) => {
      setCheckedTestMethodInputs((checkedTestMethodInputs: any) => [
        ...checkedTestMethodInputs,
        v.CODE_NM,
      ]);
    });

    data?.APPLY_METHOD.map((v) => {
      setCheckedApplyMethodInputs((checkedApplyMethodInputs: any) => [
        ...checkedApplyMethodInputs,
        v.CODE_NM,
      ]);
    });
  };

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

      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: enterpriseProfileData } = useSWR<EnterpriseProfile>(
    `${process.env.REACT_APP_BACK_URL}/user/enterprise/profile`,
    getEnterpriseProfile,
  );

  if (!enterpriseProfileData) return <div>Loading...</div>;

  async function getEnterpriseRegister() {
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
  }

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const imageFile = e.target.files[0];

    const fileReader = new FileReader();

    setFile(imageFile);

    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (e) => setPreview(e.target?.result);
  };

  const onChangeJobDetail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setJobDetail(value);
  };

  const savePost = async () => {
    try {
      const formData = new FormData();

      if (file !== null) {
        const compressedImage = await imageCompression(file, {
          maxSizeMB: 5,
        });

        const blobToFile = new File([compressedImage], compressedImage.name, {
          type: compressedImage.type,
        });

        formData.append('file', blobToFile);
      }

      formData.append('TITLE', recruitTitle);
      formData.append('JOB_TYPE_DESC', recruitOccupation);
      formData.append('REQUIRE_COUNT', recruitNumber);
      formData.append('JOB_DESC', jobDetail);
      formData.append('DEUCATION', eduBackground);
      formData.append('CAREER', careerCheck);
      formData.append('CAREER_PERIOD', careerPeriod);
      formData.append('WORK_AREA', areaCheck);
      formData.append('WORK_ADDRESS', areaAddress);
      formData.append('WORK_AREA_DESC', industrialComplex);
      formData.append('EMPLOYTYPE', empcdCheck);
      formData.append('EMPLOYTYPE_DET', empdetCheck);
      formData.append('PAYCD', paycdCheck);
      formData.append('PAY_AMOUNT', payAmount);
      formData.append('WORK_TIME_TYPE', paycdCheck);
      formData.append('MEAL_COD', mealcdCheck);
      formData.append('WORKINGHOURS', workHourForWeek);
      formData.append('SEVERANCE_PAY_TYPE', sevpayCheck);
      formData.append('SOCIAL_INSURANCE', checkedSocialInsuranceInputs.join());
      formData.append('CLOSING_TYPE', clstypCheck);
      formData.append('ENDRECEPTION', closingTime);
      formData.append('APPLY_METHOD', checkedApplyMethodInputs.join());
      formData.append('APPLY_METHOD_ETC', apytypetc);
      formData.append('TEST_METHOD', checkedTestMethodInputs.join());
      formData.append('TEST_METHOD_DTC', testmtetcCheck);
      formData.append('APPLY_DOCUMENT', checkedApplyDocumentInputs.join());
      formData.append('CONTACT_NAME', contactName);
      formData.append('CONTACT_DEPARTMENT', contactDepartment);
      formData.append('CONTACT_PHONE', contactPhone);
      formData.append('CONTACT_EMAIL', contactEmail);

      console.log('savePost start');
      console.log(formData);

      const response = await axios.put(
        `http://121.162.15.140:3000/job/enterprise/edit/${jobId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.statusText === 'Created') {
        requestApprove(response.data.jobid);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickTemporarySave = async () => {
    try {
      const formData = new FormData();

      if (file !== null) {
        const compressedImage = await imageCompression(file, {
          maxSizeMB: 5,
        });
        const blobToFile = new File([compressedImage], compressedImage.name, {
          type: compressedImage.type,
        });
        formData.append('file', blobToFile);
      }

      formData.append('TITLE', recruitTitle);
      formData.append('JOB_TYPE_DESC', recruitOccupation);
      formData.append('REQUIRE_COUNT', recruitNumber);
      formData.append('JOB_DESC', jobDetail);
      formData.append('DEUCATION', eduBackground);
      formData.append('CAREER', careerCheck);
      formData.append('CAREER_PERIOD', careerPeriod);
      formData.append('WORK_AREA', areaCheck);
      formData.append('WORK_ADDRESS', areaAddress);
      formData.append('WORK_AREA_DESC', industrialComplex);
      formData.append('EMPLOYTYPE', empcdCheck);
      formData.append('EMPLOYTYPE_DET', empdetCheck);
      formData.append('PAYCD', paycdCheck);
      formData.append('PAY_AMOUNT', payAmount);
      formData.append('WORK_TIME_TYPE', timecdCheck);
      formData.append('MEAL_COD', mealcdCheck);
      formData.append('WORKINGHOURS', workHourForWeek);
      formData.append('SEVERANCE_PAY_TYPE', sevpayCheck);
      formData.append('SOCIAL_INSURANCE', checkedSocialInsuranceInputs.join());
      formData.append('CLOSING_TYPE', clstypCheck);
      formData.append('ENDRECEPTION', closingTime);
      formData.append('APPLY_METHOD', checkedApplyMethodInputs.join());
      formData.append('APPLY_METHOD_ETC', apytypetc);
      formData.append('TEST_METHOD', checkedTestMethodInputs.join());
      formData.append('TEST_METHOD_DTC', testmtetcCheck);
      formData.append('APPLY_DOCUMENT', checkedApplyDocumentInputs.join());
      formData.append('CONTACT_NAME', contactName);
      formData.append('CONTACT_DEPARTMENT', contactDepartment);
      formData.append('CONTACT_PHONE', contactPhone);
      formData.append('CONTACT_EMAIL', contactEmail);

      console.log('temp_savePost start');

      const response = await axios.put(
        `http://121.162.15.140:3000/job/enterprise/edit/${jobId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.statusText === 'Created') console.log('post save!');
    } catch (error) {
      console.error(error);
    }
  };

  const requestApprove = async (j: string) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACK_URL}/job/enterprise/judge/${j}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.statusText === 'OK') {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitRecruitment = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      savePost();
      // if (jobId) await requestApprove();

      // window.location.href = 'http://localhost:3000/recruit/management';
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
                  <h5 className="font-bold text-2xl">기업정보</h5>
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
                        value={enterpriseProfileData.CMPNY_NM}
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
                        value={enterpriseProfileData.BIZRNO}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">대표자</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="CEO Name"
                        value={enterpriseProfileData.CEO}
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
                        value={enterpriseProfileData.ADRES}
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
                        value={enterpriseProfileData.INDUTY}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label-recruit">홈페이지 주소</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="www.abcd.com"
                        value={enterpriseProfileData.WEB_ADRES}
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
                        value={enterpriseProfileData.NMBR_WRKRS}
                        disabled
                      />
                    </div>
                  </div>
                </details>

                <div className="mb-8 mt-8">
                  <h5 className="font-bold text-2xl">구인사항</h5>
                </div>
                <div className="form-group">
                  <label className="label-recruit">채용제목</label>
                  <div>
                    <input
                      className="input-recruit"
                      placeholder="마포구청에서 웹 개발자를 모집합니다"
                      value={recruitTitle}
                      onChange={onChangeRecruitTitle}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">타이틀 이미지</label>
                  <div className="control">
                    <div>
                      <div className="border border-gray-100 p-6 content-center text-center rounded my-2">
                        <div className="relative cursor-pointer">
                          {preview ? (
                            <img
                              style={{ width: '30%' }}
                              className="inline-block"
                              src={preview}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faUpload}
                              className="rounded inline-block cursor-pointer text-4xl"
                            />
                          )}
                          <input
                            type="file"
                            className="absolute left-0 top-0 w-full h-full opacity-0"
                            onChange={onChangeImage}
                          />
                          <p className="text-black mt-2">
                            클릭하여 파일 업로드
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">모집직종</label>
                  <div>
                    <input
                      className="input-recruit"
                      placeholder="Front-End Web Developer"
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
                      placeholder="2"
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
                      placeholder="React 앱 개발 및 배포"
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
                            checked={eduBackground.CODE_NM === edu.CODE_NM}
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
                    <label className="my-1 label-recruit">
                      주소(근무할 곳)
                    </label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="서울시 은평구 역촌동 11-1"
                        value={areaAddress}
                        onChange={onChangeAreaAddress}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="my-1 label-recruit">소속산업단지</label>
                    <div>
                      <input
                        className="input-recruit"
                        placeholder="은평구 테크노밸리"
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
                            type="checkbox"
                            className="form-radio"
                            value={doc.CODE}
                            checked={
                              checkedApplyDocumentInputs.includes(doc.CODE_NM)
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              changeApplyDocumentHandler(
                                e.currentTarget.checked,
                                doc.CODE,
                              );
                            }}
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
                            checked={empdetCheck === empd.CODE_NM}
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
                      placeholder="35"
                      value={workHourForWeek}
                      onChange={onChangeWorkHourForWeek}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8 mt-8">
                  <h5 className="font-bold text-2xl">근로조건</h5>
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
                <div className="mb-8 mt-8">
                  <h5 className="font-bold text-2xl">전형사항</h5>
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
                            type="checkbox"
                            className="form-radio"
                            value={socin.CODE}
                            checked={
                              checkedSocialInsuranceInputs.includes(
                                socin.CODE_NM,
                              )
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              changeSocialInsuranceHandler(
                                e.currentTarget.checked,
                                socin.CODE,
                              );
                            }}
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
                            id={test.CODE}
                            type="checkbox"
                            className="form-radio"
                            value={test.CODE}
                            checked={
                              checkedTestMethodInputs.includes(test.CODE_NM)
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              changeTestMethodHandler(
                                e.currentTarget.checked,
                                test.CODE,
                              );
                            }}
                          />
                          <span className="mx-1">{test.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                  {checkedTestMethodInputs.includes('90') ? (
                    <div className="form-group">
                      <label className="label-recruit">기타(상세)</label>
                      <div>
                        <input
                          className="input-recruit"
                          value={testmtetcCheck}
                          onChange={onChangeTestmtetcCheck}
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
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
                            id={apy.CODE}
                            type="checkbox"
                            className="form-radio"
                            value={apy.CODE}
                            checked={
                              checkedApplyMethodInputs.includes(apy.CODE_NM)
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              changeApplyMethodHandler(
                                e.currentTarget.checked,
                                apy.CODE,
                              );
                            }}
                          />
                          <span className="mx-1">{apy.CODE_NM}</span>
                        </label>
                      );
                    })}
                  </div>
                  {checkedApplyMethodInputs.includes('90') ? (
                    <div className="form-group">
                      <label className="label-recruit">기타(상세)</label>
                      <div>
                        <input
                          className="input-recruit"
                          value={apytypetc}
                          onChange={onChangeApytypetc}
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
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
                          placeholder="2021-10-31"
                          value={closingTime}
                          onChange={onChangeClosingTime}
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="form-group">
                  <label className="label-recruit">채용담당자 성명</label>
                  <div>
                    <input
                      className="input-recruit"
                      value={contactName}
                      onChange={onChangeContactName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">채용담당자 부서</label>
                  <div>
                    <input
                      className="input-recruit"
                      value={contactDepartment}
                      onChange={onChangeContactDepartment}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">채용담당자 전화번호</label>
                  <div>
                    <input
                      className="input-recruit"
                      value={contactPhone}
                      onChange={onChangeContactPhone}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label-recruit">채용담당자 이메일</label>
                  <div>
                    <input
                      className="input-recruit"
                      value={contactEmail}
                      onChange={onChangeContactEmail}
                    />
                  </div>
                </div>
              </div>

              <div className="sticky pt-4 pb-20 lg:pt-4 lg:pb-4 my-4 bottom-0 left-0 right-0 z-0">
                <div className="flex flex-wrap flex-row">
                  <button
                    type="button"
                    onClick={onClickTemporarySave}
                    className="flex-auto w-auto mr-1 btn btn-lg-three text-white bg-gray-300 shadow-xl hover:filter hover:brightness-90"
                  >
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

export default EditPost;
