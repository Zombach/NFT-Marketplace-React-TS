import { Details as BlogDetails } from '@pages/Blog/Details/Details';
import { Details as CollectionProfile } from '@pages/Collections/Details/CollectionProfile';
import { FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Blog from '@pages/Blog/Blog';
import Checkout from '@pages/Checkout/Checkout';
import Collections from '@pages/Collections/Collections';
import CreateNFT from '@pages/CreateNFT/CreateNFT';
import CreatorProfile from '@pages/Creators/CreatorProfile/CreatorProfile';
import Creators from '@pages/Creators/Creators';
import Home from '@pages/Home/Home';
import LogIn from '@pages/LogIn/LogIn';
import Marketplace from '@pages/Marketplace/Marketplace';
import NotFound from '@pages/NotFound/NotFound';
import Product from '@pages/Product/Product';
import SignUp from '@pages/SignUp/SignUp';
import Welcome from '@pages/Welcome/Welcome';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route index element={<Home />}></Route>
      <Route path="marketplace" element={<Marketplace />}></Route>
      <Route path="creators" element={<Creators />}></Route>
      <Route path="creators/:profileId" element={<CreatorProfile />}></Route>
      <Route path="collections" element={<Collections />}></Route>
      <Route path="collections/:profileId" element={<CollectionProfile />}></Route>
      <Route path="product" element={<Product />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="logIn" element={<LogIn />}></Route>
      <Route path="signUp" element={<SignUp />}></Route>
      <Route path="welcome" element={<Welcome />}></Route>
      <Route path="createNFT" element={<CreateNFT />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="blog/details" element={<BlogDetails />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Switch>
  );
};

export default Routes;
