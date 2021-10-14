export interface ListMenu {
  CODE_ID_NM: string;
  CODE: string;
  CODE_NM: string;
}

export interface RecruitPost {
  JOBID: number;
  TITLE: string;
  COMENTS: string;
  JOB_STAT_CODE: string;
  JOB_STAT_NAME: string;
  CREATE_AT: Date;
  REQUEST_DATE: Date;
}

export interface IJob {
  JOBID: number;
  CMPNY_NM: string;
  JOB_IM: string;
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
  DEUCATION: {
    CODE_NM: string;
    CODE: string;
  };
  CAREER: {
    CODE_NM: string;
    CODE: string;
  };
  CAREER_PERIOD: string;
  WORK_AREA: {
    CODE_NM: string;
    CODE: string;
  };
  WORK_ADDRESS: string;
  WORK_AREA_DESC: string;
  EMPLOYTYPE: {
    CODE_NM: string;
    CODE: string;
  };
  EMPLOYTYPE_DET: {
    CODE_NM: string;
    CODE: string;
  }[];
  PAYCD: {
    CODE_NM: string;
    CODE: string;
  };
  PAY_AMOUNT: string;
  WORK_TIME_TYPE: {
    CODE_NM: string;
    CODE: string;
  };
  MEAL_COD: {
    CODE_NM: string;
    CODE: string;
  };
  WORKINGHOURS: string;
  SEVERANCE_PAY_TYPE: {
    CODE_NM: string;
    CODE: string;
  };
  SOCIAL_INSURANCE: {
    CODE_NM: string;
    CODE: string;
  }[];
  CLOSING_TYPE: {
    CODE_NM: string;
    CODE: string;
  };
  STARTRECEPTION: string;
  ENDRECEPTION: string;
  APPLY_METHOD: {
    CODE: string;
    CODE_NM: string;
  }[];
  APPLY_METHOD_ETC: string;
  TEST_METHOD: {
    CODE_NM: string;
    CODE: string;
  }[];
  TEST_METHOD_DTC: string;
  APPLY_DOCUMENT: {
    CODE_NM: string;
    CODE: string;
  }[];
  CONTACT_NAME: string;
  CONTACT_DEPARTMENT: string;
  CONTACT_PHONE: string;
  CONTACT_EMAIL: string;
}

export interface ISub {
  id: number;
  title: string;
  link: string;
}
