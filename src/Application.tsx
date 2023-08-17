import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { type FC } from 'react';
import Main from './pages/Main';
import NotFound from './pages/NotFound/NotFound';

export const Application: FC = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
      <Switch>
        <Route path="/" Component={Main}></Route>
        <Route path="/404" Component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};
