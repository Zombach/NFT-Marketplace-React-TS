import './CollectionsHeader.scss';
import { ReactComponent as Columns } from './assets/columns.svg';
import { ReactComponent as Dropdown } from './assets/dropdown.svg';
import { ReactComponent as Filter } from './assets/filter.svg';
import { ReactComponent as List } from './assets/list.svg';
import { ReactComponent as SearchIcon } from './assets/search.svg';
import React, { FC } from 'react';

export const CollectionsHeader: FC = () => {
  return (
    <div className="collection-header-section">
      <button>
        <Filter />
        Filters
      </button>
      <button>
        NFT's <Dropdown />
      </button>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search by collection, user or NFT..." />
        <SearchIcon />
      </div>
      <button>
        Trending
        <Dropdown />
      </button>
      <div className="switches">
        <button>
          <Columns />
        </button>
        <button>
          <List />
        </button>
      </div>
    </div>
  );
};

export default CollectionsHeader;
