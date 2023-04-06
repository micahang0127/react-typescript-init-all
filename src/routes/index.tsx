import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Error404 from '../pages/Error404';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import LocalesPage from '../pages/LocalesPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증을 하지 않아야만 접속가능 페이지 */}
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/signin" element={<LoginPage />} />
        </Route>

        {/* 인증을 해야 접속가능 페이지 */}
        <Route element={<PrivateRoute authentication />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/locale" element={<LocalesPage />} />
        </Route>

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(Router);
