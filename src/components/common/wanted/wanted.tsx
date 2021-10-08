import { FC, useRef, useEffect, useState } from 'react';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import { JobDetail } from '../../../interfaces';

declare global {
  interface Window {
    kakao: any;
  }
}

// 지도를 생성할 때 필요한 기본 옵션
const options = {
  // 지도의 중심좌표
  center: new window.kakao.maps.LatLng(33.450701, 126.570667),
  // 지도의 레벨(확대, 축소 정도)
  level: 3,
};

const Wanted: FC<RouteComponentProps<{ jobId: string }>> = ({ match }) => {
  const { kakao } = window;
  // 지도를 담을 영역의 DOM 레퍼런스
  const container = useRef(null);

  const [addr, setAddr] = useState<string>('서울 마포구 성산로4길 53');

  const { jobId } = match.params;

  async function getPostById(url: string) {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  const { data } = useSWR<JobDetail>(
    `${process.env.REACT_APP_BACK_URL}/job/enterprise/list/detail/${jobId}`,
    getPostById,
  );

  useEffect(() => {
    // 지도 생성 및 객체 리턴
    if (container.current !== null) {
      const map = new kakao.maps.Map(container.current, options);

      if (!(data === undefined)) setAddr(data.WORK_ADDRESS);

      // 위도, 경도로 변환 및 마커표시
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(addr, function (result: any, status: any) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          map.setCenter(coords);
        }
      });
    }
  }, [addr, setAddr, data]);

  useEffect(() => {
    console.log(data?.JOB_IM);
  }, [data]);

  if (!data) return <div className="px-4 text-xl">Loading...</div>;

  return (
    <div className="container-recruit px-4 pb-12">
      <div className="py-4 md:py-8">
        <div>
          <span className="text-sm text-gray-300 mr-1">공공채용</span>
        </div>
        <h2 className="font-bold text-3xl">{data.CMPNY_NM}</h2>
        <p className="text-xl">{data.TITLE}</p>
      </div>
      <div className="flex flex-wrap flex-row -mx-4 relative">
        <div className="w-7/12 order-1 flex-auto px-4">
          <div className="hidden md:block relative">
            <div className="pb-[52.5%]"></div>
            <div className="rounded overflow-hidden absolute left-0 right-0 top-0 bottom-0">
              {data.JOB_IM !== '' ? (
                <img
                  src={data.JOB_IM}
                  alt="채용 이미지"
                  className="object-cover w-full h-full"
                />
              ) : (
                <img
                  src="../../image/dong-gu.jpg"
                  alt="채용 공공 기본 이미지"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
          <div className="list-description">
            <h5>상세 업무 내용</h5>
            <p>{data.JOB_DESC}</p>
          </div>
          <div className="list-description">
            <h5>자격 요건</h5>
            <p className="list">
              <strong>학력</strong>
              <span>{data.DEUCATION}</span>
            </p>
            <p className="list">
              <strong>경력</strong>
              <span>
                {data.CAREER} {data.CAREER === '경력' && data.CAREER_PERIOD}
              </span>
            </p>
            <p className="list">
              <strong>제출서류</strong>
              <span>{data.APPLY_DOCUMENT.map((v) => v.CODE_NM)}</span>
            </p>
          </div>
          <div className="list-description">
            <h5>구인사항</h5>
            <p className="list">
              <strong>모집직종</strong>
              <span>{data.JOB_TYPE_DESC}</span>
            </p>
            <p className="list">
              <strong>인원</strong>
              <span>{data.REQUIRE_COUNT}</span>
            </p>
            <p className="list">
              <strong>고용형태</strong>
              <span>{data.EMPLOYTYPE}</span>
            </p>
            <p className="list">
              <strong>고용형태상세</strong>
              <span>{data.EMPLOYTYPE_DET.map((v) => v.CODE_NM)}</span>
            </p>
            <p className="list">
              <strong>임금지급형태</strong>
              <span>{data.PAYCD}</span>
            </p>
            <p className="list">
              <strong>임금금액</strong>
              <span>{data.PAY_AMOUNT}</span>
            </p>
            <p className="list">
              <strong>근무시간유형</strong>
              <span>{data.WORK_TIME_TYPE}</span>
            </p>
            <p className="list">
              <strong>전형방법</strong>
              <span>{data.TEST_METHOD.map((v) => v.CODE_NM + '  ')}</span>
            </p>
            <p className="list">
              <strong>전형방법상세</strong>
              <span>{data.TEST_METHOD_DTC}</span>
            </p>
            <p className="list">
              <strong>접수방법</strong>
              <span>{data.APPLY_METHOD.map((v) => v.CODE_NM + '  ')}</span>
            </p>
            <p className="list">
              <strong>접수방법상세</strong>
              <span>{data.APPLY_METHOD_ETC}</span>
            </p>
          </div>
          <div className="list-description">
            <h5>근무 조건</h5>
            <p className="list">
              <strong>식사제공</strong>
              <span>{data.MEAL_COD}</span>
            </p>
            <p className="list">
              <strong>주당근로시간</strong>
              <span>{data.WORKINGHOURS}</span>
            </p>
            <p className="list">
              <strong>퇴직금형태</strong>
              <span>{data.SEVERANCE_PAY_TYPE}</span>
            </p>
            <p className="list">
              <strong>사회보험</strong>
              <span>{data.SOCIAL_INSURANCE.map((v) => v.CODE_NM + ' ')}</span>
            </p>
          </div>
          <div className="list-description">
            <h5>근무위치</h5>
            <p className="list">
              <strong>근무예정지</strong>
              <span>{data.WORK_AREA}</span>
            </p>
            <p className="list">
              <strong>소속산업단지</strong>
              <span>{data.WORK_AREA_DESC}</span>
            </p>
            <p className="list">
              <strong>주소</strong>
              <span>{data.WORK_ADDRESS}</span>
            </p>
            <div
              id="map"
              style={{ width: '100%', height: '300px' }}
              className="relative overflow-hidden my-4"
              ref={container}
            ></div>
          </div>

          <div className="list-description">
            <p className="list">
              <strong>지원 마감일</strong>
              <span>
                {data.CLOSING_TYPE === '채용시까지'
                  ? data.CLOSING_TYPE
                  : data.ENDRECEPTION}
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/4 order-2 flex-auto px-4">
          <div className="md:sticky top-24 box-border border-solid border-gray-100">
            <div className="md:block md:border md:rounded p-4 text-center">
              <div>
                <a href="#">
                  <img
                    className="rounded w-32 mx-auto mb-4"
                    src="../../image/dong-gu.jpg"
                  />
                </a>
                <a href="#" className="h5 mb-2">
                  {data.CMPNY_NM}
                </a>
                <div className="text-gray-300 text-sm">
                  <span className="mr-2">{data.INDUTY}</span>
                  <span>사원 수: {data.NMBR_WRKRS}</span>
                </div>
              </div>
              <div className="text-left">
                <hr className="border-b border-gray-100 mt-4 mb-3" />
                <p className="my-1">
                  <FontAwesomeIcon
                    className="text-gray-100 mr-2"
                    icon={faMapMarkedAlt}
                  />
                  <span>{data.WORK_ADDRESS}</span>
                </p>
                <p className="my-1">
                  <FontAwesomeIcon
                    className="text-gray-100 mr-2"
                    icon={faPhone}
                  />
                  <span>{data.CONTACT_PHONE}</span>
                </p>
                <p className="my-1">
                  <FontAwesomeIcon
                    className="text-gray-100 mr-2"
                    icon={faEnvelope}
                  />
                  <span>{data.CONTACT_EMAIL}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <button className="btn btn-xs-gray mr-4" onClick={() => history.back()}>
          뒤로가기
        </button>
        <Link className="btn btn-xs-purple" to="/job/general">
          목록
        </Link>
      </div>
    </div>
  );
};

export default Wanted;
