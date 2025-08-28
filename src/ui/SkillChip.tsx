import React from 'react';

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { SkillColorType } from '@components/skills/types.ts';

interface SkillChipProps {
  label: string;
  color?: SkillColorType;
  variant?: 'filled' | 'outlined' | undefined;
  showIcon?: boolean;
  isPrintMode?: boolean;
  icon?: React.ReactNode;
  sx?: object;
}

const SkillChip = React.forwardRef<HTMLDivElement, SkillChipProps>(
  (
    {
      label,
      color = 'default',
      showIcon = false,
      isPrintMode = false,
      variant = 'outlined',
      icon,
      sx = {},
      ...rest
    },
    ref
  ) => (
    <Chip
      ref={ref}
      label={label}
      color={isPrintMode ? 'default' : color}
      variant={variant}
      avatar={
        showIcon && !isPrintMode && icon ? (
          <Avatar sx={{ bgcolor: 'transparent' }}>{icon}</Avatar>
        ) : undefined
      }
      sx={{
        m: 0.5,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transform: 'translateY(-2px)',
          transition: 'all 0.2s ease-in-out',
        },
        ...sx,
      }}
      {...rest}
    />
  )
);

export default SkillChip;
