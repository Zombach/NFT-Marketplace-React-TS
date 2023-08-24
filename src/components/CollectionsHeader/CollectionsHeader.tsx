import './CollectionsHeader.scss';
import { ReactComponent as Columns } from './assets/columns.svg';
import { ReactComponent as Dropdown } from './assets/dropdown.svg';
import { ReactComponent as Filter } from './assets/filter.svg';
import { ReactComponent as List } from './assets/list.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import Button from '@components/ButtonBox/ButtonBox';
import React, { FC } from 'react';
import Svg from '@components/ButtonBox/components/SvgBox/SvgBox';

export const CollectionsHeader: FC = () => {
  return (
    <div className="collection-header-section">
      <Button SvgBox={<Filter />}>Filters</Button>
      <Button buttonClassName="button dropdown" SvgBox={<Dropdown />}>
        NFT's
      </Button>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search by collection, user or NFT..." />
        <Svg SvgElement={SearchIcon} />
      </div>
      <Button buttonClassName="button dropdown" SvgBox={<Dropdown />}>
        Trending
      </Button>
      <div className="switches">
        <Button SvgBox={<Columns />} />
        <Button SvgBox={<List />} />
      </div>
    </div>
  );
};

export default CollectionsHeader;
