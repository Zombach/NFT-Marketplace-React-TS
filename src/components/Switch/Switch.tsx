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

    if (box && button) {
      box.classList.add('active');
      button.classList.add('active');
    }
  };

  const resetButton = () => {
    const lastStateBox = document.getElementById(items[state].id);
    const lastButton = document.getElementById(`${items[state].id} button`);

    if (lastStateBox && lastButton) {
      lastStateBox.classList.remove('active');
      lastButton.classList.remove('active');
    }
  };

  return (
    <div className="switch-box">
      <div className="switch">
        {items.map((i, key) => {
          return (
            <ButtonBox buttonClassName="switch-button" id={i.id} buttonId={`${i.id} button`} key={key} onClick={() => onClickHandler(key, i)}>
              {i.item}
            </ButtonBox>
          );
        })}
      </div>
    </div>
  );
};

export default Switch;
