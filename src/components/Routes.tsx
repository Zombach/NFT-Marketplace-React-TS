import { Details as BlogDetails } from '@pages/Blog/Details/Details';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Details as CollectionsDetails } from '@pages/Collections/Details/Details';
import { FC } from 'react';
import Blog from '@pages/Blog/Blog';
import Carts from '@pages/Carts/Carts';
import Checkout from '@pages/Checkout/Checkout';
import Collections from '@pages/Collections/Collections';
import CreateNFT from '@pages/CreateNFT/CreateNFT';
import Creators from '@pages/Creators/Creators';
import Home from '@pages/Home/Home';
import LogIn from '@pages/LogIn/LogIn';
import Marketplace from '@pages/Marketplace/Marketplace';
import NotFound from '@pages/NotFound/NotFound';
import Product from '@pages/Product/Product';
import Sellers from '@pages/Sellers/Sellers';
import SignUp from '@pages/SignUp/SignUp';
import Welcome from '@pages/Welcome/Welcome';

export const Routes: FC = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
      <Switch>
        <Route path="/" Component={Home}></Route>
        <Route path="/marketplace" Component={Marketplace}></Route>
        <Route path="/creators" Component={Creators}></Route>
        <Route path="/collections" Component={Collections}></Route>
        <Route path="/collections/details" Component={CollectionsDetails}></Route>
        <Route path="/product" Component={Product}></Route>
        <Route path="/carts" Component={Carts}></Route>
        <Route path="/checkout" Component={Checkout}></Route>
        <Route path="/logIn" Component={LogIn}></Route>
        <Route path="/signUp" Component={SignUp}></Route>
        <Route path="/welcome" Component={Welcome}></Route>
        <Route path="/sellers" Component={Sellers}></Route>
        <Route path="/createNFT" Component={CreateNFT}></Route>
        <Route path="/blog" Component={Blog}></Route>
        <Route path="/blog/details" Component={BlogDetails}></Route>
        <Route path="/404" Component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
