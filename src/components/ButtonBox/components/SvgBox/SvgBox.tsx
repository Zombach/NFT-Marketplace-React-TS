import './SvgBox.scss';
import { ReactComponent as LayerDefault } from './assets/layer-default.svg';
import React, { type FC, FunctionComponent, SVGProps, useEffect, useState } from 'react';

interface SvgBoxProps {
  className?: string;
  svgClassName?: string;
  svgPath?: string;
  SvgElement?: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
}

export const SvgBox: FC<SvgBoxProps> = ({ className, svgClassName, svgPath, SvgElement }) => {
  const [Svg, setSvg] = useState<
    FunctionComponent<
      SVGProps<SVGSVGElement> & {
        title?: string;
      }
    >
  >(LayerDefault);

  useEffect(() => {
    const loadSvgComponent = async (path: string) => {
      try {
        //Тут нужна реализация получения svg от бека
        // eslint-disable-next-line no-console
        console.log('path', path);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Ошибка загрузки');
      }
    };

    if (SvgElement) {
      setSvg(SvgElement);
    } else if (svgPath) {
      loadSvgComponent(svgPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Svg]);

  return <div className={className ?? 'svg-box'}>{Svg && <Svg className={svgClassName ?? 'background'} />}</div>;
};

export default SvgBox;
