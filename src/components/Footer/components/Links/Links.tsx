import './Links.scss';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

export const Links: FC = () => {
  const indent = `${'\u00A0'}/${'\u00A0'}`;
  return (
    <div className="links">
      <Link to="/" className="text part-1">
        Home
      </Link>
      <Link to="/marketplace" className="text part-1">
        {indent}Marketplace
      </Link>
      <Link to="/collections" className="text part-2">
        {indent}Collections
      </Link>
      <Link to="/creators" className="text part-3">
        {indent}Creators
      </Link>
    </div>
  );
};

export default Links;
