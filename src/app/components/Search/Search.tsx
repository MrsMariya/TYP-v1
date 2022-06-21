import { SearchButton, SearchForm, SearchFormWrapper, SearchInput, SearchTitle } from './styles';

const Search = () => {
  return (
    <SearchFormWrapper>
      <SearchTitle>Поиск видео</SearchTitle>
      <SearchForm>
        <SearchInput placeholder="Что хотите посмотреть?" />
        <SearchButton type="submit" value="Найти" />
      </SearchForm>
    </SearchFormWrapper>
  );
};

export default Search;
