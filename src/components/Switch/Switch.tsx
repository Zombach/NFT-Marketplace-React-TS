import './Switch.scss';
import { FC, useState } from 'react';
import ButtonBox, { ButtonBoxProps } from '@components/ButtonBox/ButtonBox';

export interface SwitchProps {
  items: SwitchItem[];
  defaultState: number;
}

export interface SwitchItem {
  item: string;
  onClick: () => {};
  id: string;
}

export const Switch: FC<SwitchProps> = ({ items, defaultState }) => {
  if (defaultState >= items.length) {
    throw console.error('defaultState must be less then count of items');
  }

  const [state, setState] = useState<number>(defaultState);
  const onClickHandler = (key: number, item: SwitchItem) => {
    if (key === state) {
      return;
    }
    const box = document.getElementById(item.id);
    const button = document.getElementById(`${item.id} button`);

    if (box !== null && button !== null) {
      box.style.backgroundColor = '#7B61FF';
      button.style.color = 'white';
      button.style.fontWeight = '700';
    }

    const lastStateBox = document.getElementById(items[state].id);
    const lastButton = document.getElementById(`${items[state].id} button`);

    if (lastStateBox != null && lastButton !== null) {
      lastStateBox.style.backgroundColor = 'inherit';
      lastButton.style.color = 'inherit';
      lastButton.style.fontWeight = '400';
    }
    setState(key);
  };

  return (
    <div className="switch">
      {items.map((i, key) => {
        return (
          <ButtonBox id={i.id} buttonId={`${i.id} button`} key={key} onClick={() => onClickHandler(key, i)}>
            {i.item}
          </ButtonBox>
        );
      })}
    </div>
  );
};

export default Switch;
