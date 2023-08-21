import './CollectionsHeader.scss';
import { ReactComponent as Columns } from './assets/Columns.svg';
import { ReactComponent as Dropdown } from './assets/Dropdown.svg';
import { ReactComponent as Filter } from './assets/Filter.svg';
import { ReactComponent as List } from './assets/List.svg';
import { ReactComponent as SearchIcon } from './assets/Search.svg';
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
