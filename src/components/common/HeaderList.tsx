import { FC } from 'react';
import HeaderButton from './HeaderButton';

const headerConfig = [
  {
    id: 1,
    title: '정보',
    link: '/infomation',
    submenu: [
      { id: 11, title: '마포지역기업', link: '/' },
      { id: 12, title: '일자리지원사업', link: '/' },
      { id: 13, title: '일자리자료', link: '/' },
    ],
  },
  {
    id: 2,
    title: '교육',
    link: '/education',
    submenu: [
      { id: 21, title: '이용안내', link: '/' },
      { id: 22, title: '교육영상', link: '/' },
      { id: 23, title: '특강', link: '/' },
      { id: 24, title: '교육후기', link: '/' },
    ],
  },
  {
    id: 3,
    title: '일자리',
    link: '/job/general',
    submenu: [
      { id: 31, title: '일반 채용', link: '/' },
      { id: 32, title: '공공 채용', link: '/' },
      { id: 33, title: '인턴십', link: '/' },
      { id: 34, title: '일자리매칭', link: '/' },
    ],
  },
  {
    id: 4,
    title: '커뮤니티',
    link: '/community',
    submenu: [
      { id: 41, title: '공지사항', link: '/' },
      { id: 42, title: '이벤트', link: '/' },
    ],
  },
  {
    id: 5,
    title: '상담',
    link: '/counseling',
    submenu: [{ id: 51, title: '취업상담실', link: '/' }],
  },
  { id: 6, title: '채용관리', link: '/recruit' },
  { id: 7, title: '마이페이지', link: '/personal' },
];

const HeaderList: FC = () => {
  return (
    <nav className="hidden lg:block space-x-8 font-bold">
      <ul className="menu">
        {headerConfig.map((header) => {
          return (
            <HeaderButton
              key={header.id}
              title={header.title}
              link={header.link}
              submenu={header.submenu}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderList;
