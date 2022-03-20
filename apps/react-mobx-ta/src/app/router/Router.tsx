import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './routes';
import { createRoutesPath } from '@ts-nx-monorepo/utils-lib';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>{createRoutesPath(routes)}</Routes>
    </BrowserRouter>
  );
};

export default Router;
