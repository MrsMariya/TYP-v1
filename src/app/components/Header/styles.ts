import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderWrapper = styled.div`
  display: flex;
  background-color: ${colors.bg};
  flex-flow: row wrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 2rem;
`;
