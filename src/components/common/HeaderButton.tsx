import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderButtonProps {
  title: string;
  link: string;
}

const HeaderButton: FC<HeaderButtonProps> = ({ title, link }) => {
  return (
    <NavLink
      to={link}
      className="whitespace-nowrap"
      activeClassName="is-active"
    >
      {title}
    </NavLink>
  );
};

export default HeaderButton;
