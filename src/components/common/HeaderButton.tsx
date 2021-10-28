import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ISub } from '../../interfaces';

interface HeaderButtonProps {
  title: string;
  link: string;
  submenu: ISub[] | undefined;
}

const HeaderButton: FC<HeaderButtonProps> = ({ title, link, submenu }) => {
  return (
    <li>
      <NavLink
        to={link}
        activeClassName="is-active"
        className="hover:text-[#7c9ff2]"
      >
        {title}
      </NavLink>
      <ul className="sub">
        {submenu?.map((sub) => {
          return (
            <li>
              <NavLink key={sub.id} to={sub.link}>
                {sub.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default HeaderButton;
