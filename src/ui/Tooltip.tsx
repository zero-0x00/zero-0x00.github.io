import React from 'react';

import { Tooltip as OriginalTooltip, TooltipProps } from '@mui/material';

type CustomTooltipProps = TooltipProps & {
  children: React.ReactElement;
};

/**
 * Кастомный компонент Tooltip с улучшенными настройками для мобильных устройств
 */
const Tooltip: React.FC<CustomTooltipProps> = ({
  children,
  title,
  arrow = true,
  placement,
  ...rest
}) => {
  return (
    <OriginalTooltip
      title={title}
      arrow={arrow}
      placement={placement}
      enterTouchDelay={0}
      leaveTouchDelay={3000}
      disableTouchListener={false}
      {...rest}
    >
      {children}
    </OriginalTooltip>
  );
};

export default Tooltip;
