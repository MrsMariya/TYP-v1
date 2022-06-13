import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.bg};
  width: 100%;
  max-width: 1440px;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  padding: 0 2rem 0 7rem;
  grid-template-columns: 10rem 10rem 30rem 10rem;
`;
