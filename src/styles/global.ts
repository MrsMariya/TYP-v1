import styled from 'styled-components';
import { adaptive } from './adaptive';
import logo from '../assets/sibdev-logo.png';

export const styles = {
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  fonts: {
    fontFamily: 'Barlow',
    footerSize: '24px',
    headerSize: '28px',
  },
};

export const WrapperApp = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const ContentWrapp = styled.div`
  flex-grow: 1;
`;

export const ColumnCenteredWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  top: 50%;
  transform: translate(0, 50%);
  ${adaptive.maxWidth.mobile} {
    padding: 0 1rem;
  }
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.div`
  display: block;
  background-image: url(${logo});
  width: 5.5rem;
  height: 5.5rem;
`;
