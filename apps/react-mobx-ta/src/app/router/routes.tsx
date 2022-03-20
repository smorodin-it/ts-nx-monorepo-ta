import { RouteCustomObject } from '@ts-nx-monorepo/utils-lib';
import { Outlet } from 'react-router-dom';

export const routes: RouteCustomObject = {
  index: {
    path: '/',
    element: (
      <>
        <div>Index</div>
        <Outlet />
      </>
    ),
    children: {
      renderId: {
        path: ':renderId',
        element: <>Render Element ID</>,
      },
    },
  },

  signUp: {
    path: 'sign-up',
    element: <>Sign Up</>,
  },
  signIn: {
    path: 'sign-in',
    element: <>Sign In</>,
  },
  forgotPassword: {
    path: 'forgot-password',
    element: <>Forgot Password</>,
  },

  notFound: {
    path: '*',
    element: <>Not Found</>,
  },
};
