import './Switch.scss';
import { FC, useEffect, useState } from 'react';
import ButtonBox from '@components/ButtonBox/ButtonBox';

export interface SwitchProps {
  items: SwitchItem[];
  defaultState: number;
}

export interface SwitchItem {
  item: string;
  onClick: () => void;
  id: string;
}

export const Switch: FC<SwitchProps> = ({ items, defaultState }) => {
  if (defaultState >= items.length) {
    throw console.error('defaultState must be less then count of items');
  }

  const [state, setState] = useState<number>(defaultState);

  useEffect(() => {
    setActiveButton(items[defaultState].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHandler = (key: number, item: SwitchItem) => {
    if (key === state) {
      return;
    }
    setActiveButton(item.id);

    resetButton();
    setState(key);
  };

  const setActiveButton = (id: string) => {
    const box = document.getElementById(id);
    const button = document.getElementById(`${id} button`);

    if (box !== null && button !== null) {
      box.style.backgroundColor = '#7B61FF';
      button.style.color = 'white';
      button.style.fontWeight = '700';
    }
  };

  const resetButton = () => {
    const lastStateBox = document.getElementById(items[state].id);
    const lastButton = document.getElementById(`${items[state].id} button`);

    if (lastStateBox != null && lastButton !== null) {
      lastStateBox.style.backgroundColor = 'inherit';
      lastButton.style.color = 'inherit';
      lastButton.style.fontWeight = '400';
    }
  };

  return (
    <div className="switch-box">
      <div className="switch">
        {items.map((i, key) => {
          return (
            <ButtonBox id={i.id} buttonId={`${i.id} button`} key={key} onClick={() => onClickHandler(key, i)}>
              {i.item}
            </ButtonBox>
          );
        })}
      </div>
    </div>
  );
};

export default Switch;
