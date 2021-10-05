export interface ListMenu {
  CODE_ID_NM: string;
  CODE: string;
  CODE_NM: string;
}

export interface RecruitPost {
  JOBID: number;
  TITLE: string;
  COMENTS: string;
  CREATE_AT: Date;
  JOB_STAT: string;
  REQUEST_DATE: Date;
}

// export interface RecruitPostDetail {
//   TITLE: string;
//   JOB_TYPE_DESC: string;
//   REQUIRE_COUNT: number;
//   JOB_DESC: string;
//   DEUCATION: '학력(코드값)';
//   CAREER: '경력(코드값)';
//   CAREER_PERIOD: '경력기간';
//   WORK_AREA: '근무예정지(코드값)';
//   WORK_ADDRESS: '근무예정지 주소';
//   WORK_AREA_DESC: '근무예정지 산업단지';
//   EMPLOYTYPE: '고용형태(코드값)';
//   EMPLOYTYPE_DET: '고용형태상세(코드값)';
//   PAYCD: '임금 지급형태(코드값)';
//   PAY_AMOUNT: '임금금액';
//   WORK_TIME_TYPE: '근무시간유형(코드값)';
//   MEAL_COD: '식사제공(코드값)';
//   WORKINGHOURS: '1주당근로시간';
//   SEVERANCE_PAY_TYPE: '퇴직금형태(코드값)';
//   SOCIAL_INSURANCE: '사회보험(코드값)';
//   CLOSING_TYPE: '접수마감일구분(코드값)';
//   ENDRECEPTION: '접수마감일';
//   APPLY_METHOD: '접수방법(코드값)';
//   APPLY_METHOD_ETC: '접수방법 상세';
//   TEST_METHOD: '전형방법(코드값)';
//   TEST_METHOD_DTC: '전형방법 상세';
//   APPLY_DOCUMENT: '제출서류(코드값)';
//   CONTACT_NAME: '채용담당자 성명';
//   CONTACT_DEPARTMENT: '채용담당자 부서';
//   CONTACT_PHONE: '채용담당자 전화번호';
//   CONTACT_EMAIL: '채용담당자 이메일';
// }
