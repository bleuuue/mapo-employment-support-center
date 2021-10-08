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

export interface IJob {
  JOBID: number;
  CMPNY_NM: string;
  CMPNY_IM: string;
  TITLE: string;
  JOB_TYPE_DESC: string;
  WORK_ADDRESS: string;
  CAREER: string;
  JOB_DESC: string;
  STARTRECEPTION: string;
  ENDRECEPTION: string;
  APPROVAL_DATE: Date;
}

export interface EnterpriseProfile {
  APPLCNT_NM: string;
  ENTRPRS_MBER_ID: string;
  APPLCNT_EMAIL_ADRES: string;
  ENTRPRS_SE: string;
  CMPNY_NM: string;
  BIZRNO: string;
  CEO: string;
  ADRES: string;
  DETAIL_ADRES: string;
  INDUTY: string;
  NMBR_WRKRS: string;
  WEB_ADRES: string;
  CEO_EMAIL_ADRES: string;
  CMPNY_IM: string;
  PROFILE_STTUS: boolean;
  BSNNM_APRVL: string;
}

export interface JobDetail {
  JOBID: string;
  CMPNY_NM: string;
  BIZRNO: string;
  CEO: string;
  ADRES: string;
  DETAIL_ADRES: string;
  INDUTY: string;
  NMBR_WRKRS: string;
  CMPNY_IM: string;
  JOB_IM: string;
  TITLE: string;
  JOB_TYPE_DESC: string;
  REQUIRE_COUNT: string;
  JOB_DESC: string;
  DEUCATION: string;
  CAREER: string;
  CAREER_PERIOD: string;
  WORK_AREA: string;
  WORK_ADDRESS: string;
  WORK_AREA_DESC: string;
  EMPLOYTYPE: string;
  EMPLOYTYPE_DET: {
    CODE_NM: string;
  }[];
  PAYCD: string;
  PAY_AMOUNT: string;
  WORK_TIME_TYPE: string;
  MEAL_COD: string;
  WORKINGHOURS: string;
  SEVERANCE_PAY_TYPE: string;
  SOCIAL_INSURANCE: {
    CODE_NM: string;
  }[];
  CLOSING_TYPE: string;
  STARTRECEPTION: string;
  ENDRECEPTION: string;
  APPLY_METHOD: {
    CODE_NM: string;
  }[];
  APPLY_METHOD_ETC: string;
  TEST_METHOD: {
    CODE_NM: string;
  }[];
  TEST_METHOD_DTC: string;
  APPLY_DOCUMENT: {
    CODE_NM: string;
  }[];
  CONTACT_NAME: string;
  CONTACT_DEPARTMENT: string;
  CONTACT_PHONE: string;
  CONTACT_EMAIL: string;
}
