import './ExtraInfoItem.scss';
import { type FC } from 'react';

export interface ExtraInfoItemProps {
  leftText: string;
  RightItem: React.ReactNode;
}

export const ExtraInfoItem: FC<ExtraInfoItemProps> = ({ leftText, RightItem }) => {
  return (
    <>
      <div className="extra-info-item">
        <span>{leftText}</span>
        {RightItem}
      </div>
    </>
  );
};

export default ExtraInfoItem;
