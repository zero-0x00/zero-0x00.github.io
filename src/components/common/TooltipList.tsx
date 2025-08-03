import { ReactNode } from 'react';
import List from '@mui/material/List';
import { SxProps, Theme } from '@mui/material/styles';

interface TooltipListProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const TooltipList = ({ children, sx }: TooltipListProps) => {
  return (
    <List
      dense
      sx={{
        listStyleType: 'disc',
        pl: 4,
        '& .term': {
          borderBottom: '1px dotted',
          mx: 0.5,
        },
        ...sx,
      }}
    >
      {children}
    </List>
  );
};

export default TooltipList;
