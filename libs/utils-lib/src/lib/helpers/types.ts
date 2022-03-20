import { ReactNode } from 'react';

export interface RouteCustomObject {
  [key: string]: {
    path: string;
    element: ReactNode;
    private?: boolean;
    children?: RouteCustomObject;
  };
}
