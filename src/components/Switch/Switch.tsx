import './Switch.scss';
import { FC, useState } from 'react';
import ButtonBox from '@components/ButtonBox/ButtonBox';

export interface SwitchProps {
  items: SwitchItem[];
  activeItem: number;
}

export interface SwitchItem {
  item: string;
  onClick: () => void;
}

export const Switch: FC<SwitchProps> = ({ items, activeItem }) => {
  const [state, setState] = useState<number>(activeItem);

  const onClickHandler = (key: number, item: SwitchItem) => {
    if (key === state) {
      return;
    }

    item.onClick();

    setState(key);
  };

  return (
    <div className="switch-box">
      <div className="switch">
        {items.map((i, key) => (
          <ButtonBox key={key} buttonClassName="switch-button" buttonId={`button`} onClick={() => onClickHandler(key, i)} isActive={key === state}>
            {i.item}
          </ButtonBox>
        ))}
      </div>
    </div>
  );
};

export default Switch;
