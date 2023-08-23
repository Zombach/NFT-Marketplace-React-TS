import './SvgBox.scss';
import { ReactComponent as LayerDefault } from './assets/layer-default.svg';
import React, { type FC, FunctionComponent, SVGProps, useEffect, useState } from 'react';

interface SvgBoxProps {
  className?: string | undefined;
  svgClassName?: string | undefined;
  svgPath?: string | undefined;
  SvgElement?:
    | FunctionComponent<
        SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >
    | undefined;
}

export const SvgBox: FC<SvgBoxProps> = ({ className, svgClassName, svgPath, SvgElement }) => {
  className ??= 'svg-box';
  svgClassName ??= 'background';

  const [Svg, setSvg] = useState<
    FunctionComponent<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  >(LayerDefault);

  useEffect(() => {
    const loadSvgComponent = async (path: string | undefined) => {
      try {
        //Тут нужна реализация получения svg от бека
        // eslint-disable-next-line no-console
        console.log('path', path);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Ошибка загрузки');
      }
    };

    if (SvgElement !== undefined) {
      setSvg(SvgElement);
    } else if (svgPath !== undefined) {
      loadSvgComponent(svgPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Svg]);

  return <div className={className}>{Svg && <Svg className={svgClassName} />}</div>;
};

export default SvgBox;
