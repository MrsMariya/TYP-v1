import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '../styles';
import { ContentWrapp, WrapperApp } from '../styles/global';
import { RoutersMap } from '../utils/constants';
import Favorites from './pages/Favorites/Favorites';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SignInPage from './pages/SignInPage/SignInPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <WrapperApp>
        <ContentWrapp>
          <Routes>
            <Route path={RoutersMap.signIn} element={<SignInPage />} />
            <Route path={RoutersMap.main} element={<MainPage />} />
            <Route path={RoutersMap.favorites} element={<Favorites />} />
            <Route path={RoutersMap.notFound} element={<NotFoundPage />} />
          </Routes>
        </ContentWrapp>
      </WrapperApp>
    </>
  );
};

export default App;
