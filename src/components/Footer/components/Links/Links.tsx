import './Links.scss';
import React, { type FC } from 'react';

export const Links: FC = () => {
  const indent = `${'\u00A0'}/${'\u00A0'}`;
  return (
    <div className="links">
      <p className="text part-1">Marketplace</p>
      <p className="text part-2">{indent}Collections</p>
      <p className="text part-3">{indent}Sellers</p>
      <p className="text part-4">{indent}Blog</p>
    </div>
  );
};

export default Links;
