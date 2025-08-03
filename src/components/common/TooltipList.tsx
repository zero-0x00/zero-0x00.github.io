import { ReactNode } from 'react';
import List from '@mui/material/List';
import { SxProps, Theme } from '@mui/material/styles';
import { useIsPrintMode } from '../../hooks/useIsPrintMode.tsx';

interface TooltipListProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const TooltipList = ({ children, sx }: TooltipListProps) => {
  const isPrintMode = useIsPrintMode();
  return (
    <List
      dense
      sx={{
        listStyleType: 'disc',
        pl: 4,
        '& .term': {
          borderBottom: isPrintMode ? 'none' : '1px dotted',
          mx: 0.5,
          display: 'inline-flex',
        },
        ...sx,
      }}
    >
      {children}
    </List>
  );
};

export default TooltipList;
