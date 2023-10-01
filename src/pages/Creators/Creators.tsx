import './Creators.scss';
import { type CardSmall } from '@models/CardModels/CardModels';
import { cards as mock } from '@resources/moq/Creators';
import { useGetUsersQuery } from '@src/features/api/usersApi';
import Cards from './CardsRender/Cards';
import React, { type FC, useEffect, useState } from 'react';

export const Creators: FC = () => {
  const { data: users } = useGetUsersQuery();

  return <div className="creators">{users && <Cards cards={users} />}</div>;
};

export default Creators;
