import './CollectionsHeader.scss';
import React, { FC } from 'react';
import columns from './assets/colums.svg';
import dropdown from './assets/dropdown.svg';
import filter from './assets/filter.svg';
import list from './assets/list.svg';
import searchIcon from './assets/search.svg';

export const CollectionsHeader: FC = () => {
  return (
    <div className="collection-header-section">
      <button>
        <img src={filter} alt="" />
        Filters
      </button>
      <button>
        NFT's <img src={dropdown} alt="" />
      </button>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search by collection, user or NFT..." />
        <img src={searchIcon} alt="" />
      </div>
      <button>
        Trending
        <img src={dropdown} alt="" />
      </button>
      <div className="switches">
        <button>
          <img src={columns} alt="" />
        </button>
        <button>
          <img src={list} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CollectionsHeader;
