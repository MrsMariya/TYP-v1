import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderButtonStyled = styled.button`
  font-size: 20px;
  font-weight: 500;
  max-width: 12rem;
  line-height: 1rem;
  color: ${colors.submitButtonBg};
  border: none;
  padding: 0 10px;
  margin: 0 10px;
  background-color: ${colors.bg};
  transition: 0.3s ease-in background-color;
  &:hover {
    color: ${colors.inputHoverBorder};
  }
  &:active {
    color: ${colors.submitButtonActiveBg};
  }
`;
