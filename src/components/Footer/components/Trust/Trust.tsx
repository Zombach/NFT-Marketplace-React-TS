import './Trust.scss';
import { type FC } from 'react';
export interface TrustProps {
  extraClassName?: string;
}
export const Trust: FC<TrustProps> = ({ extraClassName }) => {
  return (
    <div className={`trust ${extraClassName}`}>
      <p className="text-1">Privacy policy</p>
      <p className="text-2">Term of service</p>
      <p className="text-3">Language</p>
    </div>
  );
};

export default Trust;
