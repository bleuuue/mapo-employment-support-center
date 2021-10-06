import { createRef, FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RecruitLeftSide from './RecruitLeftSide';
import RecruitPostCards from './RecruitPostCards';
import axios from 'axios';
import useSWRInfinite from 'swr/infinite';
import { RecruitPost } from '../../../interfaces';

// interface temp {
//   count: string;
//   statusCode: number;
//   message: string;
//   ok: boolean;
//   data: RecruitPost[];
// }

const getKey = (pageIndex: number, previousPageData: any) => {
  // 마지막 페이지일때
  if (previousPageData && !previousPageData.length) return null;

  // if (pageIndex === 0)
  //   return `${process.env.REACT_APP_BACK_URL}/job/enterprise/list?page=1`;
  // console.log(pageIndex);

  return `${process.env.REACT_APP_BACK_URL}/job/enterprise/list?page=${
    pageIndex + 1
  }`;
};

const RecruitList: FC = () => {
  const token = localStorage.getItem('token');

  const lastEl = createRef<HTMLDivElement>();
  const intersectionObserver = useRef<IntersectionObserver>();
  const sizeRef = useRef<number>(1);

  const fetcher = async (url: string) => {
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
  };

  const { data, error, mutate, size, setSize } = useSWRInfinite<RecruitPost[]>(
    getKey,
    fetcher,
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (data && !data[size - 1]) return;

    // 감지됐을 때
    if (!intersectionObserver.current && lastEl.current) {
      intersectionObserver.current = new IntersectionObserver(
        async (entries) => {
          if (!entries[0].isIntersecting) return;

          sizeRef.current += 1;

          await setSize(sizeRef.current);
        },
      );
      // 감지할 Ref에 붙여줌
      intersectionObserver.current.observe(lastEl.current);
    }
  }, [lastEl]);

  if (!data) return <div>No Data {console.log('No Data')}</div>;
  if (error) return <div>error</div>;

  return (
    <div className="container-recruit px-4 pb-12">
      <div className="layout-side">
        <RecruitLeftSide />
        <div className="content">
          <Link className="btn btn-lg-five" to="/recruit/create">
            채용 공고 만들기
          </Link>
          {data.map((posts, i) => {
            return <RecruitPostCards key={i} posts={posts} mutate={mutate} />;
          })}
          <div ref={lastEl} className="text-white">
            intersectionObserver
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitList;
