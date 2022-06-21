import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SearchFormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  min-width: 50vw;
  min-height: 3em;
  background-color: ${colors.bg};
  margin: 0 auto;
  border-radius: 0.5rem;
`;

export const SearchTitle = styled.h1`
  color: ${colors.darkFont};
  font-weight: 700;
  text-align: center;
  padding: 2rem;
`;

export const SearchInput = styled.input`
  font-size: 1.5rem;
  min-width: 45rem;
  width: 100%;
  padding: 0 1rem;
  border: none;
  cursor: text;
  outline: none;
`;

export const SearchButton = styled.input`
  width: 9rem;
  height: 4rem;
  color: ${colors.bg};
  background-color: ${colors.submitButtonBg};
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  &:hover:not(:disabled) {
    background: ${colors.submitButtonHoverBg};
  }
  &:active:not(:disabled) {
    background: ${colors.submitButtonActiveBg};
  }
  transition: 0.3s;
`;
