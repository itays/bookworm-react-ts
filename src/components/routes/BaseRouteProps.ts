import { RouteProps } from 'react-router-dom';

export interface BaseRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: any;
}