import React from 'react';

import { Tooltip, TooltipProps } from '@mui/material';

type CustomTooltipProps = TooltipProps & {
  children: React.ReactElement;
};

/**
 * Кастомный компонент Tooltip с улучшенными настройками для мобильных устройств
 */
const CustomTooltip: React.FC<CustomTooltipProps> = ({
  children,
  title,
  arrow = true,
  placement,
  ...rest
}) => {
  return (
    <Tooltip
      title={title}
      arrow={arrow}
      placement={placement}
      enterTouchDelay={0}
      leaveTouchDelay={3000}
      disableTouchListener={false}
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
