import GlobalStyle from '../styles';
import { ContentWrapp, WrapperApp } from '../styles/global';
import SignInPage from './pages/SignInPage/SignInPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <WrapperApp>
        <ContentWrapp>
          <SignInPage />
        </ContentWrapp>
      </WrapperApp>
    </>
  );
};

export default App;
