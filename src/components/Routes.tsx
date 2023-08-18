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
    <Switch>
      <Route index element={<Home />}></Route>
      <Route path="marketplace" element={<Marketplace />}></Route>
      <Route path="creators" element={<Creators />}></Route>
      <Route path="collections" element={<Collections />}></Route>
      <Route path="collections/:profileId" element={<CollectionsDetails />}></Route>
      <Route path="product" element={<Product />}></Route>
      <Route path="carts" element={<Carts />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="logIn" element={<LogIn />}></Route>
      <Route path="signUp" element={<SignUp />}></Route>
      <Route path="welcome" element={<Welcome />}></Route>
      <Route path="sellers" element={<Sellers />}></Route>
      <Route path="createNFT" element={<CreateNFT />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="blog/details" element={<BlogDetails />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Switch>
  );
};

export default Routes;
