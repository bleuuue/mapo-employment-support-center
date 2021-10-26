import { createRef, FC, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { RecruitPost } from '../../../interfaces';
import RecruitLeftSide from './RecruitLeftSide';
import RecruitPostCards from './RecruitPostCards';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';

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

const RecruitMain: FC = () => {
  const token = localStorage.getItem('token');

  const lastEl = createRef<HTMLDivElement>();
  const intersectionObserver = useRef<IntersectionObserver>();
  const sizeRef = useRef<number>(1);

  async function fetcher(url: string) {
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

  const { data, error, mutate, size, setSize } = useSWRInfinite<RecruitPost[]>(
    getKey,
    fetcher,
  );

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
          <div className="container-recruit">
            <div className="my-8 relative">
              <h5>채용 공고 리스트</h5>
              {data.map((posts, i) => {
                return (
                  <RecruitPostCards key={i} posts={posts} mutate={mutate} />
                );
              })}
              <div ref={lastEl} className="text-white">
                intersectionObserver
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitMain;
