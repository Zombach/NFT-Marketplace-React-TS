import { SwitchItem } from '@components/Switch/Switch';

export const initSwitchItems = (/*dispatch: Dispatch*/) => {
  const switchItems: SwitchItem[] = [
    {
      onClick: () => {},
      item: 'Created',
    },
    {
      onClick: () => {},
      item: 'Owned',
    },

    {
      onClick: () => {},
      item: 'Collections',
    },

    {
      onClick: () => {},
      item: 'Splits',
    },
  ];

  return switchItems;
};
