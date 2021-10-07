import { FC } from 'react';
import HeaderButton from './HeaderButton';

const headerConfig = [
  { id: 1, title: '정보', link: '/infomation' },
  { id: 2, title: '교육', link: '/education' },
  { id: 3, title: '일자리', link: '/job/general' },
  { id: 4, title: '커뮤니티', link: '/community' },
  { id: 5, title: '상담', link: '/counseling' },
  { id: 6, title: '채용관리', link: '/recruit' },
  { id: 7, title: '마이페이지', link: '/personal' },
];

const HeaderList: FC = () => {
  return (
    <nav className="hidden lg:block space-x-8 font-bold">
      {headerConfig.map((header) => {
        return (
          <HeaderButton
            key={header.id}
            title={header.title}
            link={header.link}
          />
        );
      })}
    </nav>
  );
};

export default HeaderList;
