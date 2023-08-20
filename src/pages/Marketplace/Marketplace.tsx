import './Marketplace.scss';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';
import React, { type FC } from 'react';

export const Marketplace: FC = () => {
  return (
    <div className="market-place-section">
      <CollectionsHeader />
    </div>
  );
};

export default Marketplace;
