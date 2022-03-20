import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { RouteCustomObject } from './types';

export const createRoutesPath = (
  routeObject?: RouteCustomObject
): ReactNode => {
  if (routeObject) {
    const keys = Object.keys(routeObject);

    return keys.map((key) => (
      <Route
        path={routeObject[key].path}
        element={routeObject[key].element}
        children={
          routeObject[key].children
            ? createRoutesPath(routeObject[key].children)
            : undefined
        }
      />
    ));
  }
  return null;
};
