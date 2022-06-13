import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../styles/global';
import { RoutersMap } from '../../../utils/constants';
import HeaderButton from '../HeaderButton/HeaderButton';
import { ButtonWrapper, HeaderWrapper } from './styles';

const Header = () => {
  const navigate = useNavigate();
  const BUTTONS = [
    {
      text: 'Поиск',
      onClick: () => {
        navigate(RoutersMap.main);
      },
    },
    {
      text: 'Избранное',
      onClick: () => {
        navigate(RoutersMap.favorites);
      },
    },
    {
      text: 'Выйти',
      onClick: () => {
        navigate(RoutersMap.signIn);
      },
    },
  ];

  return (
    <HeaderWrapper>
      <ButtonWrapper>
        <Logo />
        {BUTTONS.map(({ text, onClick }) => {
          return <HeaderButton key={text} text={text} onClick={onClick} />;
        })}
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
